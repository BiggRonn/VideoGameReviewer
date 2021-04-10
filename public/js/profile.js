const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#game-title").value;

  if (name) {
    document.location.replace("/api/reviews/" + name);
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/reviews/${id}`, {
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
