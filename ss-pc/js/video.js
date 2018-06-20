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
    if ($(event.target).is('.open-menu') && ( $("#menu-video").css('height') != '0px')) {
        closeNav();
    }
});




function openNav() {
    document.getElementById('menu-video').setAttribute("style","height:635px");
    document.getElementById("menu-video").classList.add("active");
    document.getElementById("img-nav-menu").src = "images/video/close_ico.svg";
}

function closeNav() {
    document.getElementById('menu-video').setAttribute("style","height: 0px");
    document.getElementById("menu-video").classList.remove("active");   
    document.getElementById("img-nav-menu").src = "images/video/list_ico.svg";
}