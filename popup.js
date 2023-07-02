```javascript
let comments = [];
let currentURL = '';

document.getElementById('saveButton').addEventListener('click', saveComment);
document.getElementById('clearButton').addEventListener('click', clearComments);

function saveComment() {
    let commentInput = document.getElementById('commentInput');
    let comment = commentInput.value;
    commentInput.value = '';

    let commentData = {
        text: comment,
        url: currentURL,
        timestamp: new Date().toISOString()
    };

    comments.push(commentData);

    chrome.storage.sync.set({[currentURL]: comments}, function() {
        console.log('Comment saved');
    });

    displayComments();
}

function clearComments() {
    comments = [];
    chrome.storage.sync.remove(currentURL, function() {
        console.log('Comments cleared');
    });

    displayComments();
}

function getComments() {
    chrome.storage.sync.get(currentURL, function(data) {
        comments = data[currentURL] || [];
        displayComments();
    });
}

function displayComments() {
    let commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    comments.forEach(function(comment) {
        let listItem = document.createElement('li');
        listItem.textContent = comment.text;
        commentList.appendChild(listItem);
    });
}

function init() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        currentURL = tabs[0].url;
        getComments();
    });
}

document.addEventListener('DOMContentLoaded', init);
```