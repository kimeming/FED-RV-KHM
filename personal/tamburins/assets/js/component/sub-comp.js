// sub page layout component
import store from "../vuex_store_store.js";
export const subTop = {
    template: `
        <div class="sub-top">
         <div class="inner" >
         <ul class="category-tab"  v-for="(val,key) in $store.state.linkSetData">
         <h3 class="sub-title">{{key}}</h3>
            <li class="tab" :class="{on: $store.state.catName === k }" @click="getCatName(k)"
            v-for="(v,k) in val.menu">
                <a href="#">{{k}}</a>
            </li>
            </ul>

        </div>
    </div>
    `,
    data() {
        return {};
      },
      methods: {
        getCatName(pm) {
            // console.log("가져온카테고리", pm);
            // 파라미터 스토어로 보내기
            store.commit("setData", pm);
          },
      },
}

export const SubType1 = {
    template: `
        <!-- sub-container s -->
        <div class="sub-container" id="main">
            <!-- sub-top s -->
            <sub-top-comp></sub-top-comp>
            <!-- sub-top e -->
            <!-- contents s -->
            <router-view></router-view>
            <!-- contents e -->
        </div>
        <!-- sub-container e -->
    `,
    components: {
        "sub-top-comp": subTop,
    },
}

export const SubType2 = {
    template: `
        <!-- sub-container s -->
        <div class="sub-container" id="main">
            <!-- contents s -->
            <div class="contents type2">
                <router-view></router-view>
            </div>
            <!-- contents e -->
        </div>
        <!-- sub-container e -->
    `,
}