// 도깨비 PJ 메인페이지 JS - main.js

// 메인배너 슬라이드 기능함수 불러오기
import slideFn from "./slide_fn.js";

// 도깨비PJ 데이터 불러오기
import {previewData} from "../data/dkb_data.js";

// console.log(previewData);
// 1. 슬라이드함수 호출하여 실행하기
slideFn();

// 2. 데이터 세팅하기
// (1) 미리보기 데이터 세팅하기
// 대상: preview-box>ul
// 데이터: previewData
// map메서드 사용하기 배열값 변형출력? map&join

$('.preview-box>ul').html(
    previewData.map(v => `
        <li data-idx="${v.idx}">
            <h3>${v.title}</h3>
            <p>${v.story}</p>
        </li>
    `)
);
