module.exports = {
  // 分别表示运行环境和全局变量
  // 局变量是业务代码引入的第三方库所声明
  // 每个全局变量的配置值有 3 种情况:
  // "writable"或者 true，表示变量可重写；
  // "readonly"或者false，表示变量不可重写；
  // "off"，表示禁用该全局变量。
  env: {
    browser: true,
    es2021: true
  },
  // 继承配置
  // 1、从 ESLint 本身继承；
  // 2、从类似 eslint-config-xxx 的 npm 包继承；
  // 2、从 ESLint 插件继承。
  extends: [
    // 第1种情况
    'eslint:recommended',
    // 第3种情况，可以省略包名中的 `eslint-plugin`
    // 格式一般为: `plugin:${pluginName}/${configName}`
    'plugin:react/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  // parser - 解析器
  // 不支持 TypeScript
  // 社区提供了@typescript-eslint/parser这个解决方案，专门为了 TypeScript 的解析而诞生，将 TS 代码转换为 Espree 能够识别的格式(即 Estree 格式)，然后在 Eslint 下通过Espree进行格式检查， 以此兼容了 TypeScript 语法。
  parser: '@typescript-eslint/parser',
  // parserOptions - 解析器选项
  // ecmaVersion: 这个配置和 Acron 的 ecmaVersion 是兼容的，可以配置 ES + 数字(如 ES6)或者ES + 年份(如 ES2015)，也可以直接配置为latest，启用最新的 ES 语法。
  // sourceType: 默认为script，如果使用 ES Module 则应设置为module
  // ecmaFeatures: 为一个对象，表示想使用的额外语言特性，如开启 jsx。
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // ESLint 的 parser 基于Acorn实现，不能直接解析 TypeScript
  plugins: [
    'react',
    '@typescript-eslint',
    // 2. 加入 prettier 的 eslint 插件
    'prettier'
  ],
  // rules - 具体代码规则
  // off 或 0: 表示关闭规则。
  // warn 或 1: 表示开启规则，不过违背规则后只抛出 warning，而不会导致程序退出。
  // error 或 2: 表示开启规则，不过违背规则后抛出 error，程序会退出。
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    indent: ['warn', 2], // 换成了2个空格
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off'
  }
};
