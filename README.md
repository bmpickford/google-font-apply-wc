# \<gfont-apply>

> Search for available google fonts and apply it to your content. Great way to quickly try out lots of different fonts and find the right one for your content

![font-apply](https://user-images.githubusercontent.com/12684286/137629878-e768edb0-083f-4432-9a0d-f6f3d99558c0.gif)

___
[Demo](https://bmpickford.github.io/google-font-apply-wc/)
___

## Installation

```bash
npm i gfont-apply
```

## Usage

```html
<script type="module">
  import 'gfont-apply/gfont-apply.js';
</script>

<gfont-apply>
  This is where you put the content you want to be able to update the font for
</gfont-apply>
```

## Configuration

You are required to supply either an array of font families that are valid google fonts, or a google font API key. See `src/fonts.js` for an example on how the fonts should be formatted.

```html
<gfont-apply
  ><!-- An array of font families. See index.html for an example. REQUIRED if google fonts API key is not supplied -->
  .fonts=${fonts}

  <!-- Google fonts API key. REQUIRED if the fonts array above is not set -->
  .apiKey="KEY_HERE"

  <!-- Show the autocomplete element. Defaults to true -->
  .show=${false}

  <!-- Number of items to show in autocomplete results. Defaults to 4 -->
  .maxItems="10">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus. 
</gfont-apply>
```

## Development

### Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

### Running

```bash
npm start
```
