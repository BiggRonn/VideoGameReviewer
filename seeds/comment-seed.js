//Listing out all the data below into the comments using 'require'
const { Comment } = require('../models')
//Importing comment data
const commentData =  [
  {
        user_id: 1,
        post_id: 5,
        comment_text: "This is bananas!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "There is a God!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Let's live a little."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Welcome to the league"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is my life here!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Can you match my skills bruh!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Okay i can live with that."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Keep stroking the wool!"
    }
]
//Creating the data for the comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 