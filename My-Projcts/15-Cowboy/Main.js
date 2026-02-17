let menu = document.querySelector(".nav .menu"),
    links = document.querySelectorAll(".nav .menu a"),
    menuPhone = document.querySelector('.nav .menuPhone');

// Start NavBar
    let removeLinks = function(){
        links.forEach((unlink) => {
            unlink.classList.remove("active");
        });
    };
    links.forEach((link) => {
        link.onclick = function() {
            removeLinks();
            this.classList.add("active");
            menu.classList.remove("openMenuPhone");
        }
    });

    menuPhone.onclick = function(){
        menu.classList.add("openMenuPhone");
    }

    menu.onclick = function(){
        menu.classList.remove("openMenuPhone");
    }

// Start About
let AboutImages = document.querySelectorAll('.about img');

AboutImages.forEach((img) => {
    img.onclick = function(){
        this.classList.toggle("PopUp");
    };
});

// Start ScreenShot
var owl = $('.slide');
owl.owlCarousel({
    nav:false,
    loop:true,
    center:true,
    dots: false,
    margin: 10,
    // Auto Play
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,

    // Responsive
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});