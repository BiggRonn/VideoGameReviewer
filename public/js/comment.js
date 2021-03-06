async function commentFormHandler(event) {
  event.preventDefault();

  const content = document.getElementById("#review-desc").innerText;

  const review_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        review_id,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".updated-review")
  .addEventListener("submit", commentFormHandler);
