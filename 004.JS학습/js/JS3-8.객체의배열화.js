// JS3-8.객체의배열화.js

// module 타입으로 호출했으므로 import 사용 가능
// json 데이터 파일 import로 부르는 방법
// import 변수명 from 상대경로 with {type:'json'}
import movieInfo from './data_movie.json' with {type:'json'};

// 나의 함수 불러오기
import myFn from './my_function.js';

// 1. 요구사항 분석
// JSON 파일 영화 데이터를 바탕으로 각 영화의 정보를 화면에 박스 구성하여 반복 데이터를 코드로 생성한다

// 2. 대상선정
// 2-1. 이벤트 대상
// 이벤트 종류: load 이벤트
// 2-2. 변경 대상
const wrap = myFn.qs('.wrap');
// console.log('변경대상:', wrap);

// 3. 이벤트 세팅하기
// 이벤트 대상인 window를 load 이벤트와 함수로 연결
// 나의 함수에서 addEvt() 사용
myFn.addEvt(window, 'load', makeList);

// 4. 함수 만들기
function makeList(){
    // (1) 함수호출 확인
    // console.log('나야나!!!');

    // (2) 코드만들기
    let hCode = ''; // 변수 선언 및 초기화!

    // for in 대신 배열메서드인 forEach 사용
    // 객체를 

    /*
    [ 객체의 배열 변환 ]
        movieInfo.forEach(v => {
            console.log(v);
        });
        => 오류: 객체를 forEach로 호출했기 때문
        ==> 객체를 배열로 변환하여 호출해야 함

        * 객체 -> 배열 변환하는 법
            (1) Object.keys(객체) -> 키배열 (속성배열)
            (2) Object.values(객체) -> 값배열


    */
    // 키배열: console.log(Object.keys(movieInfo));
    // 값배열: console.log(Object.values(movieInfo));
    // 기존 객체: console.log(movieInfo);
    const newVal = Object.keys(movieInfo);

    // 키 배열을 forEach 메서드로 돌리면 for in문으로 돌린 것처럼 key값을 순회하여 세팅 가능

    newVal.forEach(x => { // x - 배열값(객체의 key)
        hCode += `
            <section class="cbx">
                <div class="minfo">
                    <!-- 1. 포스터 -->
                    <div class="photo">
                        <img 
                        src=${movieInfo[x]['포스터']} 
                        alt="영화${movieInfo[x]['제목']}의 포스터">  
                    </div>
                    <div class="cont">
                        <!-- 2. 제목 -->
                        <h2 class="tit">
                        ${movieInfo[x]['제목']}
                        </h2>
                        <!-- 3. 개요 -->
                        <h3 class="sum">
                            ★장르 : ${movieInfo[x]['개요']}
                        </h3>
                        <!-- 4. 감독 -->
                        <h3 class="dir">
                            ★감독 : ${movieInfo[x]['감독']}
                        </h3>
                        <!-- 5. 출연 -->
                        <h3 class="act">
                            ★배우 : ${movieInfo[x]['출연']}
                        </h3>
                    </div>
                </div>
                <!-- 영화 한마디 -->
                <h2 class="showtit">♥ 영화한마디!</h2>
                <!-- 6. 문구 -->
                <div class="show">
                ${wrapTag(movieInfo[x]['문구'])}
                </div>
            </section>
        `;
    }); // forEach

    // (3) 변경대상에 코드넣기
    wrap.innerHTML = hCode;
} /////// makeList 함수 ////////////////

/*
    [추가 함수]
    함수명: wrapTag
    기능: 글자를 span태그로 싸서 보내줌
*/

function wrapTag(txt){
    // 결과변수 hCode
    let hCode = '';

    // (1) 함수 호출 확인
    console.log('wrapTag 호출!', txt);

    // (2) span 태그로 감싸기
    // 한 글자씩 자르기는? for of문 사용
    // 반드시 대입연산자를 사용하여 결과 저장
    for(let x of txt){
        // console.log('x:', x);
        // 공백문자일 경우 처리
        if(x == ' '){
            hCode += `<i></i>`;
        } else {
            hCode += `<span>${x}</span>`;
            // 글자가 있을 때만 span 태그로 랩핑
        }
        
    }
    
    // 결과값 리턴하기
    return hCode;
} // wrapTag 함수

/************************************************* 
  [ 객체를 위한 for in 문 ]

    (1) 구문: 
        for(변수 in 객체){코드}
            -> 객체를 순회하면 변수에 담는 것은 속성(key)
        for(key in Object){코드}
            -> 객체의 구성은 속성(key)과 값(value)
            => {key:value, key:value...}

    (2) 작동원리:
        객체의 개수만큼 순서대로 속성명과 속성값을 가져옴
        - 변수에 담기는 것: 속성

    (3) for in문에서 객체 값 가져오기
        - 객체[속성]
        - Object[key]
_________________________________________

 [ for of문의 부가기능 ]
  문자데이터를 넣으면 한글자씩 돌아줌! 
  for(변수 of 문자데이터변수) {실행문}
  -> 한글자씩 태그로 싸줄때 편리함!
*************************************************/
