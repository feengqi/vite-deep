// 使用attributify的时候需要注意类型问题，你需要添加types/shim.d.ts来增加类型声明，以防类型报错:

import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  type HTMLAttributes<T> = AttributifyAttributes;
}
