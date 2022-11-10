import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 用来注入 Windi CSS 所需的样式，一定要加上！
import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
