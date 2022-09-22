const router = require('express').Router();
const dashRoutes = require('./dashRoutes');

router.use('/', dashRoutes);

module.exports = router;
