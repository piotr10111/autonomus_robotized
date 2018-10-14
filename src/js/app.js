
'use strict';
(function () {

    // Hamburger menu
    const button = document.querySelector('.header__button');
    const ul = document.querySelector('.nav__list');
    button.addEventListener('click', function (event) {
        event ? event : event = window.event;
        event.preventDefault();
        this.classList.toggle('header__button--close');
        console.log('close')
        
    });


    if (window.innerWidth <= 1000) {
        const hide = function() {
            ul.classList.toggle('nav__list--block');
            button.classList.toggle('header__button--close');
        };
        
        const links = Array.from(document.querySelectorAll('.clicked'));
        links.forEach(function (link) {
            return link.addEventListener('click', hide);
        });

    }

    // Smooth Scroll
    new ScrollMenu('.scroll', {
        duration: 900,
        //activeOffset: 100,
        scrollOffset: 0
    });

})();