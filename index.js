const navToggle = document.querySelector('.menu-button')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open')
})

nav.addEventListener('click', () => {
    document.body.classList.remove('nav-is-open')
})