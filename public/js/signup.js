const signupFormHandler = async (event) => {
  //prevent default submission handler
  event.preventDefault();

  //read in variables
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //make sure there is a username and password otherwise dont post it
  if (username && password) {
    //post to api to create user
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //check response and notify or move to new page
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

//redirect to login page
const gotoLoginHandler = async (event) => {
  console.log(event.target);
  document.location.assign(`/login`);
};

//event listener for go to login page
document
  .querySelector('#gotoLogin')
  .addEventListener('click', gotoLoginHandler);

//event listener for sign up form submit
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
