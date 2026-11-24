// const btn = document.getElementById("theme-btn");

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     btn.textContent = "Light Mode";
//   } else {
//     btn.textContent = "Dark Mode";
//   }
// });
const btn = document.getElementById("theme-btn");

// When the page loads, check what was saved last time
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "Light Mode";
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
  } else if (!email.includes("@")) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Thank you, " + name + "! Your message is ready.";
    formMsg.style.color = "green";
    form.reset();
  }
});
