"use strict"

/*  меню в мобильной версии при клике на "гамбургер"  */
let menuBtn = document.querySelector('.hamb__menu-btn');
let menu = document.querySelector('.hamb__menu');
    menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

/*  слайдер с кнопками  */
$(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next'
    });
});

/*  Модальное окно  */
/*  открытие модального окна  */
$(function () {
    $('.gallery__slider-item').click(function () {
      $('.modal').addClass('modal_active');
    });

    $('.modal__close-btn').click(function() {
        $('.modal').removeClass('modal_active');
    });
});

/*  закрытие модального окна по клику вне области контента  */
$('.modal').mouseup(function(e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length ===0) {
        $(this).removeClass('modal_active');
    }
});

/*  Фото в модальном окне  */

$(document).ready(function(){
    $('.gallery__slider-item').click(function(e)
    {
        var itemId = e.target.id,
            divEl = document.getElementById(itemId),
            imgSrc = divEl.getElementsByTagName('img')[0].src;

        $('#modal_img').attr({src: imgSrc});
        // console.log (imgSrc);
    });
});

/*  табы из секции услуги и цены  */

$(document).ready(function(){
    $('.navigation__item a').click(function(e)
    {
    var itemList = document.getElementsByClassName('section__list');
        // divEl = document.getElementById(itemId);
        // imgSrc = divEl.getElementsByTagName('img')[0].src;

        // function() {
            // if 
        // }
    console.log(itemList);
    });
});

/*
let menuBtn = document.querySelector('.hamb__menu-btn');
let menu = document.querySelector('.hamb__menu');
menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active');
menu.classList.toggle('active');
});

/*  данные из формы  */
$(document).ready(function(){
    $('.btn_submit').click(function()
    {
        let userName = document.getElementById('user-name'),
            userPhone = document.getElementById('user-phone');
        // console.log(userName.value);
        // console.log(userPhone.value);

        let form = {
                userName: userName.value,
                phone: userPhone.value
            };
        console.log(form);
    });
});


