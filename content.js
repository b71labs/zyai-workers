// Listen for messages from popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'GET_SELECTION') {
    sendResponse({ text: window.getSelection().toString() });
  }
  if (msg.type === 'GET_PAGE_INFO') {
    sendResponse({ 
      url: window.location.href,
      title: document.title,
    });
  }
});
