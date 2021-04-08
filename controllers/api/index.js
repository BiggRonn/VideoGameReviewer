const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
