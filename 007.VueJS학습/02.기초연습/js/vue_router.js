// vue_router.js

// 라우터 세팅 js 불러오기
import router from "./router.js";

// 링크 세팅 객체 데이터
/*
    데이터 구조
    {
        상위메뉴1: {링크, 메뉴: ""},
        상위메뉴2: {링크, 메뉴: {
            하위메뉴: {}
            }
        },
    }

    하위메뉴가 없으면 빈 따옴표, 있으면 객체로 세팅

    [ 메뉴 객체 속성 정의 ]
        라우터 전달 속성: 정해진 것
            (1) name: 라우트 이름
            (2) params: 라우트 매개변수 객체

        파라미터 객체: 내가 정한 것
            (1) item: 하위 메뉴 이름
            (2) cls: 클래스명 (이미지 변경)
*/

const linkSetData = {
  세계여행사: {
    link: { path: "/trip" },
    menu: "",
  },
  세계먹거리: {
    link: { path: "/foods" },
    menu: {
      피자: {
        name: "umsik",
        params: { item: "피자", cls: "pizza" },
      },
      파스타: {
        name: "umsik",
        params: { item: "파스타", cls: "pasta" },
      },
      똠양꿍: {
        name: "umsik",
        params: { item: "똠양꿍", cls: "ddom" },
      },
    },
  },
  세계놀이: {
    link: { path: "/game" },
    menu: "",
  },
  회사소개: {
    link: { path: "/corp" },
    menu: "",
  },
};

// 뷰 인스턴스 객체 생성하기
new Vue({
  // 1. 대상선정: #app
  el: "#app",
  // 2. 라우터 설정
  router,
  // 3. 데이터 설정
  data: {
    // 인스턴스 외부의 데이터를 인스턴스 내부ㅐ로 가져옴
    linkData: linkSetData,
  },
  // 4. 메서드 설정
  methods: {},
  // 5. 라이프 사이클 메서드: mounted -> DOM 렌더링
  mounted() {},
});
