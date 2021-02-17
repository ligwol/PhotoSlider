const slides = document.querySelectorAll('.slider-items__slide')
const prevBtn = document.querySelector('.slider-nav__prev')
const nextBtn = document.querySelector('.slider-nav__next')

let activeSlide = 0

function showSlide() {
    if(document.querySelector('.slider-items__slide.active')) {
        document.querySelector('.slider-items__slide.active').classList.remove('active')
    }
    slides[activeSlide].classList.add('active')
}

showSlide()

const bullets = document.querySelectorAll('.slider-nav__bullet')
let activeBullet = 0;

function bulletShots() {
    if(document.querySelector('.slider-nav__bullet.active')) {
        document.querySelector('.slider-nav__bullet.active').classList.remove('active');
    }
    bullets[activeBullet].classList.add('active');
}

bulletShots(); 

prevBtn.onclick = function(e) {
    e.preventDefault()
 
    if(activeSlide == 0 && activeBullet == 0) {
        activeSlide = slides.length;
        activeBullet = bullets.length;;
    }

    
    activeSlide--;
    activeBullet--;

    bulletShots();
    showSlide();
}

nextBtn.onclick = function(e) {
    e.preventDefault()

    activeSlide++
    activeBullet++;

    if(activeSlide == slides.length && activeBullet == 0) {
        activeSlide = 0;
        activeBullet = 0;
    }

    bulletShots();
    showSlide();
}




