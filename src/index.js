import("./scss/main.scss");

document.addEventListener('DOMContentLoaded', () => {
    const imgGallery = document.querySelector('#gallery');
    const slides = Array.from(imgGallery.children);
    console.log(imgGallery)

    let slideIndex = 0;

    function hiddenSlides() {
        slides.forEach(e => {
            for (let i = 1; i < slides.length; i++) {
                slides[i].classList.add('hide');
            }
        });
    }

    hiddenSlides();

    function hiddenAllSlides() {
        slides.forEach(e => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.add('hide');
            }
        });
    }


    function showNextImg(i) {
        if (i >= slides.length - 1) {
            hiddenSlides();
            i = 0;
        }

        slides[i].classList.add('hide');
        i++;
        slides[i].classList.remove('hide');

        currentSlide(i);

    }

    function showPrevImg(i) {
        if (i <= 0) {
            hiddenAllSlides();
            i = slides.length - 1;
        }

        slides[i].classList.add('hide');
        i--;
        slides[i].classList.remove('hide');

        currentSlide(i);
    }

    function currentSlide(slide) {
        slideIndex = slide;
    }

    document.querySelector('#prev').addEventListener('click', () => {

        showPrevImg(slideIndex);

    });

    document.querySelector('#next').addEventListener('click', () => {

        showNextImg(slideIndex);

    });

})

