"use strict";

const nav = document.querySelector(".nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navList = document.querySelectorAll('.nav-link')

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

// navList.forEach( (s) => s.addEventListener('click', function(e) {
//   nav.classList.toggle('show')
// } ));