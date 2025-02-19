// 필수 요소 import
import React from 'react';
import ReactDOM from 'react-dom/client';

// scss import
import '../src/css/main.scss';

// root
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// root에 렌더링하기
root.render(
  <>
    <h1>
      <b>선재업고</b><span>튀어</span>
    </h1>
  </>
);
