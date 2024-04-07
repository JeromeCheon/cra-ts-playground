import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// react-router의 기능들은 이 browserRouter 컴포넌트 안에서만 동작하므로
// 모든 컴포넌트의 공통 부모 컴포넌트에 적용해야 함
// 대부분 페이지 기능이 모든 화면에 영향을 미치므로
// index 컴포넌트에서 다음과 같이 적용할 것
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
