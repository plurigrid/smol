```javascript
let comments = [];
let currentURL = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'GET_COMMENTS') {
        currentURL = request.url;
        getComments();
        sendResponse({message: 'Comments retrieved', comments});
    } else if (request.message === 'SAVE_COMMENT') {
        saveComment(request.comment);
        sendResponse({message: 'Comment saved'});
    } else if (request.message === 'CLEAR_COMMENTS') {
        clearComments();
        sendResponse({message: 'Comments cleared'});
    }
});

function getComments() {
    chrome.storage.sync.get([currentURL], function(result) {
        if (result[currentURL]) {
            comments = result[currentURL];
        } else {
            comments = [];
        }
    });
}

function saveComment(comment) {
    comments.push(comment);
    let saveObj = {};
    saveObj[currentURL] = comments;
    chrome.storage.sync.set(saveObj, function() {
        console.log('Comment saved');
    });
}

function clearComments() {
    comments = [];
    let clearObj = {};
    clearObj[currentURL] = [];
    chrome.storage.sync.set(clearObj, function() {
        console.log('Comments cleared');
    });
}
```