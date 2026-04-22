// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from "./functions/check_client_width";

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Подключение свайпера
import Swiper from "swiper/bundle";
const swiper = new Swiper('.swiper', {
  // Optional parameters
direction: 'horizontal',
    loop: true,

    // Пагинация в виде "1/3"
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',     // <-- Ключевой параметр для цифр
    },

    // Навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Скроллбар (опционально, можно удалить)
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
const swiperProd = new Swiper('.product__swiper', {
  // Optional parameters
direction: 'horizontal',
slidesPerView:'auto',
    loop: true,
spaceBetween:32,
    // Пагинация в виде "1/3"
    pagination: {
        el: '.product__btns_row .swiper-pagination',
        type: 'fraction',     // <-- Ключевой параметр для цифр
    },

    // Навигация
    navigation: {
        nextEl: '.product__btns_row .swiper-button-next',
        prevEl: '.product__btns_row .swiper-button-prev',
    },

})
const swiperProdImg = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    
    const swiperProdImg2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiperProdImg,
      },
    });

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// функция блокировки и разблокировки скролла
// import { disable_scroll, enable_scroll } from "./functions/scroll";
// disable_scroll();
// enable_scroll();

// добавление маски на телефон
// import phone_mask from "./functions/phone_mask";
// phone_mask();

// функция для добавления ограничения символов
// import character_restriction from "./functions/character_restriction";
// добавлять атрибуты на поля
// data-ru-field - русские символы
// data-num-field - цифры
// data-eng-field - английские символы
// data-email-field - ограничение символов для почты
// data-allowed-field - создано для каких-то резиновых ограничений, можно менять
