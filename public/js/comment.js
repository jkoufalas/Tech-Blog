const commentFormHandler = async (event) => {
  //prevent default submission handler
  event.preventDefault();

  //read in variables
  const comment = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('.post').getAttribute('post');

  //make sure there is a comment otherwise dont post it
  if (comment) {
    //post to api the comment
    const response = await fetch('/post/comment', {
      method: 'POST',
      body: JSON.stringify({ post_id, comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    //check response and notify or move to new page
    if (response.ok) {
      document.location.assign(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

//event listener on form
document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
