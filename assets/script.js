/*=====================================================*/
/*==================NAVIGATION BAR=====================*/
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

// Close navbar on scroll
window.addEventListener("scroll", () => {
  if (navBar.classList.contains("active")) {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  }
});


/*=====================================================*/
/*==================own owlCarousel=====================*/

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});

/*=====================================================*/
/*==================text animation=====================*/
var typed = new Typed('.multiple-text', {
  strings: ["Web Developer.", "Software Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});


/*=====================================================*/
/*==================Go to Top Btn =====================*/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ===========================================================================

