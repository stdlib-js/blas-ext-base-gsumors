"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=o(function(b,v){
var s=6;function p(a,r,i,y){var e,n,t,u;if(t=0,a<=0)return t;if(e=y,i===0)return a*r[e];if(i===1){if(n=a%s,n>0)for(u=0;u<n;u++)t+=r[e],e+=i;if(a<s)return t;for(u=n;u<a;u+=s)t+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=s;return t}for(u=0;u<a;u++)t+=r[e],e+=i;return t}v.exports=p
});var q=o(function(h,c){
var g=require('@stdlib/strided-base-stride2offset/dist'),d=f();function l(a,r,i){return d(a,r,i,g(a,i))}c.exports=l
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=q(),O=f();M(m,"ndarray",O);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
