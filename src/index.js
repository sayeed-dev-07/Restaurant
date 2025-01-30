import './style.css';
import createHome from '../src/home.js'
import createAbout from '../src/about.js'
import createMenu from '../src/menu.js'



const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        container.innerHTML = ''
        if (button.classList.contains('homeBtn')) {
            button.classList.add('selected')
            aboutBtn.classList.remove('selected')
            menuBtn.classList.remove('selected')
            createHome();

        } else if (button.classList.contains('menuBtn')) {
            button.classList.add('selected')
            homeBtn.classList.remove('selected')
            aboutBtn.classList.remove('selected')
            createMenu()

        } else if (button.classList.contains('aboutBtn')) {
            button.classList.add('selected')
            homeBtn.classList.remove('selected')
            menuBtn.classList.remove('selected')
            createAbout()
            
        }

    })
})

