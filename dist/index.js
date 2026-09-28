"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=c(function(A,q){
function b(e,r,u,n){var a,t,o,i,s;if(a=r.data,t=r.accessors[0],o=n,u===0)return e*t(a,o);for(i=t(a,o),o+=u,s=1;s<e;s++)i+=t(a,o),o+=u;return i}q.exports=b
});var f=c(function(B,y){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=m(),v=6;function M(e,r,u,n){var a,t,o,i,s;if(e<=0)return 0;if(i=j(r),i.accessorProtocol)return k(e,i,u,n);if(a=n,u===0)return e*r[a];if(o=r[a],a+=u,u===1){if(t=(e-1)%v,t>0)for(s=0;s<t;s++)o+=r[a],a+=u;if(e<v)return o;for(s=t;s<e-1;s+=v)o+=r[a]+r[a+1]+r[a+2]+r[a+3]+r[a+4]+r[a+5],a+=v;return o}for(s=1;s<e;s++)o+=r[a],a+=u;return o}y.exports=M
});var p=c(function(C,g){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(e,r,u){return P(e,r,u,O(e,u))}g.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),w=f();h(l,"ndarray",w);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
