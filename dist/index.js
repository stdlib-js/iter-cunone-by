"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=x(function(h,c){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,t){var a,u,o,v;if(!w(e))throw new TypeError(l('1zJ3v',e));if(!s(r))throw new TypeError(l('1zJ2H',r));return a=!0,v=-1,u={},f(u,"next",q),f(u,"return",y),i&&s(e[i])&&f(u,i,g),u;function q(){var n;return o?{done:!0}:(n=e.next(),n.done?(o=!0,n):(v+=1,a&&r.call(t,n.value,v)&&(a=!1),{value:a,done:!1}))}function y(n){return o=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return m(e[i](),r,t)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
