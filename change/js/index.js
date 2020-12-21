window.addEventListener('load', function() {
    /* 轮播图模块 */
    // 首页广告轮播图
    var mySwiper1 = new Swiper('.banner', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 2
        },
        // 自动切换
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 本月主推轮播图
    var mySwiper2 = new Swiper('.show-list', {
        slidesPerView: 3,
        spaceBetween: 30,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 自动切换
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    });
    // 本月主推轮播图
    var mySwiper3 = new Swiper('.product-list', {
        slidesPerView: 2,
        spaceBetween: 30,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 自动切换
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    });
})