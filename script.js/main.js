// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1} /*если это закоментирвать, то слайдер большой на втором экране сворачивается и остаются маленькие фотки*/
  if (n < 1) {slideIndex = slides.length} /*если это закоментирвать, то слайдер большой на втором экране сворачивается и остаются маленькие фотки*/ 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 5000);/* работает на большом слайдере, но он в конце сворачивается, для того, чтобы работал нужно разблокировать slideIndex++;*/
  captionText.innerHTML = dots[slideIndex-1].alt;
}
