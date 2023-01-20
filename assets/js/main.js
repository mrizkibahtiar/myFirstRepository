// TOGGLE MENU

const toggle = document.getElementById('nav-toggle'), navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', function() {
    navMenu.classList.toggle('top-[-1000%]')
    navMenu.classList.toggle('top-14');
})