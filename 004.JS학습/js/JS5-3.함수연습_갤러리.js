// JS5-3.함수연습_갤러리 JS
import myFn from "./my_function.js";

/********************************************* 
[ 롤링갤러리 기능정의 ]

- 버튼클릭시 메인 이미지 변경하기
1. 오른쪽버튼 클릭시 메인이미지가
다음 순번의 이미지로 변경된다.
(단,마지막 이미지 다음이미지는 처음이미지다)
2. 왼쪽버튼 클릭시 메인이미지가
이전 순번의 이미지로 변경된다.
(단, 처음이미지 이전이미지는 마지막 이미지다)

_____________________________________

[ 롤링갤러리 기능구현 설계 ]

1. 이미지 번호를 전역변수로 설정한다.
2. 버튼클릭시 전역변수 이미지번호를 증감하여
실제로 변경될 이미지 코드의 src속성값으로
설정한다.
3. 증감시 오른쪽버튼은 ++(1씩증가)
    왼쪽버튼은 --(1씩감소)
4. 제한조건 :
    마지막 다음번호는 1
    처음 이전번호는 7
    (1~7까지 7개의 이미지가 있다)
    if문으로 조건을 체크한다!

*********************************************/

// code s

/*
  1. 대상선정
    이벤트 종류: click
    1-1. 이벤트 대상: .btn
     1-2. 변경대상: #mbox img
*/

// 공통변수 ////
// [1] 이미지설명 배열변수
const iTxt = [
  "노랑잉꼬가 먹이를 꼭꼭 찍어먹어요~",
  "분홍장미가 머리칼을 너풀너풀 날려요~",
  "백조같은 거위가 뚱하니 바라보아요~",
  "바이킹이 너무 어지러워 토가 나와요~",
  "눈사람이 가짜인데 진짜같아 보여요~",
  "이 양은 보통양이 아니고 복제양 돌리예요~",
  "잉꼬 한쌍이 영화를 찍어요~",
];

// [2] 이미지 설명 글자색 배열변수
const tColor = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

// [3] 이벤트 대상 변수
const btn = myFn.qsa(".btn"),
  mainImg = myFn.qs("#mbox img"),
  imgTxt = myFn.qs(".imgtxt");
// console.log(btn, mainImg, startBtn, stopBtn)

// 1-3. 이미지 하단 텍스트 변경하기
// (1). 초기값 세팅 - 배열에서 불러옴
imgTxt.innerText = iTxt[0];
imgTxt.style.color = tColor[0];

// 2. 이벤트 설정하기
btn.forEach((el) => {
  myFn.addEvt(el, "click", changeImg); // 클릭이벤트
}); // forEach

// 3. 함수 만들기
// 이미지 번호 변수 (전역변수)
let iNum = 1;
function changeImg() {
  // (1) 함수 호출 및 this 확인
  // console.log("나야나", this);

  // (2) 오른쪽 버튼인지 구분하기
  let isR = this.classList.contains("rb");

  // (3) 이미지 번호 증감 분기하기
  if (isR) {
    iNum++;
    if (iNum > 7) iNum = 1; // 한계값 체크 (끝번호 다음은 첫번호)
  } else {
    iNum--;
    if (iNum < 1) iNum = 7; // 한계값 체크 (첫번호 이전은 끝번호)
  } // if문

  // (4) 이미지 src 변경하기
  // 변경 대상은 mainImg 변수에 할당
  mainImg.setAttribute("src", `./images/img${iNum}.jpg`);
  // 속성 읽기 JS 메서드 - getAttribute(속성명)
  // 속성 쓰기 JS 메서드 - setAttribute(속성명, 값)

  // (5) 이미지 설명 텍스트 변경하기
  imgTxt.innerText = iTxt[iNum - 1];
  imgTxt.style.color = tColor[iNum - 1];
}

// 4. 자동넘김

/*
    [ JS 클래스 관련 내장함수 ]
    classList 객체
    -> 클래스를 요소에 넣거나 빼거나 클래스여부 판별
    ((관련메서드))
    1. add(클래스명) : 클래스추가
    2. remove(클래스명) : 클래스제거
    3. toggle(클래스명) : 클래스추가/제거
    4. contains(클래스명) : 클래스명 일치시 true
    5. replace(이전클래스명,변경클래스명)
        : 특정클래스를 다른 클래스로 변경

    -> 클래스 추가나 제거시 콤마로 구분하여
    여러개의 클래스를 추가하거나 제거할 수 있다!
    예) 요소.classList.add("tt","cc","dd")

    _______________________________________________

    [ JS 타이밍 함수 : Timing Function ]

    1. setInterval(함수,시간)
    - 일정시간 간격으로 함수를 호출!
    - 시간은 1/1000초, 단위안씀(예:1000->1초)
    -> 인터발함수를 지울때는 변수에 담고
    아래 함수를 호출한다!
    ->>> clearInterval(변수)
    ____________________________________

    1. setTimeout(함수,시간)
    - 일정시간 후 한번만 함수를 호출!
    - 시간은 1/1000초, 단위안씀
    -> 타임아웃을 지울때는 변수에 담고
    아래 함수를 호출한다!
    ->>> clearTimeout(변수)
*/

// 타임아웃 함수로 미니언즈 애니하기!!! ////
// 원리: 미리셋팅된 클래스를 미니언즈요소에 일정시간 후 넣고/빼고/넣기를 해준다!
// 변경대상: #mini
const mini = document.querySelector("#mini");
// console.log(mini);

// 2초후 미니언즈 class "on1" 넣기
setTimeout(() => {
  mini.classList.add("on1");
  // mini.classList.add("on1","바보야","멍멍아");
}, 2000);

// 4초후 미니언즈 class "on1" 빼기
setTimeout(() => {
  mini.classList.remove("on1");
  // mini.classList.remove("on1","멍멍아");
}, 4000);

// 6초후 미니언즈 class "on2" 넣기
setTimeout(() => {
  mini.classList.toggle("on2");
}, 6000);

// 8초후 미니언즈 class "on2"를 "on1" 으로 바꾸기
setTimeout(() => {
  mini.classList.replace("on2", "on1");
}, 8000);

/***************************************** 
            [ 자동넘김 기능 구현하기 ]
            - "자동넘김"버튼 클릭시 일정시간간격으로
            롤링갤러리가 넘어감
            - "멈춤"버튼 클릭시 정지됨
           *****************************************/
// 이벤트 대상: .abtn button
const abtn = myFn.qsa(".abtn button");
//   console.log(abtn);

// 인터발용변수
let autoI;

// 버튼에 클릭이벤트 설정하기 //////
for (let x of abtn) {
  x.onclick = () => {
    // 1. 클릭된 요소의 클래스가 "start"인지 여부
    let isB = x.classList.contains("start");
    // classList.contains(클래스명)
    // -> 클래스가 해당요소에 있으면 true
    console.log(".start인가?", isB);

    // 2. 조건분기
    // 2-1. true이면 자동넘김
    if (isB) {
      // setInterval(함수,시간)
      // 오른쪽버튼 클릭 강제 발생 => click 메서드 사용
      autoI = setInterval(() => {btn[1].click()}, 1000);
    } //////// if ////////

    // 2-2. false이면 멈춤
    else {
      // clearInterval(인터발변수)
      clearInterval(autoI);
    } //////// else ////////

    // 3. 버튼 보이기/숨기기
    // 항상 클릭된 버튼은 숨긴다!
    x.style.display = "none";
    // "멈춤"/"자동넘김" 버튼 전환하며 보이기
    abtn[isB ? 1 : 0].style.display = "inline-block";
    // isB? "자동넘김"버튼인가?
    // true이면 1 즉 두번째 버튼 보이기
    // false이면 0 즉 첫번째버튼 보이기

    // console.log("autoI변수:",autoI);
    // 숫자가 찍힘 -> Number형으로 체크됨
    // 인터발함수의 특징임
  }; //////// click //////////
} //////////// for of /////////////////
