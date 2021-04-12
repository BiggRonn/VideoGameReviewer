const { Review } = require('../models')

const reviewData = [
    {
        id: 1,
        game_title: 'NeverWinter Nights',
        game_genre: 'Adventure, RPG',
        description: 'Neverwinter Nights is a classic Dungeons & Dragons RPG— enhanced for iOS! Explore 100+ hours of gameplay including the original campaign, plus six free DLC adventures. Play solo or team up with friends for a grand adventure across the Forgotten Realms. DEVICE RECOMMENDATION Optimized for iPads Recommended for iPhones with screen sizes of 7 inches or larger CONTENT Neverwinter Nights (Classic Campaign) Shadows of Undrentide (Free DLC) Hordes of the Underdark (Free DLC) Kingmaker (Free DLC) ShadowGuard (Free DLC) Witch’s Wake (Free DLC) Adventure Pack (Free DLC) FEATURES Re-engineered UI for iPads and iPhones - Virtual joystick and context sensitive button makes gameplay easy - UI Scales automatically or can be set to your liking Cross-Platform Multiplayer - Adventure with friends! - Cross-play support includes compatibility with mobile, tablets, computers and consoles - Join persistent worlds, with community-run campaigns and up to 250 players Improved Graphics - Pixel shaders and post-processing effects make for cleaner graphics and visuals - Adjustable contrast, vibrance, and depth of field options STORY CONTENT: Neverwinter Nights (Original Campaign) You find yourself at the center of intrigue, betrayal, and dark magic in Neverwinter Nights. Journey through dangerous cities, monster filled dungeons and deep into uncharted wilderness in search of the cure for a cursed plague ravaging the city of Neverwinter. Shadows of Undrentide (Free DLC Expansion) Another adventure begins in the updated expansion, Shadows of Undrentide! Charged by your master to recover four ancient artifacts, travel from the Silver Marches to unravel mysteries of a long-dead magical civilization. Hordes of the Underdark (Free DLC Expansion) This expansion continues the adventure started in Shadows of Undrentide. Journey into the ever-more bizarre and hostile depths of Undermountain to challenge a gathering evil. Three Premium Modules (Free DLC) Discover over 40 hours of new Dungeons & Dragons adventures across the Forgotten Realms in these premium modules for Neverwinter Nights: - Kingmaker - ShadowGuard - Witch’s Wake - Adventure Pack LANGUAGES - English ©2020 Beamdog. ©2020 Wizards of the Coast LLC. All Rights Reserved. Wizards of the Coast, Dungeons & Dragons, Neverwinter Nights, and D&D are trademarks of Wizards of the Coast LLC. Hasbro and its logo are registered trademarks of HASBRO, Inc. All Rights Reserved.',
        platform: 'PC, iOS',
        user_id: 1
        
    },
    {
        id: 2,
        game_title: 'Trine',
        game_genre: 'Action, Adventure, Arcade',
        description: 'Trine is a puzzle game in the genre of platforming. The gameplay of this game is based on a full interaction of three characters, and without the unique ability of one or another, you will not be able to pass a specific level. The action takes place in a fictional Kingdom, where three main characters will try to restore the balance after their great ruler passed away. Long battles ravaged the entire state, frightening and horrific times came for all the people. Throughout the game, you ought to solve puzzles and riddles of varying difficulty, using the unique skills of each of the three characters (Pontius the knight, Zoya the thief and Amadeus the wizard). The primary focus is made on their interaction with each other to surmount difficulties and obstacles. The game has a unique cooperative mode. It means that players can join the game at any time they like. To overcome the obstructions that arise as the plot develops, players can combine their strengths and abilities, what significantly facilitates the passage of the game.',
        platform: 'PC, PlayStation',
        user_id: 2
        
    },
    {
        id: 3,
        game_title: 'Portal',
        game_genre: 'Action, Adventure, Puzzle',
        description: 'Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. Silent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see. White environments will guide the player’s portal placement, forcing them to pay attention to the surroundings. Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.',
        platform: 'PC, PlayStation, Xbox, Android, Apple Macintosh, Linux',
        user_id: 3
        
    }
]
const seedReviews = () => Review.bulkCreate(reviewData)

module.exports = seedReviews;