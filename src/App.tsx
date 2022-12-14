import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <img src={logo} className="w-20" alt="logo" />
      <img
        src={new URL('./logo.png', import.meta.env.VITE_IMG_BASE_URL).href}
      />
      <p className="bg-red-400">Hello Vite + React!</p>
    </div>
  );
}

export default App;
