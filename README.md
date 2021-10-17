# \<gfont-apply>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

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

<strong>Note:&nbsp;</strong>You are required to supply either an array of font families that are valid google fonts, or a google font API key

#### Fonts
Array of valid font families you want to be available in the autocomplete. Should follow this typing

```typescript
interface Font {
  family: string;
}

```

Example
```html
import fonts from './myfonts.json';
<gfont-apply .fonts=${fonts}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus. 
</gfont-apply>
```

#### API Key
To dynamically download a list of fonts from Google Fonts, you can use their API after generating an API key
```html
<gfont-apply .apiKey="KEY_HERE">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus. 
</gfont-apply>
```

#### Show
Show or hides the autocomplete element
```html
<gfont-apply .show=${false}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus. 
</gfont-apply>
```

### MaxResults
To extend or reduce the number of items shown in the autocomplete
```html
<gfont-apply .maxItems="10">
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