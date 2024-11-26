$(document).ready(function(){
    // header js
    const gnbWrap = $('.gnb-wrap'),
    menuBtn = $('.menu-btn'),
    body = $('.body');

    menuBtn.on('click', function(){
        if(!$(this).hasClass('off')){
            $(this).addClass('off');
            gnbWrap.addClass('open');
            body.addClass('on');
        } else {
            $(this).removeClass('off');
            gnbWrap.removeClass('open');
            body.removeClass('on');
        }
    });
    // 영화 링크 배열
    const movieArray = [
        // 아마존 활명수
        "nxbmhop7D1M",
        // 베놈: 라스트 댄스
        "soCtsN0JYUg",
        // 데드라인
        "n3BJGVnUjaQ",
        // 글래디에이터 2
        "eCO6NOFLXYY",
        // 청설
        "mGhUIExGY4Y",
        // 4분 44초
        "ZuV0obhqBXM"
    ];

    let testArray = {
        'amazon' : [{
            'name': '아마존 활명수',
            'link': 'nxbmhop7D1M',
        }],
        'venom' : [{
            'name': '베놈: 라스트 댄스',
            'link': 'soCtsN0JYUg',
        }],
        'deadline' : [{
            'name': '데드라인',
            'link': 'n3BJGVnUjaQ',
        }],
        'gladiator' : [{
            'name': '글래디에이터 2',
            'link': 'eCO6NOFLXYY',
        }],
        'chungseol' : [{
            'name': '청설',
            'link': 'mGhUIExGY4Y',
        }],
        '4m44s' : [{
            'name': '4분 44초',
            'link': 'ZuV0obhqBXM',
        }],
    }

    // 예고편 변경
    const poster = document.querySelectorAll(".poster-list>li>a");
    const posterLi = document.querySelectorAll(".poster-list>li") 

    poster.forEach((el,idx)=>{
        el.onclick = ()=>{
            movieChange(movieArray[idx]);
            posterLi.forEach((el) => el.classList.remove("on"));

            el.parentElement.classList.add("on");
        };
    });

    function movieChange(link) {
        let videoBox = document.querySelector('.video-box iframe');
        videoBox.src = "https://www.youtube.com/embed/" + link + "?autoplay=1";
    }
});