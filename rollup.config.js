// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

export default [
  // Browser-friendly UMD build
  {
    input: 'index.ts',
    output: {
      name: 'macedonian-transliteration', // Replace with your library name
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(), // Resolve node_modules
      commonjs(), // Convert CommonJS modules to ES6
      terser() // Minify
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: 'index.ts',
    external: [...Object.keys(pkg.dependencies || {})],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' })
    ]
  }
];