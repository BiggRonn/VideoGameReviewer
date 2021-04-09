
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#game-title").value;

  if (name) {
    const response = await fetch(`/api/search?name=${name}`).then((data) =>
      data.json()
    );

    console.log(response);

    const gameTitle = response.name_original;
    const gameDesc = response.description_raw;

    let gName = "";
    const gameGenre = response.genres.map(
      (genre) => (gName += genre.name + " ")
    );

    let platforms = "";
    const gamePlatforms = response.parent_platforms.map(
      (platform) => (platforms += platform.name + " ")
    );

    const gameCard = {
      title: gameTitle,
      genre: gameGenre,
      platform: gamePlatforms,
      description: gameDesc,
    };

    res.render("review", { gameCard });

    //add a .then or promise catch
    // console.log(game);

    //console.log(game.Promise);
    // document.location.replace("/gamecard");
    // console.log(game.description_raw);

    // if (response.ok) {
    //   // console.log(response.json())

    // } else {
    //   alert("Failed to create new review");
    // }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/review/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);

const reviews = document.querySelector(".review-list");
if (reviews) {
  reviews.addEventListener("click", delButtonHandler);
}
