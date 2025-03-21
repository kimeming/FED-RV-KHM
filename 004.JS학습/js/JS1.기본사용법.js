// JS1.기본사용법 JS ////////////

console.log("JS1.기본사용법 시작~!");

// 함수는 코드를 저장하는 구역임
// 함수명은 코드저장소의 주소다!
// 함수의 호출은 함수명()
/**************************************** 
    함수명 : 김비서나와라
    기능 : 김비서박스에 각종 변경하기
****************************************/
function 김비서나와라() {
  // 1. 함수호출확인!
  console.log("김비서 나왔다~!");

  // 2. HTML넣기 : 이벤트 속성에서 인라인코드로
  // 이미 실행함!(이미지 넣기)

  // 3. CSS변경하기 //////
  // 대상선정 : .pbox
  // 클래스는 여러개 사용할 수 있으므로
  // HTML컬랙션 집합에 수집되어 사용됨!
  // getElementsByClassName(클래스명)
  // 0,1,2,... 이런 순서로 수집함
  // 하나뿐이어도 0번째라고 해야함!
  console.log(
    document.getElementsByClassName(
      "pbox"
    )
  );

  // 변수에 대상 할당하기!
  var 나변수 = document
    .getElementsByClassName("pbox")
    .item(0);
  // 변수는 특정메모리 공간이다!
  // 선언과 동시에 할당하여 값을 저장함
  // 변수는 여기를 "봐!" var 로 선언
  // var 변수명 = 값

  // [변수를 사용하는 이유?]
  // - 변수는 재사용
  // - 변수는 저장 메모리공간 주소
  // - 변수는 따옴표안쓴 문자
  // - 변수는 띄어쓰기 없음
  // - 변수는 호출시 값 출력
  // - 변수는 재할당시 다른값 덮어씀
  // - 변수는 한번만 선언 var(let/const)
  // - var는 variable(변수)라는 단어에서 나온말!

  ////// 변경내용 ////////////////////
  // 3-1. 배경이미지 넣기
  나변수.style.background =
    "url(./images/kimbs.jpg) no-repeat top/cover";
  // .pbox중 첫번째 (0번)를 선택함!
  // item(순번)

  // 3-2. 글자색 변경하기
  나변수.style.color = "lime";

  // 3-3. 글자크기 변경하기
  나변수.style.fontSize = "40px";

  // 3-4. 글자그림자
  나변수.style.textShadow =
    "2px 2px 2px #000";

  // 3-5. 트랜지션
  // 백틱은 줄바꿈 자유로움!
  나변수.style.transition = `
    2s,
    top 4s 2s,
    left 2s 2s,
    rotate 3s 3s,
    translate 1s 2s,
    scale 2s 6s
  `;

  // 3-6. 크기변경
  나변수.style.width = "600px";
  나변수.style.height = "600px";

  // 3-7. 줄간격
  나변수.style.lineHeight = "100px";

  // 3-8. 원만들기
  나변수.style.borderRadius = "50%";

  // 3-9. 중앙이동을 위한 top,left값 변경
  나변수.style.top = "50%";
  나변수.style.left = "50%";

  // 3-10. 트랜스폼 변경 : 중앙이동, 360도회전, 스케일변경
  나변수.style.translate = "-50% -50%";
  나변수.style.rotate = "360deg";
  나변수.style.scale = "1.3";

  // 트랜스폼 속성 한번에 쓰기
// 나변수.style.transform = "translate(-50%, -50%) rotate(360deg) scale(1.3)";

  // 만약 속성명을 잘못쓰면 브라우저가 출력에서 제외한다!
  // 예전브라우저는 에러발생했지만 요즘은 에러안남!

  // 3-11. 전체 배경색 바꾸기
  // 대상: body
  // JS에서 body는 특별히 취급하여 
  // document.body로 선택
  var 나바디 = document.body;
  나바디.style.backgroundColor = "lightgreen";
  나바디.style.transition = "3s 5s";

  /* 
    JS DOM의 요소 선택 메소드
    1. ID 선택 메소드: getElementByID(아이디명)
    document.getElementByID("아이디명") 

    2. Class 선택 메소드: getElementByClassName(클래스명)
    document.getElementByClassName("클래스명")
      * 하위 속성
        - length: 클래스 개수
      * 순번 선택 하위 메소드
        - item(순번): 구체적인 순번 요소 선택 (0번부터 시작)
    
    3. Tag 선택 메소드: getElementByTagName(태그명)
    document.getElementByTagName("태그명")
      * 하위 속성
        - length: 클래스 개수
      * 순번 선택 하위 메소드
        - item(순번): 구체적인 순번 요소 선택 (0번부터 시작)

    [ HTML 컬렉션은 무엇인가? ]
      - DOM을 통하여 선택된 다중선택요소인 class/tag 를 메모리상 수집하는 공간
      - 상세 선택시 순번선택 메서드인 item()을 사용하여 선택한다
      - 배열처럼 순서대로 메모리를 사용하기 때문에 '유사배열'이라고 불리우며
        배열처럼 대괄호순번을 사용하여 선택할 수 있다!
      - document.getElementsByClassName(클래스명).item(0)
      -> 아래처럼 점안찍고 대괄호 순번사용가능!
      .getElementsByClassName(클래스명)[0]

      - 컬렉션 전체 개수정보는 length 속성으로 알 수 있다!

      참고) https://www.w3schools.com/js/js_htmldom_collections.asp
  */ 
  
} //////////// 김비서나와라 함수 //////////

function 맘대로해라(헐,헉스){
  // 1. 함수호출확인
  console.log("니맘대로하세요~!",헐,헉스);
  // 2. 대상선정 (박스야,원이야)
  let 아파트 = document.querySelectorAll(".박스야 .원이야")[헐];
  /*
    [JS DOM의 특별한 선택 메소드 2가지]
    1. queryselector(css선택자) - 하나만 선택
    2. queryselectorAll(css선택자) - 여러 개 선택
    
    2번 방식은 HTMLCollection을 반환
    -> length, item(순번)/[순번] 사용
    query = 질의
  */
  console.log("대상요소:", 아파트)

  // 3-1. 트랜지션 설정
  아파트.style.transition="1s ease-out, right .5s 1s";
  // 3-2. 위치 이동
  아파트.style.top="calc(100% - 200px)";
  아파트.style.right="calc(100% - 200px*"+(헐+1)+")";
  // 3-3. 유튜브 동영상 넣기
  아파트.innerHTML = `<iframe src="https://www.youtube.com/embed/BfBjNogKZ-E?autoplay=1" allow="autoplay;"></iframe>`;
  // 3-4. iframe 디자인
  let myApt = 아파트.querySelector('iframe');
  // cssText = 한꺼번에 문자열로 css를 넣을 때 사용
  // 주의: 따로 속성 세팅할 때와 달리 기존 인라인 설정을 덮어씀
  myApt.style.cssText = `
    boeder: none; width: 100%; height: 100%; border-radius: 50%;
  `;
  /* 
    [클래스 넣고 빼기]
    클래스 제어 객체: classList
      (1) add(클래스명): 클래스 추가
      (2) remove(클래스명): 클래스 제거
      (3) toggle(클래스명): 클래스 토글(추가/제거)
    
  */
 // 3-5. class 추가/제거
 // 클래스 on 때문에 회전 애니가 적용됨 -> 클래스 제거
 아파트.classList.remove('on');
} 

/* 
  함수명: 사각사각
  기능: 전체가 사각형으로 화면을 채우며 애니메이션
*/
function 사각사각(){
  // 1. 함수호출확인
  console.log("사각사각");
  // 2. 대상선정: .넌뭐냐
  let 나야나 = document.querySelector(".넌뭐냐");
  console.log("선택요소:", 나야나);
  // 3. 변경내용: top, transition, width, height값 변경
  나야나.style.top = "0";
  나야나.style.borderRadius = "0";
  나야나.style.width = "100%";
  나야나.style.height = "100%";
  나야나.style.transition = "3s 1s, top 1s 0s";
  // top값부터 1초간 작동 나머지는 1초후 작동
  나야나.style.zIndex = "100";// 맨위
  // 4. 글자 추가
  나야나.innerText = "JS입문을 환영합니다!"
  // 5. 글자 관련 css 추가
  나야나.style.fontSize = "70px";
  나야나.style.color = "aqua";
  나야나.style.fontWeight = "bold";
  나야나.style.textShadow = "5px 5px 3px #000";
  나야나.style.lineHeight = window.innerHeight + "px";
  console.log("화면높이값:",window.innerHeight)

}
