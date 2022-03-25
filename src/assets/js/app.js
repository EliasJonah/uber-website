window.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.menu-button'),
          animatedIcon = document.querySelector('.animated-icon'),
          burgerNav = document.querySelector('.burger-nav');



    menuButton.addEventListener('click', () => {
        animatedIcon.classList.toggle('open');

        burgerNav.classList.toggle('burger-nav__open');
    })
})