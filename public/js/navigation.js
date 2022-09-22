const navigationSpan = document.querySelector('.nav');

//use function so both logout buttons utilise common method
const logoutLoc = async (event) => {
  let element = event.target;
  let id = element.getAttribute('id');

  if (element.matches('button') === true) {
    if (id == 'homeNav') {
      document.location.assign('/');
    } else if (id == 'dashboard') {
      document.location.assign('/dashboard');
    } else {
      document.location.assign('/login');
    }
  }
};

//event listener for navigation buttons
navigationSpan.addEventListener('click', logoutLoc);

//listener tech blog header link to homepage
const home = document.querySelector('#homeButton');

//go to homepage
const homeLoc = async (event) => {
  document.location.assign('/');
};

home.addEventListener('click', homeLoc);
