function gnbMenu(depth1, depth2) {
    // PC 네비
    var $gnb = $('.gnb');
    var $gnbDep1 = $('.gnbDep1', $gnb);

    // 개별메뉴 열기
    $gnbDep1.find("> a").on('focusin mouseenter', function() {  
      var parent = $(this).parent();    
      parent.find(".gnbDep2").stop().slideDown();
      $(this).addClass('on');
      parent.siblings().find(".gnbDep2").css("display", "none");
      parent.siblings().find("> a").removeClass('on');
     });
  
    $(".gnb").on('focusout mouseleave', function() {
      $(this).children('.gnbDep1').find('.gnbDep2').stop().slideUp("fast");
      $(this).children('.gnbDep1').find("> a").removeClass('on');
      $gnbDep1.eq(depth1-1).find("> a").addClass("on");
    });

    //gnb - 페이지 인식
    if ($gnbDep1.length > depth1-1) {
      $gnbDep1.eq(depth1-1).find('> a').addClass('on');
      $gnbDep1.eq(depth1-1).find('.gnbDep2 > li').eq(depth2-1).find('> a').addClass('on');
    }

		// 모바일 전체 네비
		var $moGnbWrap = $('.mo_gnb_wrap'),
    		$moGnb = $('.mo_gnb', $moGnbWrap),
        $moGnbLi = $('.mo_gnb > li', $moGnbWrap),
        $moBtnOpen = $('.mo_btn_open'),
        $moBtnClose = $('.mo_btn_close'),
        $moGnbBg = $('.mo_gnb_bg');
    
    // 모바일 - 전체내용 오픈
    // $moGnbWrap.hide();
    $moBtnOpen.on('click', function(e) {
    		e.preventDefault();
        $moGnbWrap.fadeIn(200);
        $moGnbWrap.find('.scroll').stop().animate({right:0}, 300);        
        $moGnbBg.fadeIn();
    });
    
    $moBtnClose.on('click', function(e) {
    		e.preventDefault();
    		$moBtnOpen.show();
        $moGnbWrap.fadeOut(200);
        $moGnbWrap.find('.scroll').stop().animate({right:-100}, 300);
        $moGnbBg.hide();
    });	
        
		$moGnbBg.on('click', function(e) {
    		e.preventDefault();        
    		$moGnbWrap.stop().fadeOut(200);        
        $moGnbWrap.find('.scroll').animate({right:0}, 300);
        $moBtnOpen.show();
    });
    
    // 모바일 - 1,2DEPTH 오픈
    // $moGnbLi.children('a').on('click', function(e) {
    // 		// e.preventDefault();
        
    //     var $depth = $(this).next('ul');
    //     if($depth.is(':visible')){
    //         $(this).removeClass('on');
    //         $depth.slideUp(300);
    //     } else {
    //     		$moGnbLi.children('a').removeClass('on');
    //         $(this).parent().siblings().find('ul').slideUp(300);
    //         $(this).addClass('on');
    //         $depth.slideDown(300);
    //     }
		// 		$('html, body').animate({scrollTop:top_pos}); //강제닫힘현상 해결
    // });
    
    // $('.mo_gnb .depth1 > li').children('a').on('click', function() {
    //     var $depth = $(this).next('ul');
    //     if($depth.is(':visible')){
    //     		$(this).removeClass('on');
    //         $depth.slideUp(300);
    //     } else {
    //     		$('.mo_gnb .depth1 > li').children('a').removeClass('on');
    //         $(this).parent().siblings().find('ul').slideUp(300);
    //         $(this).addClass('on');
    //         $depth.slideDown(300);
    //     }
		// 		$('html, body').animate({scrollTop:top_pos}); //강제닫힘현상 해결
    // });
    
    // //모바일 - 페이지 인식
		// if ($moGnbLi.length > depth1-1) {
    //     $moGnbLi.eq(depth1-1).find('> a').addClass('on');
    //     $moGnbLi.eq(depth1-1).find('.depth1 > li').eq(depth2-1).find('> a').addClass('on');
    //     $moGnbLi.eq(depth1-1).find('.depth1 > li').eq(depth2-1).find('.depth2 > li').eq(depth3-1).find('> a').addClass('on');
		// }
    
    // //모바일 - 2depth 오픈
    // if ( depth1 >= 0 && depth2 >= 0 ) {
    //     $moGnbLi.eq(depth1-1).addClass('on').children('.depth1').show().children('li').eq(depth2-1).addClass('on').children('.depth2').show();
    // }
}