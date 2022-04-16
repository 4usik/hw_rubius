"use strict"

/*  меню в мобильной версии при клике на "гамбургер"  */
let menuBtn = document.querySelector('.hamb__menu-btn');
let menu = document.querySelector('.hamb__menu');
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
/*  закрытие мобильного меню  */
$('.hamb__menu').mouseup(function(e) {
    let mobilMenu = $(".hamb__menu-btn");
    let menuBtn = $(".hamb__menu-btn");
    if (!mobilMenu.is(e.target) && mobilMenu.has(e.target).length ===0) {
        $(this).removeClass('active');
        menuBtn.removeClass('active');
    }
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

/*  данные из формы  */
function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
        const { name, value } = element
        return({ name, value})
    })
    console.log(data)
}

function handleFormSubmit (event) {
    event.preventDefault(),
    serializeForm(applicantForm)
};

const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)

/*  табы из секции услуги и цены  */
class TabItem {
    constructor(link, content) {
        this.link = link;
        this.content = content;
    }

    onClick(callback) {
        this.link.addEventListener('click', () => callback());
    }

    activate () {
        this._toggle(true);
    }

    deactivate() {
        this._toggle(false);
    }

    _toggle(activate) {
        this.link.classList.toggle('active', activate);
        this.content.classList.toggle('active', activate);
    }
}

class TabsManager {
    constructor(tabsElem) {
        this.tabs = [];
        this.activeTab = null;
        this.init(tabsElem);
        this.activateTab(this.tabs[0]);
    }

    init(tabsElem) {
        const links = tabsElem.querySelectorAll('.tabs__links li');
        const contents = tabsElem.querySelectorAll('.tabs__item');
        
        for (let i = 0; i < links.length; i++) {
            const tab = new TabItem(links[i], contents[i]);
            this.tabs.push(tab);

            tab.onClick(() => this.activateTab(tab));
        }
    }
    activateTab(tab) {
        if (this.activeTab) {
            this.activeTab.deactivate();
        }
        this.activeTab = tab;
        this.activeTab.activate();
    }
}

window.onload = function() {
    const tabsElem = document.getElementById('myTabs');
    new TabsManager(tabsElem);
}


