// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";function g(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var c=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function v(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e(g,"REGEXP",c);var F=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e(v,"REGEXP",F);var h=["posix","win32"];function j(u){if(arguments.length>0&&!n(h,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',h.join('", "'),u));return"win32"===u||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(j,"REGEXP",r?F:c),e(j,"REGEXP_POSIX",c),e(j,"REGEXP_WIN32",F);var R=["full","shorthand","either"];function P(u){if(arguments.length>0&&!n(R,u))throw new Error(t('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',R.join('", "'),u));return"shorthand"===u?/^[0-9A-F]{3}$/i:"either"===u?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}function w(u,e){return s(e)?i(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):i(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(P,"REGEXP",/^[0-9A-F]{6}$/i),e(P,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),e(P,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);function D(u){var e,r;if(arguments.length>0){if(r=w(e={},u))throw r;return e.capture?new RegExp("([-+]{0,1}[0-9]*\\.[0-9]+)",e.flags):new RegExp("[-+]{0,1}[0-9]*\\.[0-9]+",e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var x=D({capture:!0}),A=D();function $(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}e(D,"REGEXP",A),e(D,"REGEXP_CAPTURE",x);var b=/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function X(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}e($,"REGEXP",b);var B=/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;e(X,"REGEXP",B);var G=["posix","win32"];function S(u){if(arguments.length>0&&!n(G,u))throw new Error(t('invalid argument.  Must be one of the following: "%s". Value: `%s`.',G.join('", "'),u));return"win32"===u||r?/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}function z(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}function Z(u,e){return s(e)?i(e,"flags")&&(u.flags=e.flags,!o(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):i(e,"capture")&&(u.capture=e.capture,!a(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(S,"REGEXP",r?B:b),e(S,"REGEXP_POSIX",b),e(S,"REGEXP_WIN32",B),e(z,"REGEXP",/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i);function y(u){var e,r;if(arguments.length>0){if(r=Z(e={},u))throw r;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp("\\r?\\n",e.flags)}return/\r?\n/}var O=y({capture:!0}),T=y();function _(){return/^\\\\\?\\.+/}function C(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(y,"REGEXP",T),e(y,"REGEXP_CAPTURE",O),e(_,"REGEXP",/^\\\\\?\\.+/);var V=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function I(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(C,"REGEXP",V);var W=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(I,"REGEXP",W);var N=["posix","win32"];function U(u){if(arguments.length>0&&!n(N,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',N.join('", "'),u));return"win32"===u||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function M(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}e(U,"REGEXP",r?W:V),e(U,"REGEXP_POSIX",V),e(U,"REGEXP_WIN32",W);var H=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function L(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}e(M,"REGEXP",H);var k=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;e(L,"REGEXP",k);var q=["posix","win32"];function J(u){if(arguments.length>0&&!n(q,u))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',q.join('", "'),u));return"win32"===u||r?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function K(){return/^\s*function\s*([^(]*)/i}function Q(){var u="";return u="^"+(u=(u=(u+=l(E)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(u)}e(J,"REGEXP",r?k:H),e(J,"REGEXP_POSIX",H),e(J,"REGEXP_WIN32",k),e(K,"REGEXP",/^\s*function\s*([^(]*)/i);var Y=Q();function uu(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function eu(u,e){return e&&"RegExp"===e.type&&e.pattern?new RegExp(e.pattern,e.flags):e}function ru(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}e(Q,"REGEXP",Y),e(uu,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),e(ru,"REGEXP",/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);var nu="/".charCodeAt(0);function tu(u){var e;if(!p(u))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",u));for(e=(u=u.toString()).length-1;e>=0&&u.charCodeAt(e)!==nu;e--);return{type:"RegExp",pattern:u.substring(1,e),flags:u.substring(e+1)}}function su(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}function iu(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}function au(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}function ou(u,e){return d(e)?i(e,"flags")&&(u.flags=e.flags,!m(u.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",u.flags)):i(e,"capture")&&(u.capture=e.capture,!f(u.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",u.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(su,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/),e(iu,"REGEXP",/[\uD800-\uDBFF][\uDC00-\uDFFF]/),e(au,"REGEXP",/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/);var Eu="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function lu(u){var e,r;if(arguments.length>0){if(r=ou(e={},u))throw r;return e.capture?new RegExp("("+Eu+")",e.flags):new RegExp(Eu,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var pu=lu({capture:!0}),du=lu();e(lu,"REGEXP",du),e(lu,"REGEXP_CAPTURE",pu);var fu={};u(fu,"reBasename",j),u(fu,"reBasenamePosix",g),u(fu,"reBasenameWindows",v),u(fu,"reColorHexadecimal",P),u(fu,"reDecimalNumber",D),u(fu,"reDirname",S),u(fu,"reDirnamePosix",$),u(fu,"reDirnameWindows",X),u(fu,"reDurationString",z),u(fu,"reEOL",y),u(fu,"reExtendedLengthPath",_),u(fu,"reExtname",U),u(fu,"reExtnamePosix",C),u(fu,"reExtnameWindows",I),u(fu,"reFilename",J),u(fu,"reFilenamePosix",M),u(fu,"reFilenameWindows",L),u(fu,"reFunctionName",K),u(fu,"reNativeFunction",Q),u(fu,"reRegExp",uu),u(fu,"reviveRegExp",eu),u(fu,"reSemVer",ru),u(fu,"regexp2json",tu),u(fu,"reUncPath",su),u(fu,"reUtf16SurrogatePair",iu),u(fu,"reUtf16UnpairedSurrogate",au),u(fu,"reWhitespace",lu);export{fu as default,j as reBasename,g as reBasenamePosix,v as reBasenameWindows,P as reColorHexadecimal,D as reDecimalNumber,S as reDirname,$ as reDirnamePosix,X as reDirnameWindows,z as reDurationString,y as reEOL,_ as reExtendedLengthPath,U as reExtname,C as reExtnamePosix,I as reExtnameWindows,J as reFilename,M as reFilenamePosix,L as reFilenameWindows,K as reFunctionName,Q as reNativeFunction,uu as reRegExp,ru as reSemVer,su as reUncPath,iu as reUtf16SurrogatePair,au as reUtf16UnpairedSurrogate,lu as reWhitespace,tu as regexp2json,eu as reviveRegExp};
//# sourceMappingURL=index.mjs.map
