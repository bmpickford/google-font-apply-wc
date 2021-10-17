import { html, css, LitElement } from 'lit';

export class GfontApply extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;

        --color-border: hsl(206 81.9% 65.3%);
        --color-bg: hsl(225 60.0% 99.4%);

        --color-list-hover: hsl(208 77.5% 76.9%);
        --color-list-odd: hsl(210 100% 98%);
        --color-list-even: white;
      }

      form {
        display: block;
        margin: auto;
        font-family: monospace !important;
        width: 350px;
        background-color: var(--color-bg);
      }

      #font-family-select {
        margin-top: 8px;
        position: relative;
        padding: 8px 12px;
        border-radius: 8px;
        border-style: solid;
        border-width: 1px;
        appearance: none;
      }

      #font-family-select:focus {
        border-color: var(--color-border);
      }

      #font-family-select[data-typing='true'] {
        border-radius: 8px 8px 0 0;
      }

      label,
      #font-family-select {
        width: 100%;
      }

      ul {
        width: 374px;
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        left: -2px;
        list-style-type: none;
        border-width: 3px;
        border-style: solid;
        border-color: var(--color-border);
        border-radius: 0 0 8px 8px;
        border-top: unset;
      }

      li {
        padding: 12px;
        cursor: pointer;
      }

      li:nth-child(odd) {
        background-color: var(--color-list-odd);
      }

      li:nth-child(even) {
        background-color: var(--color-list-even);
      }

      li:hover,
      li:active,
      li:focus {
        background-color: var(--color-list-hover);
      }
    `;
  }


  static get properties() {
    return {
      matches: { type: Array, attribute: false },
      fontFamily: { type: String, attribute: false },
      fontsDownloaded: { type: Array, attribute: false },
      fonts: { type: Array },
      maxResults: { type: Number },
      apiKey: { type: String },
      show: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.fonts = [];
    this.matches = [];
    this.fontsDownloaded = [];
    this.fontFamily = '';
    this.maxResults = 4;
    this.show = true;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.fonts || this.fonts.length === 0) {
      this.__getFonts();
    }
  }

  async __getFonts() {
    if (!this.apiKey) {
      throw new Error('No API key supplied');
    }

    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${this.apiKey}`
    );
    const _data = await response.json();
    this.fonts = _data.items;
  }

  render() {
    return html`
      <form
        @blur=${() => {
          this.matches = [];
        }}
        style=${!this.show && `display: none`}
      >
        <label for="font-family-select">Search for you favourite font</label
        ><br />
        <input
          id="font-family-select"
          name="font-family-select"
          aria-label="Type the font you want to search for"
          type="text"
          ?disabled=${this.fonts.length === 0}
          data-typing=${this.matches.length > 0}
          .value=${this.fontFamily}
          @keyup=${this._onInputChange}
        />
        ${this.matches.length > 0 ? this.renderMatches() : ''}
      </form>
      <slot></slot>
    `;
  }

  renderMatches() {
    return html`<ul>
      ${this.matches.map(
        match => html` <li
          tabindex="0"
          style=${`font-family: '${match.family}'`}
          id=${encodeURIComponent(match.family)}
          @keyup=${e => {
            if (e.keyCode === 13) this._onFontFamilyClick(match);
          }}
          @click=${() => this._onFontFamilyClick(match)}
          .value=${match.family}
        >
          ${match.family}
        </li>`
      )}
    </ul>`;
  }

  _onInputChange(e) {
    if (!this.fonts) {
      throw new Error('Font list still downloading', this.fonts);
    }
    const _value = e.target.value;
    const _matches = this.fonts.filter(d => {
      const regex = new RegExp(`^${_value}`, 'gi');
      return d.family.match(regex);
    });

    this.matches = _matches.slice(0, this.maxResults);

    for (const _match of this.matches) {
      const family = encodeURIComponent(_match.family);
      if (!this.fontsDownloaded.includes(family)) {
        this._downloadFont(family, family);
        this.fontsDownloaded.push(family);
      }
    }
  }

  _onFontFamilyClick(match) {
    if (!match) {
      throw new Error('No value found for selected font');
    }

    this.matches = [];
    this.fontFamily = match.family;
    this._downloadFont(match.family);
    this.style.fontFamily = `${match.family}`;
  }

  _downloadFont(family, text) {
    const linkEl = document.createElement('link');
    let cssUrl = `https://fonts.googleapis.com/css2?family=${family}`;
    if (text) {
      cssUrl += `&text=${text}`;
    }
    linkEl.rel = 'stylesheet';
    linkEl.href = cssUrl;
    this.appendChild(linkEl);
  }
}
