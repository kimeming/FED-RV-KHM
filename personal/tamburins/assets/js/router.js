// router.js
import linkSetData from '../data/gnb-data.js'
import { Main } from './component/main-comp.js';
import { SubType1, SubType2 } from './component/sub-comp.js';

const routes = [
  { path: "/", component: Main }, // 메인 페이지
  { path: "/evening-glow", component: SubType1 }, // Evening Glow 페이지
  { path: "/perfume", component: SubType1 }, // Perfume 페이지
  { path: "*", redirect: "/" }, // 잘못된 경로 접근 시 메인 페이지로 리다이렉트
];

const router = new VueRouter({
  mode: "history", // URL에서 '#' 제거
  routes,
});

export default router;