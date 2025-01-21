// vogue PJ 공통 컴포넌트 common.js

// 1. header component
const TopComp = Vue.component("top-comp", {
  // 1-1. 템플릿
  template: `
      <header class="top-area inbox">
        <!-- 1-1. 로고박스 -->
        <div class="logo">
          <h1>
            <a href="index.html">
              <img src="./images/svg/logo.svg" alt="메인로고" />
            </a>
          </h1>
        </div>
        <!-- 1-2. 메뉴박스 -->
        <nav class="gnb">
          <ul>
            <li v-for="v in this.gnbMenu"><a href="#">{{v}}</a></li>
          </ul>
        </nav>
        <!-- 1-3. 요약메뉴박스 -->
        <nav class="sum-menu">
          <ol>
            <li v-for="v in this.sumMenu"><a href="#">{{v}}</a></li>
          </ol>
        </nav>
      </header>
    
    `,
  // 1-2. 데이터 셋업 리턴 메서드
  data() {
    return {
      // (1) GNB 메뉴 데이터
      gnbMenu: ["FASHION", "BEAUTY", "LIFESTYLE", "CULTURE", "VIDEO"],
      sumMenu: ["KOREA", "구독하기", "≡"],
    };
  },
});
const BottomComp = Vue.component("bottom-comp", {
  template: `
  <div id="footer-area">
        <footer class="footer-area ibx common-area">
          <!-- 3-1.하단로고 -->
          <div class="blogo">
            <img src="./images/svg/logo_white_m.svg" alt="하단로고" />
          </div>
          <!-- 3-2.하단링크 --> 
          <ul class="blink">
            <li>
              <a href="#">정기구독</a>
            </li>
            <li>
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">광고 및 제휴</a>
            </li>
            <li>
              <a href="#">개인정보 처리방침</a>
            </li>
          </ul>
          <!-- 3-3.회사주소 -->
          <address class="addr">
            WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
            VOGUE.COM KOREA IS OPERATED BY DOOSAN MAGAZINE.
          </address>
         
        </footer>
      </div>
      <!-- 위로가기버튼 -->
      <a href="#" class="tbtn fi fi-angle-up">
        <span class="ir">위로가기버튼</span>
      </a>
     `,
});

export { TopComp, BottomComp };
