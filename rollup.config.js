import html from '@web/rollup-plugin-html';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.html',
  output: { dir: 'docs' },
  plugins: [html(), resolve()],
};
