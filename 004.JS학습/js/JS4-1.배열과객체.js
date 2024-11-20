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
    function(){
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
        this.onmouseenter = () => {img.style.display = "block";};
        // 3. 마우스아웃 시 사라짐
        this.onmouseleave = () => {img.style.display = "none";};
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
console.log("arr1", arr1, typeof arr1, "배열이니?", Array.isArray(arr1)?"응, 배열맞아!":"아니, 배열아냐!");
// typeof(변수) / typeof변수 -> 데이터형 출력
// 배열의 데이터형을 찍으면 object라고 나옴 -> 배열도 객체이기 때문
// 배열인지 검사하는 방법은 Array.isArray(변수);

// 출력 대상: .cont (여러 개)
const target = document.querySelectorAll('.cont');

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
    function(){
        alert("대한 독립 만세!");
        this.style.rotate = "360deg";
        this.style.background = `url('https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg') repeat-x 0/auto 100%`;
        this.style.scale = "1.5";
        this.style.rotate ="720deg";
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
console.log("arr2", arr2, typeof arr2, "배열이니?", Array.isArray(arr2)?"응, 배열맞아!":"아니, 배열아냐!");

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