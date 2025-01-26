// 6401 팀프로젝트 :: 탬버린즈 - store.js //

/*************************************************************
  [  요구사항  ]
  - prev, next 버튼 없이 스와이프로 동작
  - 배너 개수에 맞게 하단에 바형 인디케이터 설정 및 조작
**************************************************************/

const targetEl = document.querySelectorAll('.store_slide_wrap');

targetEl.forEach(el => setElFn(el));

function setElFn(tgEl){
  // tgEl - 공통 최상위 클래스 (이것만큼 돌면서 모두 생성함!)
  const storeOl = tgEl.querySelector(".store_indic ol");
  const indicBox = tgEl.querySelector(".indic_box");
  const slides = tgEl.querySelectorAll(".store_img li");
  
  
  slides.forEach((el) => {
    storeOl.innerHTML += `<li></li>`;
  });
  
  tgEl.querySelectorAll(".store_indic ol li")
  .forEach((el) => {
    el.onmouseover = function () {
      console.log(this);
      indicBox.style.left = this.offsetLeft + "px";
    };
  });
  indicBox.style.width = 100 / slides.length + "%";

} ////////////// setElFn 함수 /////////////////////
