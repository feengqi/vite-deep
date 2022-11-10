import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  // 开启 attributify
  attributify: true,
  // shortcuts 用来封装一系列的原子化能力，尤其是一些常见的类名集合
  // 比如这里封装了flex-c的类名，接下来我们可以在业务代码直接使用这个类名:
  // <div className="flex-c"></div>
  shortcuts: {
    "flex-c": "flex justify-center items-center",
  }
});
