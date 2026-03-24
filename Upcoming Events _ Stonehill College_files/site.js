/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-supports-svgclippaths-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?b.className.baseVal=n:b.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",p=i("div"),d=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function h(e,n,o,s){function a(){c&&(delete q.style,delete q.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,h,g=["modernizr","tspan","samp"];!q.style&&g.length;)c=!0,q.modElem=i(g.shift()),q.style=q.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],h=q.style[m],u(m,"-")&&(m=f(m)),q.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{q.style[m]=o}catch(y){}if(q.style[m]!=h)return a(),"pfx"==n?m:!0}return a(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+A.join(i+" ")+i).split(" "),p(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var S=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",_||x);var b=n.documentElement,T="svg"===b.nodeName.toLowerCase(),P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P;var z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(z.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var E=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(r,function(e){t=9===e.offsetTop})}return t});var N="Moz O ms Webkit",j=w._config.usePrefixes?N.split(" "):[];w._cssomPrefixes=j;var A=w._config.usePrefixes?N.toLowerCase().split(" "):[];w._domPrefixes=A;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var q={style:k.elem.style};Modernizr._q.unshift(function(){delete q.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),o(),s(S),delete w.addTest,delete w.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.lazyClass = 'js-lazyload';
window.lazySizesConfig.loadingClass = 'js-lazyloading';
window.lazySizesConfig.loadedClass = 'js-lazyloaded';
window.lazySizesConfig.loadHidden = false;

/*! lazysizes - v4.1.5 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||R<0||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&R<8&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),Q<K&&R<1&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&R<6?J:P;for(;f<a;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&R<3&&!p&&(o<3||S<4)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&R<4&&S<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
/*! formstone v1.4.22 [core.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(w){"use strict";function e(){this.Version="1.4.22",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=w(i),this.document=r,this.$document=w(r),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}}var t,n,s,i="undefined"!=typeof window?window:this,r=i.document,o={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(e){h[e]=!0,w.isEmptyObject(h)||p||(t.length?t.attr("content",s):t=w("head").append('<meta name="viewport" content="'+s+'">'),c.$body.on(u.gestureChange,o.killGesture).on(u.gestureStart,o.killGesture).on(u.gestureEnd,o.killGesture),p=!0)},unlockViewport:function(e){void 0!==h[e]&&delete h[e],w.isEmptyObject(h)&&p&&(t.length&&(n?t.attr("content",n):t.remove()),c.$body.off(u.gestureChange).off(u.gestureStart).off(u.gestureEnd),p=!1)},startTimer:function(e,t,n,s){return o.clearTimer(e),s?setInterval(n,t):setTimeout(n,t)},clearTimer:function(e,t){e&&(t?clearInterval(e):clearTimeout(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=c.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),s=0;s<n.length;s++){var i=n[s].split("=");t[i[0]]=i[1]}return t}},c=new e,a=w.Deferred(),l={base:"{ns}",element:"{ns}-element"},u={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},d=null,f=20,h=[],p=!1;function m(e,t,n,s){var i,r={raw:{}};for(i in s=s||{})s.hasOwnProperty(i)&&("classes"===e?(r.raw[s[i]]=t+"-"+s[i],r[s[i]]="."+t+"-"+s[i]):(r.raw[i]=s[i],r[i]=s[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(r.raw[i]=n[i].replace(/{ns}/g,t),r[i]=n[i].replace(/{ns}/g,"."+t)):(r.raw[i]=n[i].replace(/.{ns}/g,""),r[i]=n[i].replace(/{ns}/g,t)));return r}function g(){c.windowWidth=c.$window.width(),c.windowHeight=c.$window.height(),d=o.startTimer(d,f,y)}function y(){for(var e in c.ResizeHandlers)c.ResizeHandlers.hasOwnProperty(e)&&c.ResizeHandlers[e].callback.call(window,c.windowWidth,c.windowHeight)}function v(e,t){return parseInt(e.priority)-parseInt(t.priority)}return e.prototype.NoConflict=function(){for(var e in c.DontConflict=!0,c.Plugins)c.Plugins.hasOwnProperty(e)&&(w[e]=c.Conflicts[e],w.fn[e]=c.Conflicts.fn[e])},e.prototype.Ready=function(e){"complete"===c.document.readyState||"loading"!==c.document.readyState&&!c.document.documentElement.doScroll?e():c.document.addEventListener("DOMContentLoaded",e)},e.prototype.Plugin=function(e,t){function d(e){return e.data(p)}var f,h,n,p;return c.Plugins[e]=(h=t,n="fs-"+(f=e),p="fs"+f.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()}),h.initialized=!1,h.priority=h.priority||10,h.classes=m("classes",n,l,h.classes),h.events=m("events",f,u,h.events),h.functions=w.extend({getData:d,iterate:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0,s=this.length;n<s;n++){var i=this.eq(n),r=d(i)||{};void 0!==r.$el&&e.apply(i,[r].concat(t))}return this}},o,h.functions),h.methods=w.extend(!0,{_construct:w.noop,_postConstruct:w.noop,_destruct:w.noop,_resize:!1,destroy:function(e){h.functions.iterate.apply(this,[h.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(h.classes.raw.element).removeData(p)}},h.methods),h.utilities=w.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(e){h.defaults=w.extend(!0,h.defaults,e||{})}},h.utilities),h.widget&&(c.Conflicts.fn[f]=w.fn[f],w.fn[p]=function(e){if(this instanceof w){var t=h.methods[e];if("object"==typeof e||!e)return function(e){var t,n,s,i="object"==typeof e,r=Array.prototype.slice.call(arguments,i?1:0),o=w();for(e=w.extend(!0,{},h.defaults||{},i?e:{}),n=0,s=this.length;n<s;n++)if(!d(t=this.eq(n))){h.guid++;var a="__"+h.guid,c=h.classes.raw.base+a,l=t.data(f+"-options"),u=w.extend(!0,{$el:t,guid:a,numGuid:h.guid,rawGuid:c,dotGuid:"."+c},e,"object"==typeof l?l:{});t.addClass(h.classes.raw.element).data(p,u),h.methods._construct.apply(t,[u].concat(r)),o=o.add(t)}for(n=0,s=o.length;n<s;n++)t=o.eq(n),h.methods._postConstruct.apply(t,[d(t)]);return this}.apply(this,arguments);if(t&&0!==e.indexOf("_")){var n=[t].concat(Array.prototype.slice.call(arguments,1));return h.functions.iterate.apply(this,n)}return this}},c.DontConflict||(w.fn[f]=w.fn[p])),c.Conflicts[f]=w[f],w[p]=h.utilities._delegate||function(e){var t=h.utilities[e]||h.utilities._initialize||!1;if(t){var n=Array.prototype.slice.call(arguments,"object"==typeof e?0:1);return t.apply(window,n)}},c.DontConflict||(w[f]=w[p]),h.namespace=f,h.namespaceClean=p,h.guid=0,h.methods._resize&&(c.ResizeHandlers.push({namespace:f,priority:h.priority,callback:h.methods._resize}),c.ResizeHandlers.sort(v)),h.methods._raf&&(c.RAFHandlers.push({namespace:f,priority:h.priority,callback:h.methods._raf}),c.RAFHandlers.sort(v)),h),c.Plugins[e]},c.$window.on("resize.fs",g),g(),function e(){if(c.support.raf)for(var t in c.window.requestAnimationFrame(e),c.RAFHandlers)c.RAFHandlers.hasOwnProperty(t)&&c.RAFHandlers[t].callback.call(window)}(),c.Ready(function(){c.$body=w("body"),w("html").addClass(c.support.touch?"touchevents":"no-touchevents"),t=w('meta[name="viewport"]'),n=!!t.length&&t.attr("content"),s="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",a.resolve()}),u.clickTouchStart=u.click+" "+u.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],s={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",r="",o="",a=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in a.style){i=t[e],c.support.transition=!0;break}for(e in u.transitionEnd=i+".{ns}",n)if(n.hasOwnProperty(e)&&n[e]in a.style){r=n[e];break}for(e in c.transition=r,s)if(s.hasOwnProperty(e)&&s[e]in a.style){c.support.transform=!0,o=s[e];break}c.transform=o}(),window.Formstone=c});
/*! formstone v1.4.22 [mediaquery.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function o(){!function(){for(var e in r={unit:s.unit},u)if(u.hasOwnProperty(e))for(var t in l[e])if(l[e].hasOwnProperty(t)){var n="Infinity"===t?1/0:parseInt(t,10),i=-1<e.indexOf("max");l[e][t].matches&&(i?(!r[e]||n<r[e])&&(r[e]=n):(!r[e]||n>r[e])&&(r[e]=n))}}(),n.trigger(c.mqChange,[r])}function h(e){var t=m(e.media),n=d[t],i=e.matches,r=i?c.enter:c.leave;if(n&&(n.active||!n.active&&i)){for(var a in n[r])n[r].hasOwnProperty(a)&&n[r][a].apply(n.mq);n.active=!0}}function m(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var t=e.Plugin("mediaquery",{utilities:{_initialize:function(e){for(var t in e=e||{},u)u.hasOwnProperty(t)&&(s[t]=e[t]?a.merge(e[t],s[t]):s[t]);for(var n in(s=a.extend(s,e)).minWidth.sort(v.sortDesc),s.maxWidth.sort(v.sortAsc),s.minHeight.sort(v.sortDesc),s.maxHeight.sort(v.sortAsc),u)if(u.hasOwnProperty(n))for(var i in l[n]={},s[n])if(s[n].hasOwnProperty(i)){var r=window.matchMedia("("+u[n]+": "+(s[n][i]===1/0?1e5:s[n][i])+s.unit+")");r.addListener(o),l[n][s[n][i]]=r}o()},state:function(){return r},bind:function(e,t,n){var i=f.matchMedia(t),r=m(i.media);for(var a in d[r]||(d[r]={mq:i,active:!0,enter:{},leave:{}},d[r].mq.addListener(h)),n)n.hasOwnProperty(a)&&d[r].hasOwnProperty(a)&&(d[r][a][e]=n[a]);var o=d[r],s=i.matches;s&&o[c.enter].hasOwnProperty(e)?(o[c.enter][e].apply(i),o.active=!0):!s&&o[c.leave].hasOwnProperty(e)&&(o[c.leave][e].apply(i),o.active=!1)},unbind:function(e,t){if(e)if(t){var n=m(t);d[n]&&(d[n].enter[e]&&delete d[n].enter[e],d[n].leave[e]&&delete d[n].leave[e])}else for(var i in d)d.hasOwnProperty(i)&&(d[i].enter[e]&&delete d[i].enter[e],d[i].leave[e]&&delete d[i].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},c=a.extend(t.events,{enter:"enter",leave:"leave"}),n=e.$window,f=n[0],v=t.functions,r=null,d=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});
/*! formstone v1.4.22 [analytics.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(c,a){"use strict";function t(){p.scrollDepth&&l()}function n(){var e,t=c(this),n=void 0!==t[0].href?t[0].href:"",i=document.domain.split(".").reverse(),o=null!==n.match(i[1]+"."+i[0]);if(n.match(/^mailto\:/i))e="Email, Click, "+n.replace(/^mailto\:/i,"");else if(n.match(/^tel\:/i))e="Telephone, Click, "+n.replace(/^tel\:/i,"");else if(n.match(p.fileTypes)){e="File, Download:"+(/[.]/.exec(n)?/[^.]+$/.exec(n):void 0)[0]+", "+n.replace(/ /g,"-")}else o||(e="ExternalLink, Click, "+n);e&&t.attr(w,e)}function i(e){h.startTimer(T,250,o)}function o(){for(var e,t=u.scrollTop()+a.windowHeight,n=1/p.scrollStops,i=n,o=1;o<=p.scrollStops;o++){if(e=Math.round(100*i).toString(),!x[k][e].passed&&t>x[k][e].edge)x[k][e].passed=!0,s(c.extend(p.scrollFields,{eventCategory:"ScrollDepth",eventAction:k,eventLabel:e,nonInteraction:!0}));i+=n}}function l(){var e,t=c.mediaquery("state"),n=v.outerHeight(),i={},o=1/p.scrollStops,a=o,l=0;t.minWidth&&(k="MinWidth:"+t.minWidth+"px");for(var r=1;r<=p.scrollStops;r++)l=parseInt(n*a),i[e=Math.round(100*a).toString()]={edge:"100"===e?l-10:l,passsed:!(!x[k]||!x[k][e])&&x[k][e].passed},a+=o;x[k]=i}function r(e){var t=c(this),n=t.attr("href"),i=t.data(g).split(",");for(var o in p.eventCallback&&e.preventDefault(),i)i.hasOwnProperty(o)&&(i[o]=c.trim(i[o]));s({eventCategory:i[0],eventAction:i[1],eventLabel:i[2]||n,eventValue:i[3],nonInteraction:i[4]},t)}function s(e,t){d.location;var n=c.extend({hitType:"event"},e);if(void 0!==t&&!t.attr("data-analytics-stop")){var i=void 0!==t[0].href?t[0].href:"",o=!i.match(/^mailto\:/i)&&!i.match(/^tel\:/i)&&i.indexOf(":")<0?d.location.protocol+"//"+d.location.hostname+"/"+i:i;if(""!==o){var a=t.attr("target");if(a)d.open(o,a);else if(p.eventCallback){var l="hitCallback";n[l]=function(){b&&(h.clearTimer(b),function(e){document.location=e}(o))},b=h.startTimer(b,p.eventTimeout,n[l])}}}f(n)}function f(e){if("function"==typeof d.ga&&"function"==typeof d.ga.getAll)for(var t=d.ga.getAll(),n=0,i=t.length;n<i;n++)d.ga(t[n].get("name")+".send",e)}var e=a.Plugin("analytics",{methods:{_resize:t},utilities:{_delegate:function(){if(arguments.length&&"object"!=typeof arguments[0])if("destroy"===arguments[0])(function(){y&&v&&v.length&&(u.off(m.namespace),v.off(m.namespace),y=!1)}).apply(this);else{var e=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":(function(e){f(c.extend({hitType:"pageview"},e))}).apply(this,e);break;case"event":s.apply(this,e)}}else(function(e){!y&&v&&v.length&&(y=!0,(p=c.extend(p,e||{})).autoEvents&&v.find("a").not("["+w+"]").each(n),p.scrollDepth&&(l(),u.on(m.scroll,i).one(m.load,t)),v.on(m.click,"*["+w+"]",r))}).apply(this,arguments);return null}}}),p={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},d=a.window,u=a.$window,v=null,h=e.functions,m=e.events,y=!1,g="analytics-event",w="data-"+g,x={},T=null,k="Site",b=null;a.Ready(function(){v=a.$body})});
/*! formstone v1.4.22 [background.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(u,t){"use strict";function e(){(Y=$.scrollTop()+t.windowHeight)<0&&(Y=0),T.iterate.call(j,s)}function i(){C=u(m.base),j=u(m.lazy),T.iterate.call(j,r)}function o(e){if(e.visible){var i=e.source;e.source=null,a(e,i,!0)}}function a(e,i,o){if(i!==e.source&&e.visible){if(e.source=i,e.responsive=!1,e.isYouTube=!1,"object"==typeof i&&"string"==typeof i.video){var t=i.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);t&&1<=t.length&&(e.isYouTube=!0,e.videoId=t[1])}var a=!e.isYouTube&&"object"==typeof i&&(i.hasOwnProperty("mp4")||i.hasOwnProperty("ogg")||i.hasOwnProperty("webm"));if(e.video=e.isYouTube||a,e.playing=!1,e.isYouTube)e.playerReady=!1,e.posterLoaded=!1,p(e,i,o);else if("object"==typeof i&&i.hasOwnProperty("poster"))!function(i,e,o){i.source&&i.source.poster&&(c(i,i.source.poster,!0,!0),o=!1);var t='<div class="'+[b.media,b.video,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';t+="<video playsinline",i.loop&&(t+=" loop");i.mute&&(t+=" muted");i.autoPlay&&(t+=" autoplay");t+=">",i.source.webm&&(t+='<source src="'+i.source.webm+'" type="video/webm" />');i.source.mp4&&(t+='<source src="'+i.source.mp4+'" type="video/mp4" />');i.source.ogg&&(t+='<source src="'+i.source.ogg+'" type="video/ogg" />');t+="</video>";var a=u(t+="</div>");a.find("video").one(w.loadedMetaData,function(e){a.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded),i.autoPlay&&f(i)}),i.$container.append(a)}(e,0,o);else{var n=i;if("object"==typeof i){var r,s=[],d=[];for(r in i)i.hasOwnProperty(r)&&d.push(r);for(r in d.sort(T.sortAsc),d)d.hasOwnProperty(r)&&s.push({width:parseInt(d[r]),url:i[d[r]],mq:P.matchMedia("(min-width: "+parseInt(d[r])+"px)")});e.responsive=!0,e.sources=s,n=l(e)}c(e,n,!1,o)}}else e.$el.trigger(w.loaded)}function l(e){var i=e.source;if(e.responsive)for(var o in i=e.sources[0].url,e.sources)e.sources.hasOwnProperty(o)&&(t.support.matchMedia?e.sources[o].mq.matches&&(i=e.sources[o].url):e.sources[o].width<t.fallbackWidth&&(i=e.sources[o].url));return i}function c(e,i,o,t){var a=[b.media,b.image,!0!==t?b.animated:""].join(" "),n=u('<div class="'+a+'" aria-hidden="true"><img alt="'+e.alt+'"></div>'),r=n.find("img"),s=i;r.one(w.load,function(){I&&n.addClass(b.native).css({backgroundImage:"url('"+s+"')"}),n.fsTransition({property:"opacity"},function(){o||y(e)}).css({opacity:1}),h(e),o&&!t||e.$el.trigger(w.loaded)}).one(w.error,e,d).attr("src",s),e.responsive&&n.addClass(b.responsive),e.$container.append(n),!r[0].complete&&4!==r[0].readyState||r.trigger(w.load),e.currentSource=s}function p(i,e,o){if(!i.videoId){var t=e.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);i.videoId=t[1]}if(i.posterLoaded||(i.source.poster||(i.source.poster="//img.youtube.com/vi/"+i.videoId+"/0.jpg"),i.posterLoaded=!0,c(i,i.source.poster,!0,o),o=!1),u("script[src*='youtube.com/iframe_api']").length||u("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),R){var a=i.guid+"_"+i.youTubeGuid++,n='<div class="'+[b.media,b.embed,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';n+='<div id="'+a+'"></div>';var r=u(n+="</div>"),s=u.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:a,loop:i.loop?1:0,autoplay:1,mute:1,origin:P.location.protocol+"//"+P.location.host},i.youtubeOptions);s.autoplay=1,i.$container.append(r),i.player&&(i.oldPlayer=i.player,i.player=null),i.player=new P.YT.Player(a,{videoId:i.videoId,playerVars:s,events:{onReady:function(e){i.playerReady=!0,i.mute&&i.player.mute(),i.autoPlay?i.player.playVideo():i.player.pauseVideo()},onStateChange:function(e){i.playing||e.data!==P.YT.PlayerState.PLAYING?i.loop&&i.playing&&e.data===P.YT.PlayerState.ENDED&&i.player.playVideo():(i.playing=!0,r.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded)),i.$el.find(m.embed).addClass(b.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){d({data:i})},onApiChange:function(e){}}}),h(i)}else z.push({data:i,source:e})}function y(e){var i=e.$container.find(m.media);1<=i.length&&(i.not(":last").remove(),e.oldPlayer=null)}function d(e){e.data.$el.trigger(w.error)}function f(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function n(e){if(e.visible)if(e.responsive){var i=l(e);i!==e.currentSource?c(e,i,!1,!0):h(e)}else h(e)}function h(e){for(var i=e.$container.find(m.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!=n||!I)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=v(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function r(e){e.scrollTop=e.$el.offset().top}function s(e){!e.visible&&e.scrollTop<Y+e.lazyEdge&&(e.visible=!0,o(e))}function v(e,i){if(e.isYouTube)return{height:500,width:500/e.embedRatio};if(i.is("img")){var o=i[0];if(void 0!==o.naturalHeight)return{height:o.naturalHeight,width:o.naturalWidth};var t=new Image;return t.src=o.src,{height:t.height,width:t.width}}return{height:i[0].videoHeight,width:i[0].videoWidth}}var g=t.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(e){e.youTubeGuid=0,e.$container=u('<div class="'+b.container+'"></div>').appendTo(this),e.thisClasses=[b.base,e.customClass],e.visible=!0,e.lazy&&(e.visible=!1,e.thisClasses.push(b.lazy)),this.addClass(e.thisClasses.join(" ")),i(),e.lazy?(r(e),s(e)):o(e)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(w.namespace),i()},_resize:function(){T.iterate.call(C,n),T.iterate.call(j,r),T.iterate.call(j,s)},play:f,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:h,load:a,unload:function(e){var i=e.$container.find(m.media);1<=i.length&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),m=g.classes,b=m.raw,w=g.events,T=g.functions,P=t.window,$=t.$window,Y=0,C=[],j=[],I="backgroundSize"in t.document.documentElement.style,R=!1,z=[];t.Ready(function(){e(),$.on("scroll",e)}),P.onYouTubeIframeAPIReady=function(){for(var e in R=!0,z)z.hasOwnProperty(e)&&p(z[e].data,z[e].source);z=[]}});
/*! formstone v1.4.22 [carousel.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(u,m){"use strict";function g(){H=u(j.base)}function h(e){e.enabled&&(X.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(L.update),this.removeClass([y.enabled,y.animated].join(" ")).off(L.namespace),e.$canister.fsTouch("destroy").off(L.namespace).attr("style","").css(z,"none"),e.$items.css({width:"",height:""}).removeClass([y.visible,j.item_previous,j.item_next].join(" ")),e.$images.off(L.namespace),e.$controlItems.off(L.namespace),e.$pagination.html("").off(L.namespace),$(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(N,""),e.index=0)}function p(e){e.enabled||(e.enabled=!0,this.addClass(y.enabled),e.$controlItems.on(L.click,e,o),e.$pagination.on(L.click,j.page,e,r),e.$items.on(L.click,e,W),e.$subordinate.on(L.update,e,P),P({data:e},0),e.touch&&e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(L.panStart,e,l).on(L.pan,e,c).on(L.panEnd,e,d).on(L.swipe,e,x).on(L.focusIn,e,M).css(z,""),f(e),e.$images.on(L.load,e,s),e.autoAdvance&&(e.autoTimer=X.startTimer(e.autoTimer,e.autoTime,function(){!function(e){var t=e.index+1;t>=e.pageCount&&(t=0);v(e,t)}(e)},!0)),i.call(this,e))}function i(e){if(e.enabled){var t,i,a,n,s;if(e.count=e.$items.length,e.count<1)return $(e),void e.$canister.css({height:""});if(this.removeClass(y.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=function(e){var t=1;{if(e.single)return t;if("object"==typeof e.show)for(var i in e.show)e.show.hasOwnProperty(i)&&(m.support.matchMedia?e.show[i].mq.matches&&(t=e.show[i].count):e.show[i].width<m.fallbackWidth&&(t=e.show[i].count));else t=e.show}return e.fill&&e.count<t?e.count:t}(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.matchWidth)e.canisterWidth=e.single?e.containerWidth:(e.itemWidth+e.itemMargin)*e.count;else for(e.canisterWidth=0,e.$canister.css({width:1e6}),t=0;t<e.count;t++)e.canisterWidth+=e.$items.eq(t).outerWidth(!0);e.$canister.css({width:e.canisterWidth,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([y.visible,y.item_previous,y.item_next].join(" ")),e.pages=[],e.items=[];var o,r=0,l=0,c=0;for(n=a=0,i=u(),t=0;t<e.count;t++)o=e.$items.eq(t),r=e.matchWidth?e.itemWidth+e.itemMargin:o.outerWidth(!0),l=o.outerHeight(),c=o.position().left,e.items.push({$el:o,width:r,height:l,left:e.rtl?c-(e.canisterWidth-r):c}),(i.length&&a+r>e.containerWidth+e.itemMargin||e.paged&&0<t)&&(s=(e.rtl?i.eq(i.length-1):i.eq(0)).position().left,e.pages.push({left:e.rtl?s-(e.canisterWidth-a):s,height:n,width:a,$items:i}),i=u(),a=n=0),i=i.add(o),a+=r,r,n<l&&(n=l),n>e.itemHeight&&(e.itemHeight=n);if(e.rtl?i.eq(i.length-1):i.eq(0),s=e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight),e.pages.push({left:e.rtl?-s:s,height:n,width:a,$items:i}),e.pageCount=e.pages.length,e.paged&&e.matchWidth&&(e.pageCount-=e.count%e.visible),e.pageCount<=0&&(e.pageCount=1),e.maxMove=(e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight))*(e.rtl?1:-1),e.paged&&!e.matchWidth)for(t=0;t<e.pages.length;t++)if(e.pages[t].left-e.pages[t].width>Math.abs(e.maxMove)){e.pageCount=t;break}e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var d="";for(t=0;t<e.pageCount;t++)d+='<button type="button" class="'+y.page+'">'+(t+1)+"</button>";e.$pagination.html(d),e.pageCount<=1?$(e):function(e){e.$controls.addClass(y.visible),e.$controlItems.addClass(y.visible),e.$pagination.addClass(y.visible),C(e,e.$controlItems)}(e),e.$paginationItems=e.$pagination.find(j.page),v(e,e.index,!1),setTimeout(function(){e.$el.addClass(y.animated)},5)}}function f(e){e.$items=e.$canister.children().not(":hidden").addClass(y.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function t(e,t){e.$images.off(L.namespace),!1!==t&&e.$canister.html(t),e.index=0,f(e),i.call(this,e)}function e(e,t,i,a,n){e.enabled&&(a||X.clearTimer(e.autoTimer),void 0===n&&(n=!0),v(e,t-1,n,i,a))}function a(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),v(e,t)}function n(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),v(e,t)}function s(e){var t=e.data;t.resizeTimer=X.startTimer(t.resizeTimer,1,function(){i.call(t.$el,t)})}function o(e){X.killEvent(e);var t=e.data,i=t.index+(u(e.currentTarget).hasClass(y.control_next)?1:-1);X.clearTimer(t.autoTimer),v(t,i)}function r(e){X.killEvent(e);var t=e.data,i=t.$paginationItems.index(u(e.currentTarget));X.clearTimer(t.autoTimer),v(t,i)}function v(e,t,i,a,n){if(t<0&&(t=e.infinite?e.pageCount-1:0),t>=e.pageCount&&(t=e.infinite?0:e.pageCount-1),!(e.count<1)){if(e.pages[t]&&(e.leftPosition=-e.pages[t].left),e.leftPosition=T(e,e.leftPosition),e.useMargin?e.$canister.css({marginLeft:e.leftPosition}):!1===i?(e.$canister.css(z,"none").css(N,"translateX("+e.leftPosition+"px)"),setTimeout(function(){e.$canister.css(z,"")},5)):e.$canister.css(N,"translateX("+e.leftPosition+"px)"),e.$items.removeClass([y.visible,y.item_previous,y.item_next].join(" ")),e.single)for(var s=0,o=e.pages.length;s<o;s++)s===t?e.pages[s].$items.addClass(y.visible).attr("aria-hidden","false"):e.pages[s].$items.not(e.pages[t].$items).addClass(s<t?y.item_previous:y.item_next).attr("aria-hidden","true");else for(s=0;s<e.count;s++){var r=e.rtl?-1:1,l=e.leftPosition*r+e.items[s].left*r,c=l+e.items[s].width,d=e.containerWidth+e.itemMargin+1;-1<=l&&c<=d?e.items[s].$el.addClass(y.visible).attr("aria-hidden","false"):l<0?e.items[s].$el.addClass(y.item_previous).attr("aria-hidden","false"):e.items[s].$el.addClass(y.item_next).attr("aria-hidden","false")}e.autoHeight&&e.$canister.css({height:e.pages[t].height}),!1!==i&&!0!==a&&t!==e.index&&(e.infinite||-1<t&&t<e.pageCount)&&e.$el.trigger(L.update,[t]),e.index=t,e.linked&&!0!==n&&u(e.linked).not(e.$el)[q]("jumpPage",e.index+1,!0,!0),function(e){e.$paginationItems.removeClass(y.active).eq(e.index).addClass(y.active),e.infinite?(e.$controlItems.addClass(y.visible),C(e,e.$controlItems)):e.pageCount<1?(e.$controlItems.removeClass(y.visible),b(e,e.$controlItems)):(e.$controlItems.addClass(y.visible),C(e,e.$controlItems),e.index<=0?(e.$controlPrevious.removeClass(y.visible),b(e,e.$controlPrevious)):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&(e.$controlNext.removeClass(y.visible),b(e,e.$controlNext)))}(e)}}function $(e){e.$controls.removeClass(y.visible),e.$controlItems.removeClass(y.visible),e.$pagination.removeClass(y.visible),b(e,e.$controlItems)}function b(e,t){e.customControls||t.prop("disabled",!0)}function C(e,t){e.customControls||t.prop("disabled",!1)}function l(e,t){var i=e.data;if(X.clearTimer(i.autoTimer),!i.single){if(i.useMargin)i.leftPosition=parseInt(i.$canister.css("marginLeft"));else{var a=i.$canister.css(N).split(",");i.leftPosition=parseInt(a[4])}if(i.$canister.css(z,"none").css("will-change","transform"),c(e),i.linked&&!0!==t){var n=e.deltaX/i.pageWidth;i.rtl&&(n*=-1),u(i.linked).not(i.$el)[q]("panStart",n)}}i.isTouching=!0}function c(e,t){var i=e.data;if(!i.single&&(i.touchLeft=T(i,i.leftPosition+e.deltaX),i.useMargin?i.$canister.css({marginLeft:i.touchLeft}):i.$canister.css(N,"translateX("+i.touchLeft+"px)"),i.linked&&!0!==t)){var a=e.deltaX/i.pageWidth;i.rtl&&(a*=-1),u(i.linked).not(i.$el)[q]("pan",a)}}function d(e,t){var i=e.data,a=Math.abs(e.deltaX),n=I(i,e),s=!1;if(i.didPan=!1,0==n)s=i.index;else{if(!i.single){var o,r,l=Math.abs(i.touchLeft),c=!1,d=i.rtl?"right":"left";if(e.directionX===d)for(o=0,r=i.pages.length;o<r;o++)c=i.pages[o],l>Math.abs(c.left)+20&&(s=o+1);else for(o=i.pages.length-1,r=0;r<=o;o--)c=i.pages[o],l<Math.abs(c.left)&&(s=o-1)}!1===s&&(s=a<50?i.index:i.index+n)}s!==i.index&&(i.didPan=!0),i.linked&&!0!==t&&u(i.linked).not(i.$el)[q]("panEnd",s),w(i,s)}function x(e,t){var i=e.data,a=I(i,e),n=i.index+a;i.linked&&!0!==t&&u(i.linked).not(i.$el)[q]("swipe",e.directionX),w(i,n)}function w(e,t){e.$canister.css(z,"").css("will-change",""),v(e,t),e.isTouching=!1}function W(e){var t=e.data,i=u(e.currentTarget);if(!t.didPan&&(i.trigger(L.itemClick),t.controller)){var a=t.$items.index(i);P(e,a),t.$subordinate[q]("jumpPage",a+1,!0)}}function M(e){var t=e.data;if(t.enabled&&!t.isTouching){X.clearTimer(t.autoTimer),t.$container.scrollLeft(0);var i,a=u(e.target);a.hasClass(y.item)?i=a:a.parents(j.item).length&&(i=a.parents(j.item).eq(0));for(var n=0;n<t.pageCount;n++)if(t.pages[n].$items.is(i)){v(t,n);break}}}function P(e,t){var i=e.data;if(i.controller){var a=i.$items.eq(t);i.$items.removeClass(y.active),a.addClass(y.active);for(var n=0;n<i.pageCount;n++)if(i.pages[n].$items.is(a)){v(i,n,!0,!0);break}}}function T(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),0<t&&(t=0)),t}function I(e,t){return Math.abs(t.deltaX)<Math.abs(t.deltaY)?0:e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var _=m.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous",controls:"Carousel {guid} Controls",pagination:"Carousel {guid} Pagination"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",touch:!0,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(e){var t;e.didPan=!1,e.carouselClasses=[y.base,e.theme,e.customClass,e.rtl?y.rtl:y.ltr],e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.customControls="object"==typeof e.controls&&e.controls.previous&&e.controls.next,e.customPagination="string"==typeof e.pagination,e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),m.support.transform||(e.useMargin=!0);var i="",a="",n=[y.control,y.control_previous].join(" "),s=[y.control,y.control_next].join(" ");e.controls&&!e.customControls&&(e.labels.controls=e.labels.controls.replace("{guid}",e.numGuid),i+='<div class="'+y.controls+'" aria-label="'+e.labels.controls+'" aria-controls="'+e.ariaId+'">',i+='<button type="button" class="'+n+'" aria-label="'+e.labels.previous+'">'+e.labels.previous+"</button>",i+='<button type="button" class="'+s+'" aria-label="'+e.labels.next+'">'+e.labels.next+"</button>",i+="</div>"),e.pagination&&!e.customPagination&&(e.labels.pagination=e.labels.pagination.replace("{guid}",e.numGuid),a+='<div class="'+y.pagination+'" aria-label="'+e.labels.pagination+'" aria-controls="'+e.ariaId+'" role="navigation">',a+="</div>"),e.autoHeight&&e.carouselClasses.push(y.auto_height),e.contained&&e.carouselClasses.push(y.contained),e.single&&e.carouselClasses.push(y.single),this.addClass(e.carouselClasses.join(" ")).wrapInner('<div class="'+y.wrapper+'" aria-live="polite"><div class="'+y.container+'"><div class="'+y.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+y.viewport+'"></div>').append(a),e.$viewport=this.find(j.viewport).eq(0),e.$container=this.find(j.container).eq(0),e.$canister=this.find(j.canister).eq(0),e.$pagination=this.find(j.pagination).eq(0),e.$controlPrevious=e.$controlNext=u(""),e.customControls?(e.$controls=u(e.controls.container).addClass([y.controls,y.controls_custom].join(" ")),e.$controlPrevious=u(e.controls.previous).addClass(n),e.$controlNext=u(e.controls.next).addClass(s)):(e.$controls=this.find(j.controls).eq(0),e.$controlPrevious=e.$controls.find(j.control_previous),e.$controlNext=e.$controls.find(j.control_next)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.customPagination&&(e.$pagination=u(e.pagination).addClass([y.pagination])),e.$paginationItems=e.$pagination.find(j.page),e.index=0,e.enabled=!1,e.leftPosition=0,e.autoTimer=null,e.resizeTimer=null;var o=this.data(k+"-linked");e.linked=!!o&&"[data-"+k+'-linked="'+o+'"]',e.linked&&(e.paged=!0);var r=this.data(k+"-controller-for")||"";if(e.$subordinate=u(r),e.$subordinate.length&&(e.controller=!0),"object"==typeof e.show){var l=e.show,c=[],d=[];for(t in l)l.hasOwnProperty(t)&&d.push(t);for(t in d.sort(X.sortAsc),d)d.hasOwnProperty(t)&&c.push({width:parseInt(d[t]),count:l[d[t]],mq:window.matchMedia("(min-width: "+parseInt(d[t])+"px)")});e.show=c}f(e),u.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){p.call(e.$el,e)},leave:function(){h.call(e.$el,e)}}),g(),e.carouselClasses.push(y.enabled),e.carouselClasses.push(y.animated)},_destruct:function(e){X.clearTimer(e.autoTimer),X.clearTimer(e.resizeTimer),h.call(this,e),u.fsMediaquery("unbind",e.rawGuid),e.id!==e.ariaId&&this.removeAttr("id"),e.$controlItems.removeClass([j.control,y.control_previous,j.control_next,j.visible].join(" ")).off(L.namespace),C(e,e.$controlItems),e.$images.off(L.namespace),e.$canister.fsTouch("destroy"),e.$items.removeClass([y.item,y.visible,j.item_previous,j.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),e.controls&&!e.customControls&&e.$controls.remove(),e.customControls&&e.$controls.removeClass([y.controls,y.controls_custom,y.visible].join(" ")),e.pagination&&!e.customPagination&&e.$pagination.remove(),e.customPagination&&e.$pagination.html("").removeClass([y.pagination,y.visible].join(" ")),this.removeClass(e.carouselClasses.join(" ")),g()},_resize:function(e){X.iterate.call(H,i)},disable:h,enable:p,jump:e,previous:a,next:n,jumpPage:e,previousPage:a,nextPage:n,jumpItem:function(e,t,i,a,n){if(e.enabled){X.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===n&&(n=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){v(e,o,n,i,a);break}}},reset:function(e){e.enabled&&t.call(this,e,!1)},resize:i,update:t,panStart:function(e,t){if(X.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(N).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(z,"none"),c({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=T(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(N,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){w(e,t)},swipe:function(e,t){x({data:e,directionX:t},!0)}}}),k=_.namespace,q=_.namespaceClean,j=_.classes,y=j.raw,L=_.events,X=_.functions,H=[],N=m.transform,z=m.transition});
/*! formstone v1.4.22 [checkpoint.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(){p=h.height(),d.iterate.call(g,o)}function a(){g=s(r.base),t()}function i(e){if(e.hasParent){var t=e.$parent.scrollTop();t!==e.parentScroll&&(n(e),e.parentScroll=t)}}function o(e){if(e.initialized){switch(e.parentHeight=e.hasParent?e.$parent.outerHeight(!1):p,e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=e.parentHeight/2-e.offset;break;case"bottom":e.windowCheck=e.parentHeight-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}if(e.hasParent){var t=e.$parent.offset();e.elCheck-=t.top}n(e)}}function n(e){e.initialized&&(e.windowCheck+(e.hasParent?e.parentScroll:v)>=e.elCheck?(e.active||e.$el.trigger(f.activate),e.active=!0,e.$el.addClass(l.active)):e.reverse&&(e.active&&e.$el.trigger(f.deactivate),e.active=!1,e.$el.removeClass(l.active)))}var c=e.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(e){e.initialized=!1;var t=s(e.$el.data("checkpoint-parent")),a=s(e.$el.data("checkpoint-container")),i=e.$el.data("checkpoint-intersect"),n=e.$el.data("checkpoint-offset");i&&(e.intersect=i),n&&(e.offset=n);var c=e.intersect.split("-");e.windowIntersect=c[0],e.elIntersect=c[1],e.visible=!1,e.$target=a.length?a:e.$el,e.hasParent=0<t.length,e.$parent=t;var r=e.$target.find("img");r.length&&r.on(f.load,e,o),e.$el.addClass(l.base),e.initialized=!0},_postConstruct:function(e){a(),t()},_destruct:function(e){e.$el.removeClass(l.base),a()},_resize:t,_raf:function(){(v=h.scrollTop())<0&&(v=0),v!==u&&(d.iterate.call(g,n),u=v),d.iterate.call(g,i)},resize:o}}),r=(c.namespace,c.classes),l=r.raw,f=c.events,d=c.functions,h=(e.window,e.$window),p=0,v=0,u=0,g=[]});
/*! formstone v1.4.22 [cookie.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(t,e){"use strict";function r(e,n,i){var t=!1,r=new Date;i.expires&&"number"==typeof i.expires&&(r.setTime(r.getTime()+i.expires),t=r.toGMTString());var o=i.domain?"; domain="+i.domain:"",u=t?"; expires="+t:"",l=t?"; max-age="+i.expires/1e3:"",s=i.path?"; path="+i.path:"",f=i.secure?"; secure":"";a.cookie=e+"="+n+u+l+o+s+f}e.Plugin("cookie",{utilities:{_delegate:function(e,n,i){if("object"==typeof e)o=t.extend(o,e);else if(i=t.extend({},o,i||{}),void 0!==e){if(void 0===n)return function(e){for(var n=e+"=",i=a.cookie.split(";"),t=0;t<i.length;t++){for(var r=i[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}(e);null===n?function(e,n){r(e,"",t.extend({},n,{expires:-6048e5}))}(e,i):r(e,n,i)}return null}}});var o={domain:null,expires:6048e5,path:null,secure:null},a=e.document});
/*! formstone v1.4.22 [equalize.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(t,e){"use strict";function n(){u=t(d.element)}function i(e){if(e.data&&(e=e.data),e.enabled)for(var t,n,i,r=0;r<e.target.length;r++){n=t=0,(i=e.$el.find(e.target[r])).css(e.property,"");for(var a=0;a<i.length;a++)t<(n=i.eq(a)[e.type]())&&(t=n);i.css(e.property,t)}}function r(e){for(var t=0;t<e.target.length;t++)e.$el.find(e.target[t]).css(e.property,"");e.$el.find("img").off(o.namespace)}var a=e.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:function(e){e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.type="height"===e.property?"outerHeight":"outerWidth",e.target?t.isArray(e.target)||(e.target=[e.target]):e.target=["> *"],n(),t.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){(function(e){if(!e.enabled){e.enabled=!0;var t=e.$el.find("img");t.length&&t.on(o.load,e,i),i(e)}}).call(e.$el,e)},leave:function(){(function(e){e.enabled&&(e.enabled=!1,r(e))}).call(e.$el,e)}})},_destruct:function(e){r(e),t.fsMediaquery("unbind",e.rawGuid),n()},_resize:function(e){f.iterate.call(u,i)},resize:i}}),d=a.classes,o=(d.raw,a.events),f=a.functions,u=[]});
/*! formstone v1.4.22 [lightbox.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],t):t(jQuery,Formstone)}(function($,f){"use strict";function e(t){if(!K){var i=t.data;(K=$.extend({},{visible:!1,gallery:{active:!1},isMobile:f.isMobile&&!1!==i.mobile||i.overlay,isTouch:f.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},i)).isViewer=K.isMobile&&i.viewer&&void 0!==$.fn.fsViewer;var e=i.$el,n=i.$object,o=e&&e[0].href&&e[0].href||"",a=e&&e[0].hash&&e[0].hash||"",l=(o.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(P+"-type"):""),r="image"===l||o.match(i.fileTypes)||"data:image"===o.substr(0,10),g=L(o),s="url"===l||!r&&!g&&"http"===o.substr(0,4)&&!a,d="element"===l||!r&&!g&&!s&&"#"===a.substr(0,1),h=void 0!==n;if(d&&(o=a),!(r||g||s||d||h))return void(K=null);if(A.killEvent(t),K.margin*=2,K.type=r?"image":g?"video":"element",e&&e.length){var c=e.data(P+"-gallery");c&&(K.gallery.active=!0,K.gallery.id=c,K.gallery.$items=$("a[data-lightbox-gallery= "+K.gallery.id+"], a[rel= "+K.gallery.id+"]"),K.gallery.index=K.gallery.$items.index(K.$el),K.gallery.total=K.gallery.$items.length-1)}K.thumbnails&&(r||g)&&K.gallery.active||(K.thumbnails=!1);var m="";K.isMobile||(m+='<div class="'+[E.overlay,K.theme,K.customClass].join(" ")+'"></div>');var p=[E.base,E.loading,E.animating,K.theme,K.customClass];if(K.fixed&&p.push(E.fixed),K.isMobile&&p.push(E.mobile),K.isTouch&&p.push(E.touch),s&&p.push(E.iframed),(d||h)&&p.push(E.inline),K.thumbnails&&p.push(E.thumbnailed),K.labels.lightbox=K.labels.lightbox.replace("{guid}",i.numGuid),m+='<div class="'+p.join(" ")+'" role="dialog" aria-label="'+K.labels.lightbox+'" tabindex="-1">',m+='<button type="button" class="'+E.close+'">'+K.labels.close+"</button>",m+='<span class="'+E.loading_icon+'"></span>',m+='<div class="'+E.container+'">',K.gallery.active&&K.thumbnails){var u,b;m+='<div class="'+[E.thumbnails]+'">',m+='<div class="'+[E.thumbnail_container]+'">';for(var v=0,H=K.gallery.$items.length;v<H;v++)b=(b=(u=K.gallery.$items.eq(v)).data("lightbox-thumbnail"))||u.find("img").attr("src"),m+='<button class="'+[E.thumbnail_item]+'">',m+='<img src="'+b+'" alt="">',m+="</button>";m+="</div></div>"}m+='<div class="'+E.content+'"></div>',r||g?(m+='<div class="'+E.tools+'">',m+='<div class="'+E.controls+'">',K.gallery.active&&(m+='<button type="button" class="'+[E.control,E.control_previous].join(" ")+'">'+K.labels.previous+"</button>",m+='<button type="button" class="'+[E.control,E.control_next].join(" ")+'">'+K.labels.next+"</button>"),K.isMobile&&K.isTouch&&(m+='<button type="button" class="'+[E.toggle,E.caption_toggle].join(" ")+'">'+K.labels.captionClosed+"</button>",K.gallery.active&&K.thumbnails&&(m+='<button type="button" class="'+[E.toggle,E.thumbnail_toggle].join(" ")+'">'+K.labels.thumbnailsClosed+"</button>")),m+="</div>",m+='<div class="'+E.meta+'">',m+='<div class="'+E.meta_content+'">',K.gallery.active&&(m+='<p class="'+E.position+'"',K.gallery.total<1&&(m+=' style="display: none;"'),m+=">",m+='<span class="'+E.position_current+'">'+(K.gallery.index+1)+"</span> ",m+=K.labels.count,m+=' <span class="'+E.position_total+'">'+(K.gallery.total+1)+"</span>",m+="</p>"),m+='<div class="'+E.caption+'">',m+=K.formatter.call(e,i),m+="</div></div></div>",m+="</div>"):K.gallery.active&&(m+='<div class="'+E.tools+'">',m+='<div class="'+E.controls+'">',m+='<button type="button" class="'+[E.control,E.control_previous].join(" ")+'">'+K.labels.previous+"</button>",m+='<button type="button" class="'+[E.control,E.control_next].join(" ")+'">'+K.labels.next+"</button>",m+="</div>",m+="</div>"),m+="</div></div>",F.append(m),K.$overlay=$(q.overlay),K.$lightbox=$(q.base),K.$close=$(q.close),K.$container=$(q.container),K.$content=$(q.content),K.$tools=$(q.tools),K.$meta=$(q.meta),K.$metaContent=$(q.meta_content),K.$position=$(q.position),K.$caption=$(q.caption),K.$controlBox=$(q.controls),K.$controls=$(q.control),K.$thumbnails=$(q.thumbnails),K.$thumbnailContainer=$(q.thumbnail_container),K.$thumbnailItems=$(q.thumbnail_item),K.isMobile?(K.paddingVertical=K.$close.outerHeight(),K.paddingHorizontal=0,K.mobilePaddingVertical=parseInt(K.$content.css("paddingTop"),10)+parseInt(K.$content.css("paddingBottom"),10),K.mobilePaddingHorizontal=parseInt(K.$content.css("paddingLeft"),10)+parseInt(K.$content.css("paddingRight"),10)):(K.paddingVertical=parseInt(K.$lightbox.css("paddingTop"),10)+parseInt(K.$lightbox.css("paddingBottom"),10),K.paddingHorizontal=parseInt(K.$lightbox.css("paddingLeft"),10)+parseInt(K.$lightbox.css("paddingRight"),10),K.mobilePaddingVertical=0,K.mobilePaddingHorizontal=0),K.contentHeight=K.$lightbox.outerHeight()-K.paddingVertical,K.contentWidth=K.$lightbox.outerWidth()-K.paddingHorizontal,K.controlHeight=K.$controls.outerHeight(),function(){var t=W();K.$lightbox.css({top:K.fixed?0:t.top})}(),K.gallery.active&&(K.$lightbox.addClass(E.has_controls),T()),B.on(R.keyDown,M),F.on(R.click,[q.overlay,q.close].join(", "),w).on([R.focus,R.focusIn].join(" "),O),K.gallery.active&&K.$lightbox.on(R.click,q.control,I),K.thumbnails&&K.$lightbox.on(R.click,q.thumbnail_item,V),K.isMobile&&K.isTouch&&K.$lightbox.on(R.click,q.caption_toggle,y).on(R.click,q.thumbnail_toggle,x),K.$lightbox.fsTransition({property:"opacity"},function(){r?C(o):g?_(o):s?k(o):d?j(o):h&&z(K.$object)}).addClass(E.open),K.$overlay.addClass(E.open)}}function t(t){"object"!=typeof t&&(K.targetHeight=t,K.targetWidth=arguments[1]),"element"===K.type?h(K.$content.find("> :first-child")):"image"===K.type?i():"video"===K.type&&r(),function(){if(K.visible&&!K.isMobile){var t=W();K.$controls.css({marginTop:(K.contentHeight-K.controlHeight-K.metaHeight+K.thumbnailHeight)/2}),K.$lightbox.css({height:K.contentHeight+K.paddingVertical,width:K.contentWidth+K.paddingHorizontal,top:K.fixed?0:t.top}),K.oldContentHeight=K.contentHeight,K.oldContentWidth=K.contentWidth}}()}function w(t){A.killEvent(t),K&&(K.$lightbox.fsTransition("destroy"),K.$content.fsTransition("destroy"),K.$lightbox.addClass(E.animating).fsTransition({property:"opacity"},function(t){void 0!==K.$inlineTarget&&K.$inlineTarget.length&&d(),K.isViewer&&K.$imageContainer&&K.$imageContainer.length&&K.$imageContainer.fsViewer("destroy"),K.$lightbox.off(R.namespace),K.$container.off(R.namespace),B.off(R.keyDown),F.off(R.namespace),F.off(R.namespace),K.$overlay.remove(),K.$lightbox.remove(),void 0!==K.$el&&K.$el&&K.$el.length&&K.$el.focus(),K=null,B.trigger(R.close)}),K.$lightbox.removeClass(E.open),K.$overlay.removeClass(E.open),K.isMobile&&(b.removeClass(E.lock),A.unlockViewport(P)))}function o(){var t=W();K.isMobile||K.duration;K.isMobile?A.lockViewport(P):K.$controls.css({marginTop:(K.contentHeight-K.controlHeight-K.metaHeight+K.thumbnailHeight)/2}),""===K.$caption.html()?(K.$caption.hide(),K.$lightbox.removeClass(E.has_caption),K.gallery.active||K.$tools.hide()):(K.$caption.show(),K.$lightbox.addClass(E.has_caption)),K.$lightbox.fsTransition({property:K.contentHeight!==K.oldContentHeight?"height":"width"},function(){K.$content.fsTransition({property:"opacity"},function(){K.$lightbox.removeClass(E.animating),K.isAnimating=!1}),K.$lightbox.removeClass(E.loading).addClass(E.ready),K.visible=!0,B.trigger(R.open,[{instance:K}]),K.gallery.active&&("element"==K.type||(function(){var t="";0<K.gallery.index&&(L(t=K.gallery.$items.eq(K.gallery.index-1).attr("href"))||$('<img src="'+t+'">'));K.gallery.index<K.gallery.total&&(L(t=K.gallery.$items.eq(K.gallery.index+1).attr("href"))||$('<img src="'+t+'">'))}(),g(),function(){if(K.thumbnails){var t=K.$thumbnailItems.eq(K.gallery.index),i=t.position().left+t.outerWidth(!1)/2-K.$thumbnailContainer.outerWidth(!0)/2;K.$thumbnailContainer.stop().animate({scrollLeft:i},200,"linear")}}())),K.$lightbox.focus()}),K.isMobile||K.$lightbox.css({height:K.contentHeight+K.paddingVertical,width:K.contentWidth+K.paddingHorizontal,top:K.fixed?0:t.top});var i=K.oldContentHeight!==K.contentHeight||K.oldContentWidth!==K.contentWidth;!K.isMobile&&i||K.$lightbox.fsTransition("resolve"),K.oldContentHeight=K.contentHeight,K.oldContentWidth=K.contentWidth,K.isMobile&&b.addClass(E.lock)}function W(){if(K.isMobile)return{left:0,top:0};var t={left:(f.windowWidth-K.contentWidth-K.paddingHorizontal)/2,top:K.top<=0?(f.windowHeight-K.contentHeight-K.paddingVertical)/2:K.top};return!0!==K.fixed&&(t.top+=B.scrollTop()),t}function y(t){if(A.killEvent(t),K.captionOpen)n();else{a();var i=parseInt(K.$metaContent.outerHeight(!0));i+=parseInt(K.$meta.css("padding-top")),i+=parseInt(K.$meta.css("padding-bottom")),K.$meta.css({height:i}),K.$lightbox.addClass(E.caption_open).find(q.caption_toggle).text(K.labels.captionOpen),K.captionOpen=!0}}function n(){K.$lightbox.removeClass(E.caption_open).find(q.caption_toggle).text(K.labels.captionClosed),K.captionOpen=!1}function x(t){A.killEvent(t),K.thumbnailsOpen?a():(n(),K.$lightbox.addClass(E.thumbnails_open).find(q.thumbnail_toggle).text(K.labels.thumbnailsOpen),K.thumbnailsOpen=!0)}function a(){K.$lightbox.removeClass(E.thumbnails_open).find(q.thumbnail_toggle).text(K.labels.thumbnailsClosed),K.thumbnailsOpen=!1}function C(t){K.isViewer?(K.$imageContainer=$('<div class="'+E.image_container+'"><img></div>'),K.$image=K.$imageContainer.find("img"),K.$image.attr("src",t).addClass(E.image),K.$content.prepend(K.$imageContainer),i(),K.$imageContainer.one("loaded.viewer",function(){o()}).fsViewer({theme:K.theme})):(K.$imageContainer=$('<div class="'+E.image_container+'"><img></div>'),K.$image=K.$imageContainer.find("img"),K.$image.one(R.load,function(){var t=function(t){var i=t[0],e=new Image;{if(void 0!==i.naturalHeight)return{naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth};if("img"===i.tagName.toLowerCase())return e.src=i.src,{naturalHeight:e.height,naturalWidth:e.width}}return!1}(K.$image);K.naturalHeight=t.naturalHeight,K.naturalWidth=t.naturalWidth,K.retina&&(K.naturalHeight/=2,K.naturalWidth/=2),K.$content.prepend(K.$imageContainer),i(),o()}).on(R.error,c).attr("src",t).addClass(E.image),!K.$image[0].complete&&4!==K.$image[0].readyState||K.$image.trigger(R.load))}function i(){if(K.$image){var t=0;for(K.windowHeight=K.viewportHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=K.viewportWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.contentHeight=1/0,K.contentWidth=1/0,K.imageMarginTop=0,K.imageMarginLeft=0;K.contentHeight>K.viewportHeight&&t<2;)K.imageHeight=0===t?K.naturalHeight:K.$image.outerHeight(),K.imageWidth=0===t?K.naturalWidth:K.$image.outerWidth(),K.metaHeight=0===t?0:K.metaHeight,K.spacerHeight=0===t?0:K.spacerHeight,K.thumbnailHeight=0===t?0:K.thumbnailHeight,0===t&&(K.ratioHorizontal=K.imageHeight/K.imageWidth,K.ratioVertical=K.imageWidth/K.imageHeight,K.isWide=K.imageWidth>K.imageHeight),K.imageHeight<K.minHeight&&(K.minHeight=K.imageHeight),K.imageWidth<K.minWidth&&(K.minWidth=K.imageWidth),K.isMobile?(K.isTouch?(K.$controlBox.css({width:f.windowWidth}),K.spacerHeight=K.$controls.outerHeight(!0)):(K.$tools.css({width:f.windowWidth}),K.spacerHeight=K.$tools.outerHeight(!0)),K.contentHeight=K.viewportHeight,K.contentWidth=K.viewportWidth,K.isTouch||K.$content.css({height:K.contentHeight-K.spacerHeight}),K.$thumbnails.length&&(K.spacerHeight+=K.$thumbnails.outerHeight(!0)),K.spacerHeight+=10,l(),K.imageMarginTop=(K.contentHeight-K.targetImageHeight-K.spacerHeight)/2,K.imageMarginLeft=(K.contentWidth-K.targetImageWidth)/2):(0===t&&(K.viewportHeight-=K.margin+K.paddingVertical,K.viewportWidth-=K.margin+K.paddingHorizontal),K.viewportHeight-=K.metaHeight,K.thumbnails&&(K.viewportHeight-=K.thumbnailHeight),l(),K.contentHeight=K.targetImageHeight,K.contentWidth=K.targetImageWidth),K.isMobile||K.isTouch||K.$meta.css({width:K.contentWidth}),K.$image.css({height:K.targetImageHeight,width:K.targetImageWidth,marginTop:K.imageMarginTop,marginLeft:K.imageMarginLeft}),K.isMobile||(K.metaHeight=K.$meta.outerHeight(!0),K.contentHeight+=K.metaHeight),K.thumbnails&&(K.thumbnailHeight=K.$thumbnails.outerHeight(!0),K.contentHeight+=K.thumbnailHeight),t++}}function l(){var t=K.isMobile?K.contentHeight-K.spacerHeight:K.viewportHeight,i=K.isMobile?K.contentWidth:K.viewportWidth;K.isWide?(K.targetImageWidth=i,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal,K.targetImageHeight>t&&(K.targetImageHeight=t,K.targetImageWidth=K.targetImageHeight*K.ratioVertical)):(K.targetImageHeight=t,K.targetImageWidth=K.targetImageHeight*K.ratioVertical,K.targetImageWidth>i&&(K.targetImageWidth=i,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal)),(K.targetImageWidth>K.imageWidth||K.targetImageHeight>K.imageHeight)&&(K.targetImageHeight=K.imageHeight,K.targetImageWidth=K.imageWidth),(K.targetImageWidth<K.minWidth||K.targetImageHeight<K.minHeight)&&(K.targetImageWidth<K.minWidth?(K.targetImageWidth=K.minWidth,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal):(K.targetImageHeight=K.minHeight,K.targetImageWidth=K.targetImageHeight*K.ratioVertical))}function _(t){var i=L(t),e=t.split("?"),n="&origin="+encodeURIComponent(window.location.protocol+"//"+window.location.hostname);i?(2<=e.length&&(i+="?"+e.slice(1)[0].trim()),K.$videoWrapper=$('<div class="'+E.video_wrapper+'"></div>'),K.$video=$('<iframe class="'+E.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),K.$video.attr("src",i+"&enablejsapi=1"+n).addClass(E.video).prependTo(K.$videoWrapper),K.$content.prepend(K.$videoWrapper),r(),o()):c()}function r(){K.windowHeight=K.viewportHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=K.viewportWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.videoMarginTop=0,K.videoMarginLeft=0,K.isMobile?(K.isTouch?(K.$controlBox.css({width:f.windowWidth}),K.spacerHeight=K.$controls.outerHeight(!0)+10):(K.$tools.css({width:f.windowWidth}),K.spacerHeight=K.$tools.outerHeight(!0),K.spacerHeight+=K.$thumbnails.outerHeight(!0)+10),K.viewportHeight-=K.spacerHeight,K.targetVideoWidth=K.viewportWidth,K.targetVideoHeight=K.targetVideoWidth*K.videoRatio,K.targetVideoHeight>K.viewportHeight&&(K.targetVideoHeight=K.viewportHeight,K.targetVideoWidth=K.targetVideoHeight/K.videoRatio),K.videoMarginTop=(K.viewportHeight-K.targetVideoHeight)/2,K.videoMarginLeft=(K.viewportWidth-K.targetVideoWidth)/2):(K.viewportHeight=K.windowHeight-K.margin,K.viewportWidth=K.windowWidth-K.margin,K.targetVideoWidth=K.videoWidth>K.viewportWidth?K.viewportWidth:K.videoWidth,K.targetVideoWidth<K.minWidth&&(K.targetVideoWidth=K.minWidth),K.targetVideoHeight=K.targetVideoWidth*K.videoRatio,K.contentHeight=K.targetVideoHeight,K.contentWidth=K.targetVideoWidth),K.isMobile||K.isTouch||K.$meta.css({width:K.contentWidth}),K.$videoWrapper.css({height:K.targetVideoHeight,width:K.targetVideoWidth,marginTop:K.videoMarginTop,marginLeft:K.videoMarginLeft}),K.isMobile||(K.metaHeight=K.$meta.outerHeight(!0),K.contentHeight+=K.metaHeight),K.thumbnails&&(K.thumbnailHeight=K.$thumbnails.outerHeight(!0),K.contentHeight+=K.thumbnailHeight)}function I(t){A.killEvent(t);var i=$(t.currentTarget);K.isAnimating||i.hasClass(E.control_disabled)||(K.isAnimating=!0,n(),K.gallery.index+=i.hasClass(E.control_next)?1:-1,K.gallery.index>K.gallery.total&&(K.gallery.index=K.infinite?0:K.gallery.total),K.gallery.index<0&&(K.gallery.index=K.infinite?K.gallery.total:0),g(),K.$lightbox.addClass(E.animating),K.$content.fsTransition({property:"opacity"},s),K.$lightbox.addClass(E.loading))}function V(t){A.killEvent(t);var i=$(t.currentTarget);K.isAnimating||i.hasClass(E.active)||(K.isAnimating=!0,n(),K.gallery.index=K.$thumbnailItems.index(i),g(),K.$lightbox.addClass(E.animating),K.$content.fsTransition({property:"opacity"},s),K.$lightbox.addClass(E.loading))}function g(){if(K.thumbnails){var t=K.$thumbnailItems.eq(K.gallery.index);K.$thumbnailItems.removeClass(E.active),t.addClass(E.active)}}function s(){if("element"==K.type?void 0!==K.$inlineTarget&&K.$inlineTarget.length&&d():(void 0!==K.$imageContainer&&(K.isViewer&&K.$imageContainer.fsViewer("destroy"),K.$imageContainer.remove()),void 0!==K.$videoWrapper&&K.$videoWrapper.remove()),K.$el=K.gallery.$items.eq(K.gallery.index),"element"==K.type){var t=K.$el[0].href,i=K.$el&&K.$el[0].hash&&K.$el[0].hash||"";"http"===t.substr(0,4)&&!i?k(t):j(i)}else{K.$caption.html(K.formatter.call(K.$el,K)),K.$position.find(q.position_current).html(K.gallery.index+1),L(t=K.$el[0].href)?(K.type="video",_(t)):(K.type="image",C(t))}T()}function T(){K.$controls.removeClass(E.control_disabled),K.infinite||(0===K.gallery.index&&K.$controls.filter(q.control_previous).addClass(E.control_disabled),K.gallery.index===K.gallery.total&&K.$controls.filter(q.control_next).addClass(E.control_disabled))}function M(t){!K.gallery.active||37!==t.keyCode&&39!==t.keyCode?27===t.keyCode&&K.$close.trigger(R.click):(A.killEvent(t),K.$controls.filter(37===t.keyCode?q.control_previous:q.control_next).trigger(R.click))}function j(t){K.$inlineTarget=$(t),K.$inlineContents=K.$inlineTarget.children().detach(),z(K.$inlineContents)}function d(){K.$inlineTarget.append(K.$inlineContents.detach())}function k(t){t+=-1<t.indexOf("?")?"&"+K.requestKey+"=true":"?"+K.requestKey+"=true",z($('<iframe class="'+E.iframe+'" src="'+t+'"></iframe>'))}function z(t){K.$content.append(t),h(t),o()}function h(t){K.windowHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.objectHeight=t.outerHeight(!0),K.objectWidth=t.outerWidth(!0),K.targetHeight=K.targetHeight||(K.$el?K.$el.data(P+"-height"):null),K.targetWidth=K.targetWidth||(K.$el?K.$el.data(P+"-width"):null),K.maxHeight=K.windowHeight<0?K.minHeight:K.windowHeight,K.isIframe=t.is("iframe"),K.objectMarginTop=0,K.objectMarginLeft=0,K.isMobile||(K.windowHeight-=K.margin,K.windowWidth-=K.margin),K.contentHeight=K.targetHeight?K.targetHeight:K.isIframe||K.isMobile?K.windowHeight:K.objectHeight,K.contentWidth=K.targetWidth?K.targetWidth:K.isIframe||K.isMobile?K.windowWidth:K.objectWidth,(K.isIframe||K.isObject)&&K.isMobile?(K.contentHeight=K.windowHeight,K.contentWidth=K.windowWidth):K.isObject&&(K.contentHeight=K.contentHeight>K.windowHeight?K.windowHeight:K.contentHeight,K.contentWidth=K.contentWidth>K.windowWidth?K.windowWidth:K.contentWidth),K.isMobile||(K.contentHeight>K.maxHeight&&(K.contentHeight=K.maxHeight),K.contentWidth>K.maxWidth&&(K.contentWidth=K.maxWidth))}function c(){var t=$('<div class="'+E.error+'"><p>Error Loading Resource</p></div>');K.type="element",K.$tools.remove(),K.$image.off(R.namespace),z(t),B.trigger(R.error)}function L(t){var i,e=K.videoFormatter;for(var n in e)if(e.hasOwnProperty(n)&&null!==(i=t.match(e[n].pattern)))return e[n].format.call(K,i);return!1}function O(t){var i=t.target;$.contains(K.$lightbox[0],i)||i===K.$lightbox[0]||i===K.$overlay[0]||(A.killEvent(t),K.$lightbox.focus())}var m=f.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)/i,fixed:!1,formatter:function(){var t=this.attr("title"),i=!(void 0===t||!t)&&t.replace(/^\s+|\s+$/g,"");return i?'<p class="caption">'+i+"</p>":""},infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails",lightbox:"Lightbox {guid}"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:null,overlay:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:function(t){return"//www.youtube.com/embed/"+t[1]}},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:function(t){return"//player.vimeo.com/video/"+t[3]}}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_construct:function(t){this.on(R.click,t,e);var i=this.data(P+"-gallery");!H&&v&&i===v&&(H=!0,this.trigger(R.click))},_destruct:function(t){w(),this.off(R.namespace)},_resize:function(){K&&t()},resize:t},utilities:{_initialize:function(t,i){t instanceof $&&e.apply(u,[{data:$.extend(!0,{},{$object:t},p,i||{})}])},close:w}}),P=m.namespace,p=m.defaults,q=m.classes,E=q.raw,R=m.events,A=m.functions,u=f.window,B=f.$window,F=null,b=null,v=!1,H=!1,K=null;f.Ready(function(){F=f.$body,b=$("html, body"),v=f.window.location.hash.replace("#","")})});
/*! formstone v1.4.22 [sticky.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(n,e){"use strict";function t(){f.iterate.call(p,o)}function s(){p=n(l.base),t()}function a(e){e.enabled=!0,e.$el.addClass(m.enabled),o(e)}function i(e){e.enabled=!1,e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.enabled),e.$stickys.removeClass([m.passed,m.stuck].join(" "))}function o(e){if(e.enabled){if(c(e),e.$container.length){var t=e.$container.offset();e.min=t.top-e.margin,e.max=e.min+e.$container.outerHeight(!1)-e.height}else{var n=(e.stuck?e.$clone:e.$el).offset();e.min=n.top-e.margin,e.max=!1}d(e)}}function c(e){var t;t=e.stuck?e.$clone:e.$el,e.margin=parseInt(t.css("margin-top"),10),e.$container.length?e.containerMargin=parseInt(e.$container.css("margin-top"),10):e.containerMargin=0,e.height=t.outerHeight(),e.width=t.outerWidth()}function d(e){if(e.enabled){var t=h+e.offset;if(t>=e.min){e.stuck=!0,e.$stickys.addClass(m.stuck),e.stuck||(e.$el.trigger(u.stuck),c(e));var n=e.offset,s="";e.max&&t>e.max?(e.passed||e.$el.trigger(u.passed),e.passed=!0,e.$stickys.addClass(m.passed),n="",s=0):(e.passed=!1,e.$stickys.removeClass(m.passed)),e.$el.css({height:e.height,width:e.width,top:n,bottom:s,marginBottom:0})}else e.stuck=!1,e.$stickys.removeClass(m.stuck).removeClass(m.passed),e.stuck&&e.$el.trigger(u.unstuck),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""})}}var r=e.Plugin("sticky",{widget:!0,defaults:{maxWidth:1/0,minWidth:"0px",offset:0},classes:["enabled","sticky","stuck","clone","container","passed"],events:{passed:"passed",stuck:"stuck",unstuck:"unstuck"},methods:{_construct:function(e){e.enabled=!1,e.stuck=!1,e.passed=!0,e.$clone=e.$el.clone(),e.container=e.$el.data("sticky-container"),e.$container=n(e.container),e.$el.addClass(m.base),e.$clone.removeClass(m.element).addClass(m.clone),e.$container.addClass(m.container),e.$stickys=n().add(e.$el).add(e.$clone),e.$el.after(e.$clone);var t=n().add(e.$el.find("img")).add(e.$container.find("img"));t.length&&t.on(u.load,e,o),e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",n.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e)},leave:function(){i.call(e.$el,e)}})},_postConstruct:function(e){s(),t()},_destruct:function(e){e.$clone.remove(),e.$container.removeClass(m.container),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.base),s()},_resize:t,_raf:function(){(h=$.scrollTop())<0&&(h=0),h!==g&&(f.iterate.call(p,d),g=h)},disable:i,enable:a,reset:o,resize:o}}),l=(r.namespace,r.classes),m=l.raw,u=r.events,f=r.functions,$=(e.window,e.$window),h=0,g=0,p=[]});
/*! formstone v1.4.22 [swap.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(e,a){if(e.enabled&&!e.active){e.group&&!a&&s(e.group).not(e.$el).not(e.linked)[c.namespaceClean]("deactivate",!0);var t=e.group?s(e.group).index(e.$el):null;e.$swaps.addClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("activate",!0),this.trigger(o.activate,[t]),e.active=!0}}function i(e,a){e.enabled&&e.active&&(e.$swaps.removeClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),e.active=!1)}function a(e,a){e.enabled||(e.enabled=!0,e.$swaps.addClass(e.classes.raw.enabled),a||s(e.linked).not(e.$el)[c.namespaceClean]("enable"),this.trigger(o.enable),e.onEnable?(e.active=!1,t.call(this,e)):(e.active=!0,i.call(this,e)))}function n(e,a){e.enabled&&(e.enabled=!1,e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")),a||s(e.linked).not(e.$el)[c.namespaceClean]("disable"),this.trigger(o.disable))}function l(e){u.killEvent(e);var a=e.data;a.active&&a.collapse?i.call(a.$el,a):t.call(a.$el,a)}var c=e.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(e){e.enabled=!1,e.active=!1,e.classes=s.extend(!0,{},r,e.classes),e.target=this.data(d+"-target"),e.$target=s(e.target).addClass(e.classes.raw.target),e.mq="(max-width:"+(e.maxWidth===1/0?"100000px":e.maxWidth)+")";var a=this.data(d+"-linked");e.linked=!!a&&"[data-"+d+'-linked="'+a+'"]';var t=this.data(d+"-group");e.group=!!t&&"[data-"+d+'-group="'+t+'"]',e.$swaps=s().add(this).add(e.$target),this.on(o.click+e.dotGuid,e,l)},_postConstruct:function(e){e.collapse||!e.group||s(e.group).filter("[data-"+d+"-active]").length||s(e.group).eq(0).attr("data-"+d+"-active","true"),e.onEnable=this.data(d+"-active")||!1,s.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e,!0)},leave:function(){n.call(e.$el,e,!0)}})},_destruct:function(e){s.fsMediaquery("unbind",e.rawGuid),e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")).off(o.namespace)},activate:t,deactivate:i,enable:a,disable:n}}),d=c.namespace,r=c.classes,o=c.events,u=c.functions});
/*! formstone v1.4.22 [touch.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(r,s){"use strict";function o(e){e.preventManipulation&&e.preventManipulation();var t=e.data,a=e.originalEvent;if(a.type.match(/(up|end|cancel)$/i))d(e);else{if(a.pointerId){var n=!1;for(var i in t.touches)t.touches[i].id===a.pointerId&&(n=!0,t.touches[i].pageX=a.pageX,t.touches[i].pageY=a.pageY);n||t.touches.push({id:a.pointerId,pageX:a.pageX,pageY:a.pageY})}else t.touches=a.touches;a.type.match(/(down|start)$/i)?v(e):a.type.match(/move$/i)&&c(e)}}function v(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null;a&&t.$el.off(m.mouseDown),t.touching||(t.startE=e.originalEvent,t.startX=a?a.pageX:e.pageX,t.startY=a?a.pageY:e.pageY,t.startT=(new Date).getTime(),t.scaleD=1,t.passedAxis=!1),t.$links&&t.$links.off(m.click);var n=Y(t.scale?m.scaleStart:m.panStart,e,t.startX,t.startY,t.scaleD,0,0,"","");if(t.scale&&t.touches&&2<=t.touches.length){var i=t.touches;t.pinch={startX:f(i[0].pageX,i[1].pageX),startY:f(i[0].pageY,i[1].pageY),startD:x(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},n.pageX=t.startX=t.pinch.startX,n.pageY=t.startY=t.pinch.startY}t.touching||(t.touching=!0,t.pan&&!a&&M.on(m.mouseMove,t,c).on(m.mouseUp,t,d),s.support.pointer?M.on([m.pointerMove,m.pointerUp,m.pointerCancel].join(" "),t,o):M.on([m.touchMove,m.touchEnd,m.touchCancel].join(" "),t,o),t.$el.trigger(n))}function c(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,c=0<s?"right":"left",p=0<o?"down":"up",r=Math.abs(s)>t.threshold,l=Math.abs(o)>t.threshold;if(!t.passedAxis&&t.axis&&(t.axisX&&l||t.axisY&&r))d(e);else{!t.passedAxis&&(!t.axis||t.axis&&t.axisX&&r||t.axisY&&l)&&(t.passedAxis=!0),t.passedAxis&&(w.killEvent(e),w.killEvent(t.startE));var h=!0,u=Y(t.scale?m.scale:m.pan,e,n,i,t.scaleD,s,o,c,p);if(t.scale)if(t.touches&&2<=t.touches.length){var g=t.touches;t.pinch.endX=f(g[0].pageX,g[1].pageX),t.pinch.endY=f(g[0].pageY,g[1].pageY),t.pinch.endD=x(g[1].pageX-g[0].pageX,g[1].pageY-g[0].pageY),t.scaleD=t.pinch.endD/t.pinch.startD,u.pageX=t.pinch.endX,u.pageY=t.pinch.endY,u.scale=t.scaleD,u.deltaX=t.pinch.endX-t.pinch.startX,u.deltaY=t.pinch.endY-t.pinch.startY}else t.pan||(h=!1);h&&t.$el.trigger(u)}}function d(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,c=(new Date).getTime(),p=t.scale?m.scaleEnd:m.panEnd,r=0<s?"right":"left",l=0<o?"down":"up",h=1<Math.abs(s),u=1<Math.abs(o);if(t.swipe&&c-t.startT<t.time&&Math.abs(s)>t.threshold&&(p=m.swipe),t.axis&&(t.axisX&&u||t.axisY&&h)||h||u){t.$links=t.$el.find("a");for(var g=0,d=t.$links.length;g<d;g++)X(t.$links.eq(g),t)}var f=Y(p,e,n,i,t.scaleD,s,o,r,l);M.off([m.touchMove,m.touchEnd,m.touchCancel,m.mouseMove,m.mouseUp,m.pointerMove,m.pointerUp,m.pointerCancel].join(" ")),t.$el.trigger(f),t.touches=[],t.scale,a&&(t.touchTimer=w.startTimer(t.touchTimer,5,function(){t.$el.on(m.mouseDown,t,v)})),t.touching=!1}function X(e,t){e.on(m.click,t,n);var a=r._data(e[0],"events").click;a.unshift(a.pop())}function n(e){w.killEvent(e,!0),e.data.$links.off(m.click)}function Y(e,t,a,n,i,s,o,c,p){return r.Event(e,{originalEvent:t,bubbles:!0,pageX:a,pageY:n,scale:i,deltaX:s,deltaY:o,directionX:c,directionY:p})}function f(e,t){return(e+t)/2}function x(e,t){return Math.sqrt(e*e+t*t)}function a(e,t){e.css({"-ms-touch-action":t,"touch-action":t})}var e=!s.window.PointerEvent,t=s.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1,threshold:10,time:50},methods:{_construct:function(e){if(e.touches=[],e.touching=!1,this.on(m.dragStart,w.killEvent),e.swipe&&(e.pan=!0),e.scale&&(e.axis=!1),e.axisX="x"===e.axis,e.axisY="y"===e.axis,s.support.pointer){var t="";!e.axis||e.axisX&&e.axisY?t="none":(e.axisX&&(t+=" pan-y"),e.axisY&&(t+=" pan-x")),a(this,t),this.on(m.pointerDown,e,o)}else this.on(m.touchStart,e,o).on(m.mouseDown,e,v)},_destruct:function(e){this.off(m.namespace),a(this,"")}},events:{pointerDown:e?"MSPointerDown":"pointerdown",pointerUp:e?"MSPointerUp":"pointerup",pointerMove:e?"MSPointerMove":"pointermove",pointerCancel:e?"MSPointerCancel":"pointercancel"}}),m=t.events,w=t.functions,M=s.$window;m.pan="pan",m.panStart="panstart",m.panEnd="panend",m.scale="scale",m.scaleStart="scalestart",m.scaleEnd="scaleend",m.swipe="swipe"});
/*! formstone v1.4.22 [transition.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(s,a){"use strict";function i(t){t.stopPropagation(),t.preventDefault();var e=t.data,r=t.originalEvent,n=e.target?e.$target:e.$el;e.property&&r.propertyName!==e.property||!s(r.target).is(n)||o(e)}function o(t){t.always||t.$el[e.namespaceClean]("destroy"),t.callback.apply(t.$el)}function c(t){var e,r,n,a={};if(t instanceof s&&(t=t[0]),f.getComputedStyle)for(var i=0,o=(e=f.getComputedStyle(t,null)).length;i<o;i++)r=e[i],n=e.getPropertyValue(r),a[r]=n;else if(t.currentStyle)for(r in e=t.currentStyle)a[r]=e[r];return a}var e=a.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(t,e){if(e){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=e,t.styles=c(t.$check),t.timer=null;var r=t.$check.css(a.transition+"-duration"),n=parseFloat(r);a.support.transition&&r&&n?this.on(l.transitionEnd,t,i):t.timer=u.startTimer(t.timer,50,function(){!function(t){var e=c(t.$check);!function(t,e){if(typeof t!=typeof e)return!1;for(var r in t){if(!t.hasOwnProperty(r))return!1;if(!t.hasOwnProperty(r)||!e.hasOwnProperty(r)||t[r]!==e[r])return!1}return!0}(t.styles,e)&&o(t);t.styles=e}(t)},!0)}},_destruct:function(t){u.clearTimer(t.timer,!0),this.off(l.namespace)},resolve:o}}),l=e.events,u=e.functions,f=a.window});
/*! formstone v1.4.22 [viewer.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],t):t(jQuery,Formstone)}(function(s,n){"use strict";function t(){Z.scrollTop()+n.windowHeight<0&&0}function l(){(E=s(I.base)).length?j.lockViewport(z):j.unlockViewport(z)}function c(t,e){t.isAnimating||(t.isAnimating=!0,t.$container=s('<div class="'+y.container+'"><img></div>'),t.$image=t.$container.find("img"),t.$viewport.append(t.$container),t.$image.one(b.load,function(){!function(t){(function(t){var e=function(t){var e=t[0],i=new Image;{if(void 0!==e.naturalHeight)return{naturalHeight:e.naturalHeight,naturalWidth:e.naturalWidth};if("img"===e.tagName.toLowerCase())return i.src=e.src,{naturalHeight:i.height,naturalWidth:i.width}}return!1}(t.$image);t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.ratioHorizontal=t.naturalHeight/t.naturalWidth,t.ratioVertical=t.naturalWidth/t.naturalHeight,t.isWide=t.naturalWidth>t.naturalHeight})(t),o(t),t.containerTop=t.viewportHeight/2,t.containerLeft=t.viewportWidth/2,r(t),t.imageHeight=t.naturalHeight,t.imageWidth=t.naturalWidth,function(t){t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth}(t),a(t),g(t),m(t),d(t);var e={containerTop:t.containerTop,containerLeft:t.containerLeft,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTop:t.imageTop,imageLeft:t.imageLeft};H(t,e),t.isRendering=!0}(t),t.isAnimating=!1,t.$container.fsTransition({property:"opacity"},function(){}),t.$el.removeClass(y.loading),t.$container.fsTouch({pan:!0,scale:!0}).on(b.scaleStart,t,v).on(b.scaleEnd,t,T).on(b.scale,t,W),t.$el.trigger(b.loaded)}).one(b.error,t,i).attr("src",e).addClass(y.image),!t.$image[0].complete&&4!==t.$image[0].readyState||t.$image.trigger(b.load),t.source=e)}function i(t){t.data.$el.trigger(b.error)}function o(t){t.viewportHeight=t.$viewport.outerHeight(),t.viewportWidth=t.$viewport.outerWidth()}function a(t){t.imageHeight<=t.viewportHeight?(t.containerMinTop=t.viewportHeight/2,t.containerMaxTop=t.viewportHeight/2):(t.containerMinTop=t.viewportHeight-t.imageHeight/2,t.containerMaxTop=t.imageHeight/2),t.imageWidth<=t.viewportWidth?(t.containerMinLeft=t.viewportWidth/2,t.containerMaxLeft=t.viewportWidth/2):(t.containerMinLeft=t.viewportWidth-t.imageWidth/2,t.containerMaxLeft=t.imageWidth/2)}function r(t){t.isWide?(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal,t.imageMinHeight>t.viewportHeight&&(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical)):(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical,t.imageMinWidth>t.viewportWidth&&(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal)),(t.imageMinWidth>t.naturalWidth||t.imageMinHeight>t.naturalHeight)&&(t.imageMinHeight=t.naturalHeight,t.imageMinWidth=t.naturalWidth),t.imageMaxHeight=t.naturalHeight,t.imageMaxWidth=t.naturalWidth}function g(t){t.imageTop=-t.imageHeight/2,t.imageLeft=-t.imageWidth/2}function m(t){t.lastContainerTop=t.containerTop,t.lastContainerLeft=t.containerLeft,t.lastImageHeight=t.imageHeight,t.lastImageWidth=t.imageWidth,t.lastImageTop=t.imageTop,t.lastImageLeft=t.imageLeft}function d(t){t.renderContainerTop=t.lastContainerTop,t.renderContainerLeft=t.lastContainerLeft,t.renderImageTop=t.lastImageTop,t.renderImageLeft=t.lastImageLeft,t.renderImageHeight=t.lastImageHeight,t.renderImageWidth=t.lastImageWidth}function h(t){t.imageHeight<t.imageMinHeight&&(t.imageHeight=t.imageMinHeight),t.imageHeight>t.imageMaxHeight&&(t.imageHeight=t.imageMaxHeight),t.imageWidth<t.imageMinWidth&&(t.imageWidth=t.imageMinWidth),t.imageWidth>t.imageMaxWidth&&(t.imageWidth=t.imageMaxWidth)}function u(t){t.containerTop<t.containerMinTop&&(t.containerTop=t.containerMinTop),t.containerTop>t.containerMaxTop&&(t.containerTop=t.containerMaxTop),t.containerLeft<t.containerMinLeft&&(t.containerLeft=t.containerMinLeft),t.containerLeft>t.containerMaxLeft&&(t.containerLeft=t.containerMaxLeft)}function f(t){null===t.tapTimer?t.tapTimer=j.startTimer(t.tapTimer,500,function(){p(t)}):(p(t),function(t){var e=t.imageHeight>t.imageMinHeight+1;t.isZooming=!0,m(t),d(t),e?(t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth):(t.imageHeight=t.imageMaxHeight,t.imageWidth=t.imageMaxWidth);a(t),u(t),g(t),t.isRendering=!0}(t))}function p(t){j.clearTimer(t.tapTimer),t.tapTimer=null}function H(t,e){if(n.transform){var i=e.imageWidth/t.naturalWidth,o=e.imageHeight/t.naturalHeight;t.$container.css(n.transform,"translate3d("+e.containerLeft+"px, "+e.containerTop+"px, 0)"),t.$image.css(n.transform,"translate3d(-50%, -50%, 0) scale("+i+","+o+")")}else t.$container.css({top:e.containerTop,left:e.containerLeft}),t.$image.css({height:e.imageHeight,width:e.imageWidth,top:e.imageTop,left:e.imageLeft})}function v(t){var e=t.data;f(e),m(e)}function W(t){var e=t.data;p(e),e.isRendering=!1,e.isZooming=!1;e.imageHeight,e.imageMinHeight;e.containerTop=e.lastContainerTop+t.deltaY,e.containerLeft=e.lastContainerLeft+t.deltaX,e.imageHeight=e.lastImageHeight*t.scale,e.imageWidth=e.lastImageWidth*t.scale,a(e),u(e),h(e),g(e),H(e,{containerTop:e.containerTop,containerLeft:e.containerLeft,imageHeight:e.imageHeight,imageWidth:e.imageWidth,imageTop:e.imageTop,imageLeft:e.imageLeft})}function T(t){var e=t.data;e.isZooming||(m(e),d(e),e.isRendering=!0)}function $(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data;"out"==(e.hasClass(y.control_zoom_out)?"out":"in")?function(t){t.keyDownTime=1,t.action="zoom_out"}(i):function(t){t.keyDownTime=1,t.action="zoom_in"}(i)}function M(t){t.data.action=!1}function e(t){if(t.isRendering){if(t.action){t.keyDownTime+=t.zoomIncrement;var e=("zoom_out"===t.action?-1:1)*Math.round(t.imageWidth*t.keyDownTime-t.imageWidth);e>t.zoomDelta&&(e=t.zoomDelta),t.isWide?(t.imageWidth+=e,t.imageHeight=Math.round(t.imageWidth/t.ratioVertical)):(t.imageHeight+=e,t.imageWidth=Math.round(t.imageHeight/t.ratioHorizontal)),h(t),g(t),a(t),u(t)}t.renderContainerTop+=Math.round((t.containerTop-t.renderContainerTop)*t.zoomEnertia),t.renderContainerLeft+=Math.round((t.containerLeft-t.renderContainerLeft)*t.zoomEnertia),t.renderImageTop+=Math.round((t.imageTop-t.renderImageTop)*t.zoomEnertia),t.renderImageLeft+=Math.round((t.imageLeft-t.renderImageLeft)*t.zoomEnertia),t.renderImageHeight+=Math.round((t.imageHeight-t.renderImageHeight)*t.zoomEnertia),t.renderImageWidth+=Math.round((t.imageWidth-t.renderImageWidth)*t.zoomEnertia),H(t,{containerTop:t.renderContainerTop,containerLeft:t.renderContainerLeft,imageHeight:t.renderImageHeight,imageWidth:t.renderImageWidth,imageTop:t.renderImageTop,imageLeft:t.renderImageLeft})}}function w(t,e){t.isAnimating||(p(t),t.isAnimating=!0,t.isRendering=!1,t.isZooming=!1,function(t){t.$container&&t.$container.length&&t.$container.fsTouch("destroy").off(b.scaleStart,v).off(b.scaleEnd,T).off(b.scale,W)}(t),t.$container.fsTransition({property:"opacity"},function(){t.isAnimating=!1,t.$container.remove(),"function"==typeof e&&e.call(window,t)}),t.$el.addClass(y.loading))}function _(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data,o=i.index+(e.hasClass(y.control_next)?1:-1);i.isAnimating||(o<0&&(o=0),o>i.total&&(o=i.total),o!==i.index&&(i.index=o,w(i,function(){c(i,i.images[i.index])})),C(i))}function C(t){t.$controlItems.removeClass(y.control_disabled),0===t.index&&t.$controlPrevious.addClass(y.control_disabled),t.index===t.images.length-1&&t.$controlNext.addClass(y.control_disabled)}function L(t){o(t),a(t),r(t),g(t),a(t),u(t),h(t)}var x=n.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_construct:function(t){var e,i="",o=[y.control,y.control_previous].join(" "),n=[y.control,y.control_next].join(" "),a=[y.control,y.control_zoom_in].join(" "),r=[y.control,y.control_zoom_out].join(" ");t.thisClasses=[y.base,y.loading,t.customClass,t.theme],t.images=[],t.source=!1,t.gallery=!1,t.tapTimer=null,t.action=!1,t.isRendering=!1,t.isZooming=!1,t.isAnimating=!1,t.keyDownTime=1,t.$images=this.find("img").addClass(y.source),t.index=0,t.total=t.$images.length-1,t.customControls="object"==typeof t.controls&&t.controls.zoom_in&&t.controls.zoom_out,1<t.$images.length&&(t.gallery=!0,t.thisClasses.push(y.gallery),!t.customControls||t.controls.previous&&t.controls.next||(t.customControls=!1));for(var g=0;g<t.$images.length;g++)e=t.$images.eq(g),t.images.push(e.attr("src"));i+='<div class="'+y.wrapper+'">',i+='<div class="'+y.loading_icon+'"></div>',i+='<div class="'+y.viewport+'"></div>',i+="</div>",t.controls&&!t.customControls&&(i+='<div class="'+y.controls+'">',i+='<button type="button" class="'+o+'">'+t.labels.previous+"</button>",i+='<button type="button" class="'+r+'">'+t.labels.zoom_out+"</button>",i+='<button type="button" class="'+a+'">'+t.labels.zoom_in+"</button>",i+='<button type="button" class="'+n+'">'+t.labels.next+"</button>",i+="</div>"),this.addClass(t.thisClasses.join(" ")).prepend(i),t.$wrapper=this.find(I.wrapper),t.$viewport=this.find(I.viewport),t.customControls?(t.$controls=s(t.controls.container).addClass([y.controls,y.controls_custom].join(" ")),t.$controlPrevious=s(t.controls.previous).addClass(o),t.$controlNext=s(t.controls.next).addClass(n),t.$controlZoomIn=s(t.controls.zoom_in).addClass(a),t.$controlZoomOut=s(t.controls.zoom_out).addClass(r)):(t.$controls=this.find(I.controls),t.$controlPrevious=this.find(I.control_previous),t.$controlNext=this.find(I.control_next),t.$controlZoomIn=this.find(I.control_zoom_in),t.$controlZoomOut=this.find(I.control_zoom_out)),t.$controlItems=t.$controlPrevious.add(t.$controlNext),t.$controlZooms=t.$controlZoomIn.add(t.$controlZoomOut),l(),t.$controlItems.on(b.click,t,_),t.$controlZooms.on([b.touchStart,b.mouseDown].join(" "),t,$).on([b.touchEnd,b.mouseUp].join(" "),t,M),c(t,t.images[t.index],!0),C(t)},_destruct:function(t){t.$wrapper.remove(),t.$image.removeClass(y.source),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&(t.$controls.removeClass([y.controls,y.controls_custom].join(" ")),t.$controlItems.off(b.click).removeClass([y.control,y.control_previous,y.control_next].join(" ")),t.$controlZooms.off([b.touchStart,b.mouseDown].join(" ")).off([b.touchStart,b.mouseDown].join(" ")).off([b.touchEnd,b.mouseUp].join(" ")).removeClass([y.control,y.control_zoom_in,y.control_zoom_out].join(" "))),this.removeClass(t.thisClasses.join(" ")).off(b.namespace),l()},_resize:function(){j.iterate.call(E,L)},_raf:function(){j.iterate.call(E,e)},resize:L,load:function(t,e){t.index=0,"string"==typeof e?(t.total=0,t.images=[e],t.gallery=!1,t.$el.removeClass(y.gallery)):(t.total=e.length-1,1<(t.images=e).length&&(t.gallery=!0,t.$el.addClass(y.gallery)),e=t.images[t.index]),w(t,function(){c(t,e)})},unload:function(t){w(t)}}}),z=x.namespace,I=x.classes,y=I.raw,b=x.events,j=x.functions,Z=(n.window,n.$window),E=[];n.Ready(function(){t(),Z.on("scroll",t),n.$body})});
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = false;

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true, capture: true } : true;

	    document.addEventListener('DOMContentLoaded', setPersist, true);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput, true);
	      window.addEventListener('pointermove', setIntent, true);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput, true);
	      window.addEventListener('MSPointerMove', setIntent, true);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput, true);
	      window.addEventListener('mousemove', setIntent, true);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput, true);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput, true);
	    window.addEventListener('keyup', setInput, true);

	    // focus events
	    window.addEventListener('focusin', setElement, true);
	    window.addEventListener('focusout', clearElement, true);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') === 'false' || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
/*-------------------------------------------
	Site
-------------------------------------------*/

	// !Site
	var Site = (function($, window) {

		// !BaseController
		var BaseController = function() {
			this.namespace = "";

			this.minWidth = 320;

			this.window = null;
			this.doc = null;

			this.$window = null;
			this.$doc = null;
			this.$body = null;

			this.touch = false;

			// Public modules
			this.modules = [];

			this.onInit = [];
			this.onRespond = [];
			this.onResize = [];
			this.onScroll = [];

			this.minXS = "320";
			this.minSM = "500";
			this.minMD = "740";
			this.minLG = "980";
			this.minXL = "1220";
			this.minXXL = "1330";
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window = window;
				this.doc = document;
				this.$window = $(window);
				this.$doc = $(document);
				this.$body = $("body");
				this.touch = $("html").hasClass("touchevents");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [
							this.minXS,
							this.minSM,
							this.minMD,
							this.minLG,
							this.minXL,
							this.minXXL
						]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window
					.on("mqchange.mediaquery", onRespond)
					.on(Controller.ns("resize"), onResize)
					.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			},
			// Returns icon markup
			icon: function(icon) {
				var markup = '<svg class="icon icon_' + icon + '">';
				var ua = window.navigator.userAgent;
    			var msie = ua.indexOf("MSIE ");

				if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					markup += '<use xlink:href="#' + icon + '">';
				} else {
					markup += '<use xlink:href="' + STATIC_ROOT + 'images/icons.svg?' + ICONS_MODIFIED_TIME + '#' + icon + '">';
				}

				return markup + '</use></svg>';
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	jQuery(document).ready(function() {
		Site.init("@namespace");
	});

function getVideoAPIByType(slug) {
	var API_LOOKUP = {
		vimeo: Site.modules.VideoAPIVimeo,
		youtube: Site.modules.VideoAPIYouTube,
		html5: Site.modules.VideoAPIHTML5
	};

	return slug in API_LOOKUP ? API_LOOKUP[slug] : null;
}

function isObject(item) {
	return item && typeof item === 'object' && !Array.isArray(item);
}

function mergeDeep(target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key])
					Object.assign(target, {
						[key]: {}
					});
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, {
					[key]: source[key]
				});
			}
		}
	}

	return mergeDeep(target, ...sources);
}

function appendScriptToBody(src) {
	if (!src) return Promise.resolve();

	let curTag = document.querySelector('script[src*="' + src + '"]');

	if (curTag && curTag.dataset.loaded) return Promise.resolve(curTag);

	return new Promise(function (resolve, reject) {
		let tag = curTag || document.createElement('script');

		tag.addEventListener(
			'load',
			function () {
				tag.dataset.loaded = true;

				return resolve(tag);
			},
			{
				once: true
			}
		);
		tag.addEventListener(
			'error',
			function () {
				return reject('Error loading script');
			},
			{
				once: true
			}
		);

		tag.setAttribute('src', src);
		tag.setAttribute('defer', 'defer');

		if (!curTag) {
			document.body.append(tag);
		}
	});
}

function normalizeDataset(dataset, namespace) {
	if (!(dataset instanceof DOMStringMap)) return {};

	return Object.entries(dataset).reduce((carry, [key, value]) => {
		key = key.toLowerCase();

		if (!key.includes(namespace)) return carry;

		key = key.replace(namespace, '');

		try {
			value = JSON.parse(value);
		} catch (error) {
			//
		}

		/**
		 * if it's the root namespace
		 * i.e. - data-accordion="" vs data-accordion-key=""
		 */
		if (!key.length) {
			carry = mergeDeep({}, carry, value);

			return carry;
		}

		carry[key] = value;

		return carry;
	}, {});
}

function MixinNodeConfig(node, namespace, ...settings) {
	if (node instanceof $) {
		node = node[0];
	}

	if (!(node instanceof HTMLElement)) return {};

	let namespaceReplacements = [
		{
			regexp: /^\.js-/,
			newSubstr: ''
		},
		{
			regexp: /[^a-zA-Z0-9]/g,
			newSubstr: ''
		}
	];

	let normalizedNamespace = namespaceReplacements.reduce(
		(carry, entry) => carry.replace(entry.regexp, entry.newSubstr),
		namespace
	);

	let dataSettings = normalizeDataset(node.dataset, normalizedNamespace);

	return mergeDeep({}, ...settings, dataSettings);
}

// import { mergeDeep } from '@/helpers/utils';

Site.modules.VideoAPIHTML5 = (function ($, Site) {
	function HTML5VideoAPI() {
		this.type = 'html5';
		this.scriptUrl = null;
		this.player = null;
	}

	HTML5VideoAPI.prototype = {
		getOptionsInline() {
			return {
				playsinline: true,
				controls: true,
				autoplay: false,
				loop: false
			};
		},

		getOptionsBackground: function () {
			return {
				playsinline: false,
				controls: true,
				autoplay: false,
				loop: true
			};
		},

		getPlayerMarkup: function (options) {
			let mimeType = options.id.match(new RegExp(/.*\.(?<extension>.*)$/));

			let video = document.createElement('video');

			let booleanAttrsToAdd = ['controls', 'autoplay', 'loop', 'playsinline'].filter(
				(attr) => options?.[attr]
			);

			booleanAttrsToAdd.forEach((attr) => video.setAttribute(attr, true));

			video.setAttribute('preload', options.autoplay ? 'auto' : 'none');
			video.setAttribute('aria-label', options.title);

			video.innerHTML = `
				<source src="${options.id}" type="video/${mimeType.groups.extension.toLowerCase()}">
			`;

			return video;
		},

		setPlayer: function (config) {
			var self = this;
			let options =
				config?.display === 'inline'
					? this.getOptionsInline()
					: this.getOptionsBackground();

			options = mergeDeep(options, { autoplay: config.autoplay }, config.playerVars, {
				id: config?.id || null,
				title: config?.title || null,
				height: '390',
				width: '640'
			});

			return new Promise(function (resolve, reject) {
				self.player = self.getPlayerMarkup(options);

				config.iframe.append(self.player);

				resolve();
			});
		},

		loadPlayer: function (config) {
			var self = this;

			return new Promise(function (resolve, reject) {
				self.setPlayer(config).then(resolve).catch(reject);
			});
		},

		play: function (player) {
			player = player || this.player;

			player.play();
		},

		pause: function (player) {
			player = player || this.player;

			player.pause();
		},

		setVolumeByPercentage: function (num) {
			let maxVolume = 1;
			let volumeAsPercent = maxVolume * (num / 100);

			this.player.volume = volumeAsPercent;
		}
	};

	return HTML5VideoAPI;
})(jQuery, Site);

// import { mergeDeep } from '@/helpers/utils';

Site.modules.VideoAPIVimeo = (function ($, Site) {
	function VimeoAPI() {
		this.type = 'vimeo';
		this.scriptUrl = 'https://player.vimeo.com/api/player.js';
		this.player = null;
	}

	VimeoAPI.prototype = {
		getOptionsInline() {
			return {
				background: false,
				controls: true,
				autoplay: false,
				loop: false,
				transparent: false
			};
		},

		getOptionsBackground: function () {
			return {
				background: false,
				controls: false,
				autoplay: false,
				loop: true,
				transparent: false
			};
		},

		setPlayer: function (config) {
			var self = this;
			let options =
				config?.display === 'inline'
					? this.getOptionsInline()
					: this.getOptionsBackground();

			options = mergeDeep(options, config.playerVars, {
				id: config?.id || null,
				title: config?.title || null,
				height: '390',
				width: '640'
			});

			return new Promise(function (resolve, reject) {
				self.player = new window.Vimeo.Player(config.iframe, options);

				self.player.ready().then(resolve).catch(reject);
			});
		},

		loadPlayer: function (config) {
			var self = this;

			return new Promise(function (resolve, reject) {
				self.setPlayer(config).then(resolve).catch(reject);
			});
		},

		play: function (player) {
			player = player || this.player;

			player.play();
		},

		pause: function (player) {
			player = player || this.player;

			player.pause();
		},

		setVolumeByPercentage: function (num) {
			let maxVolume = 1;
			let volumeAsPercent = maxVolume * (num / 100);

			this.player.setVolume(volumeAsPercent);
		}
	};

	return VimeoAPI;
})(jQuery, Site);

// import { mergeDeep } from '@/helpers/utils';

Site.modules.VideoAPIYouTube = (function ($, Site) {
	function YouTubeAPI() {
		this.type = 'youtube';
		this.scriptUrl = 'https://www.youtube.com/iframe_api';
		this.player = null;
	}

	YouTubeAPI.prototype = {
		getOptionsInline: function () {
			return {
				modestbranding: 1,
				rel: 0,
				playsinline: 1,
				autoplay: 0,
				controls: 1,
				loop: 0,
				origin: encodeURIComponent(
					window.location.protocol + '//' + window.location.hostname
				)
			};
		},

		getOptionsBackground: function () {
			return {
				modestbranding: 1,
				rel: 0,
				playsinline: 1,
				autoplay: 0,
				controls: 0,
				loop: 1,
				origin: encodeURIComponent(
					window.location.protocol + '//' + window.location.hostname
				)
			};
		},

		setPlayer: function (config) {
			var self = this;
			let options =
				config?.display === 'inline'
					? this.getOptionsInline()
					: this.getOptionsBackground();
			let playerVars = mergeDeep(options, config.playerVars, {
				playlist: config.id
			});

			return new Promise(function (resolve, reject) {
				self.player = new window.YT.Player(config.iframe, {
					height: '390',
					width: '640',
					videoId: config.id,
					title: config.title,
					playerVars,
					events: {
						onReady: function () {
							return resolve();
						},
						onError: function () {
							return reject();
						}
					}
				});
			});
		},

		loadPlayer: function (config) {
			var self = this;

			return new Promise(function (resolve, reject) {
				window.YT.ready(function () {
					self.setPlayer(config).then(resolve).catch(reject);
				});
			});
		},

		play: function () {
			this.player.playVideo();
		},

		pause: function () {
			this.player.pauseVideo();
		},

		setVolumeByPercentage: function (num) {
			let maxVolume = 100;
			let volumeAsPercent = maxVolume * (num / 100);

			this.player.setVolume(volumeAsPercent);
		}
	};

	return YouTubeAPI;
})(jQuery, Site);

/*-------------------------------------------
	Formstone
-------------------------------------------*/

Site.modules.Formstone = (function($, Site) {

	var PrevIcon,
	NextIcon,
	BackgroundOptions,
	LightboxOptions;

	function init() {
		PrevIcon = "chevron_left";
		NextIcon = "chevron_right";
		BackgroundOptions = {
			labels: {
				play: "Play",
				pause: "Pause"
			},
			icons: {
				play: Site.icon("video_play"),
				pause: Site.icon("video_pause")
			}
		};
		LightboxOptions = {
			videoWidth: 1000,
			fixed: true,
			labels: {
				close: "<span class='fs-lightbox-icon-close'>" + Site.icon("close") + "</span><span class='fs-lightbox-label-close'>Close</span>",
				previous: "<span class='fs-lightbox-icon-previous'>" + Site.icon(PrevIcon) + "</span>",
				count: "<span class='fs-lightbox-meta-divider'></span>",
				next: "<span class='fs-lightbox-icon-next'>" + Site.icon(NextIcon) + "</span>"
			}
		};

		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");
			backgroundVideo(this);
		}).background();
		$(".js-carousel").carousel();
		$(".js-checkpoint").checkpoint();
		$(".js-equalize").equalize();
		$(".js-lightbox").lightbox(LightboxOptions);
		$(".js-swap").swap();

		carouselPagination($(".js-carousel"));
	}

	function backgroundVideo(element) {
		var $background = $(element);

		if ($background.hasClass("js-background-video")) {
			if ($background.find(".fs-background-controls").length == 0) {
				$("<div class='fs-background-controls'><button class='fs-background-control fs-background-control-play fs-background-control-active' aria-pressed='true' aria-label='play'><span class='fs-background-control-icon'>" + BackgroundOptions.icons.play + "</span><span class='fs-background-control-label'>" + BackgroundOptions.labels.play + "<span></button><button class='fs-background-control fs-background-control-pause' aria-pressed='false' aria-label='pause'><span class='fs-background-control-icon'>" + BackgroundOptions.icons.pause + "</span><span class='fs-background-control-label'>" + BackgroundOptions.labels.pause + "<span></button></div>").appendTo($background);
			}

			$background.find(".fs-background-control-play").on("click", onPlayClick);
			$background.find(".fs-background-control-pause").on("click", onPauseClick);
		}
	}

	function onPlayClick() {
		var $background = $(this).closest(".js-background-video");

		$background.background("play");
		$background.find(".fs-background-control-play")
			.addClass("fs-background-control-active")
			.attr("aria-pressed", "true");
		$background.find(".fs-background-control-pause")
			.removeClass("fs-background-control-active")
			.attr("aria-pressed", "false");
	}

	function onPauseClick() {
		var $background = $(this).closest(".js-background-video");

		$background.background("pause");
		$background.find(".fs-background-control-pause")
			.addClass("fs-background-control-active")
			.attr("aria-pressed", "true");
		$background.find(".fs-background-control-play")
			.removeClass("fs-background-control-active")
			.attr("aria-pressed", "false");
	}

	function carouselPagination($element) {
		$element.each(function() {
			var $previous_button = $(this).find(".fs-carousel-control_previous");
			var previous_text = $previous_button.text();
			var $next_button = $(this).find(".fs-carousel-control_next");
			var next_text = $next_button.text();

			$previous_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(PrevIcon) + "</span><span class='fs-carousel-control-label'>" + previous_text + "</span>");
			$next_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(NextIcon) + "</span><span class='fs-carousel-control-label'>" + next_text + "</span>");
		});
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Menu
-------------------------------------------*/

Site.modules.Menu = (function($, Site) {

	var $Menu,
	$MenuHandle,
	$ShiftingElements;

	function init() {
		$Menu = $(".js-menu");

		if ($Menu.length) {
			$MenuHandle = $(".js-menu-handle");
			$ShiftingElements = $(".header, .page, .footer");

			$Menu
				.attr("aria-hidden", true)
				.find(".js-nav-link, button, input").attr("tabindex", "-1");

			$(".menu_callout_bottom_link").on("keydown", onCloseKeydown);

			$MenuHandle.on("keydown", onTrap);

			createSiteButtons($(".js-menu-handle"));
			bindUI();
		}
	}

	function createSiteButtons($element) {
		$element.each(function() {
			$element.attr({
				"aria-expanded": false,
				"role": "button"
			});
		});
	}

	function bindUI() {
		$MenuHandle
			.on("click", onClickMenu);
		$Menu
			.on("keydown", onMenuKeydown)
			.on("keyup", onMenuKeyup);
	}

	function onClickMenu() {
		if ($("body").hasClass("fs-page-lock")) {
			onMenuSwapDeactivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
			} else {
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			}
		} else {
			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
			} else {
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}

		if ($MenuHandle.hasClass("fs-swap-active")) {
			onMenuSwapActivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			} else if (!$(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}
	}

	function onMenuSwapActivate() {
		Site.$body.addClass("fs-page-lock");
		Site.modules.Page.saveScrollYPosition();
		$MenuHandle.attr("aria-expanded", true);
		$Menu.attr({
			"aria-hidden": false,
			"tabindex": "0"
		}).focus()
		.find(".js-nav-link, button, input").removeAttr("tabindex");

		$ShiftingElements.css("padding-right", Site.modules.Page.getScrollbarWidth());
		$Menu.css("margin-right", "");
		$Menu.css("width", "");
	}

	function onMenuSwapDeactivate() {
		Site.$body.removeClass("fs-page-lock");
		Site.modules.Page.restoreScrollYPosition();
		$Menu
			.attr("aria-hidden", true)
			.removeAttr("tabindex")
			.find(".js-nav-link, button, input").attr("tabindex", "-1");
		$(".menu_handle").attr("aria-expanded", false).focus();

		$ShiftingElements.css("padding-right", "");
		$Menu.css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
		$Menu.css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");
	}

	function onCloseKeydown(e) {
		if (e.keyCode === 9) { // tab
			if (!(e.shiftKey)) {
				e.preventDefault();
				$MenuHandle.focus();
			}
		}
	}

	function onMenuKeydown(e) {
		if ($Menu.is(":focus")) {
			if (e.keyCode === 9) { // tab
				if (e.shiftKey) {
					e.preventDefault();
					$MenuHandle.focus();
				}
			}
		}
	}

	function onMenuKeyup(e) {
		if (e.keyCode === 27) { // escape
			$MenuHandle.swap("deactivate");
			onMenuSwapDeactivate();
			$(".menu_handle_label").text("Menu");
			$(".menu_handle_icon").html(Site.icon("menu"));
		}
	}

	function onTrap(e) {
		if ($Menu.hasClass("fs-swap-active")) {
			if (e.keyCode === 9) { // tab
				if (!(e.shiftKey)) {
					e.preventDefault();
					$Menu.focus();
				}
			}
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Navigation
-------------------------------------------*/

Site.modules.Nav = (function($, Site) {

	var $Nav,
	$Children,
	$Toggle,
	$ChildLink,
	$ActiveToggle,
	$ActiveItem;

	function init() {
		$Nav = $(".js-nav");

		if ($Nav.length) {
			$Children = $(".js-nav-children");
			$ChildLink = $(".js-nav-child-link");
			$Toggle = $(".js-nav-toggle");

			$Children.attr("aria-hide", true);
			$ChildLink.attr("tabindex", -1);

			bindUI();
		}
	}

	function bindUI() {
		$Toggle
			.on("activate.swap", onToggleSwapActivate)
			.on("deactivate.swap", onToggleSwapDeactivate)
			.on("keydown", onToggleKeydown);
		$ChildLink.on("keydown", onChildLinkKeydown);
	}

	function onToggleSwapActivate() {
		$ActiveToggle = $(this);
		$ActiveItem = $ActiveToggle.closest(".js-nav-item");

		$ActiveToggle.attr("aria-expanded", true);
		$ActiveItem.find(".js-nav-children")
			.attr("aria-hide", false)
			.transition({
				always: false,
				property: "opacity"
			}, function() {
				$ActiveItem.find(".js-nav-child-link").first().focus();
			});
		$ActiveItem.find(".js-nav-child-link").removeAttr("tabindex").first().focus();
	}

	function onToggleSwapDeactivate() {
		$ActiveToggle = $(this);
		$ActiveItem = $ActiveToggle.closest(".js-nav-item");

		$ActiveToggle.attr("aria-expanded", false);
		$ActiveItem.find(".js-nav-children").attr("aria-hide", true);
		$ActiveItem.find(".js-nav-child-link").attr("tabindex", -1);
	}

	function onToggleKeydown(e) {
		if (e.keyCode === 27 || e.keyCode === 40) {
			e.preventDefault();
		}
		if (e.keyCode === 27) { // escape
			$(this).swap("deactivate");
		} else if (e.keyCode === 40) { // down
			$(this).swap("activate");
		}
	}

	function onChildLinkKeydown(e) {
		var $childItem = $(this).closest(".js-nav-child-item");

		if (e.keyCode === 27 || e.keyCode === 38 || e.keyCode === 40 ) {
			e.preventDefault();
		}
		if (e.keyCode === 9) { // tab
			$ActiveToggle.swap("deactivate");
		} else if (e.keyCode === 27) { // escape
			$ActiveToggle.swap("deactivate").focus();
		} else if (e.keyCode === 38) { // up
			$childItem.prev(".js-nav-child-item").find(".js-nav-child-link").focus();
		} else if (e.keyCode === 40) { // down
			$childItem.next(".js-nav-child-item").find(".js-nav-child-link").focus();
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function ($, Site) {
	var $FixedHeader, // set to fixed header element
		FixedHeaderHeight,
		ScrollYPosition;

	function init() {
		$FixedHeader = $('.header');

		FixedHeaderHeight = null;
		ScrollYPosition = 0;

		bindUI();
		fixIEsvg();
		responsiveVideo();
		tableOverflowPrep();
		tableOverflow();
		pinHeader();

		Site.modules.Formstone.init();
		Site.modules.Accordion.init();
		Site.modules.Alert.init();
		// Site.modules.ForYou.init();
		Site.modules.ForYouTwo.init();
		Site.modules.Menu.init();
		Site.modules.MenuCampaign.init();
		Site.modules.Nav.init();
		Site.modules.Share.init();
		Site.modules.SubNav.init();
		Site.modules.Pagination.init();
		Site.modules.Profiles.init();
		Site.modules.VideoAppender.init();
		Site.modules.MajorTitle.init();
		Site.modules.ArticleFeature.init();
		Site.modules.Stats.init();
		Site.modules.ProgramFinder.init();
		Site.modules.DonorRoll.init();
		Site.modules.CSSCustomVars.init();
		Site.modules.VideoLazyLoad.init();
		// Site.modules.LightboxAlt.init();
	}

	function bindUI() {
		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Formstone.Ready(pageLoad);

		$('.js-toggle').not('.js-bound').on('click', '.js-toggle-handle', onToggleClick).addClass('js-bound');

		$('.js-scroll-to').not('.js-bound').on('click', onScrollTo).addClass('js-bound');
	}

	function scroll() {
		pinHeader();
	}

	function resize() {
		tableOverflow();
		fixedHeader($FixedHeader);
	}

	function respond() {}

	function pageLoad() {
		$('body').removeClass('preload').addClass('loaded');

		$(window).trigger('resize');

		if (window.location.hash) {
			var id = window.location.hash;

			scrollToElement(id);
		}
	}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
			id = $target.attr('href');

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$('html, body').animate({
			scrollTop: top - FixedHeaderHeight
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
			activeClass = 'js-toggle-active';

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function responsiveVideo() {
		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", '.typography').each(function () {
			$(this).wrap('<div class="video_frame"></div>');
		});
	}

	function tableOverflowPrep() {
		$('.typography table').wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
	}

	function tableOverflow() {
		$('.table_wrapper').each(function () {
			var $inner = $(this).find('.table_wrapper_inner');
			var scrollWidth = $inner.get(0).scrollWidth;
			var clientWidth = $inner.get(0).clientWidth;

			if (scrollWidth > clientWidth) {
				$(this).addClass('table_wrapper_overflow').attr({
					tabindex: '0',
					role: 'group'
				});
			} else {
				$(this).removeClass('table_wrapper_overflow').removeAttr('tabindex role');
			}
		});
	}

	function fixedHeader($header) {
		if (typeof $FixedHeader !== 'undefined') {
			FixedHeaderHeight = $header.outerHeight();
			btBarHeight = $('#bigtree_bar').outerHeight();
			wpBarHeight = $('#wpadminbar').outerHeight();

			if (btBarHeight > 0) {
				$header.css('top', btBarHeight);

				FixedHeaderHeight = FixedHeaderHeight + btBarHeight;
			} else if (wpBarHeight > 0) {
				$header.css('top', wpBarHeight);

				FixedHeaderHeight = FixedHeaderHeight + wpBarHeight;
			}
		}
	}

	function saveScrollYPosition() {
		ScrollYPosition = window.pageYOffset;

		$('body').css({
			width: '100%',
			position: 'fixed',
			top: ScrollYPosition * -1
		});
	}

	function restoreScrollYPosition() {
		$('body').css({
			width: '',
			position: '',
			top: ''
		});

		$('html, body').scrollTop(ScrollYPosition);
	}

	function getScrollbarWidth() {
		var outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.width = '100px';
		outer.style.msOverflowStyle = 'scrollbar';

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = 'scroll';

		// add innerdiv
		var inner = document.createElement('div');
		inner.style.width = '100%';
		outer.appendChild(inner);

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	}

	function fixIEsvg() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$.get(STATIC_ROOT + 'images/icons.svg', function (data) {
				var div = document.createElement('div');
				$(div).hide();
				div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
				document.body.insertBefore(div, document.body.childNodes[0]);

				$('svg use').each(function () {
					var parts = $(this).attr('xlink:href').split('#');
					$(this).attr('xlink:href', '#' + parts[1]);
				});
			});
		}
	}

	function pinHeader() {
		if ($(window).scrollTop() > 50) {
			$('body').addClass('pinned_header');
		} else {
			$('body').removeClass('pinned_header');
		}
	}

	Site.onInit.push(init);

	return {
		getScrollbarWidth: getScrollbarWidth,
		saveScrollYPosition: saveScrollYPosition,
		restoreScrollYPosition: restoreScrollYPosition,
		scrollToElement: scrollToElement
	};
})(jQuery, Site);

/*-------------------------------------------
	Sub Nav
-------------------------------------------*/

Site.modules.SubNav = (function($, Site) {

	var $SubNavHandle,
	$SubNavList;

	function init() {
		if ($(".js-sub-nav").length) {
			$SubNavHandle = $(".js-sub-nav-handle");
			$SubNavList = $(".js-sub-nav-list");

			$SubNavHandle
				.attr("aria-expanded", "false")
				.attr("aria-haspopup", "true");
			bindUI();
		}
	}

	function bindUI() {
		$SubNavHandle
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$SubNavList.attr("aria-hidden", "false");
				$SubNavHandle
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				$SubNavList.attr("aria-hidden", "true");
				$SubNavHandle
					.attr("aria-expanded", "false")
					.attr("aria-haspopup", "true");
			}
		});
	}

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
			.find(".sub_nav_handle_label")
			.text("Close");
		$SubNavList.attr("aria-hidden", "false");
	}

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));
		$SubNavList.attr("aria-hidden", "true");
	}

	function onSubSwapEnable() {
		$SubNavList.attr("aria-hidden", "true");
	}

	function onSubSwapDisable() {
		$SubNavList.attr("aria-hidden", "false");
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Accordion
-------------------------------------------*/

Site.modules.Accordion = (function($, Site) {

	var $Accordion,
		$AccordionTrigger,
		$AccordionContent;

	function init() {
		$Accordion = $(".js-accordion");

		if ($Accordion.length) {
			$AccordionTrigger = $(".js-accordion-trigger");
			$AccordionContent = $(".js-accordion-content");

			setup();
			bindUI();
		}
	}

	function setup() {
		$AccordionTrigger.attr("aria-expanded", "false");

		$AccordionContent.attr("aria-hidden", "true");

		$Accordion.each(function() {
			if ($(this).find(".fs-swap-active").length) {
				$(this).find(".js-accordion-content:eq(0)").attr("aria-hidden", "false");

				$(this)
					.find(".js-accordion-item:eq(0) .js-accordion-trigger")
					.attr("aria-expanded", "true");
			}
		});
	}

	function bindUI() {
		$AccordionTrigger
			.on("activate.swap", onTriggerActivate)
			.on("deactivate.swap", onTriggerDeactivate)
			.on("keydown", onTriggerKeydown);
	}

	function onTriggerActivate() {
		$(this).attr("aria-expanded", "true");

		$Accordion
			.find($(this).data("swap-target"))
			.find(".js-accordion-content")
			.attr("aria-hidden", "false");
	}

	function onTriggerDeactivate() {
		$(this).attr("aria-expanded", "false");

		$Accordion
			.find($(this).data("swap-target"))
			.find(".js-accordion-content")
			.attr("aria-hidden", "true");
	}

	function onTriggerKeydown(e) {
		var $focusedElement = $(":focus");
		var $focusedItem = $focusedElement.closest(".js-accordion-item");
		var $closestAccordion = $(this).closest(".js-accordion");

		if ([36, 35, 38, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}

		if (e.keyCode === 36) { // home
			activeFirstAccordion($closestAccordion);
		} else if (e.keyCode === 35) { // end
			activeLastAccordion($closestAccordion);
		} else if (e.keyCode === 38) { // up
			if ($focusedItem.prev().length > 0) {
				activePrevAccordion($focusedItem);
			} else {
				activeLastAccordion($closestAccordion);
			}
		} else if (e.keyCode === 40) { // down
			if ($focusedItem.next().length > 0) {
				activeNextAccordion($focusedItem);
			} else {
				activeFirstAccordion($closestAccordion);
			}
		}
	}

	function activeFirstAccordion(accordion) {
		$(accordion)
			.find(".js-accordion-item:first-of-type .js-accordion-trigger")
			.focus();
	}

	function activePrevAccordion(accordion) {
		$(accordion)
			.prev()
			.find(".js-accordion-trigger")
			.focus();
	}

	function activeNextAccordion(accordion) {
		$(accordion)
			.next()
			.find(".js-accordion-trigger")
			.focus();
	}

	function activeLastAccordion(accordion) {
		$(accordion)
			.find(".js-accordion-item:last-of-type .js-accordion-trigger")
			.focus();
	}

	return {
		init: init
	};

})(jQuery, Site);

/* --------------------------------------------------------------------------
	Alert - BigTree
-------------------------------------------------------------------------- */

/* globals AlertURL, jQuery, Site */

Site.modules.Alert = (function($, Site) {

	var $Alert,
		$CloseButton,
	    $OpenButton,
	    $SkipLink,
	    CookieName,
	    CookieValue,
	    Time;

	function init() {
		// Do not use this Javascript if we're using AJAX alerts
		if (typeof AlertURL !== "undefined") {
			return;
		}

		$Alert = $(".js-alert");
		$SkipLink = $(".js-skip-alert");

		if (!$Alert.length) {
			$SkipLink.hide();

			return;
		}

		$Alert.addClass("enabled");
		$CloseButton = $(".js-alert-close");
		$OpenButton = $(".js-alert-open");
		Time = $Alert.data("time");
		CookieName = Site.Namespace + "-alert";
		CookieValue = $.cookie(CookieName);

		if (CookieValue) {
			try {
				CookieValue = JSON.parse(CookieValue);
			} catch (error) {
				CookieValue = [];
			}
		} else {
			CookieValue = [];
		}
		
		$SkipLink.on("click", onOpenClick);
		$CloseButton.on("click", onCloseClick);
		$OpenButton.addClass("enabled").on("click", onOpenClick);

		// Not hidden, show it and hide the open button
		if (CookieValue.indexOf(Time) === -1) {
			alertOpen();
		} else {
			alertClose();
		}
	}

	function alertClose() {
		$OpenButton.addClass("visible");
		$Alert.removeClass("visible").attr("aria-hidden", "true");
		$Alert.find("a, button").attr("tabindex", "-1");
	}

	function alertOpen() {
		$OpenButton.removeClass("visible");
		$Alert.addClass("visible").attr("aria-hidden", "false");
		$Alert.find("a, button").removeAttr("tabindex");
	}

	function onCloseClick(ev) {
		ev.preventDefault();

		CookieValue.push(Time);

		$.cookie(CookieName, JSON.stringify(CookieValue), {
			path: "/",
			expires: 1000 * 365 * 24 * 60 * 60
		});

		alertClose();
		$CloseButton.blur();
	}

	function onOpenClick(ev) {
		ev.preventDefault();

		// Allow for the skip link to jump to this even if it's already open
		if ($Alert.hasClass("visible")) {
			$Alert.focus();

			return;
		}

		var cleaned_cookie_val = [];

		for (var i = 0; i < CookieValue.length; i++) {
			if (CookieValue[i] !== Time) {
				cleaned_cookie_val.push(CookieValue[i]);
			}
		}

		CookieValue = cleaned_cookie_val;
		
		$.cookie(CookieName, CookieValue, {
			path: "/",
			expires: 1000 * 365 * 24 * 60 * 60
		});

		alertOpen();

		$Alert.transition({
			always: false,
			property: "transform"
		}, function () {
			$Alert.focus();
		});
	}

	return {
		init: init
	};

})(jQuery, Site);
/*-------------------------------------------
	Article Feature
-------------------------------------------*/

Site.modules.ArticleFeature = (function($, Site) {

	var $component,
	$content,
	windowHeight,
	windowHalfHeight;

	function init() {
		$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
			enter: function() {
				if ($(".page_layout_home .js-sticky-feature").length) {
					$component = $(".js-sticky-feature");
					$content = $(".js-sticky-feature-body");

					updateValues();
					fadeItems();
					resizeBackground();
					bindUI();
				}
			}
		});
	}

	function bindUI() {
		Site.onScroll.push(fadeItems);
		Site.onResize.push(updateValues);
		Site.onResize.push(resizeBackground);
	}

	function updateValues() {
		windowHeight = $(window).innerHeight();
		windowHalfHeight = windowHeight / 2;
	}

	function fadeItems() {
		$component.each(function() {
			var dims = $(this)[0].getBoundingClientRect();
			var $item = $(this).find(".js-sticky-background");
			var scale;
			var diff = 0.15;
			var topPercent;

			if (windowHeight - dims.top > 0) {
				topPercent = ((windowHeight - dims.top) / windowHeight);
				scale = 0.85 + (diff * topPercent);

				if (scale <= 1) {
					$item.css("transform", "scale(" + scale + ")");
				} else {
					$item.css("transform", "scale(1)");
				}
			} else {
				$item.css("transform", "scale(1)");
			}

			if (dims.bottom >= 0 && dims.bottom <= windowHalfHeight) {
				$item.css("opacity", 1 - (((windowHalfHeight - dims.bottom) / windowHalfHeight)));
			} else {
				$item.css("opacity", 1);

			}

			if (dims.top <= 0) {
				$(this).addClass("sticky");
				$(".js-sticky-feature-background-color").removeClass("color");
			} else {
				$(this).removeClass("sticky");

			}
		});
	}

	function resizeBackground() {
		if ($(window).innerHeight() < $component.innerHeight()) {
			$(".js-sticky-background .fs-background-container").css("height", window.innerHeight);
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

Site.modules.CSSCustomVars = (function ($, Site) {
	var root = document.documentElement;
	var $Header = $('.js-header');
	var $ToBeBoldBanner = $('.js-tobebold-banner');

	function setHeaderProps() {
		if (!$Header.length) return;

		var HeaderHeight = Math.round($Header.outerHeight(true));

		root.style.setProperty('--header_height', HeaderHeight + 'px');

		if ($ToBeBoldBanner.length) {
			var toBeBoldBannerHeight = Math.round($ToBeBoldBanner.outerHeight(true));

			root.style.setProperty('--tobebold_banner_height', toBeBoldBannerHeight + 'px');
		}
	}

	function setProps() {
		setHeaderProps();
	}

	function addEventBindings() {
		$(window).on('load resize header-class-modified', setProps);

		Site.onResize.push(setProps);
	}

	function init() {
		setProps();
		addEventBindings();
	}

	return {
		init: init
	};
})(jQuery, Site);

/*-------------------------------------------
	Module
-------------------------------------------*/

Site.modules.DonorRoll = (function ($, Site) {
	var $Node = null;
	var $Form = null;
	var $Select = null;
	var $Group = null;
	var $BtnScrollToTop = null;
	var fixed_header_height = 0;

	function init() {
		$Node = $('.js-donor-roll');
		$Form = $Node.find('[data-js="form"]');
		$Select = $Node.find('[data-js="select"]');
		$Group = $Node.find('[data-js="group"]');
		$BtnScrollToTop = $Node.find('[data-js="back-top-top"]');

		if (!$Node.length) {
			return;
		}

		bindUI();
	}

	function onSubmit(event) {
		event.preventDefault();

		var value = $Select.val();
		var $group_target = $Group
			.filter('[data-id="donor-roll-group-' + value + '"]')
			.first();

		if (!$group_target.length) {
			return false;
		}

		var offset = $group_target.offset().top;
		

		initScroll(offset);
	}

	function onBtnScrollToTopClick() {
		var offset = $Node.offset().top;

		initScroll(offset);
	}

	function onWindowUpdate() {
		fixed_header_height = $('.header_group').outerHeight();

		document.documentElement.style.setProperty(
			'--fixed_header_height',
			fixed_header_height + 'px'
		);
	}

	function initScroll(offset) {
		offset -= fixed_header_height;

		$('html, body').animate(
			{
				scrollTop: offset
			},
			500
		);
	}

	function bindUI() {
		$Form.on('submit', onSubmit);
		$BtnScrollToTop.on('click', onBtnScrollToTopClick);
		$(window).on('load resize', onWindowUpdate);
	}

	return {
		init: init
	};
})(jQuery, Site);

/*-------------------------------------------
	ForYou
-------------------------------------------*/

Site.modules.ForYouTwo = (function($, Site) {

	var $ForYou,
	$ForYouHandle,
	$ShiftingElements,
	$ForYouHandleActive,
	$ForYouTrigger,
	$ForYouPanelLink;

	function init() {
		$ForYou = $(".js-for-you");

		if ($ForYou.length) {
			$ForYouHandle = $(".js-for-you-handle");
			$ShiftingElements = $(".header, .page, .footer");
			$ForYouPanelLink = $(".js-for-you-panel-link");
			$ForYouTrigger = $(".js-for-you-trigger");
			$ForYouHandleActive = $(".js-for-you-handle.fs-swap-active");

			$ForYou
				.attr("aria-hidden", true)
				.find("button, input, .js-for-you-panel-link").attr("tabindex", "-1");

			$(".js-for-you-panel-item:last-child .js-for-you-panel-link").on("keydown", onCloseKeydown);
			$(".for_you_cat_links:last-child .for_you_cat_links_item:last-child .for_you_cat_links_link").on("keydown", onCloseCatKeydown);

			$ForYouHandle.on("keydown", onTrap);

			createSiteButtons($(".js-for-you-handle"));
			setup();
			bindUI();
		}
	}

	function createSiteButtons($element) {
		$element.each(function() {
			$element.attr({
				"aria-expanded": false,
				"role": "button"
			});
		});
	}

	function setup() {
		$ForYou
			.attr("aria-hidden", "true")
			.find("a, button, input").not("a.for_you_cat_links_link").attr("tabindex", "-1");


		$(".js-for-you-handle, .js-for-you-panel-link").attr({
			"aria-expanded": "false",
			"role": "button"
		});
	}

	function bindUI() {
		$ForYouHandle
			.on("click", onClickMenu);

		$ForYou
			.on("keydown", onForYouKeydown)
			.on("keyup", onForYouKeyup);

		$ForYou.attr({
			"tabindex": "0"
		}).transition({
			always: false,
			property: "opacity"
		}, function() {
			$ForYou.focus();
		});

		$ForYouPanelLink.on("click", ForYouFocus);

		$ForYouPanelLink.on("activate.swap", onForYouLinkActivate);
	}

	function onClickMenu() {
		if ($("body").hasClass("fs-page-lock")) {
			onForYouSwapDeactivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
			} else {
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			}
		} else {
			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
			} else {
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}

		if ($ForYouHandle.hasClass("fs-swap-active")) {
			onForYouSwapActivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			} else if (!$(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}
	}

	function onForYouSwapActivate() {
		Site.$body.addClass("fs-page-lock");
		Site.modules.Page.saveScrollYPosition();
		$ForYouHandle.attr("aria-expanded", true);
		$ForYou.attr({
			"aria-hidden": false,
			"tabindex": "0"
		}).transition({
			always: false,
			property: "opacity"
		}, function() {
			$ForYou.focus();
		})
		.find(".js-nav-link, button, input, .js-for-you-panel-link").removeAttr("tabindex");

		$ShiftingElements.css("padding-right", Site.modules.Page.getScrollbarWidth());
		$ForYou.css("margin-right", "");
		$ForYou.css("width", "");
	}

	function onForYouLinkActivate() {
		var $activeLink = $(".js-for-you-panel-link.fs-swap-active");
		var activeString = $activeLink.text();
		var activeIndex = $activeLink.closest(".js-for-you-panel-item").index();

		//$.cookie("riv-quick-links-category", activeIndex);
		$(".js-for-you-trigger-label").text(activeString);
		//$(".js-for-you-cat").find("a, button, input").attr("tabindex", "-1");
		//$(".js-for-you-cat.fs-swap-active").find("a, button, input").removeAttr("tabindex");
		//$(".js-for-you-panel-link").attr("aria-expanded", "false");
		//$activeLink.attr("aria-expanded", "true");
	}

	function onForYouSwapDeactivate() {
		Site.$body.removeClass("fs-page-lock");
		Site.modules.Page.restoreScrollYPosition();
		$ForYou
			.attr("aria-hidden", true)
			.removeAttr("tabindex")
			.find(".js-nav-link, button, input").attr("tabindex", "-1");
		$(".for-you_handle").attr("aria-expanded", false).focus();

		$ShiftingElements.css("padding-right", "");
		$ForYou.css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
		$ForYou.css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");

		$(".js-for-you").find("a, button, input").attr("tabindex", "-1");
		$(".js-for-you").find(".js-for-you-cat").attr("tabindex", "-1");
	}

	function ForYouFocus() {
		var ForYouID = $(this).attr("href");

		$(".js-for-you-trigger").swap("deactivate");
		$ForYou.find("a, button, input").attr("tabindex", "-1");

		$(ForYouID).find("a, button, input").removeAttr("tabindex");
		$ForYou.find(".js-for-you-cat").attr("tabindex", "-1");

		$(ForYouID).attr({
			"tabindex": "0"
		}).transition({
			always: false,
			property: "opacity"
		}, function() {
			$(ForYouID).focus();
		});
	}

	function onCloseKeydown(e) {
		if (e.keyCode === 9) { // tab
			if (!(e.shiftKey)) {
				e.preventDefault();
				$ForYouHandle.focus();
			}
		}
	}

	function onCloseCatKeydown(e) {
		if (e.keyCode === 9) { // tab
			if (!(e.shiftKey)) {
				e.preventDefault();
				$ForYouHandle.focus();
			}
		}

		if ($ForYouHandle.is(":focus")) {
			$ForYouHandle.on("keydown", onCloseCatAround);
		}
	}

	function onCloseCatAround(e) {
		if ($("body").hasClass("fs-page-lock")) {
			if (e.keyCode === 9) { // tab
				if (!(e.shiftKey)) {
					e.preventDefault();
					$(".js-for-you-panel-item:first-child .js-for-you-panel-link").focus();
					$(".js-for-you-panel-link").removeAttr("tabindex");
				}
			}
		}
	}

	function onForYouKeydown(e) {
		if ($ForYou.is(":focus")) {
			if (e.keyCode === 9) { // tab
				if (e.shiftKey) {
					e.preventDefault();
					$ForYouHandle.focus();
				}
			}
		}
	}

	function onForYouKeyup(e) {
		if (e.keyCode === 27) { // escape
			$ForYouHandle.swap("deactivate");
			onForYouSwapDeactivate();
			$(".for_you_handle_label").text("For You");
			$(".for_you_handle_icon").html(Site.icon("person"));
			$ForYouHandle.focus();
		}
	}

	function onTrap(e) {
		if ($ForYou.hasClass("fs-swap-active")) {
			if (e.keyCode === 9) { // tab
				if (!(e.shiftKey)) {
					e.preventDefault();
					$ForYou.focus();
				}
			}
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

// /*-------------------------------------------
// 	For You
// -------------------------------------------*/
//
// Site.modules.ForYou = (function($, Site) {
//
// 	var $ForYou,
// 	$ForYouPanelLink,
// 	$ForYouCat;
//
// 	function init() {
// 		$ForYou = $(".js-for-you");
// 		$ForYouPanelLink = $(".js-for-you-panel-link");
// 		$ForYouCat = $(".js-for-you-cat");
//
// 		if ($ForYou.length) {
// 			setup();
// 			bindUI();
// 		}
// 	}
//
// 	function setup() {
// 		$ForYou
// 			.attr("aria-hidden", "true")
// 			.find("a, button, input").attr("tabindex", "-1")
// 			.on("keyup", onMenuKeyup);
//
// 		$(".js-for-you-handle, .js-for-you-panel-link").attr({
// 			"aria-expanded": "false",
// 			"role": "button"
// 		});
// 	}
//
// 	function bindUI() {
// 		$ForYou.attr({
// 			"tabindex": "0"
// 		}).transition({
// 			always: false,
// 			property: "opacity"
// 		}, function() {
// 			$ForYou.focus();
// 		});
//
// 		$ForYouPanelLink.on("click", ForYouFocus);
// 		$(".for_you_handle").on("click", ForYouClose);
// 	}
//
// 	function ForYouFocus() {
// 		var ForYouID = $(this).attr("href");
//
// 		$ForYou.find("a, button, input").attr("tabindex", "-1");
// 		$(ForYouID).find("a, button, input").removeAttr("tabindex");
// 		$ForYou.find(".js-for-you-cat").attr("tabindex", "-1");
//
// 		$(ForYouID).attr({
// 			"tabindex": "0"
// 		}).transition({
// 			always: false,
// 			property: "opacity"
// 		}, function() {
// 			$(ForYouID).focus();
// 		});
// 	}
//
// 	function ForYouClose() {
// 		console.log("closed");
// 		$ForYou.find("a, button, input").attr("tabindex", "-1");
// 		$(".for_you_handle").attr("aria-expanded", false).focus();
// 	}
//
// 	function onMenuKeyup(e) {
// 		if (e.keyCode === 27) { // escape
// 			$(".for_you_handle").swap("deactivate");
// 		}
// 	}
//
// 	return {
// 		init: init
// 	};
//
// })(jQuery, Site);

/*-------------------------------------------
	LightboxAlt
-------------------------------------------*/

Site.modules.LightboxAlt = (function($, Site) {

	var $Items;
	var $CurrentItem;
	var CurrentDataItem;
	var Data;
	var CloseLabel;
	var HasControls;

	function init() {
		$Items = $(".js-lightbox-alt");
		if ( $Items.length ) {
			Data = {};
			CloseLabel = "Close";
			HasControls = false;

			scanPage();
			bindUI();
		}
	}

	function scanPage() {
		$Items.each(function() {
			var href = $(this).attr("href");
			var group = $(this).data("lightbox-group");

			if (href.indexOf("youtu") > -1) {
				$(this).addClass("fs-video fs-youtube");
			} else if (href.indexOf("vimeo") > -1) {
				$(this).addClass("fs-video fs-vimeo");
			} else if ($(this).hasClass("js-iframe")) {
				$(this).addClass("fs-iframe");
			} else {
				$(this).addClass("fs-image");
			}

			if (group in Data) {
				Data[group].push(href);
			} else {
				Data[group] = [href];
			}
		});

		if ($Items.length > 1) {
			HasControls = true;
		}
	}

	function bindUI() {
		$Items.on("click", function(e) {
			e.preventDefault();
            restrictBody();
            prepLightbox();
            showLightbox();
			loadItem($(this));
		});
	}

	function bindAddedUI() {
		$(".fs-lightbox-close").on("click", function() {
			reopenBody();
			hideLightbox();
			destroyLightboxObject();
		});

		$(".fs-lightbox-close").on("keydown", onCloseKeydown);

		$(".fs-lightbox-control-previous").on("click", function() {
			reprepFigure();
			destroyLightboxObject("previous");
		});

		$(".fs-lightbox-control-next").on("click", function() {
			reprepFigure();
			destroyLightboxObject("next");
		});

		$(".fs-lightbox").attr("tabindex", "0")
			.on("keydown", onMenuKeydown)
			.on("keyup", onMenuKeyup);
	}

	function prepLightbox() {
		if (!($(".fs-lightbox").length)) {
			var html = '<div class="fs-lightbox hidden">' +
				'<figure class="fs-lightbox-figure loading">' +
				'</figure>';

			if (HasControls) {
				html += '<div class="fs-lightbox-controls">' +
					'<button class="fs-lightbox-control fs-lightbox-control-previous">' +
						'<span class="fs-lightbox-control-icon" aria-hidden="true">' + Site.icon("arrow_left") + '</span>' +
						'<span class="fs-lightbox-control-label">Previous media</span>' +
					'</button>' +
					'<button class="fs-lightbox-control fs-lightbox-control-next">' +
						'<span class="fs-lightbox-control-icon" aria-hidden="true">' + Site.icon("arrow_right") + '</span>' +
						'<span class="fs-lightbox-control-label">Next media</span>' +
					'</button>' +
				'</div>';
			}

			html += '<button class="fs-lightbox-close" title="close lightbox">' +
				'<span class="fs-lightbox-close-icon" aria-hidden="true">' + Site.icon("close") + '</span>' +
				'<span class="fs-lightbox-close-label">' + CloseLabel + '</span>' +
			'</button>' + 
			'</div>';

			$("body").after(html);

			bindAddedUI();
		}
	}

	function loadItem(target) {
		$CurrentItem = $(target);
        CurrentDataItem = findCurrentDataItem();
		var object = $CurrentItem.attr("href");

		if ($(target).hasClass("fs-youtube")) {
			object = object.replace("watch?v=", "embed/");
			object += "?rel=0&amp;controls=1&amp;showinfo=0&autoplay=1&enablefsapi=1";
			object += '&origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.hostname);

            $(".fs-lightbox-figure").append('<div class="fs-lightbox-object-wrapper fs-lightbox-object-wrapper-youtube">' +
                '<iframe class="fs-lightbox-object fs-lightbox-iframe fs-lightbox-iframe-youtube" src="' + object + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />' +
            '</div>');

		} else if ($(target).hasClass("fs-vimeo")) {

			object = object.replace("vimeo.com", "player.vimeo.com/video");
			object += "?background=1&autoplay=1&loop=1&autopause=0";

            $(".fs-lightbox-figure").append('<div class="fs-lightbox-object-wrapper fs-lightbox-object-wrapper-vimeo">' +
                '<div class="fs-lightbox-object-wrapper-inner">' +
                    '<iframe class="fs-lightbox-object fs-lightbox-iframe fs-lightbox-iframe-vimeo" src="' + object + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />' +
                '</div>' +
            '</div>');
        
        } else if ($(target).hasClass("fs-iframe")) {

            $(".fs-lightbox-figure").append('<div class="fs-lightbox-object-wrapper fs-lightbox-object-wrapper-iframe">' +
                '<div class="fs-lightbox-object-wrapper-inner">' +
                    '<iframe class="fs-lightbox-object fs-lightbox-iframe" src="' + object + '" frameborder="0" allowfullscreen />' +
                '</div>' +
            '</div>');
        
        } else {
            
            $(".fs-lightbox-figure").append('<div class="fs-lightbox-object-wrapper fs-lightbox-object-wrapper-image">' + 
                '<div class="fs-lightbox-object-wrapper-inner">' +
                    '<img class="fs-lightbox-object fs-lightbox-image" src="' + object + '" />' + 
                '</div>' +
            '</div>');
        
        }

		if (CurrentDataItem.caption) {
            $(".fs-lightbox-object-wrapper-inner").append('' +
            '<p class="fs-lightbox-object-caption">' +
                '<span class="fs-lightbox-object-caption-counter">' + (CurrentDataItem.index + 1) + ' of ' + $Items.length + '</span>' +
                CurrentDataItem.caption + 
            '</p>' +
            '</div>');
		}

		$(".fs-lightbox-object").on("load", function() {
			$(".fs-lightbox-figure").removeClass("loading");
			setTimeout(function() {
				$(".fs-lightbox").focus();
			}, 250);
		});

	}

	function findCurrentDataItem() {
		var href = $CurrentItem.attr("href");
		var group = $CurrentItem.data("lightbox-group");
		var caption = $CurrentItem.data("lightbox-caption");

		return {
			index: Data[group].indexOf(href),
			href: href,
			group: group,
			caption: caption
		};
	}

	function reprepFigure() {
		$(".fs-lightbox-figure").addClass("loading");
	}

	function showLightbox() {
		Creator = setTimeout(function() {
			$(".fs-lightbox").removeClass("hidden");
		}, 150);
	}

	function hideLightbox() {
		$(".fs-lightbox").addClass("hidden");
	}

	function destroyLightboxObject(callback) {
		Destroyer = setTimeout(function() {
			$(".fs-lightbox-figure > *").remove();

			if (callback == "previous") {
				loadPreviousItem();
			} else if (callback == "next") {
				loadNextItem();
			}
		}, 150);
	}

	function loadPreviousItem() {
		var dataGroup = Data[CurrentDataItem.group];

		if (CurrentDataItem.index > 0) {
			loadItem($('[href="' + dataGroup[CurrentDataItem.index - 1] + '"]'));
		} else {
			loadItem($('[href="' + dataGroup[dataGroup.length - 1] + '"]'));
		}
	}

	function loadNextItem() {
		var dataGroup = Data[CurrentDataItem.group];

		if (CurrentDataItem.index < dataGroup.length - 1) {
			loadItem($('[href="' + dataGroup[CurrentDataItem.index + 1] + '"]'));
		} else {
			loadItem($('[href="' + dataGroup[0] + '"]'));
		}
	}

	function restrictBody() {
		$("body").addClass("fs-gallery-lock");
	}

	function reopenBody() {
		$("body").removeClass("fs-gallery-lock");
	}

	function onCloseKeydown(e) {
		if(e.keyCode === 9) { // tab
			if(!(e.shiftKey)) {
				$(".fs-lightbox").focus();
			}
		}
	}
	
	function onMenuKeydown(e) {
		if ($(".fs-lightbox").is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
					e.preventDefault();
					$(".fs-lightbox-close").focus();
				}
			}
		}
	}

	function onMenuKeyup(e) {
		if (e.keyCode === 27) { // escape
			$(".fs-lightbox-close").trigger("click");
			$CurrentItem.focus();
		}
	}
    
    init();

	return {
		init: init
	};

})(jQuery, Site);
/*-------------------------------------------
	Major Title
-------------------------------------------*/

Site.modules.MajorTitle = (function($, Site) {

	var $component,
	$background,
	$divider,
	$componentBelow;

	function init() {
		if ($(".page_layout_home .major_title").length) {
			$component = $(".major_title");
			$background = $(".major_title_background");
			$divider = $(".major_title_divider");
			$componentBelow = $(".js-sticky-feature-background-color").first();

			fadeItems();
			bindUI();
		}
	}

	function bindUI() {
		Site.onScroll.push(fadeItems);
	}

	function fadeItems() {
		var dims = $component[0].getBoundingClientRect();

		$componentBelow.addClass("color");

		if ((dims.top * -2) < dims.height) {
			$background.css("opacity", (dims.top * -2) / dims.height);
			$componentBelow.css("opacity", (dims.top * -2) / dims.height);
			$divider.css("opacity", (dims.height - (dims.top * -1)) / dims.height);
		} else {
			$background.css("opacity", 1);
			$componentBelow.css("opacity", 1);
			$divider.css("opacity", 0);
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Menu
-------------------------------------------*/

Site.modules.MenuCampaign = (function($, Site) {

	var $MenuCampaign,
	$MenuCampaignHandle,
	$ShiftingElements;

	function init() {
		$MenuCampaign = $(".js-menu-campaign");

		if ($MenuCampaign.length) {
			$MenuCampaignHandle = $(".js-menu-handle");
			$ShiftingElements = $(".header, .page, .footer");

			$MenuCampaign
				.attr("aria-hidden", true)
				.find(".js-nav-link, button, input").attr("tabindex", "-1");

			$(".menu_callout_bottom_link").on("keydown", onCloseKeydown);

			$MenuCampaignHandle.on("keydown", onTrap);

			createSiteButtons($(".js-menu-handle"));
			bindUI();
		}
	}

	function createSiteButtons($element) {
		$element.each(function() {
			$element.attr({
				"aria-expanded": false,
				"role": "button"
			});
		});
	}

	function bindUI() {
		$MenuCampaignHandle
			.on("click", onClickMenuCampaign);
		$MenuCampaign
			.on("keydown", onMenuCampaignKeydown)
			.on("keyup", onMenuCampaignKeyup);
	}

	function onClickMenuCampaign() {
		if ($("body").hasClass("fs-page-lock")) {
			onMenuSwapDeactivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
			} else {
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			}
		} else {
			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
			} else {
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}

		if ($MenuCampaignHandle.hasClass("fs-swap-active")) {
			onMenuSwapActivate();

			if ($(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("Close");
				$(".for_you_handle_icon").html(Site.icon("close"));
				$(".menu_handle_label").text("Menu");
				$(".menu_handle_icon").html(Site.icon("menu"));
			} else if (!$(this).hasClass("for_you_handle")) {
				$(".for_you_handle_label").text("For You");
				$(".for_you_handle_icon").html(Site.icon("person"));
				$(".menu_handle_label").text("Close");
				$(".menu_handle_icon").html(Site.icon("close"));
			}
		}
	}

	function onMenuSwapActivate() {
		Site.$body.addClass("fs-page-lock");
		Site.modules.Page.saveScrollYPosition();
		$MenuCampaignHandle.attr("aria-expanded", true);
		$MenuCampaign.attr({
			"aria-hidden": false,
			"tabindex": "0"
		}).focus()
		.find(".js-nav-link, button, input").removeAttr("tabindex");

		$ShiftingElements.css("padding-right", Site.modules.Page.getScrollbarWidth());
		$MenuCampaign.css("margin-right", "");
		$MenuCampaign.css("width", "");
	}

	function onMenuSwapDeactivate() {
		Site.$body.removeClass("fs-page-lock");
		Site.modules.Page.restoreScrollYPosition();
		$MenuCampaign
			.attr("aria-hidden", true)
			.removeAttr("tabindex")
			.find(".js-nav-link, button, input").attr("tabindex", "-1");
		$(".menu_handle").attr("aria-expanded", false).focus();

		$ShiftingElements.css("padding-right", "");
		$MenuCampaign.css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
		$MenuCampaign.css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");
	}

	function onCloseKeydown(e) {
		if (e.keyCode === 9) { // tab
			if (!(e.shiftKey)) {
				e.preventDefault();
				$MenuCampaignHandle.focus();
			}
		}
	}

	function onMenuCampaignKeydown(e) {
		if ($MenuCampaign.is(":focus")) {
			if (e.keyCode === 9) { // tab
				if (e.shiftKey) {
					e.preventDefault();
					$MenuCampaignHandle.focus();
				}
			}
		}
	}

	function onMenuCampaignKeyup(e) {
		if (e.keyCode === 27) { // escape
			$MenuCampaignHandle.swap("deactivate");
			onMenuSwapDeactivate();
			$(".menu_handle_label").text("Menu");
			$(".menu_handle_icon").html(Site.icon("menu"));
		}
	}

	function onTrap(e) {
		if ($MenuCampaign.hasClass("fs-swap-active")) {
			if (e.keyCode === 9) { // tab
				if (!(e.shiftKey)) {
					e.preventDefault();
					$MenuCampaign.focus();
				}
			}
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Pagination
-------------------------------------------*/

Site.modules.Pagination = (function($, Site) {

	function init() {
		var $pagination = $(".js-pagination");

		if ($pagination.length) {
			var $select = $pagination.find(".js-pagination-select");
			var pageNumber = Math.abs(getURLParameter("page"));
			var pageTotal = $select.find("option").length;
			var $buttonPrevious = $pagination.find(".js-pagination-previous");
			var $buttonNext = $pagination.find(".js-pagination-next");
			var $form = $pagination.find(".js-pagination-form");

			if(pageNumber) {
				$select.val(pageNumber);
				$buttonPrevious.attr("href", "?page=" + (pageNumber - 1));
				$buttonNext.attr("href", "?page=" + (pageNumber + 1));
			} else {
				$buttonNext.attr("href", "?page=2");
				$buttonPrevious.addClass("pagination_arrow_disabled");
			}

			if (pageNumber == 1) {
				$buttonPrevious.addClass("pagination_arrow_disabled").attr("href", "#");
			} else if (pageNumber == pageTotal) {
				$buttonNext.addClass("pagination_arrow_disabled").attr("href", "#");
			}
		}
	}

	function getURLParameter(param) {
		var searchString = window.location.search.substring(1);
		var URLVariables = searchString.split("&");

		for (var i = 0; i < URLVariables.length; i++) {
			var parameterName = URLVariables[i].split("=");

			if (parameterName[0] == param) {
				return parameterName[1];
			}
		}
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Profiles
-------------------------------------------*/

Site.modules.Profiles = (function($, Site) {

	var $items;

	function init() {
		if ($(".profiles").length) {
			resizeContainer();
			resizeItems();
			bindUI();
		}
	}

	function bindUI() {
		Site.onResize.push(resizeContainer);
		Site.onResize.push(resizeItems);
	}

	function resizeContainer() {
		$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
			enter: function() {
				$(".profile").css("height", $(".profiles_body").innerWidth() * 0.5625);
			},
			leave: function() {
				$(".profile").css("height", "");
			}
		});
	}

	function resizeItems() {
		$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
			enter: function() {
				$(".profile_body").each(function() {
					$(this).css("max-height", "");
				});
			},
			leave: function() {
				$(".profile_body").each(function() {
					$(this).css("max-height", $(this).find(".profile_content").innerHeight());
				});
			}
		});
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Program Finder
-------------------------------------------*/

/* global jQuery Site */

Site.modules.ProgramFinder = (function ($, Site) {
	var $programFinder,
		$programFinderCount,
		$programFinderCountLabel,
		programFinderCountLabelText = 'match your selection',
		$programFinderSubmit,
		$programFinderReset,
		$programSubmit,
		$programs;

	function init() {
		$programFinder = $('.js-program-filter');

		if ($programFinder.length) {
			bindUI();
		}
	}

	function bindUI() {
		$programFinderCount = $programFinder.find('.js-filter-count');
		$programFinderCountLabel = $programFinder.find('.js-filter-count-label');
		$programFinderSubmit = $programFinder.find('.js-filter-submit');
		$programFinderReset = $programFinder.find('.js-filter-reset');
		$programs = $('.js-program');
		$programSubmit = $('.program_filter_submit_wrap');

		$programFinder.find('.js-filter-checkbox').click(countPrograms);
		$programFinderSubmit.click(searchPrograms);
		$programFinderReset.click(function () {
			$programFinder.find('.js-filter-checkbox').prop('checked', false);
			$programs.show();
			countPrograms();
		});
		countPrograms();
	}

	function getMatchedPrograms() {
		var $checkedBoxes = $programFinder.find('.js-filter-checkbox:checked');

		if (!$checkedBoxes.length) return $programs;

		var filter = getFilter($checkedBoxes);

		/**
		 * each column of the filter represents an "AND",
		 * but each row of a column represents an "OR"
		 *
		 * example:
		 * selecting Program Type: Undegraduate Major, Undergraduate Minor
		 * selectin Area of Study: Business
		 *
		 * will results in All Business Area of Study that are EITHER IN
		 * Undergraduate Major OR Undergraduate Minor
		 */
		var validPrograms = $programs.toArray().filter(function (node) {
			return Object.values(filter).every(function (filterConfig) {
				return filterConfig.some(function (configItem) {
					return node.classList.contains(configItem.className);
				});
			});
		});

		return validPrograms;
	}

	function countPrograms() {
		var $checkedBoxes = $programFinder.find('.js-filter-checkbox:checked');
		var count, programText;

		if ($checkedBoxes.length) {
			var matchedPrograms = getMatchedPrograms();
			count = matchedPrograms.length;
			$programSubmit.addClass('filter_active');
		} else {
			count = $programs.length;
		}

		programText = count === 1 ? 'program ' : 'programs ';
		$programFinderCount.text(count);
		$programFinderCountLabel.text(programText + programFinderCountLabelText);
	}

	function searchPrograms() {
		var elMatchedPrograms = getMatchedPrograms();

		$programs.hide();

		// console.log(elMatchedPrograms);

		Array.from(elMatchedPrograms).forEach(function (program) {
			var $program = $(program);

			$program.show();
		});

		Site.modules.Page.scrollToElement('#program_list');
	}

	function getFilter(filters) {
		return filters.toArray().reduce(function (carry, filter) {
			var name = filter.getAttribute('name');
			var value = filter.getAttribute('value');

			var config = {
				value: value,
				className: 'js-' + value
			};

			if (!(name in carry)) {
				carry[name] = [config];

				return carry;
			}

			carry[name].push(config);

			return carry;
		}, {});
	}

	return {
		init: init
	};
})(jQuery, Site);

/*-------------------------------------------
	Share Tools
-------------------------------------------*/

Site.modules.Share = (function($, Site) {

	var $Tools;
	var Url;
	var PageTitle;

	function init() {
		$Tools = $(".js-share-tools");

		if ($Tools.length) {
			Url = window.location.href;
			PageTitle = encodeURIComponent(Site.$doc.find("title").text());

			setup();
		}
	}

	function setup() {
		$(".js-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + Url);
		$(".js-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + PageTitle + "%20" + Url);
		$(".js-share-linkedin").attr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + Url + "&title=" + PageTitle);
		$(".js-share-google").attr("href", "https://plus.google.com/share?url=" + Url);
		$(".js-share-email").attr("href", "mailto:?&subject=" + PageTitle + "&body=" + Url);
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Stats
-------------------------------------------*/

Site.modules.Stats = (function($, Site) {

	var $ComponentWrap,
	$Component;

	function init() {
		var $ComponentWrap = $(".js-stats");

		if ($ComponentWrap.length) {
			$Component = $(".js-stat");

			onScrollTop();
		}
	}

	function onScrollTop() {
		Site.$window.scroll(function() {
			$Component.each(function() {
				if ($(this)[0].getBoundingClientRect().top < 0) {
					$(this).addClass("active-stat");
				} else {
					$(this).removeClass("active-stat");
				}
			});
		});
	}

	return {
		init: init
	};

})(jQuery, Site);

/*-------------------------------------------
	Video Appender
-------------------------------------------*/

Site.modules.VideoAppender = (function($, Site) {

	var $Video;
	var YoutubeRegExp;
	var VimeoRegExp;

	function init() {
		if ($(".js-video-appender").length) {
			$Video = $(".js-video-appender");
			YoutubeRegExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
			VimeoRegExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;

			bindUI();
		}
	}

	function bindUI() {
		$Video.on("click", function(e) {
			e.preventDefault();
			insertVideo($(this));
		});

		$Video.each(function() {
			$(this).closest(".js-carousel").on("update.carousel", removeActiveVideo);
		});
	}

	function bindNewUI() {
		$(".video_item_iframe").on("load", confirmLoad);
		$(".js-video-close").on("click", removeVideo);
	}

	function insertVideo(item) {
		var href = $(item).attr("href");
		var content = "<div class='video_item_iframe_wrapper'>";
		var id;

		if (href.indexOf("youtu") > -1) {
			id = href.match(YoutubeRegExp)[1];

			content += "<iframe class='video_item_iframe js-video-item-iframe js-video-item-youtube' src='https://www.youtube.com/embed/" + id + "?rel=0&showinfo=0&autoplay=1&playsinline=1&enablejsapi=1&origin=" + encodeURIComponent(window.location.protocol + "//" + window.location.hostname) + "' frameborder='0' allow='autoplay; fullscreen; encrypted-media' allowfullscreen></iframe>";
		} else if (href.indexOf("vimeo") > -1) {
			id = href.match(VimeoRegExp)[5];

			content += "<iframe class='video_item_iframe js-video-item-iframe js-video-item-vimeo' src='https://player.vimeo.com/video/" + id + "?api=1&autoplay=1&title=0&byline=0&portrait=0' style='position:absolute;top:0;left:0;width:100%;height:100%;' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow='autoplay; fullscreen; encrypted-media'></iframe><script src='https://player.vimeo.com/api/player.js'></script>";
		}

		content +=
			"<button class='js-video-close video_item_close'>" + Site.icon("close") +  "</button>" +
		"</div>";

		$(item).after(content)
			.attr("tabindex", "-1")
			.siblings(".js-video-item-iframe").focus();

		bindNewUI();
	}

	function confirmLoad() {
		$(this).parent().addClass("loaded-media");
		$(this).parent().prev().addClass("playing");
	}

	function removeVideo() {
		var $video = $(this);

		$video.parent().removeClass("loaded-media");
		$video.parent().prev().removeClass("playing");

		setTimeout(function() {
			$video.parent().remove();
		}, 350);
	}

	function removeActiveVideo() {
		var $video = $(this).find(".loaded-media");

		$video.removeClass("loaded-media");
		$video.prev().addClass("playing");

		setTimeout(function() {
			$video.remove();
		}, 350);
	}

	function playVideos() {
		$(".js-video-item-youtube").each(function() {
			$(this)[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args": ""}', '*');
		});

		$(".js-video-item-vimeo").each(function() {
			$(this)[0].contentWindow.postMessage({
				"method": "play"
			}, $(this)[0].src);
		});
	}

	function pauseVideos() {
		$(".js-video-item-youtube").each(function() {
			$(this)[0].contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
		});

		$(".js-video-item-vimeo").each(function() {
			$(this)[0].contentWindow.postMessage({
				"method": "pause"
			}, $(this)[0].src);
		});
	}

	return {
		init: init,
		pauseVideos: pauseVideos
	};

})(jQuery, Site);

// import { getVideoAPIByType } from '@/modules/api/video';
// import { appendScriptToBody } from '@/helpers/utils';
// import { nodeConfig } from '@/mixins';

var NAMESPACE = 'video-lazy-load';
var DEFAULT_SELECTOR = '.js-video-lazy-load';
var DEFAULT_SETTINGS = {
	//
};

Site.modules.VideoLazyLoad = (function ($, Site) {
	function VideoLazyLoad(node, config) {
		this.node = node;
		this.$node = $(node);
		this.config = config;

		this.api = null;
		this.scriptLoaded = false;

		this.loadedPromise = null;

		this.$iframe = this.$node.find('.js-iframe-target').first();
		this.$playBtn = this.$node.find('.js-play-btn').first();
		this.$pauseBtn = this.$node.find('.js-pause-btn').first();

		this.classActive = 'is_active';
	}

	VideoLazyLoad.prototype = {
		setApi: function (api) {
			this.api = api;
		},

		play: function () {
			this.api.play();
		},

		pause: function () {
			this.api.pause();
		},

		muteAndPlay: function () {
			this.node.classList.toggle('ready', true);

			this.api.setVolumeByPercentage(0);
			this.play();
		},

		playWithAudio: function (volumePercentage) {
			volumePercentage = volumePercentage || 25;

			this.node.classList.toggle('ready', true);

			this.setVolumeByPercentage(volumePercentage);
			this.play();
		},

		setVolumeByPercentage: function (num) {
			this.api.setVolumeByPercentage(num);
		},

		loadPlayer: function () {
			if (this.loadedPromise) return this.loadedPromise;

			var self = this;

			if (!this.scriptLoaded) return Promise.reject("Script hasn't loaded");

			var config = Object.assign({}, this.config, {
				iframe: this.$iframe[0]
			});

			this.loadedPromise = new Promise(function (resolve, reject) {
				self.api.loadPlayer(config).then(resolve).catch(reject);
			});

			return this.loadedPromise;
		},

		onScriptLoaded: function () {
			this.scriptLoaded = true;
		},

		onIntersecting: function () {
			if (this.config.autoplay) {
				return appendScriptToBody(this.api.scriptUrl)
					.then(this.onScriptLoaded.bind(this))
					.then(this.loadPlayer.bind(this))
					.then(this.muteAndPlay.bind(this))
					.then(this.updateAccessibilityAttrs.bind(this, true));
			}

			if (this.api.scriptUrl) {
				return appendScriptToBody(this.api.scriptUrl).then(this.onScriptLoaded.bind(this));
			}

			this.onScriptLoaded();

			return Promise.resolve();
		},

		updateAccessibilityAttrs: function (isPlaying) {
			this.$playBtn.attr('inert', isPlaying ? true : null);
			this.$playBtn.attr('aria-pressed', isPlaying);
			this.$playBtn.toggleClass(this.classActive, !isPlaying);

			this.$pauseBtn.attr('inert', isPlaying ? null : true);
			this.$pauseBtn.attr('aria-pressed', !isPlaying);
			this.$pauseBtn.toggleClass(this.classActive, isPlaying);
		},

		onPlayBtnClick: function (event) {
			event.preventDefault();

			return this.loadPlayer()
				.then(this.playWithAudio.bind(this))
				.then(this.updateAccessibilityAttrs.bind(this, true));
		},

		onPauseBtnClick: function (event) {
			event.preventDefault();

			return this.loadPlayer()
				.then(this.api.pause.bind(this.api))
				.then(this.updateAccessibilityAttrs.bind(this, false));
		},

		bindUI: function () {
			var self = this;
			var observer = new window.IntersectionObserver(
				function (entries) {
					var entry = entries[0];

					if (!entry.isIntersecting) return;

					self.onIntersecting();

					observer.unobserve(entry.target);
				},
				{
					rootMargin: '200px'
				}
			);

			observer.observe(this.node);

			this.$playBtn.on('click', this.onPlayBtnClick.bind(this));
			this.$pauseBtn.on('click', this.onPauseBtnClick.bind(this));
		},

		setup: function () {
			this.$playBtn.attr('role', 'button');
		},

		init: function () {
			if (!this.api) throw Error('An API must be provided');

			this.setup();
			this.bindUI();
		}
	};

	return {
		init: function (selector, settings) {
			selector = selector || DEFAULT_SELECTOR;
			settings = settings || {};

			var listNode = document.querySelectorAll(selector);

			if (!listNode.length) return;

			return Array.from(listNode).map(function (node) {
				var config = MixinNodeConfig(node, NAMESPACE, settings, DEFAULT_SETTINGS);

				if (!config.id || !config.type) return;

				var apiCtr = getVideoAPIByType(config.type.toLowerCase());

				if (!apiCtr) return;

				var module = new VideoLazyLoad(node, config);

				module.setApi(new apiCtr());

				module.init();

				return module;
			});
		}
	};
})(jQuery, Site);

//# sourceMappingURL=site.js.map
