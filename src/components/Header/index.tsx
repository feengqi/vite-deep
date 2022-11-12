import React from 'react';
import { devDependencies } from '../../../package.json';

import styles from './index.module.scss';
// 1. 导入图片
import logoSrc from '@assets/imgs/vite.png';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';

import Worker from './example.js?worker';

import init from './fib.wasm?init';

type FibFunc = (num: number) => number;

// 1. 初始化 Worker 实例
const worker = new Worker();
// 2. 主线程监听 worker 的信息
worker.addEventListener('message', (e) => {
  console.log(e);
});

init({}).then(({ exports }) => {
  console.log('exports', exports);
  const fibFunc = exports.fib as FibFunc;
  console.log('fibFunc', fibFunc);
  console.log('Fib result:', fibFunc(10));
});

export function Header() {
  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
      <img className="m-auto mb-4" src={logoSrc} alt="" />
      <ReactLogo />
    </div>
  );
}
