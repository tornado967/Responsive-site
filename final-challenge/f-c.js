const toggle = document.querySelector('.ham-button')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible')
})