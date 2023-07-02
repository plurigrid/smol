```javascript
let comments = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ comments: [] });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'SAVE_COMMENT') {
    saveComment(request.data);
  } else if (request.message === 'CLEAR_COMMENTS') {
    clearComments();
  } else if (request.message === 'GET_COMMENTS') {
    getComments(request.data, sendResponse);
  }
  return true;
});

function saveComment(data) {
  comments.push(data);
  chrome.storage.sync.set({ comments: comments });
}

function clearComments() {
  comments = [];
  chrome.storage.sync.set({ comments: comments });
}

function getComments(url, sendResponse) {
  chrome.storage.sync.get('comments', (result) => {
    const pageComments = result.comments.filter(comment => comment.url === url);
    sendResponse(pageComments);
  });
}
```