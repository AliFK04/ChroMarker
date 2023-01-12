chrome.action.onClicked.addListener('click', () => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['draw.js', 'p5.js']
      });
    });
