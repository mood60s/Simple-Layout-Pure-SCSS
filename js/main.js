// Logic Toggler,
const toggler = document.querySelector(".the-toggler");
let navbar = document.querySelector(".navbar");
function togglerHeader() {
  toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
togglerHeader();
// Slider,
// Select Elements,
const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullets li");
// Update Slider,
function updateSlider() {
  // Move Track;
  if (document.body.dir == "ltr") {
    track.style.transform = `translateX(-${index * 100}%)`;
  } else if (document.body.dir == "rtl") {
    track.style.transform = `translateX(${index * 100}%)`;
  }
  // Remove all Class from Bullets;
  bullets.forEach((b) => b.classList.remove("active"));
  // Add Class Active: Depend in Slider,
  bullets[index].classList.add("active");
  
}
// bullets Click
function bulletsClick() {
  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
  });
}
bulletsClick();
