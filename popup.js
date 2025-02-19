document.getElementById("fetch-reviews").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: fetchExpandedAndCleanedReviews
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
            const reviews = document.querySelectorAll(".review-text");
            let reviewTexts = Array.from(reviews).map((review) => review.textContent.trim());

            reviewTexts = reviewTexts.map((text) => {
                return text.replace(/Read less$/i, "").trim();
            });

            reviewTexts = reviewTexts.filter((text) => !text.startsWith("(function(){"));

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
