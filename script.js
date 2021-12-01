const form = document.getElementById("my-form");

async function handleSubmit(event) {
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log("success");
      form.reset();
    })
    .catch((error) => {
      console.log("error");
    });
}
form.addEventListener("submit", handleSubmit);
