const formHandler = async (event) => {
  event.preventDefault();


  const platform = document.getElementById("platform").innerText;
  const game_genre = document.getElementById("game_genre").innerText;
  const description = document.getElementById("description").innerText;
  const game_title = document.getElementById("game_title").innerText;


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
