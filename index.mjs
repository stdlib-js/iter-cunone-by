// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(o,d,l){var m,u,f;if(!t(o))throw new TypeError(s("null3v",o));if(!r(d))throw new TypeError(s("null2H",d));return m=!0,-1,e(u={},"next",(function(){var e;if(f)return{done:!0};if((e=o.next()).done)return f=!0,e;m&&d.call(l,e.value,-1)&&(m=!1);return{value:m,done:!1}})),e(u,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(o[n])&&e(u,n,(function(){return i(o[n](),d,l)})),u}export{i as default};
//# sourceMappingURL=index.mjs.map
