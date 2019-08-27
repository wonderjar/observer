// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/test.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      presets: ['stage-2'],
      plugins: ['external-helpers'],
      externalHelpers: true,
      exclude: 'node_modules/**' // 仅仅转译我们的源码
    })
  ],
  dest: 'dist/bundle.js'
};