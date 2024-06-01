"use strict"

"use strict"

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('orientation-message').style.display = 'flex';
    } else {
        document.getElementById('orientation-message').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);
//





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

var characters = document.querySelectorAll('.character');
var currentIndex = 0;

document.getElementById('rightBtn').addEventListener('click', function() {
    let activeFrames = document.querySelectorAll('.character.visible');
    for (let activeFrame of activeFrames) {
        activeFrame.classList.remove('visible');
    }
    currentIndex = (currentIndex + 3 - 1) % 3; // déplace vers la gauche et assure l'index reste dans la gamme
    characters[currentIndex + 3].classList.add('visible');
});

document.getElementById('leftBtn').addEventListener('click', function() {
    let activeFrames = document.querySelectorAll('.character.visible');
    for (let activeFrame of activeFrames) {
        activeFrame.classList.remove('visible');
    }
    currentIndex = (currentIndex + 1) % 3; // déplace vers la droite et assure l'index reste dans la gamme
    characters[currentIndex].classList.add('visible');
});
//////////////////////////////


var characters = document.querySelectorAll('.character');
var currentIndex = 0;

document.addEventListener('keydown', function(event) {
    let activeFrames = document.querySelectorAll('.character.visible');
    for(let activeFrame of activeFrames) {
        activeFrame.classList.remove('visible');
    }

    if (event.key === 'd') {
        //droite
        currentIndex = (currentIndex + 1) % 3;
        characters[currentIndex].classList.add('visible');
    } else if (event.key === 'q') {
        // Gauche
        currentIndex = (currentIndex + 1) % 3;
        characters[currentIndex + 3].classList.add('visible');
    }
});



//////////////////////////////////////////

//slider

"use strict";
let prevButton = document.querySelector(".btn__prev");
let nextButton = document.querySelector(".btn__next");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

//pour faire une navigation au clavier
document.addEventListener("keydown", keyboardListener);

function keyboardListener(event){
    if(event.code == "ArrowLeft"){
        prevSlide();
    } else if(event.code == "ArrowRight"){
        nextSlide();
    }
}

function prevSlide(){
    let activeSlideEl = document.querySelector(".slider__el--show");
    let prevSlideEl =  activeSlideEl.previousElementSibling;
    // Si prevSlideEl est vide on va appliquer la boucle
    if(!prevSlideEl){
        // on remonte sur le parent et on va chercher le dernier enfant > ici le dernier li
        prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }
    //ne pas mettre de point > (".slider__el--show") sinon ça rajoute le point dans le nom de classe html et ça ne fonctionne pas 
    activeSlideEl.classList.remove("slider__el--show");
    prevSlideEl.classList.add("slider__el--show");
}

function nextSlide(){
    let activeSlideEl = document.querySelector(".slider__el--show");
    let nextSlideEl =  activeSlideEl.nextElementSibling;
    if(!nextSlideEl){
        nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }
    activeSlideEl.classList.remove("slider__el--show");
    nextSlideEl.classList.add("slider__el--show");
}


