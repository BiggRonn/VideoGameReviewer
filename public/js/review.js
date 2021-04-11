const formHandler = async (event) => {
  event.preventDefault();

  // const platform = document.querySelector("#platform").value;
  // const game_genre = document.querySelector("#game_genre").value;
  // const description = document.querySelector("#description").value;
  // const game_title = document.querySelector("#game_title").value;

  const platform = "PSOne";
  const game_genre = "Fun RPG FPS Puzzle";
  const description = "The description of this game is everything we hoped for";
  const game_title = "Best GAME created EVER";

  if (game_title) {
    const reviewData = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({game_title, game_genre, description, platform}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (reviewData.ok) {
      document.location.replace("/profile");
    }
  }
};

document.querySelector(".new-review").addEventListener("submit", formHandler);
