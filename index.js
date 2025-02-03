// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("process")):"function"==typeof define&&define.amd?define(["process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).regexp=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,E=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function y(r){var e,t,u=parseFloat(r.arg);if(!isFinite(u)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);u=r.arg}switch(r.specifier){case"e":case"E":t=u.toExponential(r.precision);break;case"f":case"F":t=u.toFixed(r.precision);break;case"g":case"G":s(u)<1e-4?((e=r.precision)>0&&(e-=1),t=u.toExponential(e)):t=u.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,b,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,E,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),u>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var F=String.fromCharCode,P=Array.isArray;function R(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,u,o,a,s,f,l,p,g,E,d;if(!P(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",s=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(u=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,R(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,E=n.padRight,d=void 0,(d=g-p.length)<0?p:p=E?p+m(d):m(d)+p)),a+=n.arg||"",s+=1}return a}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,u;for(t=[],u=0,n=j.exec(r);n;)(e=r.slice(u,j.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),u=j.lastIndex,n=j.exec(r);return(e=r.slice(u)).length&&t.push(e),t}function _(r){var e,t;if("string"!=typeof r)throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var D,B=Object.prototype,O=B.toString,X=B.__defineGetter__,G=B.__defineSetter__,T=B.__lookupGetter__,Z=B.__lookupSetter__;D=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,u,i,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((u="value"in t)&&(T.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=B,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,o="set"in t,u&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&X&&X.call(r,e,t.get),o&&G&&G.call(r,e,t.set),r};var V=D;function I(r,e,t){V(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function z(r,e,t){V(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var k=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function N(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}z(C,"REGEXP",k);var W=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;z(N,"REGEXP",W);var M="win32"===r.platform,U=Math.floor;function L(r){return U(r)===r}var H=9007199254740991;function q(r){return"number"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Y&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=J()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)},ur=Number,ir=ur.prototype.toString;var or=J();function ar(r){return"object"==typeof r&&(r instanceof ur||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function cr(r){return q(r)||ar(r)}z(cr,"isPrimitive",q),z(cr,"isObject",ar);var sr=Number.POSITIVE_INFINITY,fr=ur.NEGATIVE_INFINITY;function lr(r){return r<sr&&r>fr&&L(r)}function pr(r){return q(r)&&lr(r)}function gr(r){return ar(r)&&lr(r.valueOf())}function Er(r){return pr(r)||gr(r)}function dr(r){return"string"==typeof r}z(Er,"isPrimitive",pr),z(Er,"isObject",gr);var vr=String.prototype.valueOf;var hr=J();function br(r){return"object"==typeof r&&(r instanceof String||(hr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function wr(r){return dr(r)||br(r)}function yr(r){return r!=r}function mr(r){return q(r)&&yr(r)}function Fr(r){return ar(r)&&yr(r.valueOf())}function Pr(r){return mr(r)||Fr(r)}function Rr(r,e,t){var n,u,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&L(o.length)&&o.length>=0&&o.length<=H||dr(r)))throw new TypeError(_("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!pr(t))throw new TypeError(_("invalid argument. Third argument must be an integer. Value: `%s`.",t));(u=t)<0&&(u=0)}else u=0;if(dr(r)){if(!dr(e))throw new TypeError(_("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,u)}if(n=r.length,mr(e)){for(i=u;i<n;i++)if(mr(r[i]))return!0;return!1}for(i=u;i<n;i++)if(r[i]===e)return!0;return!1}z(wr,"isPrimitive",dr),z(wr,"isObject",br),z(Pr,"isPrimitive",mr),z(Pr,"isObject",Fr);var Sr=["posix","win32"];function Ar(r){if(arguments.length>0&&!Rr(Sr,r))throw new Error(_('invalid argument. Must be one of the following: "%s". Value: `%s`.',Sr.join('", "'),r));return"win32"===r||M?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}z(Ar,"REGEXP",M?W:k),z(Ar,"REGEXP_POSIX",k),z(Ar,"REGEXP_WIN32",W);var jr=["full","shorthand","either"];function $r(r){if(arguments.length>0&&!Rr(jr,r))throw new Error(_('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',jr.join('", "'),r));return"shorthand"===r?/^[0-9A-F]{3}$/i:"either"===r?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}z($r,"REGEXP",/^[0-9A-F]{6}$/i),z($r,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),z($r,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};var _r=/./;function Dr(r){return"boolean"==typeof r}var Br=Boolean,Or=Boolean.prototype.toString;var Xr=J();function Gr(r){return"object"==typeof r&&(r instanceof Br||(Xr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function Tr(r){return Dr(r)||Gr(r)}z(Tr,"isPrimitive",Dr),z(Tr,"isObject",Gr);var Zr="object"==typeof self?self:null,Vr="object"==typeof window?window:null,Ir="object"==typeof global?global:null,zr="object"==typeof globalThis?globalThis:null;var Cr=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(_("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(zr)return zr;if(Zr)return Zr;if(Vr)return Vr;if(Ir)return Ir;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Cr.document&&Cr.document.childNodes,Nr=Int8Array;function Wr(){return/^\s*function\s*([^(]*)/i}var Mr=/^\s*function\s*([^(]*)/i;function Ur(r){return null!==r&&"object"==typeof r}function Lr(r){var e,t,n,u;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Mr.exec(n.toString()))return e[1]}return Ur(u=r)&&(u._isBuffer||u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u))?"Buffer":t}z(Wr,"REGEXP",Mr),z(Ur,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(_("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!xr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ur));var Hr="function"==typeof _r||"object"==typeof Nr||"function"==typeof kr?function(r){return Lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Lr(r).toLowerCase():e};function qr(r){return"function"===Hr(r)}var Yr,Jr=Object,Kr=Object.getPrototypeOf;Yr=qr(Object.getPrototypeOf)?Kr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Qr=Yr;var re=Object.prototype;function ee(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!xr(r)}(r)&&(e=function(r){return null==r?null:(r=Jr(r),Qr(r))}(r),!e||!rr(r,"constructor")&&rr(e,"constructor")&&qr(e.constructor)&&"[object Function]"===nr(e.constructor)&&rr(e,"isPrototypeOf")&&qr(e.isPrototypeOf)&&(e===re||function(r){var e;for(e in r)if(!rr(r,e))return!1;return!0}(r)))}var te="[-+]{0,1}[0-9]*\\.[0-9]+";function ne(r){var e,t;if(arguments.length>0){if(t=function(r,e){return ee(e)?rr(e,"flags")&&(r.flags=e.flags,!dr(r.flags))?new TypeError(_("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):rr(e,"capture")&&(r.capture=e.capture,!Dr(r.capture))?new TypeError(_("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(_("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+te+")",e.flags):new RegExp(te,e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var ue=ne({capture:!0}),ie=ne();function oe(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}z(ne,"REGEXP",ie),z(ne,"REGEXP_CAPTURE",ue);var ae=/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function ce(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}z(oe,"REGEXP",ae);var se=/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;z(ce,"REGEXP",se);var fe=["posix","win32"];function le(r){if(arguments.length>0&&!Rr(fe,r))throw new Error(_('invalid argument.  Must be one of the following: "%s". Value: `%s`.',fe.join('", "'),r));return"win32"===r||M?/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}function pe(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}z(le,"REGEXP",M?se:ae),z(le,"REGEXP_POSIX",ae),z(le,"REGEXP_WIN32",se),z(pe,"REGEXP",/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i);var ge="\\r?\\n";function Ee(r){var e,t;if(arguments.length>0){if(t=function(r,e){return ee(e)?rr(e,"flags")&&(r.flags=e.flags,!dr(r.flags))?new TypeError(_("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):rr(e,"capture")&&(r.capture=e.capture,!Dr(r.capture))?new TypeError(_("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(_("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp(ge,e.flags)}return/\r?\n/}var de=Ee({capture:!0}),ve=Ee();function he(){return/^\\\\\?\\.+/}function be(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}z(Ee,"REGEXP",ve),z(Ee,"REGEXP_CAPTURE",de),z(he,"REGEXP",/^\\\\\?\\.+/);var we=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function ye(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}z(be,"REGEXP",we);var me=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;z(ye,"REGEXP",me);var Fe=["posix","win32"];function Pe(r){if(arguments.length>0&&!Rr(Fe,r))throw new Error(_('invalid argument. Must be one of the following: "%s". Value: `%s`.',Fe.join('", "'),r));return"win32"===r||M?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function Re(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}z(Pe,"REGEXP",M?me:we),z(Pe,"REGEXP_POSIX",we),z(Pe,"REGEXP_WIN32",me);var Se=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function Ae(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}z(Re,"REGEXP",Se);var je=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;z(Ae,"REGEXP",je);var $e=["posix","win32"];function xe(r){if(arguments.length>0&&!Rr($e,r))throw new Error(_('invalid argument. Must be one of the following: "%s". Value: `%s`.',$e.join('", "'),r));return"win32"===r||M?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function _e(){return/^\s*function\s*([^(]*)/i}z(xe,"REGEXP",M?je:Se),z(xe,"REGEXP_POSIX",Se),z(xe,"REGEXP_WIN32",je),z(_e,"REGEXP",/^\s*function\s*([^(]*)/i);var De=Function,Be=Function.prototype.toString;function Oe(){var r,e="";return e="^"+(e=(e=(e+=(r=De,Be.call(r))).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)}var Xe=Oe();function Ge(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Te(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}z(Oe,"REGEXP",Xe),z(Ge,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),z(Te,"REGEXP",/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);var Ze=RegExp.prototype.exec;var Ve=J();function Ie(r){return"object"==typeof r&&(r instanceof RegExp||(Ve?function(r){try{return Ze.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===nr(r)))}var ze="/".charCodeAt(0);function Ce(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}function ke(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}function Ne(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}z(Ce,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/),z(ke,"REGEXP",/[\uD800-\uDBFF][\uDC00-\uDFFF]/),z(Ne,"REGEXP",/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/);var We="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Me(r){var e,t;if(arguments.length>0){if(t=function(r,e){return ee(e)?rr(e,"flags")&&(r.flags=e.flags,!dr(r.flags))?new TypeError(_("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):rr(e,"capture")&&(r.capture=e.capture,!Dr(r.capture))?new TypeError(_("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(_("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+We+")",e.flags):new RegExp(We,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Ue=Me({capture:!0}),Le=Me();z(Me,"REGEXP",Le),z(Me,"REGEXP_CAPTURE",Ue);var He={};return I(He,"reBasename",Ar),I(He,"reBasenamePosix",C),I(He,"reBasenameWindows",N),I(He,"reColorHexadecimal",$r),I(He,"reDecimalNumber",ne),I(He,"reDirname",le),I(He,"reDirnamePosix",oe),I(He,"reDirnameWindows",ce),I(He,"reDurationString",pe),I(He,"reEOL",Ee),I(He,"reExtendedLengthPath",he),I(He,"reExtname",Pe),I(He,"reExtnamePosix",be),I(He,"reExtnameWindows",ye),I(He,"reFilename",xe),I(He,"reFilenamePosix",Re),I(He,"reFilenameWindows",Ae),I(He,"reFunctionName",_e),I(He,"reNativeFunction",Oe),I(He,"reRegExp",Ge),I(He,"reviveRegExp",(function(r,e){return e&&"RegExp"===e.type&&e.pattern?new RegExp(e.pattern,e.flags):e})),I(He,"reSemVer",Te),I(He,"regexp2json",(function(r){var e;if(!Ie(r))throw new TypeError(_("invalid argument. Must provide a regular expression. Value: `%s`.",r));for(e=(r=r.toString()).length-1;e>=0&&r.charCodeAt(e)!==ze;e--);return{type:"RegExp",pattern:r.substring(1,e),flags:r.substring(e+1)}})),I(He,"reUncPath",Ce),I(He,"reUtf16SurrogatePair",ke),I(He,"reUtf16UnpairedSurrogate",Ne),I(He,"reWhitespace",Me),He}));
//# sourceMappingURL=index.js.map
