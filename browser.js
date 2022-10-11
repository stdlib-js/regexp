// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).regexp={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,v=/e\+(\d)$/,E=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function y(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,w,"$1e"),t=g.call(t,m,"e"),t=g.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,v,"e+0$1"),t=g.call(t,E,"e-0$1"),e.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function P(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var j=String.fromCharCode,R=isNaN,F=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,u,l,s,p;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,R(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=P(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=X.exec(e);n;)(r=e.slice(i,X.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=X.lastIndex,n=X.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function T(e){var r,t,n;if(!A(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var $,D=Object.freeze({__proto__:null,default:T}),B=Object.prototype,V=B.toString,I=B.__defineGetter__,N=B.__defineSetter__,z=B.__lookupGetter__,k=B.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||k.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var C=$;function W(e,r,t){C(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Z(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function U(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Z(Object.freeze({__proto__:null,default:U}));var L=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},H=L;M(H,"REGEXP",L());var Y=H;var q=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},J=q;M(J,"REGEXP",q());var K=J,Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof Q.setTimeout&&setTimeout,"function"==typeof Q.clearTimeout&&clearTimeout;function ee(e,r){this.fun=e,this.array=r}ee.prototype.run=function(){this.fun.apply(null,this.array)};var re=Q.performance||{};re.now||re.mozNow||re.msNow||re.oNow||re.webkitNow;new Date;var te="win32"==="browser",ne=Z(Object.freeze({__proto__:null,default:te})),ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}function ue(e){return"number"==typeof e}var ce="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fe(){return ce&&"symbol"==typeof Symbol.toStringTag}var le=Object.prototype.toString;var se=Object.prototype.hasOwnProperty;function pe(e,r){return null!=e&&se.call(e,r)}var ge=Object.freeze({__proto__:null,default:pe}),ve="function"==typeof Symbol?Symbol.toStringTag:"";var Ee=fe()?function(e){var r,t,n;if(null==e)return le.call(e);t=e[ve],r=pe(e,ve);try{e[ve]=void 0}catch(r){return le.call(e)}return n=le.call(e),r?e[ve]=t:delete e[ve],n}:function(e){return le.call(e)},de=Number,be=de.prototype.toString;var he=fe();function me(e){return"object"==typeof e&&(e instanceof de||(he?function(e){try{return be.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ee(e)))}function we(e){return ue(e)||me(e)}U(we,"isPrimitive",ue),U(we,"isObject",me);var ye=Number.POSITIVE_INFINITY,_e=de.NEGATIVE_INFINITY;function Pe(e){return e<ye&&e>_e&&oe(e)}function je(e){return ue(e)&&Pe(e)}function Re(e){return me(e)&&Pe(e.valueOf())}function Fe(e){return je(e)||Re(e)}function xe(e){return"string"==typeof e}U(Fe,"isPrimitive",je),U(Fe,"isObject",Re);var Oe=String.prototype.valueOf;var Xe=fe();function Ge(e){return"object"==typeof e&&(e instanceof String||(Xe?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ee(e)))}function Se(e){return xe(e)||Ge(e)}U(Se,"isPrimitive",xe),U(Se,"isObject",Ge);var Ae=Object.freeze({__proto__:null,default:Se,isPrimitive:xe,isObject:Ge});function Te(e){return e!=e}function $e(e){return ue(e)&&Te(e)}function De(e){return me(e)&&Te(e.valueOf())}function Be(e){return $e(e)||De(e)}U(Be,"isPrimitive",$e),U(Be,"isObject",De);var Ve=Object.freeze({__proto__:null,default:function(e,r,t){var n,i,o;if(!ae(e)&&!xe(e))throw new TypeError(T("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!je(t))throw new TypeError(T("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(xe(e)){if(!xe(r))throw new TypeError(T("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,$e(r)){for(o=i;o<n;o++)if($e(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}}),Ie=Z(Ve),Ne=Z(D),ze=Ie,ke=Ne,Ce=Y,We=K,Ze=ne,Ue=["posix","win32"];var Me=function(e){if(arguments.length>0&&!ze(Ue,e))throw new Error(ke('invalid argument. Must be one of the following: "%s". Value: `%s`.',Ue.join('", "'),e));return"win32"===e||Ze?We():Ce()},Le=M,He=Y.REGEXP,Ye=K.REGEXP,qe=Me;Le(qe,"REGEXP",ne?Ye:He),Le(qe,"REGEXP_POSIX",He),Le(qe,"REGEXP_WIN32",Ye);var Je=qe,Ke=Ie,Qe=Ne,er=["full","shorthand","either"];var rr=function(e){if(arguments.length>0&&!Ke(er,e))throw new Error(Qe('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',er.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},tr=M,nr=rr;tr(nr,"REGEXP",/^[0-9A-F]{6}$/i),tr(nr,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),tr(nr,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var ir=nr;var or=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ee(e)};var ar=/./;function ur(e){return"boolean"==typeof e}var cr=Boolean,fr=Boolean.prototype.toString;var lr=fe();function sr(e){return"object"==typeof e&&(e instanceof cr||(lr?function(e){try{return fr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ee(e)))}function pr(e){return ur(e)||sr(e)}U(pr,"isPrimitive",ur),U(pr,"isObject",sr);var gr=Object.freeze({__proto__:null,default:pr,isPrimitive:ur,isObject:sr});function vr(){return new Function("return this;")()}var Er="object"==typeof self?self:null,dr="object"==typeof window?window:null,br="object"==typeof globalThis?globalThis:null;var hr=function(e){if(arguments.length){if(!ur(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return vr()}if(br)return br;if(Er)return Er;if(dr)return dr;throw new Error("unexpected error. Unable to resolve global object.")}(),mr=hr.document&&hr.document.childNodes,wr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var _r=/^\s*function\s*([^(]*)/i;function Pr(e){return null!==e&&"object"==typeof e}function jr(e){var r,t,n,i;if(("Object"===(t=Ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_r.exec(n.toString()))return r[1]}return Pr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(yr,"REGEXP",_r),U(Pr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pr));var Rr="function"==typeof ar||"object"==typeof wr||"function"==typeof mr?function(e){return jr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?jr(e).toLowerCase():r};function Fr(e){return"function"===Rr(e)}var xr,Or=Object,Xr=Object.getPrototypeOf;xr=Fr(Object.getPrototypeOf)?Xr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Gr=xr;var Sr=Object.prototype;var Ar=Object.freeze({__proto__:null,default:function(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!or(e)}(e)&&(r=function(e){return null==e?null:(e=Or(e),Gr(e))}(e),!r||!pe(e,"constructor")&&pe(r,"constructor")&&Fr(r.constructor)&&"[object Function]"===Ee(r.constructor)&&pe(r,"isPrototypeOf")&&Fr(r.isPrototypeOf)&&(r===Sr||function(e){var r;for(r in e)if(!pe(e,r))return!1;return!0}(e)))}}),Tr=Z(Ar),$r=Z(ge),Dr=Z(gr),Br=Z(Ae),Vr=Tr,Ir=$r,Nr=Dr.isPrimitive,zr=Br.isPrimitive,kr=Ne;var Cr=function(e,r){return Vr(r)?Ir(r,"flags")&&(e.flags=r.flags,!zr(e.flags))?new TypeError(kr("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Ir(r,"capture")&&(e.capture=r.capture,!Nr(e.capture))?new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r))},Wr="[-+]{0,1}[0-9]*\\.[0-9]+";var Zr=function(e){var r,t;if(arguments.length>0){if(t=Cr(r={},e))throw t;return r.capture?new RegExp("("+Wr+")",r.flags):new RegExp(Wr,r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},Ur=M,Mr=Zr,Lr=Zr({capture:!0});Ur(Mr,"REGEXP",Zr()),Ur(Mr,"REGEXP_CAPTURE",Lr);var Hr=Mr;var Yr=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},qr=Yr;M(qr,"REGEXP",Yr());var Jr=qr;var Kr=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},Qr=Kr;M(Qr,"REGEXP",Kr());var et=Qr,rt=Ie,tt=Ne,nt=Jr,it=et,ot=ne,at=["posix","win32"];var ut=function(e){if(arguments.length>0&&!rt(at,e))throw new Error(tt('invalid argument.  Must be one of the following: "%s". Value: `%s`.',at.join('", "'),e));return"win32"===e||ot?it():nt()},ct=M,ft=Jr.REGEXP,lt=et.REGEXP,st=ut;ct(st,"REGEXP",ne?lt:ft),ct(st,"REGEXP_POSIX",ft),ct(st,"REGEXP_WIN32",lt);var pt=st,gt=Tr,vt=$r,Et=Dr.isPrimitive,dt=Br.isPrimitive,bt=Ne;var ht=function(e,r){return gt(r)?vt(r,"flags")&&(e.flags=r.flags,!dt(e.flags))?new TypeError(bt("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):vt(r,"capture")&&(e.capture=r.capture,!Et(e.capture))?new TypeError(bt("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(bt("invalid argument. Options argument must be an object. Value: `%s`.",r))},mt="\\r?\\n";var wt=function(e){var r,t;if(arguments.length>0){if(t=ht(r={},e))throw t;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp(mt,r.flags)}return/\r?\n/},yt=M,_t=wt,Pt=wt({capture:!0});yt(_t,"REGEXP",wt()),yt(_t,"REGEXP_CAPTURE",Pt);var jt=_t;var Rt=function(){return/^\\\\\?\\.+/},Ft=Rt;M(Ft,"REGEXP",Rt());var xt=Ft;var Ot=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Xt=Ot;M(Xt,"REGEXP",Ot());var Gt=Xt;var St=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},At=St;M(At,"REGEXP",St());var Tt=At,$t=Ie,Dt=Ne,Bt=Gt,Vt=Tt,It=ne,Nt=["posix","win32"];var zt=function(e){if(arguments.length>0&&!$t(Nt,e))throw new Error(Dt('invalid argument. Must be one of the following: "%s". Value: `%s`.',Nt.join('", "'),e));return"win32"===e||It?Vt():Bt()},kt=M,Ct=Gt.REGEXP,Wt=Tt.REGEXP,Zt=zt;kt(Zt,"REGEXP",ne?Wt:Ct),kt(Zt,"REGEXP_POSIX",Ct),kt(Zt,"REGEXP_WIN32",Wt);var Ut=Zt;var Mt=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Lt=Mt;M(Lt,"REGEXP",Mt());var Ht=Lt;var Yt=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},qt=Yt;M(qt,"REGEXP",Yt());var Jt=qt,Kt=Ie,Qt=Ne,en=Ht,rn=Jt,tn=ne,nn=["posix","win32"];var on=function(e){if(arguments.length>0&&!Kt(nn,e))throw new Error(Qt('invalid argument. Must be one of the following: "%s". Value: `%s`.',nn.join('", "'),e));return"win32"===e||tn?rn():en()},an=M,un=Ht.REGEXP,cn=Jt.REGEXP,fn=on;an(fn,"REGEXP",ne?cn:un),an(fn,"REGEXP_POSIX",un),an(fn,"REGEXP_WIN32",cn);var ln=fn;var sn=function(){return/^\s*function\s*([^(]*)/i},pn=sn;M(pn,"REGEXP",sn());var gn=pn,vn=Function,En=Z(Object.freeze({__proto__:null,default:vn})),dn=Function.prototype.toString;var bn=En,hn=Z(Object.freeze({__proto__:null,default:function(e){return dn.call(e)}}));var mn=function(){var e="";return e="^"+(e=(e=(e+=hn(bn)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)},wn=mn;M(wn,"REGEXP",mn());var yn=wn;var _n=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},Pn=_n;M(Pn,"REGEXP",_n());var jn=Pn;var Rn=function(e,r){return r&&"RegExp"===r.type&&r.pattern?new RegExp(r.pattern,r.flags):r};var Fn=function(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/},xn=Fn;M(xn,"REGEXP",Fn());var On=xn,Xn=RegExp.prototype.exec;var Gn=fe();var Sn=Z(Object.freeze({__proto__:null,default:function(e){return"object"==typeof e&&(e instanceof RegExp||(Gn?function(e){try{return Xn.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===Ee(e)))}})),An=Ne,Tn="/".charCodeAt(0);var $n=function(e){var r;if(!Sn(e))throw new TypeError(An("invalid argument. Must provide a regular expression. Value: `%s`.",e));for(r=(e=e.toString()).length-1;r>=0&&e.charCodeAt(r)!==Tn;r--);return{type:"RegExp",pattern:e.substring(1,r),flags:e.substring(r+1)}};var Dn=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},Bn=Dn;M(Bn,"REGEXP",Dn());var Vn=Bn;var In=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},Nn=In;M(Nn,"REGEXP",In());var zn=Nn;var kn=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},Cn=kn;M(Cn,"REGEXP",kn());var Wn=Cn,Zn=Tr,Un=$r,Mn=Dr.isPrimitive,Ln=Br.isPrimitive,Hn=Ne;var Yn=function(e,r){return Zn(r)?Un(r,"flags")&&(e.flags=r.flags,!Ln(e.flags))?new TypeError(Hn("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Un(r,"capture")&&(e.capture=r.capture,!Mn(e.capture))?new TypeError(Hn("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(Hn("invalid argument. Options argument must be an object. Value: `%s`.",r))},qn="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var Jn=function(e){var r,t;if(arguments.length>0){if(t=Yn(r={},e))throw t;return r.capture?new RegExp("("+qn+")",r.flags):new RegExp(qn,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},Kn=M,Qn=Jn,ei=Jn({capture:!0});Kn(Qn,"REGEXP",Jn()),Kn(Qn,"REGEXP_CAPTURE",ei);var ri=Qn,ti={};W(ti,"reBasename",Je),W(ti,"reBasenamePosix",Y),W(ti,"reBasenameWindows",K),W(ti,"reColorHexadecimal",ir),W(ti,"reDecimalNumber",Hr),W(ti,"reDirname",pt),W(ti,"reDirnamePosix",Jr),W(ti,"reDirnameWindows",et),W(ti,"reEOL",jt),W(ti,"reExtendedLengthPath",xt),W(ti,"reExtname",Ut),W(ti,"reExtnamePosix",Gt),W(ti,"reExtnameWindows",Tt),W(ti,"reFilename",ln),W(ti,"reFilenamePosix",Ht),W(ti,"reFilenameWindows",Jt),W(ti,"reFunctionName",gn),W(ti,"reNativeFunction",yn),W(ti,"reRegExp",jn),W(ti,"reviveRegExp",Rn),W(ti,"reSemVer",On),W(ti,"regexp2json",$n),W(ti,"reUncPath",Vn),W(ti,"reUtf16SurrogatePair",zn),W(ti,"reUtf16UnpairedSurrogate",Wn),W(ti,"reWhitespace",ri),e.default=ti,e.reBasename=Je,e.reBasenamePosix=Y,e.reBasenameWindows=K,e.reColorHexadecimal=ir,e.reDecimalNumber=Hr,e.reDirname=pt,e.reDirnamePosix=Jr,e.reDirnameWindows=et,e.reEOL=jt,e.reExtendedLengthPath=xt,e.reExtname=Ut,e.reExtnamePosix=Gt,e.reExtnameWindows=Tt,e.reFilename=ln,e.reFilenamePosix=Ht,e.reFilenameWindows=Jt,e.reFunctionName=gn,e.reNativeFunction=yn,e.reRegExp=jn,e.reSemVer=On,e.reUncPath=Vn,e.reUtf16SurrogatePair=zn,e.reUtf16UnpairedSurrogate=Wn,e.reWhitespace=ri,e.regexp2json=$n,e.reviveRegExp=Rn,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
