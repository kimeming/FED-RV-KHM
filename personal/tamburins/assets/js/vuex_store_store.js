// 뷰엑스스토어 JS - 전역뷰데이터 저장소 vuex_store_store

// 데이터 불러오기
import linkSetData from "../data/gnb-data.js";
import productList from "../data/product-list.js";
import productDetail from "../data/product-detail.js";

// console.log(Object.values(linkSetData));

// 뷰엑스 스토아 이용한 변수 셋팅
// [뷰엑스 스토어 인스턴스 생성]
export default new Vuex.Store({
  // (1) 데이터 셋팅 구역 : state
  state: {
    // GNB 데이터
    linkSetData,
    // 제품 리스트 데이터
    productList,
    // 제품 디테일
    productDetail,
    catName:"",
    catList:{},
  
  },
  // (2) 데이터 변경 구역 : mutations
  mutations: {
    // 정보 변경 메서드 - 카테고리 받아와서 catList 에 데이터 셋업
    setData(s, pm) {
    // 들어온 카테고리 공백 없앰
    // const cat = pm.split(" ").join("");
    s.catList = s.productList.filter(v=>v.subCat == pm)
    console.log(s.catList);
    },

  },
  // (3) 비동기처리 메서드구역 : actions
  actions: {
    
  },
}); /////////Vuex.Store ////////////
