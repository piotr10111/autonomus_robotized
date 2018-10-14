
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
        ul.classList.toggle('nav__list--block');
    });


    if (window.innerWidth <= 1000) {
        const hide = function() {
            

            //var button = document.querySelector('.header__button');
            button.classList.toggle('header__button--close');
        };

        const links =[...document.querySelectorAll('.clicked')];
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