chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.reviews) {
    console.log("Received reviews:", message.reviews);
    const genuineReviews = message.reviews.filter(
      (review) => !/buy this now|best purchase/i.test(review)
    );
    sendResponse({ status: "success", genuineReviews });
  }
});
