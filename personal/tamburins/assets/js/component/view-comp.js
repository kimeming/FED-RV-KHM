// 제품 디테일페이지 컴포넌트 JS - product_view_comp
import productDetail from "../../data/product-detail.js"

export const View = {
    template:`
  <div class="sub-container" id="main">

    <div class="contents">
          <!-- product-view s -->
          <div class="product-view-area">
            <div class="product-view-wrap">
              <!-- thumb-box s -->
              <div class="thumb-box">
                <!-- 슬라이드 1 -->
                <div class="product-slide">
                  <div class="product-slide-wrap">
                    <div class="product-detail-img">
                      <img src="./img/view/item1/img_item_01.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="product-detail-img">
                      <img src="./img/view/item1/img_item_02.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="product-detail-img">
                      <img src="./img/view/item1/img_item_03.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="product-detail-img">
                      <img src="./img/view/item1/img_item_04.jpg" alt="이브닝글로우" />
                    </div>
                  </div>
                  <div class="bullet-sticky-area">
                    <div class="bullet-box">
                      <div class="bullet on"></div>
                      <div class="bullet"></div>
                      <div class="bullet"></div>
                      <div class="bullet"></div>
                    </div>
                  </div>
                </div>
                <!-- 슬라이드 2 -->
                <div class="dragSwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="./img/view/item1/img_item_01.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="swiper-slide">
                      <img src="./img/view/item1/img_item_02.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="swiper-slide">
                      <img src="./img/view/item1/img_item_03.jpg" alt="이브닝글로우" />
                    </div>
                    <div class="swiper-slide">
                      <img src="./img/view/item1/img_item_04.jpg" alt="이브닝글로우" />
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <!-- thumb-box e -->
              <!-- detail-box s -->
              <div class="sticky-area">
                <div class="detail-box-wrap">
                  <div class="detail-box sub-section">
                    <h4 class="name">퍼퓸 이브닝글로우</h4>
                    <em class="price">₩ 149,000</em>
                    <div class="desc">
                      <p class="fragrance">노을에 물든 장미 | 라즈베리 | 머스크</p>
                      <button>
                        <i class="fa-solid fa-chevron-down" style="color: #1d1d1d"></i>
                      </button>
                    </div>
                    <span>
                      모든 순간에 장미는 장미로써 완벽하게 존재합니다. 씨앗에서 움트어 화려하게 피어지는 매 순간,
                      끊임없이 변화하는 것처럼 보이지만 본질적으로 장미는 장미의 고아한 아름다움을 내포하고 있습니다.
                      해질녘 노을이 장미를 라즈베리처럼 발갛게 물들이고, 신선한 딜과 상큼한 레몬껍질로 밝은 빛을
                      겹쳐내면 살결을 보호하는 견고하고 우아한 가시처럼 얼씨한 패츌리와 사이프리올이 무게감을 더해 또
                      하나의 완전한 장미를 보여줍니다.
                    </span>
                  </div>

                  <!-- detail-box e -->
                  <!-- option-box s -->
                  <div class="option-box sub-section">
                    <!-- option-list s -->
                    <div class="swiper mySwiper option-list">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img class="selected" src="./img/evening_glow/img_evening_glow_01.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_02.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_03.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_04.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_04.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_04.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_04.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                        <div class="swiper-slide">
                          <a href="#" class="item">
                            <img src="./img/evening_glow/img_evening_glow_04.jpg" alt="이브닝글로우" />
                          </a>
                          <p>퍼퓸 이브닝글로우</p>
                        </div>
                      </div>
                    </div>
                    <!-- option-list e -->
                    <!-- more-option s -->
                    <div class="more-option-box sub-section">
                      <p class="box-tit">사이즈</p>
                      <div class="link-btn-wrap">
                        <a href="#" class="link-btn round-btn">11mL</a>
                        <a href="#" class="link-btn round-btn">50mL</a>
                      </div>
                      <div class="btn-wrap">
                        <button type="button" class="add-btn">Add To Cart</button>
                      </div>
                    </div>
                    <!-- more-option e -->
                    <div class="accordion-wrap">
                      <div class="sub-section">
                        <ul class="accordion">
                          <li>
                            <a href="#" class="accordion-btn"
                              >제품 상세정보
                              <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                            </a>
                            <div class="accordion-cont">
                              <div class="ProductOuterDetail-info-wrap">
                                <button>
                                  <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                                </button>
                                <h3>제품상세정보</h3>
                                <p>
                                  감각적으로 향을 즐길 수 있는 새로운 형태의 퍼퓸밤. 핸디한 사이즈의 퍼퓸 밤과 함께
                                  어디서든 자유롭게 향을 경험하고 스스로를 표현해보세요. 부드러운 텍스처로 맥박이 뛰는
                                  손목, 귀밑 등에 부드럽게 발라주면 체온에 의해 은은하게 퍼지는 향을 느끼실 수 있습니다.
                                  아이코닉한 퍼퓸 밤 디자인은 탬버린즈 퍼퓸의 일부가 미러링된 형태로 확장된 퍼퓸의
                                  페르소나를 표현합니다.
                                </p>
                                <h3 class="ProductOuterDetail_sub-title">향노트</h3>
                                <p>Top: <span>레몬, 딜</span></p>
                                <p>Middle: <span>로즈, 라즈베리</span></p>
                                <p>Base: <span>머스크, 사이프리올, 패츌리</span></p>
                                <h3 class="ProductOuterDetail_sub-title">전성분</h3>
                                <p>
                                  카프릴릭/카프릭트라이글리세라이드, 향료, 다이메티콘, 마이크로크리스탈린왁스, 파라핀,
                                  페닐트라이메티콘, 합성왁스, 마이크로크리스탈린왁스, 리모넨, 리날룰, 시트로넬올,
                                  제라니올, 비에이치티
                                </p>
                                <h3 class="ProductOuterDetail_sub-title">사용방법</h3>
                                <p>
                                  용기 하단을 돌려 내용물을 끌어올려 손목, 귀 뒤 등 맥박이 뛰는 부위에 가볍게 발라줍니다.
                                </p>
                                <h3 class="ProductOuterDetail_sub-title">사용할 때의 주의사항</h3>
                                <p>
                                  1. 손목 등에 가볍게 테스트 후 사용하세요. 2. 사용 시 묻어날 수 있으니 잘 흡수시켜
                                  사용해주세요. 3. 제형 특성상 온도에 민감하여 고온 보관시 스웨팅 현상이 발생할 수
                                  있으니 유의해주세요.  * 본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자 분쟁
                                  해결 기준에 의해 보상해 드립니다.
                                </p>
                                <h3 class="ProductOuterDetail_sub-title">사용기한</h3>
                                <p>
                                  사용기한 24개월(상품 발송일 기준으로 사용기한이 12개월 이상 남은 상품만을 판매합니다.)
                                </p>
                                <h3 class="ProductOuterDetail_sub-title">제조업자</h3>
                                <p>코스맥스(주)</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#" class="accordion-btn"
                              >배송 및 반품
                              <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                            </a>
                            <div class="accordion-cont">
                              <button>
                                <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                              </button>
                              <p>3만원 이상 구매하실 경우 배송 비용은 무료입니다.

                                주문일로부터 1-2 영업일 이내 출고됩니다.
                                
                                배송은 지역 택배사 사정에 따라 약간의 지연이 생길 수 있습니다. 배송이 시작되면 구매자에게는 이메일, 수령인에게는 카카오 알림톡으로 배송 정보를 전송해 드립니다.
                                CJ대한통운(https://www.cjlogistics.com)
                                
                                상품 혹은 증정품의 포장(랩핑)을 개봉 및 훼손한 경우 반품이 불가합니다.
                                
                                단순 변심 또는 주문 실수로 인한 교환이 불가합니다. 신중한 구매 부탁드립니다.</p>
                            </div>
                          </li>
                          <li>
                            <a href="#" class="accordion-btn"
                              >유료 쇼핑백 서비스
                              <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                            </a>
                            <div class="accordion-cont">
                              <button>
                                <i class="fa-solid fa-chevron-right" style="color: #1d1d1d"></i>
                              </button>
                              <div class="shopping-box-wrap">
                                <h2>유료 쇼핑백 서비스</h2>
                                <img src="./img/view/shoppingBag_v1.jpg" alt="쇼핑백">
                                <strong>쇼핑백 S사이즈를 추천드립니다.</strong>
                                <p>선물포장 패키지가 제공되는 품목 혹은 여러개의 제품을 함께 구매하실 경우 1:1 문의하기를 통해 적합한 사이즈를 추천 받으실 수 있습니다.</p>
                                <section class="size-table">
                                  <strong>사이즈 차트</strong>
                                  <table>
                                    <tr>
                                      <td>제품</td>
                                      <td>용량</td>
                                      <td>추천쇼핑백</td>
                                    </tr>
                                    <tr>
                                      <td>퍼퓸</td>
                                      <td>11mL, 50mL</td>
                                      <td>S</td>
                                    </tr>
                                    <tr>
                                      <td>에그 퍼퓸</td>
                                      <td>14mL</td>
                                      <td>S</td>
                                    </tr>
                                    <tr>
                                      <td>퍼퓸 밤</td>
                                      <td>6.5g</td>
                                      <td>S</td>
                                    </tr>
                                  </table>
                                </section>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- product-view e -->
          <ul class="breadcrumb">
            <li><a href="./main.html" class="home">HOME</a></li>
            <span>/</span>
            <li><a href="./product-list.html">이브닝글로우</a></li>
            <span>/</span>
            <li>퍼퓸 이브닝글로우</li>
          </ul>
        </div>
      </div>  
    `,
    data(){
        return{
            productDetail: productDetail,
        }
    }
}