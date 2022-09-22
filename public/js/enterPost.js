const newFormHandler = async (event) => {
  let element = event.target;
  //only continue if the target is a button
  if (element.matches('button') === true) {
    //get the post value which is the id of the post
    const id = event.target.getAttribute('post');
    //redirect to that post to view
    document.location.assign(`/post/${id}`);
  }
};

//event listener on container of posts
document.querySelector('.post').addEventListener('click', newFormHandler);
