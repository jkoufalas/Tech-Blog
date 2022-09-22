const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//process /post/id call, since user must be logged in then use middleware withAuth to filter
router.get('/:id', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data and comments (join comments on user)
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: { exclude: ['password'] },
            },
          ],
        },
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });

    console.log(post);

    // Pass serialized data and session flag into template
    res.render('post', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//process post call on /post, since user must be logged in then use middleware withAuth to filter
router.post('/', withAuth, async (req, res) => {
  try {
    //create post with JSON data
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//process put call on /post/id, since user must be logged in then use middleware withAuth to filter
router.put('/:id', withAuth, async (req, res) => {
  try {
    //update post with JSON data
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          //where is limited to the id of the post submitted and also the user_id must be the same as the session to avoid tampering
          user_id: req.session.user_id,
          id: req.params.id,
        },
      }
    );

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//process post call on /post/comment, since user must be logged in then use middleware withAuth to filter
router.post('/comment', withAuth, async (req, res) => {
  try {
    //create comment from JSON data
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//process delete call on /post, since user must be logged in then use middleware withAuth to filter
router.delete('/:id', withAuth, async (req, res) => {
  try {
    //delete post by destroy command
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
