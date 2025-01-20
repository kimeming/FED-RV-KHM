// FAQ JS - faq.js

$( document ).ready(function() {
    // 아코디언 js
    // 대상선정
    // 클릭대상 question , 이벤트대상 : anwser
    $('.question').click(function(){
        $(this).toggleClass('on');
        $(this).next('.answer').stop().slideToggle();
    });
});