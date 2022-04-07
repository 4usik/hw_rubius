"use strict"

let menuBtn = document.querySelector('.hamb__menu-btn');
let menu = document.querySelector('.hamb__menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

$(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next'
    });
  });