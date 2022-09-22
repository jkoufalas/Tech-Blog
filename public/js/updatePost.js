const updateFormHandler = async (event) => {
  //prevent default submission handler
  event.preventDefault();

  //read in variables
  const title = document.querySelector('#update-title').value.trim();
  const content = document.querySelector('#update-content').value;
  const id = document.querySelector('.update-form').getAttribute('post');

  //make sure there is a title and content otherwise dont post it
  if (title && content) {
    //update post by calling put to server with id
    const response = await fetch(`/post/${id}`, {
      method: 'PUT',
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

const deleteFormHandler = async (event) => {
  //read in variables
  const id = document.querySelector('.update-form').getAttribute('post');

  //delete post by calling delete to server with id
  const response = await fetch(`/post/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  //check response and notify or move to new page
  if (response.ok) {
    document.location.assign(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

//event listener for update form submit
document
  .querySelector('.update-form')
  .addEventListener('submit', updateFormHandler);

//event listener for go to login page
document.querySelector('#delete').addEventListener('click', deleteFormHandler);
