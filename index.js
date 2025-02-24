// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterErf=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=s.call(e,h,"$1e"),e=s.call(e,b,"e"),e=s.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,v,"$1."),e=s.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,n,e,i,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(e=r[l],"string"==typeof e)c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,E(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,y=e.width,v=e.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=e.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,o;for(n=[],o=0,e=S.exec(r);e;)(t=r.slice(o,S.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),o=S.lastIndex,e=S.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function T(r){var t,n;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return O.apply(null,t)}var F,I=Object.prototype,k=I.toString,V=I.__defineGetter__,N=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(P.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=I,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,n.get),a&&N&&N.call(r,t,n.set),r};var L=F;function $(r,t,n){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,n,e;if(null==r)return R.call(r);n=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[Y]=n:delete r[Y],e}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="object"==typeof global?global:null,er="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,n,e,o;if(("Object"===(n=z(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=cr.exec(e.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,Er=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=jr;var Or=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),_r(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&yr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,n){var e,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=function(r,t){return Sr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(e,n),i))throw i;return $(o={},"next",(function(){var n;if(a)return{done:!0};if((n=r.next()).done)return a=!0,n;return{value:vr(n.value)?t(n.value):e.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(o,mr,(function(){return xr(r[mr](),t,e)})),o}function Ur(r){return r!=r}var Tr=Math.floor,Fr=Math.ceil;function Ir(r){return r<0?Fr(r):Tr(r)}var kr=gr.NEGATIVE_INFINITY,Vr=Number.POSITIVE_INFINITY,Nr=1023,Pr=1023,Gr=-1023,Lr=-1074;function $r(r){return r===Vr||r===kr}var Cr=2147483648,Hr=2147483647,Wr="function"==typeof Uint32Array;var Br="function"==typeof Uint32Array?Uint32Array:null;var Rr,Mr="function"==typeof Uint32Array?Uint32Array:void 0;Rr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Wr&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Zr=Rr,Xr="function"==typeof Float64Array;var Yr="function"==typeof Float64Array?Float64Array:null;var zr,qr="function"==typeof Float64Array?Float64Array:void 0;zr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,NaN]),n=t,r=(Xr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Dr=zr,Jr="function"==typeof Uint8Array;var Kr="function"==typeof Uint8Array?Uint8Array:null;var Qr,rt="function"==typeof Uint8Array?Uint8Array:void 0;Qr=function(){var r,t,n;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,256,257]),n=t,r=(Jr&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var tt=Qr,nt="function"==typeof Uint16Array;var et="function"==typeof Uint16Array?Uint16Array:null;var ot,it="function"==typeof Uint16Array?Uint16Array:void 0;ot=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et(t=[1,3.14,-3.14,65536,65537]),n=t,r=(nt&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")};var at,ut={uint16:ot,uint8:tt};(at=new ut.uint16(1))[0]=4660;var ct,ft,lt=52===new ut.uint8(at.buffer)[0];!0===lt?(ct=1,ft=0):(ct=0,ft=1);var st={HIGH:ct,LOW:ft},pt=new Dr(1),yt=new Zr(pt.buffer),vt=st.HIGH,gt=st.LOW;function dt(r,t,n,e){return pt[0]=r,t[e]=yt[vt],t[e+n]=yt[gt],t}function bt(r){return dt(r,[0,0],1,0)}$(bt,"assign",dt);var ht,wt,mt=!0===lt?1:0,jt=new Dr(1),At=new Zr(jt.buffer);function Et(r){return jt[0]=r,At[mt]}!0===lt?(ht=1,wt=0):(ht=0,wt=1);var _t={HIGH:ht,LOW:wt},Ot=new Dr(1),St=new Zr(Ot.buffer),xt=_t.HIGH,Ut=_t.LOW;function Tt(r,t){return St[xt]=r,St[Ut]=t,Ot[0]}var Ft=[0,0];var It=22250738585072014e-324;var kt=4503599627370496;function Vt(r,t,n,e){return Ur(r)||$r(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<It?(t[e]=r*kt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}$((function(r){return Vt(r,[0,0],1,0)}),"assign",Vt);var Nt=2146435072;var Pt=2220446049250313e-31,Gt=2148532223,Lt=[0,0],$t=[0,0];function Ct(r,t){var n,e,o,i,a,u;return 0===t||0===r||Ur(r)||$r(r)?r:(Vt(r,Lt,1,0),r=Lt[0],t+=Lt[1],t+=function(r){var t=Et(r);return(t=(t&Nt)>>>20)-Nr|0}(r),t<Lr?(o=0,i=r,bt.assign(o,Ft,1,0),a=Ft[0],a&=Hr,u=Et(i),Tt(a|=u&=Cr,Ft[1])):t>Pr?r<0?kr:Vr:(t<=Gr?(t+=52,e=Pt):e=1,bt.assign(r,$t,1,0),n=$t[0],n&=Gt,e*Tt(n|=t+Nr<<20,$t[1])))}var Ht=.6931471803691238,Wt=1.9082149292705877e-10,Bt=1.4426950408889634,Rt=709.782712893384,Mt=-745.1332191019411,Zt=1/(1<<28),Xt=-Zt;function Yt(r){var t;return Ur(r)||r===Vr?r:r===kr?0:r>Rt?Vr:r<Mt?0:r>Xt&&r<Zt?1+r:function(r,t,n){var e,o,i,a;return Ct(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-(t=Ir(r<0?Bt*r-.5:Bt*r+.5))*Ht,t*Wt,t)}var zt=!0===lt?0:1,qt=new Dr(1),Dt=new Zr(qt.buffer);var Jt=1e-300,Kt=2848094538889218e-321,Qt=3.725290298461914e-9,rn=.8450629115104675,tn=.1283791670955126,nn=1.0270333367641007,en=.12837916709551256,on=1,an=-.0023621185607526594,un=1,cn=-.009864944034847148,fn=1,ln=-.0098649429247001,sn=1;function pn(r){var t,n,e,o,i,a,u;return Ur(r)?NaN:r===Vr?1:r===kr?-1:0===r?r:(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375?n<Qt?n<Kt?.125*(8*r+nn*r):r+tn*r:(o=en+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=on+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(o/i)):n<1.25?(a=an+(i=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i),u=un+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),t?-rn-a/u:rn+a/u):n>=6?t?Jt-1:1-Jt:(i=1/(n*n),n<2.857142857142857?(o=cn+i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i),i=fn+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i)):(o=ln+i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i),i=sn+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)),e=function(r,t){return qt[0]=r,Dt[zt]=t>>>0,qt[0]}(n,0),o=Yt(-e*e-.5625)*Yt((e-n)*(e+n)+o/i),t?o/n-1:1-o/n))}return function(r){return xr(r,pn)}}));
//# sourceMappingURL=index.js.map
