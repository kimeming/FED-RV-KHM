// 공통처리 JS - common.js

// 공통 데이터 가져오기
import comData from "../data/common_data.js";

// 실행 함수 만들고 내보내기
export default function comfn(){
    console.log(comData);
    // 상단/하단 공통소스 제이쿼리로 넣기
    $('body').prepend(comData.topArea).append(comData.footerArea);
}