// 옷소매 갤러리 JS - main.js

import mFn from "./my_function.js";

/*********************************************************** 
    1. 기능정의: 
        버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

    1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
        -> 갤러리부모박스.appendChild(맨앞자식div)

    1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
        -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
 ***********************************************************/

const $target = $(".gbx");

// 오른쪽 버튼 클릭시 기능구현
$(".rb").click(function () {
  if (blockCode()) return;
  $target.append($target.find("div").first());
});

// 왼쪽 버튼 클릭시 기능구현
$(".lb").click(function () {
  if (blockCode()) return;
  $target.prepend($target.find("div").last());
});

// 광클금지함수
let clickSts = false;

function blockCode() {
  // cliskSts가 true일 때 true 값 리턴
  if (clickSts) return true;
  // clickSts가 false일 때 실행
  clickSts = true;
  setTimeout(() => {
    clickSts = false;
  }, 400);
  // clickSts false이면 전역세팅후 return false
  return false;
}

////////////////////////////////
//////// 자동넘김 셋팅 하기 /////
////////////////////////////////
// 인터발, 타임아웃 저장용 변수
let autoI, autoT;

// 최초호출
slideAuto();    

// 1. 자동호출함수 ///
function slideAuto(){
    autoI = setInterval(()=>{
        $target.append($target.find('div').first());
    }, 2000);
} /// slideAuto함수 ///

// 2. 지우기 함수 ////
function clearAuto(){
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(slideAuto, 5000);
} /// clearAuto 함수 ////

// 3. 버튼 클릭시 지우기 함수 호출 셋팅 ///
$('.abtn').click(clearAuto);