document.getElementById("fetch-reviews").addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: fetchExpandedAndCleanedReviews,
      },
      (injectionResults) => {
        if (injectionResults && injectionResults[0].result) {
          displayReviews(injectionResults[0].result);
        }
      }
    );
  });
});

function fetchExpandedAndCleanedReviews() {
  const readMoreButtons = document.querySelectorAll(
    "[aria-label='Read more of this review']"
  );
  readMoreButtons.forEach((button) => button.click());

  return new Promise((resolve) => {
    setTimeout(() => {
      // Try multiple selectors for different review structures
      const reviewSelectors = [
        ".review-text",
        "[data-hook='review-body']",
        ".review-text-content",
        ".a-size-base.review-text",
        ".cr-original-review-text",
        ".review-body-text",
      ];

      let reviews = [];
      reviewSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        reviews = reviews.concat(Array.from(elements));
      });

      // Remove duplicates
      reviews = [...new Set(reviews)];

      let reviewTexts = reviews.map((review) => review.textContent.trim());

      // Clean up review texts more thoroughly
      reviewTexts = reviewTexts.map((text) => {
        // Remove "Read less" at the end
        text = text.replace(/Read less$/i, "").trim();

        // Remove JavaScript function code
        text = text.replace(/\(function\(\)\s*\{[^}]*\}\(\)\);?/g, "").trim();

        // Remove CSS styles
        text = text.replace(/\.[\w-]+\s*\{[^}]*\}/g, "").trim();

        // Remove any remaining JavaScript patterns
        text = text.replace(/P\.when\([^)]*\)\.execute\([^)]*\)/g, "").trim();

        // Remove common non-review patterns
        text = text.replace(/toggleExpanderAriaLabel\([^)]*\)/g, "").trim();
        text = text.replace(/outline:\s*[^;]+;?/g, "").trim();
        text = text.replace(/border-radius:\s*[^;]+;?/g, "").trim();
        text = text.replace(/outline-offset:\s*[^;]+;?/g, "").trim();

        // Remove empty lines and extra whitespace
        text = text.replace(/\s+/g, " ").trim();

        return text;
      });

      // Filter out empty texts and texts that are clearly not reviews
      reviewTexts = reviewTexts.filter((text) => {
        return (
          text.length > 10 &&
          !text.startsWith("(function") &&
          !text.startsWith("P.when") &&
          !text.startsWith(".") &&
          !text.includes("toggleExpanderAriaLabel") &&
          !text.includes("outline:") &&
          !text.includes("border-radius:") &&
          !text.includes("outline-offset:") &&
          !/^[0-9\s]*$/.test(text) && // Not just numbers
          !text.includes("function(") &&
          !text.includes("execute(")
        );
      });

      resolve(reviewTexts);
    }, 1000);
  });
}

function displayReviews(reviews) {
  const reviewsContainer = document.getElementById("reviews");
  reviewsContainer.innerHTML = "";

  if (reviews.length === 0) {
    reviewsContainer.innerHTML =
      '<p class="text-gray-600">No reviews found on this page.</p>';
    return;
  }

  reviews.forEach((review, index) => {
    const reviewElement = document.createElement("div");
    reviewElement.className =
      "p-2 bg-white border border-gray-200 rounded shadow";
    reviewElement.textContent = `${index + 1}. ${review}`;
    reviewsContainer.appendChild(reviewElement);
  });
}
