import("./scss/main.scss");

function hiddenSlides(array) {
    array.forEach(e => {
        for (let i = 1; i < array.length; i++) {
            array[i].classList.add('hide');
        }
    });
}

function hiddenAllSlides(array) {
    array.forEach(e => {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.add('hide');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const imgGallery = document.querySelector('#gallery');
    const slides = Array.from(imgGallery.children);
    let slideIndex = 0;

    hiddenSlides(slides);

    function verifyNextSlide(i) {
        if (i >= slides.length - 1) {
            hiddenAllSlides(slides);
            i = 0;
            slides[i].classList.remove('hide');
            currentSlide(i);
        }
        else showNextImg(slideIndex);
    }

    function verifyPrevSlide(i) {
        if (i <= 0) {
            hiddenAllSlides(slides);
            i = slides.length - 1;
            slides[i].classList.remove('hide');
            currentSlide(i);
        }
        else showPrevImg(slideIndex);
    }

    function showNextImg(i) {
        slides[i].classList.add('hide');
        i++;
        slides[i].classList.remove('hide');

        currentSlide(i);
    }

    function showPrevImg(i) {
        slides[i].classList.add('hide');
        i--;
        slides[i].classList.remove('hide');

        currentSlide(i);
    }

    function currentSlide(slide) {
        slideIndex = slide;
    }

    document.querySelector('#prev').addEventListener('click', () => {
        verifyPrevSlide(slideIndex);
    });

    document.querySelector('#next').addEventListener('click', () => {
        verifyNextSlide(slideIndex);
    });

})

