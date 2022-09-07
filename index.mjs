// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.0.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/function-to-string@esm/index.mjs";var m=function(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},p=m;r(p,"REGEXP",m());var f=p;var v=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},c=v;r(c,"REGEXP",v());var d=c,g=t,P=i,h=f,R=d,w=n,F=["posix","win32"];var X=r,G=f.REGEXP,x=d.REGEXP,j=function(e){if(arguments.length>0&&!g(F,e))throw new Error(P('invalid argument. Must be one of the following: "%s". Value: `%s`.',F.join('", "'),e));return"win32"===e||w?R():h()};X(j,"REGEXP",n?x:G),X(j,"REGEXP_POSIX",G),X(j,"REGEXP_WIN32",x);var b=j,D=t,B=i,$=["full","shorthand","either"];var A=r,S=function(e){if(arguments.length>0&&!D($,e))throw new Error(B('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',$.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i};A(S,"REGEXP",/^[0-9A-F]{6}$/i),A(S,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),A(S,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i);var O=S,y=u,T=a,W=s.isPrimitive,_=o.isPrimitive,N=i;var U=function(e,r){return y(r)?T(r,"flags")&&(e.flags=r.flags,!_(e.flags))?new TypeError(N("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):T(r,"capture")&&(e.capture=r.capture,!W(e.capture))?new TypeError(N("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",r))};var C=function(e){var r,n;if(arguments.length>0){if(n=U(r={},e))throw n;return r.capture?new RegExp("([-+]{0,1}[0-9]*\\.[0-9]+)",r.flags):new RegExp("[-+]{0,1}[0-9]*\\.[0-9]+",r.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/},I=r,V=C,H=C({capture:!0});I(V,"REGEXP",C()),I(V,"REGEXP_CAPTURE",H);var M=V;var z=function(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/},L=z;r(L,"REGEXP",z());var Z=L;var k=function(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/},q=k;r(q,"REGEXP",k());var J=q,K=t,Q=i,Y=Z,ee=J,re=n,ne=["posix","win32"];var te=r,ie=Z.REGEXP,ue=J.REGEXP,ae=function(e){if(arguments.length>0&&!K(ne,e))throw new Error(Q('invalid argument.  Must be one of the following: "%s". Value: `%s`.',ne.join('", "'),e));return"win32"===e||re?ee():Y()};te(ae,"REGEXP",n?ue:ie),te(ae,"REGEXP_POSIX",ie),te(ae,"REGEXP_WIN32",ue);var se=ae,oe=u,Ee=a,le=s.isPrimitive,me=o.isPrimitive,pe=i;var fe=function(e,r){return oe(r)?Ee(r,"flags")&&(e.flags=r.flags,!me(e.flags))?new TypeError(pe("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Ee(r,"capture")&&(e.capture=r.capture,!le(e.capture))?new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",r))};var ve=function(e){var r,n;if(arguments.length>0){if(n=fe(r={},e))throw n;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp("\\r?\\n",r.flags)}return/\r?\n/},ce=r,de=ve,ge=ve({capture:!0});ce(de,"REGEXP",ve()),ce(de,"REGEXP_CAPTURE",ge);var Pe=de;var he=function(){return/^\\\\\?\\.+/},Re=he;r(Re,"REGEXP",he());var we=Re;var Fe=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Xe=Fe;r(Xe,"REGEXP",Fe());var Ge=Xe;var xe=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},je=xe;r(je,"REGEXP",xe());var be=je,De=t,Be=i,$e=Ge,Ae=be,Se=n,Oe=["posix","win32"];var ye=r,Te=Ge.REGEXP,We=be.REGEXP,_e=function(e){if(arguments.length>0&&!De(Oe,e))throw new Error(Be('invalid argument. Must be one of the following: "%s". Value: `%s`.',Oe.join('", "'),e));return"win32"===e||Se?Ae():$e()};ye(_e,"REGEXP",n?We:Te),ye(_e,"REGEXP_POSIX",Te),ye(_e,"REGEXP_WIN32",We);var Ne=_e;var Ue=function(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},Ce=Ue;r(Ce,"REGEXP",Ue());var Ie=Ce;var Ve=function(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},He=Ve;r(He,"REGEXP",Ve());var Me=He,ze=t,Le=i,Ze=Ie,ke=Me,qe=n,Je=["posix","win32"];var Ke=r,Qe=Ie.REGEXP,Ye=Me.REGEXP,er=function(e){if(arguments.length>0&&!ze(Je,e))throw new Error(Le('invalid argument. Must be one of the following: "%s". Value: `%s`.',Je.join('", "'),e));return"win32"===e||qe?ke():Ze()};Ke(er,"REGEXP",n?Ye:Qe),Ke(er,"REGEXP_POSIX",Qe),Ke(er,"REGEXP_WIN32",Ye);var rr=er;var nr=function(){return/^\s*function\s*([^(]*)/i},tr=nr;r(tr,"REGEXP",nr());var ir=tr,ur=E,ar=l;var sr=function(){var e="";return e="^"+(e=(e=(e+=ar(ur)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(e)},or=sr;r(or,"REGEXP",sr());var Er=or;var lr=function(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},mr=lr;r(mr,"REGEXP",lr());var pr=mr;var fr=function(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/},vr=fr;r(vr,"REGEXP",fr());var cr=vr;var dr=function(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/},gr=dr;r(gr,"REGEXP",dr());var Pr=gr;var hr=function(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/},Rr=hr;r(Rr,"REGEXP",hr());var wr=Rr,Fr=u,Xr=a,Gr=s.isPrimitive,xr=o.isPrimitive,jr=i;var br=function(e,r){return Fr(r)?Xr(r,"flags")&&(e.flags=r.flags,!xr(e.flags))?new TypeError(jr("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):Xr(r,"capture")&&(e.capture=r.capture,!Gr(e.capture))?new TypeError(jr("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(jr("invalid argument. Options argument must be an object. Value: `%s`.",r))},Dr="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var Br=function(e){var r,n;if(arguments.length>0){if(n=br(r={},e))throw n;return r.capture?new RegExp("("+Dr+")",r.flags):new RegExp(Dr,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},$r=r,Ar=Br,Sr=Br({capture:!0});$r(Ar,"REGEXP",Br()),$r(Ar,"REGEXP_CAPTURE",Sr);var Or=Ar,yr={};e(yr,"reBasename",b),e(yr,"reBasenamePosix",f),e(yr,"reBasenameWindows",d),e(yr,"reColorHexadecimal",O),e(yr,"reDecimalNumber",M),e(yr,"reDirname",se),e(yr,"reDirnamePosix",Z),e(yr,"reDirnameWindows",J),e(yr,"reEOL",Pe),e(yr,"reExtendedLengthPath",we),e(yr,"reExtname",Ne),e(yr,"reExtnamePosix",Ge),e(yr,"reExtnameWindows",be),e(yr,"reFilename",rr),e(yr,"reFilenamePosix",Ie),e(yr,"reFilenameWindows",Me),e(yr,"reFunctionName",ir),e(yr,"reNativeFunction",Er),e(yr,"reRegExp",pr),e(yr,"reUncPath",cr),e(yr,"reUtf16SurrogatePair",Pr),e(yr,"reUtf16UnpairedSurrogate",wr),e(yr,"reWhitespace",Or);export{yr as default,b as reBasename,f as reBasenamePosix,d as reBasenameWindows,O as reColorHexadecimal,M as reDecimalNumber,se as reDirname,Z as reDirnamePosix,J as reDirnameWindows,Pe as reEOL,we as reExtendedLengthPath,Ne as reExtname,Ge as reExtnamePosix,be as reExtnameWindows,rr as reFilename,Ie as reFilenamePosix,Me as reFilenameWindows,ir as reFunctionName,Er as reNativeFunction,pr as reRegExp,cr as reUncPath,Pr as reUtf16SurrogatePair,wr as reUtf16UnpairedSurrogate,Or as reWhitespace};
//# sourceMappingURL=index.mjs.map
