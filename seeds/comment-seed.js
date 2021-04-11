//Listing out all the data below into the comments using 'require'
const { Comment } = require('../models')
//Importing comment data
const commentData =  [
  {
        user_id: 1,
        review_id: 3,
        content: "This is bananas!"
    },
    {
        user_id: 4,
        review_id: 1,
        content: "There is a God!"
    },
    {
        user_id: 1,
        review_id: 2,
        content: "Let's live a little."
    },
    {
        user_id: 3,
        review_id: 3,
        content: "Welcome to the league"
    },
    {
        user_id: 3,
        review_id: 2,
        content: "This is my life here!"
    },
    {
        user_id: 3,
        review_id: 1,
        content: "Can you match my skills bruh!"
    },
    {
        user_id: 4,
        review_id: 2,
        content: "Okay i can live with that."
    },
    {
        user_id: 2,
        review_id: 1,
        content: "Keep stroking the wool!"
    }
]
//Creating the data for the comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 