const navToggle = document.querySelector(".menu-button");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener("click", () => {
  document.body.classList.remove("nav-is-open");
});

let cursor = document.querySelector(".cursor");
let follower = document.querySelector(".cursor-follower");

let posX = 0;
let posY = 0;
let mouseX = 0;
let mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      left: posX - 20,
      top: posY - 20,
    });

    TweenMax.set(cursor, {
      left: mouseX,
      top: mouseY,
    });
  },
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

const portfolioImages = document.querySelectorAll(".portfolio-item img");

portfolioImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    follower.classList.add("active");
  });

  img.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
});
