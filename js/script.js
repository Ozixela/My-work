//инциализируем Swiper
new Swiper('.hero__slider', {
    navigation: {
        nextEl: '.feature-project__button-next ',
        prevEl: '.feature-project__button-prev ',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    /*mousewheel: {
        sensitivity: 1,
        eventsTarget: ".hero__slider"
    },
    */
    spaceBetween: 80,

    loop: true,

});