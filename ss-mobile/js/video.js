function openNav() {
	document.getElementById("menu-video").style.width = "200px";
	document.getElementById("full-screen").style.width = "100%";
	document.getElementById("img-nav-menu").src = "images/video/close_ico.svg";
	document.getElementById("menu-btn").classList.add("active");
}

function closeNav() {
	document.getElementById("menu-video").style.width = "0";
	document.getElementById("full-screen").style.width = "0";
	document.getElementById("img-nav-menu").src = "images/video/list_ico.svg";
	document.getElementById("menu-btn").classList.remove("active");
}

function openSearch () {
	document.getElementById("input-search-video").style.display = "inline-block";
	document.getElementById("input-search-video").style.width = "200px";
	document.getElementById("full-screen2").style.width = "100%";
	document.getElementById("search-btn").style.color = "#ed1c24";
}

function closeSearch () {
	document.getElementById("input-search-video").style.width = "0";
	document.getElementById("full-screen2").style.width = "0";
	document.getElementById("input-search-video").style.display = "none";
}

$(document).click(function(event){

	if (!$(event.target).is("#menu-video") && ( $("#menu-video").css('width') != '0px')) {
		closeNav();
	} 
	if ($(event.target).is('.open-menu')) {
		openNav();
	}
	if ($(event.target).is('.open-menu') && ($("#menu-video").css('width') != '0px')) {
		closeNav();
	}

	if ($(event.target).is('.search-btn i')) {
		openSearch();
	}
	
	// if (!$(event.target).is("#input-search-video") && ( $("#input-search-video").css('width') != '0px')) {
	// 	closeSearch();
	// }

});
$(document).ready(function(){
    var samecatevideo = new Swiper('.same-cate-video-container', {
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: false,
        // spaceBetween: 18,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });
    var hotvideo = new Swiper('.hot-video-container', {
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: false,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });
    var newestvideo = new Swiper('.newest-video-container', {
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: false,
        prevButton: '.sns-prev',
        nextButton: '.sns-next'
    });

});




