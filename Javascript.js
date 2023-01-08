// Selecteurs
const body = document.querySelector("body");
const button = document.querySelector("button");

// Listener
button.addEventListener("click", function() {
  if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    button.innerText = "Mode ☀️";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    button.innerText = "Mode 🌚";
  }
});

const button2 = document.querySelector(".button2");
// const container = document.querySelector(".container");
const card = document.querySelectorAll('.card');

  /*console.log(button2);
  console.log(document.querySelector('.card'));
  console.log(document.querySelectorAll('.card'));*/
  console.log(card);

button2.addEventListener("click", function () {
console.log("Test")
    for (i = 0; i < 3; i++) {
      card[i].classList.toggle("active");
      card[i].style.transitionDelay = (0.25 * i) + "s";
    }
});