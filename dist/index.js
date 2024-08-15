"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=x(function(h,c){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,v){var t,u,i,f;if(!w(e))throw new TypeError(l('null3v',e));if(!s(r))throw new TypeError(l('null2H',r));return t=!0,f=-1,u={},o(u,"next",q),o(u,"return",y),a&&s(e[a])&&o(u,a,g),u;function q(){var n;return i?{done:!0}:(n=e.next(),n.done?(i=!0,n):(t&&r.call(v,n.value,f)&&(t=!1),{value:t,done:!1}))}function y(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return m(e[a](),r,v)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
