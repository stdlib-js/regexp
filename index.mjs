// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function f(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var m=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function g(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e(f,"REGEXP",m);var c=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e(g,"REGEXP",c);var v=["posix","win32"];function F(u){if(arguments.length>0&&!n(v,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',v.join('", "'),u));return"win32"===u||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(F,"REGEXP",r?c:m),e(F,"REGEXP_POSIX",m),e(F,"REGEXP_WIN32",c);var h=["full","shorthand","either"];function R(u){if(arguments.length>0&&!n(h,u))throw new Error(t('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',h.join('", "'),u));return"shorthand"===u?/^[0-9A-F]{3}$/i:"either"===u?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}e(R,"REGEXP",/^[0-9A-F]{6}$/i),e(R,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),e(R,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var P="[-+]{0,1}[0-9]*\\.[0-9]+";function w(u){var e,r;if(arguments.length>0){if(r=function(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},u),r)throw r;return e.capture?new RegExp("("+P+")",e.flags):new RegExp(P,e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var j=w({capture:!0}),D=w();function A(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(w,"REGEXP",D),e(w,"REGEXP_CAPTURE",j);var $=/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function x(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e(A,"REGEXP",$);var X=/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e(x,"REGEXP",X);var b=["posix","win32"];function B(u){if(arguments.length>0&&!n(b,u))throw new Error(t('invalid argument.  Must be one of the following: "%s". Value: `%s`.',b.join('", "'),u));return"win32"===u||r?/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}function G(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}e(B,"REGEXP",r?X:$),e(B,"REGEXP_POSIX",$),e(B,"REGEXP_WIN32",X),e(G,"REGEXP",/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i);var S="\\r?\\n";function z(u){var e,r;if(arguments.length>0){if(r=function(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},u),r)throw r;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp(S,e.flags)}return/\r?\n/}var Z=z({capture:!0}),y=z();function O(){return/^\\\\\?\\.+/}function T(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(z,"REGEXP",y),e(z,"REGEXP_CAPTURE",Z),e(O,"REGEXP",/^\\\\\?\\.+/);var _=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function C(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(T,"REGEXP",_);var V=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(C,"REGEXP",V);var I=["posix","win32"];function W(u){if(arguments.length>0&&!n(I,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',I.join('", "'),u));return"win32"===u||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function N(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(W,"REGEXP",r?V:_),e(W,"REGEXP_POSIX",_),e(W,"REGEXP_WIN32",V);var U=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function M(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(N,"REGEXP",U);var H=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(M,"REGEXP",H);var L=["posix","win32"];function k(u){if(arguments.length>0&&!n(L,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',L.join('", "'),u));return"win32"===u||r?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function q(){return/^\s*function\s*([^(]*)/i}function J(){var u="";return u="^"+(u=(u=(u+=l(E)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(u)}e(k,"REGEXP",r?H:U),e(k,"REGEXP_POSIX",U),e(k,"REGEXP_WIN32",H),e(q,"REGEXP",/^\s*function\s*([^(]*)/i);var K=J();function Q(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Y(u,e){return e&&"RegExp"===e.type&&e.pattern?new RegExp(e.pattern,e.flags):e}function uu(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}e(J,"REGEXP",K),e(Q,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),e(uu,"REGEXP",/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);var eu="/".charCodeAt(0);function ru(u){var e;if(!p(u))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",u));for(e=(u=u.toString()).length-1;e>=0&&u.charCodeAt(e)!==eu;e--);return{type:"RegExp",pattern:u.substring(1,e),flags:u.substring(e+1)}}function nu(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}function tu(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}function iu(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}e(nu,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/),e(tu,"REGEXP",/[\uD800-\uDBFF][\uDC00-\uDFFF]/),e(iu,"REGEXP",/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/);var su="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function au(u){var e,r;if(arguments.length>0){if(r=function(u,e){return i(e)?s(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(d("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):s(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(d("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},u),r)throw r;return e.capture?new RegExp("("+su+")",e.flags):new RegExp(su,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var ou=au({capture:!0}),Eu=au();e(au,"REGEXP",Eu),e(au,"REGEXP_CAPTURE",ou);var lu={};u(lu,"reBasename",F),u(lu,"reBasenamePosix",f),u(lu,"reBasenameWindows",g),u(lu,"reColorHexadecimal",R),u(lu,"reDecimalNumber",w),u(lu,"reDirname",B),u(lu,"reDirnamePosix",A),u(lu,"reDirnameWindows",x),u(lu,"reDurationString",G),u(lu,"reEOL",z),u(lu,"reExtendedLengthPath",O),u(lu,"reExtname",W),u(lu,"reExtnamePosix",T),u(lu,"reExtnameWindows",C),u(lu,"reFilename",k),u(lu,"reFilenamePosix",N),u(lu,"reFilenameWindows",M),u(lu,"reFunctionName",q),u(lu,"reNativeFunction",J),u(lu,"reRegExp",Q),u(lu,"reviveRegExp",Y),u(lu,"reSemVer",uu),u(lu,"regexp2json",ru),u(lu,"reUncPath",nu),u(lu,"reUtf16SurrogatePair",tu),u(lu,"reUtf16UnpairedSurrogate",iu),u(lu,"reWhitespace",au);export{lu as default,F as reBasename,f as reBasenamePosix,g as reBasenameWindows,R as reColorHexadecimal,w as reDecimalNumber,B as reDirname,A as reDirnamePosix,x as reDirnameWindows,G as reDurationString,z as reEOL,O as reExtendedLengthPath,W as reExtname,T as reExtnamePosix,C as reExtnameWindows,k as reFilename,N as reFilenamePosix,M as reFilenameWindows,q as reFunctionName,J as reNativeFunction,Q as reRegExp,uu as reSemVer,nu as reUncPath,tu as reUtf16SurrogatePair,iu as reUtf16UnpairedSurrogate,au as reWhitespace,ru as regexp2json,Y as reviveRegExp};
//# sourceMappingURL=index.mjs.map
