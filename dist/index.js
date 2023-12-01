"use strict";var r=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var G=r(function(Rs,J){
function au(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}J.exports=au
});var Q=r(function(cs,K){
var su=G(),nu=su();K.exports=nu
});var s=r(function(ps,rr){
var Eu=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Y=G(),ou=Q();Eu(Y,"REGEXP",ou);rr.exports=Y
});var d=r(function(Ps,er){
function vu(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}er.exports=vu
});var ur=r(function(xs,ir){
var qu=d(),Ru=qu();ir.exports=Ru
});var n=r(function(fs,ar){
var cu=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tr=d(),pu=ur();cu(tr,"REGEXP",pu);ar.exports=tr
});var Er=r(function(ls,nr){
var Pu=require('@stdlib/assert/contains/dist'),xu=require('@stdlib/string/format/dist'),fu=s(),lu=n(),mu=require('@stdlib/assert/is-windows/dist'),sr=["posix","win32"];function gu(e){if(arguments.length>0&&!Pu(sr,e))throw new Error(xu('0sd7p',sr.join('", "'),e));return e==="win32"||mu?lu():fu()}nr.exports=gu
});var Rr=r(function(ms,qr){
var O=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),or=s().REGEXP,vr=n().REGEXP,Xu=require('@stdlib/assert/is-windows/dist'),E=Er(),Gu=Xu?vr:or;O(E,"REGEXP",Gu);O(E,"REGEXP_POSIX",or);O(E,"REGEXP_WIN32",vr);qr.exports=E
});var Pr=r(function(gs,pr){
var du=require('@stdlib/assert/contains/dist'),Ou=require('@stdlib/string/format/dist'),cr=["full","shorthand","either"];function Fu(e){if(arguments.length>0&&!du(cr,e))throw new Error(Ou('0sd7q',cr.join('", "'),e));return e==="shorthand"?/^[0-9A-F]{3}$/i:e==="either"?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}pr.exports=Fu
});var fr=r(function(Xs,xr){
var F=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),o=Pr(),_u=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,Su=/^[0-9A-F]{3}$/i,wu=/^[0-9A-F]{6}$/i;F(o,"REGEXP",wu);F(o,"REGEXP_SHORTHAND",Su);F(o,"REGEXP_EITHER",_u);xr.exports=o
});var gr=r(function(Gs,mr){
var Au=require('@stdlib/assert/is-plain-object/dist'),lr=require('@stdlib/assert/has-own-property/dist'),Du=require('@stdlib/assert/is-boolean/dist').isPrimitive,Iu=require('@stdlib/assert/is-string/dist').isPrimitive,_=require('@stdlib/string/format/dist');function hu(e,i){return Au(i)?lr(i,"flags")&&(e.flags=i.flags,!Iu(e.flags))?new TypeError(_('0sd2W',"flags",e.flags)):lr(i,"capture")&&(e.capture=i.capture,!Du(e.capture))?new TypeError(_('0sd2o',"capture",e.capture)):null:new TypeError(_('0sd2V',i));}mr.exports=hu
});var v=r(function(ds,Gr){
var Nu=gr(),Xr="[-+]{0,1}[0-9]*\\.[0-9]+";function Wu(e){var i,a;if(arguments.length>0){if(i={},a=Nu(i,e),a)throw a;return i.capture?new RegExp("("+Xr+")",i.flags):new RegExp(Xr,i.flags)}return/[-+]{0,1}[0-9]*\.[0-9]+/}Gr.exports=Wu
});var Or=r(function(Os,dr){
var Tu=v(),yu=Tu({capture:!0});dr.exports=yu
});var _r=r(function(Fs,Fr){
var Bu=v(),bu=Bu();Fr.exports=bu
});var Ar=r(function(_s,wr){
var Sr=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S=v(),Uu=Or(),Cu=_r();Sr(S,"REGEXP",Cu);Sr(S,"REGEXP_CAPTURE",Uu);wr.exports=S
});var w=r(function(Ss,Dr){
function Mu(){return/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}Dr.exports=Mu
});var hr=r(function(ws,Ir){
var $u=w(),Lu=$u();Ir.exports=Lu
});var q=r(function(As,Wr){
var Vu=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Nr=w(),ju=hr();Vu(Nr,"REGEXP",ju);Wr.exports=Nr
});var A=r(function(Ds,Tr){
function Hu(){return/^((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?))(?:[\\\/]+?|)(?:(?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}Tr.exports=Hu
});var Br=r(function(Is,yr){
var zu=A(),Zu=zu();yr.exports=Zu
});var R=r(function(hs,Ur){
var ku=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),br=A(),Ju=Br();ku(br,"REGEXP",Ju);Ur.exports=br
});var $r=r(function(Ns,Mr){
var Ku=require('@stdlib/assert/contains/dist'),Qu=require('@stdlib/string/format/dist'),Yu=q(),rt=R(),et=require('@stdlib/assert/is-windows/dist'),Cr=["posix","win32"];function it(e){if(arguments.length>0&&!Ku(Cr,e))throw new Error(Qu('0sd7r',Cr.join('", "'),e));return e==="win32"||et?rt():Yu()}Mr.exports=it
});var Hr=r(function(Ws,jr){
var D=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lr=q().REGEXP,Vr=R().REGEXP,ut=require('@stdlib/assert/is-windows/dist'),c=$r(),tt=ut?Vr:Lr;D(c,"REGEXP",tt);D(c,"REGEXP_POSIX",Lr);D(c,"REGEXP_WIN32",Vr);jr.exports=c
});var I=r(function(Ts,zr){
function at(){return/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i}zr.exports=at
});var kr=r(function(ys,Zr){
var st=I(),nt=st();Zr.exports=nt
});var Qr=r(function(Bs,Kr){
var Et=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jr=I(),ot=kr();Et(Jr,"REGEXP",ot);Kr.exports=Jr
});var ee=r(function(bs,re){
var vt=require('@stdlib/assert/is-plain-object/dist'),Yr=require('@stdlib/assert/has-own-property/dist'),qt=require('@stdlib/assert/is-boolean/dist').isPrimitive,Rt=require('@stdlib/assert/is-string/dist').isPrimitive,h=require('@stdlib/string/format/dist');function ct(e,i){return vt(i)?Yr(i,"flags")&&(e.flags=i.flags,!Rt(e.flags))?new TypeError(h('0sd2W',"flags",e.flags)):Yr(i,"capture")&&(e.capture=i.capture,!qt(e.capture))?new TypeError(h('0sd2o',"capture",e.capture)):null:new TypeError(h('0sd2V',i));}re.exports=ct
});var p=r(function(Us,ue){
var pt=ee(),ie="\\r?\\n";function Pt(e){var i,a;if(arguments.length>0){if(i={},a=pt(i,e),a)throw a;return i.capture?new RegExp("("+ie+")",i.flags):new RegExp(ie,i.flags)}return/\r?\n/}ue.exports=Pt
});var ae=r(function(Cs,te){
var xt=p(),ft=xt({capture:!0});te.exports=ft
});var ne=r(function(Ms,se){
var lt=p(),mt=lt();se.exports=mt
});var ve=r(function($s,oe){
var Ee=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),N=p(),gt=ae(),Xt=ne();Ee(N,"REGEXP",Xt);Ee(N,"REGEXP_CAPTURE",gt);oe.exports=N
});var W=r(function(Ls,qe){
function Gt(){return/^\\\\\?\\.+/}qe.exports=Gt
});var ce=r(function(Vs,Re){
var dt=W(),Ot=dt();Re.exports=Ot
});var xe=r(function(js,Pe){
var Ft=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pe=W(),_t=ce();Ft(pe,"REGEXP",_t);Pe.exports=pe
});var T=r(function(Hs,fe){
function St(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}fe.exports=St
});var me=r(function(zs,le){
var wt=T(),At=wt();le.exports=At
});var P=r(function(Zs,Xe){
var Dt=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ge=T(),It=me();Dt(ge,"REGEXP",It);Xe.exports=ge
});var y=r(function(ks,Ge){
function ht(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}Ge.exports=ht
});var Oe=r(function(Js,de){
var Nt=y(),Wt=Nt();de.exports=Wt
});var x=r(function(Ks,_e){
var Tt=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fe=y(),yt=Oe();Tt(Fe,"REGEXP",yt);_e.exports=Fe
});var Ae=r(function(Qs,we){
var Bt=require('@stdlib/assert/contains/dist'),bt=require('@stdlib/string/format/dist'),Ut=P(),Ct=x(),Mt=require('@stdlib/assert/is-windows/dist'),Se=["posix","win32"];function $t(e){if(arguments.length>0&&!Bt(Se,e))throw new Error(bt('0sd7p',Se.join('", "'),e));return e==="win32"||Mt?Ct():Ut()}we.exports=$t
});var Ne=r(function(Ys,he){
var B=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),De=P().REGEXP,Ie=x().REGEXP,Lt=require('@stdlib/assert/is-windows/dist'),f=Ae(),Vt=Lt?Ie:De;B(f,"REGEXP",Vt);B(f,"REGEXP_POSIX",De);B(f,"REGEXP_WIN32",Ie);he.exports=f
});var b=r(function(rn,We){
function jt(){return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}We.exports=jt
});var ye=r(function(en,Te){
var Ht=b(),zt=Ht();Te.exports=zt
});var l=r(function(un,be){
var Zt=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Be=b(),kt=ye();Zt(Be,"REGEXP",kt);be.exports=Be
});var U=r(function(tn,Ue){
function Jt(){return/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)([\\\/]|)([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}Ue.exports=Jt
});var Me=r(function(an,Ce){
var Kt=U(),Qt=Kt();Ce.exports=Qt
});var m=r(function(sn,Le){
var Yt=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$e=U(),ra=Me();Yt($e,"REGEXP",ra);Le.exports=$e
});var He=r(function(nn,je){
var ea=require('@stdlib/assert/contains/dist'),ia=require('@stdlib/string/format/dist'),ua=l(),ta=m(),aa=require('@stdlib/assert/is-windows/dist'),Ve=["posix","win32"];function sa(e){if(arguments.length>0&&!ea(Ve,e))throw new Error(ia('0sd7p',Ve.join('", "'),e));return e==="win32"||aa?ta():ua()}je.exports=sa
});var Je=r(function(En,ke){
var C=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ze=l().REGEXP,Ze=m().REGEXP,na=require('@stdlib/assert/is-windows/dist'),g=He(),Ea=na?Ze:ze;C(g,"REGEXP",Ea);C(g,"REGEXP_POSIX",ze);C(g,"REGEXP_WIN32",Ze);ke.exports=g
});var M=r(function(on,Ke){
function oa(){return/^\s*function\s*([^(]*)/i}Ke.exports=oa
});var Ye=r(function(vn,Qe){
var va=M(),qa=va();Qe.exports=qa
});var ii=r(function(qn,ei){
var Ra=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ri=M(),ca=Ye();Ra(ri,"REGEXP",ca);ei.exports=ri
});var $=r(function(Rn,ui){
var pa=require('@stdlib/function/ctor/dist'),Pa=require('@stdlib/function/to-string/dist');function xa(){var e="";return e+=Pa(pa),e=e.replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1"),e=e.replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),e="^"+e+"$",new RegExp(e)}ui.exports=xa
});var ai=r(function(cn,ti){
var fa=$(),la=fa();ti.exports=la
});var Ei=r(function(pn,ni){
var ma=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),si=$(),ga=ai();ma(si,"REGEXP",ga);ni.exports=si
});var L=r(function(Pn,oi){
function Xa(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}oi.exports=Xa
});var qi=r(function(xn,vi){
var Ga=L(),da=Ga();vi.exports=da
});var pi=r(function(fn,ci){
var Oa=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ri=L(),Fa=qi();Oa(Ri,"REGEXP",Fa);ci.exports=Ri
});var xi=r(function(ln,Pi){
function _a(e,i){return i&&i.type==="RegExp"&&i.pattern?new RegExp(i.pattern,i.flags):i}Pi.exports=_a
});var li=r(function(mn,fi){
var Sa=xi();fi.exports=Sa
});var V=r(function(gn,mi){
function wa(){return/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/}mi.exports=wa
});var Xi=r(function(Xn,gi){
var Aa=V(),Da=Aa();gi.exports=Da
});var Oi=r(function(Gn,di){
var Ia=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gi=V(),ha=Xi();Ia(Gi,"REGEXP",ha);di.exports=Gi
});var _i=r(function(dn,Fi){
var Na=require('@stdlib/assert/is-regexp/dist'),Wa=require('@stdlib/string/format/dist'),Ta=47;function ya(e){var i;if(!Na(e))throw new TypeError(Wa('0sdEP',e));for(e=e.toString(),i=e.length-1;i>=0&&e.charCodeAt(i)!==Ta;i--);return{type:"RegExp",pattern:e.substring(1,i),flags:e.substring(i+1)}}Fi.exports=ya
});var wi=r(function(On,Si){
var Ba=_i();Si.exports=Ba
});var j=r(function(Fn,Ai){
function ba(){return/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/}Ai.exports=ba
});var Ii=r(function(_n,Di){
var Ua=j(),Ca=Ua();Di.exports=Ca
});var Wi=r(function(Sn,Ni){
var Ma=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hi=j(),$a=Ii();Ma(hi,"REGEXP",$a);Ni.exports=hi
});var H=r(function(wn,Ti){
function La(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}Ti.exports=La
});var Bi=r(function(An,yi){
var Va=H(),ja=Va();yi.exports=ja
});var Ci=r(function(Dn,Ui){
var Ha=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bi=H(),za=Bi();Ha(bi,"REGEXP",za);Ui.exports=bi
});var z=r(function(In,Mi){
function Za(){return/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/}Mi.exports=Za
});var Li=r(function(hn,$i){
var ka=z(),Ja=ka();$i.exports=Ja
});var Hi=r(function(Nn,ji){
var Ka=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vi=z(),Qa=Li();Ka(Vi,"REGEXP",Qa);ji.exports=Vi
});var ki=r(function(Wn,Zi){
var Ya=require('@stdlib/assert/is-plain-object/dist'),zi=require('@stdlib/assert/has-own-property/dist'),rs=require('@stdlib/assert/is-boolean/dist').isPrimitive,es=require('@stdlib/assert/is-string/dist').isPrimitive,Z=require('@stdlib/string/format/dist');function is(e,i){return Ya(i)?zi(i,"flags")&&(e.flags=i.flags,!es(e.flags))?new TypeError(Z('0sd2W',"flags",e.flags)):zi(i,"capture")&&(e.capture=i.capture,!rs(e.capture))?new TypeError(Z('0sd2o',"capture",e.capture)):null:new TypeError(Z('0sd2V',i));}Zi.exports=is
});var X=r(function(Tn,Ki){
var us=ki(),Ji="[	\n\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]";function ts(e){var i,a;if(arguments.length>0){if(i={},a=us(i,e),a)throw a;return i.capture?new RegExp("("+Ji+")",i.flags):new RegExp(Ji,i.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}Ki.exports=ts
});var Yi=r(function(yn,Qi){
var as=X(),ss=as({capture:!0});Qi.exports=ss
});var eu=r(function(Bn,ru){
var ns=X(),Es=ns();ru.exports=Es
});var tu=r(function(bn,uu){
var iu=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),k=X(),os=Yi(),vs=eu();iu(k,"REGEXP",vs);iu(k,"REGEXP_CAPTURE",os);uu.exports=k
});var t=require('@stdlib/utils/define-read-only-property/dist'),u={};t(u,"reBasename",Rr());t(u,"reBasenamePosix",s());t(u,"reBasenameWindows",n());t(u,"reColorHexadecimal",fr());t(u,"reDecimalNumber",Ar());t(u,"reDirname",Hr());t(u,"reDirnamePosix",q());t(u,"reDirnameWindows",R());t(u,"reDurationString",Qr());t(u,"reEOL",ve());t(u,"reExtendedLengthPath",xe());t(u,"reExtname",Ne());t(u,"reExtnamePosix",P());t(u,"reExtnameWindows",x());t(u,"reFilename",Je());t(u,"reFilenamePosix",l());t(u,"reFilenameWindows",m());t(u,"reFunctionName",ii());t(u,"reNativeFunction",Ei());t(u,"reRegExp",pi());t(u,"reviveRegExp",li());t(u,"reSemVer",Oi());t(u,"regexp2json",wi());t(u,"reUncPath",Wi());t(u,"reUtf16SurrogatePair",Ci());t(u,"reUtf16UnpairedSurrogate",Hi());t(u,"reWhitespace",tu());module.exports=u;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
