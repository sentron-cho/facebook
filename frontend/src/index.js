import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './css/component.scss' // 컴포넌트에 대한 스타일 시트
import './css/index.scss'     // 스타일 시트

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);