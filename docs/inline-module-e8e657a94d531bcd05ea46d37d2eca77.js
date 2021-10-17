/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$1&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$2),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$2)},i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window.reactiveElementPolyfillSupport,r$1={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},h$1=(t,i)=>i!==t&&(i==i||t==t),o$2={attribute:!0,type:String,converter:r$1,reflect:!1,hasChanged:h$1};class n$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=o$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||o$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1);}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$Eg(t,i,s=o$2){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:r$1.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null;}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:r$1.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return !0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$EU();}updated(t){}firstUpdated(t){}}n$2.finalized=!0,n$2.elementProperties=new Map,n$2.elementStyles=[],n$2.shadowRootOptions={mode:"open"},null==e$1||e$1({ReactiveElement:n$2}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.0.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=globalThis.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e,n$1=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p=$(1),b=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),x=new WeakMap,w=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e+y):s+e+(-2===$?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return [void 0!==s$1?s$1.createHTML(u):u,l]};class P{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=P.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V(t,d._$AS(t,i.values),d,e)),i}class E{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),r(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==T&&r(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new E(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new P(t)),i}M(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===T?void 0:t;}}class k extends S{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:T)===b)return;const e=this._$AH,o=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t);}}const R=window.litHtmlPolyfillSupport;null==R||R(P,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.0.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends n$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=w(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.0.1");

var fonts = [{"family":"ABeeZee"},{"family":"Abel"},{"family":"Abhaya Libre"},{"family":"Abril Fatface"},{"family":"Aclonica"},{"family":"Acme"},{"family":"Actor"},{"family":"Adamina"},{"family":"Advent Pro"},{"family":"Aguafina Script"},{"family":"Akaya Kanadaka"},{"family":"Akaya Telivigala"},{"family":"Akronim"},{"family":"Aladin"},{"family":"Alata"},{"family":"Alatsi"},{"family":"Aldrich"},{"family":"Alef"},{"family":"Alegreya"},{"family":"Alegreya SC"},{"family":"Alegreya Sans"},{"family":"Alegreya Sans SC"},{"family":"Aleo"},{"family":"Alex Brush"},{"family":"Alfa Slab One"},{"family":"Alice"},{"family":"Alike"},{"family":"Alike Angular"},{"family":"Allan"},{"family":"Allerta"},{"family":"Allerta Stencil"},{"family":"Allison"},{"family":"Allura"},{"family":"Almarai"},{"family":"Almendra"},{"family":"Almendra Display"},{"family":"Almendra SC"},{"family":"Alumni Sans"},{"family":"Amarante"},{"family":"Amaranth"},{"family":"Amatic SC"},{"family":"Amethysta"},{"family":"Amiko"},{"family":"Amiri"},{"family":"Amita"},{"family":"Anaheim"},{"family":"Andada Pro"},{"family":"Andika"},{"family":"Andika New Basic"},{"family":"Angkor"},{"family":"Annie Use Your Telescope"},{"family":"Anonymous Pro"},{"family":"Antic"},{"family":"Antic Didone"},{"family":"Antic Slab"},{"family":"Anton"},{"family":"Antonio"},{"family":"Arapey"},{"family":"Arbutus"},{"family":"Arbutus Slab"},{"family":"Architects Daughter"},{"family":"Archivo"},{"family":"Archivo Black"},{"family":"Archivo Narrow"},{"family":"Are You Serious"},{"family":"Aref Ruqaa"},{"family":"Arima Madurai"},{"family":"Arimo"},{"family":"Arizonia"},{"family":"Armata"},{"family":"Arsenal"},{"family":"Artifika"},{"family":"Arvo"},{"family":"Arya"},{"family":"Asap"},{"family":"Asap Condensed"},{"family":"Asar"},{"family":"Asset"},{"family":"Assistant"},{"family":"Astloch"},{"family":"Asul"},{"family":"Athiti"},{"family":"Atkinson Hyperlegible"},{"family":"Atma"},{"family":"Atomic Age"},{"family":"Aubrey"},{"family":"Audiowide"},{"family":"Autour One"},{"family":"Average"},{"family":"Average Sans"},{"family":"Averia Gruesa Libre"},{"family":"Averia Libre"},{"family":"Averia Sans Libre"},{"family":"Averia Serif Libre"},{"family":"Azeret Mono"},{"family":"B612"},{"family":"B612 Mono"},{"family":"Bad Script"},{"family":"Bahiana"},{"family":"Bahianita"},{"family":"Bai Jamjuree"},{"family":"Ballet"},{"family":"Baloo 2"},{"family":"Baloo Bhai 2"},{"family":"Baloo Bhaina 2"},{"family":"Baloo Chettan 2"},{"family":"Baloo Da 2"},{"family":"Baloo Paaji 2"},{"family":"Baloo Tamma 2"},{"family":"Baloo Tammudu 2"},{"family":"Baloo Thambi 2"},{"family":"Balsamiq Sans"},{"family":"Balthazar"},{"family":"Bangers"},{"family":"Barlow"},{"family":"Barlow Condensed"},{"family":"Barlow Semi Condensed"},{"family":"Barriecito"},{"family":"Barrio"},{"family":"Basic"},{"family":"Baskervville"},{"family":"Battambang"},{"family":"Baumans"},{"family":"Bayon"},{"family":"Be Vietnam"},{"family":"Be Vietnam Pro"},{"family":"Bebas Neue"},{"family":"Belgrano"},{"family":"Bellefair"},{"family":"Belleza"},{"family":"Bellota"},{"family":"Bellota Text"},{"family":"BenchNine"},{"family":"Benne"},{"family":"Bentham"},{"family":"Berkshire Swash"},{"family":"Besley"},{"family":"Beth Ellen"},{"family":"Bevan"},{"family":"Big Shoulders Display"},{"family":"Big Shoulders Inline Display"},{"family":"Big Shoulders Inline Text"},{"family":"Big Shoulders Stencil Display"},{"family":"Big Shoulders Stencil Text"},{"family":"Big Shoulders Text"},{"family":"Bigelow Rules"},{"family":"Bigshot One"},{"family":"Bilbo"},{"family":"Bilbo Swash Caps"},{"family":"BioRhyme"},{"family":"BioRhyme Expanded"},{"family":"Birthstone"},{"family":"Birthstone Bounce"},{"family":"Biryani"},{"family":"Bitter"},{"family":"Black And White Picture"},{"family":"Black Han Sans"},{"family":"Black Ops One"},{"family":"Blinker"},{"family":"Bodoni Moda"},{"family":"Bokor"},{"family":"Bona Nova"},{"family":"Bonbon"},{"family":"Bonheur Royale"},{"family":"Boogaloo"},{"family":"Bowlby One"},{"family":"Bowlby One SC"},{"family":"Brawler"},{"family":"Bree Serif"},{"family":"Brygada 1918"},{"family":"Bubblegum Sans"},{"family":"Bubbler One"},{"family":"Buda"},{"family":"Buenard"},{"family":"Bungee"},{"family":"Bungee Hairline"},{"family":"Bungee Inline"},{"family":"Bungee Outline"},{"family":"Bungee Shade"},{"family":"Butcherman"},{"family":"Butterfly Kids"},{"family":"Cabin"},{"family":"Cabin Condensed"},{"family":"Cabin Sketch"},{"family":"Caesar Dressing"},{"family":"Cagliostro"},{"family":"Cairo"},{"family":"Caladea"},{"family":"Calistoga"},{"family":"Calligraffitti"},{"family":"Cambay"},{"family":"Cambo"},{"family":"Candal"},{"family":"Cantarell"},{"family":"Cantata One"},{"family":"Cantora One"},{"family":"Capriola"},{"family":"Caramel"},{"family":"Carattere"},{"family":"Cardo"},{"family":"Carme"},{"family":"Carrois Gothic"},{"family":"Carrois Gothic SC"},{"family":"Carter One"},{"family":"Castoro"},{"family":"Catamaran"},{"family":"Caudex"},{"family":"Caveat"},{"family":"Caveat Brush"},{"family":"Cedarville Cursive"},{"family":"Ceviche One"},{"family":"Chakra Petch"},{"family":"Changa"},{"family":"Changa One"},{"family":"Chango"},{"family":"Charm"},{"family":"Charmonman"},{"family":"Chathura"},{"family":"Chau Philomene One"},{"family":"Chela One"},{"family":"Chelsea Market"},{"family":"Chenla"},{"family":"Cherish"},{"family":"Cherry Cream Soda"},{"family":"Cherry Swash"},{"family":"Chewy"},{"family":"Chicle"},{"family":"Chilanka"},{"family":"Chivo"},{"family":"Chonburi"},{"family":"Cinzel"},{"family":"Cinzel Decorative"},{"family":"Clicker Script"},{"family":"Coda"},{"family":"Coda Caption"},{"family":"Codystar"},{"family":"Coiny"},{"family":"Combo"},{"family":"Comfortaa"},{"family":"Comic Neue"},{"family":"Coming Soon"},{"family":"Commissioner"},{"family":"Concert One"},{"family":"Condiment"},{"family":"Content"},{"family":"Contrail One"},{"family":"Convergence"},{"family":"Cookie"},{"family":"Copse"},{"family":"Corben"},{"family":"Cormorant"},{"family":"Cormorant Garamond"},{"family":"Cormorant Infant"},{"family":"Cormorant SC"},{"family":"Cormorant Unicase"},{"family":"Cormorant Upright"},{"family":"Courgette"},{"family":"Courier Prime"},{"family":"Cousine"},{"family":"Coustard"},{"family":"Covered By Your Grace"},{"family":"Crafty Girls"},{"family":"Creepster"},{"family":"Crete Round"},{"family":"Crimson Pro"},{"family":"Crimson Text"},{"family":"Croissant One"},{"family":"Crushed"},{"family":"Cuprum"},{"family":"Cute Font"},{"family":"Cutive"},{"family":"Cutive Mono"},{"family":"DM Mono"},{"family":"DM Sans"},{"family":"DM Serif Display"},{"family":"DM Serif Text"},{"family":"Damion"},{"family":"Dancing Script"},{"family":"Dangrek"},{"family":"Darker Grotesque"},{"family":"David Libre"},{"family":"Dawning of a New Day"},{"family":"Days One"},{"family":"Dekko"},{"family":"Dela Gothic One"},{"family":"Delius"},{"family":"Delius Swash Caps"},{"family":"Delius Unicase"},{"family":"Della Respira"},{"family":"Denk One"},{"family":"Devonshire"},{"family":"Dhurjati"},{"family":"Didact Gothic"},{"family":"Diplomata"},{"family":"Diplomata SC"},{"family":"Do Hyeon"},{"family":"Dokdo"},{"family":"Domine"},{"family":"Donegal One"},{"family":"Doppio One"},{"family":"Dorsa"},{"family":"Dosis"},{"family":"DotGothic16"},{"family":"Dr Sugiyama"},{"family":"Duru Sans"},{"family":"Dynalight"},{"family":"EB Garamond"},{"family":"Eagle Lake"},{"family":"East Sea Dokdo"},{"family":"Eater"},{"family":"Economica"},{"family":"Eczar"},{"family":"El Messiri"},{"family":"Electrolize"},{"family":"Elsie"},{"family":"Elsie Swash Caps"},{"family":"Emblema One"},{"family":"Emilys Candy"},{"family":"Encode Sans"},{"family":"Encode Sans Condensed"},{"family":"Encode Sans Expanded"},{"family":"Encode Sans SC"},{"family":"Encode Sans Semi Condensed"},{"family":"Encode Sans Semi Expanded"},{"family":"Engagement"},{"family":"Englebert"},{"family":"Enriqueta"},{"family":"Ephesis"},{"family":"Epilogue"},{"family":"Erica One"},{"family":"Esteban"},{"family":"Euphoria Script"},{"family":"Ewert"},{"family":"Exo"},{"family":"Exo 2"},{"family":"Expletus Sans"},{"family":"Explora"},{"family":"Fahkwang"},{"family":"Fanwood Text"},{"family":"Farro"},{"family":"Farsan"},{"family":"Fascinate"},{"family":"Fascinate Inline"},{"family":"Faster One"},{"family":"Fasthand"},{"family":"Fauna One"},{"family":"Faustina"},{"family":"Federant"},{"family":"Federo"},{"family":"Felipa"},{"family":"Fenix"},{"family":"Festive"},{"family":"Finger Paint"},{"family":"Fira Code"},{"family":"Fira Mono"},{"family":"Fira Sans"},{"family":"Fira Sans Condensed"},{"family":"Fira Sans Extra Condensed"},{"family":"Fjalla One"},{"family":"Fjord One"},{"family":"Flamenco"},{"family":"Flavors"},{"family":"Fleur De Leah"},{"family":"Fondamento"},{"family":"Fontdiner Swanky"},{"family":"Forum"},{"family":"Francois One"},{"family":"Frank Ruhl Libre"},{"family":"Fraunces"},{"family":"Freckle Face"},{"family":"Fredericka the Great"},{"family":"Fredoka One"},{"family":"Freehand"},{"family":"Fresca"},{"family":"Frijole"},{"family":"Fruktur"},{"family":"Fugaz One"},{"family":"Fuggles"},{"family":"GFS Didot"},{"family":"GFS Neohellenic"},{"family":"Gabriela"},{"family":"Gaegu"},{"family":"Gafata"},{"family":"Galada"},{"family":"Galdeano"},{"family":"Galindo"},{"family":"Gamja Flower"},{"family":"Gayathri"},{"family":"Gelasio"},{"family":"Gemunu Libre"},{"family":"Gentium Basic"},{"family":"Gentium Book Basic"},{"family":"Geo"},{"family":"Georama"},{"family":"Geostar"},{"family":"Geostar Fill"},{"family":"Germania One"},{"family":"Gideon Roman"},{"family":"Gidugu"},{"family":"Gilda Display"},{"family":"Girassol"},{"family":"Give You Glory"},{"family":"Glass Antiqua"},{"family":"Glegoo"},{"family":"Gloria Hallelujah"},{"family":"Glory"},{"family":"Gluten"},{"family":"Goblin One"},{"family":"Gochi Hand"},{"family":"Goldman"},{"family":"Gorditas"},{"family":"Gothic A1"},{"family":"Gotu"},{"family":"Goudy Bookletter 1911"},{"family":"Gowun Batang"},{"family":"Gowun Dodum"},{"family":"Graduate"},{"family":"Grand Hotel"},{"family":"Grandstander"},{"family":"Gravitas One"},{"family":"Great Vibes"},{"family":"Grechen Fuemen"},{"family":"Grenze"},{"family":"Grenze Gotisch"},{"family":"Grey Qo"},{"family":"Griffy"},{"family":"Gruppo"},{"family":"Gudea"},{"family":"Gugi"},{"family":"Gupter"},{"family":"Gurajada"},{"family":"Habibi"},{"family":"Hachi Maru Pop"},{"family":"Hahmlet"},{"family":"Halant"},{"family":"Hammersmith One"},{"family":"Hanalei"},{"family":"Hanalei Fill"},{"family":"Handlee"},{"family":"Hanuman"},{"family":"Happy Monkey"},{"family":"Harmattan"},{"family":"Headland One"},{"family":"Heebo"},{"family":"Henny Penny"},{"family":"Hepta Slab"},{"family":"Herr Von Muellerhoff"},{"family":"Hi Melody"},{"family":"Hina Mincho"},{"family":"Hind"},{"family":"Hind Guntur"},{"family":"Hind Madurai"},{"family":"Hind Siliguri"},{"family":"Hind Vadodara"},{"family":"Holtwood One SC"},{"family":"Homemade Apple"},{"family":"Homenaje"},{"family":"IBM Plex Mono"},{"family":"IBM Plex Sans"},{"family":"IBM Plex Sans Arabic"},{"family":"IBM Plex Sans Condensed"},{"family":"IBM Plex Sans Devanagari"},{"family":"IBM Plex Sans Hebrew"},{"family":"IBM Plex Sans KR"},{"family":"IBM Plex Sans Thai"},{"family":"IBM Plex Sans Thai Looped"},{"family":"IBM Plex Serif"},{"family":"IM Fell DW Pica"},{"family":"IM Fell DW Pica SC"},{"family":"IM Fell Double Pica"},{"family":"IM Fell Double Pica SC"},{"family":"IM Fell English"},{"family":"IM Fell English SC"},{"family":"IM Fell French Canon"},{"family":"IM Fell French Canon SC"},{"family":"IM Fell Great Primer"},{"family":"IM Fell Great Primer SC"},{"family":"Ibarra Real Nova"},{"family":"Iceberg"},{"family":"Iceland"},{"family":"Imbue"},{"family":"Imprima"},{"family":"Inconsolata"},{"family":"Inder"},{"family":"Indie Flower"},{"family":"Inika"},{"family":"Inknut Antiqua"},{"family":"Inria Sans"},{"family":"Inria Serif"},{"family":"Inter"},{"family":"Irish Grover"},{"family":"Istok Web"},{"family":"Italiana"},{"family":"Italianno"},{"family":"Itim"},{"family":"Jacques Francois"},{"family":"Jacques Francois Shadow"},{"family":"Jaldi"},{"family":"JetBrains Mono"},{"family":"Jim Nightshade"},{"family":"Jockey One"},{"family":"Jolly Lodger"},{"family":"Jomhuria"},{"family":"Jomolhari"},{"family":"Josefin Sans"},{"family":"Josefin Slab"},{"family":"Jost"},{"family":"Joti One"},{"family":"Jua"},{"family":"Judson"},{"family":"Julee"},{"family":"Julius Sans One"},{"family":"Junge"},{"family":"Jura"},{"family":"Just Another Hand"},{"family":"Just Me Again Down Here"},{"family":"K2D"},{"family":"Kadwa"},{"family":"Kaisei Decol"},{"family":"Kaisei HarunoUmi"},{"family":"Kaisei Opti"},{"family":"Kaisei Tokumin"},{"family":"Kalam"},{"family":"Kameron"},{"family":"Kanit"},{"family":"Kantumruy"},{"family":"Karantina"},{"family":"Karla"},{"family":"Karma"},{"family":"Katibeh"},{"family":"Kaushan Script"},{"family":"Kavivanar"},{"family":"Kavoon"},{"family":"Kdam Thmor"},{"family":"Keania One"},{"family":"Kelly Slab"},{"family":"Kenia"},{"family":"Khand"},{"family":"Khmer"},{"family":"Khula"},{"family":"Kirang Haerang"},{"family":"Kite One"},{"family":"Kiwi Maru"},{"family":"Klee One"},{"family":"Knewave"},{"family":"KoHo"},{"family":"Kodchasan"},{"family":"Koh Santepheap"},{"family":"Kosugi"},{"family":"Kosugi Maru"},{"family":"Kotta One"},{"family":"Koulen"},{"family":"Kranky"},{"family":"Kreon"},{"family":"Kristi"},{"family":"Krona One"},{"family":"Krub"},{"family":"Kufam"},{"family":"Kulim Park"},{"family":"Kumar One"},{"family":"Kumar One Outline"},{"family":"Kumbh Sans"},{"family":"Kurale"},{"family":"La Belle Aurore"},{"family":"Lacquer"},{"family":"Laila"},{"family":"Lakki Reddy"},{"family":"Lalezar"},{"family":"Lancelot"},{"family":"Langar"},{"family":"Lateef"},{"family":"Lato"},{"family":"League Script"},{"family":"Leckerli One"},{"family":"Ledger"},{"family":"Lekton"},{"family":"Lemon"},{"family":"Lemonada"},{"family":"Lexend"},{"family":"Lexend Deca"},{"family":"Lexend Exa"},{"family":"Lexend Giga"},{"family":"Lexend Mega"},{"family":"Lexend Peta"},{"family":"Lexend Tera"},{"family":"Lexend Zetta"},{"family":"Libre Barcode 128"},{"family":"Libre Barcode 128 Text"},{"family":"Libre Barcode 39"},{"family":"Libre Barcode 39 Extended"},{"family":"Libre Barcode 39 Extended Text"},{"family":"Libre Barcode 39 Text"},{"family":"Libre Barcode EAN13 Text"},{"family":"Libre Baskerville"},{"family":"Libre Caslon Display"},{"family":"Libre Caslon Text"},{"family":"Libre Franklin"},{"family":"Life Savers"},{"family":"Lilita One"},{"family":"Lily Script One"},{"family":"Limelight"},{"family":"Linden Hill"},{"family":"Literata"},{"family":"Liu Jian Mao Cao"},{"family":"Livvic"},{"family":"Lobster"},{"family":"Lobster Two"},{"family":"Londrina Outline"},{"family":"Londrina Shadow"},{"family":"Londrina Sketch"},{"family":"Londrina Solid"},{"family":"Long Cang"},{"family":"Lora"},{"family":"Love Ya Like A Sister"},{"family":"Loved by the King"},{"family":"Lovers Quarrel"},{"family":"Luckiest Guy"},{"family":"Lusitana"},{"family":"Lustria"},{"family":"M PLUS 1p"},{"family":"M PLUS Rounded 1c"},{"family":"Ma Shan Zheng"},{"family":"Macondo"},{"family":"Macondo Swash Caps"},{"family":"Mada"},{"family":"Magra"},{"family":"Maiden Orange"},{"family":"Maitree"},{"family":"Major Mono Display"},{"family":"Mako"},{"family":"Mali"},{"family":"Mallanna"},{"family":"Mandali"},{"family":"Manjari"},{"family":"Manrope"},{"family":"Mansalva"},{"family":"Manuale"},{"family":"Marcellus"},{"family":"Marcellus SC"},{"family":"Marck Script"},{"family":"Margarine"},{"family":"Markazi Text"},{"family":"Marko One"},{"family":"Marmelad"},{"family":"Martel"},{"family":"Martel Sans"},{"family":"Marvel"},{"family":"Mate"},{"family":"Mate SC"},{"family":"Maven Pro"},{"family":"McLaren"},{"family":"Meddon"},{"family":"MedievalSharp"},{"family":"Medula One"},{"family":"Meera Inimai"},{"family":"Megrim"},{"family":"Meie Script"},{"family":"Merienda"},{"family":"Merienda One"},{"family":"Merriweather"},{"family":"Merriweather Sans"},{"family":"Metal"},{"family":"Metal Mania"},{"family":"Metamorphous"},{"family":"Metrophobic"},{"family":"Michroma"},{"family":"Milonga"},{"family":"Miltonian"},{"family":"Miltonian Tattoo"},{"family":"Mina"},{"family":"Miniver"},{"family":"Miriam Libre"},{"family":"Mirza"},{"family":"Miss Fajardose"},{"family":"Mitr"},{"family":"Modak"},{"family":"Modern Antiqua"},{"family":"Mogra"},{"family":"Molengo"},{"family":"Molle"},{"family":"Monda"},{"family":"Monofett"},{"family":"Monoton"},{"family":"Monsieur La Doulaise"},{"family":"Montaga"},{"family":"MonteCarlo"},{"family":"Montez"},{"family":"Montserrat"},{"family":"Montserrat Alternates"},{"family":"Montserrat Subrayada"},{"family":"Moul"},{"family":"Moulpali"},{"family":"Mountains of Christmas"},{"family":"Mouse Memoirs"},{"family":"Mr Bedfort"},{"family":"Mr Dafoe"},{"family":"Mr De Haviland"},{"family":"Mrs Saint Delafield"},{"family":"Mrs Sheppards"},{"family":"Mukta"},{"family":"Mukta Mahee"},{"family":"Mukta Malar"},{"family":"Mukta Vaani"},{"family":"Mulish"},{"family":"MuseoModerno"},{"family":"Mystery Quest"},{"family":"NTR"},{"family":"Nanum Brush Script"},{"family":"Nanum Gothic"},{"family":"Nanum Gothic Coding"},{"family":"Nanum Myeongjo"},{"family":"Nanum Pen Script"},{"family":"Nerko One"},{"family":"Neucha"},{"family":"Neuton"},{"family":"New Rocker"},{"family":"New Tegomin"},{"family":"News Cycle"},{"family":"Newsreader"},{"family":"Niconne"},{"family":"Niramit"},{"family":"Nixie One"},{"family":"Nobile"},{"family":"Nokora"},{"family":"Norican"},{"family":"Nosifer"},{"family":"Notable"},{"family":"Nothing You Could Do"},{"family":"Noticia Text"},{"family":"Noto Kufi Arabic"},{"family":"Noto Music"},{"family":"Noto Naskh Arabic"},{"family":"Noto Nastaliq Urdu"},{"family":"Noto Rashi Hebrew"},{"family":"Noto Sans"},{"family":"Noto Sans Adlam"},{"family":"Noto Sans Adlam Unjoined"},{"family":"Noto Sans Anatolian Hieroglyphs"},{"family":"Noto Sans Arabic"},{"family":"Noto Sans Armenian"},{"family":"Noto Sans Avestan"},{"family":"Noto Sans Balinese"},{"family":"Noto Sans Bamum"},{"family":"Noto Sans Bassa Vah"},{"family":"Noto Sans Batak"},{"family":"Noto Sans Bengali"},{"family":"Noto Sans Bhaiksuki"},{"family":"Noto Sans Brahmi"},{"family":"Noto Sans Buginese"},{"family":"Noto Sans Buhid"},{"family":"Noto Sans Canadian Aboriginal"},{"family":"Noto Sans Carian"},{"family":"Noto Sans Caucasian Albanian"},{"family":"Noto Sans Chakma"},{"family":"Noto Sans Cham"},{"family":"Noto Sans Cherokee"},{"family":"Noto Sans Coptic"},{"family":"Noto Sans Cuneiform"},{"family":"Noto Sans Cypriot"},{"family":"Noto Sans Deseret"},{"family":"Noto Sans Devanagari"},{"family":"Noto Sans Display"},{"family":"Noto Sans Duployan"},{"family":"Noto Sans Egyptian Hieroglyphs"},{"family":"Noto Sans Elbasan"},{"family":"Noto Sans Elymaic"},{"family":"Noto Sans Georgian"},{"family":"Noto Sans Glagolitic"},{"family":"Noto Sans Gothic"},{"family":"Noto Sans Grantha"},{"family":"Noto Sans Gujarati"},{"family":"Noto Sans Gunjala Gondi"},{"family":"Noto Sans Gurmukhi"},{"family":"Noto Sans HK"},{"family":"Noto Sans Hanifi Rohingya"},{"family":"Noto Sans Hanunoo"},{"family":"Noto Sans Hatran"},{"family":"Noto Sans Hebrew"},{"family":"Noto Sans Imperial Aramaic"},{"family":"Noto Sans Indic Siyaq Numbers"},{"family":"Noto Sans Inscriptional Pahlavi"},{"family":"Noto Sans Inscriptional Parthian"},{"family":"Noto Sans JP"},{"family":"Noto Sans Javanese"},{"family":"Noto Sans KR"},{"family":"Noto Sans Kaithi"},{"family":"Noto Sans Kannada"},{"family":"Noto Sans Kayah Li"},{"family":"Noto Sans Kharoshthi"},{"family":"Noto Sans Khmer"},{"family":"Noto Sans Khojki"},{"family":"Noto Sans Khudawadi"},{"family":"Noto Sans Lao"},{"family":"Noto Sans Lepcha"},{"family":"Noto Sans Limbu"},{"family":"Noto Sans Linear A"},{"family":"Noto Sans Linear B"},{"family":"Noto Sans Lisu"},{"family":"Noto Sans Lycian"},{"family":"Noto Sans Lydian"},{"family":"Noto Sans Mahajani"},{"family":"Noto Sans Malayalam"},{"family":"Noto Sans Mandaic"},{"family":"Noto Sans Manichaean"},{"family":"Noto Sans Marchen"},{"family":"Noto Sans Masaram Gondi"},{"family":"Noto Sans Math"},{"family":"Noto Sans Mayan Numerals"},{"family":"Noto Sans Medefaidrin"},{"family":"Noto Sans Meroitic"},{"family":"Noto Sans Miao"},{"family":"Noto Sans Modi"},{"family":"Noto Sans Mongolian"},{"family":"Noto Sans Mono"},{"family":"Noto Sans Mro"},{"family":"Noto Sans Multani"},{"family":"Noto Sans Myanmar"},{"family":"Noto Sans N Ko"},{"family":"Noto Sans Nabataean"},{"family":"Noto Sans New Tai Lue"},{"family":"Noto Sans Newa"},{"family":"Noto Sans Nushu"},{"family":"Noto Sans Ogham"},{"family":"Noto Sans Ol Chiki"},{"family":"Noto Sans Old Hungarian"},{"family":"Noto Sans Old Italic"},{"family":"Noto Sans Old North Arabian"},{"family":"Noto Sans Old Permic"},{"family":"Noto Sans Old Persian"},{"family":"Noto Sans Old Sogdian"},{"family":"Noto Sans Old South Arabian"},{"family":"Noto Sans Old Turkic"},{"family":"Noto Sans Oriya"},{"family":"Noto Sans Osage"},{"family":"Noto Sans Osmanya"},{"family":"Noto Sans Pahawh Hmong"},{"family":"Noto Sans Palmyrene"},{"family":"Noto Sans Pau Cin Hau"},{"family":"Noto Sans Phags Pa"},{"family":"Noto Sans Phoenician"},{"family":"Noto Sans Psalter Pahlavi"},{"family":"Noto Sans Rejang"},{"family":"Noto Sans Runic"},{"family":"Noto Sans SC"},{"family":"Noto Sans Samaritan"},{"family":"Noto Sans Saurashtra"},{"family":"Noto Sans Sharada"},{"family":"Noto Sans Shavian"},{"family":"Noto Sans Siddham"},{"family":"Noto Sans Sinhala"},{"family":"Noto Sans Sogdian"},{"family":"Noto Sans Sora Sompeng"},{"family":"Noto Sans Soyombo"},{"family":"Noto Sans Sundanese"},{"family":"Noto Sans Syloti Nagri"},{"family":"Noto Sans Symbols"},{"family":"Noto Sans Symbols 2"},{"family":"Noto Sans Syriac"},{"family":"Noto Sans TC"},{"family":"Noto Sans Tagalog"},{"family":"Noto Sans Tagbanwa"},{"family":"Noto Sans Tai Le"},{"family":"Noto Sans Tai Tham"},{"family":"Noto Sans Tai Viet"},{"family":"Noto Sans Takri"},{"family":"Noto Sans Tamil"},{"family":"Noto Sans Tamil Supplement"},{"family":"Noto Sans Telugu"},{"family":"Noto Sans Thaana"},{"family":"Noto Sans Thai"},{"family":"Noto Sans Thai Looped"},{"family":"Noto Sans Tifinagh"},{"family":"Noto Sans Tirhuta"},{"family":"Noto Sans Ugaritic"},{"family":"Noto Sans Vai"},{"family":"Noto Sans Wancho"},{"family":"Noto Sans Warang Citi"},{"family":"Noto Sans Yi"},{"family":"Noto Sans Zanabazar Square"},{"family":"Noto Serif"},{"family":"Noto Serif Ahom"},{"family":"Noto Serif Armenian"},{"family":"Noto Serif Balinese"},{"family":"Noto Serif Bengali"},{"family":"Noto Serif Devanagari"},{"family":"Noto Serif Display"},{"family":"Noto Serif Dogra"},{"family":"Noto Serif Ethiopic"},{"family":"Noto Serif Georgian"},{"family":"Noto Serif Grantha"},{"family":"Noto Serif Gujarati"},{"family":"Noto Serif Gurmukhi"},{"family":"Noto Serif Hebrew"},{"family":"Noto Serif JP"},{"family":"Noto Serif KR"},{"family":"Noto Serif Kannada"},{"family":"Noto Serif Khmer"},{"family":"Noto Serif Lao"},{"family":"Noto Serif Malayalam"},{"family":"Noto Serif Myanmar"},{"family":"Noto Serif Nyiakeng Puachue Hmong"},{"family":"Noto Serif SC"},{"family":"Noto Serif Sinhala"},{"family":"Noto Serif TC"},{"family":"Noto Serif Tamil"},{"family":"Noto Serif Tangut"},{"family":"Noto Serif Telugu"},{"family":"Noto Serif Thai"},{"family":"Noto Serif Tibetan"},{"family":"Noto Serif Yezidi"},{"family":"Noto Traditional Nushu"},{"family":"Nova Cut"},{"family":"Nova Flat"},{"family":"Nova Mono"},{"family":"Nova Oval"},{"family":"Nova Round"},{"family":"Nova Script"},{"family":"Nova Slim"},{"family":"Nova Square"},{"family":"Numans"},{"family":"Nunito"},{"family":"Nunito Sans"},{"family":"Odibee Sans"},{"family":"Odor Mean Chey"},{"family":"Offside"},{"family":"Oi"},{"family":"Old Standard TT"},{"family":"Oldenburg"},{"family":"Oleo Script"},{"family":"Oleo Script Swash Caps"},{"family":"Open Sans"},{"family":"Open Sans Condensed"},{"family":"Oranienbaum"},{"family":"Orbitron"},{"family":"Oregano"},{"family":"Orelega One"},{"family":"Orienta"},{"family":"Original Surfer"},{"family":"Oswald"},{"family":"Otomanopee One"},{"family":"Over the Rainbow"},{"family":"Overlock"},{"family":"Overlock SC"},{"family":"Overpass"},{"family":"Overpass Mono"},{"family":"Ovo"},{"family":"Oxanium"},{"family":"Oxygen"},{"family":"Oxygen Mono"},{"family":"PT Mono"},{"family":"PT Sans"},{"family":"PT Sans Caption"},{"family":"PT Sans Narrow"},{"family":"PT Serif"},{"family":"PT Serif Caption"},{"family":"Pacifico"},{"family":"Padauk"},{"family":"Palanquin"},{"family":"Palanquin Dark"},{"family":"Palette Mosaic"},{"family":"Pangolin"},{"family":"Paprika"},{"family":"Parisienne"},{"family":"Passero One"},{"family":"Passion One"},{"family":"Pathway Gothic One"},{"family":"Patrick Hand"},{"family":"Patrick Hand SC"},{"family":"Pattaya"},{"family":"Patua One"},{"family":"Pavanam"},{"family":"Paytone One"},{"family":"Peddana"},{"family":"Peralta"},{"family":"Permanent Marker"},{"family":"Petit Formal Script"},{"family":"Petrona"},{"family":"Philosopher"},{"family":"Piazzolla"},{"family":"Piedra"},{"family":"Pinyon Script"},{"family":"Pirata One"},{"family":"Plaster"},{"family":"Play"},{"family":"Playball"},{"family":"Playfair Display"},{"family":"Playfair Display SC"},{"family":"Podkova"},{"family":"Poiret One"},{"family":"Poller One"},{"family":"Poly"},{"family":"Pompiere"},{"family":"Pontano Sans"},{"family":"Poor Story"},{"family":"Poppins"},{"family":"Port Lligat Sans"},{"family":"Port Lligat Slab"},{"family":"Potta One"},{"family":"Pragati Narrow"},{"family":"Prata"},{"family":"Preahvihear"},{"family":"Press Start 2P"},{"family":"Pridi"},{"family":"Princess Sofia"},{"family":"Prociono"},{"family":"Prompt"},{"family":"Prosto One"},{"family":"Proza Libre"},{"family":"Public Sans"},{"family":"Puritan"},{"family":"Purple Purse"},{"family":"Qahiri"},{"family":"Quando"},{"family":"Quantico"},{"family":"Quattrocento"},{"family":"Quattrocento Sans"},{"family":"Questrial"},{"family":"Quicksand"},{"family":"Quintessential"},{"family":"Qwigley"},{"family":"Racing Sans One"},{"family":"Radley"},{"family":"Rajdhani"},{"family":"Rakkas"},{"family":"Raleway"},{"family":"Raleway Dots"},{"family":"Ramabhadra"},{"family":"Ramaraja"},{"family":"Rambla"},{"family":"Rammetto One"},{"family":"Rampart One"},{"family":"Ranchers"},{"family":"Rancho"},{"family":"Ranga"},{"family":"Rasa"},{"family":"Rationale"},{"family":"Ravi Prakash"},{"family":"Recursive"},{"family":"Red Hat Display"},{"family":"Red Hat Text"},{"family":"Red Rose"},{"family":"Redressed"},{"family":"Reem Kufi"},{"family":"Reenie Beanie"},{"family":"Reggae One"},{"family":"Revalia"},{"family":"Rhodium Libre"},{"family":"Ribeye"},{"family":"Ribeye Marrow"},{"family":"Righteous"},{"family":"Risque"},{"family":"Roboto"},{"family":"Roboto Condensed"},{"family":"Roboto Mono"},{"family":"Roboto Slab"},{"family":"Rochester"},{"family":"Rock Salt"},{"family":"RocknRoll One"},{"family":"Rokkitt"},{"family":"Romanesco"},{"family":"Ropa Sans"},{"family":"Rosario"},{"family":"Rosarivo"},{"family":"Rouge Script"},{"family":"Rowdies"},{"family":"Rozha One"},{"family":"Rubik"},{"family":"Rubik Beastly"},{"family":"Rubik Mono One"},{"family":"Ruda"},{"family":"Rufina"},{"family":"Ruge Boogie"},{"family":"Ruluko"},{"family":"Rum Raisin"},{"family":"Ruslan Display"},{"family":"Russo One"},{"family":"Ruthie"},{"family":"Rye"},{"family":"STIX Two Text"},{"family":"Sacramento"},{"family":"Sahitya"},{"family":"Sail"},{"family":"Saira"},{"family":"Saira Condensed"},{"family":"Saira Extra Condensed"},{"family":"Saira Semi Condensed"},{"family":"Saira Stencil One"},{"family":"Salsa"},{"family":"Sanchez"},{"family":"Sancreek"},{"family":"Sansita"},{"family":"Sansita Swashed"},{"family":"Sarabun"},{"family":"Sarala"},{"family":"Sarina"},{"family":"Sarpanch"},{"family":"Satisfy"},{"family":"Sawarabi Gothic"},{"family":"Sawarabi Mincho"},{"family":"Scada"},{"family":"Scheherazade"},{"family":"Scheherazade New"},{"family":"Schoolbell"},{"family":"Scope One"},{"family":"Seaweed Script"},{"family":"Secular One"},{"family":"Sedgwick Ave"},{"family":"Sedgwick Ave Display"},{"family":"Sen"},{"family":"Sevillana"},{"family":"Seymour One"},{"family":"Shadows Into Light"},{"family":"Shadows Into Light Two"},{"family":"Shanti"},{"family":"Share"},{"family":"Share Tech"},{"family":"Share Tech Mono"},{"family":"Shippori Mincho"},{"family":"Shippori Mincho B1"},{"family":"Shojumaru"},{"family":"Short Stack"},{"family":"Shrikhand"},{"family":"Siemreap"},{"family":"Sigmar One"},{"family":"Signika"},{"family":"Signika Negative"},{"family":"Simonetta"},{"family":"Single Day"},{"family":"Sintony"},{"family":"Sirin Stencil"},{"family":"Six Caps"},{"family":"Skranji"},{"family":"Slabo 13px"},{"family":"Slabo 27px"},{"family":"Slackey"},{"family":"Smokum"},{"family":"Smythe"},{"family":"Sniglet"},{"family":"Snippet"},{"family":"Snowburst One"},{"family":"Sofadi One"},{"family":"Sofia"},{"family":"Solway"},{"family":"Song Myung"},{"family":"Sonsie One"},{"family":"Sora"},{"family":"Sorts Mill Goudy"},{"family":"Source Code Pro"},{"family":"Source Sans Pro"},{"family":"Source Serif Pro"},{"family":"Space Grotesk"},{"family":"Space Mono"},{"family":"Spartan"},{"family":"Special Elite"},{"family":"Spectral"},{"family":"Spectral SC"},{"family":"Spicy Rice"},{"family":"Spinnaker"},{"family":"Spirax"},{"family":"Squada One"},{"family":"Sree Krushnadevaraya"},{"family":"Sriracha"},{"family":"Srisakdi"},{"family":"Staatliches"},{"family":"Stalemate"},{"family":"Stalinist One"},{"family":"Stardos Stencil"},{"family":"Stick"},{"family":"Stick No Bills"},{"family":"Stint Ultra Condensed"},{"family":"Stint Ultra Expanded"},{"family":"Stoke"},{"family":"Strait"},{"family":"Style Script"},{"family":"Stylish"},{"family":"Sue Ellen Francisco"},{"family":"Suez One"},{"family":"Sulphur Point"},{"family":"Sumana"},{"family":"Sunflower"},{"family":"Sunshiney"},{"family":"Supermercado One"},{"family":"Sura"},{"family":"Suranna"},{"family":"Suravaram"},{"family":"Suwannaphum"},{"family":"Swanky and Moo Moo"},{"family":"Syncopate"},{"family":"Syne"},{"family":"Syne Mono"},{"family":"Syne Tactile"},{"family":"Tajawal"},{"family":"Tangerine"},{"family":"Taprom"},{"family":"Tauri"},{"family":"Taviraj"},{"family":"Teko"},{"family":"Telex"},{"family":"Tenali Ramakrishna"},{"family":"Tenor Sans"},{"family":"Text Me One"},{"family":"Texturina"},{"family":"Thasadith"},{"family":"The Girl Next Door"},{"family":"Tienne"},{"family":"Tillana"},{"family":"Timmana"},{"family":"Tinos"},{"family":"Titan One"},{"family":"Titillium Web"},{"family":"Tomorrow"},{"family":"Tourney"},{"family":"Trade Winds"},{"family":"Train One"},{"family":"Trirong"},{"family":"Trispace"},{"family":"Trocchi"},{"family":"Trochut"},{"family":"Truculenta"},{"family":"Trykker"},{"family":"Tulpen One"},{"family":"Turret Road"},{"family":"Ubuntu"},{"family":"Ubuntu Condensed"},{"family":"Ubuntu Mono"},{"family":"Uchen"},{"family":"Ultra"},{"family":"Uncial Antiqua"},{"family":"Underdog"},{"family":"Unica One"},{"family":"UnifrakturCook"},{"family":"UnifrakturMaguntia"},{"family":"Unkempt"},{"family":"Unlock"},{"family":"Unna"},{"family":"Urbanist"},{"family":"VT323"},{"family":"Vampiro One"},{"family":"Varela"},{"family":"Varela Round"},{"family":"Varta"},{"family":"Vast Shadow"},{"family":"Vesper Libre"},{"family":"Viaoda Libre"},{"family":"Vibes"},{"family":"Vibur"},{"family":"Vidaloka"},{"family":"Viga"},{"family":"Voces"},{"family":"Volkhov"},{"family":"Vollkorn"},{"family":"Vollkorn SC"},{"family":"Voltaire"},{"family":"Waiting for the Sunrise"},{"family":"Wallpoet"},{"family":"Walter Turncoat"},{"family":"Warnes"},{"family":"Wellfleet"},{"family":"Wendy One"},{"family":"WindSong"},{"family":"Wire One"},{"family":"Work Sans"},{"family":"Xanh Mono"},{"family":"Yaldevi"},{"family":"Yanone Kaffeesatz"},{"family":"Yantramanav"},{"family":"Yatra One"},{"family":"Yellowtail"},{"family":"Yeon Sung"},{"family":"Yeseva One"},{"family":"Yesteryear"},{"family":"Yomogi"},{"family":"Yrsa"},{"family":"Yusei Magic"},{"family":"ZCOOL KuaiLe"},{"family":"ZCOOL QingKe HuangYou"},{"family":"ZCOOL XiaoWei"},{"family":"Zen Dots"},{"family":"Zen Loop"},{"family":"Zen Tokyo Zoo"},{"family":"Zeyada"},{"family":"Zhi Mang Xing"},{"family":"Zilla Slab"},{"family":"Zilla Slab Highlight"}];

class GfontApply extends s {
  static get styles() {
    return r$2`
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
    return p`
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
    return p`<ul>
      ${this.matches.map(
        match => p` <li
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

window.customElements.define('gfont-apply', GfontApply);

w(
      p`
        <gfont-apply .fonts=${fonts}>
          <h1>HTML Ipsum Presents</h1>

				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

				<h2>Header Level 2</h2>

				<ol>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ol>

				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

				<h3>Header Level 3</h3>

				<ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ul>

				<pre><code>
				#header h1 a {
				  display: block;
				  width: 300px;
				  height: 80px;
				}
				</code></pre>
        </gfont-apply>
      `,
      document.querySelector('#demo')
    );
