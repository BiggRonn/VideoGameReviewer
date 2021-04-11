const formHandler = async (event) => {
  event.preventDefault();

  const game_genre = document.querySelector("#game_genre").value;
  const description = document.querySelector("#description").value;
  const game_title = document.querySelector("#game_title").value;

  if (game_title) {
    const reviewData = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({game_title, game_genre, description }),
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
