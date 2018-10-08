const plus_btn = document.querySelector('.plus-button');

const show_media = () => {
    plus_btn.classList.toggle('open');
    document.querySelector('.social-button').
    classList.toggle('active');
}

plus_btn.addEventListener('click', show_media);

/*plus_btn.addEventListener('click', () => {
    this.classList.toggle('open')
})*/