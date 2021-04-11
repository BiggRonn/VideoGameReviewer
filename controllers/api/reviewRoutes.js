const router = require("express").Router();
const { Review, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const axios = require("axios");

router.get("/", (req, res) => {
  Review.findAll({
    attributes: ["id", "game_title", "game_genre", "platform", "description"],
    include: [
      { model: User, attributes: ["name"] },
      {
        model: Comment,
        attributes: ["id", "content", "user_id", "review_id", "created_at"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:name", async (req, res) => {
  const slug = req.params.name.toLowerCase().replace(' ', '-');

    //console.log(slug);

    const apiKey = process.env.API_KEY
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`

    //console.log(url);

    var rawgData = await axios.get(url);

    const response = rawgData.data;

    const gameTitle = response.name_original;
    const gameDesc = response.description_raw;

    
    const gameGenre = response.genres.map(
      (genre) => (genre = genre.name)
    ).join(", ");

    const gamePlatforms = response.parent_platforms.map(
      (platform) => (platform = platform.platform.name)).join(", ")
    ;
    
    const gameCard = {
      title: gameTitle,
      genre: gameGenre,
      platform: gamePlatforms,
      description: gameDesc,
    };
    
    res.render('create-review', gameCard);
});


router.post("/", withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Review.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
