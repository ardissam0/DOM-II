// Your code goes here

const logoChange = document.querySelector('.logo-heading');

logoChange.addEventListener('mousedown', () => {
    logoChange.style.transform = "scale(1.1)";
    logoChange.style.transition = "transform 1s";
    logoChange.style.color = "rebeccapurple";
});

logoChange.addEventListener('mouseup', () => {
    logoChange.style.transform = "scale(1)";
    logoChange.style.transition = "transform 1s";
    logoChange.style.color = "black";
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

const bodyChange = document.querySelector('body');

window.addEventListener('resize', () => {
    bodyChange.style.backgroundColor = 'coral';
});

window.addEventListener('scroll', () => {
    bodyChange.style.backgroundColor = "lightgrey";
});


//Propagation -------------------------------------------------------

const welcomeSection = document.querySelector('.intro');
welcomeSection.addEventListener('click', () => {
    welcomeSection.style.backgroundColor = 'seagreen';
});

const welcomePara = document.querySelector('.intro p');
welcomePara.addEventListener('click', (event) => {
    welcomePara.style.backgroundColor = 'rebeccapurple';
    event.stopPropagation();
});

//Prevent Default------------------------------------------------

const stopRefresh = document.querySelector ('.nav-link');
stopRefresh.addEventListener('click', (event) => {
    event.preventDefault();
});

//stretch animations---------------------------------

document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, {
            duration: 2,
            rotateX: 360,
            ease: "elastic(1, 0.75)"
        }).restart();
    })
})