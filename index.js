let prevScrollPos = window.pageYOffset; // Initialize previous scroll position

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // User is scrolling up, so fade in the button
    document.getElementById("toggle-btn").style.opacity = "1";
  } else {
    // User is scrolling down, so fade out the button
    document.getElementById("toggle-btn").style.opacity = "0";
  }

  prevScrollPos = currentScrollPos; // Update previous scroll position
});

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((reveal, index) => {
  setTimeout(() => {
    reveal.style.opacity = "1";
  }, index * 30); //
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hiddenEl');

hiddenElements.forEach((el) => observer.observe (el));

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