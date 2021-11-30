<<<<<<< HEAD
const form = document.getElementById('my-form')

async function handleSubmit(event) {
  let data = new FormData(event.target);
=======
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

>>>>>>> 3791068d64b26e1a2ac10ab5d5cb4b5209845aec
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
<<<<<<< HEAD
=======
    .then((response) => {
      console.log("success");
      form.reset();
    })
    .catch((error) => {
      console.log("error");
    });
>>>>>>> 3791068d64b26e1a2ac10ab5d5cb4b5209845aec
}
form.addEventListener("submit", handleSubmit);
