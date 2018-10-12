(function () {

    const plus_btn = document.querySelector('.plus-button');

    const show_media = () => {
        plus_btn.classList.toggle('open');
        document.querySelector('.social-button').
        classList.toggle('active');
    }

    plus_btn.addEventListener('click', show_media);


    // Hamburger menu
    const button = document.querySelector('.header__button');
    button.addEventListener('click', function (event) {
        event ? event : event = window.event;
        event.preventDefault();
        this.classList.toggle('.header__button--close');
        console.log('close')
    })

    if (window.innerWidth <= 1000) {
        var hide = function hide() {
            var ul = document.querySelector('.nav__list');
            ul.classList.toggle('nav__list--block');

            //var button = document.querySelector('.header__button');
            button.classList.toggle('header__button--close');
        };

    }

})();