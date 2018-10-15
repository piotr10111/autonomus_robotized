
'use strict';
(function () {

    // Hamburger menu
    const button = document.querySelector('.header__button');
    const ul = document.querySelector('.nav__list');
    button.addEventListener('click', function (event) {
        event ? event : event = window.event;
        event.preventDefault();
        button.classList.toggle('header__button--close');
        console.log('close')
        
    });


    if (window.innerWidth <= 1000) {

        function hide() {
            ul.classList.remove('nav__list--block');
            console.log('xd');
            button.classList.remove('header__button--close');
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