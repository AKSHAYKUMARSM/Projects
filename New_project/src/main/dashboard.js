const name=sessionStorage.getItem("name");
const role=sessionStorage.getItem("role");
const title=document.querySelector("#nameRole");

title.innerText=`Welcome ${name} | ${role}`;

const slides=document.querySelectorAll("#slides li");
let currentSlide=0;

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.toggle("active",i===index);
    })
}

function nextSlide(){
    showSlide(currentSlide);
    currentSlide=(currentSlide+1)%slides.length;
}
function slideShow(){
    setInterval(nextSlide,5000);
}
slideShow();