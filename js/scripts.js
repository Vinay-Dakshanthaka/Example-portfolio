window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "suresh",
    position: "",
    photo: "./assets/img/portfolio/testimonials/2.jpg",
    text: "Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

const textElement = document.querySelector(".text--dynamic");
const wordsArray = ["a developer", " a freelancer", " a designer"];
let arrayLength = wordsArray.length;

let currentLetterCount = 0,
  currentWordCount = 0,
  currentText = [],
  currentWord = "",
  currentLetter = "",
  reverse = false;

function typeWriting() {
  if (currentWordCount <= arrayLength) {
    if (currentWordCount == arrayLength) {
      currentWordCount = 0;
    }

    let letterCount = wordsArray[currentWordCount].length;
    currentWord = wordsArray[currentWordCount];

    if (!reverse && currentLetterCount < letterCount) {
      currentLetter = currentWord[currentLetterCount];
      currentText.push(currentLetter);

      textElement.textContent = currentText.join("");
      currentLetterCount++;
      // console.log(currentText, currentLetterCount, letterCount);
    }

    if (reverse && currentLetterCount <= letterCount) {
      currentText.pop();
      textElement.textContent = currentText.join("");
      currentLetterCount--;
      // console.log(currentText, currentLetterCount);
    }

    if (currentLetterCount == letterCount) {
      reverse = true;
    }

    if (reverse && currentLetterCount == 0) {
      currentText = [];
      currentWordCount++;
      reverse = false;
    }
  }
  setTimeout(typeWriting, 100);
}

window.addEventListener("load", typeWriting);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  function animateSections() {
    const sr = ScrollReveal({
      origin: "top",
      distance: "100px",
      duration: 2000,
      delay: 200,
    });

    sections.forEach((section) => {
      sr.reveal(section);
    });
  }
  
  const personImg = document.getElementById('person-img');
  personImg.classList.add('dropAnimation');

  
  animateSections();
});


