const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener('mousemove', function(e) {
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    
    btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener('mouseout', function(e) {
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
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