<<<<<<< Updated upstream
<<<<<<< Updated upstream
// js/main.js
import HeaderComponent from "./component/headerComp.js";
import MainComponent from "./component/mainComp.js";
import FooterComponent from "./component/footerComp.js";

// 전역 등록
Vue.component("header-component", HeaderComponent);
Vue.component("main-component", MainComponent);
Vue.component("footer-component", FooterComponent);

// Vue 인스턴스 초기화
new Vue({
  el: "#app",
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
});