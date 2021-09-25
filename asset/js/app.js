const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const header_navabr = document.querySelector(".header__navbar__home")
window.addEventListener("scroll",()=>{
    x = window.pageYOffset
    if( x > 0){
        header_navabr.classList.add("sticky")
    }
    else{
        header_navabr.classList.remove("sticky")
    }
})
const btnMenubars = $('.menu-bars-icon');
const removeClick = $('header')



btnMenubars.addEventListener('mouseup', (e) => {
    let menuBars = $('.header__menu-bars__list')
    menuBars.style.display = "block"
})
removeClick.addEventListener('mousedown', (e) => {
    let menuBars = $('.header__menu-bars__list')
    menuBars.style.display = "none"
})

