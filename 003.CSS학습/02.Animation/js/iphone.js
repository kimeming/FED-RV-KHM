// iphone js

// 아이폰이 x축, y축으로 분할된 영역에 마우스오버 시 해당 수치로 회전하여 마우스 포인터를 바라보게 함
// css에서 마우스포인터도 이미지로 변경

// 1. 이벤트 대상: .evt-bx li
const target = document.querySelectorAll('.evt-bx li'),
    iphone = document.querySelector('.iphone');

// 2. 이벤트 설정하기
// 요소 개수 
const eleCnt = target.length;
// console.log("대상", target, eleCnt);

// 위치배열값
const yVal = [-60, -30, 0, 30, 60]; // y축 회전 각도 5가지
const xVal = [40, 0, -40]; // x축 회전 각도 3가지

// 개수만큼 for문 돌려서 이벤트 설정하기
// for(시작값;한계값;증가값);
for(let i = 0; i < eleCnt; i++){
    // y축값 5가지, x축값 3가지
    // 위의 값을 배열로 만든 뒤 순번으로 조합함
    // 첫번째줄: 0,0 / 0,1 / 0,2 / 0,3 / 0,4
    // 두번째줄: 1,0 / 1,1 / 1,2 / 1,3 / 1,4
    // 세번째줄: 2,0 / 2,1 / 2,2 / 2,3 / 2,4

    // 삼항연산자 사용 방법
    // let x1 = i > 4 ? i - 5 : i
    // console.log("나돌아?", i > 9 ? i - 10 : x1);

    // if문 사용 방법
    // y축
    let y1;

    if(i > 9) y1 = i - 10; // 9보다 크면 10 빼고
    else if(i > 4) y1 = i - 5; // 4보다 크면 5 빼고
    else y1 = i; // 그 밖의 경우는 i값 그대로

    // x축
    let x1;
    if(i > 9) x1 = 2; // 9보다 크면 10 빼고
    else if(i > 4) x1 = 1; // 4보다 크면 5 빼고
    else x1 = 0; // 그 밖의 경우는 i값 그대로

    // console.log("나돌아?", y1, x1);
    // console.log("yVal", yVal[y1], "xVal", xVal[x1]);

    // 이벤트 설정하기
    // mouseenter: 대상요소 경계선 안으로 들어갈 때 발생
    target[i].onmouseenter = function(){
        // 변경 대상인 iphone에 mouseenter 시 transform 회전값 변경
        iphone.style.transform = `rotateX(${xVal[x1]}deg) rotateY(${yVal[y1]}deg)`
    };
}

setTimeout(function(){
    document.querySelector('.evt-bx').classList.add('on');
}, 5000);