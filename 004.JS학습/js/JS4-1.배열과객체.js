// JS4-1.배열과객체 js파일

/**********************************************
     [ 배열(Array) 변수란? ]

    - 여러개의 데이터를 묶음으로 변수 하나에 저장함
    - 장점: 데이터를 취급하고 다루는 데 편의성 제공
    - 각 데이터를 하나의 이름으로 구분하여 호출할 수 있는 메모리 공간이다!
    (예: 계란한판, 아파트 등)

    [ 배열의 선언의 2가지 방식 ]

    1. new 키워드 선언방식
    - new Array()
    객체를 실제로 메모리안에 생성하는 방법을 제공
    이를 인스턴스(instance)라고 함!

    2. 리터럴 선언방식 (배열리터럴) => 있는 그대로
    - 변수 = []

    - 객체란 속성과 메서드를 가지고 있는 프로그램 단위체
    - 객체는 독립된 특성을 가지고 있어야함!

    예컨데 자동차, 볼펜, 물통, 가방 등
    독립된 별도의 기능이 있어야하고 명사적특징과
    동사적 특징이 모두 있어야 객체다!

    정적 객체 (static)
    객체: 하나의 독립된 속성과 메서드를 지니는 개체
    property = 명사적 특징 ex) 자동차의 이름, 모델, 무게, 색상 등
    method = 동사적 특징 ex) 자동차 drive, brake, stop, start 등
    프로그램을 각 단위별로 따로 만드는 것 -> 객체지향

**********************************************/

// 1. 배열 세팅하고 출력하기
// 1-1. new 키워드로 배열 선언 및 할당
// 리터럴 선언방식을 많이 사용함
// 배열, 객체, 함수는 const를 주로 사용하기

const arr1 = new Array(
  "1990년 4월 24일",
  "166cm",
  "46kg",
  [2014, "더바디샵"],
  ["미스터션샤인", "리틀포레스트", "정년이"],
  "김태리",
  function () {
    // alert("김태리 멋찜!!!");
    // this = 호출한 요소 자신
    this.style.position = "relative";
    // 1. 호출한 부모박스 안에 김태리 이미지 넣기
    this.innerHTML += `<img src ="./images/img-ktr.jpg" alt="김태리이미지" id="kim" style="display: none; position: absolute; width: 150px; height: 150px; z-index: 1; border-radius: 10px; border: 3px solid hotpink; translate: -50% -50%; pointer-events: none;">`;
    // pointer-events: none;
    // 실제 이벤트는 부모박스인데 자식요소인 이미지가 가리기 때문에 이벤트 발생이 순간 취소됐다가 다시 발생됨 -> 버벅이는 것처럼 보임
    // pointer-events: none; 속성으로 이미지는 이벤트를 없애고 원래 부모박스에서 이벤트가 발생하도록 함
    // 마우스를 따라다니는 기능에서 매우 중요한 속성
    // 2. 마우스오버 시 나타남
    const img = document.querySelector("#kim");
    this.onmouseenter = () => {
      img.style.display = "block";
    };
    // 3. 마우스아웃 시 사라짐
    this.onmouseleave = () => {
      img.style.display = "none";
    };
    // 4. 마우스 움직이면 따라다니게 함
    this.onmousemove = (e) => {
      // 괄호 안에 들어가는 변수: 이벤트 변수 (e)
      // 전달값이 없는 함수에서 변수 하나를 쓰면 그 변수가 이벤트 전달 변수가 됨
      // 이벤트 전달 변수: 그 요소에서 발생하는 이벤트를 객체로 가지고 있음
      // 대체해서 쓸 수 있는 것: event 라고 전체 이벤트 객체를 호출할 수 있음

      // 이벤트 객체하위 pageX, pageY 상단, 좌측으로부터 마우스 커서의 위치를 x,y축으로 단위 없는 px값을 나타냄
      // 이 값은 사이트 전체를 이동하는 어떤 요소를 구현할 때 많이 사용한다. ex) 커스텀 커서
      // console.log(e.pageX, e.pageY);
      // 여기서는 본 박스 안에서만 그 위치를 알면 되므로 offsetX, offsetY를 사용함
      // -> offsetX, offsetY = 해당 부모요소 박스로부터 위치를 리턴
      // console.log(e.offsetX, e.offsetY);

      // 위치값 반영 대상 = img
      img.style.left = `${e.offsetX}px`;
      img.style.top = `${e.offsetY}px`;
    };
  }
);

// new 키워드로 선언과 할당을 동시에 할 수 있음
// 소괄호 안에 콤마 , 로 값을 구분하여 사용함

// 배열 변수에 할당한 데이터 불러오기
// 호출방법: 배열변수명[순번] -> 순번은 0부터 시작함
console.log(
  "arr1",
  arr1,
  typeof arr1,
  "배열이니?",
  Array.isArray(arr1) ? "응, 배열맞아!" : "아니, 배열아냐!"
);
// typeof(변수) / typeof변수 -> 데이터형 출력
// 배열의 데이터형을 찍으면 object라고 나옴 -> 배열도 객체이기 때문
// 배열인지 검사하는 방법은 Array.isArray(변수);

// 출력 대상: .cont (여러 개)
const target = document.querySelectorAll(".cont");

target[0].innerHTML = `
    이름: ${arr1[5]} /
    키:  ${arr1[1]} / 
    몸무게: ${arr1[2]} /
    대표작: ${arr1[4]} /
    데뷔년도: ${arr1[3][0]} 
`;

target[0].onclick = arr1[arr1.length - 1];
target[0].click(); // 강제 클릭이벤트 발생
// 배열 안에 배열이 있는 경우 대괄호를 하나 더 추가하여 해당 순번을 써 준다 ex. arr[0][0]

// 1-2. 배열 리터럴 방식의 선언과 할당
// 배열변수명 = [값1, 값2...]
// new 키워드 없이 바로 사용 가능
// 정적 객체 (Static Object)

const arr2 = [
  "삼일절",
  "태극기",
  1919,
  function () {
    alert("대한 독립 만세!");
    this.style.rotate = "360deg";
    this.style.background = `url('https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg') repeat-x 0/auto 100%`;
    this.style.scale = "1.5";
    this.style.rotate = "720deg";
    this.style.transition = "2s ease-in-out";

    // 5초 후에 원래 크기로 돌아가기
    setTimeout(() => {
      this.style.scale = "1";
    }, 3000);
    // 화살표함수
  },
];
// 배열 끝에 콤마는 원래 쓰면 안되지만 최신 브라우저에서 에러 안 나게 처리됨
// 요즘은 추가 배열 데이터를 위해 마지막콤마를 쓰는 것이 일반적
console.log(
  "arr2",
  arr2,
  typeof arr2,
  "배열이니?",
  Array.isArray(arr2) ? "응, 배열맞아!" : "아니, 배열아냐!"
);

target[1].innerHTML = `
    ${arr2[0]}은 
    ${arr2[2]}년에 일제에 항거하여 ${arr2[1]}를 들고 일어난 민중봉기를 기념하는 날이다!
`;

// 두번째 출력박스를 클릭하면 배열 값에 있는 함수 호출하기
target[1].onclick = arr2[3];
target[1].title = "클릭하시면 만세를 합니다!";
target[1].style.cursor = "pointer";

// 1-3. 배열을 미리 생성하여 각각 할당하기
// 배열변수명 = []; -> 배열리터럴
// 배열변수명.length = 숫자 -> 숫자만큼 배열이 생성됨
// 배열변수영.length 는 배열 개수를 읽기/쓰기 모두 가능

const arr3 = []; // const 상수로 리터럴 선언, 할당 후 배열 값 변경은 자유로움, 배열 형식은 변경할 수 X => 재할당 불가
// 코드 보안, 안전상의 이유로 상수로 많이 선언함
// console.log(arr3); 빈 배열 (length: 0)

// 배열 개수 미리 세팅하기
arr3.length = 8;
// 배열의 개수를 미리 세팅해도 배열을 더 추가할 수 있음
// 의미는? 미리 배열 개수를 정하고 이것을 지키려는 의도

// console.log(arr3); 빈 배열 (length: 8)

// 각 배열 주소에 값을 할당하기
arr3[0] = "산";
arr3[1] = "할아버지";
arr3[2] = "구름모자";
arr3[3] = "썼네";
arr3[4] = "나비같이";
arr3[5] = "훨훨";
arr3[6] = "훠얼훠얼";
arr3[7] = "날아서";

// console.log(arr3.toString()); 값이 있는 배열 (length: 8)
// 배열 전체값 출력하기: valueOf()
// console.log(arr3.valueOf().toString());

// 현재 브라우저는 valueOf를 사용하지 않아도 배열 전체값을 출력해 줌
// .toString()출력은 배열값을 콤마로 연결한 문자열로 변환한다

// 변수값 사이에 구분자 넣고 문자형으로 배열값 변경하기
// join(구분자) -> 구분자 넣고 문자값 생성
// console.log(arr3.join("♥"));

// 배열값 맨 뒤에 값 추가하기 메소드: push();
arr3.push("김창환 작사");

target[2].innerHTML = `${arr3.join("★")}`;

// 배열메소드는 중요하므로 별도로 추가 학습 예정

/********************************************
[ 객체(Object) 란? ]

  - 일반적으로 JS에서 객체란 속성과 메서드를
  가지는 프로그램 단위체
  - 속성은 명사적 특징, 메서드는 동사적 특징
  객체예)
  https://www.w3schools.com/js/js_objects.asp
  - 자동차의 명사적특징: 핸들, 백미러, 트렁크, 바퀴 등
  - 자동차의 동사적특징: 운전하다, 멈추다, 주차하다 등

  (참고: 브라우저에 이미 만들어져 있는 객체들)
  -> 내장객체라고함!
  -> 브라우저 내장객체-> 봄(BOM:Browser Object Model)
  -> https://www.w3schools.com/js/js_window.asp

  window : 윈도우(브라우저화면) 표시 관련객체
  document : 문서구조에 관련된 객체
  Array : 배열객체
  Object : 객체를 만들기 위한 객체
  Date : 날짜객체
  Math : 수학객체
  ___________________________________

  ->>> 내장객체 중 객체를 만들기위한 객체인 Object를
  사용하여 객체를 만들어보자!

  [ 객체의 선언의 2가지 방식 ]
  1. new 키워드 선언방식
  - new Object()

  2. 리터럴 선언방식(객체리터럴)
  - 변수 = {}

  [ 객체의 할당 ]
  - 중괄호{}를 사용하여 할당코딩을 함
  - {속성명:값,속성명:값,...}
  - 여러값을 셋팅할때 콤마로 구분한다
  - 배열과 비교해서 이해하기 쉽고 호출하기 쉽다!
  - 객체 스타일로 데이터 구조를 만들고
  이런 파일로 DB와 데이터 통신을 한다!
  이 파일의 이름은? 제이슨(JSON:확장자.json)

  [ 객체의 호출 ]
  - 객체명[속성명]
  또는
  - 객체명.속성명

********************************************/

// 2. 객체를 셋팅하고 출력하기 ////////
// 2-1. new 키워드로 Object객체 생성하여 셋팅하기
// -> 실제 코드에서는 객체 리터럴 방식을 쓴다
// 즉, 변수 = {}
// 여기서는 new키워드 생성 방식도 된다는 것을 체험함!
// 객체는 셋팅시 반드시 중괄호{}를 사용함!!!
// 중괄호안에는 {속성명:값,속성명:값,...}
const SSG = new Object({
  "너의 이름은?": "손석구",
  생일: "1983년 2월 7일",
  키: "178cm",
  몸무게: "80kg",
  혈액형: "C형",
  성별: "남성",
  대표작: "나의 해방일지,범죄도시2",
  소속사: "셋별당엔터",
  비밀번호: 7777,
  팬레터: function () {
    // this키워드 : 이벤트호출요소 자신!
    alert("상남자 오빠! 지금뭐해?");
    console.log("this:", this);

    // 변경대상 : this.style
    let mycss = this.style;

    // 1. 배경변경
    mycss.background =
      "url(https://file.mk.co.kr/meet/neds/2022/05/image_readtop_2022_456627_16533579475052374.jpeg) repeat-x top/auto 100%";
    // 2. 글자색
    mycss.color = "#fff";
    // 3. 글자그림자
    mycss.textShadow = "0 0 5px #000";
    // 4. 줄간격변경
    mycss.lineHeight = "84px";
    // 5. 박스 확대
    mycss.scale = "1.2";
    // 6. 트랜지션
    mycss.transition = "1s ease-out 1s";

    // 7. 글자내용변경
    this.innerText = `손석구 최고 멋쨍이! 승승장구! 화이팅!!!`;
  },
}); ///// SSG 객체 ///////////

console.log("석구객체:", SSG);

// 박스에 출력전 셋팅변경 ///
// 대상박스 : target[3] 네번째 박스

// 줄간격 2줄이니까 조정
target[3].style.lineHeight = "40px";

// 툴팁 넣기
// 객체호출법 2가지 :
// 1) 객체명.속성명
// 2) 객체명[문자형속성명]
target[3].title = `여기를 클릭하여 ${SSG["너의 이름은?"]}팬레터를 확인하세요!`;

// 손가락모양 커서
target[3].style.cursor = "pointer";
let aa = "생일";
// 출력하기
target[3].innerHTML = `
    당신이 좋아하는 남자배우는? 
    ${SSG["너의 이름은?"]}
    / 몸무게를 아세요? ${SSG.몸무게} <br>
    생년월일은? ${SSG["생일"]}
    / 대표작은? ${SSG.대표작}
  `;

// 객체의 함수를 이벤트에 연결하기
// 특히 객체의 함수를 메서드라고 부른다!
target[3].addEventListener("click", SSG.팬레터);

/***************************************
     [ new 키워드 없이 바로 객체 생성하기 ]
    -> 객체 리터럴 (추천방식!)

    - 방법: 변수 선언 후 이퀄 뒤에 바로 중괄호 사용!
    예) let obj = {속성명:값,속성명:값,...};

    [ 객체의 속성 셋팅시
    문자형 또는 변수형 사용하기 ]

    1. 문자형 속성 - 따옴표로 싸는 방법

    예) let obj = {"나는나":"호호호","너는너":"하하하"}
    -> 문자형 속성의 객체 호출시
    객체명[문자형속성명]
    예) obj["나는나"]

    2. 변수형 속성 - 따옴표로 안싸는 방법
    예) let obj = {name:"김수현",tall:"186cm"};
    -> 변수형 속성의 객체 호출시
    객체명.속성명
    예) obj.name

    또는

    객체명["속성명"]
    예) obj["name"]
    -> 반드시 변수형 속성명을 따옴표로 싸서
    문자형으로 표시해야함!
    obj[name] -> 에러남!

    -> 만약 문자형으로 설정된 경우에도
    변수형으로 사용될 수 있는 문자면 변수형호출가능!
    예) var obj = {"하하하":"나나나"}
        obj["하하하"] 또는 obj.하하하

***************************************/

const GU = {
  name: "공유",
  tall: "184cm",
  weight: "74kg",
  com: "매니지먼트숲",
  work: "도깨비,부산행",
  msgFn: function (txt, ele) {
    // txt = 메시지, ele = 호출요소

    // 1. 메시지 띄우기 (호출확인)
    alert("팬레터:" + txt);

    // 2. css 변경하기 : ele : 호출한 요소 자신
    // 2. CSS변경하기
    let mycss = ele.style;

    // 2-1.배경이미지넣기
    mycss.background =
      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gong_Yoo_%28Sep_2016%29.png/250px-Gong_Yoo_%28Sep_2016%29.png) repeat-x top/auto 100%";

    //2-2. 글자색
    mycss.color = "#fff";

    //2-3. 글자그림자
    mycss.textShadow = "0 0 5px #000";

    //2-4. 줄간격
    mycss.lineHeight = "30px";

    //2-5. 높이값 변경
    mycss.height = "100px";

    //2-6. 상단패딩
    mycss.paddingTop = "100px";

    //2-7. 트랜지션
    mycss.transition = "2s ease-in-out .5s";

    // console.log("this:",this);
    // this의 의미는?
    // 함수를 별도로 호출하였을 경우 객체 안의 메서드이므로 == 객체 자신
    // 만약 이벤트 설정이 직접 할당되었으면 == 호출한 요소 자신
  },
};

console.log("GU객체:", GU);

// 내용출력: 대상 - target[4];
target[4].innerHTML = `
    저는 ${GU.name}입니다. 
    몸무게는 비밀인데요 그래도 말씀드리자면 ${GU.weight}입니다. ㅎㅎㅎ <br>
    제 대표작은 ${GU.work}입니다 <br>
    제 소속사는 모르시는 모르시는 분들이 많은데 ${GU.com}입니다. 빠이빠이~!
`;

// 줄간격 조정
target[4].style.lineHeight = "24px";

// 툴팁 띄우기
target[4].title = `여기를 클릭하여 ${GU.name}의 팬레터를 확인하세요!`;
target[4].style.cursor = "pointer";

// 객체의 함수(메소드)를 클릭이벤트에 연결하기
// 이벤트 대상 target[4]
// 유의사항: 함수에 값을 전달해야 할 경우 소괄호를 사용해야 하는데,
// 바로 사용할 경우 소괄호를 사용한 함수는 바로 실행되기 때문에 이벤트 설정에 실패함, 해당 함수만 바로 실행
// -> 호출함수를 익명함수로 감싸서 해결함
target[4].addEventListener("click", function () {
  // 이벤트에 바로 연결된 익명함수 안에서 this의 의미는?
  console.log("this:", this);
  // this = 클릭한 요소 자신 target[4]
  // 호출 시 this를 보내준다
  // 왜? 객체의 메서드에서 this의 의미가 다르기 때문

  // 메시지 변수
  let msg =
    "공유오빠! 오징어게임 싸다구 멋졌어요 ㅎㅎ \n차기작도 기대해요! 화이팅!";

  GU.msgFn(msg, this);
  // GU.msgFn(값1, 값2)
  // 값1 - 메시지문자
  // 값2 - this (호출요소)
});

/****************************************
    [ 미션 :  내가 만든 객체 활용하기 ]
    1. 주제 : 영화정보
    2. 조건 : 객체의 변수명을 자신만의 이름으로
    작성함. 단, 속성명을 동일하게 작성할것!
    (속성명을 샘플에서 정해줄 예정)
    3.  객체를 쌤과 모두에게 공유하기!(톡업!)
  ****************************************/

/****************************************
    [ 미션 :  내가 만든 객체 활용하기 ]
    1. 주제 : 영화정보
    2. 조건 : 객체의 변수명을 자신만의 이름으로
    작성함. 단, 속성명을 동일하게 작성할것!
    (속성명을 샘플에서 정해줄 예정)
    3.  객체를 쌤과 모두에게 공유하기!(톡업!)
****************************************/
// 탐쌤의 오브젝트!
// -> 변경가능하게 let으로 선언한다!
let tomObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
tomObj.title = "외계+인 2부";
// 2. 감독
tomObj.director = "최동훈";
// 3. 배우
tomObj.actor = "류준열, 김태리, 김우빈";
// 4. 장르
tomObj.genre = " 액션,다크 판타지,코미디";
// 5. 관람가
tomObj.ratings = "12세";
// 6. 예고편
tomObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("4uSn4Dem9i0");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", tomObj);

// 화면에 정보를 보여주는 함수
const showMovieInfo = function () {
  // 함수호출 확인
  console.log("영화정보!!!");

  // 1. 출력대상: target[5]
  // 2. 내용넣기
  target[5].innerHTML = `
      ♣ 영화명 : ${tomObj.title}
      ♣ 감독 : ${tomObj.director} <br>
      ♣ 배우 : ${tomObj.actor}
      ♣ 장르 : ${tomObj.genre}
      ♣ 등급 : ${tomObj.ratings}
    `;

  // 툴팁 보이기
  target[5].title = `클릭하시면 ${tomObj.title}예고편을 보실 수 있습니다!`;

  // 예고편 메서드 호출
  target[5].onclick = tomObj.trailer;
}; ////// showMovieInfo 함수 //////////

// 출력박스 CSS조정하기
target[5].style.lineHeight = "34px";
target[5].style.cursor = "pointer";
target[5].style.fontSize = "20px";

// 할당형 함수는 바로 호출시 하단에서 해야함!
showMovieInfo();

//////////////////////////////////
// 초이스 파트 버튼 만들기 ////////
//////////////////////////////////
// 버튼에 사용할 이름 배열만들기
const choiceName = [
    "탐쌤",
    "김혜민",
    "양현석",
    "황대웅",
    "이민경",
    "이민지",
    "전정훈",
    "윤고은",
    "김다영",
    "강수현",
    "김민지",
  ];
  
  // 배열확인
  console.log("버튼배열:", choiceName);
  
  // 버튼을 넣을 대상 : target[6]
  
  // 버튼을 어떻게 넣지?
  // 대답: 버튼이름 배열의 수만큼 버튼을 넣는다
  // -> for문 사용 : for(시;한;증){코드}
  // -> 배열의 개수 : 배열변수.length
  // (1) 시작값 : let i = 0 (배열주소 0부터)
  // (2) 한계값 : i < choiceName.length
  // (3) 증감 : i++
  
  // 배열의 개수를 미리구하여 변수에 할당
  let cnt = choiceName.length;
  
  // 첫번째 버튼에 선택표시 클래스 on을
  // 넣기 위해 for문 순회시 i값이 0일 경우
  // 그자리에 클래스 설정코드를 넣으려면
  // 삼항연산자를 사용하면 된다!
  // ->식: i==0?'class="on"':''
  // ->해석: i가0인가? true면 앞에것 출력
  // false 면 뒤엣것 출력
  
  for (let i = 0; i < cnt; i++) {
    target[6].innerHTML += `<button
      ${i == 0 ? 'class="on"' : ""}
      style="margin-left:5px"
      >
        ${choiceName[i]}초이스</button>`;
  
    // 줄바꿈태그는 5번째,10번째에서 넣기
    if (i == 4 || i == 9) {
      target[6].innerHTML += "<br>";
    } /// if ///
  } /////////// for문 ////////
  
  // 초이스 박스 줄간격조정
  target[6].style.lineHeight = "30px";
  target[6].style.height = "auto";
  target[6].style.padding = "10px 0";
  
  //////////////////////////////
  // 위에서 넣은 버튼을 순회하며
  // 클릭이벤트 함수를 설정해 준다!
  ///////////////////////////////
  // 이벤트 대상: target[6]하위 button
  let choiceBtn =
    target[6].querySelectorAll("button");
  
  // 버튼 개수 구하기
  let cntBtn = choiceBtn.length;
  
  console.log(
    "초이스버튼들:",
    choiceBtn,
    cntBtn,
    "개"
  );
  
  /// 버튼 개수만큼 순회하며 onclick속성에
  // 익명함수 할당하기(기능구현)
  for (let i = 0; i < cntBtn; i++) {
    // 대상: choiceBtn 변수에 할당된 button요소
    choiceBtn[i].onclick = function () {
      // this는 이벤트할당된 요소자신!
      // 버튼데이터 읽기
      let btnTxt = this.innerText;
      // 함수호출 확인
      console.log("내가 누구게?", btnTxt);
  
      // 영화정보 변경전 찍어보기
      // 각자 자기의 변수를 찍는다!
      console.log(
        "변경전영화객체",
        tomObj
      );
  
      switch (btnTxt) {
        // 자기자신 오브젝트
        case "탐쌤초이스":
          // 객체의 내용을 덮어쓰기 변경함
          tomObj = myObj;
          break;
  
        case "김혜민초이스":
          tomObj = khmObj;
          break;
  
        case "양현석초이스":
          tomObj = yhsObj;
          break;
  
        case "황대웅초이스":
          tomObj = hdwObj;
          break;
  
        case "이민경초이스":
          tomObj = lmkObj;
          break;
  
        case "이민지초이스":
          tomObj = mimObj;
          break;
  
        case "전정훈초이스":
          tomObj = jjhObj;
          break;
  
        case "윤고은초이스":
          tomObj = ygeObj;
          break;
  
        case "김다영초이스":
          tomObj = ssgObj;
          break;
  
        case "강수현초이스":
          tomObj = shkObj;
          break;
  
        case "김민지초이스":
          tomObj = kmjObj;
          break;
  
      }
  
      console.log(
        "변경후영화객체",
        tomObj
      );
  
      // 변경데이터 확인 후 바로위박스
      // 영화정보 업데이트 함수를 호출한다!
      showMovieInfo();
  
      // JS클래스 내장객체: classList
      // add() / remove() 메서드사용!
  
      // 버튼에 클래스 on 모두 빼기
      for (let i = 0; i < cntBtn; i++) {
        choiceBtn[i].classList.remove(
          "on"
        );
      } ////// for문 ///
      // 클릭된 버튼에 클래스 on넣기
      // 클릭된 버튼 자신은 this!
      this.classList.add("on");
    }; ////// click 이벤트 함수 /////
    // console.log(choiceBtn[i]);
  } ////////// for문 ////////////
  /////////////// 초이스 버튼 셋팅하기 //////////////


/*****************************************
    함수명 : playMovie
    기능 : 영화예고편 화면 띄우기
*****************************************/
function playMovie(mcode) {
    // mcode 영화아이디
    // 함수호출 및 전달값 확인
    console.log(
      "예고편상영이요~~!",
      mcode
    );
  
    // 1. 대상선정 : #mvbox
    let mvbox =
      document.querySelector("#mvbox");
  
    // 2. 영화박스에 아이프레임 넣기
    mvbox.innerHTML = `
      <div id="mv">
        <!-- 유튜브 아이프레임 -->
        <iframe src="https://www.youtube.com/embed/${mcode}?autoplay=1" allow="autoplay"></iframe>
        <!-- 닫기버튼 -->
        <button class="cbtn">×</button>
      </div>
              `;
  
    // 3. 삽입된 동영상 박스 CSS설정하기
    let mv =
      document.querySelector("#mv");
    let css = mv.style;
  
    css.position = "fixed";
    css.top = "50%";
    css.left = "50%";
    css.transform =
      "translate(-50%, -50%)";
    css.width = "700px";
    css.height = "450px";
    css.backgroundColor = "#000";
  
    // 4. 아이프레임 CSS설정
    let ifr = mv.querySelector("iframe");
    let ifrcss = ifr.style;
    ifrcss.border = "none";
    ifrcss.width = "100%";
    ifrcss.height = "100%";
  
    // 5. 닫기버튼  CSS셋팅하기
    let cbtn = mv.querySelector(".cbtn");
    // style.cssText 로 셋팅하자!
    // 개별셋팅과 차이점은 이 설정은 모든 style속성의
    // CSS 설정을 덮어씀! 주의!!!
    // 반면 한 속성씩 셋팅하는 것은 한껀씩 개별 업데이트됨!
    cbtn.style.cssText = `
      position : absolute;
      top : 0;
      right : -70px;
      width : 50px;
      height : 50px;
      border : none;
      color : #fff;
      background-color : blue;
      font-size : 40px;
      font-weight : bold;
      border-radius: 50%;
      cursor : pointer;
      line-height : 50px;
    `;
  
    // 6. 닫기버튼 클릭시 #mv 제거하기
    cbtn.onclick = function () {
      mv.remove();
      // remove() 는 DOM 메서드임!
      // 선택요소를 제거함!
  
      // body 암전효과 클래스 on 제거하기
      document.body.classList.remove(
        "on"
      );
    }; //////// 닫기버튼 이벤트함수 ///////
  
    // 7. body 요소에 클래스 on주기
    // 동영상 배경 암전효과
    document.body.classList.add("on");
  } ///////////// playMovie 함수 ///////////
  ///////////////////////////////////////////

/*****************************************************************/

