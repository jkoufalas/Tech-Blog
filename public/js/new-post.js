//redirect to new post page
const newPostHandler = async (event) => {
  console.log(event.target);
  document.location.assign(`/dashboard/new`);
};

//listener for new post button
document.querySelector('#new-post').addEventListener('click', newPostHandler);
