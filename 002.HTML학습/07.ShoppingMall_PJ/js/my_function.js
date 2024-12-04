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

// import 해서 사용할 파일이므로 객체를 내보내야 함
export default myFn;
// 외부로 내보낸다 (하나만 내보낼 때) default 함수이름