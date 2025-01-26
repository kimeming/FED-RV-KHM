const linkSetData = {
  "EVENING GLOW": {
    link: { path: "/evening-glow" },
    menu: {
      "이브닝 글로우": {
        name: "evening-glow",
        params: { item: "이브닝 글로우", cls: "evening-glow" },
      },
    },
  },
  PERFUME: {
    link: { path: "/perfume" },
    menu: {
      퍼퓸: {
        name: "perfume",
        params: { item: "퍼퓸", cls: "perfume" },
      },
      "퍼퓸 밤": {
        name: "perfume",
        params: { item: "퍼퓸 밤", cls: "perfume-balm" },
      },
    },
  },
  "HAND&LIP": {
    link: { path: "/hand-lip" },
    menu: {
      "쉘 퍼퓸 핸드": {
        name: "hand-lip",
        params: { item: "쉘 퍼퓸 핸드", cls: "shell-perfume-hand" },
      },
      "에그 립밤": {
        name: "hand-lip",
        params: { item: "에그 립밤", cls: "egg-lip-balm" },
      },
      "체인 핸드": {
        name: "hand-lip",
        params: { item: "체인 핸드", cls: "chain-hand" },
      },
    },
  },
  BODY: {
    link: { path: "/body" },
    menu: {
      "샤워리 바디": {
        name: "body",
        params: { item: "샤워리 바디", cls: "showery-body" },
      },
      "퍼퓸드 핸드 앤 바디": {
        name: "body",
        params: { item: "퍼퓸드 핸드 앤 바디", cls: "perfumed-hand-body" },
      },
    },
  },
  "HOME FRAGRANCE": {
    link: { path: "/home-fragrance" },
    menu: {
      "카 디퓨저": {
        name: "home-fragrance",
        params: { item: "카 디퓨저", cls: "car-diffuser" },
      },
      "룸 프래그런스": {
        name: "home-fragrance",
        params: { item: "룸 프래그런스", cls: "room-fragrance" },
      },
      "퍼퓸 캔들": {
        name: "home-fragrance",
        params: { item: "퍼퓸 캔들", cls: "perfume-candle" },
      },
    },
  },
  STORE: {
    link: { path: "/store" },
    menu: "",
  },
  COMMUNITY: {
    link: { path: "/community" },
    menu: {
      FAQ: {
        name: "community",
        params: { item: "FAQ", cls: "faq" },
      },
    },
  },
};

export default linkSetData;
