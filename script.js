"use strict";

const nav = document.querySelector(".nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});
close.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});
