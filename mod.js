// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[m],r=w(t,m);try{t[m]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[m]=n:delete t[m],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function H(t){return null!==t&&"object"==typeof t}function x(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=V.exec(e.toString()))return r[1]}return H(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!G(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function L(t){return"function"===B(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!G(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!w(t,"constructor")&&w(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&w(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!w(t,r))return!1;return!0}(t)))}function Z(t,r){return Q(r)?(w(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),q&&L(t[q])&&l(o,q,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:W(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return $(t[q](),r,e)}}function tt(t){return t!=t}var rt=Math.floor,nt=Math.ceil;function et(t){return t<0?nt(t):rt(t)}var ot=k.NEGATIVE_INFINITY,ut=Number.POSITIVE_INFINITY;function it(t){return t===ut||t===ot}var at="function"==typeof Uint32Array;var ct="function"==typeof Uint32Array?Uint32Array:null;var ft,lt="function"==typeof Uint32Array?Uint32Array:void 0;ft=function(){var t,r,n;if("function"!=typeof ct)return!1;try{r=new ct(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(at&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=ft,pt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var bt,st="function"==typeof Float64Array?Float64Array:void 0;bt=function(){var t,r,n;if("function"!=typeof vt)return!1;try{r=new vt([1,3.14,-3.14,NaN]),n=r,t=(pt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,wt="function"==typeof Uint8Array;var mt="function"==typeof Uint8Array?Uint8Array:null;var jt,At="function"==typeof Uint8Array?Uint8Array:void 0;jt=function(){var t,r,n;if("function"!=typeof mt)return!1;try{r=new mt(r=[1,3.14,-3.14,256,257]),n=r,t=(wt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?At:function(){throw new Error("not implemented")};var gt=jt,_t="function"==typeof Uint16Array;var ht="function"==typeof Uint16Array?Uint16Array:null;var Ot,Ut="function"==typeof Uint16Array?Uint16Array:void 0;Ot=function(){var t,r,n;if("function"!=typeof ht)return!1;try{r=new ht(r=[1,3.14,-3.14,65536,65537]),n=r,t=(_t&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var St,Et={uint16:Ot,uint8:gt};(St=new Et.uint16(1))[0]=4660;var Nt,Ft,It=52===new Et.uint8(St.buffer)[0];!0===It?(Nt=1,Ft=0):(Nt=0,Ft=1);var Pt={HIGH:Nt,LOW:Ft},Tt=new dt(1),Vt=new yt(Tt.buffer),Gt=Pt.HIGH,Ht=Pt.LOW;function xt(t,r){return Tt[0]=r,t[0]=Vt[Gt],t[1]=Vt[Ht],t}function Bt(t,r){return 1===arguments.length?xt([0,0],t):xt(t,r)}var Lt,Mt,Wt=!0===It?1:0,kt=new dt(1),Ct=new yt(kt.buffer);function Yt(t){return kt[0]=t,Ct[Wt]}!0===It?(Lt=1,Mt=0):(Lt=0,Mt=1);var Rt={HIGH:Lt,LOW:Mt},Xt=new dt(1),qt=new yt(Xt.buffer),zt=Rt.HIGH,Dt=Rt.LOW;function Jt(t,r){return qt[zt]=t,qt[Dt]=r,Xt[0]}var Kt=[0,0];function Qt(t,r){return tt(r)||it(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Zt=[0,0],$t=[0,0];function tr(t,r){var n,e,o,u,i;return 0===r||0===t||tt(t)||it(t)?t:(function(t,r){1===arguments.length?Qt([0,0],t):Qt(t,r)}(Zt,t),r+=Zt[1],r+=function(t){var r=Yt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Zt[0]),r<-1074?(o=t,Bt(Kt,0),u=Kt[0],u&=2147483647,i=Yt(o),Jt(u|=i&=2147483648,Kt[1])):r>1023?t<0?ot:ut:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Bt($t,t),n=$t[0],n&=2148532223,e*Jt(n|=r+1023<<20,$t[1])))}function rr(t){var r;return tt(t)||t===ut?t:t===ot?0:t>709.782712893384?ut:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(t,r,n){var e,o,u,i;return tr(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=et(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*r,r)}var nr=!0===It?0:1,er=new dt(1),or=new yt(er.buffer);var ur=.8450629115104675;function ir(t){var r,n,e,o,u,i,a;return tt(t)?NaN:t===ut?1:t===ot?-1:0===t?t:(t<0?(r=!0,n=-t):(r=!1,n=t),n<.84375?n<3.725290298461914e-9?n<2848094538889218e-321?.125*(8*t+1.0270333367641007*t):t+.1283791670955126*t:(o=.12837916709551256+(e=t*t)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(e),t+t*(o/u)):n<1.25?(i=(u=n-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(u),r?-ur-i/a:ur+i/a):n>=6?r?-1:1:(u=1/(n*n),n<2.857142857142857?(o=u*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(u)):(o=u*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(u)),e=function(t,r){return er[0]=t,or[nr]=r>>>0,er[0]}(n,0),o=rr(-e*e-.5625)*rr((e-n)*(e+n)+o/u),r?o/n-1:1-o/n))}function ar(t){return $(t,ir)}export{ar as default};
//# sourceMappingURL=mod.js.map
