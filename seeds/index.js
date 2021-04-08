//Importing sequelize and getting data from our models
const sequelize = require('../config/connection')
const { User, Review, Comment } = require('../models')

const userData = require('./users-seed')
const reviewData = require('./review-seed')
const commentData = require('./comment-seed')
//Display the data
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await reviewData();
    await commentData();
  
    process.exit(0);
  };
  seedDatabase();