import './scss/main.scss';
import slider from './js/slider';

const selectors = {
    slide: '.about__slide',
    container: '.about',
    wrapper: '.about__wrapper',
    inner: '.about__slider',
    arrowPrev: '.about__prev',
    arrowNext: '.about__next'
};

if(document.querySelector('.about')){
    slider({
        selectors, 
        //slidesList,
        //leftArrowImg: 'icons/arrow-left.png',
        //rightArrowImg: 'icons/arrow-right.png',
        startSlideIndex: 1,
        //activateNavigationDots: true,
        //activateAutoTurning: true,
        //turningInterval: 2000,
        activateSlidesMoving: true,
        autoScrollSpeed: 2,
        autoScopeSpeed: 2
    });
}

window.addEventListener('load', () => {
    const leftPart = document.querySelector('.content');
    if(leftPart.classList.contains('_hide')) {
        leftPart.classList.remove('_hide');
    }
})