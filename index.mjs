// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.0.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@v0.0.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@esm/index.mjs";function d(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var g=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function m(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e(d,"REGEXP",g);var c=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e(m,"REGEXP",c);var F=["posix","win32"];function v(u){if(arguments.length>0&&!r(F,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',F.join('", "'),u));return"win32"===u||n?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(v,"REGEXP",n?c:g),e(v,"REGEXP_POSIX",g),e(v,"REGEXP_WIN32",c);var h=["full","shorthand","either"];function R(u){if(arguments.length>0&&!r(h,u))throw new Error(t('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',h.join('", "'),u));return"shorthand"===u?/^[0-9A-F]{3}$/i:"either"===u?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}function w(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(E("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(E("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(E("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(R,"REGEXP",/^[0-9A-F]{6}$/i),e(R,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),e(R,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);function P(u){var e,n;if(arguments.length>0){if(n=w(e={},u))throw n;return e.capture?new RegExp("([-+]{0,1}[0-9]*\\.[0-9]+)",e.flags):new RegExp("[-+]{0,1}[0-9]*\\.[0-9]+",e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var j=P({capture:!0}),D=P();function A(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(P,"REGEXP",D),e(P,"REGEXP_CAPTURE",j);var x=/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function $(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e(A,"REGEXP",x);var X=/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e($,"REGEXP",X);var b=["posix","win32"];function B(u){if(arguments.length>0&&!r(b,u))throw new Error(t('invalid argument.  Must be one of the following: "%s". Value: `%s`.',b.join('", "'),u));return"win32"===u||n?/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}function G(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(E("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(E("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(E("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(B,"REGEXP",n?X:x),e(B,"REGEXP_POSIX",x),e(B,"REGEXP_WIN32",X);function S(u){var e,n;if(arguments.length>0){if(n=G(e={},u))throw n;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp("\\r?\\n",e.flags)}return/\r?\n/}var z=S({capture:!0}),Z=S();function y(){return/^\\\\\?\\.+/}function O(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(S,"REGEXP",Z),e(S,"REGEXP_CAPTURE",z),e(y,"REGEXP",/^\\\\\?\\.+/);var T=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function _(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(O,"REGEXP",T);var C=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(_,"REGEXP",C);var V=["posix","win32"];function I(u){if(arguments.length>0&&!r(V,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',V.join('", "'),u));return"win32"===u||n?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function W(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(I,"REGEXP",n?C:T),e(I,"REGEXP_POSIX",T),e(I,"REGEXP_WIN32",C);var N=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function U(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(W,"REGEXP",N);var M=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(U,"REGEXP",M);var H=["posix","win32"];function L(u){if(arguments.length>0&&!r(H,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',H.join('", "'),u));return"win32"===u||n?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function k(){return/^\s*function\s*([^(]*)/i}function q(){var u="";return u="^"+(u=(u=(u+=p(l)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(u)}e(L,"REGEXP",n?M:N),e(L,"REGEXP_POSIX",N),e(L,"REGEXP_WIN32",M),e(k,"REGEXP",/^\s*function\s*([^(]*)/i);var J=q();function K(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Q(u,e){return e&&"RegExp"===e.type&&e.pattern?new RegExp(e.pattern,e.flags):e}function Y(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}e(q,"REGEXP",J),e(K,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),e(Y,"REGEXP",/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);var uu="/".charCodeAt(0);function eu(u){var e;if(!f(u))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",u));for(e=(u=u.toString()).length-1;e>=0&&u.charCodeAt(e)!==uu;e--);return{type:"RegExp",pattern:u.substring(1,e),flags:u.substring(e+1)}}function nu(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}function ru(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}function tu(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}function iu(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(nu,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/),e(ru,"REGEXP",/[\uD800-\uDBFF][\uDC00-\uDFFF]/),e(tu,"REGEXP",/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/);var su="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function au(u){var e,n;if(arguments.length>0){if(n=iu(e={},u))throw n;return e.capture?new RegExp("("+su+")",e.flags):new RegExp(su,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var ou=au({capture:!0}),Eu=au();e(au,"REGEXP",Eu),e(au,"REGEXP_CAPTURE",ou);var lu={};u(lu,"reBasename",v),u(lu,"reBasenamePosix",d),u(lu,"reBasenameWindows",m),u(lu,"reColorHexadecimal",R),u(lu,"reDecimalNumber",P),u(lu,"reDirname",B),u(lu,"reDirnamePosix",A),u(lu,"reDirnameWindows",$),u(lu,"reEOL",S),u(lu,"reExtendedLengthPath",y),u(lu,"reExtname",I),u(lu,"reExtnamePosix",O),u(lu,"reExtnameWindows",_),u(lu,"reFilename",L),u(lu,"reFilenamePosix",W),u(lu,"reFilenameWindows",U),u(lu,"reFunctionName",k),u(lu,"reNativeFunction",q),u(lu,"reRegExp",K),u(lu,"reviveRegExp",Q),u(lu,"reSemVer",Y),u(lu,"regexp2json",eu),u(lu,"reUncPath",nu),u(lu,"reUtf16SurrogatePair",ru),u(lu,"reUtf16UnpairedSurrogate",tu),u(lu,"reWhitespace",au);export{lu as default,v as reBasename,d as reBasenamePosix,m as reBasenameWindows,R as reColorHexadecimal,P as reDecimalNumber,B as reDirname,A as reDirnamePosix,$ as reDirnameWindows,S as reEOL,y as reExtendedLengthPath,I as reExtname,O as reExtnamePosix,_ as reExtnameWindows,L as reFilename,W as reFilenamePosix,U as reFilenameWindows,k as reFunctionName,q as reNativeFunction,K as reRegExp,Y as reSemVer,nu as reUncPath,ru as reUtf16SurrogatePair,tu as reUtf16UnpairedSurrogate,au as reWhitespace,eu as regexp2json,Q as reviveRegExp};
//# sourceMappingURL=index.mjs.map
