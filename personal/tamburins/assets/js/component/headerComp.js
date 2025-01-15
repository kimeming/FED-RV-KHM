// HeaderComponent.js
export default {
  name: "HeaderComponent",
  data() {
    return {
      gnbItems: [
        { name: "EVENING GLOW", link: "#" },
        { name: "PERFUME", link: "#" },
        { name: "HAND&LIP", link: "#" },
        { name: "BODY", link: "#" },
        { name: "HOME FRAGRANCE", link: "#" },
        { name: "STORE", link: "#" },
        { name: "COMMUNITY", link: "#" },
      ],
    };
  },
  template: `
    <header class="header">
            <div class="dimm"></div>
            <div class="inner-header">
                <div class="header-left">
                    <button type="button" class="search-open-btn"><span class="blind">검색 버튼</span></button>
                </div>
                <h1 class="logo">
                    <a href="#">
                        <img src="./img/main/logo_red.svg" alt="TAMBURINS">
                    </a>
                </h1>
                <!-- gnb-wrap s -->
                <div class="gnb-wrap">
                    <div class="gnb-inner">
                        <!-- gnb s -->
                        <nav class="gnb">
                            <ul class="gnb-list">
                                <li>
                                    <a href="#">EVENING GLOW</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">PERFUME</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">HAND&LIP</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">BODY</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">HOME FRAGRANCE</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">STORE</a>
                                </li>
                                <li>
                                    <a href="#">COMMUNITY</a>
                                    <ul class="dep2">
                                        <li>
                                            <a href="#">
                                                <p class="dep2-tit">EVENING GLOW</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <!-- gnb e -->
                        <!-- gnb-link s -->
                        <div class="gnb-link">
                            <ul class="link-list">
                                <li><a href="#">고객서비스</a></li>
                                <li><a href="#">SHOP IN KOREAN</a></li>
                            </ul>
                        </div>
                        <!-- gnb-link e -->
                    </div>
                </div>
                <!-- gnb-wrap e -->
                <!-- util s -->
                <div class="util">
                    <button type="button" class="account-btn cart-btn"><span class="blind">로그인 버튼</span></button>
                    <button type="button" class="cart-btn"><span class="blind">장바구니 버튼</span></button>
                    <button type="button" class="menu-btn">
                        <span class="blind">메뉴 버튼</span>
                        <span class="line"></span>
                    </button>
                </div>
                <!-- util e -->
            </div>
            <!-- search-wrap s -->
            <div class="search-wrap">
                <div class="search-top">
                    <button type="button" class="search-close-btn">
                        <span class="blind">검색창 닫힘</span>
                    </button>
                </div>
                <div class="search-form">
                    <form id="searchFrm" name="searchFrm" action="abc.php">
                        <fieldset>
                            <legend class="blind">검색창</legend>
                            <div class="form-inner">
                                <div class="search-box">
                                    <input type="text" id="searchForm" name="query" placeholder="어떤 상품을 찾으시나요?" title="검색어" tabindex="0">
                                    <button type="button" class="erase-btn"><span class="blind">검색결과 지우기</span></button>
                                    <button type="button" class="search-btn"><span class="blind">검색</span></button>
                                </div>
                                <div class="search-content recommend active">
                                    <em class="box-tit">제안</em>
                                    <ul class="recommend-list">
                                        <li>퍼퓸 이브닝글로우 11mL</li>
                                        <li>퍼퓸 이브닝글로우 50mL</li>
                                        <li>퍼퓸 밤 이브닝글로우</li>
                                        <li>쉘 퍼퓸 핸드 이브닝글로우</li>
                                    </ul>
                                </div>
                                <div class="search-content result">
                                    <em class="box-tit">검색 결과</em>
                                    <ul class="result-list">
                                        <li class="item">
                                            <a href="#">
                                                <div class="img-box">
                                                    <img src="./img/img-test01.jpg" alt="이미지">
                                                </div>
                                                <p class="item-name"><span class="result">이브닝 글로우</span> 핸드크림</p>
                                            </a>
                                        </li>
                                        <li class="item">
                                            <a href="#">
                                                <div class="img-box">
                                                    <img src="./img/img-test01.jpg" alt="이미지">
                                                </div>
                                                <p class="item-name"><span class="result">이브닝 글로우</span> 핸드크림</p>
                                            </a>
                                        </li>
                                        <li class="item">
                                            <a href="#">
                                                <div class="img-box">
                                                    <img src="./img/img-test01.jpg" alt="이미지">
                                                </div>
                                                <p class="item-name"><span class="result">이브닝 글로우</span> 핸드크림</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <button type="button" class="more-btn">검색결과 더보기</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <!-- search-wrap e -->
        </header>
  `,
};