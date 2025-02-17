// HTML 출력 JSX

// 변수에 태그를 jsx 문법으로 작성하여 할당한다
// 주의사항: JSX는 최상위 부모가 단 하나여야 함
// 기본 XML 문법과 동일
// JSX 태그 중간에 변수나 수식의 결과로 표현식으로 출력 시 중괄호만 사용
// ex) <div>{변수/표현식}</div>

// 배열 데이터 생성하기
const data = [
  { 이름: "김소영", 전화번호: "010-222-3333", 생일: "20.01.20" },
  { 이름: "전우치", 전화번호: "010-555-8888", 생일: "18.05.20" },
  { 이름: "강감찬", 전화번호: "010-666-5555", 생일: "21.02.03" },
  { 이름: "공유", 전화번호: "010-999-5555", 생일: "79.08.20" },
  { 이름: "김마리", 전화번호: "010-888-4578", 생일: "00.01.02" },
];

console.log("원본데이터:", data);

// 출력을 위한 구성
// table>tr>td
// map 메서드로 태그와 데이터를 매핑함
// 여기서 사용하는 map은 react용 map -> join 없이도 출력 가능
const listCode = data.map((v) => (
  <tr>
    <td>{v.이름}</td>
    <td>{v.전화번호}</td>
    <td>{v.생일}</td>
  </tr>
)); // JSX 문법 map

// 화면 출력하기
// ReactDOM.render(출력할요소, 대상요소)
ReactDOM.render(
  <React.Fragment>
    <h1>나의 친구 리스트</h1>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>생년월일</th>
        </tr>
      </thead>
      <tbody>
        {/* 위에서 map 돌린 결과를 가져온다 */}
        {listCode}
      </tbody>
    </table>
  </React.Fragment>,
  document.querySelector("#root")
);
