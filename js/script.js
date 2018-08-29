var buttonX = document.querySelector('.menu__toggle--displayX');
var buttonMenu = document.querySelector('.menu__toggle--displayMenu');
let menu =  document.querySelector('.menu');

buttonMenu.addEventListener("click", function(){
menu.classList.add('menu--active');
},false)

buttonX.addEventListener("click", function(){
  
   menu.classList.remove('menu--active');
    buttonMenu.classList.remove('menu__toggle--hidden');
},false)


// var hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener("click", function(){
// 	document.querySelector(".page-header").classList.toggle("nav-opened");
// },false)