const menuOpenButton = document.querySelector("#menu-open-button")
menuOpenButton.addEventListener("click", () => {
    let navmenu = document.querySelector(".nav-menu")
    let heroSection = document.querySelector(".hero-section");
    navmenu.style.left = "0"
    heroSection.classList.add("blur-background")
})
const menuCloseButton = document.querySelector("#menu-close-button")
menuCloseButton.addEventListener("click", () => {
    let navmenu = document.querySelector(".nav-menu")
    let heroSection = document.querySelector(".hero-section");
    navmenu.style.left = "-300px";
    document.body.backdropFilter = "blur(55px)";
    heroSection.classList.remove("blur-background")
})

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    grabCursor: true,
    loop: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});