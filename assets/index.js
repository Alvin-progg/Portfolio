const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slides = document.querySelectorAll('.card-item');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

// PRev and Next index btn
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: Auto-slide functionality


// Hamburger menu 
function toggleMenu() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }


}
function toggleExit() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }


}



