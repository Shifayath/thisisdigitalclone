gsap.from('#img', {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60
})

gsap.from('#img1', {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60
})
gsap.from('#img2', {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60
})
gsap.from('#main>h1', {
    delay: 0.4,
    opacity: 0,
    duration: 1,
})

gsap.from('#page2 h5,#page2 h1,#page2,#about-us,#about-us>h4', {
    opacity: 0,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller : "body",
        // start:"top 90%",
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
