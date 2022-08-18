// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).regexp={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,v=/e\+(\d)$/,E=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function y(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,h,"$1e"),t=g.call(t,w,"e"),t=g.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,v,"e+0$1"),t=g.call(t,E,"e-0$1"),e.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function P(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+P(n):P(n)+e}var j=String.fromCharCode,F=isNaN,R=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,u,l,s,p;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,F(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!F(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=X.exec(e);n;)(r=e.slice(i,X.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=X.lastIndex,n=X.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){return"string"==typeof e}function A(e){var r,t,n;if(!T(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var D,$=Object.freeze({__proto__:null,default:A}),B=Object.prototype,I=B.toString,N=B.__defineGetter__,V=B.__defineSetter__,k=B.__lookupGetter__,C=B.__lookupSetter__;D=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&V&&V.call(e,r,t.set),e};var W=D;function z(e,r,t){W(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function U(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function M(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=U(Object.freeze({__proto__:null,default:M}));var Z=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},H=Z;L(H,"REGEXP",Z());var Y=H;var q=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},J=q;L(J,"REGEXP",q());var K=J,Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof Q.setTimeout&&setTimeout,"function"==typeof Q.clearTimeout&&clearTimeout;function ee(e,r){this.fun=e,this.array=r}ee.prototype.run=function(){this.fun.apply(null,this.array)};var re=Q.performance||{};re.now||re.mozNow||re.msNow||re.oNow||re.webkitNow;new Date;var te="win32"==="browser",ne=U(Object.freeze({__proto__:null,default:te})),ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}function ue(e){return"number"==typeof e}var ce="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fe(){return ce&&"symbol"==typeof Symbol.toStringTag}var le=Object.prototype.toString;var se=Object.prototype.hasOwnProperty;function pe(e,r){return null!=e&&se.call(e,r)}var ge=Object.freeze({__proto__:null,default:pe}),ve="function"==typeof Symbol?Symbol.toStringTag:"";var Ee=fe()?function(e){var r,t,n;if(null==e)return le.call(e);t=e[ve],r=pe(e,ve);try{e[ve]=void 0}catch(r){return le.call(e)}return n=le.call(e),r?e[ve]=t:delete e[ve],n}:function(e){return le.call(e)},de=Number,be=de.prototype.toString;var me=fe();function we(e){return"object"==typeof e&&(e instanceof de||(me?function(e){try{return be.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ee(e)))}function he(e){return ue(e)||we(e)}M(he,"isPrimitive",ue),M(he,"isObject",we);var ye=Number.POSITIVE_INFINITY,Pe=de.NEGATIVE_INFINITY;function _e(e){return e<ye&&e>Pe&&oe(e)}function je(e){return ue(e)&&_e(e)}function Fe(e){return we(e)&&_e(e.valueOf())}function Re(e){return je(e)||Fe(e)}function Oe(e){return"string"==typeof e}M(Re,"isPrimitive",je),M(Re,"isObject",Fe);var xe=String.prototype.valueOf;var Xe=fe();function Ge(e){return"object"==typeof e&&(e instanceof String||(Xe?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ee(e)))}function Se(e){return Oe(e)||Ge(e)}M(Se,"isPrimitive",Oe),M(Se,"isObject",Ge);var Te=Object.freeze({__proto__:null,default:Se,isPrimitive:Oe,isObject:Ge});function Ae(e){return e!=e}function De(e){return ue(e)&&Ae(e)}function $e(e){return we(e)&&Ae(e.valueOf())}function Be(e){return De(e)||$e(e)}M(Be,"isPrimitive",De),M(Be,"isObject",$e);var Ie=Object.freeze({__proto__:null,default:function(e,r,t){var n,i,o;if(!ae(e)&&!Oe(e))throw new TypeError(A("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!je(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(Oe(e)){if(!Oe(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,De(r)){for(o=i;o<n;o++)if(De(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}}),Ne=U(Ie),Ve=U($),ke=Ne,Ce=Ve,We=Y,ze=K,Ue=ne,Me=["posix","win32"];var Le=function(e){if(arguments.length>0&&!ke(Me,e))throw new Error(Ce('invalid argument. Must be one of the following: "%s". Value: `%s`.',Me.join('", "'),e));return"win32"===e||Ue?ze():We()},Ze=L,He=Y.REGEXP,Ye=K.REGEXP,qe=Le;Ze(qe,"REGEXP",ne?Ye:He),Ze(qe,"REGEXP_POSIX",He),Ze(qe,"REGEXP_WIN32",Ye);var Je=qe,Ke=Ne,Qe=Ve,er=["full","shorthand","either"];var rr=function(e){if(arguments.length>0&&!Ke(er,e))throw new Error(Qe('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',er.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},tr=L,nr=rr;tr(nr,"REGEXP",/^[0-9A-F]{6}$/i),tr(nr,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),tr(nr,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var ir=nr;var or=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ee(e)};var ar=/./;function ur(e){return"boolean"==typeof e}var cr=Boolean.prototype.toString;var fr=fe();function lr(e){return"object"==typeof e&&(e instanceof Boolean||(fr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ee(e)))}function sr(e){return ur(e)||lr(e)}M(sr,"isPrimitive",ur),M(sr,"isObject",lr);var pr=Object.freeze({__proto__:null,default:sr,isPrimitive:ur,isObject:lr});function gr(){return new Function("return this;")()}var vr="object"==typeof self?self:null,Er="object"==typeof window?window:null,dr="object"==typeof Q?Q:null,br="object"==typeof globalThis?globalThis:null;var mr=function(e){if(arguments.length){if(!ur(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return gr()}if(br)return br;if(vr)return vr;if(Er)return Er;if(dr)return dr;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=mr.document&&mr.document.childNodes,hr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function _r(e){return null!==e&&"object"==typeof e}function jr(e){var r,t,n,i;if(("Object"===(t=Ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Pr.exec(n.toString()))return r[1]}return _r(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(yr,"REGEXP",Pr),M(_r,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(_r));var Fr="function"==typeof ar||"object"==typeof hr||"function"==typeof wr?function(e){return jr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?jr(e).toLowerCase():r};function Rr(e){return"function"===Fr(e)}var Or,xr=Object.getPrototypeOf;Or=Rr(Object.getPrototypeOf)?xr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Xr=Or;var Gr=Object.prototype;var Sr=Object.freeze({__proto__:null,default:function(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!or(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),Xr(e))}(e),!r||!pe(e,"constructor")&&pe(r,"constructor")&&Rr(r.constructor)&&"[object Function]"===Ee(r.constructor)&&pe(r,"isPrototypeOf")&&Rr(r.isPrototypeOf)&&(r===Gr||function(e){var r;for(r in e)if(!pe(e,r))return!1;return!0}(e)))}}),Tr=U(Sr),Ar=U(ge),Dr=U(pr),$r=U(Te),Br=Tr,Ir=Ar,Nr=Dr.isPrimitive,Vr=$r.isPrimitive,kr=Ve;var Cr=function(e,r){return Br(r)?Ir(r,"flags")&&(e.flags=r.flags,!Vr(e.flags))?new TypeError(kr("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Ir(r,"capture")&&(e.capture=r.capture,!Nr(e.capture))?new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r))},Wr="[-+]{0,1}[0-9]*\\.[0-9]+";var zr=function(e){var r,t;if(arguments.length>0){if(t=Cr(r={},e))throw t;return r.capture?new RegExp("("+Wr+")",r.flags):new RegExp(Wr,r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},Ur=L,Mr=zr,Lr=zr({capture:!0});Ur(Mr,"REGEXP",zr()),Ur(Mr,"REGEXP_CAPTURE",Lr);var Zr=Mr;var Hr=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},Yr=Hr;L(Yr,"REGEXP",Hr());var qr=Yr;var Jr=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},Kr=Jr;L(Kr,"REGEXP",Jr());var Qr=Kr,et=Ne,rt=Ve,tt=qr,nt=Qr,it=ne,ot=["posix","win32"];var at=function(e){if(arguments.length>0&&!et(ot,e))throw new Error(rt('invalid argument.  Must be one of the following: "%s". Value: `%s`.',ot.join('", "'),e));return"win32"===e||it?nt():tt()},ut=L,ct=qr.REGEXP,ft=Qr.REGEXP,lt=at;ut(lt,"REGEXP",ne?ft:ct),ut(lt,"REGEXP_POSIX",ct),ut(lt,"REGEXP_WIN32",ft);var st=lt,pt=Tr,gt=Ar,vt=Dr.isPrimitive,Et=$r.isPrimitive,dt=Ve;var bt=function(e,r){return pt(r)?gt(r,"flags")&&(e.flags=r.flags,!Et(e.flags))?new TypeError(dt("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):gt(r,"capture")&&(e.capture=r.capture,!vt(e.capture))?new TypeError(dt("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(dt("invalid argument. Options argument must be an object. Value: `%s`.",r))},mt="\\r?\\n";var wt=function(e){var r,t;if(arguments.length>0){if(t=bt(r={},e))throw t;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp(mt,r.flags)}return/\r?\n/},ht=L,yt=wt,Pt=wt({capture:!0});ht(yt,"REGEXP",wt()),ht(yt,"REGEXP_CAPTURE",Pt);var _t=yt;var jt=function(){return/^\\\\\?\\.+/},Ft=jt;L(Ft,"REGEXP",jt());var Rt=Ft;var Ot=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},xt=Ot;L(xt,"REGEXP",Ot());var Xt=xt;var Gt=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},St=Gt;L(St,"REGEXP",Gt());var Tt=St,At=Ne,Dt=Ve,$t=Xt,Bt=Tt,It=ne,Nt=["posix","win32"];var Vt=function(e){if(arguments.length>0&&!At(Nt,e))throw new Error(Dt('invalid argument. Must be one of the following: "%s". Value: `%s`.',Nt.join('", "'),e));return"win32"===e||It?Bt():$t()},kt=L,Ct=Xt.REGEXP,Wt=Tt.REGEXP,zt=Vt;kt(zt,"REGEXP",ne?Wt:Ct),kt(zt,"REGEXP_POSIX",Ct),kt(zt,"REGEXP_WIN32",Wt);var Ut=zt;var Mt=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Lt=Mt;L(Lt,"REGEXP",Mt());var Zt=Lt;var Ht=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},Yt=Ht;L(Yt,"REGEXP",Ht());var qt=Yt,Jt=Ne,Kt=Ve,Qt=Zt,en=qt,rn=ne,tn=["posix","win32"];var nn=function(e){if(arguments.length>0&&!Jt(tn,e))throw new Error(Kt('invalid argument. Must be one of the following: "%s". Value: `%s`.',tn.join('", "'),e));return"win32"===e||rn?en():Qt()},on=L,an=Zt.REGEXP,un=qt.REGEXP,cn=nn;on(cn,"REGEXP",ne?un:an),on(cn,"REGEXP_POSIX",an),on(cn,"REGEXP_WIN32",un);var fn=cn;var ln=function(){return/^\s*function\s*([^(]*)/i},sn=ln;L(sn,"REGEXP",ln());var pn=sn,gn=Function,vn=U(Object.freeze({__proto__:null,default:gn})),En=Function.prototype.toString;var dn=vn,bn=U(Object.freeze({__proto__:null,default:function(e){return En.call(e)}}));var mn=function(){var e="";return e="^"+(e=(e=(e+=bn(dn)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)},wn=mn;L(wn,"REGEXP",mn());var hn=wn;var yn=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},Pn=yn;L(Pn,"REGEXP",yn());var _n=Pn;var jn=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},Fn=jn;L(Fn,"REGEXP",jn());var Rn=Fn;var On=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},xn=On;L(xn,"REGEXP",On());var Xn=xn;var Gn=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},Sn=Gn;L(Sn,"REGEXP",Gn());var Tn=Sn,An=Tr,Dn=Ar,$n=Dr.isPrimitive,Bn=$r.isPrimitive,In=Ve;var Nn=function(e,r){return An(r)?Dn(r,"flags")&&(e.flags=r.flags,!Bn(e.flags))?new TypeError(In("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Dn(r,"capture")&&(e.capture=r.capture,!$n(e.capture))?new TypeError(In("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(In("invalid argument. Options argument must be an object. Value: `%s`.",r))},Vn="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var kn=function(e){var r,t;if(arguments.length>0){if(t=Nn(r={},e))throw t;return r.capture?new RegExp("("+Vn+")",r.flags):new RegExp(Vn,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},Cn=L,Wn=kn,zn=kn({capture:!0});Cn(Wn,"REGEXP",kn()),Cn(Wn,"REGEXP_CAPTURE",zn);var Un=Wn,Mn={};z(Mn,"reBasename",Je),z(Mn,"reBasenamePosix",Y),z(Mn,"reBasenameWindows",K),z(Mn,"reColorHexadecimal",ir),z(Mn,"reDecimalNumber",Zr),z(Mn,"reDirname",st),z(Mn,"reDirnamePosix",qr),z(Mn,"reDirnameWindows",Qr),z(Mn,"reEOL",_t),z(Mn,"reExtendedLengthPath",Rt),z(Mn,"reExtname",Ut),z(Mn,"reExtnamePosix",Xt),z(Mn,"reExtnameWindows",Tt),z(Mn,"reFilename",fn),z(Mn,"reFilenamePosix",Zt),z(Mn,"reFilenameWindows",qt),z(Mn,"reFunctionName",pn),z(Mn,"reNativeFunction",hn),z(Mn,"reRegExp",_n),z(Mn,"reUncPath",Rn),z(Mn,"reUtf16SurrogatePair",Xn),z(Mn,"reUtf16UnpairedSurrogate",Tn),z(Mn,"reWhitespace",Un),e.default=Mn,e.reBasename=Je,e.reBasenamePosix=Y,e.reBasenameWindows=K,e.reColorHexadecimal=ir,e.reDecimalNumber=Zr,e.reDirname=st,e.reDirnamePosix=qr,e.reDirnameWindows=Qr,e.reEOL=_t,e.reExtendedLengthPath=Rt,e.reExtname=Ut,e.reExtnamePosix=Xt,e.reExtnameWindows=Tt,e.reFilename=fn,e.reFilenamePosix=Zt,e.reFilenameWindows=qt,e.reFunctionName=pn,e.reNativeFunction=hn,e.reRegExp=_n,e.reUncPath=Rn,e.reUtf16SurrogatePair=Xn,e.reUtf16UnpairedSurrogate=Tn,e.reWhitespace=Un,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
