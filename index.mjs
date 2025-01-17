// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";var t=6;function n(r,e,n,i){var s,d,f,o;if(f=0,r<=0)return f;if(s=i,0===n)return r*e[s];if(1===n){if((d=r%t)>0)for(o=0;o<d;o++)f+=e[s],s+=n;if(r<t)return f;for(o=d;o<r;o+=t)f+=e[s]+e[s+1]+e[s+2]+e[s+3]+e[s+4]+e[s+5],s+=t;return f}for(o=0;o<r;o++)f+=e[s],s+=n;return f}function i(r,t,i){return n(r,t,i,e(r,i))}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
