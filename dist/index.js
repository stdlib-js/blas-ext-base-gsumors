"use strict";var s=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var m=s(function(b,c){
var o=6;function g(e,u,f){var t,a,n,r;if(n=0,e<=0)return n;if(e===1||f===0)return u[0];if(f===1){if(a=e%o,a>0)for(r=0;r<a;r++)n+=u[r];if(e<o)return n;for(r=a;r<e;r+=o)n+=u[r]+u[r+1]+u[r+2]+u[r+3]+u[r+4]+u[r+5];return n}for(f<0?t=(1-e)*f:t=0,r=0;r<e;r++)n+=u[t],t+=f;return n}c.exports=g
});var q=s(function(h,p){
var v=6;function l(e,u,f,t){var a,n,r,i;if(r=0,e<=0)return r;if(e===1||f===0)return u[t];if(a=t,f===1){if(n=e%v,n>0)for(i=0;i<n;i++)r+=u[a],a+=f;if(e<v)return r;for(i=n;i<e;i+=v)r+=u[a]+u[a+1]+u[a+2]+u[a+3]+u[a+4]+u[a+5],a+=v;return r}for(i=0;i<e;i++)r+=u[a],a+=f;return r}p.exports=l
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),O=q();M(y,"ndarray",O);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
