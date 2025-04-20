"use strict";

const nav = document.querySelector(".nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navList = document.querySelectorAll('.nav-link')
const toTop = document.querySelector('.toTop')

open.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});

close.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});


function navAction(){
  navList.forEach(( s) => s.classList.remove('nav-active'))
  this.classList.add('nav-active')
  nav.classList.toggle("show");
}

navList.forEach( (s) => s.addEventListener('click',navAction))

window.addEventListener('scroll', (s) => {
  if(window.pageYOffset > 100){
    toTop.classList.add('active')
  } else{
    toTop.classList.remove('active')
  }
})

// navList.forEach( (s) => s.addEventListener('click', function(e) {
//   nav.classList.toggle('show')
// } ));