import './scss/main.scss';
import slider from './js/slider';
import player from './js/player';
import news from './js/news';

window.addEventListener('load', () => {
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
    
    if(document.querySelector('.player')){
        player();
    }
    
    if(document.querySelector('.note')){
        news();
    }

    const leftPart = document.querySelector('.content');
    if(leftPart.classList.contains('_hide')) {
        leftPart.classList.remove('_hide');
    }
})