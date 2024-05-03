import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'node_modules/web-components-lib/lib.mjs', // Your entry file
  output: {
    file: 'public/bundle.js',
    format: 'iife', // Or any other format you need
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
  ],
};