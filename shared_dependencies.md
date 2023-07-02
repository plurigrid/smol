Shared Dependencies:

1. Exported Variables:
   - `comments`: An array to store the comments for each webpage.
   - `currentURL`: A string to store the current webpage URL.

2. Data Schemas:
   - `CommentSchema`: A schema for the comments, including fields for the comment text, the URL of the webpage, and the timestamp.

3. ID Names of DOM Elements:
   - `commentInput`: The input field for the user to type their comment.
   - `commentList`: The container to display the list of comments.
   - `saveButton`: The button to save the comment.
   - `clearButton`: The button to clear all comments.

4. Message Names:
   - `SAVE_COMMENT`: A message sent when a new comment is saved.
   - `CLEAR_COMMENTS`: A message sent when all comments are cleared.
   - `GET_COMMENTS`: A message sent to retrieve all comments for a specific webpage.

5. Function Names:
   - `saveComment()`: A function to save a new comment.
   - `clearComments()`: A function to clear all comments.
   - `getComments()`: A function to retrieve all comments for a specific webpage.
   - `displayComments()`: A function to display the comments on the webpage.
   - `init()`: A function to initialize the extension and set up event listeners.