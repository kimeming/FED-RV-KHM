// 제품디테일페이지 - product_detail.js

// 개선해야할부분 01.15
// 광휠 스크롤막기

// swiper s /////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// swiper e /////

// auto scroll s /////
const $img = $(".product-detail-img>img");
const IMG_HEIGHT = $img.height();
let imgNum = 0;

console.log($img, IMG_HEIGHT);

$(window).on("wheel", wheelFn);
function wheelFn(e) {
  // 마우스 휠 방향 (-면 위 스크롤, + 아래스크롤)
  let delta = e.originalEvent.deltaY;
  // console.log(delta);

  if (delta < 0) {
    imgNum--;
    $(".sub-top").slideUp(400);
  } else {
    imgNum++;
    $(".sub-top").slideDown(400);
  }
  // console.log(imgNum);

  if (imgNum < 0) imgNum = 0;
  else if (imgNum > $img.length) {
    imgNum = $img.length;
  }

  console.log("이미지번호:", imgNum);
  if (imgNum < $img.length) window.scrollTo(0, $img[imgNum].offsetTop + 117);
  else if (imgNum + 1 > $img.length) window.scrollTo(0, $(".footer").offset().top);

  bulletFn();
} ///wheelFn/////

// aoto scroll e /////

// bulletFn s /////
const $bullet = $(".bullet");

function bulletFn() {
  $bullet.each((idx, el) => {
    if (idx == imgNum) $(el).addClass("on");
    else $(el).removeClass("on");
  });
}
// bulletFn e /////
