"use strict";var c=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=c(function(z,q){
function b(a,r,t,n){var e,i,u,o,s;if(e=r.data,i=r.accessors[0],u=n,t===0)return a*i(e,u);for(o=0,s=0;s<a;s++)o+=i(e,u),u+=t;return o}q.exports=b
});var f=c(function(A,y){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=m(),v=6;function M(a,r,t,n){var e,i,u,o,s;if(u=0,a<=0)return u;if(o=j(r),o.accessorProtocol)return k(a,o,t,n);if(e=n,t===0)return a*r[e];if(t===1){if(i=a%v,i>0)for(s=0;s<i;s++)u+=r[e],e+=t;if(a<v)return u;for(s=i;s<a;s+=v)u+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=v;return u}for(s=0;s<a;s++)u+=r[e],e+=t;return u}y.exports=M
});var p=c(function(B,g){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(a,r,t){return P(a,r,t,O(a,t))}g.exports=R
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),h=f();d(l,"ndarray",h);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
