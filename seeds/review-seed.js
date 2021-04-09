const { Review } = require('../models')

const reviewData = [
    {
        id: 1,
        game_title: 'NeverWinter Nights',
        game_genre: 'RPG',
        description: 'A fantasy role playing game where you kill things and level up.',
        user_id: 1
        
    },
    {
        id: 2,
        game_title: 'Call of Duty',
        game_genre: 'First-person shooter',
        description: 'Shoot people online and zombies.',
        user_id: 2
        
    },
    {
        id: 3,
        game_title: 'Portal',
        game_genre: 'Puzzle',
        description: 'Gun shoots portals, solve puzzles',
        user_id: 3
        
    }
]
const seedReviews = () => Review.bulkCreate(reviewData)

module.exports = seedReviews;