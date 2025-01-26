// 제품 디테일페이지 컴포넌트 JS - product_view_comp

import { subTop } from "./sub-comp.js";

export const List = {
  template: `
<!-- sub-container s -->
  <!-- contents s -->
  <div class="sub-container" id="main">
    <!-- sub-top s -->
    <sub-top-comp></sub-top-comp>
    <!-- sub-top e -->
    <div class="contents">
      <div class="product-list-area">
        <ul class="product-list-wrap">
          <li class="product-select-box" v-for="(v,k) in $store.state.catList" :key="k.idxN">
            <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기">
            <section class="product-img-wrap">
              <img :src="v.pImage" :alt="v.pTitle" />
            </section>
            <div class="product-info" >
              <h2 class="product-title">{{v.pTitle}}</h2>
              <em class="product-note">{{v.pNote}}</em>
              <section>
                <strong class="product-price">{{v.pPrice}}</strong>
                <span class="product-note-count"></span>
              </section>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- contents e -->
<!-- sub-container e -->
    `,
  data() {
    return {};
  },
  components: {
    "sub-top-comp": subTop,
  },
};
