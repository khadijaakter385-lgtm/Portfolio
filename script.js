const slides=document.querySelectorAll('.slide');const dots=document.querySelectorAll('.dot');let currentSlide=0;let slideInterval;
function showSlide(index){slides.forEach((slide,i)=>slide.classList.toggle('active',i===index));dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));currentSlide=index}
function nextSlide(){showSlide((currentSlide+1)%slides.length)}
function startSlideshow(){slideInterval=setInterval(nextSlide,4000)}
function resetSlideshow(){clearInterval(slideInterval);startSlideshow()}
dots.forEach((dot,index)=>{dot.addEventListener('click',()=>{showSlide(index);resetSlideshow()})});
showSlide(0);startSlideshow();
