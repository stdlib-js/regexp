// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).regexp={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,v=/e\+(\d)$/,E=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function y(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,w,"$1e"),t=g.call(t,m,"e"),t=g.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,v,"e+0$1"),t=g.call(t,E,"e-0$1"),e.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function P(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var j=String.fromCharCode,R=isNaN,F=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,u,l,s,p;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,R(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=P(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=X.exec(e);n;)(r=e.slice(i,X.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=X.lastIndex,n=X.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function T(e){var r,t,n;if(!A(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var $,D=Object.freeze({__proto__:null,default:T}),B=Object.prototype,V=B.toString,I=B.__defineGetter__,N=B.__defineSetter__,z=B.__lookupGetter__,k=B.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||k.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var C=$;function W(e,r,t){C(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Z(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function U(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Z(Object.freeze({__proto__:null,default:U}));var L=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},H=L;M(H,"REGEXP",L());var Y=H;var q=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},J=q;M(J,"REGEXP",q());var K=J,Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof Q.setTimeout&&setTimeout,"function"==typeof Q.clearTimeout&&clearTimeout;function ee(e,r){this.fun=e,this.array=r}ee.prototype.run=function(){this.fun.apply(null,this.array)};var re=Q.performance||{};re.now||re.mozNow||re.msNow||re.oNow||re.webkitNow;new Date;var te="win32"==="browser",ne=Z(Object.freeze({__proto__:null,default:te})),ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}function ue(e){return"number"==typeof e}var ce="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fe(){return ce&&"symbol"==typeof Symbol.toStringTag}var le=Object.prototype.toString;var se=Object.prototype.hasOwnProperty;function pe(e,r){return null!=e&&se.call(e,r)}var ge=Object.freeze({__proto__:null,default:pe}),ve="function"==typeof Symbol?Symbol:void 0,Ee="function"==typeof ve?ve.toStringTag:"";var de=fe()?function(e){var r,t,n;if(null==e)return le.call(e);t=e[Ee],r=pe(e,Ee);try{e[Ee]=void 0}catch(r){return le.call(e)}return n=le.call(e),r?e[Ee]=t:delete e[Ee],n}:function(e){return le.call(e)},be=Number,he=be.prototype.toString;var me=fe();function we(e){return"object"==typeof e&&(e instanceof be||(me?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Number]"===de(e)))}function ye(e){return ue(e)||we(e)}U(ye,"isPrimitive",ue),U(ye,"isObject",we);var _e=Number.POSITIVE_INFINITY,Pe=be.NEGATIVE_INFINITY;function je(e){return e<_e&&e>Pe&&oe(e)}function Re(e){return ue(e)&&je(e)}function Fe(e){return we(e)&&je(e.valueOf())}function xe(e){return Re(e)||Fe(e)}function Oe(e){return"string"==typeof e}U(xe,"isPrimitive",Re),U(xe,"isObject",Fe);var Xe=String.prototype.valueOf;var Ge=fe();function Se(e){return"object"==typeof e&&(e instanceof String||(Ge?function(e){try{return Xe.call(e),!0}catch(e){return!1}}(e):"[object String]"===de(e)))}function Ae(e){return Oe(e)||Se(e)}U(Ae,"isPrimitive",Oe),U(Ae,"isObject",Se);var Te=Object.freeze({__proto__:null,default:Ae,isPrimitive:Oe,isObject:Se});function $e(e){return e!=e}function De(e){return ue(e)&&$e(e)}function Be(e){return we(e)&&$e(e.valueOf())}function Ve(e){return De(e)||Be(e)}U(Ve,"isPrimitive",De),U(Ve,"isObject",Be);var Ie=Object.freeze({__proto__:null,default:function(e,r,t){var n,i,o;if(!ae(e)&&!Oe(e))throw new TypeError(T("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!Re(t))throw new TypeError(T("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(Oe(e)){if(!Oe(r))throw new TypeError(T("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,De(r)){for(o=i;o<n;o++)if(De(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}}),Ne=Z(Ie),ze=Z(D),ke=Ne,Ce=ze,We=Y,Ze=K,Ue=ne,Me=["posix","win32"];var Le=function(e){if(arguments.length>0&&!ke(Me,e))throw new Error(Ce('invalid argument. Must be one of the following: "%s". Value: `%s`.',Me.join('", "'),e));return"win32"===e||Ue?Ze():We()},He=M,Ye=Y.REGEXP,qe=K.REGEXP,Je=Le;He(Je,"REGEXP",ne?qe:Ye),He(Je,"REGEXP_POSIX",Ye),He(Je,"REGEXP_WIN32",qe);var Ke=Je,Qe=Ne,er=ze,rr=["full","shorthand","either"];var tr=function(e){if(arguments.length>0&&!Qe(rr,e))throw new Error(er('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',rr.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},nr=M,ir=tr;nr(ir,"REGEXP",/^[0-9A-F]{6}$/i),nr(ir,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),nr(ir,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var or=ir;var ar=Array.isArray?Array.isArray:function(e){return"[object Array]"===de(e)};var ur=/./;function cr(e){return"boolean"==typeof e}var fr=Boolean,lr=Boolean.prototype.toString;var sr=fe();function pr(e){return"object"==typeof e&&(e instanceof fr||(sr?function(e){try{return lr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===de(e)))}function gr(e){return cr(e)||pr(e)}U(gr,"isPrimitive",cr),U(gr,"isObject",pr);var vr=Object.freeze({__proto__:null,default:gr,isPrimitive:cr,isObject:pr});function Er(){return new Function("return this;")()}var dr="object"==typeof self?self:null,br="object"==typeof window?window:null,hr="object"==typeof Q?Q:null,mr="object"==typeof globalThis?globalThis:null;var wr=function(e){if(arguments.length){if(!cr(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Er()}if(mr)return mr;if(dr)return dr;if(br)return br;if(hr)return hr;throw new Error("unexpected error. Unable to resolve global object.")}(),yr=wr.document&&wr.document.childNodes,_r=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var jr=/^\s*function\s*([^(]*)/i;function Rr(e){return null!==e&&"object"==typeof e}function Fr(e){var r,t,n,i;if(("Object"===(t=de(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=jr.exec(n.toString()))return r[1]}return Rr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(Pr,"REGEXP",jr),U(Rr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ar(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Rr));var xr="function"==typeof ur||"object"==typeof _r||"function"==typeof yr?function(e){return Fr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Fr(e).toLowerCase():r};function Or(e){return"function"===xr(e)}var Xr,Gr=Object,Sr=Object.getPrototypeOf;Xr=Or(Object.getPrototypeOf)?Sr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===de(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ar=Xr;var Tr=Object.prototype;var $r=Object.freeze({__proto__:null,default:function(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ar(e)}(e)&&(r=function(e){return null==e?null:(e=Gr(e),Ar(e))}(e),!r||!pe(e,"constructor")&&pe(r,"constructor")&&Or(r.constructor)&&"[object Function]"===de(r.constructor)&&pe(r,"isPrototypeOf")&&Or(r.isPrototypeOf)&&(r===Tr||function(e){var r;for(r in e)if(!pe(e,r))return!1;return!0}(e)))}}),Dr=Z($r),Br=Z(ge),Vr=Z(vr),Ir=Z(Te),Nr=Dr,zr=Br,kr=Vr.isPrimitive,Cr=Ir.isPrimitive,Wr=ze;var Zr=function(e,r){return Nr(r)?zr(r,"flags")&&(e.flags=r.flags,!Cr(e.flags))?new TypeError(Wr("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):zr(r,"capture")&&(e.capture=r.capture,!kr(e.capture))?new TypeError(Wr("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(Wr("invalid argument. Options argument must be an object. Value: `%s`.",r))},Ur="[-+]{0,1}[0-9]*\\.[0-9]+";var Mr=function(e){var r,t;if(arguments.length>0){if(t=Zr(r={},e))throw t;return r.capture?new RegExp("("+Ur+")",r.flags):new RegExp(Ur,r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},Lr=M,Hr=Mr,Yr=Mr({capture:!0});Lr(Hr,"REGEXP",Mr()),Lr(Hr,"REGEXP_CAPTURE",Yr);var qr=Hr;var Jr=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},Kr=Jr;M(Kr,"REGEXP",Jr());var Qr=Kr;var et=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},rt=et;M(rt,"REGEXP",et());var tt=rt,nt=Ne,it=ze,ot=Qr,at=tt,ut=ne,ct=["posix","win32"];var ft=function(e){if(arguments.length>0&&!nt(ct,e))throw new Error(it('invalid argument.  Must be one of the following: "%s". Value: `%s`.',ct.join('", "'),e));return"win32"===e||ut?at():ot()},lt=M,st=Qr.REGEXP,pt=tt.REGEXP,gt=ft;lt(gt,"REGEXP",ne?pt:st),lt(gt,"REGEXP_POSIX",st),lt(gt,"REGEXP_WIN32",pt);var vt=gt,Et=Dr,dt=Br,bt=Vr.isPrimitive,ht=Ir.isPrimitive,mt=ze;var wt=function(e,r){return Et(r)?dt(r,"flags")&&(e.flags=r.flags,!ht(e.flags))?new TypeError(mt("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):dt(r,"capture")&&(e.capture=r.capture,!bt(e.capture))?new TypeError(mt("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(mt("invalid argument. Options argument must be an object. Value: `%s`.",r))},yt="\\r?\\n";var _t=function(e){var r,t;if(arguments.length>0){if(t=wt(r={},e))throw t;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp(yt,r.flags)}return/\r?\n/},Pt=M,jt=_t,Rt=_t({capture:!0});Pt(jt,"REGEXP",_t()),Pt(jt,"REGEXP_CAPTURE",Rt);var Ft=jt;var xt=function(){return/^\\\\\?\\.+/},Ot=xt;M(Ot,"REGEXP",xt());var Xt=Ot;var Gt=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},St=Gt;M(St,"REGEXP",Gt());var At=St;var Tt=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},$t=Tt;M($t,"REGEXP",Tt());var Dt=$t,Bt=Ne,Vt=ze,It=At,Nt=Dt,zt=ne,kt=["posix","win32"];var Ct=function(e){if(arguments.length>0&&!Bt(kt,e))throw new Error(Vt('invalid argument. Must be one of the following: "%s". Value: `%s`.',kt.join('", "'),e));return"win32"===e||zt?Nt():It()},Wt=M,Zt=At.REGEXP,Ut=Dt.REGEXP,Mt=Ct;Wt(Mt,"REGEXP",ne?Ut:Zt),Wt(Mt,"REGEXP_POSIX",Zt),Wt(Mt,"REGEXP_WIN32",Ut);var Lt=Mt;var Ht=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Yt=Ht;M(Yt,"REGEXP",Ht());var qt=Yt;var Jt=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},Kt=Jt;M(Kt,"REGEXP",Jt());var Qt=Kt,en=Ne,rn=ze,tn=qt,nn=Qt,on=ne,an=["posix","win32"];var un=function(e){if(arguments.length>0&&!en(an,e))throw new Error(rn('invalid argument. Must be one of the following: "%s". Value: `%s`.',an.join('", "'),e));return"win32"===e||on?nn():tn()},cn=M,fn=qt.REGEXP,ln=Qt.REGEXP,sn=un;cn(sn,"REGEXP",ne?ln:fn),cn(sn,"REGEXP_POSIX",fn),cn(sn,"REGEXP_WIN32",ln);var pn=sn;var gn=function(){return/^\s*function\s*([^(]*)/i},vn=gn;M(vn,"REGEXP",gn());var En=vn,dn=Function,bn=Z(Object.freeze({__proto__:null,default:dn})),hn=Function.prototype.toString;var mn=bn,wn=Z(Object.freeze({__proto__:null,default:function(e){return hn.call(e)}}));var yn=function(){var e="";return e="^"+(e=(e=(e+=wn(mn)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)},_n=yn;M(_n,"REGEXP",yn());var Pn=_n;var jn=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},Rn=jn;M(Rn,"REGEXP",jn());var Fn=Rn;var xn=function(e,r){return r&&"RegExp"===r.type&&r.pattern?new RegExp(r.pattern,r.flags):r};var On=function(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/},Xn=On;M(Xn,"REGEXP",On());var Gn=Xn,Sn=RegExp.prototype.exec;var An=fe();var Tn=Z(Object.freeze({__proto__:null,default:function(e){return"object"==typeof e&&(e instanceof RegExp||(An?function(e){try{return Sn.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===de(e)))}})),$n=ze,Dn="/".charCodeAt(0);var Bn=function(e){var r;if(!Tn(e))throw new TypeError($n("invalid argument. Must provide a regular expression. Value: `%s`.",e));for(r=(e=e.toString()).length-1;r>=0&&e.charCodeAt(r)!==Dn;r--);return{type:"RegExp",pattern:e.substring(1,r),flags:e.substring(r+1)}};var Vn=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},In=Vn;M(In,"REGEXP",Vn());var Nn=In;var zn=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},kn=zn;M(kn,"REGEXP",zn());var Cn=kn;var Wn=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},Zn=Wn;M(Zn,"REGEXP",Wn());var Un=Zn,Mn=Dr,Ln=Br,Hn=Vr.isPrimitive,Yn=Ir.isPrimitive,qn=ze;var Jn=function(e,r){return Mn(r)?Ln(r,"flags")&&(e.flags=r.flags,!Yn(e.flags))?new TypeError(qn("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Ln(r,"capture")&&(e.capture=r.capture,!Hn(e.capture))?new TypeError(qn("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(qn("invalid argument. Options argument must be an object. Value: `%s`.",r))},Kn="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var Qn=function(e){var r,t;if(arguments.length>0){if(t=Jn(r={},e))throw t;return r.capture?new RegExp("("+Kn+")",r.flags):new RegExp(Kn,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},ei=M,ri=Qn,ti=Qn({capture:!0});ei(ri,"REGEXP",Qn()),ei(ri,"REGEXP_CAPTURE",ti);var ni=ri,ii={};W(ii,"reBasename",Ke),W(ii,"reBasenamePosix",Y),W(ii,"reBasenameWindows",K),W(ii,"reColorHexadecimal",or),W(ii,"reDecimalNumber",qr),W(ii,"reDirname",vt),W(ii,"reDirnamePosix",Qr),W(ii,"reDirnameWindows",tt),W(ii,"reEOL",Ft),W(ii,"reExtendedLengthPath",Xt),W(ii,"reExtname",Lt),W(ii,"reExtnamePosix",At),W(ii,"reExtnameWindows",Dt),W(ii,"reFilename",pn),W(ii,"reFilenamePosix",qt),W(ii,"reFilenameWindows",Qt),W(ii,"reFunctionName",En),W(ii,"reNativeFunction",Pn),W(ii,"reRegExp",Fn),W(ii,"reviveRegExp",xn),W(ii,"reSemVer",Gn),W(ii,"regexp2json",Bn),W(ii,"reUncPath",Nn),W(ii,"reUtf16SurrogatePair",Cn),W(ii,"reUtf16UnpairedSurrogate",Un),W(ii,"reWhitespace",ni),e.default=ii,e.reBasename=Ke,e.reBasenamePosix=Y,e.reBasenameWindows=K,e.reColorHexadecimal=or,e.reDecimalNumber=qr,e.reDirname=vt,e.reDirnamePosix=Qr,e.reDirnameWindows=tt,e.reEOL=Ft,e.reExtendedLengthPath=Xt,e.reExtname=Lt,e.reExtnamePosix=At,e.reExtnameWindows=Dt,e.reFilename=pn,e.reFilenamePosix=qt,e.reFilenameWindows=Qt,e.reFunctionName=En,e.reNativeFunction=Pn,e.reRegExp=Fn,e.reSemVer=Gn,e.reUncPath=Nn,e.reUtf16SurrogatePair=Cn,e.reUtf16UnpairedSurrogate=Un,e.reWhitespace=ni,e.regexp2json=Bn,e.reviveRegExp=xn,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
