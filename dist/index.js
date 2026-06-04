"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=c(function(A,q){
function b(e,r,o,n){var a,t,u,i,s;if(a=r.data,t=r.accessors[0],u=n,o===0)return e*t(a,u);for(i=t(a,u),u+=o,s=1;s<e;s++)i+=t(a,u),u+=o;return i}q.exports=b
});var f=c(function(B,y){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=m(),v=6;function M(e,r,o,n){var a,t,u,i,s;if(e<=0)return 0;if(i=j(r),i.accessorProtocol)return k(e,i,o,n);if(a=n,o===0)return e*r[a];if(u=r[a],a+=o,o===1){if(t=(e-1)%v,t>0)for(s=0;s<t;s++)u+=r[a],a+=o;if(e<v)return u;for(s=t;s<e-1;s+=v)u+=r[a]+r[a+1]+r[a+2]+r[a+3]+r[a+4]+r[a+5],a+=v;return u}for(s=1;s<e;s++)u+=r[a],a+=o;return u}y.exports=M
});var p=c(function(C,g){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(e,r,o){return P(e,r,o,O(e,o))}g.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),w=f();h(l,"ndarray",w);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
