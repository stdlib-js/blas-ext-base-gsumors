// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e){var f,t,i,u;if(i=0,r<=0)return i;if(1===r||0===e)return n[0];if(1===e){if((t=r%6)>0)for(u=0;u<t;u++)i+=n[u];if(r<6)return i;for(u=t;u<r;u+=6)i+=n[u]+n[u+1]+n[u+2]+n[u+3]+n[u+4]+n[u+5];return i}for(f=e<0?(1-r)*e:0,u=0;u<r;u++)i+=n[f],f+=e;return i}function e(r,n,e,f){var t,i,u,o;if(u=0,r<=0)return u;if(1===r||0===e)return n[f];if(t=f,1===e){if((i=r%6)>0)for(o=0;o<i;o++)u+=n[t],t+=e;if(r<6)return u;for(o=i;o<r;o+=6)u+=n[t]+n[t+1]+n[t+2]+n[t+3]+n[t+4]+n[t+5],t+=6;return u}for(o=0;o<r;o++)u+=n[t],t+=e;return u}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
