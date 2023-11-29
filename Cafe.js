let currentCard = 0;


function currentSlide(n) {
  showSlides((currentCard = n - 1));
}


function showSlides(n) {
  const slides = document.getElementsByClassName("bread-card");
  const dots = document.getElementsByClassName("dot");
  const isMobile = window.matchMedia(
    "only screen and (max-width: 600px)"
  ).matches;

  if (n >= slides.length) currentCard = 0;
  if (n < 0) currentCard = slides.length - 1;

  if (isMobile) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentCard].style.display = "block";
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"; 
    }
  }

  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (isMobile) {
    dots[currentCard].className += " active";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(currentCard);
});

window.addEventListener("resize", () => {
  showSlides(currentCard);
});







