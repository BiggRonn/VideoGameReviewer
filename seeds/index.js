const sequelize = require('../config/connection')
const { User, Review, Comment } = require('../models')

const userData = require('./users-seed')
const reviewData = require('./review-seed')
const commentData = require('./comment-seed')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await reviewData();
    await commentData();
  
    process.exit(0);
  };
  seedDatabase();