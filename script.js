const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 100,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 3000,
    },
});