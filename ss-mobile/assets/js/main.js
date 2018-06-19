$(document).ready(function() {
	window.location.href.replace(/#.*/,'');
	
	var owl 	= $(".list-forcus-news");
	var owl1 	= $(".list-supper-hot");
	var owl2 	= $(".list-news");
	var catnav 	= $('.ss-sub-category');

	owl.owlCarousel({
		center: true,
	    items:1,
	    loop:true,
	    margin:20,
	    nav:true,
	    dots:false,
	    navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	    stagePadding: 77,
	    responsive : {
		    0 : {
		       	stagePadding: 77,
		    },
		    480 : {
		        stagePadding: 130,
		    },
		}

	});

	owl1.owlCarousel({
		autoWidth:true,
	    items:1,
	    loop:true,
	    margin:20,
	    nav:true,
	    dots:false,
	    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});

	owl2.owlCarousel({
		autoWidth:true,
	    items:1,
	    loop:false,
	    margin:15,
	    nav:false,
	    dots:true,
	    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});

	catnav.owlCarousel({
        autoWidth:true,
        items:3,
        loop:false,
        margin:20,
        nav:false,
        dots:false,
	});


	
	
	//////////////////// MODAL ////////////////////
	var modals;
	$('.btn-view a').click(function(){
		var id_btn = '.'+this.id;
		modals = document.getElementById($(id_btn).attr('id'));
		$(id_btn).show();
		closemodal(false);
	});
	$('span.close').click(function() {
		$('.modal').hide();
		$('.col-sapce').removeAttr('style');
		closemodal(true);
		
	});
	window.onclick = function(event) {
		if (event.target === modals) {
			closemodal(true);
			modals.style.display = "none";
			$('.col-sapce').removeAttr('style');
		}
	};
	function closemodal(opens)
	{
		if(opens===true){
			$('body').css('overflow','visible');
			//$.fn.fullpage.setAllowScrolling(true);
		}else{
			$('body').css('overflow','hidden');
			//$.fn.fullpage.setAllowScrolling(false);

		}
	}
	
	$('.view-demo a').click(function(){
		
		if($(this).hasClass('active-open')){
			$(this).closest('.view-demo').find('.pic-banner').slideUp("slow");
			$(this).removeClass('active-open');
		}else{
			$('.view-demo a').removeClass('active-open');
			//$('.pic-banner').slideUp("slow");
			$(this).addClass('active-open');
			$(this).closest('.view-demo').find('.pic-banner').slideDown("slow");
		}
		//$.scrollTo($('#divtop'), 1000);
		
		//$( "#divtop" ).scrollTop( 300 );
		
		
		//$('#div_id').animate({scrollTop:0}, '500', 'swing');
		
		// $('.modal #divtop').animate({scrollTop:308}, 'slow');
		
		//$('.modal ').animate({ scrollTop: $('#divtop').offset().top }, 'slow');

	});
	
	
	
	//////////////////// GO LINK TYPE ////////////////////
	$(".part_types a").on('click',function() {
		var name = $(this).attr('class');
        $('html, body').animate({
            scrollTop: $('#'+name).offset().top
        }, 1000);
        return false;
    });
	
	$('.back-view, .icon-back-view').click(function(){
		$('.move-right-close').animate({
			left: "0%",	
		},500);
		$('.col-left-table').animate({
			left: "0%",
		}, 500);
		
		$('.icon-back-view').fadeOut();
		  
	});
	



	//////////////////// SCROLL TOP ////////////////////
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	// Menu
	function hidepopup() {
        $('.ssp-lastest').hide();
        $('.ssp-trend').hide();
        $('.ssp-menu').hide();
        $('.ss-popup').hide();
	}
	$('.sshl-item').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').css('overflow', 'inherit');
            $('.ss-popup').hide();
		} else {
            $('.sshl-item').removeClass('active');
            $(this).addClass('active');
            hidepopup();
            $('body').css('overflow', 'hidden');
            $('.ss-popup').show();
		}
		var checkclick = $(this).children().attr('class');
		switch(checkclick) {
			case 'sshli-time':
                $('.ssp-lastest').fadeToggle();
				break;

			case 'sshli-trend':
                $('.ssp-trend').fadeToggle();
                break;
			case 'sshli-menu':
				$('.ssp-menu').fadeToggle();
		}
	})

	// Detail Nav
	$('.ssdcb-list').find('.ssdsbl-item').eq(1).click(function() {
		$('.ssdsbli-list').toggle();
	})
});

