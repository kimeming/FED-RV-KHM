// FAQ JS - faq.js

$( document ).ready(function() {
    // 아코디언 js
    // 대상선정
    // 클릭대상 question , 이벤트대상 : anwser
    $('.question').click(function(){
        // .question에 class 'on' 이 없을 때 실행
        if(!$(this).hasClass('on')){
            // 다른 질문들 닫기
            $('.question').removeClass('on');
            $('.answer').stop().slideUp();
            // 해당하는 질문만 열기
            $(this).addClass('on');
            $(this).next('.answer').stop().slideDown();
        } else {
            // .question에 class 'on' 이 있을 때 실행
            $(this).removeClass('on');
            $(this).next('.answer').stop().slideUp();
        }
    });
});