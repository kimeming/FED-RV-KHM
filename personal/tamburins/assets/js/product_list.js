// 제품리스트 JS - product_list.js

// 데이터 불러오기
import productList from "../data/product-list.js";

// 개선해야할것 1.10
// gnb 메뉴에 따라 상품명이 바뀌어야함
// -> 메뉴 택스트를 불러와 제품리스트 데이터에 접근하고 매칭되는 것을 넣는다

// 대상 선정
const pLKey = Object.keys(productList);
const pLVal = Object.values(productList);
const sCategory = $(".category-tab li.on").text().trim();

const listOfCategories = productList[sCategory];
// console.log(productList, pLKey, pLVal);
console.log(sCategory, productList[sCategory]);

$(".category-tab li").click(function () {
  $(this).addClass("on");
  $(this).siblings().removeClass("on");
  let ssCategory = $('.category-tab li').contains('on')
  console.log(ssCategory);
});

// product-list-wrap에 넣을 컴포넌트 만들기
Vue.component("list-comp", {
  // (1) 템플릿 설정
  template: `
    <li class="product-select-box">
      <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기">
        <section class="product-img-wrap">
            <img v-bind:src="pSrc" alt="테스트이미지"/>
        </section>
        <div class="product-info">
          <h2 class="product-title">{{pTitle}}</h2>
          <em class="product-note">{{pNote}}</em>
          <strong class="product-price">{{pPrice}}</strong>
          <span class="product-note-count">{{pNoteCnt}}</span>
        </div>
      </a>
    </li>
    `, ///template ///

  props: ["product-title", "product-price", "product-note-count", "product-note", "listIdx"],
  data() {
    return {
      // 이미지 src: "./img/evening_glow/img_evenig_glow_01.jpg"
      pSrc: `./img/${this.setCat()}/img_${this.setCat()}_${this.setNum()}.jpg`,
      // 상품이름
      pTitle: this.productTitle,
      // 노트
      pNote: this.productNote,
      // 가격
      pPrice: this.productPrice,
      // 노트개수
      pNoteCnt: this.productNoteCount,
    };
  }, ///data

  methods: {
    setCat() {
      switch (sCategory) {
        case "이브닝글로우":
          return "evening_glow";
        case "퍼퓸":
          return "perfumes";
        case "퍼퓸밤":
          return "perfume_balm";
        case "쉘퍼퓸핸드":
          return "shell_perfume_hand";
        case "에그립밤":
          return "egg_lipbalm";
        case "체인핸드":
          return "chain_hand";
        case "샤워리바디":
          return "showery_body";
        case "퍼퓸드핸드앤바디":
          return "perfumed_hand";
        case "카디퓨저":
          return "car_diffuser";
        case "룸프래그런스":
          return "room_fragrance";
        case "퍼퓸캔들":
          return "perfume_candle";
      }
    },
    setNum() {
      let lN = this.listIdx;
      return lN < 10 ? "0" + lN : lN;
    },
  },
}); ///Vue 컴포넌트////////

// 새 인스턴스 생성
new Vue({
  el: ".product-list-wrap",
  data: {
    productList: productList,
    sCategory: sCategory,
    listOfCategories: listOfCategories,
  },
});
