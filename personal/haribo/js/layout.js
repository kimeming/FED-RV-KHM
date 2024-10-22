$(document).ready(function () {
    const  $body = $('body'),
        $gnbWrap = $('.header .gnb-wrap'),
        $headerBg = $('.header-bg'),
        $menuBtn = $('.header .menu-btn');

    $menuBtn.on({
        click: function(){
            if(!$(this).hasClass('off')){
                $(this).addClass('off');
                $body.addClass('on');
                $gnbWrap.addClass('open');
                $headerBg.addClass('on');
            } else {
                $(this).removeClass('off');
                $body.removeClass('on');
                $gnbWrap.removeClass('open');
                $headerBg.removeClass('on');
            }
        }
    });
});
