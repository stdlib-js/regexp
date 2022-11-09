// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("process")):"function"==typeof define&&define.amd?define(["process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).regexp=e(r.require$$0$5)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function i(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,v=String.prototype.replace,E=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,m,"$1e"),t=v.call(t,w,"e"),t=v.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,E,"e+0$1"),t=v.call(t,d,"e-0$1"),r.alternate&&(t=v.call(t,b,"$1."),t=v.call(t,h,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+P(n):P(n)+r}var R=String.fromCharCode,F=isNaN,O=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function X(r){var e,t,n,i,o,a,c,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,s=0;s<r.length;s++)if(l(n=r[s]))a+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!F(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=G.exec(r);n;)(e=r.slice(i,G.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=G.lastIndex,n=G.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){return"string"==typeof r}function $(r){var e,t,n;if(!T(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return X.apply(null,t)}var B,V=Object.freeze({__proto__:null,default:$}),D=Object.prototype,I=D.toString,z=D.__defineGetter__,k=D.__defineSetter__,C=D.__lookupGetter__,N=D.__lookupSetter__;B=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=D,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(r,e,t.get),u&&k&&k.call(r,e,t.set),r};var Z=B;function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function M(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=n(Object.freeze({__proto__:null,default:M}));var L=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},H=L;U(H,"REGEXP",L());var q=H;var Y=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},J=Y;U(J,"REGEXP",Y());var K=J,Q="win32"===r.platform,rr=n(Object.freeze({__proto__:null,default:Q})),er=Math.floor;function tr(r){return er(r)===r}function nr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=9007199254740991}function ir(r){return"number"==typeof r}var or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ur(){return or&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var cr=Object.prototype.hasOwnProperty;function fr(r,e){return null!=r&&cr.call(r,e)}var lr=Object.freeze({__proto__:null,default:fr}),sr="function"==typeof Symbol?Symbol:void 0,pr="function"==typeof sr?sr.toStringTag:"";var gr=ur()?function(r){var e,t,n;if(null==r)return ar.call(r);t=r[pr],e=fr(r,pr);try{r[pr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[pr]=t:delete r[pr],n}:function(r){return ar.call(r)},vr=Number,Er=vr.prototype.toString;var dr=ur();function br(r){return"object"==typeof r&&(r instanceof vr||(dr?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Number]"===gr(r)))}function hr(r){return ir(r)||br(r)}M(hr,"isPrimitive",ir),M(hr,"isObject",br);var yr=Number.POSITIVE_INFINITY,wr=vr.NEGATIVE_INFINITY;function mr(r){return r<yr&&r>wr&&tr(r)}function _r(r){return ir(r)&&mr(r)}function Pr(r){return br(r)&&mr(r.valueOf())}function jr(r){return _r(r)||Pr(r)}function Rr(r){return"string"==typeof r}M(jr,"isPrimitive",_r),M(jr,"isObject",Pr);var Fr=String.prototype.valueOf;var Or=ur();function xr(r){return"object"==typeof r&&(r instanceof String||(Or?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===gr(r)))}function Xr(r){return Rr(r)||xr(r)}M(Xr,"isPrimitive",Rr),M(Xr,"isObject",xr);var Gr=Object.freeze({__proto__:null,default:Xr,isPrimitive:Rr,isObject:xr});function Sr(r){return r!=r}function Ar(r){return ir(r)&&Sr(r)}function Tr(r){return br(r)&&Sr(r.valueOf())}function $r(r){return Ar(r)||Tr(r)}M($r,"isPrimitive",Ar),M($r,"isObject",Tr);var Br=Object.freeze({__proto__:null,default:function(r,e,t){var n,i,o;if(!nr(r)&&!Rr(r))throw new TypeError($("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!_r(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(Rr(r)){if(!Rr(e))throw new TypeError($("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,i)}if(n=r.length,Ar(e)){for(o=i;o<n;o++)if(Ar(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1}}),Vr=n(Br),Dr=n(V),Ir=Vr,zr=Dr,kr=q,Cr=K,Nr=rr,Zr=["posix","win32"];var Wr=function(r){if(arguments.length>0&&!Ir(Zr,r))throw new Error(zr('invalid argument. Must be one of the following: "%s". Value: `%s`.',Zr.join('", "'),r));return"win32"===r||Nr?Cr():kr()},Mr=U,Ur=q.REGEXP,Lr=K.REGEXP,Hr=Wr;Mr(Hr,"REGEXP",rr?Lr:Ur),Mr(Hr,"REGEXP_POSIX",Ur),Mr(Hr,"REGEXP_WIN32",Lr);var qr=Hr,Yr=Vr,Jr=Dr,Kr=["full","shorthand","either"];var Qr=function(r){if(arguments.length>0&&!Yr(Kr,r))throw new Error(Jr('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',Kr.join('", "'),r));return"shorthand"===r?/^[0-9A-F]{3}$/i:"either"===r?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},re=U,ee=Qr;re(ee,"REGEXP",/^[0-9A-F]{6}$/i),re(ee,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),re(ee,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var te=ee;var ne=Array.isArray?Array.isArray:function(r){return"[object Array]"===gr(r)};var ie=/./;function oe(r){return"boolean"==typeof r}var ue=Boolean,ae=Boolean.prototype.toString;var ce=ur();function fe(r){return"object"==typeof r&&(r instanceof ue||(ce?function(r){try{return ae.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===gr(r)))}function le(r){return oe(r)||fe(r)}M(le,"isPrimitive",oe),M(le,"isObject",fe);var se=Object.freeze({__proto__:null,default:le,isPrimitive:oe,isObject:fe});function pe(){return new Function("return this;")()}var ge="object"==typeof self?self:null,ve="object"==typeof window?window:null,Ee="object"==typeof global?global:null,de="object"==typeof globalThis?globalThis:null;var be=function(r){if(arguments.length){if(!oe(r))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pe()}if(de)return de;if(ge)return ge;if(ve)return ve;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),he=be.document&&be.document.childNodes,ye=Int8Array;function we(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;function _e(r){return null!==r&&"object"==typeof r}function Pe(r){var e,t,n,i;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=me.exec(n.toString()))return e[1]}return _e(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(we,"REGEXP",me),M(_e,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ne(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(_e));var je="function"==typeof ie||"object"==typeof ye||"function"==typeof he?function(r){return Pe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pe(r).toLowerCase():e};function Re(r){return"function"===je(r)}var Fe,Oe=Object,xe=Object.getPrototypeOf;Fe=Re(Object.getPrototypeOf)?xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===gr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Xe=Fe;var Ge=Object.prototype;var Se=Object.freeze({__proto__:null,default:function(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!ne(r)}(r)&&(e=function(r){return null==r?null:(r=Oe(r),Xe(r))}(r),!e||!fr(r,"constructor")&&fr(e,"constructor")&&Re(e.constructor)&&"[object Function]"===gr(e.constructor)&&fr(e,"isPrototypeOf")&&Re(e.isPrototypeOf)&&(e===Ge||function(r){var e;for(e in r)if(!fr(r,e))return!1;return!0}(r)))}}),Ae=n(Se),Te=n(lr),$e=n(se),Be=n(Gr),Ve=Ae,De=Te,Ie=$e.isPrimitive,ze=Be.isPrimitive,ke=Dr;var Ce=function(r,e){return Ve(e)?De(e,"flags")&&(r.flags=e.flags,!ze(r.flags))?new TypeError(ke("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):De(e,"capture")&&(r.capture=e.capture,!Ie(r.capture))?new TypeError(ke("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(ke("invalid argument. Options argument must be an object. Value: `%s`.",e))},Ne="[-+]{0,1}[0-9]*\\.[0-9]+";var Ze=function(r){var e,t;if(arguments.length>0){if(t=Ce(e={},r))throw t;return e.capture?new RegExp("("+Ne+")",e.flags):new RegExp(Ne,e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},We=U,Me=Ze,Ue=Ze({capture:!0});We(Me,"REGEXP",Ze()),We(Me,"REGEXP_CAPTURE",Ue);var Le=Me;var He=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},qe=He;U(qe,"REGEXP",He());var Ye=qe;var Je=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},Ke=Je;U(Ke,"REGEXP",Je());var Qe=Ke,rt=Vr,et=Dr,tt=Ye,nt=Qe,it=rr,ot=["posix","win32"];var ut=function(r){if(arguments.length>0&&!rt(ot,r))throw new Error(et('invalid argument.  Must be one of the following: "%s". Value: `%s`.',ot.join('", "'),r));return"win32"===r||it?nt():tt()},at=U,ct=Ye.REGEXP,ft=Qe.REGEXP,lt=ut;at(lt,"REGEXP",rr?ft:ct),at(lt,"REGEXP_POSIX",ct),at(lt,"REGEXP_WIN32",ft);var st=lt,pt=Ae,gt=Te,vt=$e.isPrimitive,Et=Be.isPrimitive,dt=Dr;var bt=function(r,e){return pt(e)?gt(e,"flags")&&(r.flags=e.flags,!Et(r.flags))?new TypeError(dt("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):gt(e,"capture")&&(r.capture=e.capture,!vt(r.capture))?new TypeError(dt("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(dt("invalid argument. Options argument must be an object. Value: `%s`.",e))},ht="\\r?\\n";var yt=function(r){var e,t;if(arguments.length>0){if(t=bt(e={},r))throw t;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp(ht,e.flags)}return/\r?\n/},wt=U,mt=yt,_t=yt({capture:!0});wt(mt,"REGEXP",yt()),wt(mt,"REGEXP_CAPTURE",_t);var Pt=mt;var jt=function(){return/^\\\\\?\\.+/},Rt=jt;U(Rt,"REGEXP",jt());var Ft=Rt;var Ot=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},xt=Ot;U(xt,"REGEXP",Ot());var Xt=xt;var Gt=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},St=Gt;U(St,"REGEXP",Gt());var At=St,Tt=Vr,$t=Dr,Bt=Xt,Vt=At,Dt=rr,It=["posix","win32"];var zt=function(r){if(arguments.length>0&&!Tt(It,r))throw new Error($t('invalid argument. Must be one of the following: "%s". Value: `%s`.',It.join('", "'),r));return"win32"===r||Dt?Vt():Bt()},kt=U,Ct=Xt.REGEXP,Nt=At.REGEXP,Zt=zt;kt(Zt,"REGEXP",rr?Nt:Ct),kt(Zt,"REGEXP_POSIX",Ct),kt(Zt,"REGEXP_WIN32",Nt);var Wt=Zt;var Mt=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Ut=Mt;U(Ut,"REGEXP",Mt());var Lt=Ut;var Ht=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},qt=Ht;U(qt,"REGEXP",Ht());var Yt=qt,Jt=Vr,Kt=Dr,Qt=Lt,rn=Yt,en=rr,tn=["posix","win32"];var nn=function(r){if(arguments.length>0&&!Jt(tn,r))throw new Error(Kt('invalid argument. Must be one of the following: "%s". Value: `%s`.',tn.join('", "'),r));return"win32"===r||en?rn():Qt()},on=U,un=Lt.REGEXP,an=Yt.REGEXP,cn=nn;on(cn,"REGEXP",rr?an:un),on(cn,"REGEXP_POSIX",un),on(cn,"REGEXP_WIN32",an);var fn=cn;var ln=function(){return/^\s*function\s*([^(]*)/i},sn=ln;U(sn,"REGEXP",ln());var pn=sn,gn=Function,vn=n(Object.freeze({__proto__:null,default:gn})),En=Function.prototype.toString;var dn=vn,bn=n(Object.freeze({__proto__:null,default:function(r){return En.call(r)}}));var hn=function(){var r="";return r="^"+(r=(r=(r+=bn(dn)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(r)},yn=hn;U(yn,"REGEXP",hn());var wn=yn;var mn=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},_n=mn;U(_n,"REGEXP",mn());var Pn=_n;var jn=function(r,e){return e&&"RegExp"===e.type&&e.pattern?new RegExp(e.pattern,e.flags):e};var Rn=function(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/},Fn=Rn;U(Fn,"REGEXP",Rn());var On=Fn,xn=RegExp.prototype.exec;var Xn=ur();var Gn=n(Object.freeze({__proto__:null,default:function(r){return"object"==typeof r&&(r instanceof RegExp||(Xn?function(r){try{return xn.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===gr(r)))}})),Sn=Dr,An="/".charCodeAt(0);var Tn=function(r){var e;if(!Gn(r))throw new TypeError(Sn("invalid argument. Must provide a regular expression. Value: `%s`.",r));for(e=(r=r.toString()).length-1;e>=0&&r.charCodeAt(e)!==An;e--);return{type:"RegExp",pattern:r.substring(1,e),flags:r.substring(e+1)}};var $n=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},Bn=$n;U(Bn,"REGEXP",$n());var Vn=Bn;var Dn=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},In=Dn;U(In,"REGEXP",Dn());var zn=In;var kn=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},Cn=kn;U(Cn,"REGEXP",kn());var Nn=Cn,Zn=Ae,Wn=Te,Mn=$e.isPrimitive,Un=Be.isPrimitive,Ln=Dr;var Hn=function(r,e){return Zn(e)?Wn(e,"flags")&&(r.flags=e.flags,!Un(r.flags))?new TypeError(Ln("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Wn(e,"capture")&&(r.capture=e.capture,!Mn(r.capture))?new TypeError(Ln("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Ln("invalid argument. Options argument must be an object. Value: `%s`.",e))},qn="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var Yn=function(r){var e,t;if(arguments.length>0){if(t=Hn(e={},r))throw t;return e.capture?new RegExp("("+qn+")",e.flags):new RegExp(qn,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},Jn=U,Kn=Yn,Qn=Yn({capture:!0});Jn(Kn,"REGEXP",Yn()),Jn(Kn,"REGEXP_CAPTURE",Qn);var ri=Kn,ei={};return W(ei,"reBasename",qr),W(ei,"reBasenamePosix",q),W(ei,"reBasenameWindows",K),W(ei,"reColorHexadecimal",te),W(ei,"reDecimalNumber",Le),W(ei,"reDirname",st),W(ei,"reDirnamePosix",Ye),W(ei,"reDirnameWindows",Qe),W(ei,"reEOL",Pt),W(ei,"reExtendedLengthPath",Ft),W(ei,"reExtname",Wt),W(ei,"reExtnamePosix",Xt),W(ei,"reExtnameWindows",At),W(ei,"reFilename",fn),W(ei,"reFilenamePosix",Lt),W(ei,"reFilenameWindows",Yt),W(ei,"reFunctionName",pn),W(ei,"reNativeFunction",wn),W(ei,"reRegExp",Pn),W(ei,"reviveRegExp",jn),W(ei,"reSemVer",On),W(ei,"regexp2json",Tn),W(ei,"reUncPath",Vn),W(ei,"reUtf16SurrogatePair",zn),W(ei,"reUtf16UnpairedSurrogate",Nn),W(ei,"reWhitespace",ri),ei}));
//# sourceMappingURL=index.js.map
