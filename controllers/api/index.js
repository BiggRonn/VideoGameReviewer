const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const commentRoutes = require('./commentRoutes');
const rawgRoutes = require('./rawgRoutes');



router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/comments', commentRoutes);
router.use('/search', rawgRoutes);

module.exports = router;
