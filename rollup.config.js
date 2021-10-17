import html from '@web/rollup-plugin-html';

export default {
  input: 'index.html',
  output: { dir: 'docs' },
  plugins: [html()],
};
