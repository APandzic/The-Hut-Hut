import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import normalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

export default {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/bali.js',
    format: 'iife',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    filesize(),
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      plugins: [normalize(), autoprefixer(), isDevelopment && cssnano()],
    }),
    isDevelopment && browsersync({ server: 'public' }),
    isProduction && terser(),
  ],
};
