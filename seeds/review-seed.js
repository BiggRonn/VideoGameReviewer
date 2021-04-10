const { Review } = require('../models')

const reviewData = [
    {
        id: 1,
        game_title: 'NeverWinter Nights',
        game_genre: 'RPG',
        description: 'A fantasy role playing game where you kill things and level up.',
        comment: 'this game is really fun!',
        user_id: 1
        
    },
    {
        id: 2,
        game_title: 'Call of Duty',
        game_genre: 'First-person shooter',
        description: 'Shoot people online and zombies.',
        comment: 'this game is awesome!',
        user_id: 2
        
    },
    {
        id: 3,
        game_title: 'Portal',
        game_genre: 'Puzzle',
        description: 'Gun shoots portals, solve puzzles',
        comment: 'this game is hard, but I enjoyed it!',
        user_id: 3
        
    }
]
const seedReviews = () => Review.bulkCreate(reviewData)

module.exports = seedReviews;