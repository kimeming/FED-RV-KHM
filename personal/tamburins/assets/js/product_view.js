// 제품디테일페이지 - product_view.js

$("a").click(function (e) {
  return false;
});

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
var swiper = new Swiper(".dragSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
// swiper e /////

// auto scroll s /////
const $img = $(".product-detail-img>img");
const IMG_HEIGHT = $img.height();
let imgNum = 0;
let stsWheel = false;

// console.log($img, IMG_HEIGHT);

// aoto scroll e /////
$(window).on("wheel", wheelFn);

// wheelFn s ////
function wheelFn(e) {
  // (4-1) 기본기능막기 ///////
  e.preventDefault();

  // (4-2) 광휠막기 ///////
  if (stsWheel) return;
  stsWheel = true; // 잠금!
  setTimeout(() => (stsWheel = false), 700); // 해제!

  if ($(window).width() > 1024) {
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
    if (imgNum < $img.length) window.scrollTo(0, $img[imgNum].offsetTop);
    else if (imgNum + 1 > $img.length) window.scrollTo(0, $(".footer").offset().top);

    bulletFn();
  }
} ///wheelFn/////

// bulletFn s /////
const $bullet = $(".bullet");

function bulletFn() {
  $bullet.each((idx, el) => {
    if (idx == imgNum) $(el).addClass("on");
    else $(el).removeClass("on");
  });
}
// bulletFn e /////

// css 변경  s///

$(".desc button").click((e) => {
  $(".detail-box span").toggleClass("on");
  $(".desc button").toggleClass("on");
  $();
});

$(".accordion .accordion-btn").each((i, e) => {
  $(e).click(() => {
    $(".accordion-cont").eq(i).toggleClass("on");
    $(e).toggleClass("on");
    $(".accordion-cont button").click(() => {
      $(".accordion-cont").eq(i).removeClass("on");
      $(e).removeClass("on");
    });
  });
});
// css 변경  e///
