// search.js
/*
    수정 필요
    - 검색어 삭제 버튼 css 및 검색어 삭제 기능
    - 검색 버튼 엔터 시 검색 가능하게 키다운 이벤트 설정
    - 검색 값이 없을 때는 추천 검색어 active, 있을 때는 검색 결과에 active
        => 초기화 함수가 필요...? initSearch
*/
// 데이터 불러오기
import productList from "../data/product-list.js";

document.addEventListener('DOMContentLoaded', () => {

    // 추천 검색어
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('input', () => {
        const result = document.querySelector('.result');
        const recommend = document.querySelector('.recommend');
        const searchContent = document.querySelector('.search-content');
        const eraseBtn = document.querySelector('.erase-btn');
        
        eraseBtn.classList.add('on');

        if (searchForm.value.trim() !== '') {
            // 검색어가 있을 경우
            searchContent.classList.remove('active');
            result.classList.add('active');
            recommend.classList.remove('active');
        } else {
            // 검색어가 없을 경우
            searchContent.classList.remove('active');
            result.classList.remove('active');
            recommend.classList.add('active');
        }
    });

    document.querySelectorAll('.recommend-list>li').forEach(item => {
        item.addEventListener('click', event => {
            const clickedText = event.target.textContent;
            searchForm.value = clickedText;
        });
    });

    // 검색
    function performSearch() {
        const searchQuery = searchForm.value.toLowerCase().trim();
        const resultList = document.querySelector('.result-list');
        const products = Object.values(productList).flat();
        resultList.innerHTML = ''; // 이전 검색 결과 지우기

        if (searchQuery) {
            const filteredProducts = products.filter(product =>
                product.productTitle.toLowerCase().includes(searchQuery)
            );

            if (filteredProducts.length === 0) {
                resultList.innerHTML = '<li>검색 결과가 없습니다.</li>';
            } else {
                filteredProducts.slice(0, 5).forEach(product => {
                    const li = document.createElement('li');
                    li.classList.add('item');
                    li.innerHTML = `
                        <a href="#">
                            <div class="img-box">
                                <img src="${product.productImage}" alt="이미지">
                            </div>
                            <p class="item-name">${product.productTitle}</p>
                        </a>
                    `;
                    resultList.appendChild(li);
                });
            }
        } else {
            resultList.innerHTML = '<li>검색 결과가 없습니다.</li>';
        }

        document.querySelector('.more-btn').style.display = 'block';
    }

    // 검색결과 더보기
    let curIdx = 5;
    function loadMoreResults() {
        const searchQuery = searchForm.value.toLowerCase().trim();
        const resultList = document.querySelector('.result-list');
        const products = Object.values(productList).flat();

        const filteredProducts = products.filter(product =>
            product.productTitle.toLowerCase().includes(searchQuery)
        );

        const moreResults = filteredProducts.slice(curIdx, curIdx + 5);

        moreResults.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('item');
            li.innerHTML = `
                <a href="#">
                    <div class="img-box">
                        <img src="${product.productImage}" alt="이미지">
                    </div>
                    <p class="item-name">${product.productTitle}</p>
                </a>
            `;
            resultList.appendChild(li);
        });

        curIdx += 5;

        if (curIdx >= filteredProducts.length) {
            document.querySelector('.more-btn').style.display = 'none';
        }
    }

    // 검색어 초기화
    function clearSearch() {
        searchForm.value = '';
        const resultList = document.querySelector('.result-list');
        resultList.innerHTML = '<li>검색 결과가 없습니다.</li>';
        document.querySelector('.more-btn').style.display = 'none';
    }

    // 이벤트
    document.querySelector('.search-btn').addEventListener('click', performSearch);
    document.querySelector('.erase-btn').addEventListener('click', clearSearch);
    document.querySelector('.more-btn').addEventListener('click', loadMoreResults);
    document.querySelector('.search-close-btn').addEventListener('click', clearSearch);
});