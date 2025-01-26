// 공통 JS common.js
$(() => {
    // tab js
    const tabList = $('.tab-list>li>a');
    const tabView = $('.tab-view-list>li');
    
    $('.tab-list>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    tabList.on('click', function(){
        let tabIdx = $(this).parent().index();
        console.log(tabIdx);
        tabView.removeClass('on');
        tabView.eq(tabIdx).addClass('on')
    });
});