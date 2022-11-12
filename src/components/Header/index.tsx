import React from 'react';
import { devDependencies } from '../../../package.json';

import styles from './index.module.scss';
// 1. 导入图片
import logoSrc from '@assets/imgs/vite.png';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';
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
