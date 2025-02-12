const temp = document.querySelector(".cont");
const p = temp.querySelectorAll("p");
console.log(p);
p1 = p[0].innerHTML
  .replace(/<\/?[^>]+(>|$)/g, "") // 모든 HTML 태그 제거
  .trim() // 문자열 양쪽 공백 제거
  .split("\n") // 줄바꿈(\n)을 기준으로 분리
  .map((line) => line.trim()) // 각 항목의 공백 제거
  .filter((line) => line.length > 0); // 빈 항목 제거;
p2 = p[1].innerHTML
  .replace(/<\/?[^>]+(>|$)/g, "") // 모든 HTML 태그 제거
  .trim() // 문자열 양쪽 공백 제거
  .split("\n") // 줄바꿈(\n)을 기준으로 분리
  .map((line) => line.trim()) // 각 항목의 공백 제거
  .filter((line) => line.length > 0)
  .join(""); // 빈 항목 제거;
// console.log(p1, p2);

// Math.floor(Math.random() * (9999999 - 0000001) + 0000001
const rn = Math.floor(Math.random() * 9999998) + 1;
// console.log(rn);

const bookInfo = {
  ISBN: "997" + rn,
  title: p1[0],
  author: p1[1],
  publisher: p1[2],
  info: p2,
  genre: "인문·사회·과학",
  pDate: p1[3],
  bNum: rn,
  pNum: p1[6],
};
console.log(bookInfo);
