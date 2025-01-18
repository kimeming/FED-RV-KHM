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

});