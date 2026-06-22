chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'zyai-ask',
    title: 'Ask ZyAI: "%s"',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'zyai-ask') {
    chrome.storage.session.set({ selectedText: info.selectionText });
    chrome.action.openPopup();
  }
});
