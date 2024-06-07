"use strict"

var background = document.getElementById('background');

var scrollAmount = 30; //deplacement en px

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        //gauche
        background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) - scrollAmount) + 'px';
    } else if (event.key === 'q') {
        //droite
        background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) + scrollAmount) + 'px';
    }
});

//mobile

var background = document.getElementById('background');
var rightBtn = document.getElementById('rightBtn');
var leftBtn = document.getElementById('leftBtn');
var scrollAmount = 30; // déplacement en px

leftBtn.addEventListener('click', function() {
    background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) - scrollAmount) + 'px';
});

rightBtn.addEventListener('click', function() {
    background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) + scrollAmount) + 'px';
});


"use strict";

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('orientation-message').style.display = 'flex';
    } else {
        document.getElementById('orientation-message').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('background');
    const rightBtn = document.getElementById('rightBtn');
    const leftBtn = document.getElementById('leftBtn');
    const scrollAmount = 30; // déplacement en px
    const characters = document.querySelectorAll('.character');
    let currentIndex = 0;

    document.addEventListener('keydown', function(event) {
        let activeFrames = document.querySelectorAll('.character.visible');
        for (let activeFrame of activeFrames) {
            activeFrame.classList.remove('visible');
        }

        if (event.key === 'd') {
            // Droite
            currentIndex = (currentIndex + 1) % 3;
            characters[currentIndex].classList.add('visible');
        } else if (event.key === 'q') {
            // Gauche
            currentIndex = (currentIndex + 1) % 3;
            characters[currentIndex + 3].classList.add('visible');
        }
    });

    leftBtn.addEventListener('click', function() {
        background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) - scrollAmount) + 'px';
    });

    rightBtn.addEventListener('click', function() {
        background.style.backgroundPositionX = (parseInt(background.style.backgroundPositionX || 0) + scrollAmount) + 'px';
    });

    document.getElementById('rightBtn').addEventListener('click', function() {
        let activeFrames = document.querySelectorAll('.character.visible');
        for (let activeFrame of activeFrames) {
            activeFrame.classList.remove('visible');
        }
        currentIndex = (currentIndex + 3 - 1) % 3; //gauche
        characters[currentIndex + 3].classList.add('visible');
    });

    document.getElementById('leftBtn').addEventListener('click', function() {
        let activeFrames = document.querySelectorAll('.character.visible');
        for (let activeFrame of activeFrames) {
            activeFrame.classList.remove('visible');
        }
        currentIndex = (currentIndex + 1) % 3; //droite 
        characters[currentIndex].classList.add('visible');
    });

    // Déplacement des images et des titres
    const elementsToMove = [
        { id: 'movable-image', initialPosition: 570 },
        { id: 'mov-image', initialPosition: 1000 },
        { id: 'title__first', initialPosition: 300 },
        { id: 'title__two', initialPosition: 1600 },
        { id: 'title__three', initialPosition: 2700 },
        { id: 'title__four', initialPosition: 3800 },
        { id: 'title__data', initialPosition: 6100 },
        { id: 'title__hello', initialPosition: 500 },
        { id: 'title__decem', initialPosition: 3900 },
        { id: 'title__rething', initialPosition: 5000 }
    ];

    elementsToMove.forEach(element => {
        const el = document.getElementById(element.id);
        let position = element.initialPosition;
        document.addEventListener('keydown', (event) => {
            if (event.key === 'q') {
                position += scrollAmount;
            } else if (event.key === 'd') {
                position -= scrollAmount;
            }
            el.style.left = position + 'px';
        });
    });

    // Slider
    let prevButton = document.querySelector(".btn__prev");
    let nextButton = document.querySelector(".btn__next");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    function prevSlide() {
        let activeSlideEl = document.querySelector(".slider__el--show");
        let prevSlideEl = activeSlideEl.previousElementSibling;
        if (!prevSlideEl) {
            prevSlideEl = activeSlideEl.parentNode.lastElementChild;
        }
        activeSlideEl.classList.remove("slider__el--show");
        prevSlideEl.classList.add("slider__el--show");
    }

    function nextSlide() {
        let activeSlideEl = document.querySelector(".slider__el--show");
        let nextSlideEl = activeSlideEl.nextElementSibling;
        if (!nextSlideEl) {
            nextSlideEl = activeSlideEl.parentNode.firstElementChild;
        }
        activeSlideEl.classList.remove("slider__el--show");
        nextSlideEl.classList.add("slider__el--show");
    }

    // Parallax
    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function(parallax) {
            var speed = parallax.getAttribute('data-speed');
            var rate = scrolled * speed;
            parallax.style.transform = 'translateY(' + rate + 'px)';
        });
    });
});
