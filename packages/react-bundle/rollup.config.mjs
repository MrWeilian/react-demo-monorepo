import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.ts',
  external: ['react'],
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    commonjs(),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
    })
  ]
};