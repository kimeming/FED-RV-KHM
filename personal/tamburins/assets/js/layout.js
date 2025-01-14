// layout.js (header, footer)
$(() => {
  // 메뉴 버튼 열고 닫기
  // gnb dep1 누르면 dep2가 있을 때만 슬라이드다운
  // 검색창 열고 닫기
  // 메뉴 버튼 누르면 dimm on
  const $body = $('body'),
        $dimm = $('.dimm'),
        $header = $('.header'),
        $menuBtn = $(".menu-btn"),
        $gnbWrap = $('.gnb-wrap'),
        $gnbA = $('.gnb-list>li>a'),
        $dep2 = $('.gnb-list .dep2'),
        $dep2A = $('.gnb-list .dep2>li>a'),
        $searchWrap = $('.search-wrap'),
        $searchOpen = $('.search-open-btn'),
        $searchClose = $('.search-close-btn');

  // menu open
  $menuBtn.on('click', function(){
    if(!$(this).hasClass('on')){
      gnbOpen();
    } else {
      gnbClose();
    }
  });

  // gnb
  $gnbA.on('click', function (e) {
      let $currentDep2 = $(this).siblings('.dep2');
      $dep2.stop().slideUp();
      $dep2A.removeClass('on');
      if($currentDep2.length > 0){
          e.preventDefault();
      }
      if(!$(this).parent().hasClass('active')){
          $(this).parent().addClass('active').siblings().removeClass('active');
          $currentDep2.stop().slideDown();
      } else {
          $(this).parent().removeClass('active');
          $currentDep2.stop().slideUp();
      }
  });

  $dep2A.on('click', function () {
    if(!$(this).hasClass('on')){
      $(this).addClass('on').parent().siblings().children().removeClass('on');
    } else {
        $(this).removeClass('on');
    }
  });

  function gnbClose(){
    $gnbWrap.removeClass('open');
    $menuBtn.removeClass('on');
    $dep2.removeAttr('style');
    $body.removeClass('on')
  }

  function gnbOpen(){
    $gnbWrap.addClass('open');
    $menuBtn.addClass('on');
    $body.addClass('on')
  }

  // search open
  $searchOpen.on('click', () => {
    $searchWrap.addClass('open');
    $body.addClass('on');
    $dimm.addClass('on');
  });

  $searchClose.on('click', () => {
    searchClose();
  });

  $dimm.on('click', () => {
    searchClose();
  });

  $('#searchForm').on('input', function () {
    const $result = $('.result'),
      $recommend = $('.recommend');
    ;
    if ($(this).val().trim() !== '') {
      $('.search-content').removeClass('active');
      $result.addClass('active');
    } else {
      $('.search-content').removeClass('active');
      $recommend.addClass('active');
    }
});

function searchClose(){
  $searchWrap.removeClass('open');
    $body.removeClass('on');
    $dimm.removeClass('on');
}

  // header sticky
  sticky();
  $(window).on('scroll', function() {
      sticky();
  });
  function sticky() {
    let headerFix = $(window).scrollTop();
    if (headerFix > 0 && !$gnbWrap.hasClass('open')) {
        $header.addClass('sticky');
    } else if (headerFix <= 0 && !$gnbWrap.hasClass('open')) {
        $header.removeClass('sticky');
    }
  }

  // sub-page header
  if($('#main').hasClass('sub-container')){
    $header.addClass('black');
  }

});
