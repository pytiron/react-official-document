import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 컴포넌트가 아닌 엘리먼트 객체로 DOM 노드를 그릴 수 있다.
// element 객체는 한번 생성되면 불변성으로 인해 변할 수 없다. 따라서 변화 시키기 위해서는 변화 후
// ReactDOM.render 다시 호출하여 변경사항을 적용시켜줘야 한다.
// const elements = <h1>Hello, world</h1>
// ReactDOM.render(elements, document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
