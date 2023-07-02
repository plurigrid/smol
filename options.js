```javascript
// Options.js

// Get DOM elements
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

// Save options
function saveOptions() {
  const comments = document.getElementById('commentInput').value;
  chrome.storage.sync.set({
    comments: comments
  }, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restore options
function restoreOptions() {
  chrome.storage.sync.get({
    comments: ''
  }, function(items) {
    document.getElementById('commentInput').value = items.comments;
  });
}

// Clear options
function clearOptions() {
  chrome.storage.sync.clear(function() {
    const status = document.getElementById('status');
    status.textContent = 'Options cleared.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', restoreOptions);
saveButton.addEventListener('click', saveOptions);
clearButton.addEventListener('click', clearOptions);
```