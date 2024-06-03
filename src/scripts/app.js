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




