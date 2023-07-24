// Dropdwon menu Elements
const dropdownBtn = document.querySelector(".dropbutton-class");
const dropdownMenu = document.querySelector(".dropdown-links");

const toggleMenu = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function () {
  toggleMenu();
});

document.addEventListener("click", function (event) {
  if (
    !dropdownMenu.contains(event.target) &&
    !dropdownBtn.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});

const dropdownLinks = document.querySelectorAll(".dropdown-links a");
dropdownLinks.forEach((link) => {
  link.addEventListener("click", function () {
    toggleMenu();
  });
});

// Slideshow elements
let slideIndex = 0;
const mySlides = document
  .getElementById("slideshow-container")
  .querySelectorAll("img");

mySlides[slideIndex].style.display = "inline-block";

function slideShow() {
  mySlides[slideIndex].style.display = "none";
  slideIndex = (slideIndex + 1) % mySlides.length;
  mySlides[slideIndex].style.display = "inline-block";
}
// THIS MUST STAY AT THE BOTTOM
setInterval(slideShow, 3000);
