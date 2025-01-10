// sub.js
import comfn from "./common.js";
comfn();

// 서브 소스 데이터 가져오기
import subSource from "../data/sub_data.js";
console.log(subSource);

// 파라미터 확인하기
// url로 넘어온 물음표가 없으면 첫페이지로 돌려보내기

let pm = location.search;
console.log('파라미터값', pm);

if(pm.indexOf("?") == -1) {
    alert("올바른 접근이 아닙니다~!");
    // 없으면 첫페이지로 돌아가라
    location.href = "index.html";
}

// 물음표가 있는 파라미터 잘라내기
pm = pm.split('=')[1];
console.log('원하는값', pm);

// 데이터 매칭하여 html 넣기
$(".main-area").html(subSource[pm]);