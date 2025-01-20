// 탬버린즈 상품 데이터 JS - product-list.js

// 데이터뽑아오기 ///////////
// temp1 ///////
const temp1 = [];
let idxN = 0;
document.querySelectorAll(`.product-other`).forEach((el) => {
  ++idxN;
  temp1.push({
    idx: idxN,
    productTitle: el.querySelector("h2").innerText,
    preductNote: el.querySelector("em").innerText,
    productPrice: el.querySelector("strong").innerText,
    productNoteCount: el.querySelector("span").innerText,
  });
});
// 출력하기
console.log(temp1);

// temp2 ///////
const temp2 = [];
document.querySelectorAll(`.ProductListItem_product-small__TCb4m`).forEach((el) => {
  temp2.push({
    productTitle: el.querySelector("h2").innerText,
    // preductNote: el.querySelector("em").innerText,
    // productPrice: el.querySelector("strong").innerText,
    // productNoteCount: el.querySelector("span").innerText,
  });
});
// 출력하기
console.log(temp2);

// 카테고리별 제품 메인 제품리스트 ///////////////
const productList = {
  /*********************** 
   * idx: ,
    1. 제품명 : productTitle
    2. 향기 : preductNote
    3. 가격 : productPrice
    4. 향개수 : productNoteCount
    __________
    [정보 객체화]
    { 
    idx: ,
    productTitle : ""
    preductNote : ""
    productPrice : ""
    productNoteCount : ""
    }
    ***********************/
  이브닝글로우: [
    {
      idx: 1,
      productTitle: "퍼퓸 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 149,000",
      productNoteCount: "+15 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_01.jpg"
    },
    {
      idx: 2,
      productTitle: "쉘 퍼퓸 핸드 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 18,500",
      productNoteCount: "+5 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_02.jpg"
    },
    {
      idx: 3,
      productTitle: "에그 립밤 로즈우디 글로우",
      preductNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
      productNoteCount: "+5 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_03.jpg"
    },
    {
      idx: 4,
      productTitle: "퍼퓸 밤 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_04.jpg"
    },
    {
      idx: 5,
      productTitle: "퍼퓸 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 42,000",
      productNoteCount: "+8 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_05.jpg"
    },
    {
      idx: 6,
      productTitle: "메탈 웨어 쉘",
      preductNote: "쉘 퍼퓸 핸드 15mL 메탈 링",
      productPrice: "₩ 38,000",
      productNoteCount: "+4 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_06.jpg"
    },
    {
      idx: 7,
      productTitle: "레더 웨어 에그립밤",
      preductNote: "에그 립밤 레더 케이스",
      productPrice: "₩ 35,000",
      productNoteCount: "+4 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_07.jpg"
    },
    {
      idx: 8,
      productTitle: "레더 웨어 퍼퓸 밤",
      preductNote: "퍼퓸 밤 레더 케이스",
      productPrice: "₩ 42,000",
      productNoteCount: "+4 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_08.jpg"
    },
    {
      idx: 9,
      productTitle: "레더 웨어 퍼퓸",
      preductNote: "퍼퓸 11mL 레더 케이스",
      productPrice: "₩ 42,000",
      productNoteCount: "+4 가지 향",
      productImage: "./img/evening_glow/img_evenig_glow_09.jpg"
    },
  ],

  퍼퓸: [
    {
      idx: 1,
      productTitle: "에그 퍼퓸 펌키니",
      preductNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 45,800",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 2,
      productTitle: "에그 퍼퓸 카모",
      preductNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 45,800",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 3,
      productTitle: "에그 퍼퓸 홀리메탈",
      preductNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 45,800",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 42,000",
      productNoteCount: "+8 가지 향",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 카모",
      preductNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 42,000",
      productNoteCount: "+8 가지 향",
    },
    {
      idx: 6,
      productTitle: "퍼퓸 화이트다즐링",
      preductNote: "화이트 샴페인 | 다즐링 티 | 크리미한 머스크",
      productPrice: "₩ 42,000",
      productNoteCount: "+8 가지 향",
    },
    {
      idx: 7,
      productTitle: "퍼퓸 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 149,000",
      productNoteCount: "+15 가지 향",
    },
    {
      idx: 8,
      productTitle: "퍼퓸 펌키니",
      preductNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 149,000",
      productNoteCount: "+15 가지 향",
    },
    {
      idx: 9,
      productTitle: "퍼퓸 홀리메탈",
      preductNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 149,000",
      productNoteCount: "+15 가지 향",
    },
  ],

  퍼퓸스몰: [
    {
      idx: 1,
      productTitle: "에그 퍼퓸 레이트어텀",
    },
    {
      idx: 2,
      productTitle: "에그 퍼퓸 우드솔트비치",
    },
    {
      idx: 3,
      productTitle: "퍼퓸 버가샌달",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 브라운",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 베이더인더레이크",
    },
    {
      idx: 6,
      productTitle: "퍼퓸 솔티바닐라",
    },
    {
      idx: 7,
      productTitle: "퍼퓸 볼드시트러스",
    },
    {
      idx: 8,
      productTitle: "퍼퓸 볼드시트러스",
    },
    {
      idx: 9,
      productTitle: "퍼퓸 우드솔트비치",
    },
    {
      idx: 10,
      productTitle: "퍼퓸 레이트어텀",
    },
    {
      idx: 11,
      productTitle: "퍼퓸 브라운",
    },
    {
      idx: 12,
      productTitle: "퍼퓸 베이더인더레이크",
    },
    {
      idx: 13,
      productTitle: "퍼퓸 솔티바닐라",
    },
    {
      idx: 14,
      productTitle: "퍼퓸 카모",
    },
    {
      idx: 15,
      productTitle: "퍼퓸 화이트다즐링",
    },
    {
      idx: 16,
      productTitle: "퍼퓸 라레",
    },
    {
      idx: 17,
      productTitle: "퍼퓸 버가샌달",
    },
    {
      idx: 18,
      productTitle: "퍼퓸 헤이스텍스",
    },
    {
      idx: 19,
      productTitle: "퍼퓸 바이링거",
    },
  ],
  퍼퓸밤: [
    {
      idx: 1,
      productTitle: "퍼퓸 밤 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 2,
      productTitle: "퍼퓸 밤 홀리메탈",
      preductNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 3,
      productTitle: "퍼퓸 밤 펌키니",
      preductNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 밤 카모",
      preductNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 밤 라레",
      preductNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 6,
      productTitle: "퍼퓸 밤 버가샌달",
      preductNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
    {
      idx: 7,
      productTitle: "퍼퓸 밤 스웨이드페어",
      preductNote: "시원한 배 | 스웨이드 | 쌉쌀한 갈바넘",
      productPrice: "₩ 46,500",
      productNoteCount: "+7 가지 향",
    },
  ],
  쉘핸드퍼퓸: [
    {
      idx: 1,
      productTitle: "쉘 퍼퓸 핸드 이브닝글로우",
      preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 2,
      productTitle: "쉘 퍼퓸 핸드 펌키니",
      preductNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 3,
      productTitle: "쉘 퍼퓸 핸드 볼드시트러스",
      preductNote: "다채로운 시트러스 | 캐럿시드 | 고소한 결명자",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 4,
      productTitle: "쉘 퍼퓸 핸드 홀리메탈",
      preductNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 5,
      productTitle: "쉘 퍼퓸 핸드 카모",
      preductNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 6,
      productTitle: "쉘 퍼퓸 핸드 라레",
      preductNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 7,
      productTitle: "쉘 퍼퓸 핸드 버가샌달",
      preductNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 8,
      productTitle: "쉘 퍼퓸 핸드 페이구",
      preductNote: "무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 9,
      productTitle: "쉘 퍼퓸 핸드 베인",
      preductNote: "월계수 잎 | 은방울꽃 | 정돈된 가죽",
      productPrice: "₩ 32,000",
      productNoteCount: "+9 가지 향",
    },
    {
      idx: 10,
      productTitle: "퍼퓸핸드 미니 듀오 세트 베스트(PUMKINI+FEY9)",
      preductNote: "PUMKINI+FEY9",
      productPrice: "₩ 35,000",
      productNoteCount: "+2 가지 향",
    },
    {
      idx: 11,
      productTitle: "퍼퓸핸드 미니 듀오 세트 베스트(CHAMO+VEIN)",
      preductNote: "CHAMO+VEIN",
      productPrice: "₩ 35,000",
      productNoteCount: "+2 가지 향",
    },
  ],
  // 쉘핸드퍼퓸스몰: ,
  에그립밤: [
    {
      idx: 1,
      productTitle: "에그 립밤 로즈우디 글로우",
      preductNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 2,
      productTitle: "에그 립밤 로즈우디",
      preductNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 3,
      productTitle: "에그 립밤 밀크티",
      preductNote: "베르가못 | 은은한 블랙티 | 코코넛",
      productPrice: "₩ 28,900",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 4,
      productTitle: "에그 립밤 언센티드",
      preductNote: "언센티드(무향)",
      productPrice: "일시 품절",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 5,
      productTitle: "에그 립밤 우디그린",
      preductNote: "신선한 만다린 과즙 | 아로마틱 허브 | 부쿠",
      productPrice: "₩ 28,900",
      productNoteCount: "+5 가지 향",
    },
  ],
  체인핸드: [
    {
      idx: 1,
      productTitle: "체인 핸드 7",
      preductNote: "로즈우드 | 코코넛 향 | 우아함",
      productPrice: "₩ 24,000",
      productNoteCount: "+3 가지 향",
    },
    {
      idx: 2,
      productTitle: "체인 핸드 000",
      preductNote: "샌달우드 | 패츌리 | 흙 내음",
      productPrice: "₩ 24,000",
      productNoteCount: "+3 가지 향",
    },
    {
      idx: 3,
      productTitle: "체인 핸드 421",
      preductNote: "바닐라 우디 | 너티함",
      productPrice: "₩ 24,000",
      productNoteCount: "+3 가지 향",
    },
  ],
  샤워리바디: [
    {
      idx: 1,
      productTitle: "샤워리바디워시 얼리모닝듀",
      preductNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 34,500",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 2,
      productTitle: "샤워리바디워시 비가리코",
      preductNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 34,500",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 3,
      productTitle: "샤워리바디워시 님버스",
      preductNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
      productPrice: "₩ 34,500",
      productNoteCount: "+5 가지 향",
    },
    {
      idx: 4,
      productTitle: "샤워리바디 듀오 얼리모닝듀",
      preductNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 70,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 5,
      productTitle: "샤워리바디 듀오 비가리코",
      preductNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 70,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 6,
      productTitle: "샤워리바디 듀오 님버스",
      preductNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
      productPrice: "₩ 70,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 7,
      productTitle: "샤워리바디로션 얼리모닝듀",
      preductNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 39,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 8,
      productTitle: "샤워리바디로션 비가리코",
      preductNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 39,000",
      productNoteCount: "+3 가지 향",
    },
    {
      idx: 9,
      productTitle: "샤워리바디로션 포그",
      preductNote: "물안개 낀 숲 | 젖은 나무 | 캐시미어 우드",
      productPrice: "₩ 39,000",
      productNoteCount: "+3 가지 향",
    },
  ],
  // 샤워리바디스몰: ,
  퍼퓸드핸드앤바디: [
    {
      idx: 1,
      productTitle: "퍼퓸드 핸드워시 카모",
      preductNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 34,000",
      productNoteCount: "+3 가지 향",
    },
    {
      idx: 2,
      productTitle: "퍼퓸드 핸드워시 000",
      preductNote: "샌달우드 | 패츌리 | 흙 내음",
      productPrice: "₩ 34,000",
      productNoteCount: "+3 가지 향",
    },
    {
      idx: 3,
      productTitle: "퍼퓸드 핸드워시 7",
      preductNote: "로즈우드 | 코코넛 향 | 우아함",
      productPrice: "₩ 34,000",
      productNoteCount: "+3 가지 향",
    },
  ],
  카디퓨저: [
    {
      idx: 1,
      productTitle: "카 디퓨저 비가리코",
      preductNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 85,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 2,
      productTitle: "카 디퓨저 카모",
      preductNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
      productPrice: "₩ 85,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 3,
      productTitle: "카 디퓨저 블루포레스트",
      preductNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
      productPrice: "₩ 85,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 4,
      productTitle: "카 디퓨저 릴리코코",
      preductNote: "물기 어린 릴리ㅣ푸른 대나무ㅣ크리미한 코코넛",
      productPrice: "₩ 85,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 5,
      productTitle: "카 디퓨저 비가리코 리필",
      preductNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 31,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 6,
      productTitle: "카 디퓨저 미니 비가리코",
      preductNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 46,500",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 7,
      productTitle: "카 디퓨저 미니 카모",
      preductNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
      productPrice: "₩ 46,500",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 8,
      productTitle: "카 디퓨저 미니 블루포레스트",
      preductNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
      productPrice: "₩ 46,500",
      productNoteCount: "+4 가지 향",
    },
  ],
  카디퓨저스몰: [
    {
      idx: 1,
      productTitle: "카 디퓨저 미니 릴리코코",
    },
  ],
  룸프래그런스: [
    {
      idx: 1,
      productTitle: "룸 스프레이 파피루스",
      preductNote: "파피루스ㅣ그린티ㅣ샌달우드",
      productPrice: "품절",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 2,
      productTitle: "디퓨저 파피루스",
      preductNote: "파피루스ㅣ그린티ㅣ샌달우드",
      productPrice: "오프라인 한정 판매",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 3,
      productTitle: "룸 스프레이 파인네스트",
      preductNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
      productPrice: "품절",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 4,
      productTitle: "디퓨저 파인네스트",
      preductNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
      productPrice: "오프라인 한정 판매",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 5,
      productTitle: "룸 스프레이 멈버드",
      preductNote: "유자ㅣ국화ㅣ머스크",
      productPrice: "품절",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 6,
      productTitle: "디퓨저 멈버드",
      preductNote: "유자ㅣ국화ㅣ머스크",
      productPrice: "오프라인 한정 판매",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 7,
      productTitle: "룸 스프레이 먹",
      preductNote: "그을린 소나무ㅣ먹물ㅣ패출리",
      productPrice: "품절",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 8,
      productTitle: "디퓨저 먹",
      preductNote: "그을린 소나무ㅣ먹물ㅣ패출리",
      productPrice: "오프라인 한정 판매",
      productNoteCount: "+4 가지 향",
    },
  ],
  퍼퓸캔들: [
    {
      idx: 1,
      productTitle: "퍼퓸 캔들 펌키니",
      preductNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
      productPrice: "₩ 83,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 2,
      productTitle: "퍼퓸 캔들 홀리메탈",
      preductNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
      productPrice: "₩ 83,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 3,
      productTitle: "퍼퓸 캔들 베이더인더레이크",
      preductNote: "쑥 | 안개 낀 호수 | 촉촉한 이끼",
      productPrice: "₩ 83,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 캔들 레이트어텀",
      preductNote: "비터오렌지 | 사탕수수 풀내음 | 머스크",
      productPrice: "₩ 83,000",
      productNoteCount: "+4 가지 향",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 캔들 미니 세트",
      preductNote: "캔들 네 가지 향",
      productPrice: "₩ 148,000",
      productNoteCount: "+1 가지 향",
    },
  ],
};

// 데이터 export
export default productList;
