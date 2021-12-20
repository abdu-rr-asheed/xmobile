// Banner slider
var swiper = new Swiper('.banner', {
    loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });

// Brand Slider

var swiper = new Swiper('.brand', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        640: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 30,
        },
    }
    });