//process logout
const logout = async () => {
  //destroy session on server
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  //process response
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

//event listener for logout form
document.querySelector('#logout').addEventListener('click', logout);
