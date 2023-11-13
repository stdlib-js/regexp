// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as E}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";function c(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var v=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function F(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}u(c,"REGEXP",v);var h=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;u(F,"REGEXP",h);var j=["posix","win32"];function R(e){if(arguments.length>0&&!n(j,e))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',j.join('", "'),e));return"win32"===e||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}u(R,"REGEXP",r?h:v),u(R,"REGEXP_POSIX",v),u(R,"REGEXP_WIN32",h);var P=["full","shorthand","either"];function w(e){if(arguments.length>0&&!n(P,e))throw new Error(t('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',P.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}function D(e,u){return s(u)?i(u,"flags")&&(e.flags=u.flags,!o(e.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):i(u,"capture")&&(e.capture=u.capture,!a(e.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",u))}u(w,"REGEXP",/^[0-9A-F]{6}$/i),u(w,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),u(w,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);function x(e){var u,r;if(arguments.length>0){if(r=D(u={},e))throw r;return u.capture?new RegExp("([-+]{0,1}[0-9]*\\.[0-9]+)",u.flags):new RegExp("[-+]{0,1}[0-9]*\\.[0-9]+",u.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}var A=x({capture:!0}),b=x();function $(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}u(x,"REGEXP",b),u(x,"REGEXP_CAPTURE",A);var X=/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function B(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}u($,"REGEXP",X);var G=/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;u(B,"REGEXP",G);var S=["posix","win32"];function z(e){if(arguments.length>0&&!n(S,e))throw new Error(t('invalid argument.  Must be one of the following: "%s". Value: `%s`.',S.join('", "'),e));return"win32"===e||r?/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}function Z(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}function y(e,u){return s(u)?i(u,"flags")&&(e.flags=u.flags,!o(e.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):i(u,"capture")&&(e.capture=u.capture,!E(e.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",u))}u(z,"REGEXP",r?G:X),u(z,"REGEXP_POSIX",X),u(z,"REGEXP_WIN32",G),u(Z,"REGEXP",/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i);function O(e){var u,r;if(arguments.length>0){if(r=y(u={},e))throw r;return u.capture?new RegExp("(\\r?\\n)",u.flags):new RegExp("\\r?\\n",u.flags)}return/\r?\n/}var T=O({capture:!0}),_=O();function C(){return/^\\\\\?\\.+/}function V(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}u(O,"REGEXP",_),u(O,"REGEXP_CAPTURE",T),u(C,"REGEXP",/^\\\\\?\\.+/);var I=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function W(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}u(V,"REGEXP",I);var N=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;u(W,"REGEXP",N);var U=["posix","win32"];function M(e){if(arguments.length>0&&!n(U,e))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',U.join('", "'),e));return"win32"===e||r?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function H(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}u(M,"REGEXP",r?N:I),u(M,"REGEXP_POSIX",I),u(M,"REGEXP_WIN32",N);var L=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function k(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}u(H,"REGEXP",L);var q=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;u(k,"REGEXP",q);var J=["posix","win32"];function K(e){if(arguments.length>0&&!n(J,e))throw new Error(t('invalid argument. Must be one of the following: "%s". Value: `%s`.',J.join('", "'),e));return"win32"===e||r?/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}function Q(){return/^\s*function\s*([^(]*)/i}function Y(){var e="";return e="^"+(e=(e=(e+=p(l)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)}u(K,"REGEXP",r?q:L),u(K,"REGEXP_POSIX",L),u(K,"REGEXP_WIN32",q),u(Q,"REGEXP",/^\s*function\s*([^(]*)/i);var ee=Y();function ue(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function re(e,u){return u&&"RegExp"===u.type&&u.pattern?new RegExp(u.pattern,u.flags):u}function ne(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}u(Y,"REGEXP",ee),u(ue,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),u(ne,"REGEXP",/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/);var te="/".charCodeAt(0);function se(e){var u;if(!d(e))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",e));for(u=(e=e.toString()).length-1;u>=0&&e.charCodeAt(u)!==te;u--);return{type:"RegExp",pattern:e.substring(1,u),flags:e.substring(u+1)}}function ie(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}function ae(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}function oe(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}function Ee(e,u){return m(u)?f(u,"flags")&&(e.flags=u.flags,!g(e.flags))?new TypeError(t("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):f(u,"capture")&&(e.capture=u.capture,!E(e.capture))?new TypeError(t("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",u))}u(ie,"REGEXP",/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/),u(ae,"REGEXP",/[\uD800-\uDBFF][\uDC00-\uDFFF]/),u(oe,"REGEXP",/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/);var le="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function pe(e){var u,r;if(arguments.length>0){if(r=Ee(u={},e))throw r;return u.capture?new RegExp("("+le+")",u.flags):new RegExp(le,u.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var de=pe({capture:!0}),me=pe();u(pe,"REGEXP",me),u(pe,"REGEXP_CAPTURE",de);var fe={};e(fe,"reBasename",R),e(fe,"reBasenamePosix",c),e(fe,"reBasenameWindows",F),e(fe,"reColorHexadecimal",w),e(fe,"reDecimalNumber",x),e(fe,"reDirname",z),e(fe,"reDirnamePosix",$),e(fe,"reDirnameWindows",B),e(fe,"reDurationString",Z),e(fe,"reEOL",O),e(fe,"reExtendedLengthPath",C),e(fe,"reExtname",M),e(fe,"reExtnamePosix",V),e(fe,"reExtnameWindows",W),e(fe,"reFilename",K),e(fe,"reFilenamePosix",H),e(fe,"reFilenameWindows",k),e(fe,"reFunctionName",Q),e(fe,"reNativeFunction",Y),e(fe,"reRegExp",ue),e(fe,"reviveRegExp",re),e(fe,"reSemVer",ne),e(fe,"regexp2json",se),e(fe,"reUncPath",ie),e(fe,"reUtf16SurrogatePair",ae),e(fe,"reUtf16UnpairedSurrogate",oe),e(fe,"reWhitespace",pe);export{fe as default,R as reBasename,c as reBasenamePosix,F as reBasenameWindows,w as reColorHexadecimal,x as reDecimalNumber,z as reDirname,$ as reDirnamePosix,B as reDirnameWindows,Z as reDurationString,O as reEOL,C as reExtendedLengthPath,M as reExtname,V as reExtnamePosix,W as reExtnameWindows,K as reFilename,H as reFilenamePosix,k as reFilenameWindows,Q as reFunctionName,Y as reNativeFunction,ue as reRegExp,ne as reSemVer,ie as reUncPath,ae as reUtf16SurrogatePair,oe as reUtf16UnpairedSurrogate,pe as reWhitespace,se as regexp2json,re as reviveRegExp};
//# sourceMappingURL=index.mjs.map
