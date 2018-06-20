$(document).ready(function(){
    var samecatevideo = new Swiper('.same-cate-video-container', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 18,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });
    var hotvideo = new Swiper('.hot-video-container', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 18,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });
    var newestvideo = new Swiper('.newest-video-container', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 18,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });

    $('.box-video .list').css("height", "435px");

    var boxvideo = new Swiper('.box-video .list',{
        direction: 'vertical',
        slidesPerView: 'auto',
        // spaceBetween: 20,
        freeMode: true,
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        mousewheelControl: true,
        autoHeight: true,
        scrollbarDraggable: true
    });
});

$(document).click(function(event){
    if (!$(event.target).is("#menu-video") && ( $("#menu-video").css('height') != '0px')) {
        closeNav();
    } 
    if ($(event.target).is('.open-menu')) {
        openNav();
    }
});




function openNav() {

    $('.menu-video').slideDown('fast', 'swing');
    console.log('open nav');
}

function closeNav() {

    $('.menu-video').slideUp('fast', 'swing');
    console.log('close nav');
}