// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).regexp=e()}(this,(function(){"use strict";function r(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty;var i=function(r){return"number"==typeof r};function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}var a=function(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r},u=i,c=a,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase;var l=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t};var p=function(r){return"string"==typeof r},v=i,g=Math.abs,E=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,m=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,P=/\.0$/,R=/\.0*e/,F=/(\..*[^0])0*e/;var j=function(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,F,"$1e"),t=h.call(t,R,"e"),t=h.call(t,P,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,m,"e+0$1"),t=h.call(t,w,"e-0$1"),r.alternate&&(t=h.call(t,b,"$1."),t=h.call(t,y,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):E.call(t)};function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=l,O=p,X=j,G=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r},x=a,S=String.fromCharCode,A=isNaN,$=Array.isArray;function D(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}var B=function(r){var e,t,n,i,o,a,u,c,s;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],O(n))a+=n;else{if(e=void 0!==n.precision,!(n=D(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,A(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=X(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=x(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=G(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}var V=B,N=function(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t},C=function(r){return"string"==typeof r};var L=function r(e){var t,n,i;if(!C(e))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=N(e),(n=new Array(arguments.length))[0]=t,i=1;i<n.length;i++)n[i]=arguments[i];return V.apply(null,n)},M=L,W=M,U=Object.prototype,Z=U.toString,z=U.__defineGetter__,H=U.__defineSetter__,Y=U.__lookupGetter__,q=U.__lookupSetter__;var J,K=function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(r,e)||q.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r},Q=n,rr=K,er=(J=t()?Q:rr,J);var tr=function(r,e,t){er(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},nr=tr,ir=J;var or=function(r,e,t){ir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},ar=or;var ur=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},cr=ur;ar(cr,"REGEXP",ur());var sr=cr;var fr=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},lr=fr;ar(lr,"REGEXP",fr());var pr=lr,vr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function gr(){throw new Error("setTimeout has not been defined")}function Er(){throw new Error("clearTimeout has not been defined")}var dr=gr,hr=Er;function mr(r){if(dr===setTimeout)return setTimeout(r,0);if((dr===gr||!dr)&&setTimeout)return dr=setTimeout,setTimeout(r,0);try{return dr(r,0)}catch(e){try{return dr.call(null,r,0)}catch(e){return dr.call(this,r,0)}}}"function"==typeof vr.setTimeout&&(dr=setTimeout),"function"==typeof vr.clearTimeout&&(hr=clearTimeout);var wr,br=[],yr=!1,Pr=-1;function Rr(){yr&&wr&&(yr=!1,wr.length?br=wr.concat(br):Pr=-1,br.length&&Fr())}function Fr(){if(!yr){var r=mr(Rr);yr=!0;for(var e=br.length;e;){for(wr=br,br=[];++Pr<e;)wr&&wr[Pr].run();Pr=-1,e=br.length}wr=null,yr=!1,function(r){if(hr===clearTimeout)return clearTimeout(r);if((hr===Er||!hr)&&clearTimeout)return hr=clearTimeout,clearTimeout(r);try{hr(r)}catch(e){try{return hr.call(null,r)}catch(e){return hr.call(this,r)}}}(r)}}function jr(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];br.push(new _r(r,e)),1!==br.length||yr||mr(Fr)}function _r(r,e){this.fun=r,this.array=e}_r.prototype.run=function(){this.fun.apply(null,this.array)};var Tr="browser",Or="browser",Xr={},Gr=[],xr={},Sr={},Ar={};function $r(){}var Dr=$r,Br=$r,Ir=$r,kr=$r,Vr=$r,Nr=$r,Cr=$r;function Lr(r){throw new Error("process.binding is not supported")}function Mr(){return"/"}function Wr(r){throw new Error("process.chdir is not supported")}function Ur(){return 0}var Zr=vr.performance||{},zr=Zr.now||Zr.mozNow||Zr.msNow||Zr.oNow||Zr.webkitNow||function(){return(new Date).getTime()};function Hr(r){var e=.001*zr.call(Zr),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var Yr=new Date;function qr(){return(new Date-Yr)/1e3}var Jr={nextTick:jr,title:Tr,browser:true,env:Xr,argv:Gr,version:"",versions:xr,on:Dr,addListener:Br,once:Ir,off:kr,removeListener:Vr,removeAllListeners:Nr,emit:Cr,binding:Lr,cwd:Mr,chdir:Wr,umask:Ur,hrtime:Hr,platform:Or,release:Sr,config:Ar,uptime:qr},Kr="win32"===r(Object.freeze({__proto__:null,addListener:Br,argv:Gr,binding:Lr,browser:true,chdir:Wr,config:Ar,cwd:Mr,default:Jr,emit:Cr,env:Xr,hrtime:Hr,nextTick:jr,off:kr,on:Dr,once:Ir,platform:Or,release:Sr,removeAllListeners:Nr,removeListener:Vr,title:Tr,umask:Ur,uptime:qr,version:"",versions:xr})).platform,Qr=Math.floor;var re=function(r){return Qr(r)===r},ee=re;var te=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ee(r.length)&&r.length>=0&&r.length<=9007199254740991};var ne=function(r){return"number"==typeof r};var ie=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var oe=function(){return ie&&"symbol"==typeof Symbol.toStringTag},ae=Object.prototype.toString,ue=ae;var ce=function(r){return ue.call(r)},se=Object.prototype.hasOwnProperty;var fe=function(r,e){return null!=r&&se.call(r,e)},le="function"==typeof Symbol?Symbol.toStringTag:"",pe=fe,ve=le,ge=ae;var Ee=ce,de=function(r){var e,t,n;if(null==r)return ge.call(r);t=r[ve],e=pe(r,ve);try{r[ve]=void 0}catch(e){return ge.call(r)}return n=ge.call(r),e?r[ve]=t:delete r[ve],n},he=oe()?de:Ee,me=Number,we=me.prototype.toString;var be=he,ye=me,Pe=function(r){try{return we.call(r),!0}catch(r){return!1}},Re=oe();var Fe=function(r){return"object"==typeof r&&(r instanceof ye||(Re?Pe(r):"[object Number]"===be(r)))},je=ne,_e=Fe;var Te=ar,Oe=function(r){return je(r)||_e(r)},Xe=Fe;Te(Oe,"isPrimitive",ne),Te(Oe,"isObject",Xe);var Ge=Oe,xe=Number.POSITIVE_INFINITY,Se=me.NEGATIVE_INFINITY,Ae=xe,$e=Se,De=re;var Be=function(r){return r<Ae&&r>$e&&De(r)},Ie=Ge.isPrimitive,ke=Be;var Ve=function(r){return Ie(r)&&ke(r)},Ne=Ge.isObject,Ce=Be;var Le=function(r){return Ne(r)&&Ce(r.valueOf())},Me=Ve,We=Le;var Ue=ar,Ze=function(r){return Me(r)||We(r)},ze=Le;Ue(Ze,"isPrimitive",Ve),Ue(Ze,"isObject",ze);var He=Ze;var Ye=function(r){return"string"==typeof r},qe=String.prototype.valueOf;var Je=he,Ke=function(r){try{return qe.call(r),!0}catch(r){return!1}},Qe=oe();var rt=function(r){return"object"==typeof r&&(r instanceof String||(Qe?Ke(r):"[object String]"===Je(r)))},et=Ye,tt=rt;var nt=ar,it=function(r){return et(r)||tt(r)},ot=rt;nt(it,"isPrimitive",Ye),nt(it,"isObject",ot);var at=it;var ut=function(r){return r!=r},ct=Ge.isPrimitive,st=ut;var ft=function(r){return ct(r)&&st(r)},lt=Ge.isObject,pt=ut;var vt=function(r){return lt(r)&&pt(r.valueOf())},gt=ft,Et=vt;var dt=ar,ht=function(r){return gt(r)||Et(r)},mt=vt;dt(ht,"isPrimitive",ft),dt(ht,"isObject",mt);var wt=te,bt=He.isPrimitive,yt=at.isPrimitive,Pt=ht.isPrimitive,Rt=M;var Ft=function(r,e,t){var n,i,o;if(!wt(r)&&!yt(r))throw new TypeError(Rt("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!bt(t))throw new TypeError(Rt("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(yt(r)){if(!yt(e))throw new TypeError(Rt("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,i)}if(n=r.length,Pt(e)){for(o=i;o<n;o++)if(Pt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},jt=Ft,_t=jt,Tt=M,Ot=sr,Xt=pr,Gt=Kr,xt=["posix","win32"];var St=function(r){if(arguments.length>0&&!_t(xt,r))throw new Error(Tt('invalid argument. Must be one of the following: "%s". Value: `%s`.',xt.join('", "'),r));return"win32"===r||Gt?Xt():Ot()},At=ar,$t=sr.REGEXP,Dt=pr.REGEXP,Bt=St;At(Bt,"REGEXP",Kr?Dt:$t),At(Bt,"REGEXP_POSIX",$t),At(Bt,"REGEXP_WIN32",Dt);var It=Bt,kt=jt,Vt=M,Nt=["full","shorthand","either"];var Ct=function(r){if(arguments.length>0&&!kt(Nt,r))throw new Error(Vt('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',Nt.join('", "'),r));return"shorthand"===r?/^[0-9A-F]{3}$/i:"either"===r?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},Lt=ar,Mt=Ct;Lt(Mt,"REGEXP",/^[0-9A-F]{6}$/i),Lt(Mt,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),Lt(Mt,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var Wt=Mt,Ut=he;var Zt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ut(r)},zt=Zt;var Ht=function(r){return"object"==typeof r&&null!==r&&!zt(r)},Yt=/./;var qt=function(r){return"boolean"==typeof r},Jt=Boolean.prototype.toString;var Kt=he,Qt=function(r){try{return Jt.call(r),!0}catch(r){return!1}},rn=oe();var en=function(r){return"object"==typeof r&&(r instanceof Boolean||(rn?Qt(r):"[object Boolean]"===Kt(r)))},tn=qt,nn=en;var on=ar,an=function(r){return tn(r)||nn(r)},un=en;on(an,"isPrimitive",qt),on(an,"isObject",un);var cn=an;var sn=function(){return new Function("return this;")()},fn="object"==typeof self?self:null,ln="object"==typeof window?window:null,pn="object"==typeof vr?vr:null;module.exports=pn;var vn=cn.isPrimitive,gn=M,En=sn,dn=fn,hn=ln,mn=r(Object.freeze({__proto__:null}));var wn=function(r){if(arguments.length){if(!vn(r))throw new TypeError(gn("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return En()}if(dn)return dn;if(hn)return hn;if(mn)return mn;throw new Error("unexpected error. Unable to resolve global object.")},bn=wn(),yn=bn.document&&bn.document.childNodes,Pn=Int8Array,Rn=Yt,Fn=yn,jn=Pn;var _n=function(){return"function"==typeof Rn||"object"==typeof jn||"function"==typeof Fn};var Tn=function(){return/^\s*function\s*([^(]*)/i},On=Tn;ar(On,"REGEXP",Tn());var Xn=On,Gn=Zt,xn=M;var Sn=function(r){return null!==r&&"object"==typeof r};ar(Sn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(xn("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Gn(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Sn));var An=Sn;var $n=he,Dn=Xn.REGEXP,Bn=function(r){return An(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var In=function(r){var e,t,n;if(("Object"===(t=$n(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Dn.exec(n.toString()))return e[1]}return Bn(r)?"Buffer":t},kn=In;var Vn=In;var Nn=function(r){var e;return null===r?"null":"object"===(e=typeof r)?kn(r).toLowerCase():e},Cn=function(r){return Vn(r).toLowerCase()},Ln=_n()?Cn:Nn;var Mn=function(r){return"function"===Ln(r)},Wn=Object.getPrototypeOf;var Un=function(r){return r.__proto__},Zn=he,zn=Un;var Hn=function(r){var e=zn(r);return e||null===e?e:"[object Function]"===Zn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Yn=Wn,qn=Hn,Jn=Mn(Object.getPrototypeOf)?Yn:qn;var Kn=Ht,Qn=Mn,ri=function(r){return null==r?null:(r=Object(r),Jn(r))},ei=fe,ti=he,ni=Object.prototype;var ii=function(r){var e;return!!Kn(r)&&(!(e=ri(r))||!ei(r,"constructor")&&ei(e,"constructor")&&Qn(e.constructor)&&"[object Function]"===ti(e.constructor)&&ei(e,"isPrototypeOf")&&Qn(e.isPrototypeOf)&&(e===ni||function(r){var e;for(e in r)if(!ei(r,e))return!1;return!0}(r)))},oi=ii,ai=oi,ui=fe,ci=cn.isPrimitive,si=at.isPrimitive,fi=M;var li=function(r,e){return ai(e)?ui(e,"flags")&&(r.flags=e.flags,!si(r.flags))?new TypeError(fi("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):ui(e,"capture")&&(r.capture=e.capture,!ci(r.capture))?new TypeError(fi("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(fi("invalid argument. Options argument must be an object. Value: `%s`.",e))},pi="[-+]{0,1}[0-9]*\\.[0-9]+";var vi=function(r){var e,t;if(arguments.length>0){if(t=li(e={},r))throw t;return e.capture?new RegExp("("+pi+")",e.flags):new RegExp(pi,e.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},gi=ar,Ei=vi,di=vi({capture:!0});gi(Ei,"REGEXP",vi()),gi(Ei,"REGEXP_CAPTURE",di);var hi=Ei;var mi=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},wi=mi;ar(wi,"REGEXP",mi());var bi=wi;var yi=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},Pi=yi;ar(Pi,"REGEXP",yi());var Ri=Pi,Fi=jt,ji=M,_i=bi,Ti=Ri,Oi=Kr,Xi=["posix","win32"];var Gi=function(r){if(arguments.length>0&&!Fi(Xi,r))throw new Error(ji('invalid argument.  Must be one of the following: "%s". Value: `%s`.',Xi.join('", "'),r));return"win32"===r||Oi?Ti():_i()},xi=ar,Si=bi.REGEXP,Ai=Ri.REGEXP,$i=Gi;xi($i,"REGEXP",Kr?Ai:Si),xi($i,"REGEXP_POSIX",Si),xi($i,"REGEXP_WIN32",Ai);var Di=$i,Bi=oi,Ii=fe,ki=cn.isPrimitive,Vi=at.isPrimitive,Ni=M;var Ci=function(r,e){return Bi(e)?Ii(e,"flags")&&(r.flags=e.flags,!Vi(r.flags))?new TypeError(Ni("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Ii(e,"capture")&&(r.capture=e.capture,!ki(r.capture))?new TypeError(Ni("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Ni("invalid argument. Options argument must be an object. Value: `%s`.",e))},Li="\\r?\\n";var Mi=function(r){var e,t;if(arguments.length>0){if(t=Ci(e={},r))throw t;return e.capture?new RegExp("(\\r?\\n)",e.flags):new RegExp(Li,e.flags)}return/\r?\n/},Wi=ar,Ui=Mi,Zi=Mi({capture:!0});Wi(Ui,"REGEXP",Mi()),Wi(Ui,"REGEXP_CAPTURE",Zi);var zi=Ui;var Hi=function(){return/^\\\\\?\\.+/},Yi=Hi;ar(Yi,"REGEXP",Hi());var qi=Yi;var Ji=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Ki=Ji;ar(Ki,"REGEXP",Ji());var Qi=Ki;var ro=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},eo=ro;ar(eo,"REGEXP",ro());var to=eo,no=jt,io=M,oo=Qi,ao=to,uo=Kr,co=["posix","win32"];var so=function(r){if(arguments.length>0&&!no(co,r))throw new Error(io('invalid argument. Must be one of the following: "%s". Value: `%s`.',co.join('", "'),r));return"win32"===r||uo?ao():oo()},fo=ar,lo=Qi.REGEXP,po=to.REGEXP,vo=so;fo(vo,"REGEXP",Kr?po:lo),fo(vo,"REGEXP_POSIX",lo),fo(vo,"REGEXP_WIN32",po);var go=vo;var Eo=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},ho=Eo;ar(ho,"REGEXP",Eo());var mo=ho;var wo=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},bo=wo;ar(bo,"REGEXP",wo());var yo=bo,Po=jt,Ro=M,Fo=mo,jo=yo,_o=Kr,To=["posix","win32"];var Oo=function(r){if(arguments.length>0&&!Po(To,r))throw new Error(Ro('invalid argument. Must be one of the following: "%s". Value: `%s`.',To.join('", "'),r));return"win32"===r||_o?jo():Fo()},Xo=ar,Go=mo.REGEXP,xo=yo.REGEXP,So=Oo;Xo(So,"REGEXP",Kr?xo:Go),Xo(So,"REGEXP_POSIX",Go),Xo(So,"REGEXP_WIN32",xo);var Ao=So;var $o=function(){return/^\s*function\s*([^(]*)/i},Do=$o;ar(Do,"REGEXP",$o());var Bo=Do;var Io=function(){var r="";return r="^"+(r=(r=(r+=Function.prototype.toString.call(Function)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(r)},ko=Io;ar(ko,"REGEXP",Io());var Vo=ko;var No=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},Co=No;ar(Co,"REGEXP",No());var Lo=Co;var Mo=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},Wo=Mo;ar(Wo,"REGEXP",Mo());var Uo=Wo;var Zo=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},zo=Zo;ar(zo,"REGEXP",Zo());var Ho=zo;var Yo=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},qo=Yo;ar(qo,"REGEXP",Yo());var Jo=qo,Ko=oi,Qo=fe,ra=cn.isPrimitive,ea=at.isPrimitive,ta=M;var na=function(r,e){return Ko(e)?Qo(e,"flags")&&(r.flags=e.flags,!ea(r.flags))?new TypeError(ta("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Qo(e,"capture")&&(r.capture=e.capture,!ra(r.capture))?new TypeError(ta("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(ta("invalid argument. Options argument must be an object. Value: `%s`.",e))},ia="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var oa=function(r){var e,t;if(arguments.length>0){if(t=na(e={},r))throw t;return e.capture?new RegExp("("+ia+")",e.flags):new RegExp(ia,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},aa=ar,ua=oa,ca=oa({capture:!0});aa(ua,"REGEXP",oa()),aa(ua,"REGEXP_CAPTURE",ca);var sa=ua,fa={};return nr(fa,"reBasename",It),nr(fa,"reBasenamePosix",sr),nr(fa,"reBasenameWindows",pr),nr(fa,"reColorHexadecimal",Wt),nr(fa,"reDecimalNumber",hi),nr(fa,"reDirname",Di),nr(fa,"reDirnamePosix",bi),nr(fa,"reDirnameWindows",Ri),nr(fa,"reEOL",zi),nr(fa,"reExtendedLengthPath",qi),nr(fa,"reExtname",go),nr(fa,"reExtnamePosix",Qi),nr(fa,"reExtnameWindows",to),nr(fa,"reFilename",Ao),nr(fa,"reFilenamePosix",mo),nr(fa,"reFilenameWindows",yo),nr(fa,"reFunctionName",Bo),nr(fa,"reNativeFunction",Vo),nr(fa,"reRegExp",Lo),nr(fa,"reUncPath",Uo),nr(fa,"reUtf16SurrogatePair",Ho),nr(fa,"reUtf16UnpairedSurrogate",Jo),nr(fa,"reWhitespace",sa),fa}));
//# sourceMappingURL=index.js.map
