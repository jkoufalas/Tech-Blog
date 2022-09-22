const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  //this is used on all the middleware so that any function or page that requires login be routed there
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
