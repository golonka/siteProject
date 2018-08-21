let menu = document.querySelector(".menu__toggle--display");
let header__menu = document.querySelector(".header__menu");
let menuButton = document.querySelector(".menu__toggle--display2");
menu.addEventListener("click", function(){
    header__menu.classList.toggle("menu__list--closed");
    menuButton.style.display="block";
},false)

menuButton.addEventListener("click", function(){
    header__menu.classList.remove("menu__list--closed");
    menuButton.style.display="none";
    
},false)