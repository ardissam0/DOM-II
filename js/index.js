// Your code goes here

const logoChange = document.querySelector('.logo-heading');

logoChange.addEventListener('wheel', () => {
    
});

const navChange = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', function() {
        el.style.color = "Coral";
    });
})

const headerImg = document.querySelector('.intro img');

headerImg.addEventListener('mouseover', () => {
    headerImg.style.transform = "scale(1.3)";
    headerImg.style.transition = "transform 1s";
});

headerImg.addEventListener('mouseout', () => {
    headerImg.style.transform = "scale(1)";
    headerImg.style.transition = "transform 1s";
});


const topContentImg = document.querySelector('.content-section .img-content');

topContentImg.addEventListener('mouseenter', () => {
    topContentImg.style.transform = "scale(1.25)";
    topContentImg.style.transition = "transform 1.5s";
});

topContentImg.addEventListener('mouseleave', () => {
    topContentImg.style.transform = "scale(1)";
    topContentImg.style.transition = "transform 1.25s";
});

const inverseContentImg = document.querySelector('.inverse-content .img-content');

inverseContentImg.addEventListener('mousemove', () => {
    inverseContentImg.style.transform = "scale(1.2)";
    inverseContentImg.style.transition = "transform 1s";
});

const bottomImg = document.querySelector('.content-destination img');

bottomImg.addEventListener('dblclick', () => {
    bottomImg.style.transform = "scale(1.2)";
    bottomImg.style.transition = "transform 1s";
});

