const router = require('express').Router();

const apiRoutes = require('./api');
const dashRoutes = require('./dashboard');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./post');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/post', postRoutes);

module.exports = router;
