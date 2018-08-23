
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__slides");
  var dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slideshow__active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideshow__active";
  

}
showSlides(slideIndex)

 function next() {
    slideIndex++;
    showSlides(slideIndex)
}

setInterval(next,5000);


var prev = document.querySelector('.slideshow__prev');
var next = document.querySelector('.slideshow__next');
var dot = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');


prev.addEventListener("click", function(){
    plusSlides(-1); }
    )

next.addEventListener("click", function(){
    plusSlides(1); }
    )


  
dot.addEventListener('click', function(){
    currentSlide(1);
}); 

dot2.addEventListener('click', function(){
    currentSlide(2);
}); 

dot3.addEventListener('click', function(){
    currentSlide(3);
}); 
