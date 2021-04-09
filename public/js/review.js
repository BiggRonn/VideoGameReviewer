const formHandler = async (event) => {
  event.preventDefault();

  const commit = document.querySelector("#review-desc").value;

  if (commit) {
    const reviewData = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ commit }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.replace("/profile");
  }
};

document.querySelector(".card").addEventListener("submit", formHandler);
