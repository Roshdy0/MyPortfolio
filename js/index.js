// Start Header
let menuPhnoe = document.querySelector(".linksPhone i");
let LinksPhone = document.querySelector(".header .linksPhone ul");

menuPhnoe.onclick = function() {
    LinksPhone.classList.toggle("ShowMenuPhone");
};
// End Header

// Start Section About SlideShow effectslide mySlides

// Slide Show One
let slides = document.getElementsByClassName("slideOne");
let slidesTow = document.getElementsByClassName("slideTwo");
let slidesThree = document.getElementsByClassName("slideThree");

let slideIndex = 0;
let slideIndexTow = 0;
let slideIndexThree = 0;

showSlides();
showSlidesTow();
showSlidesThree();

function showSlides() {
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("effectSlideOne");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].classList.add("effectSlideOne");

    setTimeout(showSlides, 5000);
}

function showSlidesTow() {
    let r;

    for(r = 0; r < slidesTow.length; r++){
        slidesTow[r].classList.remove("effectSlideTow");
    }

    slideIndexTow++;

    if(slideIndexTow > slidesTow.length){
        slideIndexTow = 1
    }

    slidesTow[slideIndexTow-1].classList.add("effectSlideTow")

    setTimeout(showSlidesTow, 5000);
}

function showSlidesThree() {
    let n;

    for(n = 0; n < slidesThree.length; n++){
        slidesThree[n].classList.remove("effectSlideThree");
    }

    slideIndexThree++;

    if(slideIndexThree > slidesThree.length){
        slideIndexThree = 1
    }

    slidesThree[slideIndexThree-1].classList.add("effectSlideThree");

    setTimeout(showSlidesThree, 5000);
}

// End Section About SlideShow

//  Start PortFolio
let PFIndex = 1;
PFFunction(PFIndex);

function plusSlides(n) { PFFunction(PFIndex += n); }

function currentSlide(n) { PFFunction(PFIndex = n); }

function PFFunction(n) {
  let i;
  let slides = document.getElementsByClassName("slid");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {PFIndex = 1} 

  if (n < 1) {PFIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[PFIndex-1].style.display = "block";  
  dots[PFIndex-1].className += " active";
}

//  End PortFolio