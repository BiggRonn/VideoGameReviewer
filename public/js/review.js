const formHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#review-desc").value;
  const genre = document.querySelector("#game_genre").value;
  const descr = document.querySelector("#description").value;
  const title = document.querySelector("#game_title").value;

  if (comment) {
    const reviewData = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ comment, genre, descr, title }),
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
