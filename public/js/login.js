const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

//if user pressed sign uo button go to sign up page
const signformLoc = async (event) => {
  document.location.assign('/sign-up');
};

//event listner for sign up button
const signup = document.querySelector('#signup');
signup.addEventListener('click', signformLoc);

//event listener for login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
