// 제어문 JS
// html에 이미 인코딩 형식이 들어가 있기 때문에 따로 선언이 필요없음 (html 파일 내부에서 작동함)

// 1. if문 처리를 위한 함수 만들기
/*
    함수명: showScore
    기능: 점수에 따른 평가를 출력함
        1. 점수에 따른 메시지 출력
        2. 점수에 따른 메시지 글자색 변경
        3. 점수에 따른 칭찬 스티커 보이기
*/

/*************************************** 
   [ if문 ]
    - 조건문을 검사하여 true이면 중괄호안의 코드가 실행되는 제어문
    - 조건문이란 
    결과가 true / false 로 나오는 구문
    (조건문: 비교연산자, 논리연산자)
    ((구문))
    ____________________________
    if(조건문){
        실행코드
    }
    else if(조건문){
        실행코드
    }
    ...
    else{
        실행코드
    }
    ______________________________
    ((구문해석))
    1. if문은 단독으로 따로 사용가능
    2. else if문은 if문 뒤에 또는 else if문 뒤에만 사용가능함!(else if로 시작못함!)
    -> 하나의 조건에 걸리면 다른 조건문엔 안들어감!
    -> 단독으로 else if문 사용불가!
    3. else문은 모든 조건에 해당없을때 무조건 실행할 코드가 있을 경우 사용한다!
    -> if문 가장 끝에 사용한다!
    -> 단독으로 else문만 사용불가!
    ※ 참고 : if문의 실행문이 하나이면 중괄호생략가능
    예) 
        if(aa>10){
            my = "ㅎㅎㅎ";
        }
        -> 위와 같음
        if(aa>10) my = "ㅎㅎㅎ";
***************************************/

function showScore() {
  let jumsu = document.querySelector("#jumsu"),
    jexp = document.querySelector(".jexp"),
    jshow = document.querySelector(".jshow"),
    expText = "",
    expColor ="",
    jshowPos ="";

  // 점수 입력값 읽어오기
  let score = jumsu.value;

  // 입력된 점수에 따라 결과 출력
  // 90점 이상: 매우잘함
  // 80점 이상: 잘함
  // 70점 이상: 보통
  // 60점 이상: 노력요함
  // 60점 미만: 재시험

  if(score >= 90){
    expText = "매우잘함";
    expColor = "blue";
    jshowPos = "100% 50%";
  } else if(score >= 80){
    expText = "잘함";
    expColor = "green";;
    jshowPos = "0% 100%"
  } else if(score >= 70){
    expText = "보통";
    expColor = "orange";
    jshowPos = "50% 50%";
  } else if(score >= 60){
    expText = "노력요함";
    expColor = "purple";
    jshowPos = "100% 100%";
  } else {
    expText = "재시험";
    expColor = "red";
    jshowPos = "100% 0";
  } 
  
  jexp.innerHTML = "평가 결과는 " + expText;
  jexp.style.color = expColor;
  jshow.style.backgroundPosition = jshowPos;
}
