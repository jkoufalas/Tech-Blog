const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

//process /dashboard call, since user must be logged in then use middleware withAuth to filter
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
          where: {
            id: req.session.user_id,
          },
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//process /dashboard/edit/id call, since user must be logged in then use middleware withAuth to filter
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // Get single post from id and JOIN with user data
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('editPost', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//process /dashboard/new call, since user must be logged in then use middleware withAuth to filter
router.get('/new', withAuth, async (req, res) => {
  try {
    //render page for new post by user
    res.render('new', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
