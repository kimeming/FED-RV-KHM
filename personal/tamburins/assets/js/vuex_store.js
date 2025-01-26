//프로젝트 리스트 뷰엑스 스토어

import store from "./vuex_store_store.js";
// -->>> 뷰인스턴스에서 등록 필수
import { Header, Footer } from "./component/layout-comp.js";
import { List } from "./component/list-comp.js";
import { View } from "./component/view-comp.js";
import { subTop } from "./component/sub-comp.js";


// [1] 전역컴포넌트 만들기
// (1) 상단영역 컴포넌트
Header;
// (2) 서브메뉴 컴포넌트
subTop;
// (3) 메인영역 컴포넌트
List;
// (4) 하단영역 컴포넌트
Footer;

// [2] 뷰 인스턴스 생성 ->컴포넌트를 html에 뿌려주는 역할
new Vue({
  // 대상-컴포넌트 들어갈 대상
  el: "#app",
  // 스토어등록 필수
  store,
  // 공통 컴포넌트 등록
  components: {
    "header-comp": Header,
    "list-contents-comp": List,
    "view-comp": View,
    "footer-comp": Footer,
  },
  data: {
    
  },
  methods: {
    
   
  },
  // 뷰인스턴스 생성후 구역
  created() {
    
  },
  // DOM 관련 코딩
  mounted() {
    const tab = document.querySelectorAll(".tab");
    tab.forEach((t) => {
      t.onclick = function () {
        tab.forEach((el) => el.classList.remove("on"));
        this.classList.add("on");
      };
    });
  },
});
