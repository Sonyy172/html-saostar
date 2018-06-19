$(document).ready(function() {

    //Datecount
    var datecount = new Date(),
        date_number = datecount.getDay(),
        date = null,
        day = datecount.getDate(),
        month = datecount.getMonth(),
        year = datecount.getFullYear();

    switch(date_number) {
        case 0:
            date = 'Chủ nhật';
            break;
        case 1:
            date = 'Thứ hai';
            break;
        case 2:
            date = 'Thứ ba';
            break;
        case 3:
            date = 'Thứ tư';
            break;
        case 4:
            date = 'Thứ năm';
            break;
        case 5:
            date = 'Thứ sáu';
            break;
        case 6:
            date = 'Thứ bảy';
            break;
    }

    $('.vwmd-date').text(date);
    $('.vwmd-day').text(day);
    $('.vwmd-month').text(month);
    $('.vwmd-year').text(year);


    //Menu
    $('.swn-list .swnl-item:last-child').click(function() {
        $(this).toggleClass('active');
        $('.swn-menu').toggle();
    });

    //Hotnews

    $('.swqwm-right').height($('.swqwm-left').height());
    $('.swxw-right').slimScroll({
        height: '400px',
        width: 380,
        wheelStep: 100
    });

    var hotnews = new Swiper('.swbhh-container', {
        slidesPerView: 'auto',
        spaceBetween: 30
    }),
        special = new Swiper('.swswm-slider', {
            slidesPerView: 'auto',
            spaceBetween: 20
        }),
        quagiang = new Swiper('.swqwm-right', {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            scrollbar: '.swiper-scrollbar',
            mousewheelControl: true,
            autoHeight: true
        }),
        snshome_thumb = new Swiper('.snsh-thumb', {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20
        }),
        snshome_info = new Swiper('.snsh-info', {
            speed: 600,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            effect: 'fade',
            pagination: '.snshi-pagination',
            prevButton: '.snshi-prev',
            nextButton: '.snshi-next'
        });

    snshome_thumb.params.control = snshome_info;
    snshome_info.params.control = snshome_thumb;
})
