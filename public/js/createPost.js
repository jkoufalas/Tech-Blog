const postFormHandler = async (event) => {
  //prevent default submission handler
  event.preventDefault();

  //read in variables
  const title = document.querySelector('#new-title').value.trim();
  const content = document.querySelector('#new-content').value;

  //make sure there is a title and content otherwise dont post it
  if (title && content) {
    //post to api to create post
    const response = await fetch('/post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    //check response and notify or move to new page
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
};

//event listener on form
document.querySelector('.new-form').addEventListener('submit', postFormHandler);
