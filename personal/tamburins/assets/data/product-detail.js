// 탬버린즈 상품 데이터 JS - product-detail.js

// 데이터뽑아오기
const temp = [];
const productDetailInfo = $(".ProductDetail_detail-inner__jvQMc");
temp.push({
  productTitle: productDetailInfo.querySelector("h1").innerText,
  productPrice: productDetailInfo.querySelector("em").innerText,
  preductNote: productDetailInfo.querySelector("span").innerText,
  productDescription: productDetailInfo.querySelector(".ProductDetail_detail-desc__MRvLd ").innerText,
});

// 출력하기
console.log(temp);

const productDetail = {
  /*********************** 
    1. 제품명 : productTitle
    2. 가격 : productPrice
    3. 향기 : preductNote
    4. 설명 : productDescription
    __________
    [정보 객체화]
    { 
    productTitle : ""
    productPrice : ""
    preductNote : ""
    productDescription : ""
    }
    ***********************/

  "퍼퓸 이브닝글로우": {
    productTitle: "퍼퓸 이브닝글로우",
    productPrice: "₩ 149,000",
    preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    productDescription:
      "모든 순간에 장미는 장미로써 완벽하게 존재합니다. 씨앗에서 움트어 화려하게 피어지는 매 순간, 끊임없이 변화하는 것처럼 보이지만 본질적으로 장미는 장미의 고아한 아름다움을 내포하고 있습니다. 해질녘 노을이 장미를 라즈베리처럼 발갛게 물들이고, 신선한 딜과 상큼한 레몬껍질로 밝은 빛을 겹쳐내면 살결을 보호하는 견고하고 우아한 가시처럼 얼씨한 패츌리와 사이프리올이 무게감을 더해 또 하나의 완전한 장미를 보여줍니다.",
  },

  "퍼퓸 펌키니": {
    productTitle: "퍼퓸 펌키니",
    productPrice: "₩ 149,000",
    preductNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
    productDescription:
      "하얀 호박에서 느껴지는 청초하고 달콤한 향에 차조기잎과 블러드오렌지의 독특한 푸르름이 더해져 기분 좋은 놀라움을 선사합니다. 잘 여물어 진득해진 호박향과 진저의 스파이시함이 교차되어 독특한 조화를 이루고 뒤이어 밀려오는 크리미한 코코넛밀크는 부드러운 샌달우드와 함께 오묘한 잔상을 만들며 깊은 여운을 그려냅니다.",
  },

  "퍼퓸 홀리메탈": {
    productTitle: "퍼퓸 홀리메탈",
    productPrice: "₩ 149,000",
    preductNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
    productDescription:
      "우연히 발 딛은 신성한 유적지의 성전에서 느껴지는 깨끗하고 차분한 공기를 떠올리게 합니다. 푸른 측백나무 잎가지와 세이지의 조합에 깊이를 더해주는 인센스와 절제된 차가움을 지닌 금속성의 느낌이 어우러져 마치 정지된 시간의 순간을 맞이한 듯 신비한 느낌을 자아내고, 화이트 머스크와 우디노트가 기분 좋은 여운으로 어우러져 오랜 시간 은은하게 머무릅니다.",
  },

  "퍼퓸 볼드시트러스": {
    productTitle: "퍼퓸 볼드시트러스",
    productPrice: "₩ 149,000",
    preductNote: "다채로운 시트러스ㅣ캐럿시드ㅣ고소한 결명자",
    productDescription:
      "상큼하고 다채로운 시트러스로 경쾌하게 시작하는 볼드시트러스는 만다린의 달콤한 과육과 비터오렌지의 씁쓸한 껍질이 만나 고소한 결명자와 어우러지며 독특한 향취를 만들어냅니다. 젖은 흙이 떠오르는 사이프리올은 알싸한 암브레트씨드와 섞이며 우디한 잔향의 묵직한 무게감으로 맺어줍니다.",
  },
  "퍼퓸 우드솔트비치": {
    productTitle: "퍼퓸 우드솔트비치",
    productPrice: "₩ 149,000",
    preductNote: "로즈우드ㅣ씨솔트ㅣ암브레트 시드",
    productDescription:
      "햇살에 물든 에메랄드빛 바다와 숲의 경계에서 불어오는 시원한 바람을 떠오르게 합니다. 첫 시작을 여는 달콤한 로즈우드와 베르가못이 기분좋은 청량함을 주고, 짭짤한 바다내음이 느껴지는 씨솔트향은 한가로운 여름날의 추억을 비춥니다. 뒤이어 시더우드와 머스크가 포근하게 감싸 안아 무게감 있게 마무리됩니다.",
  },
};
