$(() => {
    // header intro animation - 첫 진입 시에만
    if(window.innerWidth >= 1024){
        const $logo = $('.header .logo');
        const pcVideo = $('.video-wrap .web');
        $('.header .util, .header-left').fadeOut();
        pcVideo[0].pause();

        setTimeout(function() {
            $logo.addClass('active');
            pcVideo[0].play();
            $('.header .util, .header-left').fadeIn();
        }, 2000);
    }

    // best seller slide
    const bestSlide = new Swiper('.best-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
                centeredSlides: false,
            },
        }
    });

    // store slide
    const storeSlide = new Swiper('.store-slide', {
        slidesPerView: 1,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        on: {
            slideChange: function () {
                const storeArr = ['플래그십 스토어 한남', '플래그십 스토어 성수', '플래그십 스토어 삼청', '하우스 도산', '플래그십 스토어 신사'];
                let realIdx = this.realIndex;
                const storeName = document.querySelector('.store-name');
            
                // 클래스 초기화
                storeName.classList.remove('show');
            
                // 텍스트 추가 후 클래스 재추가
                setTimeout(() => {
                    storeName.innerText = storeArr[realIdx];
                    storeName.classList.add('show');
                }, 500);
            }
            
        }
    });

    // section header change
    const header = document.querySelector('header'); // header 요소 선택
    const sections = document.querySelectorAll('section'); // 모든 section 요소 선택
    const headerHeight = header.offsetHeight; // header의 높이 계산

    window.addEventListener('scroll', () => {
        let addBlackClass = false;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            // 섹션의 상단이 헤더 높이만큼 보였을 때 조건 확인
            if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
                if (section.classList.contains('best') || section.classList.contains('store')) {
                    addBlackClass = true;
                }
            }
        });

        // header에 black 클래스 추가/제거
        if (addBlackClass) {
            header.classList.add('black');
        } else {
            header.classList.remove('black');
        }
    });
});