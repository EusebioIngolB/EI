/* MENU SHOW & HIDDEN */
const navMenu= document.getElementById('nav-menu'),
    navToggle= document.getElementById('nav-toggle'),
    navClose= document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('mostrar-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('mostrar-menu')
    })
}

/*REMOVE MENU-MOB*/
const navLink= document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))


/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Bg header*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*show scrollup*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUo.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*Dark and light theme*/ 
const themeButton = document.getElementById('themeBTTN')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate
themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


