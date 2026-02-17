// Start Header
let menuPhone = document.querySelector(".linksPhone i"),
    LinksPhone = document.querySelector(".header .linksPhone ul"),
    linkFullWidth = document.querySelectorAll('.fullwidth li a');

    linkFullWidth.forEach(function(link){
        link.onclick = function() {
            removeActiveLinks();
            this.classList.add('active');
        };
    });

    removeActiveLinks = function () {
        linkFullWidth.forEach(function(link) {
            link.classList.remove('active');
        });
    };

menuPhone.onclick = function() {
    LinksPhone.classList.toggle("ShowMenuPhone");
};
// End Header

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

var owl = $('.portfolio .slideshow .slides');
owl.owlCarousel({
    nav:false,
    loop:true,
    center:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
});

//  End PortFolio