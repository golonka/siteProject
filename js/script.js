var buttonX = document.querySelector('.menu__toggle--displayX');
var buttonMenu = document.querySelector('.menu__toggle--displayMenu');
let menu =  document.querySelector('.menu');

buttonMenu.addEventListener("click", function(){
    menu.classList.toggle('menu__toggle--opened');
    buttonMenu.classList.add('menu__toggle--hidden');
  
},false)

buttonX.addEventListener("click", function(){
    menu.classList.toggle('menu__toggle--opened');
    buttonMenu.classList.remove('menu__toggle--hidden');
   
    
    //menu.animate.add('menu__slide--closed');
    
},false)


// var hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", function(){
// 	document.querySelector(".page-header").classList.toggle("nav-opened");
// },false)