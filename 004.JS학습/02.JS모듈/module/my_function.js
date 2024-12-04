// 공통함수 JS - my_function.js
// 나의 함수 객체
const myFn = {
    // 요소 선택 함수
    qs: x => document.querySelector(x),
    qsEl: (el,x) => el.querySelector(x),
    qsa: x => document.querySelectorAll(x),
    qsaEl: (el,x) => el.querySelectorAll(x),

    // 이벤트 셋팅 함수
    addEvt: (el, evt, fn) => el.addEventListener(evt, fn),
};

// 변수에 할당한 경우 유일한 것을 export 하는 방법은 default
export default myFn;