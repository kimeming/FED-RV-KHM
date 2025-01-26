// layout.js
import linkSetData from "/assets/data/gnb-data.js";
// SearchWrap 컴포넌트
export const SearchWrap = {
  template: `
        <div class="search-wrap">
                <div class="search-top">
                    <button type="button" class="search-close-btn">
                        <span class="blind">검색창 닫힘</span>
                    </button>
                </div>
                <div class="search-form">
                    <form id="searchFrm" name="searchFrm">
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
                                        <li>검색 결과가 없습니다.</li>
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
    `,
};

// GNB 컴포넌트
export const GNB = {
  data() {
    return {
      linkSetData,
    };
  },
  template: `
      <div class="gnb-wrap">
          <div class="gnb-inner">
              <!-- gnb s -->
              <nav class="gnb">
                  <ul class="gnb-list">
                    <li v-for="(item, key) in linkSetData" :key="key">
                      <router-link class="dep1" :to="item.link.path">{{ key }}</router-link>
                      <ul v-if="item.menu && Object.keys(item.menu).length" class="dep2">
                        <li v-for="(subItem, subKey) in item.menu" :key="subKey">
                          <router-link :to="'/' + subItem.name + '?item=' + subItem.params.cls">
                            <p class="dep2-tit">{{ subKey }}</p>
                          </router-link>
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
    `,
};

// Header 컴포넌트
export const Header = {
  template: `
    <header class="header">
      <div class="dimm"></div>
      <div class="inner-header">
        <div class="header-left">
          <button type="button" class="search-open-btn"><span class="blind">검색 버튼</span></button>
        </div>
        <h1 class="logo">
          <a href="#"><img src="/ASSETS/img/main/logo_red.svg" alt="TAMBURINS"></a>
        </h1>
        <gnb-comp></gnb-comp>
        <div class="util">
          <button type="button" class="account-btn cart-btn"><span class="blind">로그인 버튼</span></button>
          <button type="button" class="cart-btn"><span class="blind">장바구니 버튼</span></button>
          <button type="button" class="menu-btn">
            <span class="blind">메뉴 버튼</span>
            <span class="line"></span>
          </button>
        </div>
      </div>
      <search-comp></search-comp>
    </header>
  `,
  components: {
    "search-comp": SearchWrap,
    "gnb-comp": GNB,
  },
};

// Footer 컴포넌트
export const Footer = {
  template: `
    <footer class="footer">
            <div class="footer-inner">
                <div class="footer-top">
                    <div class="footer-logo">
                        <img src="/ASSETS/img/main/logo.svg" alt="TAMBURINS">
                    </div>
                </div>
                <div class="footer-btm">
                    <div class="left">
                      <p class="bold">COMMUNITY</p>
                      <ul class="footer-link">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">고객서비스</a></li>
                      </ul>
                    </div>
                    <div class="right">
                      <p class="bold">SNS</p>
                      <ul class="sns-list">
                          <li><a href="https://www.instagram.com/tamburinsofficial/" target="_blank" title="새창열림">INSTAGRAM</a></li>
                          <li><a href="https://www.facebook.com/tamburinsofficial/" target="_blank" title="새창열림">FACEBOOK</a></li>
                          <li><a href="https://pf.kakao.com/_RkqIj" target="_blank" title="새창열림">KAKAOTALK</a></li>
                          <li><a href="https://weibo.com/tamburinsofficial" target="_blank" title="새창열림">WEIBO</a></li>
                      </ul>
                    </div>
                </div>
            </div>
        </footer>
  `,
};
