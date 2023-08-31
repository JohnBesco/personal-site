const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
let slides = document.querySelectorAll(".slide-container");
let index = 0;

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener("click", () => {
  document.body.classList.remove("nav-is-open");
});

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function next() {
  index = (index + 1) % slides.length;
  showSlide();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
}

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);
