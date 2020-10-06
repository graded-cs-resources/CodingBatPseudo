(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function u(a,d,b){var e=a.getLineHandle(d.line),c=d.ch-1,g=b&&b.afterCursor;null==g&&(g=/(^| )cm-fat-cursor($| )/.test(a.getWrapperElement().className));var h=b&&b.bracketRegex||/[(){}[\]]/;e=!g&&0<=c&&h.test(e.text.charAt(c))&&t[e.text.charAt(c)]||h.test(e.text.charAt(c+1))&&t[e.text.charAt(++c)];
if(!e)return null;g=">"==e.charAt(1)?1:-1;if(b&&b.strict&&0<g!=(c==d.ch))return null;h=a.getTokenTypeAt(n(d.line,c+1));a=v(a,n(d.line,c+(0<g?1:0)),g,h||null,b);return null==a?null:{from:n(d.line,c),to:a&&a.pos,match:a&&a.ch==e.charAt(0),forward:0<g}}function v(a,d,b,e,c){var g=c&&c.maxScanLineLength||1E4,h=c&&c.maxScanLines||1E3,f=[];c=c&&c.bracketRegex||/[(){}[\]]/;h=0<b?Math.min(d.line+h,a.lastLine()+1):Math.max(a.firstLine()-1,d.line-h);for(var l=d.line;l!=h;l+=b){var m=a.getLine(l);if(m){var p=
0<b?0:m.length-1,y=0<b?m.length:-1;if(!(m.length>g))for(l==d.line&&(p=d.ch-(0>b?1:0));p!=y;p+=b){var q=m.charAt(p);if(c.test(q)&&(void 0===e||a.getTokenTypeAt(n(l,p+1))==e)){var w=t[q];if(w&&">"==w.charAt(1)==0<b)f.push(q);else if(f.length)f.pop();else return{pos:n(l,p),ch:q}}}}}return l-b==(0<b?a.lastLine():a.firstLine())?!1:null}function x(a,d,b){for(var e=a.state.matchBrackets.maxHighlightLineLength||1E3,c=[],g=a.listSelections(),h=0;h<g.length;h++){var f=g[h].empty()&&u(a,g[h].head,b);if(f&&a.getLine(f.from.line).length<=
e){var l=f.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";c.push(a.markText(f.from,n(f.from.line,f.from.ch+1),{className:l}));f.to&&a.getLine(f.to.line).length<=e&&c.push(a.markText(f.to,n(f.to.line,f.to.ch+1),{className:l}))}}if(c.length)if(z&&a.state.focused&&a.focus(),b=function(){a.operation(function(){for(var m=0;m<c.length;m++)c[m].clear()})},d)setTimeout(b,800);else return b}function r(a){a.operation(function(){a.state.matchBrackets.currentlyHighlighted&&(a.state.matchBrackets.currentlyHighlighted(),
a.state.matchBrackets.currentlyHighlighted=null);a.state.matchBrackets.currentlyHighlighted=x(a,!1,a.state.matchBrackets)})}var z=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),n=k.Pos,t={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};k.defineOption("matchBrackets",!1,function(a,d,b){function e(c){c.state.matchBrackets&&c.state.matchBrackets.currentlyHighlighted&&(c.state.matchBrackets.currentlyHighlighted(),c.state.matchBrackets.currentlyHighlighted=
null)}b&&b!=k.Init&&(a.off("cursorActivity",r),a.off("focus",r),a.off("blur",e),e(a));d&&(a.state.matchBrackets="object"==typeof d?d:{},a.on("cursorActivity",r),a.on("focus",r),a.on("blur",e))});k.defineExtension("matchBrackets",function(){x(this,!0)});k.defineExtension("findMatchingBracket",function(a,d,b){if(b||"boolean"==typeof d)b?(b.strict=d,d=b):d=d?{strict:!0}:null;return u(this,a,d)});k.defineExtension("scanForBracket",function(a,d,b,e){return v(this,a,d,b,e)})});

},{"../../lib/codemirror":2}],2:[function(require,module,exports){
(function (global){
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(y,E,D){y instanceof String&&(y=String(y));for(var v=y.length,K=0;K<v;K++){var ka=y[K];if(E.call(D,ka,K,y))return{i:K,v:ka}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.ENABLE_UNHANDLED_REJECTION_POLYFILL=!0;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(y,E,D){if(y==Array.prototype||y==Object.prototype)return y;y[E]=D.value;return y};$jscomp.getGlobal=function(y){y=["object"==typeof globalThis&&globalThis,y,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var E=0;E<y.length;++E){var D=y[E];if(D&&D.Math==Math)return D}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(y,E){var D=$jscomp.propertyToPolyfillSymbol[E];if(null==D)return y[E];D=y[D];return void 0!==D?D:y[E]};
$jscomp.polyfill=function(y,E,D,v){E&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(y,E,D,v):$jscomp.polyfillUnisolated(y,E,D,v))};$jscomp.polyfillUnisolated=function(y,E,D,v){D=$jscomp.global;y=y.split(".");for(v=0;v<y.length-1;v++){var K=y[v];if(!(K in D))return;D=D[K]}y=y[y.length-1];v=D[y];E=E(v);E!=v&&null!=E&&$jscomp.defineProperty(D,y,{configurable:!0,writable:!0,value:E})};
$jscomp.polyfillIsolated=function(y,E,D,v){var K=y.split(".");y=1===K.length;v=K[0];v=!y&&v in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var ka=0;ka<K.length-1;ka++){var va=K[ka];if(!(va in v))return;v=v[va]}K=K[K.length-1];D=$jscomp.IS_SYMBOL_NATIVE&&"es6"===D?v[K]:null;E=E(D);null!=E&&(y?$jscomp.defineProperty($jscomp.polyfills,K,{configurable:!0,writable:!0,value:E}):E!==D&&($jscomp.propertyToPolyfillSymbol[K]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(K):$jscomp.POLYFILL_PREFIX+
K,K=$jscomp.propertyToPolyfillSymbol[K],$jscomp.defineProperty(v,K,{configurable:!0,writable:!0,value:E})))};$jscomp.polyfill("Array.prototype.find",function(y){return y?y:function(E,D){return $jscomp.findInternal(this,E,D).v}},"es6","es3");
(function(y,E){"object"===typeof exports&&"undefined"!==typeof module?module.exports=E():"function"===typeof define&&define.amd?define(E):(y=y||self,y.CodeMirror=E())})(this,function(){function y(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function E(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function D(a,b){return E(a).appendChild(b)}function v(a,b,d,c){a=document.createElement(a);d&&(a.className=d);c&&(a.style.cssText=c);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(d=0;d<b.length;++d)a.appendChild(b[d]);return a}function K(a,b,d,c){a=v(a,b,d,c);a.setAttribute("role","presentation");return a}function ka(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function va(){try{var a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Wa(a,b){var d=a.className;y(b).test(d)||
(a.className+=(d?" ":"")+b)}function cd(a,b){a=a.split(" ");for(var d=0;d<a.length;d++)a[d]&&!y(a[d]).test(b)&&(b+=" "+a[d]);return b}function dd(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Xa(a,b,d){b||(b={});for(var c in a)!a.hasOwnProperty(c)||!1===d&&b.hasOwnProperty(c)||(b[c]=a[c]);return b}function wa(a,b,d,c,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));c=c||0;for(e=e||0;;){var f=a.indexOf("\t",c);if(0>f||f>=b)return e+(b-
c);e+=f-c;e+=d-e%d;c=f+1}}function ea(a,b){for(var d=0;d<a.length;++d)if(a[d]==b)return d;return-1}function ed(a,b,d){for(var c=0,e=0;;){var f=a.indexOf("\t",c);-1==f&&(f=a.length);var g=f-c;if(f==a.length||e+g>=b)return c+Math.min(g,b-e);e+=f-c;e+=d-e%d;c=f+1;if(e>=b)return c}}function fd(a){for(;uc.length<=a;)uc.push(L(uc)+" ");return uc[a]}function L(a){return a[a.length-1]}function vc(a,b){for(var d=[],c=0;c<a.length;c++)d[c]=b(a[c],c);return d}function wg(a,b,d){for(var c=0,e=d(b);c<a.length&&
d(a[c])<=e;)c++;a.splice(c,0,b)}function me(){}function ne(a,b){Object.create?a=Object.create(a):(me.prototype=a,a=new me);b&&Xa(b,a);return a}function gd(a){return/\w/.test(a)||"\u0080"<a&&(a.toUpperCase()!=a.toLowerCase()||xg.test(a))}function wc(a,b){return b?-1<b.source.indexOf("\\w")&&gd(a)?!0:b.test(a):gd(a)}function oe(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function hd(a){return 768<=a.charCodeAt(0)&&yg.test(a)}function pe(a,b,d){for(;(0>d?0<b:b<a.length)&&hd(a.charAt(b));)b+=
d;return b}function Hb(a,b,d){for(var c=b>d?-1:1;;){if(b==d)return b;var e=(b+d)/2;e=0>c?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:d;a(e)?d=e:b=e+c}}function zg(a,b,d,c){if(!a)return c(b,d,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<d&&g.to>b||b==d&&g.to==b)c(Math.max(g.from,b),Math.min(g.to,d),1==g.level?"rtl":"ltr",f),e=!0}e||c(b,d,"ltr")}function Ib(a,b,d){var c;Jb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=f.to&&"before"==
d?c=e:Jb=e);f.from==b&&(f.from!=f.to&&"before"!=d?c=e:Jb=e)}return null!=c?c:Jb}function Ja(a,b){var d=a.order;null==d&&(d=a.order=Ag(a.text,b));return d}function ra(a,b,d){if(a.removeEventListener)a.removeEventListener(b,d,!1);else if(a.detachEvent)a.detachEvent("on"+b,d);else{var c=(a=a._handlers)&&a[b];c&&(d=ea(c,d),-1<d&&(a[b]=c.slice(0,d).concat(c.slice(d+1))))}}function X(a,b){var d=a._handlers&&a._handlers[b]||xc;if(d.length)for(var c=Array.prototype.slice.call(arguments,2),e=0;e<d.length;++e)d[e].apply(null,
c)}function Z(a,b,d){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}});X(a,d||b.type,a,b);return id(b)||b.codemirrorIgnore}function qe(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var d=0;d<b.length;++d)-1==ea(a,b[d])&&a.push(b[d])}}function xa(a,b){return 0<(a._handlers&&a._handlers[b]||xc).length}function nb(a){a.prototype.on=function(b,d){z(this,b,d)};a.prototype.off=function(b,
d){ra(this,b,d)}}function la(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function re(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function id(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Kb(a){la(a);re(a)}function se(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ya&&a.ctrlKey&&1==b&&(b=3);return b}function Bg(a){if(null==jd){var b=v("span","\u200b");D(a,v("span",[b,document.createTextNode("x")]));0!=a.firstChild.offsetHeight&&
(jd=1>=b.offsetWidth&&2<b.offsetHeight&&!(G&&8>U))}a=jd?v("span","\u200b"):v("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px");a.setAttribute("cm-text","");return a}function Cg(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));kd[a]=b}function yc(a){if("string"==typeof a&&ob.hasOwnProperty(a))a=ob[a];else if(a&&"string"==typeof a.name&&ob.hasOwnProperty(a.name)){var b=ob[a.name];"string"==typeof b&&(b={name:b});a=ne(b,a);a.name=b.name}else{if("string"==
typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return yc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return yc("application/json")}return"string"==typeof a?{name:a}:a||{name:"null"}}function ld(a,b){b=yc(b);var d=kd[b.name];if(!d)return ld(a,"text/plain");a=d(a,b);if(pb.hasOwnProperty(b.name)){d=pb[b.name];for(var c in d)d.hasOwnProperty(c)&&(a.hasOwnProperty(c)&&(a["_"+c]=a[c]),a[c]=d[c])}a.name=b.name;b.helperType&&(a.helperType=b.helperType);if(b.modeProps)for(var e in b.modeProps)a[e]=
b.modeProps[e];return a}function Dg(a,b){a=pb.hasOwnProperty(a)?pb[a]:pb[a]={};Xa(b,a)}function Ya(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);a={};for(var d in b){var c=b[d];c instanceof Array&&(c=c.concat([]));a[d]=c}return a}function md(a,b){for(var d;a.innerMode;){d=a.innerMode(b);if(!d||d.mode==a)break;b=d.state;a=d.mode}return d||{mode:a,state:b}}function te(a,b,d){return a.startState?a.startState(b,d):!0}function w(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+
(b+a.first)+" in the document.");for(;!a.lines;)for(var d=0;;++d){var c=a.children[d],e=c.chunkSize();if(b<e){a=c;break}b-=e}return a.lines[b]}function Za(a,b,d){var c=[],e=b.line;a.iter(b.line,d.line+1,function(f){f=f.text;e==d.line&&(f=f.slice(0,d.ch));e==b.line&&(f=f.slice(b.ch));c.push(f);++e});return c}function nd(a,b,d){var c=[];a.iter(b,d,function(e){c.push(e.text)});return c}function Da(a,b){if(b-=a.height)for(;a;a=a.parent)a.height+=b}function O(a){if(null==a.parent)return null;var b=a.parent;
a=ea(b.lines,a);for(var d=b.parent;d;b=d,d=d.parent)for(var c=0;d.children[c]!=b;++c)a+=d.children[c].chunkSize();return a+b.first}function $a(a,b){var d=a.first;a:do{for(var c=0;c<a.children.length;++c){var e=a.children[c],f=e.height;if(b<f){a=e;continue a}b-=f;d+=e.chunkSize()}return d}while(!a.lines);for(c=0;c<a.lines.length;++c){e=a.lines[c].height;if(b<e)break;b-=e}return d+c}function Lb(a,b){return b>=a.first&&b<a.first+a.size}function od(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}
function t(a,b,d){void 0===d&&(d=null);if(!(this instanceof t))return new t(a,b,d);this.line=a;this.ch=b;this.sticky=d}function B(a,b){return a.line-b.line||a.ch-b.ch}function pd(a,b){return a.sticky==b.sticky&&0==B(a,b)}function qd(a){return t(a.line,a.ch)}function zc(a,b){return 0>B(a,b)?b:a}function Ac(a,b){return 0>B(a,b)?a:b}function C(a,b){if(b.line<a.first)return t(a.first,0);var d=a.first+a.size-1;if(b.line>d)return t(d,w(a,d).text.length);a=w(a,b.line).text.length;d=b.ch;b=null==d||d>a?t(b.line,
a):0>d?t(b.line,0):b;return b}function ue(a,b){for(var d=[],c=0;c<b.length;c++)d[c]=C(a,b[c]);return d}function ve(a,b,d,c){var e=[a.state.modeGen],f={};we(a,b.text,a.doc.mode,d,function(k,l){return e.push(k,l)},f,c);var g=d.state;c=function(k){d.baseTokens=e;var l=a.state.overlays[k],m=1,q=0;d.state=!0;we(a,b.text,l.mode,d,function(n,p){for(var r=m;q<n;){var u=e[m];u>n&&e.splice(m,1,n,e[m+1],u);m+=2;q=Math.min(n,u)}if(p)if(l.opaque)e.splice(r,m-r,n,"overlay "+p),m=r+2;else for(;r<m;r+=2)n=e[r+1],
e[r+1]=(n?n+" ":"")+"overlay "+p},f);d.state=g;d.baseTokens=null;d.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)c(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function xe(a,b,d){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=Mb(a,O(b)),e=b.text.length>a.options.maxHighlightLength&&Ya(a.doc.mode,c.state),f=ve(a,b,c);e&&(c.state=e);b.stateAfter=c.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);d===a.doc.highlightFrontier&&
(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function Mb(a,b,d){var c=a.doc,e=a.display;if(!c.mode.startState)return new Ea(c,!0,b);var f=Eg(a,b,d),g=f>c.first&&w(c,f-1).stateAfter,h=g?Ea.fromSaved(c,g,f):new Ea(c,te(c.mode),f);c.iter(f,b,function(k){rd(a,k.text,h);var l=h.line;k.stateAfter=l==b-1||0==l%5||l>=e.viewFrom&&l<e.viewTo?h.save():null;h.nextLine()});d&&(c.modeFrontier=h.line);return h}function rd(a,b,d,c){var e=a.doc.mode;a=new Y(b,a.options.tabSize,
d);a.start=a.pos=c||0;for(""==b&&ye(e,d.state);!a.eol();)sd(e,a,d.state),a.start=a.pos}function ye(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode&&(a=md(a,b),a.mode.blankLine))return a.mode.blankLine(a.state)}function sd(a,b,d,c){for(var e=0;10>e;e++){c&&(c[0]=md(a,d).mode);var f=a.token(b,d);if(b.pos>b.start)return f}throw Error("Mode "+a.name+" failed to advance stream.");}function ze(a,b,d,c){var e=a.doc,f=e.mode;b=C(e,b);var g=w(e,b.line);d=Mb(a,b.line,d);a=new Y(g.text,a.options.tabSize,
d);var h;for(c&&(h=[]);(c||a.pos<b.ch)&&!a.eol();){a.start=a.pos;var k=sd(f,a,d.state);c&&h.push(new Ae(a,k,Ya(e.mode,d.state)))}return c?h:new Ae(a,k,d.state)}function Be(a,b){if(a)for(;;){var d=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!d)break;a=a.slice(0,d.index)+a.slice(d.index+d[0].length);var c=d[1]?"bgClass":"textClass";null==b[c]?b[c]=d[2]:(new RegExp("(?:^|\\s)"+d[2]+"(?:$|\\s)")).test(b[c])||(b[c]+=" "+d[2])}return a}function we(a,b,d,c,e,f,g){var h=d.flattenSpans;null==h&&(h=a.options.flattenSpans);
var k=0,l=null,m=new Y(b,a.options.tabSize,c),q=a.options.addModeClass&&[null];for(""==b&&Be(ye(d,c.state),f);!m.eol();){if(m.pos>a.options.maxHighlightLength){h=!1;g&&rd(a,b,c,m.pos);m.pos=b.length;var n=null}else n=Be(sd(d,m,c.state,q),f);if(q){var p=q[0].name;p&&(n="m-"+(n?p+" "+n:p))}if(!h||l!=n){for(;k<m.start;)k=Math.min(m.start,k+5E3),e(k,l);l=n}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function Eg(a,b,d){for(var c,e,f=a.doc,g=d?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=
f.first)return f.first;var h=w(f,b-1),k=h.stateAfter;if(k&&(!d||b+(k instanceof Bc?k.lookAhead:0)<=f.modeFrontier))return b;h=wa(h.text,null,a.options.tabSize);if(null==e||c>h)e=b-1,c=h}return e}function Fg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<b-10)){for(var d=a.first,c=b-1;c>d;c--){var e=w(a,c).stateAfter;if(e&&(!(e instanceof Bc)||c+e.lookAhead<b)){d=c+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,d)}}function Cc(a,b,d){this.marker=a;this.from=b;this.to=
d}function Nb(a,b){if(a)for(var d=0;d<a.length;++d){var c=a[d];if(c.marker==b)return c}}function td(a,b){if(b.full)return null;var d=Lb(a,b.from.line)&&w(a,b.from.line).markedSpans,c=Lb(a,b.to.line)&&w(a,b.to.line).markedSpans;if(!d&&!c)return null;a=b.from.ch;var e=b.to.ch,f=0==B(b.from,b.to),g;if(d)for(var h=0;h<d.length;++h){var k=d[h],l=k.marker;if(null==k.from||(l.inclusiveLeft?k.from<=a:k.from<a)||!(k.from!=a||"bookmark"!=l.type||f&&k.marker.insertLeft)){var m=null==k.to||(l.inclusiveRight?
k.to>=a:k.to>a);(g||(g=[])).push(new Cc(l,k.from,m?null:k.to))}}d=g;var q;if(c)for(g=0;g<c.length;++g)if(h=c[g],k=h.marker,null==h.to||(k.inclusiveRight?h.to>=e:h.to>e)||h.from==e&&"bookmark"==k.type&&(!f||h.marker.insertLeft))l=null==h.from||(k.inclusiveLeft?h.from<=e:h.from<e),(q||(q=[])).push(new Cc(k,l?null:h.from-e,null==h.to?null:h.to-e));c=1==b.text.length;e=L(b.text).length+(c?a:0);if(d)for(f=0;f<d.length;++f)if(g=d[f],null==g.to)(h=Nb(q,g.marker),h)?c&&(g.to=null==h.to?null:h.to+e):g.to=
a;if(q)for(a=0;a<q.length;++a)f=q[a],null!=f.to&&(f.to+=e),null==f.from?Nb(d,f.marker)||(f.from=e,c&&(d||(d=[])).push(f)):(f.from+=e,c&&(d||(d=[])).push(f));d&&(d=Ce(d));q&&q!=d&&(q=Ce(q));a=[d];if(!c){b=b.text.length-2;var n;if(0<b&&d)for(c=0;c<d.length;++c)null==d[c].to&&(n||(n=[])).push(new Cc(d[c].marker,null,null));for(d=0;d<b;++d)a.push(n);a.push(q)}return a}function Ce(a){for(var b=0;b<a.length;++b){var d=a[b];null!=d.from&&d.from==d.to&&!1!==d.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?
a:null}function Gg(a,b,d){var c=null;a.iter(b.line,d.line+1,function(m){if(m.markedSpans)for(var q=0;q<m.markedSpans.length;++q){var n=m.markedSpans[q].marker;!n.readOnly||c&&-1!=ea(c,n)||(c||(c=[])).push(n)}});if(!c)return null;a=[{from:b,to:d}];for(b=0;b<c.length;++b){d=c[b];for(var e=d.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>B(g.to,e.from)||0<B(g.from,e.to))){var h=[f,1],k=B(g.from,e.from),l=B(g.to,e.to);(0>k||!d.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!d.inclusiveRight&&
!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function De(a){var b=a.markedSpans;if(b){for(var d=0;d<b.length;++d)b[d].marker.detachLine(a);a.markedSpans=null}}function Ee(a,b){if(b){for(var d=0;d<b.length;++d)b[d].marker.attachLine(a);a.markedSpans=b}}function ud(a,b){var d=a.lines.length-b.lines.length;if(0!=d)return d;d=a.find();var c=b.find(),e=B(d.from,c.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(d=B(d.to,c.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?
1:0))?d:b.id-a.id}function qb(a,b){a=Ka&&a.markedSpans;if(a)for(var d,c=0;c<a.length;++c)if(d=a[c],d.marker.collapsed&&null==(b?d.from:d.to)&&(!e||0>ud(e,d.marker)))var e=d.marker;return e}function Fe(a,b,d,c,e){a=w(a,b);if(a=Ka&&a.markedSpans)for(b=0;b<a.length;++b){var f=a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=B(g.from,d)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=B(g.to,c)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&
e.inclusiveLeft?0<=B(g.to,d):0<B(g.to,d))||0<=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0>=B(g.from,c):0>B(g.from,c))))return!0}}}function Fa(a){for(var b;b=qb(a,!0);)a=b.find(-1,!0).line;return a}function vd(a,b){a=w(a,b);var d=Fa(a);return a==d?b:O(d)}function Ge(a,b){if(b>a.lastLine())return b;var d=w(a,b);if(!Oa(a,d))return b;for(;a=qb(d,!1);)d=a.find(1,!0).line;return O(d)+1}function Oa(a,b){var d=Ka&&b.markedSpans;if(d)for(var c,e=0;e<d.length;++e)if(c=d[e],c.marker.collapsed&&(null==c.from||
!c.marker.widgetNode&&0==c.from&&c.marker.inclusiveLeft&&wd(a,b,c)))return!0}function wd(a,b,d){if(null==d.to)return b=d.marker.find(1,!0),wd(a,b.line,Nb(b.line.markedSpans,d.marker));if(d.marker.inclusiveRight&&d.to==b.text.length)return!0;for(var c,e=0;e<b.markedSpans.length;++e)if(c=b.markedSpans[e],c.marker.collapsed&&!c.marker.widgetNode&&c.from==d.to&&(null==c.to||c.to!=d.from)&&(c.marker.inclusiveLeft||d.marker.inclusiveRight)&&wd(a,b,c))return!0}function Ga(a){a=Fa(a);for(var b=0,d=a.parent,
c=0;c<d.lines.length;++c){var e=d.lines[c];if(e==a)break;else b+=e.height}for(a=d.parent;a;d=a,a=d.parent)for(c=0;c<a.children.length&&(e=a.children[c],e!=d);++c)b+=e.height;return b}function Dc(a){if(0==a.height)return 0;for(var b=a.text.length,d,c=a;d=qb(c,!0);)d=d.find(0,!0),c=d.from.line,b+=d.from.ch-d.to.ch;for(c=a;d=qb(c,!1);)a=d.find(0,!0),b-=c.text.length-a.from.ch,c=a.to.line,b+=c.text.length-a.to.ch;return b}function xd(a){var b=a.display;a=a.doc;b.maxLine=w(a,a.first);b.maxLineLength=Dc(b.maxLine);
b.maxLineChanged=!0;a.iter(function(d){var c=Dc(d);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=d)})}function He(a,b){if(!a||/^\s*$/.test(a))return null;b=b.addModeClass?Hg:Ig;return b[a]||(b[a]=a.replace(/\S+/g,"cm-$&"))}function Ie(a,b){var d=K("span",null,null,fa?"padding-right: .1px":null);d={pre:K("pre",[d],"CodeMirror-line"),content:d,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:a.getOption("lineWrapping")};b.measure={};for(var c=0;c<=(b.rest?b.rest.length:0);c++){var e=c?b.rest[c-1]:b.line,
f=void 0;d.pos=0;d.addToken=Jg;var g=a.display.measure;if(null!=yd)g=yd;else{var h=D(g,document.createTextNode("A\u062eA")),k=Ob(h,0,1).getBoundingClientRect();h=Ob(h,1,2).getBoundingClientRect();E(g);g=k&&k.left!=k.right?yd=3>h.right-k.right:!1}g&&(f=Ja(e,a.doc.direction))&&(d.addToken=Kg(d.addToken,f));d.map=[];var l=b!=a.display.externalMeasured&&O(e);a:{var m=h=k=g=void 0,q=void 0,n=void 0,p=void 0;f=d;l=xe(a,e,l);var r=e.markedSpans,u=e.text,A=0;if(r)for(var H=u.length,x=0,Q=1,M="",R=0;;){if(R==
x){q=m=h=n="";k=g=null;R=Infinity;for(var T=[],F=void 0,S=0;S<r.length;++S){var I=r[S],N=I.marker;if("bookmark"==N.type&&I.from==x&&N.widgetNode)T.push(N);else if(I.from<=x&&(null==I.to||I.to>x||N.collapsed&&I.to==x&&I.from==x)){null!=I.to&&I.to!=x&&R>I.to&&(R=I.to,m="");N.className&&(q+=" "+N.className);N.css&&(n=(n?n+";":"")+N.css);N.startStyle&&I.from==x&&(h+=" "+N.startStyle);N.endStyle&&I.to==R&&(F||(F=[])).push(N.endStyle,I.to);N.title&&((g||(g={})).title=N.title);if(N.attributes)for(var ha in N.attributes)(g||
(g={}))[ha]=N.attributes[ha];N.collapsed&&(!k||0>ud(k.marker,N))&&(k=I)}else I.from>x&&R>I.from&&(R=I.from)}if(F)for(S=0;S<F.length;S+=2)F[S+1]==R&&(m+=" "+F[S]);if(!k||k.from==x)for(F=0;F<T.length;++F)Je(f,0,T[F]);if(k&&(k.from||0)==x){Je(f,(null==k.to?H+1:k.to)-x,k.marker,null==k.from);if(null==k.to)break a;k.to==x&&(k=!1)}}if(x>=H)break;for(T=Math.min(H,R);;){if(M){F=x+M.length;k||(S=F>T?M.slice(0,T-x):M,f.addToken(f,S,p?p+q:q,h,x+S.length==R?m:"",n,g));if(F>=T){M=M.slice(T-x);x=T;break}x=F;h=
""}M=u.slice(A,A=l[Q++]);p=He(l[Q++],f.cm.options)}}else for(g=1;g<l.length;g+=2)f.addToken(f,u.slice(A,A=l[g]),He(l[g+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(d.bgClass=cd(e.styleClasses.bgClass,d.bgClass||"")),e.styleClasses.textClass&&(d.textClass=cd(e.styleClasses.textClass,d.textClass||"")));0==d.map.length&&d.map.push(0,0,d.content.appendChild(Bg(a.display.measure)));0==c?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||
(b.measure.caches=[])).push({}))}fa&&(ha=d.content.lastChild,/\bcm-tab\b/.test(ha.className)||ha.querySelector&&ha.querySelector(".cm-tab"))&&(d.content.className="cm-tab-wrap-hack");X(a,"renderLine",a,b.line,d.pre);d.pre.className&&(d.textClass=cd(d.pre.className,d.textClass||""));return d}function Lg(a){var b=v("span","\u2022","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);b.setAttribute("aria-label",b.title);return b}function Jg(a,b,d,c,e,f,g){if(b){if(a.splitSpaces){var h=a.trailingSpace;
if(1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m="\u00a0");k+=m;h=" "==m}h=k}}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var q=0;;){l.lastIndex=q;var n=l.exec(b),p=n?n.index-q:b.length-q;if(p){var r=document.createTextNode(k.slice(q,q+p));G&&9>U?h.appendChild(v("span",[r])):h.appendChild(r);a.map.push(a.pos,a.pos+p,r);a.col+=p;a.pos+=p}if(!n)break;q+=
p+1;"\t"==n[0]?(n=a.cm.options.tabSize,n-=a.col%n,p=h.appendChild(v("span",fd(n),"cm-tab")),p.setAttribute("role","presentation"),p.setAttribute("cm-text","\t"),a.col+=n):("\r"==n[0]||"\n"==n[0]?(p=h.appendChild(v("span","\r"==n[0]?"\u240d":"\u2424","cm-invalidchar")),p.setAttribute("cm-text",n[0])):(p=a.cm.options.specialCharPlaceholder(n[0]),p.setAttribute("cm-text",n[0]),G&&9>U?h.appendChild(v("span",[p])):h.appendChild(p)),a.col+=1);a.map.push(a.pos,a.pos+1,p);a.pos++}}else a.col+=b.length,h=
document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),G&&9>U&&(m=!0),a.pos+=b.length;a.trailingSpace=32==k.charCodeAt(b.length-1);if(d||c||e||m||f||g){b=d||"";c&&(b+=c);e&&(b+=e);c=v("span",[h],b,f);if(g)for(var u in g)g.hasOwnProperty(u)&&"style"!=u&&"class"!=u&&c.setAttribute(u,g[u]);return a.content.appendChild(c)}a.content.appendChild(h)}}function Kg(a,b){return function(d,c,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=d.pos,m=l+c.length;;){for(var q=void 0,n=0;n<b.length&&
!(q=b[n],q.to>l&&q.from<=l);n++);if(q.to>=m)return a(d,c,e,f,g,h,k);a(d,c.slice(0,q.to-l),e,f,null,h,k);f=null;c=c.slice(q.to-l);l=q.to}}}function Je(a,b,d,c){var e=!c&&d.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!c&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",d.id));e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function Ke(a,b,d){for(var c=this.line=b,e;c=qb(c,!1);)c=
c.find(1,!0).line,(e||(e=[])).push(c);this.size=(this.rest=e)?O(L(this.rest))-d+1:1;this.node=this.text=null;this.hidden=Oa(a,b)}function Ec(a,b,d){var c=[],e;for(e=b;e<d;)b=new Ke(a.doc,w(a.doc,e),e),e+=b.size,c.push(b);return c}function Mg(a,b){if(a=a.ownsGroup)try{var d=a.delayedCallbacks,c=0;do{for(;c<d.length;c++)d[c].call(null);for(var e=0;e<a.ops.length;e++){var f=a.ops[e];if(f.cursorActivityHandlers)for(;f.cursorActivityCalled<f.cursorActivityHandlers.length;)f.cursorActivityHandlers[f.cursorActivityCalled++].call(null,
f.cm)}}while(c<d.length)}finally{rb=null,b(a)}}function ca(a,b){var d=a._handlers&&a._handlers[b]||xc;if(d.length){var c=Array.prototype.slice.call(arguments,2);if(rb)var e=rb.delayedCallbacks;else Pb?e=Pb:(e=Pb=[],setTimeout(Ng,0));for(var f=function(h){e.push(function(){return d[h].apply(null,c)})},g=0;g<d.length;++g)f(g)}}function Ng(){var a=Pb;Pb=null;for(var b=0;b<a.length;++b)a[b]()}function Le(a,b,d,c){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){f=a;var g=b,h=g.text.className,
k=Me(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=k.bgClass,g.textClass=k.textClass,zd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)Ne(a,b,d,c);else if("class"==f)zd(a,b);else if("widget"==f){f=a;g=b;h=c;g.alignable&&(g.alignable=null);k=y("CodeMirror-linewidget");for(var l=g.node.firstChild,m;l;l=m)m=l.nextSibling,k.test(l.className)&&g.node.removeChild(l);Oe(f,g,h)}}b.changes=null}function Qb(a){a.node==
a.text&&(a.node=v("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),G&&8>U&&(a.node.style.zIndex=2));return a.node}function Me(a,b){var d=a.display.externalMeasured;return d&&d.line==b.line?(a.display.externalMeasured=null,b.measure=d.measure,d.built):Ie(a,b)}function zd(a,b){var d=b.bgClass?b.bgClass+" "+(b.line.bgClass||""):b.line.bgClass;d&&(d+=" CodeMirror-linebackground");if(b.background)d?b.background.className=
d:(b.background.parentNode.removeChild(b.background),b.background=null);else if(d){var c=Qb(b);b.background=c.insertBefore(v("div",null,d),c.firstChild);a.display.input.setUneditable(b.background)}b.line.wrapClass?Qb(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function Ne(a,b,d,c){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),
b.gutterBackground=null);if(b.line.gutterClass){var e=Qb(b);b.gutterBackground=v("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px; width: "+c.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=Qb(b),g=b.gutter=v("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+
"px");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(v("div",od(a.options,d),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+c.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.display.gutterSpecs.length;++b)d=a.display.gutterSpecs[b].className,(f=e.hasOwnProperty(d)&&e[d])&&g.appendChild(v("div",
[f],"CodeMirror-gutter-elt","left: "+c.gutterLeft[d]+"px; width: "+c.gutterWidth[d]+"px"))}}function Og(a,b,d,c){var e=Me(a,b);b.text=b.node=e.pre;e.bgClass&&(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);zd(a,b);Ne(a,b,d,c);Oe(a,b,c);return b.node}function Oe(a,b,d){Pe(a,b.line,b,d,!0);if(b.rest)for(var c=0;c<b.rest.length;c++)Pe(a,b.rest[c],b,d,!1)}function Pe(a,b,d,c,e){if(b.widgets){var f=Qb(d),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=v("div",[h.node],"CodeMirror-linewidget"+
(h.className?" "+h.className:""));h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,q=c;if(l.noHScroll){(d.alignable||(d.alignable=[])).push(m);var n=q.wrapperWidth;m.style.left=q.fixedPos+"px";l.coverGutter||(n-=q.gutterTotalWidth,m.style.paddingLeft=q.gutterTotalWidth+"px");m.style.width=n+"px"}l.coverGutter&&(m.style.zIndex=5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-q.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,
d.gutter||d.text):f.appendChild(k);ca(h,"redraw")}}}function Rb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!ka(document.body,a.node)){var d="position: relative;";a.coverGutter&&(d+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(d+="width: "+b.display.wrapper.clientWidth+"px;");D(b.display.measure,v("div",[a.node],null,d))}return a.height=a.node.parentNode.offsetHeight}function La(a,b){for(b=b.target||b.srcElement;b!=a.wrapper;b=b.parentNode)if(!b||1==
b.nodeType&&"true"==b.getAttribute("cm-ignore-events")||b.parentNode==a.sizer&&b!=a.mover)return!0}function Ad(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Qe(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=D(a.measure,v("pre","x","CodeMirror-line-like"));b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;b={left:parseInt(b.paddingLeft),right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function Ha(a){return 50-a.display.nativeBarWidth}
function ab(a){return a.display.scroller.clientWidth-Ha(a)-a.display.barWidth}function Bd(a){return a.display.scroller.clientHeight-Ha(a)-a.display.barHeight}function Re(a,b,d){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var c=0;c<a.rest.length;c++)if(a.rest[c]==b)return{map:a.measure.maps[c],cache:a.measure.caches[c]};for(b=0;b<a.rest.length;b++)if(O(a.rest[b])>d)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}function Cd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[bb(a,
b)];if((a=a.display.externalMeasured)&&b>=a.lineN&&b<a.lineN+a.size)return a}function cb(a,b){var d=O(b),c=Cd(a,d);c&&!c.text?c=null:c&&c.changes&&(Le(a,c,d,Dd(a)),a.curOp.forceUpdate=!0);if(!c){var e=Fa(b);c=O(e);e=a.display.externalMeasured=new Ke(a.doc,e,c);e.lineN=c;c=e.built=Ie(a,e);e.text=c.pre;D(a.display.lineMeasure,c.pre);c=e}a=Re(c,b,d);return{line:b,view:c,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function za(a,b,d,c,e){b.before&&(d=-1);var f=d+(c||"");if(b.cache.hasOwnProperty(f))a=
b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&ab(a);if(!g.measure.heights||k&&g.measure.width!=l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){l=g[k];var q=g[k+1];2<Math.abs(l.bottom-q.bottom)&&m.push((l.bottom+q.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=c;g=Se(b.map,d,m);c=g.node;h=g.start;k=g.end;d=g.collapse;if(3==c.nodeType){for(var n=
0;4>n;n++){for(;h&&hd(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&hd(b.line.text.charAt(g.coverStart+k));)++k;if(G&&9>U&&0==h&&k==g.coverEnd-g.coverStart)var p=c.parentNode.getBoundingClientRect();else{p=Ob(c,h,k).getClientRects();k=Te;if("left"==m)for(l=0;l<p.length&&(k=p[l]).left==k.right;l++);else for(l=p.length-1;0<=l&&(k=p[l]).left==k.right;l--);p=k}if(p.left||p.right||0==h)break;k=h;--h;d="right"}G&&11>U&&((n=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==
screen.deviceXDPI)||(null!=Ed?n=Ed:(m=D(a.display.measure,v("span","x")),n=m.getBoundingClientRect(),m=Ob(m,0,1).getBoundingClientRect(),n=Ed=1<Math.abs(n.left-m.left)),n=!n),n||(n=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,p={left:p.left*n,right:p.right*n,top:p.top*m,bottom:p.bottom*m}))}else 0<h&&(d=m="right"),p=a.options.lineWrapping&&1<(n=c.getClientRects()).length?n["right"==m?n.length-1:0]:c.getBoundingClientRect();!(G&&9>U)||h||p&&(p.left||p.right)||(p=(p=c.parentNode.getClientRects()[0])?
{left:p.left,right:p.left+sb(a.display),top:p.top,bottom:p.bottom}:Te);c=p.top-b.rect.top;h=p.bottom-b.rect.top;n=(c+h)/2;m=b.view.measure.heights;for(g=0;g<m.length-1&&!(n<m[g]);g++);d={left:("right"==d?p.right:p.left)-b.rect.left,right:("left"==d?p.left:p.right)-b.rect.left,top:g?m[g-1]:0,bottom:m[g]};p.left||p.right||(d.bogus=!0);a.options.singleCursorHeightPerLine||(d.rtop=c,d.rbottom=h);a=d;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}
function Se(a,b,d){for(var c,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){c=a[l+2];h==k&&d==(c.insertLeft?"left":"right")&&(g=d);if("left"==d&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)c=a[(l-=3)+2],g="left";if("right"==d&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)c=a[(l+=3)+2],g="right";break}}return{node:c,start:e,end:f,collapse:g,coverStart:h,
coverEnd:k}}function Ue(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function Ve(a){a.display.externalMeasure=null;E(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Ue(a.display.view[b])}function Sb(a){Ve(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function We(){return Fc&&Gc?-(document.body.getBoundingClientRect().left-
parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Xe(){return Fc&&Gc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Fd(a){var b=0;if(a.widgets)for(var d=0;d<a.widgets.length;++d)a.widgets[d].above&&(b+=Rb(a.widgets[d]));return b}function Hc(a,b,d,c,e){e||(e=Fd(b),d.top+=e,d.bottom+=e);
if("line"==c)return d;c||(c="local");b=Ga(b);b="local"==c?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==c||"window"==c)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==c?0:Xe()),c=a.left+("window"==c?0:We()),d.left+=c,d.right+=c;d.top+=b;d.bottom+=b;return d}function Ye(a,b,d){if("div"==d)return b;var c=b.left;b=b.top;"page"==d?(c-=We(),b-=Xe()):"local"!=d&&d||(d=a.display.sizer.getBoundingClientRect(),c+=d.left,b+=d.top);a=a.display.lineSpace.getBoundingClientRect();
return{left:c-a.left,top:b-a.top}}function Gd(a,b,d,c,e){c||(c=w(a.doc,b.line));var f=c;b=b.ch;c=za(a,cb(a,c),b,e);return Hc(a,f,c,d)}function Aa(a,b,d,c,e,f){function g(n,p){n=za(a,e,n,p?"right":"left",f);p?n.left=n.right:n.right=n.left;return Hc(a,c,n,d)}function h(n,p,r){return g(r?n-1:n,1==k[p].level!=r)}c=c||w(a.doc,b.line);e||(e=cb(a,c));var k=Ja(c,a.doc.direction),l=b.ch;b=b.sticky;l>=c.text.length?(l=c.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==
b);var m=Ib(k,l,b),q=Jb;m=h(l,m,"before"==b);null!=q&&(m.other=h(l,q,"before"!=b));return m}function Ze(a,b){var d=0;b=C(a.doc,b);a.options.lineWrapping||(d=sb(a.display)*b.ch);b=w(a.doc,b.line);a=Ga(b)+a.display.lineSpace.offsetTop;return{left:d,right:d,top:a,bottom:a+b.height}}function Hd(a,b,d,c,e){a=t(a,b,d);a.xRel=e;c&&(a.outside=c);return a}function Id(a,b,d){var c=a.doc;d+=a.display.viewOffset;if(0>d)return Hd(c.first,0,null,-1,-1);var e=$a(c,d),f=c.first+c.size-1;if(e>f)return Hd(c.first+
c.size-1,w(c,f).text.length,null,1,1);0>b&&(b=0);for(var g=w(c,e);;){f=Pg(a,g,e,b,d);var h=void 0;var k=f.ch+(0<f.xRel||0<f.outside?1:0);if(g=Ka&&g.markedSpans)for(var l=0;l<g.length;++l){var m=g[l];m.marker.collapsed&&(null==m.from||m.from<k)&&(null==m.to||m.to>k)&&(!h||0>ud(h,m.marker))&&(h=m.marker)}if(!h)return f;f=h.find(1);if(f.line==e)return f;g=w(c,e=f.line)}}function $e(a,b,d,c){c-=Fd(b);b=b.text.length;var e=Hb(function(f){return za(a,d,f-1).bottom<=c},b,0);b=Hb(function(f){return za(a,
d,f).top>c},e,b);return{begin:e,end:b}}function af(a,b,d,c){d||(d=cb(a,b));c=Hc(a,b,za(a,d,c),"line").top;return $e(a,b,d,c)}function Jd(a,b,d,c){return a.bottom<=d?!1:a.top>d?!0:(c?a.left:a.right)>b}function Pg(a,b,d,c,e){e-=Ga(b);var f=cb(a,b),g=Fd(b),h=0,k=b.text.length,l=!0,m=Ja(b,a.doc.direction);m&&(m=(a.options.lineWrapping?Qg:Rg)(a,b,d,f,m,c,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var q=null,n=null;m=Hb(function(r){var u=za(a,f,r);u.top+=g;u.bottom+=g;if(!Jd(u,c,e,!1))return!1;
u.top<=e&&u.left<=c&&(q=r,n=u);return!0},h,k);var p=!1;n?(h=c-n.left<n.right-c,l=h==l,m=q+(l?0:1),l=l?"after":"before",h=h?n.left:n.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":za(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",p=Aa(a,t(d,m,l),"line",b,f),h=p.left,p=e<p.top?-1:e>=p.bottom?1:0);m=pe(b.text,m,1);return Hd(d,m,l,p,c-h)}function Rg(a,b,d,c,e,f,g){var h=Hb(function(m){m=e[m];var q=1!=m.level;return Jd(Aa(a,t(d,q?m.to:m.from,q?"before":"after"),"line",b,c),f,g,!0)},
0,e.length-1),k=e[h];if(0<h){var l=1!=k.level;l=Aa(a,t(d,l?k.from:k.to,l?"after":"before"),"line",b,c);Jd(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Qg(a,b,d,c,e,f,g){g=$e(a,b,c,g);d=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=g||l.to<=d)){var m=za(a,c,1!=l.level?Math.min(g,l.to)-1:Math.max(d,l.from)).right;m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<d&&(b={from:d,to:b.to,level:b.level});b.to>g&&(b={from:b.from,
to:g,level:b.level});return b}function tb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==db){db=v("pre",null,"CodeMirror-line-like");for(var b=0;49>b;++b)db.appendChild(document.createTextNode("x")),db.appendChild(v("br"));db.appendChild(document.createTextNode("x"))}D(a.measure,db);b=db.offsetHeight/50;3<b&&(a.cachedTextHeight=b);E(a.measure);return b||1}function sb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=v("span","xxxxxxxxxx"),d=v("pre",[b],"CodeMirror-line-like");
D(a.measure,d);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function Dd(a){for(var b=a.display,d={},c={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g){var h=a.display.gutterSpecs[g].className;d[h]=f.offsetLeft+f.clientLeft+e;c[h]=f.clientWidth}return{fixedPos:Kd(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:d,gutterWidth:c,wrapperWidth:b.wrapper.clientWidth}}function Kd(a){return a.scroller.getBoundingClientRect().left-
a.sizer.getBoundingClientRect().left}function bf(a){var b=tb(a.display),d=a.options.lineWrapping,c=d&&Math.max(5,a.display.scroller.clientWidth/sb(a.display)-3);return function(e){if(Oa(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return d?f+(Math.ceil(e.text.length/c)||1)*b:f+b}}function Ld(a){var b=a.doc,d=bf(a);b.iter(function(c){var e=d(c);e!=c.height&&Da(c,e)})}function eb(a,b,d,c){var e=a.display;if(!d&&"true"==(b.target||
b.srcElement).getAttribute("cm-not-content"))return null;d=e.lineSpace.getBoundingClientRect();try{var f=b.clientX-d.left;var g=b.clientY-d.top}catch(k){return null}b=Id(a,f,g);var h;c&&0<b.xRel&&(h=w(a.doc,b.line).text).length==b.ch&&(c=wa(h,h.length,a.options.tabSize)-h.length,b=t(b.line,Math.max(0,Math.round((f-Qe(a.display).left)/sb(a.display))-c)));return b}function bb(a,b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;a=a.display.view;for(var d=0;d<a.length;d++)if(b-=
a[d].size,0>b)return d}function ma(a,b,d,c){null==b&&(b=a.doc.first);null==d&&(d=a.doc.first+a.doc.size);c||(c=0);var e=a.display;c&&d<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)Ka&&vd(a.doc,b)<e.viewTo&&Pa(a);else if(d<=e.viewFrom)Ka&&Ge(a.doc,d+c)>e.viewFrom?Pa(a):(e.viewFrom+=c,e.viewTo+=c);else if(b<=e.viewFrom&&d>=e.viewTo)Pa(a);else if(b<=e.viewFrom){var f=Ic(a,d,d+c,1);f?(e.view=e.view.slice(f.index),e.viewFrom=
f.lineN,e.viewTo+=c):Pa(a)}else if(d>=e.viewTo)(f=Ic(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Pa(a);else{f=Ic(a,b,b,-1);var g=Ic(a,d,d+c,1);f&&g?(e.view=e.view.slice(0,f.index).concat(Ec(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=c):Pa(a)}if(a=e.externalMeasured)d<a.lineN?a.lineN+=c:b<a.lineN+a.size&&(e.externalMeasured=null)}function Qa(a,b,d){a.curOp.viewChanged=!0;var c=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(c.externalMeasured=
null);b<c.viewFrom||b>=c.viewTo||(a=c.view[bb(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==ea(a,d)&&a.push(d)))}function Pa(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function Ic(a,b,d,c){var e=bb(a,b),f=a.display.view;if(!Ka||d==a.doc.first+a.doc.size)return{index:e,lineN:d};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<c){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;d+=b}for(;vd(a.doc,d)!=d;){if(e==(0>
c?0:f.length-1))return null;d+=c*f[e-(0>c?1:0)].size;e+=c}return{index:e,lineN:d}}function cf(a){a=a.display.view;for(var b=0,d=0;d<a.length;d++){var c=a[d];c.hidden||c.node&&!c.changes||++b}return b}function Tb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function df(a,b){void 0===b&&(b=!0);for(var d=a.doc,c={},e=c.cursors=document.createDocumentFragment(),f=c.selection=document.createDocumentFragment(),g=0;g<d.sel.ranges.length;g++)if(b||g!=d.sel.primIndex){var h=d.sel.ranges[g];
if(!(h.from().line>=a.display.viewTo||h.to().line<a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&ef(a,h.head,e);k||Sg(a,h,f)}}return c}function ef(a,b,d){b=Aa(a,b,"div",null,null,!a.options.singleCursorHeightPerLine);var c=d.appendChild(v("div","\u00a0","CodeMirror-cursor"));c.style.left=b.left+"px";c.style.top=b.top+"px";c.style.height=Math.max(0,b.bottom-b.top)*a.options.cursorHeight+"px";b.other&&(a=d.appendChild(v("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor")),
a.style.display="",a.style.left=b.other.left+"px",a.style.top=b.other.top+"px",a.style.height=.85*(b.other.bottom-b.other.top)+"px")}function Jc(a,b){return a.top-b.top||a.left-b.left}function Sg(a,b,d){function c(p,r,u,A){0>r&&(r=0);r=Math.round(r);A=Math.round(A);h.appendChild(v("div",null,"CodeMirror-selected","position: absolute; left: "+p+"px;\n                             top: "+r+"px; width: "+(null==u?m-p:u)+"px;\n                             height: "+(A-r)+"px"))}function e(p,r,u){function A(F,
S){return Gd(a,t(p,F),"div",x,S)}function H(F,S,I){F=af(a,x,null,F);S="ltr"==S==("after"==I)?"left":"right";I="after"==I?F.begin:F.end-(/\s/.test(x.text.charAt(F.end-1))?2:1);return A(I,S)[S]}var x=w(g,p),Q=x.text.length,M,R,T=Ja(x,g.direction);zg(T,r||0,null==u?Q:u,function(F,S,I,N){var ha="ltr"==I,na=A(F,ha?"left":"right"),sa=A(S-1,ha?"right":"left"),fb=null==r&&0==F,gb=null==u&&S==Q,Md=0==N;N=!T||N==T.length-1;3>=sa.top-na.top?(S=(q?fb:gb)&&Md?l:(ha?na:sa).left,c(S,na.top,((q?gb:fb)&&N?m:(ha?sa:
na).right)-S,na.bottom)):(ha?(ha=q&&fb&&Md?l:na.left,fb=q?m:H(F,I,"before"),F=q?l:H(S,I,"after"),gb=q&&gb&&N?m:sa.right):(ha=q?H(F,I,"before"):l,fb=!q&&fb&&Md?m:na.right,F=!q&&gb&&N?l:sa.left,gb=q?H(S,I,"after"):m),c(ha,na.top,fb-ha,na.bottom),na.bottom<sa.top&&c(l,na.bottom,null,sa.top),c(F,sa.top,gb-F,sa.bottom));if(!M||0>Jc(na,M))M=na;0>Jc(sa,M)&&(M=sa);if(!R||0>Jc(na,R))R=na;0>Jc(sa,R)&&(R=sa)});return{start:M,end:R}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=Qe(a.display),
l=k.left,m=Math.max(f.sizerWidth,ab(a)-f.sizer.offsetLeft)-k.right,q="ltr"==g.direction;f=b.from();b=b.to();if(f.line==b.line)e(f.line,f.ch,b.ch);else{var n=w(g,f.line);k=w(g,b.line);k=Fa(n)==Fa(k);f=e(f.line,f.ch,k?n.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(c(f.right,f.top,null,f.bottom),c(l,b.top,b.left,b.bottom)):c(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&c(l,f.bottom,null,b.top)}d.appendChild(h)}function Nd(a){if(a.state.focused){var b=a.display;
clearInterval(b.blinker);var d=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){a.hasFocus()||ub(a);b.cursorDiv.style.visibility=(d=!d)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function ff(a){a.state.focused||(a.display.input.focus(),Od(a))}function gf(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,ub(a))},100)}function Od(a,
b){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(X(a,"focus",a,b),a.state.focused=!0,Wa(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),fa&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),Nd(a))}function ub(a,b){a.state.delayingBlurEvent||(a.state.focused&&(X(a,"blur",a,b),a.state.focused=!1,hb(a.display.wrapper,"CodeMirror-focused")),
clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function Kc(a){for(var b=a.display,d=b.lineDiv.offsetTop,c=0;c<b.view.length;c++){var e=b.view[c],f=a.options.lineWrapping,g=0;if(!e.hidden){if(G&&8>U){f=e.node.offsetTop+e.node.offsetHeight;var h=f-d;d=f}else{var k=e.node.getBoundingClientRect();h=k.bottom-k.top;!f&&e.text.firstChild&&(g=e.text.firstChild.getBoundingClientRect().right-k.left-1)}f=e.line.height-h;if(.005<f||-.005>f)if(Da(e.line,h),
hf(e.line),e.rest)for(h=0;h<e.rest.length;h++)hf(e.rest[h]);g>a.display.sizerWidth&&(g=Math.ceil(g/sb(a.display)),g>a.display.maxLineLength&&(a.display.maxLineLength=g,a.display.maxLine=e.line,a.display.maxLineChanged=!0))}}}function hf(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b){var d=a.widgets[b],c=d.node.parentNode;c&&(d.height=c.offsetHeight)}}function Lc(a,b,d){var c=d&&null!=d.top?Math.max(0,d.top):a.scroller.scrollTop;c=Math.floor(c-a.lineSpace.offsetTop);var e=d&&null!=d.bottom?d.bottom:
c+a.wrapper.clientHeight;c=$a(b,c);e=$a(b,e);if(d&&d.ensure){var f=d.ensure.from.line;d=d.ensure.to.line;f<c?(c=f,e=$a(b,Ga(w(b,f))+a.wrapper.clientHeight)):Math.min(d,b.lastLine())>=e&&(c=$a(b,Ga(w(b,d))-a.wrapper.clientHeight),e=d)}return{from:c,to:Math.max(e,c+1)}}function Pd(a,b){var d=a.display,c=tb(a.display);0>b.top&&(b.top=0);var e=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:d.scroller.scrollTop,f=Bd(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+Ad(d),k=b.top<c;c=
b.bottom>h-c;b.top<e?g.scrollTop=k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(c?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:d.scroller.scrollLeft;a=ab(a)-(a.options.fixedGutter?d.gutters.offsetWidth:0);if(d=b.right-b.left>a)b.right=b.left+a;10>b.left?g.scrollLeft=0:b.left<e?g.scrollLeft=Math.max(0,b.left-(d?0:10)):b.right>a+e-3&&(g.scrollLeft=b.right+(d?0:10)-a);return g}function Mc(a,b){null!=b&&(Nc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:
a.curOp.scrollTop)+b)}function vb(a){Nc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Ub(a,b,d){null==b&&null==d||Nc(a);null!=b&&(a.curOp.scrollLeft=b);null!=d&&(a.curOp.scrollTop=d)}function Nc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var d=Ze(a,b.from),c=Ze(a,b.to);jf(a,d,c,b.margin)}}function jf(a,b,d,c){b=Pd(a,{left:Math.min(b.left,d.left),top:Math.min(b.top,d.top)-c,right:Math.max(b.right,d.right),bottom:Math.max(b.bottom,
d.bottom)+c});Ub(a,b.scrollLeft,b.scrollTop)}function Vb(a,b){2>Math.abs(a.doc.scrollTop-b)||(Ma||Qd(a,{top:b}),kf(a,b,!0),Ma&&Qd(a),Wb(a,100))}function kf(a,b,d){b=Math.max(0,Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b));if(a.display.scroller.scrollTop!=b||d)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b)}function ib(a,b,d,c){b=Math.max(0,Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth));
(d?b==a.doc.scrollLeft:2>Math.abs(a.doc.scrollLeft-b))&&!c||(a.doc.scrollLeft=b,lf(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Xb(a){var b=a.display,d=b.gutters.offsetWidth,c=Math.round(a.doc.height+Ad(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?d:
0,docHeight:c,scrollHeight:c+Ha(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:d}}function wb(a,b){b||(b=Xb(a));var d=a.display.barWidth,c=a.display.barHeight;mf(a,b);for(b=0;4>b&&d!=a.display.barWidth||c!=a.display.barHeight;b++)d!=a.display.barWidth&&a.options.lineWrapping&&Kc(a),mf(a,Xb(a)),d=a.display.barWidth,c=a.display.barHeight}function mf(a,b){var d=a.display,c=d.scrollbars.update(b);d.sizer.style.paddingRight=(d.barWidth=c.right)+"px";d.sizer.style.paddingBottom=(d.barHeight=
c.bottom)+"px";d.heightForcer.style.borderBottom=c.bottom+"px solid transparent";c.right&&c.bottom?(d.scrollbarFiller.style.display="block",d.scrollbarFiller.style.height=c.bottom+"px",d.scrollbarFiller.style.width=c.right+"px"):d.scrollbarFiller.style.display="";c.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(d.gutterFiller.style.display="block",d.gutterFiller.style.height=c.bottom+"px",d.gutterFiller.style.width=b.gutterWidth+"px"):d.gutterFiller.style.display=""}function nf(a){a.display.scrollbars&&
(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&hb(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new of[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);z(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});b.setAttribute("cm-not-content","true")},function(b,d){"horizontal"==d?ib(a,b):Vb(a,b)},a);a.display.scrollbars.addClass&&Wa(a.display.wrapper,a.display.scrollbars.addClass)}
function jb(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Tg};a=a.curOp;rb?rb.ops.push(a):a.ownsGroup=rb={ops:[a],delayedCallbacks:[]}}function kb(a){(a=a.curOp)&&Mg(a,function(b){for(var d=0;d<b.ops.length;d++)b.ops[d].cm.curOp=null;b=b.ops;for(d=0;d<b.length;d++){var c=b[d],e=c.cm,f=
e.display,g=e.display;!g.scrollbarsClipped&&g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=Ha(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=Ha(e)+"px",g.scrollbarsClipped=!0);c.updateMaxLine&&xd(e);c.mustUpdate=c.viewChanged||c.forceUpdate||null!=c.scrollTop||c.scrollToPos&&(c.scrollToPos.from.line<f.viewFrom||c.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;c.update=
c.mustUpdate&&new Oc(e,c.mustUpdate&&{top:c.scrollTop,ensure:c.scrollToPos},c.forceUpdate)}for(d=0;d<b.length;d++)c=b[d],c.updatedDisplay=c.mustUpdate&&Rd(c.cm,c.update);for(d=0;d<b.length;d++)if(c=b[d],e=c.cm,f=e.display,c.updatedDisplay&&Kc(e),c.barMeasure=Xb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=f.maxLine.text.length,g=za(e,cb(e,f.maxLine),g,void 0),c.adjustWidthTo=g.left+3,e.display.sizerWidth=c.adjustWidthTo,c.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+
c.adjustWidthTo+Ha(e)+e.display.barWidth),c.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+c.adjustWidthTo-ab(e))),c.updatedDisplay||c.selectionChanged)c.preparedSelection=f.input.prepareSelection();for(d=0;d<b.length;d++)c=b[d],e=c.cm,null!=c.adjustWidthTo&&(e.display.sizer.style.minWidth=c.adjustWidthTo+"px",c.maxScrollLeft<e.doc.scrollLeft&&ib(e,Math.min(e.display.scroller.scrollLeft,c.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=c.focus&&c.focus==va(),c.preparedSelection&&e.display.input.showSelection(c.preparedSelection,
f),(c.updatedDisplay||c.startHeight!=e.doc.height)&&wb(e,c.barMeasure),c.updatedDisplay&&Sd(e,c.barMeasure),c.selectionChanged&&Nd(e),e.state.focused&&c.updateInput&&e.display.input.reset(c.typing),f&&ff(c.cm);for(d=0;d<b.length;d++){var h=void 0;c=b[d];e=c.cm;f=e.display;g=e.doc;c.updatedDisplay&&pf(e,c.update);null==f.wheelStartX||null==c.scrollTop&&null==c.scrollLeft&&!c.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=c.scrollTop&&kf(e,c.scrollTop,c.forceScroll);null!=c.scrollLeft&&ib(e,
c.scrollLeft,!0,!0);if(c.scrollToPos){var k=C(g,c.scrollToPos.from);var l=C(g,c.scrollToPos.to);var m=c.scrollToPos.margin;null==m&&(m=0);e.options.lineWrapping||k!=l||(k=k.ch?t(k.line,"before"==k.sticky?k.ch-1:k.ch,"after"):k,l="before"==k.sticky?t(k.line,k.ch+1,"before"):k);for(var q=0;5>q;q++){var n=!1;h=Aa(e,k);var p=l&&l!=k?Aa(e,l):h;h={left:Math.min(h.left,p.left),top:Math.min(h.top,p.top)-m,right:Math.max(h.left,p.left),bottom:Math.max(h.bottom,p.bottom)+m};p=Pd(e,h);var r=e.doc.scrollTop,
u=e.doc.scrollLeft;null!=p.scrollTop&&(Vb(e,p.scrollTop),1<Math.abs(e.doc.scrollTop-r)&&(n=!0));null!=p.scrollLeft&&(ib(e,p.scrollLeft),1<Math.abs(e.doc.scrollLeft-u)&&(n=!0));if(!n)break}l=h;Z(e,"scrollCursorIntoView")||(m=e.display,q=m.sizer.getBoundingClientRect(),k=null,0>l.top+q.top?k=!0:l.bottom+q.top>(window.innerHeight||document.documentElement.clientHeight)&&(k=!1),null==k||Ug||(l=v("div","\u200b",null,"position: absolute;\n                         top: "+(l.top-m.viewOffset-e.display.lineSpace.offsetTop)+
"px;\n                         height: "+(l.bottom-l.top+Ha(e)+m.barHeight)+"px;\n                         left: "+l.left+"px; width: "+Math.max(2,l.right-l.left)+"px;"),e.display.lineSpace.appendChild(l),l.scrollIntoView(k),e.display.lineSpace.removeChild(l)))}l=c.maybeHiddenMarkers;k=c.maybeUnhiddenMarkers;if(l)for(m=0;m<l.length;++m)l[m].lines.length||X(l[m],"hide");if(k)for(l=0;l<k.length;++l)k[l].lines.length&&X(k[l],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);
c.changeObjs&&X(e,"changes",e,c.changeObjs);c.update&&c.update.finish()}})}function pa(a,b){if(a.curOp)return b();jb(a);try{return b()}finally{kb(a)}}function aa(a,b){return function(){if(a.curOp)return b.apply(a,arguments);jb(a);try{return b.apply(a,arguments)}finally{kb(a)}}}function ia(a){return function(){if(this.curOp)return a.apply(this,arguments);jb(this);try{return a.apply(this,arguments)}finally{kb(this)}}}function ba(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,
arguments);jb(b);try{return a.apply(this,arguments)}finally{kb(b)}}}function Wb(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,dd(Vg,a))}function Vg(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var d=+new Date+a.options.workTime,c=Mb(a,b.highlightFrontier),e=[];b.iter(c.line,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(c.line>=a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength?Ya(b.mode,c.state):null,k=ve(a,f,c,!0);
h&&(c.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(c.line);f.stateAfter=c.save()}else f.text.length<=a.options.maxHighlightLength&&rd(a,f.text,c),f.stateAfter=0==c.line%5?c.save():null;c.nextLine();if(+new Date>d)return Wb(a,a.options.workDelay),!0});b.highlightFrontier=c.line;b.modeFrontier=
Math.max(b.modeFrontier,c.line);e.length&&pa(a,function(){for(var f=0;f<e.length;f++)Qa(a,e[f],"text")})}}function Rd(a,b){var d=a.display,c=a.doc;if(b.editorIsHidden)return Pa(a),!1;if(!b.force&&b.visible.from>=d.viewFrom&&b.visible.to<=d.viewTo&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo)&&d.renderedView==d.view&&0==cf(a))return!1;qf(a)&&(Pa(a),b.dims=Dd(a));var e=c.first+c.size,f=Math.max(b.visible.from-a.options.viewportMargin,c.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);
d.viewFrom<f&&20>f-d.viewFrom&&(f=Math.max(c.first,d.viewFrom));d.viewTo>g&&20>d.viewTo-g&&(g=Math.min(e,d.viewTo));Ka&&(f=vd(a.doc,f),g=Ge(a.doc,g));c=f!=d.viewFrom||g!=d.viewTo||d.lastWrapHeight!=b.wrapperHeight||d.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=Ec(a,f,g),e.viewFrom=f):(e.viewFrom>f?e.view=Ec(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(bb(a,f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(Ec(a,e.viewTo,g)):e.viewTo>
g&&(e.view=e.view.slice(0,bb(a,g))));e.viewTo=g;d.viewOffset=Ga(w(a.doc,d.viewFrom));a.display.mover.style.top=d.viewOffset+"px";g=cf(a);if(!c&&0==g&&!b.force&&d.renderedView==d.view&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo))return!1;a.hasFocus()?f=null:(f=va())&&ka(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&(e=window.getSelection(),e.anchorNode&&e.extend&&ka(a.display.lineDiv,e.anchorNode)&&(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,
f.focusOffset=e.focusOffset))):f=null;4<g&&(d.lineDiv.style.display="none");Wg(a,d.updateLineNumbers,b.dims);4<g&&(d.lineDiv.style.display="");d.renderedView=d.view;(g=f)&&g.activeElt&&g.activeElt!=va()&&(g.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(g.activeElt.nodeName)&&g.anchorNode&&ka(document.body,g.anchorNode)&&ka(document.body,g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),f.addRange(e),f.extend(g.focusNode,
g.focusOffset)));E(d.cursorDiv);E(d.selectionDiv);d.gutters.style.height=d.sizer.style.minHeight=0;c&&(d.lastWrapHeight=b.wrapperHeight,d.lastWrapWidth=b.wrapperWidth,Wb(a,400));d.updateLineNumbers=null;return!0}function pf(a,b){for(var d=b.viewport,c=!0;;c=!1){if(c&&a.options.lineWrapping&&b.oldDisplayWidth!=ab(a))c&&(b.visible=Lc(a.display,a.doc,d));else if(d&&null!=d.top&&(d={top:Math.min(a.doc.height+Ad(a.display)-Bd(a),d.top)}),b.visible=Lc(a.display,a.doc,d),b.visible.from>=a.display.viewFrom&&
b.visible.to<=a.display.viewTo)break;if(!Rd(a,b))break;Kc(a);c=Xb(a);Tb(a);wb(a,c);Sd(a,c);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function Qd(a,b){b=new Oc(a,b);if(Rd(a,b)){Kc(a);pf(a,b);var d=Xb(a);Tb(a);wb(a,d);Sd(a,d);b.finish()}}function Wg(a,b,d){function c(n){var p=
n.nextSibling;fa&&ya&&a.display.currentWheelTarget==n?n.style.display="none":n.parentNode.removeChild(n);return p}var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view;e=e.viewFrom;for(var l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=c(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<ea(m.changes,"gutter")&&(h=!1),Le(a,m,e,d));h&&(E(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(od(a.options,e))));h=m.node.nextSibling}else{var q=
Og(a,m,e,d);g.insertBefore(q,h)}e+=m.size}for(;h;)h=c(h)}function Td(a){a.sizer.style.marginLeft=a.gutters.offsetWidth+"px"}function Sd(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+Ha(a)+"px"}function lf(a){var b=a.display,d=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=Kd(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=c+
"px",g=0;g<d.length;g++)if(!d[g].hidden){a.options.fixedGutter&&(d[g].gutter&&(d[g].gutter.style.left=f),d[g].gutterBackground&&(d[g].gutterBackground.style.left=f));var h=d[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=c+e+"px")}}function qf(a){if(!a.options.lineNumbers)return!1;var b=a.doc;b=od(a.options,b.first+b.size-1);var d=a.display;if(b.length!=d.lineNumChars){var c=d.measure.appendChild(v("div",[v("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),
e=c.firstChild.offsetWidth;c=c.offsetWidth-e;d.lineGutter.style.width="";d.lineNumInnerWidth=Math.max(e,d.lineGutter.offsetWidth-c)+1;d.lineNumWidth=d.lineNumInnerWidth+c;d.lineNumChars=d.lineNumInnerWidth?b.length:-1;d.lineGutter.style.width=d.lineNumWidth+"px";Td(a.display);return!0}return!1}function Ud(a,b){for(var d=[],c=!1,e=0;e<a.length;e++){var f=a[e],g=null;"string"!=typeof f&&(g=f.style,f=f.className);if("CodeMirror-linenumbers"==f)if(b)c=!0;else continue;d.push({className:f,style:g})}b&&
!c&&d.push({className:"CodeMirror-linenumbers",style:null});return d}function rf(a){var b=a.gutters,d=a.gutterSpecs;E(b);a.lineGutter=null;for(var c=0;c<d.length;++c){var e=d[c],f=e.className;e=e.style;var g=b.appendChild(v("div",null,"CodeMirror-gutter "+f));e&&(g.style.cssText=e);"CodeMirror-linenumbers"==f&&(a.lineGutter=g,g.style.width=(a.lineNumWidth||1)+"px")}b.style.display=d.length?"":"none";Td(a)}function Yb(a){rf(a.display);ma(a);lf(a)}function Xg(a,b,d,c){this.input=d;this.scrollbarFiller=
v("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=v("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=K("div",null,"CodeMirror-code");this.selectionDiv=v("div",null,null,"position: relative; z-index: 1");this.cursorDiv=v("div",null,"CodeMirror-cursors");this.measure=v("div",null,"CodeMirror-measure");this.lineMeasure=v("div",null,"CodeMirror-measure");this.lineSpace=K("div",
[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var e=K("div",[this.lineSpace],"CodeMirror-lines");this.mover=v("div",[e],null,"position: relative");this.sizer=v("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=null;this.heightForcer=v("div",null,null,"position: absolute; height: 50px; width: 1px;");this.gutters=v("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=v("div",[this.sizer,this.heightForcer,this.gutters],
"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=v("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");G&&8>U&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);fa||Ma&&Zb||(this.scroller.draggable=!0);a&&(a.appendChild?a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=
this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;this.gutterSpecs=Ud(c.gutters,c.lineNumbers);
rf(this);d.init(this)}function sf(a){var b=a.wheelDeltaX,d=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==d&&a.detail&&a.axis==a.VERTICAL_AXIS?d=a.detail:null==d&&(d=a.wheelDelta);return{x:b,y:d}}function Yg(a){a=sf(a);a.x*=ta;a.y*=ta;return a}function tf(a,b){var d=sf(b),c=d.x;d=d.y;var e=a.display,f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>f.clientHeight;if(c&&g||d&&h){if(d&&ya&&fa){g=b.target;var k=e.view;a:for(;g!=f;g=g.parentNode)for(var l=0;l<
k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!c||Ma||Ba||null==ta?(d&&null!=ta&&(b=d*ta,h=a.doc.scrollTop,g=h+e.wrapper.clientHeight,0>b?h=Math.max(0,h+b-50):g=Math.min(a.doc.height,g+b+50),Qd(a,{top:h,bottom:g})),20>Pc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=c,e.wheelDY=d,setTimeout(function(){if(null!=e.wheelStartX){var m=f.scrollLeft-e.wheelStartX,q=f.scrollTop-e.wheelStartY;m=q&&e.wheelDY&&q/e.wheelDY||m&&e.wheelDX&&m/e.wheelDX;
e.wheelStartX=e.wheelStartY=null;m&&(ta=(ta*Pc+m)/(Pc+1),++Pc)}},200)):(e.wheelDX+=c,e.wheelDY+=d))):(d&&h&&Vb(a,Math.max(0,f.scrollTop+d*ta)),ib(a,Math.max(0,f.scrollLeft+c*ta)),(!d||d&&h)&&la(b),e.wheelStartX=null)}}function Ca(a,b,d){a=a&&a.options.selectionsMayTouch;d=b[d];b.sort(function(k,l){return B(k.from(),l.from())});d=ea(b,d);for(var c=1;c<b.length;c++){var e=b[c],f=b[c-1],g=B(f.to(),e.from());if(a&&!e.empty()?0<g:0<=g){g=Ac(f.from(),e.from());var h=zc(f.to(),e.to());e=f.empty()?e.from()==
e.head:f.from()==f.head;c<=d&&--d;b.splice(--c,2,new J(e?h:g,e?g:h))}}return new ua(b,d)}function Na(a,b){return new ua([new J(a,b||a)],0)}function Ra(a){return a.text?t(a.from.line+a.text.length-1,L(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function uf(a,b){if(0>B(a,b.from))return a;if(0>=B(a,b.to))return Ra(b);var d=a.line+b.text.length-(b.to.line-b.from.line)-1,c=a.ch;a.line==b.to.line&&(c+=Ra(b).ch-b.to.ch);return t(d,c)}function Vd(a,b){for(var d=[],c=0;c<a.sel.ranges.length;c++){var e=
a.sel.ranges[c];d.push(new J(uf(e.anchor,b),uf(e.head,b)))}return Ca(a.cm,d,a.sel.primIndex)}function vf(a,b,d){return a.line==b.line?t(d.line,a.ch-b.ch+d.ch):t(d.line+(a.line-b.line),a.ch)}function Wd(a){a.doc.mode=ld(a.options,a.doc.modeOption);$b(a)}function $b(a){a.doc.iter(function(b){b.stateAfter&&(b.stateAfter=null);b.styles&&(b.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;Wb(a,100);a.state.modeGen++;a.curOp&&ma(a)}function wf(a,b){return 0==b.from.ch&&0==b.to.ch&&
""==L(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Xd(a,b,d,c){function e(r,u,A){r.text=u;r.stateAfter&&(r.stateAfter=null);r.styles&&(r.styles=null);null!=r.order&&(r.order=null);De(r);Ee(r,A);u=c?c(r):1;u!=r.height&&Da(r,u);ca(r,"change",r,b)}function f(r,u){for(var A=[];r<u;++r)A.push(new xb(k[r],d?d[r]:null,c));return A}var g=b.from,h=b.to,k=b.text,l=w(a,g.line),m=w(a,h.line),q=L(k),n=d?d[k.length-1]:null,p=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-
k.length)):wf(a,b)?(h=f(0,k.length-1),e(m,m.text,n),p&&a.remove(g.line,p),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+q+l.text.slice(h.ch),n):(p=f(1,k.length-1),p.push(new xb(q+l.text.slice(h.ch),n,c)),e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),a.insert(g.line+1,p)):1==k.length?(e(l,l.text.slice(0,g.ch)+k[0]+m.text.slice(h.ch),d?d[0]:null),a.remove(g.line+1,p)):(e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),e(m,q+m.text.slice(h.ch),n),n=f(1,k.length-1),1<p&&a.remove(g.line+
1,p-1),a.insert(g.line+1,n));ca(a,"change",a,b)}function Sa(a,b,d){function c(e,f,g){if(e.linked)for(var h=0;h<e.linked.length;++h){var k=e.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!d||l)b(k.doc,l),c(k.doc,e,l)}}}c(a,null,!0)}function xf(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;Ld(a);Wd(a);yf(a);a.options.lineWrapping||xd(a);a.options.mode=b.modeOption;ma(a)}function yf(a){("rtl"==a.doc.direction?Wa:hb)(a.display.lineDiv,"CodeMirror-rtl")}function Zg(a){pa(a,
function(){yf(a);ma(a)})}function Qc(a){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a||1}function Yd(a,b){var d={from:qd(b.from),to:Ra(b),text:Za(a,b.from,b.to)};zf(a,d,b.from.line,b.to.line+1);Sa(a,function(c){return zf(c,d,b.from.line,b.to.line+1)},!0);return d}function Af(a){for(;a.length;)if(L(a).ranges)a.pop();else break}function Bf(a,b,d,c){var e=
a.history;e.undone.length=0;var f=+new Date,g;if(g=e.lastOp==c||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&e.lastModTime>f-(a.cm?a.cm.options.historyEventDelay:500)||"*"==b.origin.charAt(0))){if(e.lastOp==c){Af(e.done);var h=L(e.done)}else e.done.length&&!L(e.done).ranges?h=L(e.done):1<e.done.length&&!e.done[e.done.length-2].ranges?(e.done.pop(),h=L(e.done)):h=void 0;g=h}if(g){var k=L(h.changes);0==B(b.from,b.to)&&0==B(b.from,k.to)?k.to=Ra(b):h.changes.push(Yd(a,b))}else for((h=L(e.done))&&
h.ranges||Rc(a.sel,e.done),h={changes:[Yd(a,b)],generation:e.generation},e.done.push(h);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(d);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=c;e.lastOrigin=e.lastSelOrigin=b.origin;k||X(a,"historyAdded")}function Rc(a,b){var d=L(b);d&&d.ranges&&d.equals(a)||b.push(a)}function zf(a,b,d,c){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,d),Math.min(a.first+a.size,c),function(g){g.markedSpans&&
((e||(e=b["spans_"+a.id]={}))[f]=g.markedSpans);++f})}function $g(a){if(!a)return null;for(var b,d=0;d<a.length;++d)a[d].marker.explicitlyCleared?b||(b=a.slice(0,d)):b&&b.push(a[d]);return b?b.length?b:null:a}function Cf(a,b){var d;if(d=b["spans_"+a.id]){for(var c=[],e=0;e<b.text.length;++e)c.push($g(d[e]));d=c}else d=null;a=td(a,b);if(!d)return a;if(!a)return d;for(b=0;b<d.length;++b)if(c=d[b],e=a[b],c&&e){var f=0;a:for(;f<e.length;++f){for(var g=e[f],h=0;h<c.length;++h)if(c[h].marker==g.marker)continue a;
c.push(g)}}else e&&(d[b]=e);return d}function yb(a,b,d){for(var c=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)c.push(d?ua.prototype.deepCopy.call(f):f);else{f=f.changes;var g=[];c.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=m.match(/^spans_(\d+)$/))&&-1<ea(b,Number(l[1]))&&(L(g)[m]=k[m],delete k[m])}}}return c}function Zd(a,b,d,c){return c?(a=a.anchor,d&&(c=0>B(b,a),c!=0>B(d,a)?(a=b,b=d):c!=0>B(b,d)&&(b=d)),new J(a,
b)):new J(d||b,b)}function Sc(a,b,d,c,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));da(a,new ua([Zd(a.sel.primary(),b,d,e)],0),c)}function Df(a,b,d){for(var c=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)c[f]=Zd(a.sel.ranges[f],b[f],null,e);b=Ca(a.cm,c,a.sel.primIndex);da(a,b,d)}function $d(a,b,d,c){var e=a.sel.ranges.slice(0);e[b]=d;da(a,Ca(a.cm,e,a.sel.primIndex),c)}function ah(a,b,d){d={ranges:b.ranges,update:function(c){this.ranges=[];for(var e=0;e<c.length;e++)this.ranges[e]=
new J(C(a,c[e].anchor),C(a,c[e].head))},origin:d&&d.origin};X(a,"beforeSelectionChange",a,d);a.cm&&X(a.cm,"beforeSelectionChange",a.cm,d);return d.ranges!=b.ranges?Ca(a.cm,d.ranges,d.ranges.length-1):b}function Ef(a,b,d){var c=a.history.done,e=L(c);e&&e.ranges?(c[c.length-1]=b,Tc(a,b,d)):da(a,b,d)}function da(a,b,d){Tc(a,b,d);b=a.sel;var c=a.cm?a.cm.curOp.id:NaN,e=a.history,f=d&&d.origin,g;if(!(g=c==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=L(e.done);
var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Rc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=c;d&&!1!==d.clearRedo&&Af(e.undone)}function Tc(a,b,d){if(xa(a,"beforeSelectionChange")||a.cm&&xa(a.cm,"beforeSelectionChange"))b=ah(a,b,d);var c=d&&d.bias||(0>B(b.primary().head,a.sel.primary().head)?-1:1);Ff(a,Gf(a,
b,c,!0));d&&!1===d.scroll||!a.cm||vb(a.cm)}function Ff(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=1,a.cm.curOp.selectionChanged=!0,qe(a.cm)),ca(a,"cursorActivity",a))}function Hf(a){Ff(a,Gf(a,a.sel,null,!1))}function Gf(a,b,d,c){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==a.sel.ranges.length&&a.sel.ranges[f],k=Uc(a,g.anchor,h&&h.anchor,d,c);h=Uc(a,g.head,h&&h.head,d,c);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new J(k,h)}return e?
Ca(a.cm,e,b.primIndex):b}function zb(a,b,d,c,e){var f=w(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker,l="selectLeft"in k?!k.selectLeft:k.inclusiveLeft,m="selectRight"in k?!k.selectRight:k.inclusiveRight;if((null==h.from||(l?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(m?h.to>=b.ch:h.to>b.ch))){if(e&&(X(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;continue}else break;if(k.atomic){if(d){g=k.find(0>c?1:-1);h=void 0;if(0>c?m:l)g=
If(a,g,-c,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=B(g,d))&&(0>c?0>h:0<h))return zb(a,g,b,c,e)}d=k.find(0>c?-1:1);if(0>c?l:m)d=If(a,d,c,d.line==b.line?f:null);return d?zb(a,d,b,c,e):null}}}return b}function Uc(a,b,d,c,e){c=c||1;b=zb(a,b,d,c,e)||!e&&zb(a,b,d,c,!0)||zb(a,b,d,-c,e)||!e&&zb(a,b,d,-c,!0);return b?b:(a.cantEdit=!0,t(a.first,0))}function If(a,b,d,c){return 0>d&&0==b.ch?b.line>a.first?C(a,t(b.line-1)):null:0<d&&b.ch==(c||w(a,b.line)).text.length?b.line<a.first+a.size-1?t(b.line+
1,0):null:new t(b.line,b.ch+d)}function Jf(a){a.setSelection(t(a.firstLine(),0),t(a.lastLine()),Ia)}function Kf(a,b,d){var c={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return c.canceled=!0}};d&&(c.update=function(e,f,g,h){e&&(c.from=C(a,e));f&&(c.to=C(a,f));g&&(c.text=g);void 0!==h&&(c.origin=h)});X(a,"beforeChange",a,c);a.cm&&X(a.cm,"beforeChange",a.cm,c);return c.canceled?(a.cm&&(a.cm.curOp.updateInput=2),null):{from:c.from,to:c.to,text:c.text,origin:c.origin}}
function Ab(a,b,d){if(a.cm){if(!a.cm.curOp)return aa(a.cm,Ab)(a,b,d);if(a.cm.state.suppressEdits)return}if(xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange"))if(b=Kf(a,b,!0),!b)return;if(d=Lf&&!d&&Gg(a,b.from,b.to))for(var c=d.length-1;0<=c;--c)Mf(a,{from:d[c].from,to:d[c].to,text:c?[""]:b.text,origin:b.origin});else Mf(a,b)}function Mf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=B(b.from,b.to)){var d=Vd(a,b);Bf(a,b,d,a.cm?a.cm.curOp.id:NaN);ac(a,b,d,td(a,b));var c=[];Sa(a,function(e,f){f||-1!=ea(c,
e.history)||(Nf(e.history,b),c.push(e.history));ac(e,b,null,td(e,b))})}}function Vc(a,b,d){var c=a.cm&&a.cm.state.suppressEdits;if(!c||d){for(var e=a.history,f,g=a.sel,h="undo"==b?e.done:e.undone,k="undo"==b?e.undone:e.done,l=0;l<h.length&&(f=h[l],d?!f.ranges||f.equals(a.sel):f.ranges);l++);if(l!=h.length){for(e.lastOrigin=e.lastSelOrigin=null;;)if(f=h.pop(),f.ranges){Rc(f,k);if(d&&!f.equals(a.sel)){da(a,f,{clearRedo:!1});return}g=f}else{if(c){h.push(f);return}break}var m=[];Rc(g,k);k.push({changes:m,
generation:e.generation});e.generation=f.generation||++e.maxGeneration;var q=xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange");d=function(n){var p=f.changes[n];p.origin=b;if(q&&!Kf(a,p,!1))return h.length=0,{};m.push(Yd(a,p));var r=n?Vd(a,p):L(h);ac(a,p,r,Cf(a,p));!n&&a.cm&&a.cm.scrollIntoView({from:p.from,to:Ra(p)});var u=[];Sa(a,function(A,H){H||-1!=ea(u,A.history)||(Nf(A.history,p),u.push(A.history));ac(A,p,null,Cf(A,p))})};for(c=f.changes.length-1;0<=c;--c)if(e=d(c))return e.v}}}function Of(a,
b){if(0!=b&&(a.first+=b,a.sel=new ua(vc(a.sel.ranges,function(e){return new J(t(e.anchor.line+b,e.anchor.ch),t(e.head.line+b,e.head.ch))}),a.sel.primIndex),a.cm)){ma(a.cm,a.first,a.first-b,b);for(var d=a.cm.display,c=d.viewFrom;c<d.viewTo;c++)Qa(a.cm,c,"gutter")}}function ac(a,b,d,c){if(a.cm&&!a.cm.curOp)return aa(a.cm,ac)(a,b,d,c);if(b.to.line<a.first)Of(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);
Of(a,e);b={from:t(a.first,0),to:t(b.to.line+e,b.to.ch),text:[L(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:t(e,w(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=Za(a,b.from,b.to);d||(d=Vd(a,b));a.cm?bh(a.cm,b,c):Xd(a,b,c);Tc(a,d,Ia);a.cantEdit&&Uc(a,t(a.firstLine(),0))&&(a.cantEdit=!1)}}function bh(a,b,d){var c=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=O(Fa(w(c,f.line))),c.iter(k,g.line+1,function(l){if(l==e.maxLine)return h=
!0}));-1<c.sel.contains(b.from,b.to)&&qe(a);Xd(c,b,d,bf(a));a.options.lineWrapping||(c.iter(k,f.line+b.text.length,function(l){var m=Dc(l);m>e.maxLineLength&&(e.maxLine=l,e.maxLineLength=m,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));Fg(c,f.line);Wb(a,400);d=b.text.length-(g.line-f.line)-1;b.full?ma(a):f.line!=g.line||1!=b.text.length||wf(a.doc,b)?ma(a,f.line,g.line+1,d):Qa(a,f.line,"text");d=xa(a,"changes");if((c=xa(a,"change"))||d)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},
c&&ca(a,"change",a,b),d&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function Bb(a,b,d,c,e){c||(c=d);0>B(c,d)&&(c=[c,d],d=c[0],c=c[1]);"string"==typeof b&&(b=a.splitLines(b));Ab(a,{from:d,to:c,text:b,origin:e})}function Pf(a,b,d,c){d<a.line?a.line+=c:b<a.line&&(a.line=b,a.ch=0)}function Qf(a,b,d,c){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)Pf(f.ranges[g].anchor,b,d,c),
Pf(f.ranges[g].head,b,d,c);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(d<k.from.line)k.from=t(k.from.line+c,k.from.ch),k.to=t(k.to.line+c,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Nf(a,b){var d=b.from.line,c=b.to.line;b=b.text.length-(c-d)-1;Qf(a.done,d,c,b);Qf(a.undone,d,c,b)}function bc(a,b,d,c){var e=b,f=b;"number"==typeof b?f=w(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=O(b);if(null==e)return null;c(f,e)&&a.cm&&Qa(a.cm,e,d);return f}
function cc(a){this.lines=a;this.parent=null;for(var b=0,d=0;d<a.length;++d)a[d].parent=this,b+=a[d].height;this.height=b}function dc(a){this.children=a;for(var b=0,d=0,c=0;c<a.length;++c){var e=a[c];b+=e.chunkSize();d+=e.height;e.parent=this}this.size=b;this.height=d;this.parent=null}function ch(a,b,d,c){var e=new ec(a,d,c),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);bc(a,b,"widget",function(g){var h=g.widgets||(g.widgets=[]);null==e.insertAt?h.push(e):h.splice(Math.min(h.length-1,Math.max(0,
e.insertAt)),0,e);e.line=g;f&&!Oa(a,g)&&(h=Ga(g)<a.scrollTop,Da(g,g.height+Rb(e)),h&&Mc(f,e.height),f.curOp.forceUpdate=!0);return!0});f&&ca(f,"lineWidgetAdded",f,e,"number"==typeof b?b:O(b));return e}function Cb(a,b,d,c,e){if(c&&c.shared)return dh(a,b,d,c,e);if(a.cm&&!a.cm.curOp)return aa(a.cm,Cb)(a,b,d,c,e);var f=new Ta(a,e);e=B(b,d);c&&Xa(c,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=K("span",[f.replacedWith],"CodeMirror-widget"),c.handleMouseEvents||
f.widgetNode.setAttribute("cm-ignore-events","true"),c.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(Fe(a,b.line,b,d,f)||b.line!=d.line&&Fe(a,d.line,b,d,f))throw Error("Inserting collapsed marker partially overlapping an existing one");Ka=!0}f.addToHistory&&Bf(a,{from:b,to:d,origin:"markText"},a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,d.line+1,function(l){h&&f.collapsed&&!h.options.lineWrapping&&Fa(l)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&Da(l,0);var m=new Cc(f,g==b.line?
b.ch:null,g==d.line?d.ch:null);l.markedSpans=l.markedSpans?l.markedSpans.concat([m]):[m];m.marker.attachLine(l);++g});f.collapsed&&a.iter(b.line,d.line+1,function(l){Oa(a,l)&&Da(l,0)});f.clearOnEnter&&z(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(Lf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Rf,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)ma(h,b.line,d.line+1);else if(f.className||f.startStyle||f.endStyle||f.css||
f.attributes||f.title)for(c=b.line;c<=d.line;c++)Qa(h,c,"text");f.atomic&&Hf(h.doc);ca(h,"markerAdded",h,f)}return f}function dh(a,b,d,c,e){c=Xa(c);c.shared=!1;var f=[Cb(a,b,d,c,e)],g=f[0],h=c.widgetNode;Sa(a,function(k){h&&(c.widgetNode=h.cloneNode(!0));f.push(Cb(k,C(k,b),C(k,d),c,e));for(var l=0;l<k.linked.length;++l)if(k.linked[l].isParent)return;g=L(f)});return new fc(f,g)}function Sf(a){return a.findMarks(t(a.first,0),a.clipPos(t(a.lastLine())),function(b){return b.parent})}function eh(a){for(var b=
function(c){c=a[c];var e=[c.primary.doc];Sa(c.primary.doc,function(h){return e.push(h)});for(var f=0;f<c.markers.length;f++){var g=c.markers[f];-1==ea(e,g.doc)&&(g.parent=null,c.markers.splice(f--,1))}},d=0;d<a.length;d++)b(d)}function fh(a){var b=this;Tf(b);if(!Z(b,a)&&!La(b.display,a)){la(a);G&&(Uf=+new Date);var d=eb(b,a,!0),c=a.dataTransfer.files;if(d&&!b.isReadOnly())if(c&&c.length&&window.FileReader&&window.File)for(var e=c.length,f=Array(e),g=0,h=function(){++g==e&&aa(b,function(){d=C(b.doc,
d);var m={from:d,to:d,text:b.doc.splitLines(f.filter(function(q){return null!=q}).join(b.doc.lineSeparator())),origin:"paste"};Ab(b.doc,m);Ef(b.doc,Na(C(b.doc,d),C(b.doc,Ra(m))))})()},k=function(m,q){if(b.options.allowDropFileTypes&&-1==ea(b.options.allowDropFileTypes,m.type))h();else{var n=new FileReader;n.onerror=function(){return h()};n.onload=function(){var p=n.result;/[\x00-\x08\x0e-\x1f]{2}/.test(p)||(f[q]=p);h()};n.readAsText(m)}},l=0;l<c.length;l++)k(c[l],l);else if(b.state.draggingText&&
-1<b.doc.sel.contains(d))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(k=a.dataTransfer.getData("Text")){b.state.draggingText&&!b.state.draggingText.copy&&(l=b.listSelections());Tc(b.doc,Na(d,d));if(l)for(c=0;c<l.length;++c)Bb(b.doc,"",l[c].anchor,l[c].head,"drag");b.replaceSelection(k,"around","paste");b.display.input.focus()}}catch(m){}}}function Tf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=
null)}function Vf(a){if(document.getElementsByClassName){for(var b=document.getElementsByClassName("CodeMirror"),d=[],c=0;c<b.length;c++){var e=b[c].CodeMirror;e&&d.push(e)}d.length&&d[0].operation(function(){for(var f=0;f<d.length;f++)a(d[f])})}}function gh(){var a;z(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null;Vf(hh)},100))});z(window,"blur",function(){return Vf(ub)})}function hh(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null;b.scrollbarsClipped=
!1;a.setSize()}function ih(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var d,c,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))d=!0;else if(/^(c|ctrl|control)$/i.test(h))c=!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}d&&(a="Alt-"+a);c&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function jh(a){var b={},d;for(d in a)if(a.hasOwnProperty(d)){var c=a[d];if(!/^(name|fallthrough|(de|at)tach)$/.test(d)){if("..."!=
c)for(var e=vc(d.split(" "),ih),f=0;f<e.length;f++){if(f==e.length-1){var g=e.join(" ");var h=c}else g=e.slice(0,f+1).join(" "),h="...";var k=b[g];if(!k)b[g]=h;else if(k!=h)throw Error("Inconsistent bindings for "+g);}delete a[d]}}for(var l in b)a[l]=b[l];return a}function Db(a,b,d,c){b=Wc(b);var e=b.call?b.call(a,c):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&d(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Db(a,
b.fallthrough,d,c);for(e=0;e<b.fallthrough.length;e++){var f=Db(a,b.fallthrough[e],d,c);if(f)return f}}}function Wf(a){a="string"==typeof a?a:Ua[a.keyCode];return"Ctrl"==a||"Alt"==a||"Shift"==a||"Mod"==a}function Xf(a,b,d){var c=a;b.altKey&&"Alt"!=c&&(a="Alt-"+a);(Yf?b.metaKey:b.ctrlKey)&&"Ctrl"!=c&&(a="Ctrl-"+a);(Yf?b.ctrlKey:b.metaKey)&&"Mod"!=c&&(a="Cmd-"+a);!d&&b.shiftKey&&"Shift"!=c&&(a="Shift-"+a);return a}function Zf(a,b){if(Ba&&34==a.keyCode&&a["char"])return!1;var d=Ua[a.keyCode];if(null==
d||a.altGraphKey)return!1;3==a.keyCode&&a.code&&(d=a.code);return Xf(d,a,b)}function Wc(a){return"string"==typeof a?gc[a]:a}function Eb(a,b){for(var d=a.doc.sel.ranges,c=[],e=0;e<d.length;e++){for(var f=b(d[e]);c.length&&0>=B(f.from,L(c).to);){var g=c.pop();if(0>B(g.from,f.from)){f.from=g.from;break}}c.push(f)}pa(a,function(){for(var h=c.length-1;0<=h;h--)Bb(a.doc,"",c[h].from,c[h].to,"+delete");vb(a)})}function ae(a,b,d){b=pe(a.text,b+d,d);return 0>b||b>a.text.length?null:b}function be(a,b,d){a=
ae(a,b.ch,d);return null==a?null:new t(b.line,a,0>d?"after":"before")}function ce(a,b,d,c,e){if(a&&("rtl"==b.doc.direction&&(e=-e),a=Ja(d,b.doc.direction))){a=0>e?L(a):a[0];var f=0>e==(1==a.level)?"after":"before";if(0<a.level||"rtl"==b.doc.direction){var g=cb(b,d);var h=0>e?d.text.length-1:0;var k=za(b,g,h).top;h=Hb(function(l){return za(b,g,l).top==k},0>e==(1==a.level)?a.from:a.to-1,h);"before"==f&&(h=ae(d,h,1))}else h=0>e?a.to:a.from;return new t(c,h,f)}return new t(c,0>e?d.text.length:0,0>e?"before":
"after")}function kh(a,b,d,c){var e=Ja(b,a.doc.direction);if(!e)return be(b,d,c);d.ch>=b.text.length?(d.ch=b.text.length,d.sticky="before"):0>=d.ch&&(d.ch=0,d.sticky="after");var f=Ib(e,d.ch,d.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<c?g.to>d.ch:g.from<d.ch))return be(b,d,c);var h=function(p,r){return ae(b,p instanceof t?p.ch:p,r)},k,l=function(p){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||cb(a,b);return af(a,b,k,p)},m=l("before"==d.sticky?h(d,-1):d.ch);if("rtl"==
a.doc.direction||1==g.level){var q=1==g.level==0>c,n=h(d,q?1:-1);if(null!=n&&(q?n<=g.to&&n<=m.end:n>=g.from&&n>=m.begin))return new t(d.line,n,q?"before":"after")}g=function(p,r,u){for(var A=function(M,R){return R?new t(d.line,h(M,1),"before"):new t(d.line,M,"after")};0<=p&&p<e.length;p+=r){var H=e[p],x=0<r==(1!=H.level),Q=x?u.begin:h(u.end,-1);if(H.from<=Q&&Q<H.to)return A(Q,x);Q=x?H.from:h(H.to,-1);if(u.begin<=Q&&Q<u.end)return A(Q,x)}};if(f=g(f+c,c,m))return f;m=0<c?m.end:h(m.begin,-1);return null==
m||0<c&&m==b.text.length||!(f=g(0<c?0:e.length-1,c,l(m)))?null:f}function $f(a,b){var d=w(a.doc,b),c=Fa(d);c!=d&&(b=O(c));return ce(!0,a,c,b,1)}function ag(a,b){var d=$f(a,b.line),c=w(a.doc,d.line);a=Ja(c,a.doc.direction);return a&&0!=a[0].level?d:(c=Math.max(d.ch,c.text.search(/\S/)),t(d.line,b.line==d.line&&b.ch<=c&&b.ch?0:c,d.sticky))}function Xc(a,b,d){if("string"==typeof b&&(b=hc[b],!b))return!1;a.display.input.ensurePolled();var c=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=
!0),d&&(a.display.shift=!1),e=b(a)!=Yc}finally{a.display.shift=c,a.state.suppressEdits=!1}return e}function ic(a,b,d,c){var e=a.state.keySeq;if(e){if(Wf(b))return"handled";/'$/.test(b)?a.state.keySeq=null:lh.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});if(bg(a,e+" "+b,d,c))return!0}return bg(a,b,d,c)}function bg(a,b,d,c){a:{for(var e=0;e<a.state.keyMaps.length;e++){var f=Db(b,a.state.keyMaps[e],c,a);if(f){c=f;break a}}c=a.options.extraKeys&&Db(b,a.options.extraKeys,
c,a)||Db(b,a.options.keyMap,c,a)}"multi"==c&&(a.state.keySeq=b);"handled"==c&&ca(a,"keyHandled",a,b,d);if("handled"==c||"multi"==c)la(d),Nd(a);return!!c}function cg(a,b){var d=Zf(b,!0);return d?b.shiftKey&&!a.state.keySeq?ic(a,"Shift-"+d,b,function(c){return Xc(a,c,!0)})||ic(a,d,b,function(c){if("string"==typeof c?/^go[A-Z]/.test(c):c.motion)return Xc(a,c)}):ic(a,d,b,function(c){return Xc(a,c)}):!1}function mh(a,b,d){return ic(a,"'"+d+"'",b,function(c){return Xc(a,c,!0)})}function dg(a){if(!a.target||
a.target==this.display.input.getField())if(this.curOp.focus=va(),!Z(this,a)){G&&11>U&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var d=cg(this,a);Ba&&(de=d?b:null,!d&&88==b&&!nh&&(ya?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));Ma&&!ya&&!d&&46==b&&a.shiftKey&&!a.ctrlKey&&document.execCommand&&document.execCommand("cut");18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||oh(this)}}function oh(a){function b(c){18!=c.keyCode&&
c.altKey||(hb(d,"CodeMirror-crosshair"),ra(document,"keyup",b),ra(document,"mouseover",b))}var d=a.display.lineDiv;Wa(d,"CodeMirror-crosshair");z(document,"keyup",b);z(document,"mouseover",b)}function eg(a){16==a.keyCode&&(this.doc.sel.shift=!1);Z(this,a)}function fg(a){if(!(a.target&&a.target!=this.display.input.getField()||La(this.display,a)||Z(this,a)||a.ctrlKey&&!a.altKey||ya&&a.metaKey)){var b=a.keyCode,d=a.charCode;if(Ba&&b==de)de=null,la(a);else if(!Ba||a.which&&!(10>a.which)||!cg(this,a))if(b=
String.fromCharCode(null==d?b:d),"\b"!=b&&!mh(this,a,b))this.display.input.onKeyPress(a)}}function ph(a,b){var d=+new Date;if(jc&&jc.compare(d,a,b))return kc=jc=null,"triple";if(kc&&kc.compare(d,a,b))return jc=new ee(d,a,b),kc=null,"double";kc=new ee(d,a,b);jc=null;return"single"}function gg(a){var b=this.display;if(!(Z(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,La(b,a))fa||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=
!0},100));else if(!Zc(this,a,"gutterClick",!0)){var d=eb(this,a),c=se(a),e=d?ph(d,c):"single";window.focus();1==c&&this.state.selectingText&&this.state.selectingText(a);if(!d||!qh(this,c,d,e,a))if(1==c)d?rh(this,d,e,a):(a.target||a.srcElement)==b.scroller&&la(a);else if(2==c)d&&Sc(this.doc,d),setTimeout(function(){return b.input.focus()},20);else if(3==c)if(fe)this.display.input.onContextMenu(a);else gf(this)}}function qh(a,b,d,c,e){var f="Click";"double"==c?f="Double"+f:"triple"==c&&(f="Triple"+
f);return ic(a,Xf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(g){"string"==typeof g&&(g=hc[g]);if(!g)return!1;var h=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),h=g(a,d)!=Yc}finally{a.state.suppressEdits=!1}return h})}function rh(a,b,d,c){G?setTimeout(dd(ff,a),0):a.curOp.focus=va();var e=a.getOption("configureMouse");e=e?e(a,d,c):{};null==e.unit&&(e.unit=(sh?c.shiftKey&&c.metaKey:c.altKey)?"rectangle":"single"==d?"char":"double"==d?"word":"line");if(null==e.extend||a.doc.extend)e.extend=
a.doc.extend||c.shiftKey;null==e.addNew&&(e.addNew=ya?c.metaKey:c.ctrlKey);null==e.moveOnDrag&&(e.moveOnDrag=!(ya?c.altKey:c.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&th&&!a.isReadOnly()&&"single"==d&&-1<(g=f.contains(b))&&(0>B((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<B(g.to(),b)||0>b.xRel)?uh(a,c,b,e):vh(a,c,b,e)}function uh(a,b,d,c){var e=a.display,f=!1,g=aa(a,function(l){fa&&(e.scroller.draggable=!1);a.state.draggingText=!1;ra(e.wrapper.ownerDocument,"mouseup",g);ra(e.wrapper.ownerDocument,
"mousemove",h);ra(e.scroller,"dragstart",k);ra(e.scroller,"drop",g);f||(la(l),c.addNew||Sc(a.doc,d,null,null,c.extend),fa&&!ge||G&&9==U?setTimeout(function(){e.wrapper.ownerDocument.body.focus({preventScroll:!0});e.input.focus()},20):e.input.focus())}),h=function(l){f=f||10<=Math.abs(b.clientX-l.clientX)+Math.abs(b.clientY-l.clientY)},k=function(){return f=!0};fa&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!c.moveOnDrag;e.scroller.dragDrop&&e.scroller.dragDrop();z(e.wrapper.ownerDocument,
"mouseup",g);z(e.wrapper.ownerDocument,"mousemove",h);z(e.scroller,"dragstart",k);z(e.scroller,"drop",g);gf(a);setTimeout(function(){return e.input.focus()},20)}function hg(a,b,d){if("char"==d)return new J(b,b);if("word"==d)return a.findWordAt(b);if("line"==d)return new J(t(b.line,0),C(a.doc,t(b.line+1,0)));a=d(a,b);return new J(a.from,a.to)}function vh(a,b,d,c){function e(x){if(0!=B(p,x))if(p=x,"rectangle"==c.unit){var Q=[],M=a.options.tabSize,R=wa(w(k,d.line).text,d.ch,M),T=wa(w(k,x.line).text,
x.ch,M),F=Math.min(R,T);R=Math.max(R,T);T=Math.min(d.line,x.line);for(var S=Math.min(a.lastLine(),Math.max(d.line,x.line));T<=S;T++){var I=w(k,T).text,N=ed(I,F,M);F==R?Q.push(new J(t(T,N),t(T,N))):I.length>N&&Q.push(new J(t(T,N),t(T,ed(I,R,M))))}Q.length||Q.push(new J(d,d));da(k,Ca(a,l.ranges.slice(0,q).concat(Q),q),{origin:"*mouse",scroll:!1});a.scrollIntoView(x)}else Q=n,F=hg(a,x,c.unit),x=Q.anchor,0<B(F.anchor,x)?(M=F.head,x=Ac(Q.from(),F.anchor)):(M=F.anchor,x=zc(Q.to(),F.head)),Q=l.ranges.slice(0),
Q[q]=wh(a,new J(C(k,x),M)),da(k,Ca(a,Q,q),he)}function f(x){var Q=++u,M=eb(a,x,!0,"rectangle"==c.unit);if(M)if(0!=B(M,p)){a.curOp.focus=va();e(M);var R=Lc(h,k);(M.line>=R.to||M.line<R.from)&&setTimeout(aa(a,function(){u==Q&&f(x)}),150)}else{var T=x.clientY<r.top?-20:x.clientY>r.bottom?20:0;T&&setTimeout(aa(a,function(){u==Q&&(h.scroller.scrollTop+=T,f(x))}),50)}}function g(x){a.state.selectingText=!1;u=Infinity;x&&(la(x),h.input.focus());ra(h.wrapper.ownerDocument,"mousemove",A);ra(h.wrapper.ownerDocument,
"mouseup",H);k.history.lastSelOrigin=null}var h=a.display,k=a.doc;la(b);var l=k.sel,m=l.ranges;if(c.addNew&&!c.extend){var q=k.sel.contains(d);var n=-1<q?m[q]:new J(d,d)}else n=k.sel.primary(),q=k.sel.primIndex;"rectangle"==c.unit?(c.addNew||(n=new J(d,d)),d=eb(a,b,!0,!0),q=-1):(b=hg(a,d,c.unit),n=c.extend?Zd(n,b.anchor,b.head,c.extend):b);c.addNew?-1==q?(q=m.length,da(k,Ca(a,m.concat([n]),q),{scroll:!1,origin:"*mouse"})):1<m.length&&m[q].empty()&&"char"==c.unit&&!c.extend?(da(k,Ca(a,m.slice(0,q).concat(m.slice(q+
1)),0),{scroll:!1,origin:"*mouse"}),l=k.sel):$d(k,q,n,he):(q=0,da(k,new ua([n],0),he),l=k.sel);var p=d,r=h.wrapper.getBoundingClientRect(),u=0,A=aa(a,function(x){0!==x.buttons&&se(x)?f(x):g(x)}),H=aa(a,g);a.state.selectingText=H;z(h.wrapper.ownerDocument,"mousemove",A);z(h.wrapper.ownerDocument,"mouseup",H)}function wh(a,b){var d=b.anchor,c=b.head,e=w(a.doc,d.line);if(0==B(d,c)&&d.sticky==c.sticky)return b;e=Ja(e);if(!e)return b;var f=Ib(e,d.ch,d.sticky),g=e[f];if(g.from!=d.ch&&g.to!=d.ch)return b;
var h=f+(g.from==d.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;c.line!=d.line?a=0<(c.line-d.line)*("ltr"==a.doc.direction?1:-1):(a=Ib(e,c.ch,c.sticky),f=a-f||(c.ch-d.ch)*(1==g.level?-1:1),a=a==h-1||a==h?0>f:0<f);e=e[h+(a?-1:0)];e=(h=a==(1==e.level))?e.from:e.to;h=h?"after":"before";return d.ch==e&&d.sticky==h?b:new J(new t(d.line,e,h),c)}function Zc(a,b,d,c){if(b.touches){var e=b.touches[0].clientX;var f=b.touches[0].clientY}else try{e=b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;
c&&la(b);c=a.display;var g=c.lineDiv.getBoundingClientRect();if(f>g.bottom||!xa(a,d))return id(b);f-=g.top-c.viewOffset;for(g=0;g<a.display.gutterSpecs.length;++g){var h=c.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=e)return e=$a(a.doc,f),X(a,d,a,e,a.display.gutterSpecs[g].className,b),id(b)}}function ig(a,b){var d;(d=La(a.display,b))||(d=xa(a,"gutterContextMenu")?Zc(a,b,"gutterContextMenu",!1):!1);if(!d&&!Z(a,b,"contextmenu")&&!fe)a.display.input.onContextMenu(b)}function jg(a){a.display.wrapper.className=
a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Sb(a)}function xh(a,b,d){!b!=!(d&&d!=Fb)&&(d=a.display.dragFunctions,b=b?z:ra,b(a.display.scroller,"dragstart",d.start),b(a.display.scroller,"dragenter",d.enter),b(a.display.scroller,"dragover",d.over),b(a.display.scroller,"dragleave",d.leave),b(a.display.scroller,"drop",d.drop))}function yh(a){a.options.lineWrapping?(Wa(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=
null):(hb(a.display.wrapper,"CodeMirror-wrap"),xd(a));Ld(a);ma(a);Sb(a);setTimeout(function(){return wb(a)},100)}function V(a,b){var d=this;if(!(this instanceof V))return new V(a,b);this.options=b=b?Xa(b):{};Xa(kg,b,!1);var c=b.value;"string"==typeof c?c=new oa(c,b.mode,null,b.lineSeparator,b.direction):b.mode&&(c.modeOption=b.mode);this.doc=c;var e=new V.inputStyles[b.inputStyle](this);a=this.display=new Xg(a,c,e,b);a.wrapper.CodeMirror=this;jg(this);b.lineWrapping&&(this.display.wrapper.className+=
" CodeMirror-wrap");nf(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Va,keySeq:null,specialChars:null};b.autofocus&&!Zb&&a.input.focus();G&&11>U&&setTimeout(function(){return d.display.input.reset(!0)},20);zh(this);lg||(gh(),lg=!0);jb(this);this.curOp.forceUpdate=!0;xf(this,c);b.autofocus&&!Zb||this.hasFocus()?setTimeout(function(){d.hasFocus()&&!d.state.focused&&
Od(d)},20):ub(this);for(var f in $c)if($c.hasOwnProperty(f))$c[f](this,b[f],Fb);qf(this);b.finishInit&&b.finishInit(this);for(c=0;c<ie.length;++c)ie[c](this);kb(this);fa&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function zh(a){function b(){c.activeTouch&&(e=setTimeout(function(){return c.activeTouch=null},1E3),f=c.activeTouch,f.end=+new Date)}function d(h,k){if(null==k.left)return!0;var l=k.left-h.left;h=k.top-h.top;return 400<
l*l+h*h}var c=a.display;z(c.scroller,"mousedown",aa(a,gg));G&&11>U?z(c.scroller,"dblclick",aa(a,function(h){if(!Z(a,h)){var k=eb(a,h);!k||Zc(a,h,"gutterClick",!0)||La(a.display,h)||(la(h),h=a.findWordAt(k),Sc(a.doc,h.anchor,h.head))}})):z(c.scroller,"dblclick",function(h){return Z(a,h)||la(h)});z(c.scroller,"contextmenu",function(h){return ig(a,h)});z(c.input.getField(),"contextmenu",function(h){c.scroller.contains(h.target)||ig(a,h)});var e,f={end:0};z(c.scroller,"touchstart",function(h){var k;if(k=
!Z(a,h))1!=h.touches.length?k=!1:(k=h.touches[0],k=1>=k.radiusX&&1>=k.radiusY),k=!k;k&&!Zc(a,h,"gutterClick",!0)&&(c.input.ensurePolled(),clearTimeout(e),k=+new Date,c.activeTouch={start:k,moved:!1,prev:300>=k-f.end?f:null},1==h.touches.length&&(c.activeTouch.left=h.touches[0].pageX,c.activeTouch.top=h.touches[0].pageY))});z(c.scroller,"touchmove",function(){c.activeTouch&&(c.activeTouch.moved=!0)});z(c.scroller,"touchend",function(h){var k=c.activeTouch;if(k&&!La(c,h)&&null!=k.left&&!k.moved&&300>
new Date-k.start){var l=a.coordsChar(c.activeTouch,"page");k=!k.prev||d(k,k.prev)?new J(l,l):!k.prev.prev||d(k,k.prev.prev)?a.findWordAt(l):new J(t(l.line,0),C(a.doc,t(l.line+1,0)));a.setSelection(k.anchor,k.head);a.focus();la(h)}b()});z(c.scroller,"touchcancel",b);z(c.scroller,"scroll",function(){c.scroller.clientHeight&&(Vb(a,c.scroller.scrollTop),ib(a,c.scroller.scrollLeft,!0),X(a,"scroll",a))});z(c.scroller,"mousewheel",function(h){return tf(a,h)});z(c.scroller,"DOMMouseScroll",function(h){return tf(a,
h)});z(c.wrapper,"scroll",function(){return c.wrapper.scrollTop=c.wrapper.scrollLeft=0});c.dragFunctions={enter:function(h){Z(a,h)||Kb(h)},over:function(h){if(!Z(a,h)){var k=eb(a,h);if(k){var l=document.createDocumentFragment();ef(a,k,l);a.display.dragCursor||(a.display.dragCursor=v("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,a.display.cursorDiv));D(a.display.dragCursor,l)}Kb(h)}},start:function(h){if(G&&(!a.state.draggingText||100>
+new Date-Uf))Kb(h);else if(!Z(a,h)&&!La(a.display,h)&&(h.dataTransfer.setData("Text",a.getSelection()),h.dataTransfer.effectAllowed="copyMove",h.dataTransfer.setDragImage&&!ge)){var k=v("img",null,null,"position: fixed; left: 0; top: 0;");k.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Ba&&(k.width=k.height=1,a.display.wrapper.appendChild(k),k._top=k.offsetTop);h.dataTransfer.setDragImage(k,0,0);Ba&&k.parentNode.removeChild(k)}},drop:aa(a,fh),leave:function(h){Z(a,
h)||Tf(a)}};var g=c.input.getField();z(g,"keyup",function(h){return eg.call(a,h)});z(g,"keydown",aa(a,dg));z(g,"keypress",aa(a,fg));z(g,"focus",function(h){return Od(a,h)});z(g,"blur",function(h){return ub(a,h)})}function lc(a,b,d,c){var e=a.doc,f;null==d&&(d="add");"smart"==d&&(e.mode.indent?f=Mb(a,b).state:d="prev");var g=a.options.tabSize,h=w(e,b),k=wa(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var l=h.text.match(/^\s*/)[0];if(!c&&!/\S/.test(h.text)){var m=0;d="not"}else if("smart"==d&&(m=
e.mode.indent(f,h.text.slice(l.length),h.text),m==Yc||150<m)){if(!c)return;d="prev"}"prev"==d?m=b>e.first?wa(w(e,b-1).text,null,g):0:"add"==d?m=k+a.options.indentUnit:"subtract"==d?m=k-a.options.indentUnit:"number"==typeof d&&(m=k+d);m=Math.max(0,m);d="";c=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)c+=g,d+="\t";c<m&&(d+=fd(m-c));if(d!=l)return Bb(e,d,t(b,0),t(b,l.length),"+input"),h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<
l.length){b=t(b,l.length);$d(e,g,new J(b,b));break}}function je(a,b,d,c,e){var f=a.doc;a.display.shift=!1;c||(c=f.sel);var g=+new Date-200,h="paste"==e||a.state.pasteIncoming>g,k=ke(b),l=null;if(h&&1<c.ranges.length)if(qa&&qa.text.join("\n")==b){if(0==c.ranges.length%qa.text.length){l=[];for(var m=0;m<qa.text.length;m++)l.push(f.splitLines(qa.text[m]))}}else k.length==c.ranges.length&&a.options.pasteLinesPerSelection&&(l=vc(k,function(u){return[u]}));m=a.curOp.updateInput;for(var q=c.ranges.length-
1;0<=q;q--){var n=c.ranges[q],p=n.from(),r=n.to();n.empty()&&(d&&0<d?p=t(p.line,p.ch-d):a.state.overwrite&&!h?r=t(r.line,Math.min(w(f,r.line).text.length,r.ch+L(k).length)):h&&qa&&qa.lineWise&&qa.text.join("\n")==k.join("\n")&&(p=r=t(p.line,0)));n={from:p,to:r,text:l?l[q%l.length]:k,origin:e||(h?"paste":a.state.cutIncoming>g?"cut":"+input")};Ab(a.doc,n);ca(a,"inputRead",a,n)}b&&!h&&mg(a,b);vb(a);2>a.curOp.updateInput&&(a.curOp.updateInput=m);a.curOp.typing=!0;a.state.pasteIncoming=a.state.cutIncoming=
-1}function ng(a,b){var d=a.clipboardData&&a.clipboardData.getData("Text");if(d)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||pa(b,function(){return je(b,d,0,null,"paste")}),!0}function mg(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var d=a.doc.sel,c=d.ranges.length-1;0<=c;c--){var e=d.ranges[c];if(!(100<e.head.ch||c&&d.ranges[c-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars)for(var h=0;h<f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=
lc(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(w(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=lc(a,e.head.line,"smart"));g&&ca(a,"electricInput",a,e.head.line)}}}function og(a){for(var b=[],d=[],c=0;c<a.doc.sel.ranges.length;c++){var e=a.doc.sel.ranges[c].head.line;e={anchor:t(e,0),head:t(e+1,0)};d.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,ranges:d}}function pg(a,b,d,c){a.setAttribute("autocorrect",d?"":"off");a.setAttribute("autocapitalize",c?"":"off");
a.setAttribute("spellcheck",!!b)}function qg(){var a=v("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),b=v("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");fa?a.style.width="1000px":a.setAttribute("wrap","off");mc&&(a.style.border="1px solid black");pg(a);return b}function le(a,b,d,c,e){function f(u){if("codepoint"==c){var A=k.text.charCodeAt(b.ch+(0<c?0:-1));A=isNaN(A)?null:new t(b.line,Math.max(0,Math.min(k.text.length,
b.ch+d*(55296<=A&&56320>A?2:1))),-d)}else A=e?kh(a.cm,k,b,d):be(k,b,d);if(null==A){if(u=!u)u=b.line+l,u<a.first||u>=a.first+a.size?u=!1:(b=new t(u,b.ch,b.sticky),u=k=w(a,u));if(u)b=ce(e,a.cm,k,b.line,l);else return!1}else b=A;return!0}var g=b,h=d,k=w(a,b.line),l=e&&"rtl"==a.direction?-d:d;if("char"==c||"codepoint"==c)f();else if("column"==c)f(!0);else if("word"==c||"group"==c)for(var m=null,q="group"==c,n=a.cm&&a.cm.getHelper(b,"wordChars"),p=!0;!(0>d)||f(!p);p=!1){var r=k.text.charAt(b.ch)||"\n";
r=wc(r,n)?"w":q&&"\n"==r?"n":!q||/\s/.test(r)?null:"p";!q||p||r||(r="s");if(m&&m!=r){0>d&&(d=1,f(),b.sticky="after");break}r&&(m=r);if(0<d&&!f(!p))break}h=Uc(a,b,g,h,!0);pd(g,h)&&(h.hitSide=!0);return h}function rg(a,b,d,c){var e=a.doc,f=b.left;if("page"==c){var g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-.5*tb(a.display),3);g=(0<d?b.bottom:b.top)+d*g}else"line"==c&&(g=0<d?b.bottom+3:b.top-3);for(;;){b=Id(a,f,g);if(!b.outside)break;
if(0>d?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*d}return b}function sg(a,b){var d=Cd(a,b.line);if(!d||d.hidden)return null;var c=w(a.doc,b.line);d=Re(d,c,b.line);a=Ja(c,a.doc.direction);c="left";a&&(c=Ib(a,b.ch)%2?"right":"left");b=Se(d.map,b.ch,c);b.offset="right"==b.collapse?b.end:b.start;return b}function Ah(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;return!1}function Gb(a,b){b&&(a.bad=!0);return a}function Bh(a,b,d,c,e){function f(p){return function(r){return r.id==
p}}function g(){m&&(l+=q,n&&(l+=q),m=n=!1)}function h(p){p&&(g(),l+=p)}function k(p){if(1==p.nodeType){var r=p.getAttribute("cm-text");if(r)h(r);else{r=p.getAttribute("cm-marker");var u;if(r)p=a.findMarks(t(c,0),t(e+1,0),f(+r)),p.length&&(u=p[0].find(0))&&h(Za(a.doc,u.from,u.to).join(q));else if("false"!=p.getAttribute("contenteditable")&&(u=/^(pre|div|p|li|table|br)$/i.test(p.nodeName),/^br$/i.test(p.nodeName)||0!=p.textContent.length)){u&&g();for(r=0;r<p.childNodes.length;r++)k(p.childNodes[r]);
/^(pre|p)$/i.test(p.nodeName)&&(n=!0);u&&(m=!0)}}}else 3==p.nodeType&&h(p.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var l="",m=!1,q=a.doc.lineSeparator(),n=!1;;){k(b);if(b==d)break;b=b.nextSibling;n=!1}return l}function ad(a,b,d){if(b==a.display.lineDiv){var c=a.display.lineDiv.childNodes[d];if(!c)return Gb(a.clipPos(t(a.display.viewTo-1)),!0);b=null;d=0}else for(c=b;;c=c.parentNode){if(!c||c==a.display.lineDiv)return null;if(c.parentNode&&c.parentNode==a.display.lineDiv)break}for(var e=
0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==c)return Ch(f,b,d)}}function Ch(a,b,d){function c(m,q,n){for(var p=-1;p<(l?l.length:0);p++)for(var r=0>p?k.map:l[p],u=0;u<r.length;u+=3){var A=r[u+2];if(A==m||A==q){q=O(0>p?a.line:a.rest[p]);p=r[u]+n;if(0>n||A!=m)p=r[u+(n?1:0)];return t(q,p)}}}var e=a.text.firstChild,f=!1;if(!b||!ka(e,b))return Gb(t(O(a.line),0),!0);if(b==e&&(f=!0,b=e.childNodes[d],d=0,!b))return d=a.rest?L(a.rest):a.line,Gb(t(O(d),d.text.length),f);var g=3==b.nodeType?
b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,d&&(d=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=c(g,h,d))return Gb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-d:0;e;e=e.nextSibling){if(b=c(e,e.firstChild,0))return Gb(t(b.line,b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=c(h,h.firstChild,-1))return Gb(t(b.line,b.ch+d),f);d+=h.textContent.length}}var ja=navigator.userAgent,tg=
navigator.platform,Ma=/gecko\/\d/i.test(ja),ug=/MSIE \d/.test(ja),vg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ja),nc=/Edge\/(\d+)/.exec(ja),G=ug||vg||nc,U=G&&(ug?document.documentMode||6:+(nc||vg)[1]),fa=!nc&&/WebKit\//.test(ja),Dh=fa&&/Qt\/\d+\.\d+/.test(ja),Fc=!nc&&/Chrome\//.test(ja),Ba=/Opera\//.test(ja),ge=/Apple Computer/.test(navigator.vendor),Eh=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ja),Ug=/PhantomJS/.test(ja),mc=!nc&&/AppleWebKit/.test(ja)&&/Mobile\/\w+/.test(ja),Gc=/Android/.test(ja),
Zb=mc||Gc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ja),ya=mc||/Mac/.test(tg),sh=/\bCrOS\b/.test(ja),Fh=/win/i.test(tg),lb=Ba&&ja.match(/Version\/(\d*\.\d*)/);lb&&(lb=Number(lb[1]));lb&&15<=lb&&(Ba=!1,fa=!0);var Yf=ya&&(Dh||Ba&&(null==lb||12.11>lb)),fe=Ma||G&&9<=U,hb=function(a,b){var d=a.className;if(b=y(b).exec(d)){var c=d.slice(b.index+b[0].length);a.className=d.slice(0,b.index)+(c?b[1]+c:"")}};var Ob=document.createRange?function(a,b,d,c){var e=document.createRange();e.setEnd(c||
a,d);e.setStart(a,b);return e}:function(a,b,d){var c=document.body.createTextRange();try{c.moveToElementText(a.parentNode)}catch(e){return c}c.collapse(!0);c.moveEnd("character",d);c.moveStart("character",b);return c};var oc=function(a){a.select()};mc?oc=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:G&&(oc=function(a){try{a.select()}catch(b){}});var Va=function(){this.f=this.id=null;this.time=0;this.handler=dd(this.onTimeout,this)};Va.prototype.onTimeout=function(a){a.id=0;a.time<=
+new Date?a.f():setTimeout(a.handler,a.time-+new Date)};Va.prototype.set=function(a,b){this.f=b;b=+new Date+a;if(!this.id||b<this.time)clearTimeout(this.id),this.id=setTimeout(this.handler,a),this.time=b};var Yc={toString:function(){return"CodeMirror.Pass"}},Ia={scroll:!1},he={origin:"*mouse"},pc={origin:"+move"},uc=[""],xg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,yg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
Jb=null,Ag=function(){function a(h){return 247>=h?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(h):1424<=h&&1524>=h?"R":1536<=h&&1785>=h?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(h-
1536):1774<=h&&2220>=h?"r":8192<=h&&8203>=h?"w":8204==h?"b":"L"}function b(h,k,l){this.level=h;this.from=k;this.to=l}var d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,c=/[stwN]/,e=/[LRr]/,f=/[Lb1n]/,g=/[1n]/;return function(h,k){var l="ltr"==k?"L":"R";if(0==h.length||"ltr"==k&&!d.test(h))return!1;for(var m=h.length,q=[],n=0;n<m;++n)q.push(a(h.charCodeAt(n)));n=0;for(var p=l;n<m;++n){var r=q[n];"m"==r?q[n]=p:p=r}n=0;for(p=l;n<m;++n)r=q[n],"1"==r&&"r"==p?q[n]="n":e.test(r)&&(p=r,"r"==r&&(q[n]="R"));
n=1;for(p=q[0];n<m-1;++n)r=q[n],"+"==r&&"1"==p&&"1"==q[n+1]?q[n]="1":","!=r||p!=q[n+1]||"1"!=p&&"n"!=p||(q[n]=p),p=r;for(n=0;n<m;++n)if(p=q[n],","==p)q[n]="N";else if("%"==p){for(p=n+1;p<m&&"%"==q[p];++p);for(r=n&&"!"==q[n-1]||p<m&&"1"==q[p]?"1":"N";n<p;++n)q[n]=r;n=p-1}n=0;for(p=l;n<m;++n)r=q[n],"L"==p&&"1"==r?q[n]="L":e.test(r)&&(p=r);for(p=0;p<m;++p)if(c.test(q[p])){for(n=p+1;n<m&&c.test(q[n]);++n);r="L"==(p?q[p-1]:l);for(r=r==("L"==(n<m?q[n]:l))?r?"L":"R":l;p<n;++p)q[p]=r;p=n-1}l=[];var u;for(n=
0;n<m;)if(f.test(q[n])){p=n;for(++n;n<m&&f.test(q[n]);++n);l.push(new b(0,p,n))}else{var A=n;p=l.length;r="rtl"==k?1:0;for(++n;n<m&&"L"!=q[n];++n);for(var H=A;H<n;)if(g.test(q[H])){A<H&&(l.splice(p,0,new b(1,A,H)),p+=r);A=H;for(++H;H<n&&g.test(q[H]);++H);l.splice(p,0,new b(2,A,H));p+=r;A=H}else++H;A<n&&l.splice(p,0,new b(1,A,n))}"ltr"==k&&(1==l[0].level&&(u=h.match(/^\s+/))&&(l[0].from=u[0].length,l.unshift(new b(0,0,u[0].length))),1==L(l).level&&(u=h.match(/\s+$/))&&(L(l).to-=u[0].length,l.push(new b(0,
m-u[0].length,m))));return"rtl"==k?l.reverse():l}}(),xc=[],z=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent?a.attachEvent("on"+b,d):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||xc).concat(d))},th=function(){if(G&&9>U)return!1;var a=v("div");return"draggable"in a||"dragDrop"in a}(),jd,yd,ke=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,d=[],c=a.length;b<=c;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");
-1!=g?(d.push(f.slice(0,g)),b+=g+1):(d.push(f),b=e+1)}return d}:function(a){return a.split(/\r\n?|\n/)},Gh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(d){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},nh=function(){var a=v("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),Ed=null,kd={},ob={},pb={},Y=
function(a,b,d){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=d};Y.prototype.eol=function(){return this.pos>=this.string.length};Y.prototype.sol=function(){return this.pos==this.lineStart};Y.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};Y.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};Y.prototype.eat=function(a){var b=this.string.charAt(this.pos);
if("string"==typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};Y.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};Y.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};Y.prototype.skipToEnd=function(){this.pos=this.string.length};Y.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};Y.prototype.backUp=function(a){this.pos-=a};Y.prototype.column=
function(){this.lastColumnPos<this.start&&(this.lastColumnValue=wa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};Y.prototype.indentation=function(){return wa(this.string,null,this.tabSize)-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};Y.prototype.match=function(a,b,d){if("string"==typeof a){var c=function(f){return d?f.toLowerCase():
f},e=this.string.substr(this.pos,a.length);if(c(e)==c(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};Y.prototype.current=function(){return this.string.slice(this.start,this.pos)};Y.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};Y.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};Y.prototype.baseToken=function(){var a=
this.lineOracle;return a&&a.baseToken(this.pos)};var Bc=function(a,b){this.state=a;this.lookAhead=b},Ea=function(a,b,d,c){this.state=b;this.doc=a;this.line=d;this.maxLookAhead=c||0;this.baseTokens=null;this.baseTokenPos=1};Ea.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};Ea.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};Ea.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};Ea.fromSaved=function(a,b,d){return b instanceof Bc?new Ea(a,Ya(a.mode,b.state),d,b.lookAhead):new Ea(a,Ya(a.mode,b),d)};Ea.prototype.save=function(a){a=!1!==a?Ya(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new Bc(a,this.maxLookAhead):a};var Ae=function(a,b,d){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=d},Lf=!1,Ka=!1,xb=function(a,b,d){this.text=a;Ee(this,b);this.height=d?d(this):1};xb.prototype.lineNo=function(){return O(this)};nb(xb);var Ig={},Hg={},rb=null,Pb=null,Te={left:0,right:0,top:0,bottom:0},db,mb=function(a,b,d){this.cm=d;var c=this.vert=v("div",[v("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=v("div",[v("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");c.tabIndex=e.tabIndex=-1;a(c);a(e);z(c,
"scroll",function(){c.clientHeight&&b(c.scrollTop,"vertical")});z(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;G&&8>U&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};mb.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,d=a.scrollHeight>a.clientHeight+1,c=a.nativeBarWidth;d?(this.vert.style.display="block",this.vert.style.bottom=b?c+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-
(b?c:0)))+"px"):(this.vert.style.display="",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=d?c+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(d?c:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==c&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:d?c:0,bottom:b?c:0}};
mb.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};mb.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};mb.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ya&&!Eh?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents=
"none";this.disableHoriz=new Va;this.disableVert=new Va};mb.prototype.enableZeroWidthBar=function(a,b,d){function c(){var e=a.getBoundingClientRect();("vert"==d?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,c)}a.style.pointerEvents="auto";b.set(1E3,c)};mb.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var qc=function(){};qc.prototype.update=
function(){return{bottom:0,right:0}};qc.prototype.setScrollLeft=function(){};qc.prototype.setScrollTop=function(){};qc.prototype.clear=function(){};var of={"native":mb,"null":qc},Tg=0,Oc=function(a,b,d){var c=a.display;this.viewport=b;this.visible=Lc(c,a.doc,b);this.editorIsHidden=!c.wrapper.offsetWidth;this.wrapperHeight=c.wrapper.clientHeight;this.wrapperWidth=c.wrapper.clientWidth;this.oldDisplayWidth=ab(a);this.force=d;this.dims=Dd(a);this.events=[]};Oc.prototype.signal=function(a,b){xa(a,b)&&
this.events.push(arguments)};Oc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)X.apply(null,this.events[a])};var Pc=0,ta=null;G?ta=-.53:Ma?ta=15:Fc?ta=-.7:ge&&(ta=-1/3);var ua=function(a,b){this.ranges=a;this.primIndex=b};ua.prototype.primary=function(){return this.ranges[this.primIndex]};ua.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var d=this.ranges[b],c=a.ranges[b];
if(!pd(d.anchor,c.anchor)||!pd(d.head,c.head))return!1}return!0};ua.prototype.deepCopy=function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new J(qd(this.ranges[b].anchor),qd(this.ranges[b].head));return new ua(a,this.primIndex)};ua.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};ua.prototype.contains=function(a,b){b||(b=a);for(var d=0;d<this.ranges.length;d++){var c=this.ranges[d];if(0<=B(b,c.from())&&0>=B(a,c.to()))return d}return-1};
var J=function(a,b){this.anchor=a;this.head=b};J.prototype.from=function(){return Ac(this.anchor,this.head)};J.prototype.to=function(){return zc(this.anchor,this.head)};J.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};cc.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var d=a,c=a+b;d<c;++d){var e=this.lines[d];this.height-=e.height;var f=e;f.parent=null;De(f);ca(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,
this.lines)},insertInner:function(a,b,d){this.height+=d;this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,d){for(b=a+b;a<b;++a)if(d(this.lines[a]))return!0}};dc.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var d=0;d<this.children.length;++d){var c=this.children[d],e=c.chunkSize();if(a<e){var f=Math.min(b,e-a),g=c.height;c.removeInner(a,f);this.height-=g-c.height;e==f&&(this.children.splice(d--,
1),c.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-b&&(1<this.children.length||!(this.children[0]instanceof cc))&&(a=[],this.collapse(a),this.children=[new cc(a)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,d){this.size+=b.length;this.height+=d;for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<=f){e.insertInner(a,b,d);if(e.lines&&50<e.lines.length){for(b=
a=e.lines.length%25+25;b<e.lines.length;)d=new cc(e.lines.slice(b,b+=25)),e.height-=d.height,this.children.splice(++c,0,d),d.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5);b=new dc(b);if(a.parent){a.size-=b.size;a.height-=b.height;var d=ea(a.parent.children,a);a.parent.children.splice(d+1,0,b)}else d=new dc(a.children),d.parent=a,a.children=[d,b],a=d;b.parent=a.parent}while(10<
a.children.length);a.parent.maybeSpill()}},iterN:function(a,b,d){for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,d))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var ec=function(a,b,d){if(d)for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);this.doc=a;this.node=b};ec.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,d=this.line,c=O(d);if(null!=c&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||
(d.widgets=null);var f=Rb(this);Da(d,Math.max(0,d.height-f));a&&(pa(a,function(){var g=-f;Ga(d)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Mc(a,g);Qa(a,c,"widget")}),ca(a,"lineWidgetCleared",a,this,c))}};ec.prototype.changed=function(){var a=this,b=this.height,d=this.doc.cm,c=this.line;this.height=null;var e=Rb(this)-b;e&&(Oa(this.doc,c)||Da(c,c.height+e),d&&pa(d,function(){d.curOp.forceUpdate=!0;Ga(c)<(d.curOp&&d.curOp.scrollTop||d.doc.scrollTop)&&Mc(d,e);ca(d,"lineWidgetChanged",d,a,O(c))}))};
nb(ec);var Rf=0,Ta=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=++Rf};Ta.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&jb(a);if(xa(this,"clear")){var d=this.find();d&&ca(this,"clear",d.from,d.to)}for(var c=d=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);a&&!this.collapsed?Qa(a,O(f),"text"):a&&(null!=g.to&&(c=O(f)),null!=g.from&&(d=O(f)));for(var h=f,k=void 0,l=f.markedSpans,m=g,q=0;q<l.length;++q)l[q]!=m&&(k||
(k=[])).push(l[q]);h.markedSpans=k;null==g.from&&this.collapsed&&!Oa(this.doc,f)&&a&&Da(f,tb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=Fa(this.lines[e]),g=Dc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=d&&a&&this.collapsed&&ma(a,d,c+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Hf(a.doc));a&&ca(a,"markerCleared",a,this,d,
c);b&&kb(a);this.parent&&this.parent.clear()}};Ta.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var d,c,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);if(null!=g.from&&(d=t(b?f:O(f),g.from),-1==a))return d;if(null!=g.to&&(c=t(b?f:O(f),g.to),1==a))return c}return d&&{from:d,to:c}};Ta.prototype.changed=function(){var a=this,b=this.find(-1,!0),d=this,c=this.doc.cm;b&&c&&pa(c,function(){var e=b.line,f=O(b.line);if(f=Cd(c,f))Ue(f),c.curOp.selectionChanged=
c.curOp.forceUpdate=!0;c.curOp.updateMaxLine=!0;Oa(d.doc,e)||null==d.height||(f=d.height,d.height=null,(f=Rb(d)-f)&&Da(e,e.height+f));ca(c,"markerChanged",c,a)})};Ta.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=ea(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ta.prototype.detachLine=function(a){this.lines.splice(ea(this.lines,a),1);!this.lines.length&&this.doc.cm&&
(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};nb(Ta);var fc=function(a,b){this.markers=a;this.primary=b;for(b=0;b<a.length;++b)a[b].parent=this};fc.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();ca(this,"clear")}};fc.prototype.find=function(a,b){return this.primary.find(a,b)};nb(fc);var Hh=0,oa=function(a,b,d,c,e){if(!(this instanceof oa))return new oa(a,b,d,c,e);null==
d&&(d=0);dc.call(this,[new cc([new xb("",null)])]);this.first=d;this.scrollTop=this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=d;d=t(d,0);this.sel=Na(d);this.history=new Qc(null);this.id=++Hh;this.modeOption=b;this.lineSep=c;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Xd(this,{from:d,to:d,text:a});da(this,Na(d),Ia)};oa.prototype=ne(dc.prototype,{constructor:oa,iter:function(a,b,d){d?this.iterN(a-this.first,
b-a,d):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var d=0,c=0;c<b.length;++c)d+=b[c].height;this.insertInner(a-this.first,b,d)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=nd(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:ba(function(a){var b=t(this.first,0),d=this.first+this.size-1;Ab(this,{from:b,to:t(d,w(this,d).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&
Ub(this.cm,0,0);da(this,Na(b),Ia)}),replaceRange:function(a,b,d,c){b=C(this,b);d=d?C(this,d):b;Bb(this,a,b,d,c)},getRange:function(a,b,d){a=Za(this,C(this,a),C(this,b));return!1===d?a:a.join(d||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(Lb(this,a))return w(this,a)},getLineNumber:function(a){return O(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=w(this,a));return Fa(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},
lastLine:function(){return this.first+this.size-1},clipPos:function(a){return C(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ba(function(a,b,d){a=C(this,"number"==typeof a?t(a,b||0):a);da(this,Na(a,null),d)}),setSelection:ba(function(a,b,d){var c=C(this,a);a=C(this,b||
a);da(this,Na(c,a),d)}),extendSelection:ba(function(a,b,d){Sc(this,C(this,a),b&&C(this,b),d)}),extendSelections:ba(function(a,b){Df(this,ue(this,a),b)}),extendSelectionsBy:ba(function(a,b){a=vc(this.sel.ranges,a);Df(this,ue(this,a),b)}),setSelections:ba(function(a,b,d){if(a.length){for(var c=[],e=0;e<a.length;e++)c[e]=new J(C(this,a[e].anchor),C(this,a[e].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));da(this,Ca(this.cm,c,b),d)}}),addSelection:ba(function(a,b,d){var c=this.sel.ranges.slice(0);
c.push(new J(C(this,a),C(this,b||a)));da(this,Ca(this.cm,c,c.length-1),d)}),getSelection:function(a){for(var b=this.sel.ranges,d,c=0;c<b.length;c++){var e=Za(this,b[c].from(),b[c].to());d=d?d.concat(e):e}return!1===a?d:d.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],d=this.sel.ranges,c=0;c<d.length;c++){var e=Za(this,d[c].from(),d[c].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[c]=e}return b},replaceSelection:function(a,b,d){for(var c=[],e=0;e<this.sel.ranges.length;e++)c[e]=
a;this.replaceSelections(c,b,d||"+input")},replaceSelections:ba(function(a,b,d){for(var c=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];c[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:d}}if(a=b&&"end"!=b){a=[];e=d=t(this.first,0);for(f=0;f<c.length;f++){var h=c[f];g=vf(h.from,d,e);var k=vf(Ra(h),d,e);d=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>B(h.head,h.anchor),a[f]=new J(h?k:g,h?g:k)):a[f]=new J(g,g)}a=new ua(a,this.sel.primIndex)}b=a;for(a=c.length-1;0<=a;a--)Ab(this,
c[a]);b?Ef(this,b):this.cm&&vb(this.cm)}),undo:ba(function(){Vc(this,"undo")}),redo:ba(function(){Vc(this,"redo")}),undoSelection:ba(function(){Vc(this,"undo",!0)}),redoSelection:ba(function(){Vc(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,d=0,c=0;c<a.done.length;c++)a.done[c].ranges||++b;for(c=0;c<a.undone.length;c++)a.undone[c].ranges||++d;return{undo:b,redo:d}},clearHistory:function(){var a=
this;this.history=new Qc(this.history.maxGeneration);Sa(this,function(b){return b.history=a.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:yb(this.history.done),undone:yb(this.history.undone)}},setHistory:function(a){var b=
this.history=new Qc(this.history.maxGeneration);b.done=yb(a.done.slice(0),null,!0);b.undone=yb(a.undone.slice(0),null,!0)},setGutterMarker:ba(function(a,b,d){return bc(this,a,"gutter",function(c){var e=c.gutterMarkers||(c.gutterMarkers={});e[b]=d;!d&&oe(e)&&(c.gutterMarkers=null);return!0})}),clearGutter:ba(function(a){var b=this;this.iter(function(d){d.gutterMarkers&&d.gutterMarkers[a]&&bc(b,d,"gutter",function(){d.gutterMarkers[a]=null;oe(d.gutterMarkers)&&(d.gutterMarkers=null);return!0})})}),
lineInfo:function(a){if("number"==typeof a){if(!Lb(this,a))return null;var b=a;a=w(this,a);if(!a)return null}else if(b=O(a),null==b)return null;return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:ba(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(c[e]){if(y(d).test(c[e]))return!1;
c[e]+=" "+d}else c[e]=d;return!0})}),removeLineClass:ba(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=c[e];if(f)if(null==d)c[e]=null;else{var g=f.match(y(d));if(!g)return!1;var h=g.index+g[0].length;c[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:ba(function(a,b,d){return ch(this,a,b,d)}),removeLineWidget:function(a){a.clear()},
markText:function(a,b,d){return Cb(this,C(this,a),C(this,b),d,d&&d.type||"range")},setBookmark:function(a,b){b={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=C(this,a);return Cb(this,a,a,b,"bookmark")},findMarksAt:function(a){a=C(this,a);var b=[],d=w(this,a.line).markedSpans;if(d)for(var c=0;c<d.length;++c){var e=d[c];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||
e.marker)}return b},findMarks:function(a,b,d){a=C(this,a);b=C(this,b);var c=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||d&&!d(h.marker)||c.push(h.marker.parent||h.marker)}++e});return c},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var d=0;d<b.length;++d)null!=b[d].from&&a.push(b[d].marker)});return a},posFromIndex:function(a){var b,
d=this.first,c=this.lineSeparator().length;this.iter(function(e){e=e.text.length+c;if(e>a)return b=a,!0;a-=e;++d});return C(this,t(d,b))},indexFromPos:function(a){a=C(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var d=this.lineSeparator().length;this.iter(this.first,a.line,function(c){b+=c.text.length+d});return b},copy:function(a){var b=new oa(nd(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;
b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||(a={});var b=this.first,d=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<d&&(d=a.to);b=new oa(nd(this,b,d),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Sf(this);
for(d=0;d<a.length;d++){var c=a[d],e=c.find(),f=b.clipPos(e.from);e=b.clipPos(e.to);B(f,e)&&(f=Cb(b,f,e,c.primary,c.primary.type),c.markers.push(f),f.parent=c)}return b},unlinkDoc:function(a){a instanceof V&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);eh(Sf(this));break}if(a.history==this.history){var d=[a.id];Sa(a,function(c){return d.push(c.id)},!0);a.history=new Qc(null);a.history.done=yb(this.history.done,d);
a.history.undone=yb(this.history.undone,d)}},iterLinkedDocs:function(a){Sa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):ke(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ba(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(b){return b.order=null}),this.cm&&Zg(this.cm))})});oa.prototype.eachLine=oa.prototype.iter;for(var Uf=0,lg=!1,Ua={3:"Pause",
8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},rc=0;10>rc;rc++)Ua[rc+48]=Ua[rc+96]=String(rc);for(var bd=65;90>=bd;bd++)Ua[bd]=String.fromCharCode(bd);for(var sc=1;12>=sc;sc++)Ua[sc+111]=Ua[sc+63235]="F"+sc;var gc={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",
Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore",
"Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext",
"Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};gc["default"]=ya?gc.macDefault:gc.pcDefault;var hc={selectAll:Jf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Ia)},killLine:function(a){return Eb(a,
function(b){if(b.empty()){var d=w(a.doc,b.head.line).text.length;return b.head.ch==d&&b.head.line<a.lastLine()?{from:b.head,to:t(b.head.line+1,0)}:{from:b.head,to:t(b.head.line,d)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:C(a.doc,t(b.to().line+1,0))}})},delLineLeft:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:b.from()}})},delWrappedLineLeft:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,
"div").top+5;return{from:a.coordsChar({left:0,top:d},"div"),to:b.from()}})},delWrappedLineRight:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,"div").top+5;d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:d},"div");return{from:b.from(),to:d}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(t(a.firstLine(),
0))},goDocEnd:function(a){return a.extendSelection(t(a.lastLine()))},goLineStart:function(a){return a.extendSelectionsBy(function(b){return $f(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return ag(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var d=w(a.doc,b);var c=d;for(var e;e=qb(c,!1);)c=e.find(1,!0).line;c!=d&&(b=O(c));return ce(!0,a,d,b,-1)},{origin:"+move",bias:-1})},
goLineRight:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div")},pc)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},pc)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var d=a.cursorCoords(b.head,"div").top+5;d=a.coordsChar({left:0,top:d},"div");return d.ch<a.getLine(d.line).search(/\S/)?
ag(a,b.head):d},pc)},goLineUp:function(a){return a.moveV(-1,"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,
"group")},goGroupLeft:function(a){return a.moveH(-1,"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,"codepoint")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},
indentMore:function(a){return a.indentSelection("add")},indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},insertSoftTab:function(a){for(var b=[],d=a.listSelections(),c=a.options.tabSize,e=0;e<d.length;e++){var f=d[e].from();f=wa(a.getLine(f.line),f.ch,c);b.push(fd(c-f%c))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return pa(a,function(){for(var b=
a.listSelections(),d=[],c=0;c<b.length;c++)if(b[c].empty()){var e=b[c].head,f=w(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new t(e.line,e.ch-1)),0<e.ch)e=new t(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),t(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=w(a.doc,e.line-1).text;g&&(e=new t(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),t(e.line-1,g.length-1),e,"+transpose"))}d.push(new J(e,e))}a.setSelections(d)})},newlineAndIndent:function(a){return pa(a,
function(){for(var b=a.listSelections(),d=b.length-1;0<=d;d--)a.replaceRange(a.doc.lineSeparator(),b[d].anchor,b[d].head,"+input");b=a.listSelections();for(d=0;d<b.length;d++)a.indentLine(b[d].from().line,null,!0);vb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},lh=new Va,de=null,ee=function(a,b,d){this.time=a;this.pos=b;this.button=d};ee.prototype.compare=function(a,b,d){return this.time+400>a&&0==B(b,this.pos)&&d==this.button};
var kc,jc,Fb={toString:function(){return"CodeMirror.Init"}},kg={},$c={};V.defaults=kg;V.optionHandlers=$c;var ie=[];V.defineInitHook=function(a){return ie.push(a)};var qa=null,P=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Va;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};P.prototype.init=function(a){function b(h){for(h=h.target;h;h=h.parentNode){if(h==g)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(h.className))break}return!1}
function d(h){if(b(h)&&!Z(f,h)){if(f.somethingSelected())qa={lineWise:!1,text:f.getSelections()},"cut"==h.type&&f.replaceSelection("",null,"cut");else if(f.options.lineWiseCopyCut){var k=og(f);qa={lineWise:!0,text:k.text};"cut"==h.type&&f.operation(function(){f.setSelections(k.ranges,0,Ia);f.replaceSelection("",null,"cut")})}else return;if(h.clipboardData){h.clipboardData.clearData();var l=qa.text.join("\n");h.clipboardData.setData("Text",l);if(h.clipboardData.getData("Text")==l){h.preventDefault();
return}}var m=qg();h=m.firstChild;f.display.lineSpace.insertBefore(m,f.display.lineSpace.firstChild);h.value=qa.text.join("\n");var q=document.activeElement;oc(h);setTimeout(function(){f.display.lineSpace.removeChild(m);q.focus();q==g&&e.showPrimarySelection()},50)}}var c=this,e=this,f=e.cm,g=e.div=a.lineDiv;pg(g,f.options.spellcheck,f.options.autocorrect,f.options.autocapitalize);z(g,"paste",function(h){!b(h)||Z(f,h)||ng(h,f)||11>=U&&setTimeout(aa(f,function(){return c.updateFromDOM()}),20)});z(g,
"compositionstart",function(h){c.composing={data:h.data,done:!1}});z(g,"compositionupdate",function(h){c.composing||(c.composing={data:h.data,done:!1})});z(g,"compositionend",function(h){c.composing&&(h.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});z(g,"touchstart",function(){return e.forceCompositionEnd()});z(g,"input",function(){c.composing||c.readFromDOMSoon()});z(g,"copy",d);z(g,"cut",d)};P.prototype.screenReaderLabelChanged=function(a){a?this.div.setAttribute("aria-label",
a):this.div.removeAttribute("aria-label")};P.prototype.prepareSelection=function(){var a=df(this.cm,!1);a.focus=document.activeElement==this.div;return a};P.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};P.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};P.prototype.showPrimarySelection=function(){var a=this.getSelection(),b=this.cm,d=b.doc.sel.primary(),
c=d.from();d=d.to();if(b.display.viewTo==b.display.viewFrom||c.line>=b.display.viewTo||d.line<b.display.viewFrom)a.removeAllRanges();else{var e=ad(b,a.anchorNode,a.anchorOffset),f=ad(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=B(Ac(e,f),c)||0!=B(zc(e,f),d))if(e=b.display.view,c=c.line>=b.display.viewFrom&&sg(b,c)||{node:e[0].measure.map[2],offset:0},d=d.line<b.display.viewTo&&sg(b,d),d||(d=e[e.length-1].measure,d=d.maps?d.maps[d.maps.length-1]:d.map,d={node:d[d.length-1],offset:d[d.length-
2]-d[d.length-3]}),c&&d){e=a.rangeCount&&a.getRangeAt(0);try{var g=Ob(c.node,c.offset,d.offset,d.node)}catch(h){}g&&(!Ma&&b.state.focused?(a.collapse(c.node,c.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):Ma&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};P.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=
!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=!0})},20)};P.prototype.showMultipleSelections=function(a){D(this.cm.display.cursorDiv,a.cursors);D(this.cm.display.selectionDiv,a.selection)};P.prototype.rememberSelection=function(){var a=this.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};P.prototype.selectionInEditor=function(){var a=this.getSelection();if(!a.rangeCount)return!1;
a=a.getRangeAt(0).commonAncestorContainer;return ka(this.div,a)};P.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())};P.prototype.blur=function(){this.div.blur()};P.prototype.getField=function(){return this.div};P.prototype.supportsTouch=function(){return!0};P.prototype.receivedFocus=function(){function a(){b.cm.state.focused&&(b.pollSelection(),b.polling.set(b.cm.options.pollInterval,
a))}var b=this;this.selectionInEditor()?this.pollSelection():pa(this.cm,function(){return b.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};P.prototype.selectionChanged=function(){var a=this.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};P.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=
this.getSelection(),b=this.cm;if(Gc&&Fc&&this.cm.display.gutterSpecs.length&&Ah(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var d=ad(b,a.anchorNode,a.anchorOffset),c=ad(b,a.focusNode,a.focusOffset);d&&c&&pa(b,function(){da(b.doc,Na(d,c),Ia);if(d.bad||c.bad)b.curOp.selectionChanged=!0})}}};P.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),
this.readDOMTimeout=null);var a=this.cm,b=a.display,d=a.doc.sel.primary(),c=d.from(),e=d.to();0==c.ch&&c.line>a.firstLine()&&(c=t(c.line-1,w(a.doc,c.line-1).length));e.ch==w(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=t(e.line+1,0));if(c.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;c.line==b.viewFrom||0==(f=bb(a,c.line))?(d=O(b.view[0].line),f=b.view[0].node):(d=O(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=bb(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):
(e=O(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;b=a.doc.splitLines(Bh(a,f,b,d,e));for(f=Za(a.doc,t(d,0),t(e,w(a.doc,e).text.length));1<b.length&&1<f.length;)if(L(b)==L(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),d++;else break;var h=0;g=0;for(var k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=L(b);l=L(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-
g-1);)++g;if(1==b.length&&1==f.length&&d==c.line)for(;h&&h>c.ch&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");c=t(d,h);d=t(e,f.length?L(f).length-g:0);if(1<b.length||b[0]||B(c,d))return Bb(a.doc,b,c,d,"+input"),!0};P.prototype.ensurePolled=function(){this.forceCompositionEnd()};P.prototype.reset=function(){this.forceCompositionEnd()};P.prototype.forceCompositionEnd=function(){this.composing&&
(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())};P.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};P.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||pa(this.cm,function(){return ma(a.cm)})};P.prototype.setUneditable=function(a){a.contentEditable=
"false"};P.prototype.onKeyPress=function(a){0==a.charCode||this.composing||(a.preventDefault(),this.cm.isReadOnly()||aa(this.cm,je)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};P.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};P.prototype.onContextMenu=function(){};P.prototype.resetPosition=function(){};P.prototype.needsContentAttribute=!0;var W=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Va;this.hasSelection=
!1;this.composing=null};W.prototype.init=function(a){function b(g){if(!Z(e,g)){if(e.somethingSelected())qa={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var h=og(e);qa={lineWise:!0,text:h.text};"cut"==g.type?e.setSelections(h.ranges,null,Ia):(c.prevInput="",f.value=h.text.join("\n"),oc(f))}else return;"cut"==g.type&&(e.state.cutIncoming=+new Date)}}var d=this,c=this,e=this.cm;this.createField(a);var f=this.textarea;a.wrapper.insertBefore(this.wrapper,a.wrapper.firstChild);
mc&&(f.style.width="0px");z(f,"input",function(){G&&9<=U&&d.hasSelection&&(d.hasSelection=null);c.poll()});z(f,"paste",function(g){Z(e,g)||ng(g,e)||(e.state.pasteIncoming=+new Date,c.fastPoll())});z(f,"cut",b);z(f,"copy",b);z(a.scroller,"paste",function(g){if(!La(a,g)&&!Z(e,g))if(f.dispatchEvent){var h=new Event("paste");h.clipboardData=g.clipboardData;f.dispatchEvent(h)}else e.state.pasteIncoming=+new Date,c.focus()});z(a.lineSpace,"selectstart",function(g){La(a,g)||la(g)});z(f,"compositionstart",
function(){var g=e.getCursor("from");c.composing&&c.composing.range.clear();c.composing={start:g,range:e.markText(g,e.getCursor("to"),{className:"CodeMirror-composing"})}});z(f,"compositionend",function(){c.composing&&(c.poll(),c.composing.range.clear(),c.composing=null)})};W.prototype.createField=function(a){this.wrapper=qg();this.textarea=this.wrapper.firstChild};W.prototype.screenReaderLabelChanged=function(a){a?this.textarea.setAttribute("aria-label",a):this.textarea.removeAttribute("aria-label")};
W.prototype.prepareSelection=function(){var a=this.cm,b=a.display,d=a.doc,c=df(a);if(a.options.moveInputWithCursor){a=Aa(a,d.sel.primary().head,"div");d=b.wrapper.getBoundingClientRect();var e=b.lineDiv.getBoundingClientRect();c.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-d.top));c.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-d.left))}return c};W.prototype.showSelection=function(a){var b=this.cm.display;D(b.cursorDiv,a.cursors);D(b.selectionDiv,a.selection);
null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")};W.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&oc(this.textarea),G&&9<=U&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",G&&9<=U&&(this.hasSelection=null))}};W.prototype.getField=function(){return this.textarea};W.prototype.supportsTouch=function(){return!1};
W.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Zb||va()!=this.textarea))try{this.textarea.focus()}catch(a){}};W.prototype.blur=function(){this.textarea.blur()};W.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};W.prototype.receivedFocus=function(){this.slowPoll()};W.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){a.poll();a.cm.state.focused&&a.slowPoll()})};W.prototype.fastPoll=
function(){function a(){d.poll()||b?(d.pollingFast=!1,d.slowPoll()):(b=!0,d.polling.set(60,a))}var b=!1,d=this;d.pollingFast=!0;d.polling.set(20,a)};W.prototype.poll=function(){var a=this,b=this.cm,d=this.textarea,c=this.prevInput;if(this.contextMenuPending||!b.state.focused||Gh(d)&&!c&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=d.value;if(e==c&&!b.somethingSelected())return!1;if(G&&9<=U&&this.hasSelection===e||ya&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),
!1;if(b.doc.sel==b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||c||(c="\u200b");if(8666==f)return this.reset(),this.cm.execCommand("undo")}var g=0;for(f=Math.min(c.length,e.length);g<f&&c.charCodeAt(g)==e.charCodeAt(g);)++g;pa(b,function(){je(b,e.slice(g),c.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?d.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});
return!0};W.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};W.prototype.onKeyPress=function(){G&&9<=U&&(this.hasSelection=null);this.fastPoll()};W.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var p=e.somethingSelected(),r="\u200b"+(p?g.value:"");g.value="\u21da";g.value=r;c.prevInput=p?"":"\u200b";g.selectionStart=1;g.selectionEnd=r.length;f.selForContextMenu=e.doc.sel}}function d(){if(c.contextMenuPending==d&&(c.contextMenuPending=
!1,c.wrapper.style.cssText=m,g.style.cssText=l,G&&9>U&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k),null!=g.selectionStart)){(!G||G&&9>U)&&b();var p=0,r=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"\u200b"==c.prevInput?aa(e,Jf)(e):10>p++?f.detectingSelectAll=setTimeout(r,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(r,200)}}var c=this,e=c.cm,f=e.display,g=c.textarea;c.contextMenuPending&&c.contextMenuPending();var h=eb(e,
a),k=f.scroller.scrollTop;if(h&&!Ba){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&aa(e,da)(e.doc,Na(h),Ia);var l=g.style.cssText,m=c.wrapper.style.cssText;h=c.wrapper.offsetParent.getBoundingClientRect();c.wrapper.style.cssText="position: static";g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(G?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(fa)var q=window.scrollY;f.input.focus();fa&&window.scrollTo(null,q);f.input.reset();e.somethingSelected()||(g.value=c.prevInput=" ");c.contextMenuPending=d;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);G&&9<=U&&b();if(fe){Kb(a);var n=function(){ra(window,"mouseup",n);setTimeout(d,20)};z(window,"mouseup",n)}else setTimeout(d,50)}};W.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a;this.textarea.readOnly=!!a};W.prototype.setUneditable=
function(){};W.prototype.needsContentAttribute=!1;(function(a){function b(c,e,f,g){a.defaults[c]=e;f&&(d[c]=g?function(h,k,l){l!=Fb&&f(h,k,l)}:f)}var d=a.optionHandlers;a.defineOption=b;a.Init=Fb;b("value","",function(c,e){return c.setValue(e)},!0);b("mode",null,function(c,e){c.doc.modeOption=e;Wd(c)},!0);b("indentUnit",2,Wd,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(c){$b(c);Sb(c);ma(c)},!0);b("lineSeparator",null,function(c,e){if(c.doc.lineSep=e){var f=[],g=c.doc.first;
c.doc.iter(function(k){for(var l=0;;){var m=k.text.indexOf(e,l);if(-1==m)break;l=m+e.length;f.push(t(g,m))}g++});for(var h=f.length-1;0<=h;h--)Bb(c.doc,e,f[h],t(f[h].line,f[h].ch+e.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(c,e,f){c.state.specialChars=new RegExp(e.source+(e.test("\t")?"":"|\t"),"g");f!=Fb&&c.refresh()});b("specialCharPlaceholder",Lg,function(c){return c.refresh()},!0);b("electricChars",
!0);b("inputStyle",Zb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");},!0);b("spellcheck",!1,function(c,e){return c.getInputField().spellcheck=e},!0);b("autocorrect",!1,function(c,e){return c.getInputField().autocorrect=e},!0);b("autocapitalize",!1,function(c,e){return c.getInputField().autocapitalize=e},!0);b("rtlMoveVisually",!Fh);b("wholeLineUpdateBefore",!0);b("theme","default",function(c){jg(c);Yb(c)},!0);b("keyMap","default",function(c,
e,f){e=Wc(e);(f=f!=Fb&&Wc(f))&&f.detach&&f.detach(c,e);e.attach&&e.attach(c,f||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,yh,!0);b("gutters",[],function(c,e){c.display.gutterSpecs=Ud(e,c.options.lineNumbers);Yb(c)},!0);b("fixedGutter",!0,function(c,e){c.display.gutters.style.left=e?Kd(c.display)+"px":"0";c.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(c){return wb(c)},!0);b("scrollbarStyle","native",function(c){nf(c);wb(c);c.display.scrollbars.setScrollTop(c.doc.scrollTop);
c.display.scrollbars.setScrollLeft(c.doc.scrollLeft)},!0);b("lineNumbers",!1,function(c,e){c.display.gutterSpecs=Ud(c.options.gutters,e);Yb(c)},!0);b("firstLineNumber",1,Yb,!0);b("lineNumberFormatter",function(c){return c},Yb,!0);b("showCursorWhenSelecting",!1,Tb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",!0);b("selectionsMayTouch",!1);b("readOnly",!1,function(c,e){"nocursor"==e&&(ub(c),c.display.input.blur());c.display.input.readOnlyChanged(e)});b("screenReaderLabel",
null,function(c,e){c.display.input.screenReaderLabelChanged(""===e?null:e)});b("disableInput",!1,function(c,e){e||c.display.input.reset()},!0);b("dragDrop",!0,xh);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Tb,!0);b("singleCursorHeightPerLine",!0,Tb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,$b,!0);b("addModeClass",!1,$b,!0);b("pollInterval",100);b("undoDepth",200,function(c,e){return c.doc.history.undoDepth=e});b("historyEventDelay",
1250);b("viewportMargin",10,function(c){return c.refresh()},!0);b("maxHighlightLength",1E4,$b,!0);b("moveInputWithCursor",!0,function(c,e){e||c.display.input.resetPosition()});b("tabindex",null,function(c,e){return c.display.input.getField().tabIndex=e||""});b("autofocus",null);b("direction","ltr",function(c,e){return c.doc.setDirection(e)},!0);b("phrases",null)})(V);(function(a){var b=a.optionHandlers,d=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},
setOption:function(c,e){var f=this.options,g=f[c];if(f[c]!=e||"mode"==c)f[c]=e,b.hasOwnProperty(c)&&aa(this,b[c])(this,e,g),X(this,"optionChange",this,c)},getOption:function(c){return this.options[c]},getDoc:function(){return this.doc},addKeyMap:function(c,e){this.state.keyMaps[e?"push":"unshift"](Wc(c))},removeKeyMap:function(c){for(var e=this.state.keyMaps,f=0;f<e.length;++f)if(e[f]==c||e[f].name==c)return e.splice(f,1),!0},addOverlay:ia(function(c,e){var f=c.token?c:a.getMode(this.options,c);if(f.startState)throw Error("Overlays may not be stateful.");
wg(this.state.overlays,{mode:f,modeSpec:c,opaque:e&&e.opaque,priority:e&&e.priority||0},function(g){return g.priority});this.state.modeGen++;ma(this)}),removeOverlay:ia(function(c){for(var e=this.state.overlays,f=0;f<e.length;++f){var g=e[f].modeSpec;if(g==c||"string"==typeof c&&g.name==c){e.splice(f,1);this.state.modeGen++;ma(this);break}}}),indentLine:ia(function(c,e,f){"string"!=typeof e&&"number"!=typeof e&&(e=null==e?this.options.smartIndent?"smart":"prev":e?"add":"subtract");Lb(this.doc,c)&&
lc(this,c,e,f)}),indentSelection:ia(function(c){for(var e=this.doc.sel.ranges,f=-1,g=0;g<e.length;g++){var h=e[g];if(h.empty())h.head.line>f&&(lc(this,h.head.line,c,!0),f=h.head.line,g==this.doc.sel.primIndex&&vb(this));else{var k=h.from();h=h.to();var l=Math.max(f,k.line);f=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1;for(h=l;h<f;++h)lc(this,h,c);h=this.doc.sel.ranges;0==k.ch&&e.length==h.length&&0<h[g].from().ch&&$d(this.doc,g,new J(k,h[g].to()),Ia)}}}),getTokenAt:function(c,e){return ze(this,
c,e)},getLineTokens:function(c,e){return ze(this,t(c),e,!0)},getTokenTypeAt:function(c){c=C(this.doc,c);var e=xe(this,w(this.doc,c.line)),f=0,g=(e.length-1)/2;c=c.ch;if(0==c)e=e[2];else for(;;){var h=f+g>>1;if((h?e[2*h-1]:0)>=c)g=h;else if(e[2*h+1]<c)f=h+1;else{e=e[2*h+2];break}}f=e?e.indexOf("overlay "):-1;return 0>f?e:0==f?null:e.slice(0,f-1)},getModeAt:function(c){var e=this.doc.mode;return e.innerMode?a.innerMode(e,this.getTokenAt(c).state).mode:e},getHelper:function(c,e){return this.getHelpers(c,
e)[0]},getHelpers:function(c,e){var f=[];if(!d.hasOwnProperty(e))return f;var g=d[e];c=this.getModeAt(c);if("string"==typeof c[e])g[c[e]]&&f.push(g[c[e]]);else if(c[e])for(var h=0;h<c[e].length;h++){var k=g[c[e][h]];k&&f.push(k)}else c.helperType&&g[c.helperType]?f.push(g[c.helperType]):g[c.name]&&f.push(g[c.name]);for(e=0;e<g._global.length;e++)h=g._global[e],h.pred(c,this)&&-1==ea(f,h.val)&&f.push(h.val);return f},getStateAfter:function(c,e){var f=this.doc;c=Math.max(f.first,Math.min(null==c?f.first+
f.size-1:c,f.first+f.size-1));return Mb(this,c+1,e).state},cursorCoords:function(c,e){var f=this.doc.sel.primary();c=null==c?f.head:"object"==typeof c?C(this.doc,c):c?f.from():f.to();return Aa(this,c,e||"page")},charCoords:function(c,e){return Gd(this,C(this.doc,c),e||"page")},coordsChar:function(c,e){c=Ye(this,c,e||"page");return Id(this,c.left,c.top)},lineAtHeight:function(c,e){c=Ye(this,{top:c,left:0},e||"page").top;return $a(this.doc,c+this.display.viewOffset)},heightAtLine:function(c,e,f){var g=
!1;if("number"==typeof c){var h=this.doc.first+this.doc.size-1;c<this.doc.first?c=this.doc.first:c>h&&(c=h,g=!0);c=w(this.doc,c)}return Hc(this,c,{top:0,left:0},e||"page",f||g).top+(g?this.doc.height-Ga(c):0)},defaultTextHeight:function(){return tb(this.display)},defaultCharWidth:function(){return sb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(c,e,f,g,h){var k=this.display;c=Aa(this,C(this.doc,c));var l=c.bottom,m=c.left;e.style.position=
"absolute";e.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(e);k.sizer.appendChild(e);if("over"==g)l=c.top;else if("above"==g||"near"==g){var q=Math.max(k.wrapper.clientHeight,this.doc.height),n=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);("above"==g||c.bottom+e.offsetHeight>q)&&c.top>e.offsetHeight?l=c.top-e.offsetHeight:c.bottom+e.offsetHeight<=q&&(l=c.bottom);m+e.offsetWidth>n&&(m=n-e.offsetWidth)}e.style.top=l+"px";e.style.left=e.style.right="";"right"==h?(m=
k.sizer.clientWidth-e.offsetWidth,e.style.right="0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-e.offsetWidth)/2),e.style.left=m+"px");f&&(c=Pd(this,{left:m,top:l,right:m+e.offsetWidth,bottom:l+e.offsetHeight}),null!=c.scrollTop&&Vb(this,c.scrollTop),null!=c.scrollLeft&&ib(this,c.scrollLeft))},triggerOnKeyDown:ia(dg),triggerOnKeyPress:ia(fg),triggerOnKeyUp:eg,triggerOnMouseDown:ia(gg),execCommand:function(c){if(hc.hasOwnProperty(c))return hc[c].call(null,this)},triggerElectric:ia(function(c){mg(this,
c)}),findPosH:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);c=C(this.doc,c);for(var k=0;k<e&&(c=le(this.doc,c,h,f,g),!c.hitSide);++k);return c},moveH:ia(function(c,e){var f=this;this.extendSelectionsBy(function(g){return f.display.shift||f.doc.extend||g.empty()?le(f.doc,g.head,c,e,f.options.rtlMoveVisually):0>c?g.from():g.to()},pc)}),deleteH:ia(function(c,e){var f=this.doc;this.doc.sel.somethingSelected()?f.replaceSelection("",null,"+delete"):Eb(this,function(g){var h=le(f,g.head,c,e,!1);return 0>c?
{from:h,to:g.head}:{from:g.head,to:h}})}),findPosV:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);var k=C(this.doc,c);for(c=0;c<e&&(k=Aa(this,k,"div"),null==g?g=k.left:k.left=g,k=rg(this,k,h,f),!k.hitSide);++c);return k},moveV:ia(function(c,e){var f=this,g=this.doc,h=[],k=!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(m){if(k)return 0>c?m.from():m.to();var q=Aa(f,m.head,"div");null!=m.goalColumn&&(q.left=m.goalColumn);h.push(q.left);var n=rg(f,q,c,e);"page"==e&&
m==g.sel.primary()&&Mc(f,Gd(f,n,"div").top-q.top);return n},pc);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(c){var e=w(this.doc,c.line).text,f=c.ch,g=c.ch;if(e){var h=this.getHelper(c,"wordChars");"before"!=c.sticky&&g!=e.length||!f?++g:--f;var k=e.charAt(f);for(k=wc(k,h)?function(l){return wc(l,h)}:/\s/.test(k)?function(l){return/\s/.test(l)}:function(l){return!/\s/.test(l)&&!wc(l)};0<f&&k(e.charAt(f-1));)--f;for(;g<e.length&&k(e.charAt(g));)++g}return new J(t(c.line,
f),t(c.line,g))},toggleOverwrite:function(c){if(null==c||c!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Wa(this.display.cursorDiv,"CodeMirror-overwrite"):hb(this.display.cursorDiv,"CodeMirror-overwrite"),X(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==va()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ia(function(c,e){Ub(this,c,e)}),getScrollInfo:function(){var c=this.display.scroller;
return{left:c.scrollLeft,top:c.scrollTop,height:c.scrollHeight-Ha(this)-this.display.barHeight,width:c.scrollWidth-Ha(this)-this.display.barWidth,clientHeight:Bd(this),clientWidth:ab(this)}},scrollIntoView:ia(function(c,e){null==c?(c={from:this.doc.sel.primary().head,to:null},null==e&&(e=this.options.cursorScrollMargin)):"number"==typeof c?c={from:t(c,0),to:null}:null==c.from&&(c={from:c,to:null});c.to||(c.to=c.from);c.margin=e||0;null!=c.from.line?(Nc(this),this.curOp.scrollToPos=c):jf(this,c.from,
c.to,c.margin)}),setSize:ia(function(c,e){var f=this,g=function(k){return"number"==typeof k||/^\d+$/.test(String(k))?k+"px":k};null!=c&&(this.display.wrapper.style.width=g(c));null!=e&&(this.display.wrapper.style.height=g(e));this.options.lineWrapping&&Ve(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(k){if(k.widgets)for(var l=0;l<k.widgets.length;l++)if(k.widgets[l].noHScroll){Qa(f,h,"widget");break}++h});this.curOp.forceUpdate=!0;X(this,"refresh",this)}),operation:function(c){return pa(this,
c)},startOperation:function(){return jb(this)},endOperation:function(){return kb(this)},refresh:ia(function(){var c=this.display.cachedTextHeight;ma(this);this.curOp.forceUpdate=!0;Sb(this);Ub(this,this.doc.scrollLeft,this.doc.scrollTop);Td(this.display);(null==c||.5<Math.abs(c-tb(this.display))||this.options.lineWrapping)&&Ld(this);X(this,"refresh",this)}),swapDoc:ia(function(c){var e=this.doc;e.cm=null;this.state.selectingText&&this.state.selectingText();xf(this,c);Sb(this);this.display.input.reset();
Ub(this,c.scrollLeft,c.scrollTop);this.curOp.forceScroll=!0;ca(this,"swapDoc",this,e);return e}),phrase:function(c){var e=this.options.phrases;return e&&Object.prototype.hasOwnProperty.call(e,c)?e[c]:c},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};nb(a);a.registerHelper=function(c,e,f){d.hasOwnProperty(c)||
(d[c]=a[c]={_global:[]});d[c][e]=f};a.registerGlobalHelper=function(c,e,f,g){a.registerHelper(c,e,g);d[c]._global.push({pred:f,val:g})}})(V);var Ih="iter insert remove copy getEditor constructor".split(" "),tc;for(tc in oa.prototype)oa.prototype.hasOwnProperty(tc)&&0>ea(Ih,tc)&&(V.prototype[tc]=function(a){return function(){return a.apply(this.doc,arguments)}}(oa.prototype[tc]));nb(oa);V.inputStyles={textarea:W,contenteditable:P};V.defineMode=function(a){V.defaults.mode||"null"==a||(V.defaults.mode=
a);Cg.apply(this,arguments)};V.defineMIME=function(a,b){ob[a]=b};V.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});V.defineMIME("text/plain","null");V.defineExtension=function(a,b){V.prototype[a]=b};V.defineDocExtension=function(a,b){oa.prototype[a]=b};V.fromTextArea=function(a,b){function d(){a.value=h.getValue()}b=b?Xa(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var c=
va();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(z(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form;var f=e.submit;try{var g=e.submit=function(){d();e.submit=f;e.submit();e.submit=g}}catch(k){}}b.finishInit=function(k){k.save=d;k.getTextArea=function(){return a};k.toTextArea=function(){k.toTextArea=isNaN;d();a.parentNode.removeChild(k.getWrapperElement());a.style.display="";a.form&&(ra(a.form,"submit",d),b.leaveSubmitMethodAlone||"function"!=typeof a.form.submit||
(a.form.submit=f))}};a.style.display="none";var h=V(function(k){return a.parentNode.insertBefore(k,a.nextSibling)},b);return h};(function(a){a.off=ra;a.on=z;a.wheelEventPixels=Yg;a.Doc=oa;a.splitLines=ke;a.countColumn=wa;a.findColumn=ed;a.isWordChar=gd;a.Pass=Yc;a.signal=X;a.Line=xb;a.changeEnd=Ra;a.scrollbarModel=of;a.Pos=t;a.cmpPos=B;a.modes=kd;a.mimeModes=ob;a.resolveMode=yc;a.getMode=ld;a.modeExtensions=pb;a.extendMode=Dg;a.copyState=Ya;a.startState=te;a.innerMode=md;a.commands=hc;a.keyMap=gc;
a.keyName=Zf;a.isModifierKey=Wf;a.lookupKey=Db;a.normalizeKeyMap=jh;a.StringStream=Y;a.SharedTextMarker=fc;a.TextMarker=Ta;a.LineWidget=ec;a.e_preventDefault=la;a.e_stopPropagation=re;a.e_stop=Kb;a.addClass=Wa;a.contains=ka;a.rmClass=hb;a.keyNames=Ua})(V);V.version="5.58.1";return V});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.20';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){

let displayedExercises = require("./exercisesToShowOnIndex.js");
let quizExercises = require("./data/quiz.js");

let exercises = [...displayedExercises, ...quizExercises];

module.exports = exercises;
},{"./data/quiz.js":13,"./exercisesToShowOnIndex.js":21}],6:[function(require,module,exports){
module.exports = [{
  question: 'Given an array SCORES, output "TRUE" if each score is equal or greater than the one before. The array will be length 2 or more. You can use the property ARR.length to find the length of the array.',
  title: 'AP-1',
  name: 'ScoresIncreasing',
  inputs: [
    "([1, 3, 4])",
    "([1, 3, 2])",
    "([1, 1, 4])",
    "([1, 1, 2, 4, 4, 7])",
    "([1, 1, 2, 4, 3, 7])"
  ]
},
{
  question: 'Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.',
  title: 'AP-1',
  name: 'scores100',
  inputs: [
    "([1, 100, 100])",
    "([1, 100, 99, 100])",
    "([100, 1, 100, 100])",
    "([100, 1, 100, 1])",
    "([1, 2, 3, 4, 5])",
    "([1, 2, 100, 4, 5])"
  ]
},
{
  question: 'Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.',
  title: 'AP-1',
  name: 'scoresClump',
  inputs: [
    "([3, 4, 5])",
    "([3, 4, 6])",
    "([1, 3, 5, 5])",
    "([2, 4, 5, 6])",
    "([2, 4, 5, 7])",
    "([2, 4, 4, 7])",
    "([3, 3, 6, 7, 9])",
    "([3, 3, 7, 7, 9])",
    "([4, 5, 8])"
  ]
},
{
  question: 'Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We\'ll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper method int average(int[] scores, int start, int end) {  which computes the average of the elements between indexes start..end. Call your helper method twice to implement scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.',
  title: 'AP-1',
  name: 'scoresAverage',
  inputs: [
    "([2, 2, 4, 4])",
    "([4, 4, 4, 2, 2, 2])",
    "([3, 4, 5, 1, 2, 3])",
    "([5, 6])",
    "([5, 4])",
    "([5, 4, 5, 6, 2, 1, 2, 3])"
  ]
},
{
  question: 'Given an array of strings, return the count of the number of strings with the given length.',
  title: 'AP-1',
  name: 'wordsCount',
  inputs: [
    "(['a', 'bb', 'b', 'ccc'], 1)",
    "(['a', 'bb', 'b', 'ccc'], 3)",
    "(['a', 'bb', 'b', 'ccc'], 4)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 1)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 2)"
  ]
},
{
  question: 'Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.',
  title: 'AP-1',
  name: 'wordsFront',
  inputs: [
    "(['a', 'b', 'c', 'd'], 1)",
    "(['a', 'b', 'c', 'd'], 2)",
    "(['a', 'b', 'c', 'd'], 3)",
    "(['a', 'b', 'c', 'd'], 4)",
    "(['Hi', 'There'], 1)"
  ]
},
{
  question: 'Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.',
  title: 'AP-1',
  name: 'wordsWithoutList',
  inputs: [
    "(['a', 'bb', 'b', 'ccc'], 1)",
    "(['a', 'bb', 'b', 'ccc'], 3)",
    "(['a', 'bb', 'b', 'ccc'], 4)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 1)"
  ]
},
{
  question: 'Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.',
  title: 'AP-1',
  name: 'hasOne',
  inputs: [
    "(10)",
    "(22)",
    "(220)",
    "(212)",
    "(1)",
    "(9)",
    "(211112)",
    "(121121)",
    "(222222)",
    "(56156)",
    "(56556)"
  ]
},
{
  question: 'We\'ll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We\'ll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.',
  title: 'AP-1',
  name: 'dividesSelf',
  inputs: [
    "(128)",
    "(12)",
    "(120)",
    "(122)",
    "(13)",
    "(32)",
    "(22)",
    "(42)",
    "(212)",
    "(213)",
    "(162)"
  ]
},
{
  question: 'Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.',
  title: 'AP-1',
  name: 'copyEvens',
  inputs: [
    "([3, 2, 4, 5, 8], 2)",
    "([3, 2, 4, 5, 8], 3)",
    "([6, 1, 2, 4, 5, 8], 3)",
    "([6, 1, 2, 4, 5, 8], 4)",
    "([3, 1, 4, 1, 5], 1)",
    "([2], 1)",
    "([6, 2, 4, 8], 2)",
    "([6, 2, 4, 8], 3)",
    "([6, 2, 4, 8], 4)",
    "([1, 8, 4], 1)",
    "([1, 8, 4], 2)",
    "([2, 8, 4], 2)"
  ]
},
{
  question: 'We\'ll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array of positive ints, return a new array of length "count" containing the first endy numbers from the original array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will contain at least "count" endy numbers.',
  title: 'AP-1',
  name: 'copyEndy',
  inputs: [
    "([9, 11, 90, 22, 6], 2)",
    "([9, 11, 90, 22, 6], 3)",
    "([12, 1, 1, 13, 0, 20], 2)",
    "([12, 1, 1, 13, 0, 20], 3)",
    "([0], 1)",
    "([10, 11, 90], 2)",
    "([90, 22, 100], 2)",
    "([12, 11, 10, 89, 101, 4], 1)",
    "([13, 2, 2, 0], 2)",
    "([13, 2, 2, 0], 3)",
    "([13, 2, 13, 2, 0, 30], 2)",
    "([13, 2, 13, 2, 0, 30], 3)"
  ]
},
{
  question: 'Given 2 arrays that are the same length containing strings, compare the 1st string in one array to the 1st string in the other array, the 2nd to the 2nd and so on. Count the number of times that the 2 strings are non-empty and start with the same char. The strings may be any length, including 0.',
  title: 'AP-1',
  name: 'matchUp',
  inputs: [
    "(['aa', 'bb', 'cc'], ['aaa', 'xx', 'bb'])",
    "(['aa', 'bb', 'cc'], ['aaa', 'b', 'bb'])",
    "(['aa', 'bb', 'cc'], ['', '', 'ccc'])",
    "(['', '', 'ccc'], ['aa', 'bb', 'cc'])",
    "(['', '', ''], ['', 'bb', 'cc'])",
    "(['aa', 'bb', 'cc'], ['', '', ''])",
    "(['aa', '', 'ccc'], ['', 'bb', 'cc'])",
    "(['x', 'y', 'z'], ['y', 'z', 'x'])",
    "(['', 'y', 'z'], ['', 'y', 'x'])",
    "(['x', 'y', 'z'], ['xx', 'yyy', 'zzz'])",
    "(['x', 'y', 'z'], ['xx', 'yyy', ''])",
    "(['b', 'x', 'y', 'z'], ['a', 'xx', 'yyy', 'zzz'])",
    "(['aaa', 'bb', 'c'], ['aaa', 'xx', 'bb'])"
  ]
},
{
  question: 'The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student\'s answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.',
  title: 'AP-1',
  name: 'scoreUp',
  inputs: [
    "(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'c'])",
    "(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'b'])",
    "(['a', 'a', 'b', 'b'], ['?', 'c', 'b', '?'])",
    "(['a', 'a', 'b', 'b'], ['?', 'c', '?', '?'])",
    "(['a', 'a', 'b', 'b'], ['c', '?', 'b', 'b'])",
    "(['a', 'a', 'b', 'b'], ['c', '?', 'b', '?'])",
    "(['a', 'b', 'c'], ['a', 'c', 'b'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', 'a', 'c', 'a', 'c'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'a', 'c'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'c', 'c'])",
    "(['a', 'b', 'c'], ['a', 'b', 'c'])"
  ]
},
{
  question: 'Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.',
  title: 'AP-1',
  name: 'wordsWithout',
  inputs: [
    "(['a', 'b', 'c', 'a'], 'a')",
    "(['a', 'b', 'c', 'a'], 'b')",
    "(['a', 'b', 'c', 'a'], 'c')",
    "(['b', 'c', 'a', 'a'], 'b')",
    "(['xx', 'yyy', 'x', 'yy', 'x'], 'x')",
    "(['xx', 'yyy', 'x', 'yy', 'x'], 'yy')",
    "(['aa', 'ab', 'ac', 'aa'], 'aa')"
  ]
},
{
  question: 'Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To practice decomposition, write a separate helper method which finds the largest special score in an array. Write your helper method after your scoresSpecial() method in the JavaBat text area.',
  title: 'AP-1',
  name: 'scoresSpecial',
  inputs: [
    "([12, 10, 4], [2, 20, 30])",
    "([20, 10, 4], [2, 20, 10])",
    "([12, 11, 4], [2, 20, 31])",
    "([1, 20, 2, 50], [3, 4, 5])",
    "([3, 4, 5], [1, 50, 2, 20])",
    "([10, 4, 20, 30], [20])",
    "([10, 4, 20, 30], [20])",
    "([10, 4, 20, 30], [3, 20, 99])",
    "([10, 4, 20, 30], [30, 20, 99])",
    "([], [2])",
    "([], [20])",
    "([14, 10, 4], [4, 20, 30])"
  ]
},
{
  question: 'We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'sumHeights',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 4)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 5)"
  ]
},
{
  question: '(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index, however increases in height count double. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1*2 + 5 = 7. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'sumHeights2',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 4)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 5)"
  ]
},
{
  question: '(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the number of "big" steps for a walk starting at the start index and ending at the end index. We\'ll say that  step is big if it is 5 or more up or down. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'bigHeights',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 3], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([5, 13, 6, 7, 2], 1, 2)",
    "([5, 13, 6, 7, 2], 0, 2)",
    "([5, 13, 6, 7, 2], 1, 4)",
    "([5, 13, 6, 7, 2], 0, 4)",
    "([5, 13, 6, 7, 2], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 3, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 2, 8)"
  ]
},
{
  question: 'We have data for two users, A and B, each with a String name and an int id. The goal is to order the users such as for sorting. Return -1 if A comes before B, 1 if A comes after B, and 0 if they are the same. Order first by the string names, and then by the id numbers if the names are the same. Note: with Strings str1.compareTo(str2) returns an int value which is negative/0/positive to indicate how str1 is ordered to str2 (the value is not limited to -1/0/1). (On the AP, there would be two User objects, but here the code simply takes the two strings and two ints directly. The code logic is the same.)',
  title: 'AP-1',
  name: 'userCompare',
  inputs: [
    "('bb', 1, 'zz', 2)",
    "('bb', 1, 'aa', 2)",
    "('bb', 1, 'bb', 1)",
    "('bb', 5, 'bb', 1)",
    "('bb', 5, 'bb', 10)",
    "('adam', 1, 'bob', 2)",
    "('bob', 1, 'bob', 2)",
    "('bzb', 1, 'bob', 2)"
  ]
},
{
  question: 'Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.',
  title: 'AP-1',
  name: 'mergeTwo',
  inputs: [
    "(['a', 'c', 'z'], ['b', 'f', 'z'], 3)",
    "(['a', 'c', 'z'], ['c', 'f', 'z'], 3)",
    "(['f', 'g', 'z'], ['c', 'f', 'g'], 3)",
    "(['a', 'c', 'z'], ['a', 'c', 'z'], 3)",
    "(['a', 'b', 'c', 'z'], ['a', 'c', 'z'], 3)",
    "(['a', 'c', 'z'], ['a', 'b', 'c', 'z'], 3)",
    "(['a', 'c', 'z'], ['a', 'c', 'z'], 2)",
    "(['a', 'c', 'z'], ['a', 'c', 'y', 'z'], 3)",
    "(['x', 'y', 'z'], ['a', 'b', 'z'], 3)"
  ]
},
{
  question: 'Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.',
  title: 'AP-1',
  name: 'commonTwo',
  inputs: [
    "(['a', 'c', 'x'], ['b', 'c', 'd', 'x'])",
    "(['a', 'c', 'x'], ['a', 'b', 'c', 'x', 'z'])",
    "(['a', 'b', 'c'], ['a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'c', 'c'])",
    "(['b', 'b', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c'])",
    "(['a', 'b', 'c', 'c', 'd'], ['a', 'b', 'b', 'c', 'd', 'd'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b'])",
    "(['a', 'a', 'b', 'b', 'c'], ['c', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b', 'x'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b'])",
    "(['a'], ['a', 'b'])",
    "(['a'], ['b'])",
    "(['a', 'a'], ['b', 'b'])",
    "(['a', 'b'], ['a', 'b'])"
  ]
}
];


},{}],7:[function(require,module,exports){
/**--- Solutions --- **/

let solutions = {};

solutions.ScoresIncreasing = `method ScoresIncreasing(SCORES)
  WORKS = "TRUE"
  loop I from 0 to SCORES.length - 1
    if SCORES[I] != SCORES[I-1] AND SCORES[I] < SCORES[I-1] then
      WORKS = "FALSE"
    end if
  end loop
  output WORKS
end method`;

solutions.scores100 = function scores100(scores) {
  let count = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == 100 && scores[i + 1] == 100) {
      count += 1;
    }
  }
  return count > 0;
}

solutions.scoresClump = function scoresClump(scores) {

  for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i + 2] - scores[i] <= 2) {
      return true;
    }
  }
  return false;
}

solutions.scoresAverage = function scoresAverage(scores) {

  function average(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
    }
    return sum / nums.length;
  }

  let half = scores.length / 2
  let first = [];
  let second = [];

  for (let i = 0; i < half; i++) {
    first.push(scores[i])
  };

  for (let i = half; i < scores.length; i++) {
    second.push(scores[i])
  };

  let av1 = average(first);
  let av2 = average(second);

  if (av1 > av2) {
    return av1;
  }
  return av2
}

solutions.wordsCount = function wordsCount(words, len) {

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length == len) {
      count += 1;
    }
  }
  return count;
}

solutions.wordsFront = function wordsFront(words, n) {

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(words[i]);
  }
  return arr;
}

solutions.wordsWithoutList = function wordsWithoutList(words, len) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length != len) {
      arr.push(words[i]);
    }
  }
  return arr;
}

solutions.hasOne = function hasOne(n) {

  let str = n.toString()

  let j = str.length - 1;
  while (j >= 0) {
    if (parseInt(str[j]) % 10 == 1) {
      return true;
    }
    j--;
  }
  return false;
}

solutions.dividesSelf = function dividesSelf(n) {
  let num = n.toString();

  let j = num.length - 1;

  while (j >= 0) {
    if (n % parseInt(num[j]) != 0) {
      return false;
    }
    j--;
  }
  return true;
}

solutions.copyEvens = function copyEvens(nums, count) {

  let erray = [];
  let j = count;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      erray.push(nums[i]);
      j--;
      if (j < 1) break
    }
  }
  return erray;
}

solutions.copyEndy = function copyEndy(nums, count) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n >= 0 && n <= 10 || n >= 90 && n <= 100) {
      newArray.push(n);
    }
    if (newArray.length === count) {
      break;
    }
  }
  return newArray;
}

solutions.matchUp = function matchUp(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].length > 0 && b[i].length > 0 &&
      a[i].charAt(0) == b[i].charAt(0)) {
      count++;
    }
  }

  return count;
}

solutions.scoreUp = function scoreUp(key, answers) {
  let score = 0;

  for (let i = 0; i < key.length; i++) {
    if (answers[i] == "?") {
      score += 0;
    }
    else if (key[i] != answers[i]) {
      score -= 1;
    } else {
      score += 4;
    }
  }
  return score;
}

solutions.wordsWithout = function wordsWithout(words, target) {
  let nuarr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] != target) {
      nuarr.push(words[i]);
    }
  }
  return nuarr;
}

solutions.scoresSpecial = function scoresSpecial(a, b) {
  function largest(x) {

    let big = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] > big && x[i] % 10 == 0) {
        big = x[i]
      }
    }

    return big;
  }
  let ares = largest(a);
  let bres = largest(b);

  return ares + bres;
}

solutions.sumHeights = function sumHeights(heights, start, end) {
  let res = 0;
  for (let i = start; i < end; i++) {
    res += Math.abs(heights[i] - heights[i + 1])
  }
  return res;
}

solutions.sumHeights2 = function sumHeights2(heights, start, end) {

  let sum = 0;
  for (let i = start; i < end; i++) {
    if (heights[i + 1] > heights[i]) {
      sum += Math.abs(heights[i] - heights[i + 1]) * 2
    } else {
      sum += Math.abs(heights[i] - heights[i + 1]);
    }
  }
  return sum;
}

solutions.bigHeights = function bigHeights(heights, start, end) {
  let count = 0;
  for (let i = start; i < end; i++) {
    if (Math.abs(heights[i] - heights[i + 1]) >= 5) {
      count += 1;
    }
  }
  return count;
}

solutions.userCompare = function userCompare(aName, aId, bName, bId) {

  if (aName < bName) {
    return -1;
  } else if (aName > bName) {
    return 1;
  } else if (aId < bId) {
    return -1;
  } else if (aId > bId) {
    return 1;
  }
  return 0;
}

solutions.mergeTwo = function mergeTwo(a, b, n) {
  let abinit = a.concat(b);
  let ab = abinit.sort();

  let arr = ""

  let count = n;

  for (let i = 0; i < ab.length - 1; i++) {
    if (count <= 0) { break; }

    if (ab[i] == ab[i + 1] && arr.charAt(arr.length - 1) != ab[i]) {
      arr += ab[i];
      count--;
      i++;
    } else {
      arr += ab[i];
      count--;
    }
  }
  return arr.split("");
}

solutions.commonTwo = function commonTwo(a, b) {
  let str = "";
  let count = 0;

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] == b[i] && !str.includes(a[j])) {
        str += a[j];
        count++;
      }
    }
  }
  return count;
}

module.exports = solutions;
},{}],8:[function(require,module,exports){
module.exports = [
  {
    //title is the category it appears in on the homepage
    title: 'Array-1',
    // Pseudocode problems should start with a capital letter
    name: 'FirstLast6',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      '([1, 2, 6])',
      '([6, 1, 2, 3])',
      '([13, 6, 1, 2, 3])',
      '([13, 6, 1, 2, 6])',
      '([3, 2, 1])',
      '([3, 6, 1])',
      '([3, 6])',
      '([6])',
      '([3])',
      '([5, 6])',
      '([5, 5])',
      '([1, 2, 3, 4, 6])',
      '([1, 2, 3, 4])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given an array of numbers, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more. You can use the property ARR.length to access the array's length`,
  },
  {
    title: 'Array-1',
    name: 'sameFirstLast',
    inputs: [
      '([1, 2, 3])',
      '([1, 2, 3, 1])',
      '([1, 2, 1])',
      '([7])',
      '([])',
      '([1, 2, 3, 4, 5, 1])',
      '([1, 2, 3, 4, 5, 13])',
      '([13, 2, 3, 4, 5, 13])',
      '([7, 7])',
    ],
    question: `Given an array of ints, return true if the array is length 1 or more, and the first
    element and the last element are equal.`,
  },
  {
    title: 'Array-1',
    name: 'makePi',
    inputs: [
      '()',
    ],
    question: 'Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.',
  },
  {
    title: 'Array-1',
    name: 'commonEnd',
    inputs: [
      '([1, 2, 3], [7, 3])',
      '([1, 2, 3], [7, 3, 2])',
      '([1, 2, 3], [1, 3])',
      '([1, 2, 3], [1])',
      '([1, 2, 3], [2])',
    ],
    question: `Given 2 arrays of ints, a and b, return true if they have the same first element
    or they have the same last element. Both arrays will be length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'sum3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 2])',
      '([7, 0, 0])',
      '([1, 2, 1])',
      '([1, 1, 1])',
      '([2, 7, 2])',
    ],
    question: 'Given an array of ints length 3, return the sum of all the elements.',
  },
  {
    title: 'Array-1',
    name: 'rotateLeft3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 9])',
      '([7, 0, 0])',
      '([1, 2, 1])',
      '([0, 0, 1])',
    ],
    question: `Given an array of ints length 3, return an array with the elements
    "rotated left" so {1, 2, 3} yields {2, 3, 1}.`,
  },
  {
    title: 'Array-1',
    name: 'reverse3',
    inputs: [
      '([1, 2, 3])',
      '([5, 11, 9])',
      '([7, 0, 0])',
      '([2, 1, 2])',
      '([1, 2, 1])',
      '([2, 11, 3])',
      '([0, 6, 5])',
      '([7, 2, 3])',
    ],
    question: `Given an array of ints length 3, return a new array with the elements
    in reverse order, so {1, 2, 3} becomes {3, 2, 1}.`,
  },
  {
    title: 'Array-1',
    name: 'maxEnd3',
    inputs: [
      '([1, 2, 3])',
      '([11, 5, 9])',
      '([2, 11, 3])',
      '([11, 3, 3])',
      '([3, 11, 11])',
      '([2, 2, 2])',
      '([2, 11, 2])',
      '([0, 0, 1])',
    ],
    question: `Given an array of ints length 3, figure out which is larger, the first
    or last element in the array, and set all the other elements to be that value.
    Return the changed array.`,
  },
  {
    title: 'Array-1',
    name: 'sum2',
    inputs: [
      '([1, 2, 3])',
      '([1, 1])',
      '([1, 1, 1, 1])',
      '([1, 2])',
      '([1])',
      '([])',
      '([4, 5, 6])',
      '([4])',
    ],
    question: `Given an array of ints, return the sum of the first 2 elements in the array.
    If the array length is less than 2, just sum up the elements that exist, returning 0 if
    the array is length 0.`,
  },
  {
    title: 'Array-1',
    name: 'middleWay',
    inputs: [
      '([1, 2, 3], [4, 5, 6])',
      '([7, 7, 7], [3, 8, 0])',
      '([5, 2, 9], [1, 4, 5])',
      '([1, 9, 7], [4, 8, 8])',
      '([1, 2, 3], [3, 1, 4])',
      '([1, 2, 3], [4, 1, 1])',
    ],
    question: `Given 2 int arrays, a and b, each length 3, return a new array length 2
    containing their middle elements.`,
  },
  {
    title: 'Array-1',
    name: 'makeEnds',
    inputs: [
      '([1, 2, 3])',
      '([1, 2, 3, 4])',
      '([7, 4, 6, 2])',
      '([1, 2, 2, 2, 2, 2, 2, 3])',
      '([7, 4])',
      '([7])',
      '([5, 2, 9])',
      '([2, 3, 4, 1])',
    ],
    question: `Given an array of ints, return a new array length 2 containing the
    first and last elements from the original array. The original array will be
    length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'has23',
    inputs: [
      '([2, 5])',
      '([4, 3])',
      '([4, 5])',
      '([2, 2])',
      '([3, 2])',
      '([3, 3])',
      '([7, 7])',
      '([3, 9])',
      '([9, 5])',
    ],
    question: 'Given an int array length 2, return true if it contains a 2 or a 3.',
  },
  {
    title: 'Array-1',
    name: 'no23',
    inputs: [
      '([4, 5])',
      '([4, 2])',
      '([3, 5])',
      '([1, 9])',
      '([2, 9])',
      '([1, 3])',
      '([1, 1])',
      '([2, 2])',
      '([3, 3])',
      '([7, 8])',
      '([8, 7])',
    ],
    question: 'Given an int array length 2, return true if it does not contain a 2 or 3.',
  },
  {
    title: 'Array-1',
    name: 'makeLast',
    inputs: [
      '([4, 5, 6])',
      '([1, 2])',
      '([3])',
      '([0])',
      '([7, 7, 7])',
      '([3, 1, 4])',
      '([1, 2, 3, 4])',
      '([1, 2, 3, 0])',
      '([2, 4])',
    ],
    question: `Given an int array, return a new array with double the length where its last
    element is the same as the original array, and all the other elements are 0. The original
    array will be length 1 or more.`,
  },
  {
    title: 'Array-1',
    name: 'double23',
    inputs: [
      '([2, 2])',
      '([3, 3])',
      '([2, 3])',
      '([3, 2])',
      '([4, 5])',
      '([2])',
      '([3])',
      '([])',
      '([3, 4])',
    ],
    question: `Given an int array, return true if the array contains 2 twice, or 3 twice.
    The array will be length 0, 1, or 2.`,
  },
  {
    title: 'Array-1',
    name: 'fix23',
    inputs: [
      '([1, 2, 3])',
      '([2, 3, 5])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an int array length 3, if there is a 2 in the array immediately
    followed by a 3, set the 3 element to 0. Return the changed array.`,
  },
  {
    title: 'Array-1',
    name: 'start1',
    inputs: [
      '([1, 2, 3], [1, 3])',
      '([7, 2, 3], [1])',
      '([1, 2], [])',
      '([], [1, 2])',
      '([7], [])',
      '([7], [1])',
      '([1], [1])',
      '([7], [8])',
      '([], [])',
      '([1, 3], [1])',
    ],
    question: `Start with 2 int arrays, a and b, of any length. Return how many of the arrays
    have 1 as their first element.`,
  },
  {
    title: 'Array-1',
    name: 'biggerTwo',
    inputs: [
      '([1, 2], [3, 4])',
      '([3, 4], [1, 2])',
      '([1, 1], [1, 2])',
      '([2, 1], [1, 1])',
      '([2, 2], [1, 3])',
      '([1, 3], [2, 2])',
      '([6, 7], [3, 1])',
    ],
    question: `Start with 2 int arrays, a and b, each length 2. Consider the sum of the
    values in each array. Return the array which has the largest sum. In event of a tie,
    return a.`,
  },
  {
    title: 'Array-1',
    name: 'makeMiddle',
    inputs: [
      '([1, 2, 3, 4])',
      '([7, 1, 2, 3, 4, 9])',
      '([1, 2])',
      '([5, 2, 4, 7])',
      '([9, 0, 4, 3, 9, 1])',
    ],
    question: `Given an array of ints of even length, return a new array length 2
    containing the middle two elements from the original array. The original array
    will be length 2 or more.`,
  },
  {
    title: 'Array-1',
    name: 'plusTwo',
    inputs: [
      '([1, 2], [3, 4])',
      '([4, 4], [2, 2])',
      '([9, 2], [3, 4])',
    ],
    question: `Given 2 int arrays, each length 2, return a new array length 4
    containing all their elements.`,
  },
  {
    title: 'Array-1',
    name: 'swapEnds',
    inputs: [
      '([1, 2, 3, 4])',
      '([1, 2, 3])',
      '([8, 6, 7, 9, 5])',
      '([3, 1, 4, 1, 5, 9])',
      '([1, 2])',
      '([1])',
    ],
    question: `Given an array of ints, swap the first and last elements in the array.
    Return the modified array. The array length will be at least 1.`,
  },
  {
    title: 'Array-1',
    name: 'midThree',
    inputs: [
      '([1, 2, 3, 4, 5])',
      '([8, 6, 7, 5, 3, 0, 9])',
      '([1, 2, 3])',
    ],
    question: `Given an array of ints of odd length, return a new array length 3
    containing the elements from the middle of the array. The array length will be
    at least 3.`,
  },
  {
    title: 'Array-1',
    name: 'maxTriple',
    inputs: [
      '([1, 2, 3])',
      '([1, 5, 3])',
      '([5, 2, 3])',
      '([1, 2, 3, 1, 1])',
      '([1, 7, 3, 1, 5])',
      '([5, 1, 3, 7, 1])',
      '([5, 1, 7, 3, 7, 8, 1])',
      '([5, 1, 7, 9, 7, 8, 1])',
      '([5, 1, 7, 3, 7, 8, 9])',
      '([2, 2, 5, 1, 1])',
    ],
    question: `Given an array of ints of odd length, look at the first, last,
    and middle values in the array and return the largest. The array length will
    be a least 1.`,
  },
  {
    title: 'Array-1',
    name: 'frontPiece',
    inputs: [
      '([1, 2, 3])',
      '([1, 2])',
      '([1])',
      '([])',
      '([6, 5, 0])',
      '([6, 5])',
      '([3, 1, 4, 1, 5])',
      '([6])',
    ],
    question: `Given an int array of any length, return a new array of its first
    2 elements. If the array is smaller than length 2, use whatever
    elements are present.`,
  },
  {
    title: 'Array-1',
    name: 'unlucky1',
    inputs: [
      '([1, 3, 4, 5])',
      '([2, 1, 3, 4, 5])',
      '([1, 1, 1])',
      '([1, 3, 1])',
      '([1, 1, 3])',
      '([1, 2, 3])',
      '([3, 3, 3])',
      '([1, 3])',
      '([1, 4])',
      '([1])',
      '([])',
      '([1, 1, 1, 3, 1])',
      '([1, 1, 3, 1, 1])',
      '([1, 1, 1, 1, 3])',
      '([1, 4, 1, 5])',
      '([1, 1, 2, 3])',
      '([2, 3, 2, 1])',
      '([2, 3, 1, 3])',
      '([1, 2, 3, 4, 1, 3])',
    ],
    question: `We'll say that a 1 immediately followed by a 3 in an array is
    an "unlucky" 1. Return true if the given array contains an unlucky 1 in the
    first 2 or last 2 positions in the array.`,
  },
  {
    title: 'Array-1',
    name: 'make2',
    inputs: [
      '([4, 5], [1, 2, 3])',
      '([4], [1, 2, 3])',
      '([], [1, 2])',
      '([1, 2], [])',
      '([3], [1, 2, 3])',
      '([3], [1])',
      '([3, 1, 4], [])',
      '([1], [1])',
      '([1, 2, 3], [7, 8])',
      '([7, 8], [1, 2, 3])',
      '([7], [1, 2, 3])',
      '([5, 4], [2, 3, 7])',
    ],
    question: `Given 2 int arrays, a and b, return a new array length 2 containing,
    as much as will fit, the elements from a followed by the elements from b. The
    arrays may be any length, including 0, but there will be 2 or more elements
    available between the 2 arrays.`,
  },
  {
    title: 'Array-1',
    name: 'front11',
    inputs: [
      '([1, 2, 3], [7, 9, 8])',
      '([1], [2])',
      '([1, 7], [])',
      '([], [2, 8])',
      '([], [])',
      '([3], [1, 4, 1, 9])',
      '([1, 4, 1, 9], [])',
    ],
    question: `Given 2 int arrays, a and b, of any length, return a new array with the
    first element of each array. If either array is length 0, ignore that array.`,
  },
  {
    title: 'Array-2',
    name: 'findLowestIndex',
    inputs: [
      "([99, 98, 97, 96, 95])",
      "([2, 2, 0])",
      "([1, 3, 5])",
      "([5])",
      "([11, 9, 0, 1])",
      "([2, 11, 9, 0])",
      "([2])",
      "([2, 5, -12])",
    ],

    question: `Return the index of the minimum value in an array. The input array will have at
     least one element in it.`
  },
  {
    title: 'Array-2',
    name: 'countEvens',
    inputs: [
      "([2, 1, 2, 3, 4])",
      "([2, 2, 0])",
      "([1, 3, 5])",
      "([])",
      "([11, 9, 0, 1])",
      "([2, 11, 9, 0])",
      "([2])",
      "([2, 5, 12])",
    ],

    question: `Return the number of even ints in the given array. Note: the % "mod"
    operator computes the remainder, e.g. 5 % 2 is 1.`
  },
  {
    title: 'Array-2',
    name: 'bigDiff',
    inputs: [
      "([10, 3, 5, 6])",
      "([7, 2, 10, 9])",
      "([2, 10, 7, 2])",
      "([2, 10])",
      "([10, 2])",
      "([10, 0])",
      "([2, 3])",
      "([2, 2])",
      "([2])",
      "([5, 1, 6, 1, 9, 9])",
      "([7, 6, 8, 5])",
      "([7, 7, 6, 8, 5, 5, 6])",
    ],
    question: `Given an array length 1 or more of ints, return the difference between
    the largest and smallest values in the array. Note: the built-in Math.min(v1, v2)
    and Math.max(v1, v2) methods return the smaller or larger of two values.`
  },
  {
    title: 'Array-2',
    name: 'centeredAverage',
    inputs: [
      "([1, 2, 3, 4, 100])",
      "([1, 1, 5, 5, 10, 8, 7])",
      "([-10, -4, -2, -4, -2, 0])",
      "([5, 3, 4, 6, 2])",
      "([5, 3, 4, 0, 100])",
      "([100, 0, 5, 3, 4])",
      "([4, 0, 100])",
      "([0, 2, 3, 4, 100])",
      "([1, 1, 100])",
      "([7, 7, 7])",
      "([1, 7, 8])",
      "([1, 1, 99, 99])",
      "([1000, 0, 1, 99])",
      "([4, 4, 4, 4, 5])",
      "([4, 4, 4, 1, 5])",
      "([6, 4, 8, 12, 3])",
    ],
    question: `Return the "centered" average of an array of ints, which we'll say
    is the mean average of the values, except ignoring the largest and smallest
    values in the array. If there are multiple copies of the smallest value, ignore
    just one copy, and likewise for the largest value. Use int division to produce
    the final average. You may assume that the array is length 3 or more.`
  },
  {
    title: 'Array-2',
    name: 'sum13',
    inputs: [
      "([1, 2, 2, 1])",
      "([1, 1])",
      "([1, 2, 2, 1, 13])",
      "([1, 2, 13, 2, 1, 13])",
      "([13, 1, 2, 13, 2, 1, 13])",
      "([])",
      "([13])",
      "([13, 13])",
      "([13, 0, 13])",
      "([13, 1, 13])",
      "([5, 7, 2])",
      "([5, 13, 2])",
      "([0])",
      "([13, 0])",
    ],
    question: `Return the sum of the numbers in the array, returning 0 for an empty array.
    Except the number 13 is very unlucky, so it does not count and numbers that come
    immediately after a 13 also do not count.`
  },
  {
    title: 'Array-2',
    name: 'sum67',
    inputs: [
      "([1, 2, 2])",
      "([1, 2, 2, 6, 99, 99, 7])",
      "([1, 1, 6, 7, 2])",
      "([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])",
      "([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7])",
      "([2, 7, 6, 2, 6, 7, 2, 7])",
      "([2, 7, 6, 2, 6, 2, 7])",
      "([1, 6, 7, 7])",
      "([6, 7, 1, 6, 7, 7])",
      "([6, 8, 1, 6, 7])",
      "([])",
      "([6, 7, 11])",
      "([11, 6, 7, 11])",
      "([2, 2, 6, 7, 7])",
    ],
    question: `Return the sum of the numbers in the array, except ignore sections of
     numbers starting with a 6 and extending to the next 7 (every 6 will be followed
       by at least one 7). Return 0 for no numbers.`
  },
  {
    title: 'Array-2',
    name: 'has22',
    inputs: [
      "([1, 2, 2])",
      "([1, 2, 1, 2])",
      "([2, 1, 2])",
      "([2, 2, 1, 2])",
      "([1, 3, 2])",
      "([1, 3, 2, 2])",
      "([2, 3, 2, 2])",
      "([4, 2, 4, 2, 2, 5])",
      "([1, 2])",
      "([2, 2])",
      "([2])",
      "([])",
      "([3, 3, 2, 2])",
      "([5, 2, 5, 2])",
    ],
    question: `Given an array of ints, return true if the array contains
    a 2 next to a 2 somewhere.`
  },
  {
    title: 'Array-2',
    name: 'lucky13',
    inputs: [
      "([0, 2, 4])",
      "([1, 2, 3])",
      "([1, 2, 4])",
      "([2, 7, 2, 8])",
      "([2, 7, 1, 8])",
      "([3, 7, 2, 8])",
      "([2, 7, 2, 1])",
      "([1, 2])",
      "([2, 2])",
      "([2])",
      "([3])",
      "([])",
    ],
    question: `Given an array of ints, return true if the array contains no 1's and no 3's.`
  },
  {
    title: 'Array-2',
    name: 'sum28',
    inputs: [
      "([2, 3, 2, 2, 4, 2])",
      "([2, 3, 2, 2, 4, 2, 2])",
      "([1, 2, 3, 4])",
      "([2, 2, 2, 2])",
      "([1, 2, 2, 2, 2, 4])",
      "([])",
      "([2])",
      "([8])",
      "([2, 2, 2])",
      "([2, 2, 2, 2, 2])",
      "([1, 2, 2, 1, 2, 2])",
      "([5, 2, 2, 2, 4, 2])",
    ],
    question: `Given an array of ints, return true if the sum of all the 2's in
    the array is exactly 8.`
  },
  {
    title: 'Array-2',
    name: 'more14',
    inputs: [
      "([1, 4, 1])",
      "([1, 4, 1, 4])",
      "([1, 1])",
      "([1, 6, 6])",
      "([1])",
      "([1, 4])",
      "([6, 1, 1])",
      "([1, 6, 4])",
      "([1, 1, 4, 4, 1])",
      "([1, 1, 6, 4, 4, 1])",
      "([])",
      "([4, 1, 4, 6])",
      "([4, 1, 4, 6, 1])",
      "([1, 4, 1, 4, 1, 6])",
    ],
    question: `Given an array of ints, return true if the number of 1's is greater
    than the number of 4's`
  },
  {
    title: 'Array-2',
    name: 'prependSum',
    inputs: [
      "([1, 2, 4, 4])",
      "([3, 3, 0])",
      "([1, 1, 1, 1, 1])",
      "([5, 7])",
      "([0, 0, 0, 0])",
      "([12, 13, 19, 20])",
      "([-2, 2, -2, 2])",
      "([5, 4, 3, 2, 1, 0])",
    ],

    question: `Return a modified version of the input array (nums), where the first two items have been removed
    and one item – the sum of those two items - is added to the start of the array.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray',
    inputs: [
      "(4)",
      "(1)",
      "(10)",
      "(0)",
      "(2)",
      "(7)",
    ],
    question: `Given a number n, create and return a new array of length n,
    containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case
    just return a length 0 array. You do not need a separate if-statement for the
    length-0 case; the for-loop should naturally execute 0 times in that case,
    so it just works. The syntax to make a new array is let myArray = [];`
  },
  {
    title: 'Array-2',
    name: 'only14',
    inputs: [
      "([1, 4, 1, 4])",
      "([1, 4, 2, 4])",
      "([1, 1])",
      "([4, 1])",
      "([2])",
      "([])",
      "([1, 4, 1, 3])",
      "([3, 1, 3])",
      "([1])",
      "([4])",
      "([3, 4])",
      "([1, 3, 4])",
      "([1, 1, 1])",
      "([1, 1, 1, 5])",
      "([4, 1, 4, 1])",
    ],
    question: `Given an array of ints, return true if every element is a 1 or a 4.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray2',
    inputs: [
      "(4)",
      "(10)",
      "(2)",
      "(1)",
      "(0)",
      "(7)",
      "(9)",
      "(11)",
    ],
    question: `Given a number n, create and return a new string array of length n,
    containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case
    just return a length 0 array. Note: String(xxx) will make the String
    form of most types.`
  },
  {
    title: 'Array-2',
    name: 'no14',
    inputs: [
      "([1, 2, 3])",
      "([1, 2, 3, 4])",
      "([2, 3, 4])",
      "([1, 1, 4, 4])",
      "([2, 2, 4, 4])",
      "([2, 3, 4, 1])",
      "([2, 1, 1])",
      "([1, 4])",
      "([2])",
      "([2, 1])",
      "([1])",
      "([4])",
      "([])",
      "([1, 1, 1, 1])",
      "([9, 4, 4, 1])",
      "([4, 2, 3, 1])",
      "([4, 2, 3, 5])",
      "([4, 4, 2])",
      "([1, 4, 4])",
    ],
    question: `Given an array of ints, return true if it contains no 1's or it contains no 4's.`
  },
  {
    title: 'Array-2',
    name: 'isEverywhere',
    inputs: [
      "([1, 2, 1, 3], 1)",
      "([1, 2, 1, 3], 2)",
      "([1, 2, 1, 3, 4], 1)",
      "([2, 1, 2, 1], 1)",
      "([2, 1, 2, 1], 2)",
      "([2, 1, 2, 3, 1], 2)",
      "([3, 1], 3)",
      "([3, 1], 2)",
      "([3], 1)",
      "([], 1)",
      "([1, 2, 1, 2, 3, 2, 5], 2)",
      "([1, 2, 1, 1, 1, 2], 2)",
      "([2, 1, 2, 1, 1, 2], 2)",
      "([2, 1, 2, 2, 2, 1, 1, 2], 2)",
      "([2, 1, 2, 2, 2, 1, 2, 1], 2)",
      "([2, 1, 2, 1, 2], 2)",
    ],
    question: `We'll say that a value is "everywhere" in an array if for every
    pair of adjacent elements in the array, at least one of the pair is that value.
    Return true if the given value is everywhere in the array.`
  },
  {
    title: 'Array-2',
    name: 'either24',
    inputs: [
      "([1, 2, 2])",
      "([4, 4, 1])",
      "([4, 4, 1, 2, 2])",
      "([1, 2, 3, 4])",
      "([3, 5, 9])",
      "([1, 2, 3, 4, 4])",
      "([2, 2, 3, 4])",
      "([1, 2, 3, 2, 2, 4])",
      "([1, 2, 3, 2, 2, 4, 4])",
      "([1, 2])",
      "([2, 2])",
      "([4, 4])",
      "([2])",
      "([])",
    ],
    question: `Given an array of ints, return true if the array contains a 2
    next to a 2 or a 4 next to a 4, but not both.`
  },
  {
    title: 'Array-2',
    name: 'matchUp',
    inputs: [
      "([1, 2, 3], [2, 3, 10])",
      "([1, 2, 3], [2, 3, 5])",
      "([1, 2, 3], [2, 3, 3])",
      "([5, 3], [5, 5])",
      "([5, 3], [4, 4])",
      "([5, 3], [3, 3])",
      "([5, 3], [2, 2])",
      "([5, 3], [1, 1])",
      "([5, 3], [0, 0])",
      "([4], [4])",
      "([4], [5])",
    ],
    question: `Given arrays nums1 and nums2 of the same length, for every element
    in nums1, consider the corresponding element in nums2 (at the same index).
    Return the count of the number of times that the two elements differ by 2 or
    less, but are not equal.`
  },
  {
    title: 'Array-2',
    name: 'has77',
    inputs: [
      "([1, 7, 7])",
      "([1, 7, 1, 7])",
      "([1, 7, 1, 1, 7])",
      "([7, 7, 1, 1, 7])",
      "([2, 7, 2, 2, 7, 2])",
      "([2, 7, 2, 2, 7, 7])",
      "([7, 2, 7, 2, 2, 7])",
      "([7, 2, 6, 2, 2, 7])",
      "([7, 7, 7])",
      "([7, 1, 7])",
      "([7, 1, 1])",
      "([1, 2])",
      "([1, 7])",
      "([7])",
    ],
    question: `Given an array of ints, return true if the array contains two 7's
    next to each other, or there are two 7's separated by one element,
    such as with {7, 1, 7}.`
  },
  {
    title: 'Array-2',
    name: 'has12',
    inputs: [
      "([1, 3, 2])",
      "([3, 1, 2])",
      "([3, 1, 4, 5, 2])",
      "([3, 1, 4, 5, 6])",
      "([3, 1, 4, 1, 6, 2])",
      "([2, 1, 4, 1, 6, 2])",
      "([2, 1, 4, 1, 6])",
      "([1])",
      "([2, 1, 3])",
      "([2, 1, 3, 2])",
      "([2])",
      "([3, 2])",
      "([3, 1, 3, 2])",
      "([3, 5, 9])",
      "([3, 5, 1])",
      "([3, 2, 1])",
      "([1, 2])",
    ],
    question: `Given an array of ints, return true if there is a 1 in the array
    with a 2 somewhere later in the array.`
  },
  {
    title: 'Array-2',
    name: 'modThree',
    inputs: [
      "([2, 1, 3, 5])",
      "([2, 1, 2, 5])",
      "([2, 4, 2, 5])",
      "([1, 2, 1, 2, 1])",
      "([9, 9, 9])",
      "([1, 2, 1])",
      "([1, 2])",
      "([1])",
      "([])",
      "([9, 7, 2, 9])",
      "([9, 7, 2, 9, 2, 2])",
      "([9, 7, 2, 9, 2, 2, 6])",
    ],
    question: `Given an array of ints, return true if the array contains either
    3 even or 3 odd values all next to each other.`
  },
  {
    title: 'Array-2',
    name: 'findTheMedian',
    inputs: [
      "([4,9,9,2,1,5])",
      "([1, 5, 3, 1 , 5])",
      "([10, 12, 15])",
      "([5])",
      "([11, 9, 0, 1])",
      "([-1, 11, -2, 10, -3, 15])",
      "([2, 10, 15, 13])",
      "([2, 5, -12])",
    ],

    question: `Write a method that returns the median value of an array. The input array will never be empty.
    \nIf the array is odd in length, the median is the value in the centre of the array.\
    \nIf the array is even, the median should be the average of the two middle values. \n 
    Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.`
  },
  {
    title: 'Array-2',
    name: 'haveThree',
    inputs: [
      "([3, 1, 3, 1, 3])",
      "([3, 1, 3, 3])",
      "([3, 4, 3, 3, 4])",
      "([1, 3, 1, 3, 1, 2])",
      "([1, 3, 1, 3, 1, 3])",
      "([1, 3, 3, 1, 3])",
      "([1, 3, 1, 3, 1, 3, 4, 3])",
      "([3, 4, 3, 4, 3, 4, 4])",
      "([3, 3, 3])",
      "([1, 3])",
      "([3])",
      "([1])",
    ],
    question: `Given an array of ints, return true if the value 3 appears in the array exactly
     3 times, and no 3's are next to each other.`
  },
  {
    title: 'Array-2',
    name: 'twoTwo',
    inputs: [
      "([4, 2, 2, 3])",
      "([2, 2, 4])",
      "([2, 2, 4, 2])",
      "([1, 3, 4])",
      "([1, 2, 2, 3, 4])",
      "([1, 2, 3, 4])",
      "([2, 2])",
      "([2, 2, 7])",
      "([2, 2, 7, 2, 1])",
      "([4, 2, 2, 2])",
      "([2, 2, 2])",
      "([1, 2])",
      "([2])",
      "([1])",
      "([])",
      "([5, 2, 2, 3])",
      "([2, 2, 5, 2])",
    ],
    question: `Given an array of ints, return true if every 2 that appears in
    the array is next to another 2.`
  },
  {
    title: 'Array-2',
    name: 'sameEnds',
    inputs: [
      "([5, 6, 45, 99, 13, 5, 6], 1)",
      "([5, 6, 45, 99, 13, 5, 6], 2)",
      "([5, 6, 45, 99, 13, 5, 6], 3)",
      "([1, 2, 5, 2, 1], 1)",
      "([1, 2, 5, 2, 1], 2)",
      "([1, 2, 5, 2, 1], 0)",
      "([1, 2, 5, 2, 1], 5)",
      "([1, 1, 1], 0)",
      "([1, 1, 1], 1)",
      "([1, 1, 1], 2)",
      "([1, 1, 1], 3)",
      "([1], 1)",
      "([], 0)",
      "([4, 2, 4, 5], 1)",
    ],
    question: `Return true if the group of N numbers at the start and end of the
    array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are
    the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n
    is in the range 0..nums.length inclusive.`
  },
  {
    title: 'Array-2',
    name: 'tripleUp',
    inputs: [
      "([1, 4, 5, 6, 2])",
      "([1, 2, 3])",
      "([1, 2, 4])",
      "([1, 2, 4, 5, 7, 6, 5, 6, 7, 6])",
      "([1, 2, 4, 5, 7, 6, 5, 7, 7, 6])",
      "([1, 2])",
      "([1])",
      "([])",
      "([10, 9, 8, -100, -99, -98, 100])",
      "([10, 9, 8, -100, -99, 99, 100])",
      "([-100, -99, -99, 100, 101, 102])",
      "([2, 3, 5, 6, 8, 9, 2, 3])",
    ],
    question: `Return true if the array contains, somewhere, three increasing
    adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.`
  },
  {
    title: 'Array-2',
    name: 'fizzArray3',
    inputs: [
      "(5, 10)",
      "(11, 18)",
      "(1, 3)",
      "(1, 2)",
      "(1, 1)",
      "(1000, 1005)",
    ],
    question: `Given start and end numbers, return a new array containing the
    sequence of integers from start up to but not including end, so start=5 and
    end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the
    start number. Note that a length-0 array is valid.`
  },
  {
    title: 'Array-2',
    name: 'shiftLeft',
    inputs: [
      "([6, 2, 5, 3])",
      "([1, 2])",
      "([1])",
      "([])",
      "([1, 1, 2, 2, 4])",
      "([1, 1, 1])",
      "([1, 2, 3])",
    ],
    question: `Return an array that is "left shifted" by one -- so {6, 2, 5, 3}
    returns {2, 5, 3, 6}. You may modify and return the given array, or return
    a new array.`
  },
  {
    title: 'Array-2',
    name: 'tenRun',
    inputs: [
      "([2, 10, 3, 4, 20, 5])",
      "([10, 1, 20, 2])",
      "([10, 1, 9, 20])",
      "([1, 2, 50, 1])",
      "([1, 20, 50, 1])",
      "([10, 10])",
      "([10, 2])",
      "([0, 2])",
      "([1, 2])",
      "([1])",
      "([])",
    ],
    question: `For each multiple of 10 in the given array, change all the values
    following it to be that multiple of 10, until encountering another multiple
    of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.`
  },
  {
    title: 'Array-2',
    name: 'pre4',
    inputs: [
      "([1, 2, 4, 1])",
      "([3, 1, 4])",
      "([1, 4, 4])",
      "([1, 4, 4, 2])",
      "([1, 3, 4, 2, 4])",
      "([4, 4])",
      "([3, 3, 4])",
      "([1, 2, 1, 4])",
      "([2, 1, 4, 2])",
      "([2, 1, 2, 1, 4, 2])",
    ],
    question: `Given a non-empty array of ints, return a new array containing the
    elements from the original array that come before the first 4 in the original
     array. The original array will contain at least one 4. Note that it is valid
     in java to create an array of length 0.`
  },
  {
    title: 'Array-2',
    name: 'post4',
    inputs: [
      "([2, 4, 1, 2])",
      "([4, 1, 4, 2])",
      "([4, 4, 1, 2, 3])",
      "([4, 2])",
      "([4, 4, 3])",
      "([4, 4])",
      "([4])",
      "([2, 4, 1, 4, 3, 2])",
      "([4, 1, 4, 2, 2, 2])",
      "([3, 4, 3, 2])",
    ],
    question: `Given a non-empty array of ints, return a new array containing the
    elements from the original array that come after the last 4 in the original
    array. The original array will contain at least one 4. Note that it is valid
    in java to create an array of length 0.`
  },
  {
    title: 'Array-2',
    name: 'notAlone',
    inputs: [
      "([1, 2, 3], 2)",
      "([1, 2, 3, 2, 5, 2], 2)",
      "([3, 4], 3)",
      "([3, 3], 3)",
      "([1, 3, 1, 2], 1)",
      "([3], 3)",
      "([], 3)",
      "([7, 1, 6], 1)",
      "([1, 1, 1], 1)",
      "([1, 1, 1, 2], 1)",
    ],
    question: `We'll say that an element in an array is "alone" if there are values
    before and after it, and those values are different from it. Return a version
    of the given array where every instance of the given value which is alone is
    replaced by whichever value to its left or right is larger.`
  },
  {
    title: 'Array-2',
    name: 'zeroFront',
    inputs: [
      "([1, 0, 0, 1])",
      "([0, 1, 1, 0, 1])",
      "([1, 0])",
      "([0, 1])",
      "([1, 1, 1, 0])",
      "([2, 2, 2, 2])",
      "([0, 0, 1, 0])",
      "([-1, 0, 0, -1, 0])",
      "([0, -3, 0, -3])",
      "([])",
      "([9, 9, 0, 9, 0, 9])",
    ],
    question: `Return an array that contains the exact same numbers as the given
    array, but rearranged so that all the zeros are grouped at the start of the
    array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1}
    becomes {0 ,0, 1, 1}. You may modify and return the given array or make a
    new array.`
  },
  {
    title: 'Array-2',
    name: 'withoutTen',
    inputs: [
      "([1, 10, 10, 2])",
      "([10, 2, 10])",
      "([1, 99, 10])",
      "([10, 13, 10, 14])",
      "([10, 13, 10, 14, 10])",
      "([10, 10, 3])",
      "([1])",
      "([13, 1])",
      "([10])",
      "([])",
    ],
    question: `Return a version of the given array where all the 10's have been
    removed. The remaining elements should shift left towards the start of the
    array as needed, and the empty spaces a the end of the array should be 0.
    So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given
    array or make a new array.`
  },
  {
    title: 'Array-2',
    name: 'zeroMax',
    inputs: [
      "([0, 5, 0, 3])",
      "([0, 4, 0, 3])",
      "([0, 1, 0])",
      "([0, 1, 5])",
      "([0, 2, 0])",
      "([1])",
      "([0])",
      "([])",
      "([7, 0, 4, 3, 0, 2])",
      "([7, 0, 4, 3, 0, 1])",
      "([7, 0, 4, 3, 0, 0])",
      "([7, 0, 1, 0, 0, 7])",
    ],
    question: `Return a version of the given array where each zero value in the
    array is replaced by the largest odd value to the right of the zero in the
    array. If there is no odd value to the right of the zero, leave the zero
    as a zero.`
  },
  {
    title: 'Array-2',
    name: 'evenOdd',
    inputs: [
      "([1, 0, 1, 0, 0, 1, 1])",
      "([3, 3, 2])",
      "([2, 2, 2])",
      "([3, 2, 2])",
      "([1, 1, 0, 1, 0])",
      "([1])",
      "([1, 2])",
      "([2, 1])",
      "([])",
    ],
    question: `Return an array that contains the exact same numbers as the given
    array, but rearranged so that all the even numbers come before all the odd
    numbers. Other than that, the numbers can be in any order. You may modify
    and return the given array, or make a new array.`
  },
  {
    title: 'Array-2',
    name: 'fizzBuzz',
    inputs: [
      "(1, 6)",
      "(1, 8)",
      "(1, 11)",
      "(1, 16)",
      "(1, 4)",
      "(1, 2)",
      "(50, 56)",
      "(15, 17)",
      "(30, 36)",
      "(1000, 1006)",
      "(99, 102)",
      "(14, 20)",
    ],
    question: `This is slightly more difficult version of the famous FizzBuzz problem
    which is sometimes given as a first problem for job interviews.
     Consider the series of numbers beginning at start and running up to but not
     including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4.
     Return a new String[] array containing the string form of these numbers, except
     for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz",
     and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will
     make the String form of an int or other type. This version is a little more
     complicated than the usual version since you have to allocate and index into an
     array instead of just printing, and we vary the start/end instead of just always
     doing 1..100.`
  },
  {
    question: 'Consider the leftmost and righmost appearances of some value in an array. We\'ll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)',
    title: 'Array-3',
    name: 'maxSpan',
    inputs: [
      "([1, 2, 1, 1, 3])",
      "([1, 4, 2, 1, 4, 1, 4])",
      "([1, 4, 2, 1, 4, 4, 4])",
      "([3, 3, 3])",
      "([3, 9, 3])",
      "([3, 9, 9])",
      "([3, 9])",
      "([3, 3])",
      "([])",
      "([1])"
    ]
  },
  {
    question: 'Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3\'s, but every other number may move. The array contains the same number of 3\'s and 4\'s, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.',
    title: 'Array-3',
    name: 'fix34',
    inputs: [
      "([1, 3, 1, 4])",
      "([1, 3, 1, 4, 4, 3, 1])",
      "([3, 2, 2, 4])",
      "([3, 2, 3, 2, 4, 4])",
      "([2, 3, 2, 3, 2, 4, 4])",
      "([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5])",
      "([3, 1, 4])",
      "([3, 4, 1])",
      "([1, 1, 1])",
      "([1])",
      "([])",
      "([7, 3, 7, 7, 4])",
      "([3, 1, 4, 3, 1, 4])",
      "([3, 1, 1, 3, 4, 4])"
    ]
  },
  {
    question: '(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4\'s, but every other number may move. The array contains the same number of 4\'s and 5\'s, and every 4 has a number after it that is not a 4. In this version, 5\'s may appear anywhere in the original array.',
    title: 'Array-3',
    name: 'fix45',
    inputs: [
      "([5, 4, 9, 4, 9, 5])",
      "([1, 4, 1, 5])",
      "([1, 4, 1, 5, 5, 4, 1])",
      "([4, 9, 4, 9, 5, 5, 4, 9, 5])",
      "([5, 5, 4, 1, 4, 1])",
      "([4, 2, 2, 5])",
      "([4, 2, 4, 2, 5, 5])",
      "([4, 2, 4, 5, 5])",
      "([1, 1, 1])",
      "([4, 5])",
      "([5, 4, 1])",
      "([])",
      "([5, 4, 5, 4, 1])",
      "([4, 5, 4, 1, 5])",
      "([3, 4, 5])",
      "([4, 1, 5])",
      "([5, 4, 1])",
      "([2, 4, 2, 5])"
    ]
  },
  {
    question: 'Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.',
    title: 'Array-3',
    name: 'canBalance',
    inputs: [
      "([1, 1, 1, 2, 1])",
      "([2, 1, 1, 2, 1])",
      "([10, 10])",
      "([10, 0, 1, -1, 10])",
      "([1, 1, 1, 1, 4])",
      "([2, 1, 1, 1, 4])",
      "([2, 3, 4, 1, 2])",
      "([1, 2, 3, 1, 0, 2, 3])",
      "([1, 2, 3, 1, 0, 1, 3])",
      "([1])",
      "([1, 1, 1, 2, 1])"
    ]
  },
  {
    question: 'Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.',
    title: 'Array-3',
    name: 'linearIn',
    inputs: [
      "([1, 2, 4, 6], [2, 4])",
      "([1, 2, 4, 6], [2, 3, 4])",
      "([1, 2, 4, 4, 6], [2, 4])",
      "([2, 2, 4, 4, 6, 6], [2, 4])",
      "([2, 2, 2, 2, 2], [2, 2])",
      "([2, 2, 2, 2, 2], [2, 4])",
      "([2, 2, 2, 2, 4], [2, 4])",
      "([1, 2, 3], [2])",
      "([1, 2, 3], [-1])",
      "([1, 2, 3], [])",
      "([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12])",
      "([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14])",
      "([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11])"
    ]
  },
  {
    question: 'Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1,    0, 2, 1,    3, 2, 1} (spaces added to show the 3 groups).',
    title: 'Array-3',
    name: 'squareUp',
    inputs: [
      "(3)",
      "(2)",
      "(4)",
      "(1)",
      "(0)"
    ]
  },
  {
    question: 'Given n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.',
    title: 'Array-3',
    name: 'seriesUp',
    inputs: [
      "(3)",
      "(4)",
      "(2)",
      "(1)",
      "(0)"
    ]
  },
  {
    question: 'We\'ll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.',
    title: 'Array-3',
    name: 'maxMirror',
    inputs: [
      "([1, 2, 3, 8, 9, 3, 2, 1])",
      "([1, 2, 1, 4])",
      "([7, 1, 2, 9, 7, 2, 1])",
      "([21, 22, 9, 8, 7, 6, 23, 24, 6, 7, 8, 9, 25, 7, 8, 9])",
      "([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25])",
      "([1, 2, 3, 2, 1])",
      "([1, 2, 3, 3, 8])",
      "([1, 2, 7, 8, 1, 7, 2])",
      "([1, 1, 1])",
      "([1])",
      "([])",
      "([9, 1, 1, 4, 2, 1, 1, 1])",
      "([5, 9, 9, 4, 5, 4, 9, 9, 2])",
      "([5, 9, 9, 6, 5, 4, 9, 9, 2])",
      "([5, 9, 1, 6, 5, 4, 1, 9, 5])"
    ]
  },
  {
    question: 'Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.',
    title: 'Array-3',
    name: 'countClumps',
    inputs: [
      "([1, 2, 2, 3, 4, 4])",
      "([1, 1, 2, 1, 1])",
      "([1, 1, 1, 1, 1])",
      "([1, 2, 3])",
      "([2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
      "([0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
      "([0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
      "([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])",
      "([])"
    ]
  },

];


},{}],9:[function(require,module,exports){
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/** --- Solutions --- **/
// Array-1

let solutions = {};

// solutions in pseudocode are STRINGS. Notice that the string
// starts with a backtick - that allows it to span multiple lines
// Make sure the names match perfectly, including case
solutions.FirstLast6 = `method FirstLast6(NUMS)
  END = NUMS.length - 1
  if NUMS[0] = 6 OR NUMS[END] = 6 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.sameFirstLast = function sameFirstLast(nums) {
  let end = nums.length - 1;
  if (nums.length >= 1 && nums[0] == nums[end]) {
    return true;
  } else { return false; }
}

solutions.makePi = function makePi() {
  let nums = [3, 1, 4];
  return nums;
}

solutions.commonEnd = function commonEnd(a, b) {
  if (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

solutions.sum3 = function sum3(nums) {
  return nums[0] + nums[1] + nums[2];
}

solutions.rotateLeft3 = function rotateLeft3(nums) {
  return [nums[1], nums[2], nums[0]];
}

solutions.reverse3 = function reverse3(nums) {
  return [nums[2], nums[1], nums[0]];
}

solutions.maxEnd3 = function maxEnd3(nums) {
  let max = nums[0];
  if (nums[2] > nums[0]) {
    max = nums[2];
  }
  return [max, max, max];
}

solutions.sum2 = function sum2(nums) {
  if (nums.length == 0) {
    return 0;
  }

  if (nums.length < 2) {
    return nums[0];
  } else {
    return nums[0] + nums[1]
  }
}

solutions.middleWay = function middleWay(a, b) {
  return [a[1], b[1]];
}

solutions.makeEnds = function makeEnds(nums) {
  let end = nums.length - 1
  return [nums[0], nums[end]];
}

solutions.has23 = function has23(nums) {
  if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[2] == 3) {
    return true;
  } else {
    return false;
  }
}

solutions.no23 = function no23(nums) {
  if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[2] == 3) {
    return false;
  } else {
    return true;
  }
}

solutions.makeLast = function makeLast(nums) {
  let newLength = nums.length * 2;
  let newArray = [];
  for (let i = 0; i < newLength; i++) {
    newArray[i] = 0;
  }
  newArray[newLength - 1] = nums[nums.length - 1];
  return newArray;
}

solutions.double23 = function double23(nums) {
  if (nums.length < 2) {
    return false;
  }
  else if ((nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3)) {
    return true
  } else {
    return false;
  }
}

solutions.fix23 = function fix23(nums) {
  //since the length is three, the only options are the first two or last two elements
  if (nums[0] == 2 && nums[1] == 3) {
    nums[1] = 0;
  } else if (nums[1] == 2 && nums[2] == 3) {
    nums[2] = 0;
  }
  return nums;
}

solutions.findTheMedian = function findTheMedian(nums) {
  //where is the sort method? 
  let end = nums.length - 1;
  let mid = nums.length / 2
  if (nums.length % 2 === 1) {
    return nums[end / 2];
  }
  else {
    return (nums[mid - 1] + nums[mid]) / 2;
  }
}

solutions.start1 = function start1(a, b) {
  let count = 0;
  if (a[0] == 1) {
    count += 1;
  }

  if (b[0] == 1) {
    count += 1;
  }

  return count;
}

solutions.biggerTwo = function biggerTwo(a, b) {
  if (b[0] + b[1] > a[0] + a[1]) {
    return b;
  }
  else if (a[0] + a[1] > b[0] + b[1]) {
    return a;
  }
  else return a;
}

solutions.makeMiddle = function makeMiddle(nums) {
  // consider an example. If the array has length 4
  // then half will be 2, and we want the 2nd and third elements
  // which will have index 1 (half - 1) and 2 (half)
  let half = nums.length / 2;
  return [nums[half - 1], nums[half]];
}

solutions.plusTwo = function plusTwo(a, b) {
  let duoArr = [];
  duoArr[0] = a[0];
  duoArr[1] = a[1];
  duoArr[2] = b[0];
  duoArr[3] = b[1];

  return duoArr;
}

solutions.swapEnds = function swapEnds(nums) {
  // save the first value temporarily
  let first = nums[0]
  // move the last value into the first value
  nums[0] = nums[nums.length - 1];
  // move the first value into the last place
  nums[nums.length - 1] = first;
  return nums;
}

solutions.findLowestIndex = function findLowestIndex(nums) {
  let minVal = nums[0];
  let minValIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i]
      minValIndex = i;
    }
  }
  return minValIndex;
}




solutions.midThree = function midThree(nums) {
  //if our array is of size 3, we want our "pivot" (middle) index to be 1
  // we can do this with (size - 1)/2
  let half = (nums.length - 1) / 2;
  return [nums[half - 1], nums[half], nums[half + 1]];
}

solutions.maxTriple = function maxTriple(nums) {
  let mid = nums[(nums.length - 1) / 2];
  let start = nums[0]
  let end = nums[nums.length - 1];

  if (mid > start && mid > end) {
    return mid;
  }
  else if (start > mid && start > end) {
    return start;
  } else {
    return end;
  }
}

solutions.frontPiece = function frontPiece(nums) {
  if (nums.length < 2) {
    return nums;
  }
  return [nums[0], nums[1]];
}

solutions.unlucky1 = function unlucky1(nums) {
  if ((nums[0] == 1 && nums[1] == 3) || (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3)) {
    return true;
  }
  else return false;
}

solutions.make2 = function make2(a, b) {
  if (a.length >= 2) {
    return [a[0], a[1]]
  }
  else if (a.length == 1) {
    return [a[0], b[0]]
  }
  else return [b[0], b[1]]
}

solutions.front11 = function front11(a, b) {
  if (a.length == 0) {
    return [b[0]]
  }
  else if (b.length == 0) {
    return [a[0]]
  }
  else if (a.length == 0 && b.length == 0) {
    return []
  }
  else return [a[0], b[0]]
}



// Array-2

solutions.countEvens = function countEvens(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      count += 1;
    }
  }
  return count;
}

solutions.bigDiff = function bigDiff(nums) {
  //changed it to a loop problem 
  //Math.abs returns the absolute value of a number 
  let max = nums[0]
  let min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
    else if (nums[i] < min) {
      min = nums[i]
    }
  }
  return Math.abs(max - min);
}

solutions.centeredAverage = function centeredAverage(nums) {
  let max = nums[0]
  let min = nums[0]
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {//find max and min 
    if (nums[i] >= max) {
      max = nums[i]
      maxIndex = i;
    }
    else if (nums[i] < min) {
      min = nums[i]
      minIndex = i;
    }
  }
  let total = 0;
  for (let i = 0; i < nums.length; i++) {//if the index of element is neither a maxIndex or minIndex, add to total
    if (!(i == maxIndex || i == minIndex)) {
      total = total + nums[i]
    }
  }
  return total / (nums.length - 2)

}

solutions.sum13 = function sum13(nums) {
  let pre13 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 13 || nums[i - 1] == 13) {

    } else {
      pre13.push(nums[i]);
    }
  }
  let sum = pre13.reduce((a, b) => a + b, 0)
  return sum;
}

solutions.sum67 = function sum67(nums) {
  let summ = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 6) {
      summ += nums[i];
    } else {
      while (nums[i] != 7) {
        i++;
      }
    }
  }
  return summ;
}

solutions.has22 = function has22(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

solutions.lucky13 = function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1 || nums[i] == 3) {
      return false;
    }
  }
  return true;

}

solutions.sum28 = function sum28(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) {
      count += nums[i];
    }
  }
  return count == 8;
}

solutions.more14 = function more14(nums) {

  let one = 0;
  let four = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      one += 1;
    }

    if (nums[i] == 4) {
      four += 1;
    }
  }
  if (one > four) {
    return true;
  } else {
    return false;
  }
}

solutions.Array = function fizzArray(n) {
  let newA = [];
  for (let i = 0; i < n; i++) {
    newA[i] = i;
  }
  return newA;
}

solutions.prependSum = function prependSum(nums) {
  let arr = [];
  arr[0] = nums[0] + nums[1]
  for (let i = 2; i < nums.length; i++) {
    arr[i - 1] = nums[i]; //nums start at i=2 because the first two elements were removed
  }
  return arr;
}



solutions.only14 = function only14(nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 4 && nums[i] != 1) {
      return false;
    }
  }
  return true;
}

solutions.fizzArray2 = function fizzArray2(n) {
  let nu = [];
  for (let i = 0; i < n; i++) {
    nu[i] = i.toString();
  }
  return nu;
}

solutions.no14 = function no14(nums) {
  let has1 = false;
  let has4 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (nums[i] == 4) {
      has4 = true;
    }

  }
  if (has1 == true && has4 == true) {
    return false;
  }
  else return true;
}

solutions.isEverywhere = function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != val && nums[i + 1] != val) {
      return false;
    }
  }
  return true;
}

solutions.either24 = function either24(nums) {
  let has22 = false;
  let has44 = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2)
      has22 = true;

    if (nums[i] == 4 && nums[i + 1] == 4)
      has44 = true;
  }

  if (has22 != has44) {//both boolean values must be different (both true -> false, both false-> false)
    return true;
  }
  else return false;
}

solutions.matchUp = function matchUp(nums1, nums2) {
  //Math.abs(a-b) calculates the absolute value of the difference between a and b
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    if (diff > 0 && diff < 3) {
      count += 1;
    }
  }
  return count;
}

solutions.has77 = function has77(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] == 7 && nums[i + 1] == 7) || (nums[i] == 7 && nums[i + 2] == 7)) {
      return true;
    }
  }
  return false;
}

solutions.has12 = function has12(nums) {
  let has1 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (has1 == true && nums[i] == 2) {
      return true;
    }
  }
  return false;
}

solutions.modThree = function modThree(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 == nums[i + 1] % 2 && nums[i + 1] % 2 == nums[i + 2] % 2) {
      return true;
    }
  }
  return false;
}

solutions.haveThree = function haveThree(nums) {
  let three = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      three++;
    }
    if (nums[i + 1] == 3 && nums[i] == 3) {
      return false;
    }

  }
  if (three == 3) {
    return true;
  }
  else return false;
}

solutions.twoTwo = function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] == 2) && (nums[i + 1] == 2)) {
      i = i + 2//if 2 is already found, skip two indexes because the last 2 is already accounted for 
    }
    else if ((nums[i] == 2) && (nums[i + 1] != 2))
      return false;
  }
  return true;
}

solutions.sameEnds = function sameEnds(nums, len) {
  let front = nums.slice(0, len);
  let end = nums.slice(nums.length - len);

  return front.toString() == end.toString();
}

solutions.tripleUp = function tripleUp(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 1 == nums[i + 1] && nums[i + 1] + 1 == nums[i + 2]) {
      return true;
    }
  }
  return false;
}

solutions.fizzArray3 = function fizzArray3(start, end) {
  let count = 0;
  for (let i = start; i < end; i++) {
    arr[count] = i;
    count++;
  }
  return arr
}

solutions.shiftLeft = function shiftLeft(nums) {
  let firstVal = nums[0]
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = nums[i];
    nums[i] = nums[i + 1]
    nums[i + 1] = nums[i]
  }
  nums[nums.length - 1] = firstVal
  return nums
}

solutions.tenRun = function tenRun(nums) {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] % 10 == 0 && !(nums[i + 1] % 10 == 0)) {//if the current number is a multiple of 10 AND the next number is NOT a multiple of 10 
      nums[i + 1] = nums[i];
      i++;
    }
    else i++;
  }
  return nums;
}

solutions.pre4 = function pre4(nums) {
  //array.push(num) adds num to array 

  let b44 = [];

  let i = 0;

  while (i < nums.length && nums[i] != 4) {
    b44.push(nums[i]);
    i++;
  }
  return b44;
}

solutions.post4 = function post4(nums) {
  let arr = [];
  let index4;
  for (let i = 0; i < nums.length; i++) {//get the largest index of 4
    if (nums[i] == 4) {
      index4 = i;
    }
  }
  for (let c = 0; c < nums.length - 1 - index4; c++) {
    arr[c] = nums[c + 1 + index4]//put the values after 4 into an array
  }
  return arr;
}

solutions.notAlone = function notAlone(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == val) {
      if (nums[i + 1] == undefined) {
        return nums;
      }

      if (nums[i - 1] == val || nums[i + 1] == val) {

      }
      else if (nums[i - 1] == undefined) {

      }
      else if (nums[i - 1] > nums[i + 1]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return nums;
}

solutions.zeroFront = function zeroFront(nums) {
  if (nums.length == 0)
    return nums;

  let i = 0;

  while (nums[i] == 0)
    i++;

  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }

  return nums;
}

solutions.withoutTen = function withoutTen(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 10) {
      nums[i] = 0;
      for (let c = i; c < nums.length - 1; c++) {
        let temp = nums[c]//basic swap between left and right 
        nums[c] = nums[c + 1];
        nums[c + 1] = temp;
        if (nums[c] == 10) {//if ten replaces another ten, do the step one more time 
          i = i - 1;
        }
      }
    }
  }
  return nums;
}

solutions.zeroMax = function zeroMax(nums) {
  let odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let c = i + 1; c < nums.length; c++) {//find largest odd value RIGHT of the 0 
        if (nums[c] > odd && nums[c] % 2 == 1) {
          odd = nums[c];
        }
      }
      nums[i] = odd;
      odd = 0;//reset odd just in case there is a larger number before the current 0. 
    }
  }
  return nums;
}

solutions.evenOdd = function evenOdd(nums) {
  //array.concat(array1) combines the two arrays. Use it wisely 
  //array.push(num) adds a variable num to the array 
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      even.push(nums[i])
    }
    else {
      odd.push(nums[i])
    }
  }
  return even.concat(odd)
}

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 != 0;
}

solutions.fizzBuzz = function fizzBuzz(start, end) {
  let strArray = [];
  let count = 0;
  for (let i = start; i < end; i++) {
    if (i % 3 == 0 && !(i % 5 == 0)) {
      strArray[count] = "Fizz"
      count++;
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
      strArray[count] = "Buzz"
      count++;
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      strArray[count] = "FizzBuzz"
      count++;
    }
    else {
      strArray[count] = i.toString();
      count++;
    }
  }
  return strArray;
}

// Array-3

solutions.maxSpan = function maxSpan(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;

    while (nums[i] != nums[j]) {
      j--;
    }

    let span = j - i + 1;

    if (span > max)
      max = span;
  }

  return max;
}

solutions.fix34 = function fix34(nums) {
  let i = 0;

  while (i < nums.length && nums[i] != 3)
    i++;

  let j = i + 1;

  while (j < nums.length && nums[j] != 4)
    j++;

  while (i < nums.length) {
    if (nums[i] == 3) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while (j < nums.length && nums[j] != 4)
        j++;
    }
    i++;
  }

  return nums;
}

solutions.fix45 = function fix45(nums) {

  let i = 0;
  let j = 0;

  while (j < nums.length && nums[j] != 5) {
    j++;
  }

  while (i < nums.length) {
    if (nums[i] == 4) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while ((j < nums.length && nums[j] != 5) || j == i + 1)
        j++;
    }
    i++;
  }
  return nums;
}

solutions.canBalance = function canBalance(nums) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < nums.length; i++) {
    second += nums[i]; //adding all nums together
  }

  for (let i = 0; i <= nums.length - 2; i++) {
    first += nums[i];
    second -= nums[i];

    if (first == second) {
      return true;
    }
  }

  return false;
}

solutions.linearIn = function linearIn(outer, inner) {
  //index for inner array, also acts as a 'count' variable
  let j = 0;

  //looping through the outer array once. looking for matches.
  for (let i = 0; i < outer.length; i++) {
    if (inner[j] == outer[i]) {
      j++;
    }
  }

  return j == inner.length;

}

solutions.squareUp = function squareUp(n) {

  let subArray = [];
  let j = n;
  while (j > 0) {
    subArray.push(0);
    j--;
  }

  let output = [];

  for (let i = n - 1; i >= 0; i--) {
    subArray.splice(i, 1, n - i);
    output = output.concat(subArray);
  }
  return output;
}

solutions.seriesUp = function seriesUp(n) {
  let modArr = [];

  for (let i = 0; i < n; i++) {
    let j = i;
    let x = 1;
    while (j >= 0) {
      modArr.push(x);
      x += 1;
      j--;
    }
    x = 1;
  }
  return modArr;
}

solutions.maxMirror = function maxMirror(nums) {
  //This solution was made by Sung Ho Park. He took 5 hours to simplify the solution. You're welcome. 
  //.includes() method checks whether a specific string exists within an string or not.toString() converts a number to a string 
  if (nums.length == 0) {
    return 0;
  }
  //reverses nums and makes it into a string 
  let reverse = "";
  reverse = reverse + nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    reverse = reverse + "," + nums[i].toString();
  }
  let maxNum = nums.length - 1;
  while (maxNum >= 0) {
    for (let i = 0; i < nums.length - maxNum; i++) {
      if (reverse.includes(createCandidate(nums, i, maxNum + i))) {
        return maxNum + i + 1 - i;
      }
    }
    maxNum = maxNum - 1;
  }
  function createCandidate(num, min, max) {//creates candidates between ranges of min and max
    let answer = "";
    answer = answer + num[min].toString();
    for (let c = min + 1; c < max + 1; c++) {
      answer = answer + "," + num[c].toString();
    }
    return answer;
  }
}

solutions.countClumps = function countClumps(nums) {
  let yardStick = -1;
  let clumps = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i] != yardStick) {
      clumps += 1;
      yardStick = nums[i];
    } else {
      if (nums[i] != yardStick) {
        yardStick = -1
      }
    };
  }
  return clumps;
}
module.exports = solutions;

},{}],10:[function(require,module,exports){
module.exports = [
  {
    title: 'Logic-1',
    name: 'cigarParty',
    inputs: [
      '(30, false)',
      '(50, false)',
      '(70, true)',
      '(30, true)',
      '(50, true)',
      '(60, false)',
      '(61, false)',
      '(40, false)',
      '(39, false)',
      '(40, true)',
      '(39, true)',
    ],
    question: `When squirrels get together for a party, they like to have cigars. A squirrel
    party is successful when the number of cigars is between 40 and 60, inclusive. Unless it
    is the weekend, in which case there is no upper bound on the number of cigars. Return
    true if the party with the given values is successful, or false otherwise.`,
  },
  {
    title: 'Logic-1',
    name: 'dateFashion',
    inputs: [
      '(5, 10)',
      '(5, 2)',
      '(5, 5)',
      '(3, 3)',
      '(10, 2)',
      '(2, 9)',
      '(9, 9)',
      '(10, 5)',
      '(2, 2)',
      '(3, 7)',
      '(2, 7)',
      '(6, 2)',
    ],
    question: `You and your date are trying to get a table at a restaurant. The parameter
    "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness
    of your date's clothes. The result getting the table is encoded as an int value with 0=no,
    1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes).
    With the exception that if either of you has style of 2 or less, then the result is 0 (no).
    Otherwise the result is 1 (maybe).`,
  },
  {
    title: 'Logic-1',
    name: 'squirrelPlay',
    inputs: [
      '(70, false)',
      '(95, false)',
      '(95, true)',
      '(90, false)',
      '(90, true)',
      '(50, false)',
      '(50, true)',
      '(100, false)',
      '(100, true)',
      '(105, true)',
      '(59, false)',
      '(59, true)',
      '(60, false)',
    ],
    question: `The squirrels in Palo Alto spend most of the day playing. In particular,
    they play if the temperature is between 60 and 90 (inclusive). Unless it is summer,
    then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer,
    return true if the squirrels play and false otherwise.`,
  },
  {
    title: 'Logic-1',
    name: 'caughtSpeeding',
    inputs: [
      '(60, false)',
      '(65, false)',
      '(65, true)',
      '(80, false)',
      '(85, false)',
      '(85, true)',
      '(70, false)',
      '(75, false)',
      '(75, true)',
      '(40, false)',
      '(40, true)',
      '(90, false)',
    ],
    question: `You are driving a little too fast, and a police officer stops you. Write code
    to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
    If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result
    is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day,
    your speed can be 5 higher in all cases.`,
  },
  {
    title: 'Logic-1',
    name: 'sortaSum',
    inputs: [
      '(3, 4)',
      '(9, 4)',
      '(10, 11)',
      '(12, -3)',
      '(-3, 12)',
      '(4, 5)',
      '(4, 6)',
      '(14, 7)',
      '(14, 6)',
    ],
    question: `Given 2 ints, a and b, return their sum. However, sums in the range 10..19
    inclusive, are forbidden, so in that case just return 20.`,
  },
  {
    title: 'Logic-1',
    name: 'alarmClock',
    inputs: [
      '(1, false)',
      '(5, false)',
      '(0, false)',
      '(6, false)',
      '(0, true)',
      '(6, true)',
      '(1, true)',
      '(3, true)',
      '(5, true)',
    ],
    question: `Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
    boolean indicating if we are on vacation, return a string of the form "7:00" indicating
    when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend
    it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00"
    and weekends it should be "off".`,
  },
  {
    title: 'Logic-1',
    name: 'love6',
    inputs: [
      '(6, 4)',
      '(4, 5)',
      '(1, 5)',
      '(1, 6)',
      '(1, 8)',
      '(1, 7)',
      '(7, 5)',
      '(8, 2)',
      '(6, 6)',
      '(-6, 2)',
      '(-4, -10)',
      '(-7, 1)',
      '(7, -1)',
      '(-6, 12)',
      '(-2, -4)',
      '(7, 1)',
      '(0, 9)',
      '(8, 3)',
      '(3, 3)',
      '(3, 4)',
    ],
    question: `The number 6 is a truly great number. Given two int values, a and b, return
    true if either one is 6. Or if their sum or difference is 6. Note: the function
    Math.abs(num) computes the absolute value of a number.`,
  },
  {
    title: 'Logic-1',
    name: 'in1To10',
    inputs: [
      '(5, false)',
      '(11, false)',
      '(11, true)',
      '(10, false)',
      '(10, true)',
      '(9, false)',
      '(9, true)',
      '(1, false)',
      '(1, true)',
      '(0, false)',
      '(0, true)',
      '(-1, false)',
    ],
    question: `Given a number n, return true if n is in the range 1..10, inclusive.
    Unless "outsideMode" is true, in which case return true if the number is less or
    equal to 1, or greater or equal to 10.`,
  },
  {
    title: 'Logic-1',
    name: 'specialEleven',
    inputs: [
      '(22)',
      '(23)',
      '(24)',
      '(21)',
      '(11)',
      '(12)',
      '(10)',
      '(9)',
      '(8)',
      '(0)',
      '(1)',
      '(2)',
      '(121)',
      '(122)',
      '(123)',
      '(46)',
      '(49)',
      '(52)',
      '(54)',
      '(55)',
    ],
    question: `We'll say a number is special if it is a multiple of 11 or if it is one more
    than a multiple of 11. Return true if the given non-negative number is special. Use the %
    "mod" operator.`, // TODO add info on mod, up to and incl exercise nearTen
  },
  {
    title: 'Logic-1',
    name: 'more20',
    inputs: [
      '(20)',
      '(21)',
      '(22)',
      '(23)',
      '(25)',
      '(30)',
      '(31)',
      '(59)',
      '(60)',
      '(61)',
      '(62)',
      '(1020)',
      '(1021)',
      '(1000)',
      '(1001)',
      '(50)',
      '(55)',
      '(40)',
      '(41)',
      '(39)',
      '(42)',
    ],
    question: `Return true if the given non-negative number is 1 or 2 more than a
    multiple of 20.`,
  },
  {
    title: 'Logic-1',
    name: 'old35',
    inputs: [
      '(3)',
      '(10)',
      '(15)',
      '(5)',
      '(9)',
      '(8)',
      '(7)',
      '(6)',
      '(17)',
      '(18)',
      '(29)',
      '(20)',
      '(21)',
      '(22)',
      '(45)',
      '(99)',
    ],
    question: `Return true if the given non-negative number is a multiple of 3 or 5,
    but not both. Use the % "mod" operator.`,
  },
  {
    title: 'Logic-1',
    name: 'less20',
    inputs: [
      '(18)',
      '(19)',
      '(20)',
      '(8)',
      '(17)',
      '(23)',
      '(25)',
      '(30)',
      '(31)',
      '(58)',
      '(59)',
      '(60)',
      '(61)',
      '(62)',
      '(1017)',
      '(1018)',
      '(1019)',
      '(1020)',
      '(1021)',
      '(1022)',
      '(1023)',
      '(37)',
    ],
    question: `Return true if the given non-negative number is 1 or 2 less than a
    multiple of 20. So for example 38 and 39 return true, but 40 returns false.`,
  },
  {
    title: 'Logic-1',
    name: 'nearTen',
    inputs: [
      '(12)',
      '(17)',
      '(19)',
      '(31)',
      '(6)',
      '(10)',
      '(11)',
      '(21)',
      '(22)',
      '(23)',
      '(54)',
      '(155)',
      '(158)',
      '(3)',
      '(1)',
    ],
    question: `Given a non-negative number "num", return true if num is within 2 of a
    multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.`,
  },
  {
    title: 'Logic-1',
    name: 'teenSum',
    inputs: [
      '(3, 4)',
      '(10, 13)',
      '(13, 2)',
      '(3, 19)',
      '(13, 13)',
      '(10, 10)',
      '(6, 14)',
      '(15, 2)',
      '(19, 19)',
      '(19, 20)',
      '(2, 18)',
      '(12, 4)',
      '(2, 20)',
      '(2, 17)',
      '(2, 16)',
      '(6, 7)',
    ],
    question: `Given 2 ints, a and b, return their sum. However, "teen" values in the range
    13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.`,
  },
  {
    title: 'Logic-1',
    name: 'answerCell',
    inputs: [
      '(false, false, false)',
      '(false, false, true)',
      '(true, false, false)',
      '(true, true, false)',
      '(false, true, false)',
      '(true, true, true)',
    ],
    question: `Your cell phone rings. Return true if you should answer it. Normally you
    answer, except in the morning you only answer if it is your mom calling. In all cases,
    if you are asleep, you do not answer.`,
  },
  {
    title: 'Logic-1',
    name: 'teaParty',
    inputs: [
      '(6, 8)',
      '(3, 8)',
      '(20, 6)',
      '(12, 6)',
      '(11, 6)',
      '(11, 4)',
      '(4, 5)',
      '(5, 5)',
      '(6, 6)',
      '(5, 10)',
      '(5, 9)',
      '(10, 4)',
      '(10, 20)',
    ],
    question: `We are having a party with amounts of tea and candy. Return the int outcome
    of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and
    candy are at least 5. However, if either tea or candy is at least double the amount of
    the other one, the party is great (2). However, in all cases, if either tea or candy is
    less than 5, the party is always bad (0).`,
  },
  {
    title: 'Logic-1',
    name: 'fizzString',
    inputs: [
      "('fig')",
      "('dib')",
      "('fib')",
      "('abc')",
      "('fooo')",
      "('booo')",
      "('ooob')",
      "('fooob')",
      "('f')",
      "('b')",
      "('abcb')",
      "('Hello')",
      "('Hellob')",
      "('af')",
      "('bf')",
      "('fb')",
    ],
    question: `Given a string str, if the string starts with "f" return "Fizz". If
    the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true,
    return "FizzBuzz". In all other cases, return the string unchanged. `, // TODO add fizzbuzz link
  },
  {
    title: 'Logic-1',
    name: 'fizzString2',
    inputs: [
      '(1)',
      '(2)',
      '(3)',
      '(4)',
      '(5)',
      '(6)',
      '(7)',
      '(8)',
      '(9)',
      '(15)',
      '(16)',
      '(18)',
      '(19)',
      '(21)',
      '(44)',
      '(45)',
      '(100)',
    ],
    question: `Given an int n, return the string form of the number followed by "!". So the
    int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number,
    and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use
    "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10
    yields 3. What will the remainder be when one number divides evenly into another?`, // TODO fizzbuzz code and intro to mod
  },
  {
    title: 'Logic-1',
    name: 'twoAsOne',
    inputs: [
      '(1, 2, 3)',
      '(3, 1, 2)',
      '(3, 2, 2)',
      '(2, 3, 1)',
      '(5, 3, -2)',
      '(5, 3, -3)',
      '(2, 5, 3)',
      '(9, 5, 5)',
      '(9, 4, 5)',
      '(5, 4, 9)',
      '(3, 3, 0)',
      '(3, 3, 2)',
    ],
    question: `Given three ints, a b c, return true if it is possible to add two of the ints
    to get the third.`,
  },
  {
    title: 'Logic-1',
    name: 'inOrder',
    inputs: [
      '(1, 2, 4, false)',
      '(1, 2, 1, false)',
      '(1, 1, 2, true)',
      '(3, 2, 4, false)',
      '(2, 3, 4, false)',
      '(3, 2, 4, true)',
      '(4, 2, 2, true)',
      '(4, 5, 2, true)',
      '(2, 4, 6, true)',
      '(7, 9, 10, false)',
      '(7, 5, 6, true)',
      '(7, 5, 4, true)',
    ],
    question: `Given three ints, a b c, return true if b is greater than a, and c is greater
    than b. However, with the exception that if "bOk" is true, b does not need to be greater
    than a.`,
  },
  {
    title: 'Logic-1',
    name: 'inOrderEqual',
    inputs: [
      '(2, 5, 11, false)',
      '(5, 7, 6, false)',
      '(5, 5, 7, true)',
      '(5, 5, 7, false)',
      '(2, 5, 4, false)',
      '(3, 4, 3, false)',
      '(3, 4, 4, false)',
      '(3, 4, 3, true)',
      '(3, 4, 4, true)',
      '(1, 5, 5, true)',
      '(5, 5, 5, true)',
      '(2, 2, 1, true)',
      '(9, 2, 2, true)',
      '(0, 1, 0, true)',
    ],
    question: `Given three ints, a b c, return true if they are in strict increasing order,
    such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if
    "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.`,
  },
  {
    title: 'Logic-1',
    name: 'lastDigit',
    inputs: [
      '(23, 19, 13)',
      '(23, 19, 12)',
      '(23, 19, 3)',
      '(23, 19, 39)',
      '(1, 2, 3)',
      '(1, 1, 2)',
      '(1, 2, 2)',
      '(14, 25, 43)',
      '(14, 25, 45)',
      '(248, 106, 1002)',
      '(248, 106, 1008)',
      '(10, 11, 20)',
      '(0, 11, 0)',
    ],
    question: `Given three ints, a b c, return true if two or more of them have the same
    rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the
    remainder, e.g. 17 % 10 is 7.`,
  },
  {
    title: 'Logic-1',
    name: 'lessBy10',
    inputs: [
      '(1, 7, 11)',
      '(1, 7, 10)',
      '(11, 1, 7)',
      '(10, 7, 1)',
      '(-10, 2, 2)',
      '(2, 11, 11)',
      '(3, 3, 30)',
      '(3, 3, 3)',
      '(10, 1, 11)',
      '(10, 11, 1)',
      '(10, 11, 2)',
      '(3, 30, 3)',
      '(2, 2, -8)',
      '(2, 8, 12)',
    ],
    question: `Given three ints, a b c, return true if one of them is 10 or more less
    than one of the others.`,
  },
  {
    title: 'Logic-1',
    name: 'withoutDoubles',
    inputs: [
      '(2, 3, true)',
      '(3, 3, true)',
      '(3, 3, false)',
      '(2, 3, false)',
      '(5, 4, true)',
      '(5, 4, false)',
      '(5, 5, true)',
      '(5, 5, false)',
      '(6, 6, true)',
      '(6, 6, false)',
      '(1, 6, true)',
      '(6, 1, false)',
    ],
    question: `Return the sum of two 6-sided dice rolls, each in the range 1..6. However,
    if noDoubles is true, if the two dice show the same value, increment one die to the next
    value, wrapping around to 1 if its value was 6.`,
  },
  {
    title: 'Logic-1',
    name: 'maxMod5',
    inputs: [
      '(2, 3)',
      '(6, 2)',
      '(3, 2)',
      '(8, 12)',
      '(7, 12)',
      '(11, 6)',
      '(2, 7)',
      '(7, 7)',
      '(9, 1)',
      '(9, 14)',
      '(1, 2)',
    ],
    question: `Given two int values, return whichever value is larger. However if the two
    values have the same remainder when divided by 5, then the return the smaller value.
    However, in all cases, if the two values are the same, return 0. Note: the % "mod"
    operator computes the remainder, e.g. 7 % 5 is 2.`,
  },
  {
    title: 'Logic-1',
    name: 'redTicket',
    inputs: [
      '(2, 2, 2)',
      '(2, 2, 1)',
      '(0, 0, 0)',
      '(2, 0, 0)',
      '(1, 1, 1)',
      '(1, 2, 1)',
      '(1, 2, 0)',
      '(0, 2, 2)',
      '(1, 2, 2)',
      '(0, 2, 0)',
      '(1, 1, 2)',
    ],
    question: `You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1,
    or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same,
    the result is 5. Otherwise so long as both b and c are different from a, the result is 1.
    Otherwise the result is 0.`,
  },
  {
    title: 'Logic-1',
    name: 'greenTicket',
    inputs: [
      '(1, 2, 3)',
      '(2, 2, 2)',
      '(1, 1, 2)',
      '(2, 1, 1)',
      '(1, 2, 1)',
      '(3, 2, 1)',
      '(0, 0, 0)',
      '(2, 0, 0)',
      '(0, 9, 10)',
      '(0, 10, 0)',
      '(9, 9, 9)',
      '(9, 0, 9)',
    ],
    question: `You have a green lottery ticket, with ints a, b, and c on it. If the numbers
    are all different from each other, the result is 0. If all of the numbers are the same,
    the result is 20. If two of the numbers are the same, the result is 10.`,
  },
  {
    title: 'Logic-1',
    name: 'blueTicket',
    inputs: [
      '(9, 1, 0)',
      '(9, 2, 0)',
      '(6, 1, 4)',
      '(6, 1, 5)',
      '(10, 0, 0)',
      '(15, 0, 5)',
      '(5, 15, 5)',
      '(4, 11, 1)',
      '(13, 2, 3)',
      '(8, 4, 3)',
      '(8, 4, 2)',
      '(8, 4, 1)',
    ],
    question: `You have a blue lottery ticket, with ints a, b, and c on it. This makes
    three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair.
    If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10
    more than either bc or ac sums, the result is 5. Otherwise the result is 0.`,
  },
  {
    title: 'Logic-1',
    name: 'shareDigit',
    inputs: [
      '(12, 23)',
      '(12, 43)',
      '(12, 44)',
      '(23, 12)',
      '(23, 39)',
      '(23, 19)',
      '(30, 90)',
      '(30, 91)',
      '(55, 55)',
      '(55, 44)',
    ],
    question: `Given two ints, each in the range 10..99, return true if there is a digit
    that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives
      the left digit while the % "mod" n%10 gives the right digit.)`,
  },
  {
    title: 'Logic-1',
    name: 'sumLimit',
    inputs: [
      '(2, 3)',
      '(8, 3)',
      '(8, 1)',
      '(11, 39)',
      '(11, 99)',
      '(0, 0)',
      '(99, 0)',
      '(99, 1)',
      '(123, 1)',
      '(1, 123)',
      '(23, 60)',
      '(23, 80)',
      '(9000, 1)',
      '(90000000, 1)',
      '(9000, 1000)',
    ],
    question: `Given 2 non-negative ints, a and b, return their sum, so long as the sum has
    the same number of digits as a. If the sum has more digits than a, just return a without
    b. (Note: one way to compute the number of digits of a non-negative int n is to convert it
      to a string with String.valueOf(n) and then check the length of the string.)`,
  },
  { question: 'We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks',
    title: 'Logic-2',
    name: 'makeBricks',
    inputs: [
      '(3, 1, 8)',
      '(3, 1, 9)',
      '(3, 2, 10)',
      '(3, 2, 8)',
      '(3, 2, 9)',
      '(6, 1, 11)',
      '(6, 0, 11)',
      '(1, 4, 11)',
      '(0, 3, 10)',
      '(1, 4, 12)',
      '(3, 1, 7)',
      '(1, 1, 7)',
      '(2, 1, 7)',
      '(7, 1, 11)',
      '(7, 1, 8)',
      '(7, 1, 13)',
      '(43, 1, 46)',
      '(40, 1, 46)',
      '(40, 2, 47)',
      '(40, 2, 50)',
      '(40, 2, 52)',
      '(22, 2, 33)',
      '(0, 2, 10)',
      '(1000000, 1000, 1000100)',
      '(2, 1000000, 100003)',
      '(20, 0, 19)',
      '(20, 0, 21)',
      '(20, 4, 51)',
      '(20, 4, 39)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.',
    title: 'Logic-2',
    name: 'loneSum',
    inputs: [
      '(1, 2, 3)',
      '(3, 2, 3)',
      '(3, 3, 3)',
      '(9, 2, 2)',
      '(2, 2, 9)',
      '(2, 9, 2)',
      '(2, 9, 3)',
      '(4, 2, 3)',
      '(1, 3, 1)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.',
    title: 'Logic-2',
    name: 'luckySum',
    inputs: [
      '(1, 2, 3)',
      '(1, 2, 13)',
      '(1, 13, 3)',
      '(1, 13, 13)',
      '(6, 5, 2)',
      '(13, 2, 3)',
      '(13, 2, 13)',
      '(13, 13, 2)',
      '(9, 4, 13)',
      '(8, 13, 2)',
      '(7, 2, 1)',
      '(3, 3, 13)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().',
    title: 'Logic-2',
    name: 'noTeenSum',
    inputs: [
      '(1, 2, 3)',
      '(2, 13, 1)',
      '(2, 1, 14)',
      '(2, 1, 15)',
      '(2, 1, 16)',
      '(2, 1, 17)',
      '(17, 1, 2)',
      '(2, 15, 2)',
      '(16, 17, 18)',
      '(17, 18, 19)',
      '(15, 16, 1)',
      '(15, 15, 19)',
      '(15, 19, 16)',
      '(5, 17, 18)',
      '(17, 18, 16)',
      '(17, 19, 18)',
    ],
  },
  { question: 'For this problem, we\'ll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().',
    title: 'Logic-2',
    name: 'roundSum',
    inputs: [
      '(16, 17, 18)',
      '(12, 13, 14)',
      '(6, 4, 4)',
      '(4, 6, 5)',
      '(4, 4, 6)',
      '(9, 4, 4)',
      '(0, 0, 1)',
      '(0, 9, 0)',
      '(10, 10, 19)',
      '(20, 30, 40)',
      '(45, 21, 30)',
      '(23, 11, 26)',
      '(23, 24, 25)',
      '(25, 24, 25)',
      '(23, 24, 29)',
      '(11, 24, 36)',
      '(24, 36, 32)',
      '(14, 12, 26)',
      '(12, 10, 24)',
    ],
  },
  { question: 'Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.',
    title: 'Logic-2',
    name: 'closeFar',
    inputs: [
      '(1, 2, 10)',
      '(1, 2, 3)',
      '(4, 1, 3)',
      '(4, 5, 3)',
      '(4, 3, 5)',
      '(-1, 10, 0)',
      '(0, -1, 10)',
      '(10, 10, 8)',
      '(10, 8, 9)',
      '(8, 9, 10)',
      '(8, 9, 7)',
      '(8, 6, 9)',
    ],
  },
  { question: 'Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.',
    title: 'Logic-2',
    name: 'blackjack',
    inputs: [
      '(19, 21)',
      '(21, 19)',
      '(19, 22)',
      '(22, 19)',
      '(22, 50)',
      '(22, 22)',
      '(33, 1)',
      '(1, 2)',
      '(34, 33)',
      '(17, 19)',
      '(18, 17)',
      '(16, 23)',
      '(3, 4)',
      '(3, 2)',
      '(21, 20)',
    ],
  },
  { question: 'Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.',
    title: 'Logic-2',
    name: 'evenlySpaced',
    inputs: [
      '(2, 4, 6)',
      '(4, 6, 2)',
      '(4, 6, 3)',
      '(6, 2, 4)',
      '(6, 2, 8)',
      '(2, 2, 2)',
      '(2, 2, 3)',
      '(9, 10, 11)',
      '(10, 9, 11)',
      '(10, 9, 9)',
      '(2, 4, 4)',
      '(2, 2, 4)',
      '(3, 6, 12)',
      '(12, 3, 6)',
    ] },
  { question: 'We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can\'t be done.',
    title: 'Logic-2',
    name: 'makeChocolate',
    inputs: [
      '(4, 1, 9)',
      '(4, 1, 10)',
      '(4, 1, 7)',
      '(6, 2, 7)',
      '(4, 1, 5)',
      '(4, 1, 4)',
      '(5, 4, 9)',
      '(9, 3, 18)',
      '(3, 1, 9)',
      '(1, 2, 7)',
      '(1, 2, 6)',
      '(1, 2, 5)',
      '(6, 1, 10)',
      '(6, 1, 11)',
      '(6, 1, 12)',
      '(6, 1, 13)',
      '(6, 2, 10)',
      '(6, 2, 11)',
      '(6, 2, 12)',
      '(60, 100, 550)',
      '(1000, 1000000, 5000006)',
      '(7, 1, 12)',
      '(7, 1, 13)',
      '(7, 2, 13)',
    ] }
  ];

},{}],11:[function(require,module,exports){
/** --- Solutions --- **/

let solutions = {};
solutions.cigarParty = function cigarParty(cigars, isWeekend) {
    if (isWeekend) {
      return cigars >= 40;
    }
    return cigars >= 40 && cigars <= 60;
  };

  
  solutions.dateFashion = function dateFashion(you, date) {
    if (you <= 2 || date <= 2) {
      return 0;
    }
  
    if (you >= 8 || date >= 8) {
      return 2;
    }
  
    return 1;
  };
  
  solutions.squirrelPlay = function squirrelPlay(temp, isSummer) {
    if (isSummer && temp >= 60 && temp <= 100) {
      return true;
    }
  
    if (!isSummer && temp >= 60 && temp <= 90) {
      return true;
    }
  
    return false;
  };
  
  solutions.caughtSpeeding = function caughtSpeeding(speed, isBirthday) {
    if (isBirthday) {
      if (speed <= 65) {
        return 0;
      } else if (speed >= 66 && speed <= 85) {
        return 1;
      } else if (speed >= 86) {
        return 2;
      }
    }
  
    if (speed <= 60) {
      return 0;
    } else if (speed >= 61 && speed <= 80) {
      return 1;
    } else {
      return 2;
    }
  };
  
  solutions.sortaSum = function sortaSum(a, b) {
    const res = a + b;
    if (res >= 10 && res <= 19) {
      return 20;
    }
    return res;
  };
  
  solutions.alarmClock = function alarmClock(day, vacation) {
    if (vacation) {
      if (day >= 1 && day <= 5) {
        return '10:00';
      } else return 'off';
    }
  
    if (day >= 1 && day <= 5) {
      return '7:00';
    } else return '10:00';
  };
  
  solutions.love6 = function love6(a, b) {
    if (a == 6 || b == 6) {
      return true;
    }
  
    if (a + b == 6 || Math.abs(a - b) == 6) {
      return true;
    }
  
    return false;
  };
  
  solutions.in1To10 = function in1To10(n, outsideMode) {
    if (outsideMode) {
      return (n <= 1 || n >= 10);
    }
    return (n >= 1 && n <= 10);
  };
  
  solutions.specialEleven = function specialEleven(n) {
    if (n % 11 == 0 || n % 11 == 1) {
      return true;
    }
    return false;
  };
  
  solutions.more20 = function more20(n) {
    return (n % 20 == 1 || n % 20 == 2);
  };
  
  solutions.old35 = function old35(n) {
    return (n % 3 == 0) != (n % 5 == 0);
  };
  
  solutions.less20 = function less20(n) {
    return (n % 20 == 18 || n % 20 == 19);
  };
  
  solutions.nearTen = function nearTen(num) {
    return (num % 10 <= 2 || num % 10 >= 8);
  };
  
  solutions.teenSum = function teenSum(a, b) {
    if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
      return 19;
    }
    return a + b;
  };
  
  solutions.answerCell = function answerCell(isMorning, isMom, isAsleep) {
    if (isAsleep) {
      return false;
    }
  
    if (isMorning && !isMom) {
      return false;
    }
  
    return true;
  };
  
  solutions.teaParty = function teaParty(tea, candy) {
    if (tea >= 5 && candy >= 5) {
      if (tea >= candy * 2 || candy >= tea * 2) {
        return 2;
      }
      return 1;
    }
    return 0;
  };
  
  solutions.fizzString = function fizzString(str) {
    if (str[0] == 'f' && str[str.length - 1] == 'b') {
      return 'FizzBuzz';
    } else if (str[0] == 'f') {
      return 'Fizz';
    } else if (str[str.length - 1] == 'b') {
      return 'Buzz';
    } else { return str; }
  };
  
  solutions.fizzString2 = function fizzString2(n) {
    if (n % 3 == 0 && n % 5 == 0) {
      return 'FizzBuzz!';
    } else if (n % 3 == 0) {
      return 'Fizz!';
    } else if (n % 5 == 0) {
      return 'Buzz!';
    }
    return `${n.toString()}!`;
  };
  
  solutions.twoAsOne = function twoAsOne(a, b, c) {
    return a + b == c || a + c == b || b + c == a;
  };
  
  solutions.inOrder = function inOrder(a, b, c, bOk) {
    if (bOk) {
      return c > b;
    }
    return b > a && c > b;
  };
  
  solutions.inOrderEqual = function inOrderEqual(a, b, c, equalOk) {
    if (equalOk) {
      return a <= b && b <= c;
    }
    return a < b && b < c;
  };
  
  solutions.lastDigit = function lastDigit(a, b, c) {
    return a % 10 == b % 10 || b % 10 == c % 10 || a % 10 == c;
  };
  
  solutions.lessBy10 = function lessBy10(a, b, c) {
    return Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(c - a) >= 10;
  };
  
  solutions.withoutDoubles = function withoutDoubles(die1, die2, noDoubles) {
    if (noDoubles) {
      if (die1 == die2) {
        if (die1 == 6 || die2 == 6) {
          die1 = 1;
          return die1 + die2;
        }
        return die1 + die2 + 1;
      }
    }
    return die1 + die2;
  };
  
  solutions.maxMod5 = function maxMod5(a, b) {
    if (a == b) {
      return 0;
    }
  
    if (a % 5 == b % 5) {
      if (a < b) {
            return a;
      } else {
            return b;
      }
    }
    return a > b ? a : b;
  };
  
  solutions.redTicket = function redTicket(a, b, c) {
    if (a == 2 && b == 2 && c == 2) {
      return 10;
    }
  
    if (a == b && b == c && a == c) {
      return 5;
    }
  
    if (b != a && c != a) {
      return 1;
    }
  
    return 0;
  };
  
  solutions.greenTicket = function greenTicket(a, b, c) {
    if (a == b && b == c) {
      return 20;
    }
  
    if (a == b || b == c || c == a) {
      return 10;
    }
  
    return 0;
  };
  
  solutions.blueTicket = function blueTicket(a, b, c) {
    if (a + b == 10 || b + c == 10 || a + c == 10) {
      return 10;
    }
  
    if (a + b == b + c + 10 || a + b == c + a + 10) {
      return 5;
    }
  
    return 0;
  };
  
  solutions.shareDigit = function shareDigit(a, b) {
    const aFirst = Math.floor(a / 10);
    const aLast = a % 10;
  
    if (aFirst == Math.floor(b / 10) || aFirst == b % 10) {
      return true;
    }
  
    if (aLast == Math.floor(b / 10) || aLast == b % 10) {
      return true;
    }
  
    return false;
  };
  
  solutions.sumLimit = function sumLimit(a, b) {
    const aLen = Math.abs(a).toString().length;
    const bLen = Math.abs(b).toString().length;
    const res = a + b;
    const resLen = Math.abs(res).toString().length;
  
    if (resLen == aLen) {
      return res;
    } else if (resLen >= aLen) {
      return a;
    }
  };
  
  // Logic-2
  
  solutions.makeBricks = function makeBricks(small, big, goal) {
      // not enough bricks
    if (goal > big * 5 + small) {
      return false;
    }
  
      // not enough small bricks
    if (goal % 5 > small) {
      return false;
    }
  
    return true;
  };
  
  solutions.loneSum = function loneSum(a, b, c) {
    let sum = 0;
    if (a != b && a != c) {
      sum += a;
    }
  
    if (b != c && b != a) {
      sum += b;
    }
  
    if (c != a && c != b) {
      sum += c;
    }
  
    return sum;
  };
  
  solutions.luckySum = function luckySum(a, b, c) {
    let sum = 0;
    const arr = [a, b, c];
  
    for (let i = 0; i <= 2; i++) {
      if (arr[i] != 13) {
        sum += arr[i];
      } else {
        return sum;
      }
    }
    return sum;
  };
  
  
  // TODO: make it work for two funcs
  solutions.noTeenSum = function noTeenSum(a, b, c) {
    const fixTeen = function (n) {
      if (n >= 13 && n <= 19 && n != 15 && n != 16) {
        return 0;
      }
  
      return n;
    };
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
  };
  
  
  solutions.roundSum = function roundSum(a, b, c) {
    const round10 = function (num) {
      return Math.round(num / 10) * 10;
    };
    return round10(a) + round10(b) + round10(c);
  };
  
  solutions.closeFar = function closeFar(a, b, c) {
    const far = function (x, y) {
      return (Math.abs(x - y) >= 2);
    };
  
    const close = function (x, y) {
      return Math.abs(x - y) <= 1;
    };
  
    if (close(a, b) && far(b, c) && far(a, c)) {
      return true;
    } else if (close(a, c) && far(b, c) && far(a, b)) {
      return true;
    }
  
    return false;
  };
  
  
  solutions.blackjack = function blackjack(a, b) {
    if (a > 21 && b > 21) {
      return 0;
    }
  
    const big = Math.max(a, b);
    const small = Math.min(a, b);
  
    if (big <= 21) {
      return big;
    } else if (small <= 21) {
      return small;
    }
  };
  
  solutions.evenlySpaced = function evenlySpaced(a, b, c) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const mid = a + b + c - max - min;
  
    return max - mid == mid - min;
  };
  
  solutions.makeChocolate = function makeChocolate(small, big, goal) {
      // not enough
    if (small + big * 5 < goal) {
      return -1;
    }
  
    const bigsNeeded = Math.floor(goal / 5);
  
    const bigsUsed = Math.min(big, bigsNeeded);
     // how many leftover
    const smallsNeeded = goal - bigsUsed * 5;
  
    return smallsNeeded;
  };
  
  
    // {
    //   title: 'AP-1',
    //   name: 'scoresIncreasing',
    //   question: 'Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.',
    //   inputs: [
    //     '([1, 3, 4])',
    //     '([1, 3, 2])',
    //     '([1, 1, 4])',
    //     '([1, 1, 2, 4, 4, 7])',
    //     '([1, 1, 2, 4, 3, 7])',
    //     '([-5, 4, 11])',
    //   ],
    // },
    // {
    //   title: 'AP-1',
    //   name: 'scores100',
    //   question: 'Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.',
    //   inputs: [
    //     '([1, 100, 100])',
    //     '([1, 100, 99, 100])',
    //     '([100, 1, 100, 100])',
    //     '([100, 1, 100, 1])',
    //     '([1, 2, 3, 4, 5])',
    //     '([1, 2, 100, 4, 5])',
    //   ],
    // },

module.exports = solutions;
},{}],12:[function(require,module,exports){
/** --- solutions --- **/

let solutions = {};

solutions.mapBully = function mapBully(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

solutions.mapShare = function mapShare(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  someMap.delete("c");
  return someMap;
}

solutions.mapAB = function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let combinedString = someMap.get("a") + someMap.get("b");
    someMap.set("ab", combinedString);
  }
  return someMap;
}

solutions.topping1 = function topping1(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("ice cream", "cherry");
  }
  someMap.set("bread", "butter");
  return someMap;
}

solutions.topping2 = function topping2(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("yogurt", someMap.get("ice cream"));
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}

solutions.topping3 = function topping3(someMap) {
  if (someMap.has("potato")) {
    someMap.set("fries", someMap.get("potato"));
  }
  if (someMap.has("salad")) {
    someMap.set("spinach", someMap.get("salad"));
  }
  return someMap;
}

solutions.mapAB2 = function mapAB2(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") === someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}

solutions.mapAB3 = function mapAB3(someMap) {
  if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (!someMap.has("a") && someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}

solutions.mapAB4 = function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    aLength = someMap.get("a").length;
    bLength = someMap.get("b").length;

    if (aLength > bLength) {
      someMap.set("c", someMap.get("a"));
    }
    else if (bLength > aLength) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}

 module.exports = solutions;
},{}],13:[function(require,module,exports){
module.exports = [
  { question: 'Given an integer, n, return the sum of the positive integers n + (n-2) + (n-4) + ...    Note: Your solution must be recursive. In other words, there can be no for or while loops in your solution.',
    title: 'QuizQuestions',
    name: 'sumDownBy2',
  inputs: [
  "(7)",
  "(8)",
  "(0)",
  "(1)",
  "(-1)",
  "(10)",
  "(5)",
  "(-5)",
  "(50)",
  "(2)",
  "(3)"
] },
  { 
    title: 'QuizQuestions',
    name: 'makes8',
    question: 'Given 2 ints, a and b, return true if one if them is 8 or if their sum is 8.',
    inputs: [
      '(5, 8)',
      '(3, 8)',
      '(3, 4)',
      '(4, 4)',
      '(5, 2)',
      '(5, 3)',
      '(8, 7)',
      '(8, 8)',
      '(-16, 24)',
      '(9, 1)',
    ], 
  },
    {
      title: 'QuizQuestions',
      name: 'countOdds',
      inputs: [
        "([2, 1, 2, 3, 4])",
        "([2, 2, 0])",
        "([1, 3, 5])",
        "([])",
        "([11, 9, 0, 1])",
        "([2, 11, 9, 0])",
        "([2])",
        "([2, 5, 12])",
      ],
      question: `Return the number of odd integers in the given array. Note: the % "mod"
      operator computes the remainder, e.g. 5 % 2 is 1.`
    },
    { question: 'The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.',
      title: 'QuizQuestions',
      name: 'fib',
      inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(7)"
   ] },
];

},{}],14:[function(require,module,exports){
/** --- solutions --- **/

let solutions = {};

solutions.sumDownBy2 = function sumDownBy2(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
      return 1;
    }
    else {
      return n + this.sumDownBy2(n-2);
    }
 }
 
 
solutions.makes8 = function makes8(a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};
 
solutions.countOdds = function countOdds(nums) {
   let count = 0;
 
     for (let i = 0; i < nums.length; i++){
         if (nums[i]%2 === 1){
             count += 1;
         }
     }
     return count;
 }
 
 solutions.fib = function fib(n) {
   if (n < 2) {
       return n;
   };
     return this.fib(n-1) + this.fib(n-2);
 }

 module.exports = solutions;
},{}],15:[function(require,module,exports){
module.exports = [
  { question: 'Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).',
    title: 'Recursion-1',
    name: 'factorial',
  inputs: [
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(7)",
  "(8)",
  "(12)"
] },
  { question: 'We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).',
    title: 'Recursion-1',
    name: 'bunnyEars',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(12)",
  "(50)",
  "(234)"
] },
  { question: 'The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.',
    title: 'Recursion-1',
    name: 'fibonacci',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(7)"
] },
  { question: 'We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we\'ll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).',
    title: 'Recursion-1',
    name: 'bunnyEars2',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(10)"
] },
  { question: 'We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.',
    title: 'Recursion-1',
    name: 'triangle',
    inputs: [
  "(0)",
  "(1)",
  "(2)",
  "(3)",
  "(4)",
  "(5)",
  "(6)",
  "(7)"
] },
  { question: 'Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].',
    title: 'Recursion-1',
    name: 'sumDigits1',
    inputs: [
  "(126)",
  "(49)",
  "(12)",
  "(10)",
  "(1)",
  "(0)",
  "(730)",
  "(1111)",
  "(11111)",
  "(10110)",
  "(235)"
] },
  { question: 'Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].',
    title: 'Recursion-1',
    name: 'count7',
    inputs: [
  "(717)",
  "(7)",
  "(123)",
  "(77)",
  "(7123)",
  "(771237)",
  "(771737)",
  "(47571)",
  "(777777)",
  "(70701277)",
  "(777576197)",
  "(99999)",
  "(99799)"
] },
  { question: 'Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].',
    title: 'Recursion-1',
    name: 'count8',
    inputs: [
  "(8)",
  "(818)",
  "(8818)",
  "(8088)",
  "(123)",
  "(81238)",
  "(88788)",
  "(8234)",
  "(2348)",
  "(23884)",
  "(0)",
  "(1818188)",
  "(8818181)",
  "(1080)",
  "(188)",
  "(88888)",
  "(9898)",
  "(78)"
] },
  { question: 'Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).',
    title: 'Recursion-1',
    name: 'powerN',
    inputs: [
  "(3, 1)",
  "(3, 2)",
  "(3, 3)",
  "(2, 1)",
  "(2, 2)",
  "(2, 3)",
  "(2, 4)",
  "(2, 5)",
  "(10, 1)",
  "(10, 2)",
  "(10, 3)"
] },
  { question: 'Given a string, compute recursively (no loops) the number of lowercase \'x\' chars in the string.',
    title: 'Recursion-1',
    name: 'countX',
    inputs: [
  "('xxhixx')",
  "('xhixhix')",
  "('hi')",
  "('h')",
  "('x')",
  "('')",
  "('hihi')",
  "('hiAAhi12hi')"
] },
  { question: 'Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.',
    title: 'Recursion-1',
    name: 'countHi',
    inputs: [
  "('xxhixx')",
  "('xhixhix')",
  "('hi')",
  "('hihih')",
  "('h')",
  "('')",
  "('ihihihihih')",
  "('ihihihihihi')",
  "('hiAAhi12hi')",
  "('xhixhxihihhhih')",
  "('ship')"
] },
  { question: 'Given a string, compute recursively (no loops) a new string where all the lowercase \'x\' chars have been changed to \'y\' chars.',
    title: 'Recursion-1',
    name: 'changeXY',
    inputs: [
  "('codex')",
  "('xxhixx')",
  "('xhixhix')",
  "('hiy')",
  "('h')",
  "('x')",
  "('')",
  "('xxx')",
  "('yyhxyi')",
  "('hihi')"
] },
  { question: 'Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".',
    title: 'Recursion-1',
    name: 'changePi',
    inputs: [
  "('xpix')",
  "('pipi')",
  "('pip')",
  "('pi')",
  "('hip')",
  "('p')",
  "('x')",
  "('')",
  "('pixx')",
  "('xyzzy')"
] },
  { question: 'Given a string, compute recursively a new string where all the \'x\' chars have been removed.',
    title: 'Recursion-1',
    name: 'noX',
    inputs: [
  "('xaxb')",
  "('abc')",
  "('xx')",
  "('')",
  "('axxbxx')",
  "('Hellox')"
] },
  { question: 'Given an array of ints, compute recursively if the array contains a 6. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array6',
    inputs: [
  "([1, 6, 4], 0)",
  "([1, 4], 0)",
  "([6], 0)",
  "([], 0)",
  "([6, 2, 2], 0)",
  "([2, 5], 0)",
  "([1, 9, 4, 6, 6], 0)",
  "([2, 5, 6], 0)"
] },
  { question: 'Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array11',
    inputs: [
  "([1, 2, 11], 0)",
  "([11, 11], 0)",
  "([1, 2, 3, 4], 0)",
  "([1, 11, 3, 11, 11], 0)",
  "([11], 0)",
  "([1], 0)",
  "([], 0)",
  "([11, 2, 3, 4, 11, 5], 0)",
  "([11, 5, 11], 0)"
] },
  { question: 'Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We\'ll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.',
    title: 'Recursion-1',
    name: 'array220',
    inputs: [
  "([1, 2, 20], 0)",
  "([3, 30], 0)",
  "([3], 0)",
  "([], 0)",
  "([3, 3, 30, 4], 0)",
  "([2, 19, 4], 0)",
  "([20, 2, 21], 0)",
  "([20, 2, 21, 210], 0)",
  "([2, 200, 2000], 0)",
  "([0, 0], 0)",
  "([1, 2, 3, 4, 5, 6], 0)",
  "([1, 2, 3, 4, 5, 50, 6], 0)",
  "([1, 2, 3, 4, 5, 51, 6], 0)",
  "([1, 2, 3, 4, 4, 50, 500, 6], 0)"
] },
  { question: 'Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".',
    title: 'Recursion-1',
    name: 'allStar',
    inputs: [
  "('hello')",
  "('abc')",
  "('ab')",
  "('a')",
  "('')",
  "('3.14')",
  "('Chocolate')",
  "('1234')"
] },
  { question: 'Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".',
    title: 'Recursion-1',
    name: 'pairStar',
    inputs: [
  "('hello')",
  "('xxyy')",
  "('aaaa')",
  "('aaab')",
  "('aa')",
  "('a')",
  "('')",
  "('noadjacent')",
  "('abba')",
  "('abbba')"
] },
  { question: 'Given a string, compute recursively a new string where all the lowercase \'x\' chars have been moved to the end of the string.',
    title: 'Recursion-1',
    name: 'endX',
    inputs: [
  "('xxre')",
  "('xxhixx')",
  "('xhixhix')",
  "('hiy')",
  "('h')",
  "('x')",
  "('xx')",
  "('')",
  "('bxx')",
  "('bxax')",
  "('axaxax')",
  "('xxhxi')"
] },
  { question: 'We\'ll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A\'s make a pair. Pair\'s can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.',
    title: 'Recursion-1',
    name: 'countPairs',
    inputs: [
  "('axa')",
  "('axax')",
  "('axbx')",
  "('hi')",
  "('hihih')",
  "('ihihhh')",
  "('ihjxhh')",
  "('')",
  "('a')",
  "('aa')",
  "('aaa')"
] },
  { question: 'Count recursively the total number of "abc" and "aba" substrings that appear in the given string.',
    title: 'Recursion-1',
    name: 'countAbc',
    inputs: [
  "('abc')",
  "('abcxxabc')",
  "('abaxxaba')",
  "('ababc')",
  "('abxbc')",
  "('aaabc')",
  "('hello')",
  "('')",
  "('ab')",
  "('aba')",
  "('aca')",
  "('aaa')"
] },
  { question: 'Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.',
    title: 'Recursion-1',
    name: 'count11',
    inputs: [
  "('11abc11')",
  "('abc11x11x11')",
  "('111')",
  "('1111')",
  "('1')",
  "('')",
  "('hi')",
  "('11x111x1111')",
  "('1x111')",
  "('1Hello1')",
  "('Hello')"
] },
  { question: 'Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".',
    title: 'Recursion-1',
    name: 'stringClean',
    inputs: [
  "('yyzzza')",
  "('abbbcdd')",
  "('Hello')",
  "('XXabcYY')",
  "('112ab445')",
  "('Hello Bookkeeper')"
] },
  { question: 'Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an \'x\' immedately before them.',
    title: 'Recursion-1',
    name: 'countHi2',
    inputs: [
  "('ahixhi')",
  "('ahibhi')",
  "('xhixhi')",
  "('hixhi')",
  "('hixhhi')",
  "('hihihi')",
  "('hihihix')",
  "('xhihihix')",
  "('xxhi')",
  "('hixxhi')",
  "('hi')",
  "('xxxx')",
  "('h')",
  "('x')",
  "('')",
  "('Hellohi')"
] },
  { question: 'This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".',
    title: 'Recursion-1',
    name: 'starBit',
    inputs: [
      "('xyz,-abc*123')",
      "('x,-hello*')",
      "(',-xy*1')",
      "('not really ,-possible*')",
      "(',-abc*')",
      "(',-abc*xyz')",
      "(',-abc*x')",
      "(',-x*')",
      "(',-)*')",
      "('res ,-ipsa* loquitor')",
      "('hello,-not really*there')",
      "('ab,-ab*ab')"
] },
  { question: 'Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what\'s inside them.',
    title: 'Recursion-1',
    name: 'nestParen',
    inputs: [
    "('(())')",
    "('((()))')",
    "('(((x))')",
    "('((())')",
    "('((()()')",
    "('()')",
    "('')",
    "('(yy)')",
    "('(())')",
    "('(((y))')",
    "('((y)))')",
    "('((()))')",
    "('(())))')",
    "('((yy())))')",
    "('(((())))')"
    ] },
  { question: 'Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.',
    title: 'Recursion-1',
    name: 'strCount',
    inputs: [
  "('catcowcat', 'cat')",
  "('catcowcat', 'cow')",
  "('catcowcat', 'dog')",
  "('cacatcowcat', 'cat')",
  "('xyx', 'x')",
  "('iiiijj', 'i')",
  "('iiiijj', 'ii')",
  "('iiiijj', 'iii')",
  "('iiiijj', 'j')",
  "('iiiijj', 'jj')",
  "('aaabababab', 'ab')",
  "('aaabababab', 'aa')",
  "('aaabababab', 'a')",
  "('aaabababab', 'b')"
] },
  { question: 'Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.',
    title: 'Recursion-1',
    name: 'strCopies',
    inputs: [
  "('catcowcat', 'cat', 2)",
  "('catcowcat', 'cow', 2)",
  "('catcowcat', 'cow', 1)",
  "('iiijjj', 'i', 3)",
  "('iiijjj', 'i', 4)",
  "('iiijjj', 'ii', 2)",
  "('iiijjj', 'ii', 3)",
  "('iiijjj', 'x', 3)",
  "('iiijjj', 'x', 0)",
  "('iiiiij', 'iii', 3)",
  "('iiiiij', 'iii', 4)",
  "('ijiiiiij', 'iiii', 2)",
  "('ijiiiiij', 'iiii', 3)",
  "('dogcatdogcat', 'dog', 2)"
] },
  { question: 'Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.',
    title: 'Recursion-1',
    name: 'strDist',
    inputs: [
  "('catcowcat', 'cat')",
  "('catcowcat', 'cow')",
  "('cccatcowcatxx', 'cat')",
  "('abccatcowcatcatxyz', 'cat')",
  "('xyx', 'x')",
  "('xyx', 'y')",
  "('xyx', 'z')",
  "('z', 'z')",
  "('x', 'z')",
  "('', 'z')",
  "('hiHellohihihi', 'hi')",
  "('hiHellohihihi', 'hih')",
  "('hiHellohihihi', 'o')",
  "('hiHellohihihi', 'll')"
] }
];

},{}],16:[function(require,module,exports){
/** --- solutions --- **/

let solutions = {};

solutions.factorial = function factorial(n) {
    if (n === 0) {
        return 1;
    }
     return n * this.factorial(n-1)
 }
 
 solutions.bunnyEars = function bunnyEars(bunnies) {
     if (bunnies <= 0) {
       return 0;
     }
     else {
       return 2 + this.bunnyEars(bunnies-1);
     }
 }
 
 solutions.fibonacci = function fibonacci(n) {
   if (n < 2) {
       return n;;
   };
     return this.fibonacci(n-1) + this.fibonacci(n-2)
 }
 
 solutions.bunnyEars2 = function bunnyEars2(bunnies) {
 
  if (bunnies <= 0){
    return 0;
  }
 
  if (bunnies%2 == 0){
    return 3 + this.bunnyEars2(bunnies - 1);
  } else {
    return 2 + this.bunnyEars2(bunnies - 1);
  }
 }
 
 solutions.triangle = function triangle(rows) {
 
   if (rows <= 0){
     return 0;
   }
   return rows + this.triangle(rows-1)
 }
 
 solutions.sumDigits1 = function sumDigits1(n) {
     if(n <= 0){
        return 0;
     }
     return n % 10 + this.sumDigits1(Math.floor(n/10));
 }
 
 solutions.count7 = function count7(n) {
     if(n <= 0)
         return 0;
 
     if(n % 10 == 7)
         return 1 + this.count7(Math.floor(n/10));
 
     return this.count7(Math.floor(n/10));
 }
 
 solutions.count8 = function count8(n) {
     if(n == 0){
       return 0;
     }
 
     if(n % 10 == 8) {
         if(parseInt(n/10) % 10 == 8) {
            return 2 + this.count8(parseInt(n/10));
         } else {
           return 1 + this.count8(parseInt(n/10));
         }
     }
     return this.count8(parseInt(n/10));
 }
 
 solutions.powerN = function powerN(base, n) {
   if (n == 1){
     return base;
   }
   return base * this.powerN(base, n-1);
 }
 
 solutions.countX = function countX(str) {
     if(str.length == 0)
         return 0;
 
     if(str.charAt(0) == 'x'){
       return 1 + this.countX(str.substring(1));
     } else {
       return this.countX(str.substring(1));
     }
 }
 
 solutions.countHi = function countHi(str) {
   if (str.length == 0){
     return 0;
   }
 
   if (str.substring(0, 2) == "hi"){
     return 1 + this.countHi(str.substring(2))
   }
   return this.countHi(str.substring(1))
 }
 
 solutions.changeXY = function changeXY(str) {
   if (str.length == 0){
     return "";
   }
 
   if (str.charAt(0) == "x"){
     return "y" + this.changeXY(str.substring(1))
   }
   return str.charAt(0) + this.changeXY(str.substring(1))
 }
 
 solutions.changePi = function changePi(str) {
 
   if (str.length <= 0){
     return "";
   }
 
   if (str.substring(0, 2) == "pi"){
     return 3.14 + this.changePi(str.substring(2))
   } else {
     return str.charAt(0) + this.changePi(str.substring(1))
   }
 }
 
 solutions.noX = function noX(str) {
   if (str.length == 0){
     return "";
   }
 
   if (str.charAt(0) == "x"){
     return this.noX(str.substring(1));
   } else {
     return str.charAt(0) + this.noX(str.substring(1));
   }
 }
 
 solutions.array6 = function array6(nums, i) {
   if (i > nums.length){
     return false;
   }
 
   if (nums[i] == 6){
     return true;
   } else {
     return this.array6(nums, i+1)
   }
 }
 
 solutions.array11 = function array11(nums, i) {
   if (i >= nums.length){
     return 0;
   }
 
   if (nums[i] == 11){
     return 1 + this.array11(nums, i+1);
   } else {
     return this.array11(nums, i+1);
   }
 }
 
 solutions.array220 = function array220(nums, i) {
 
   if (i == nums.length-1 || nums.length == 0){
     return false;
   }
 
   if (nums[i] * 10 == nums[i+1]){
     return true;
   }
   return this.array220(nums, i+1);
 }
 
 solutions.allStar = function allStar(str) {
 
   if (str.length <= 1){
     return str;
   }
 
   return  str.charAt(0) + "*" + this.allStar(str.substring(1));
 }
 
 solutions.pairStar = function pairStar(str) {
 
   if (str.length <= 1){
     return str.charAt(0);
   }
 
   if (str.charAt(0) == str.charAt(1)){
     return str.charAt(0) + "*" + this.pairStar(str.substring(1));
   }
   return str.charAt(0) + this.pairStar(str.substring(1));
 }
 
 solutions.endX = function endX(str) {
     if(str.length <= 1) {
       return str;
     }
 
    if (str.charAt(0) == "x"){
      return this.endX(str.substring(1)) + "x";
    }
    return str.charAt(0) + this.endX(str.substring(1));
 }
 
 solutions.countPairs = function countPairs(str) {
 
   if (str.length <= 2){
     return 0;
   }
 
   if (str.charAt(0) == str.charAt(2)){
     return 1 + this.countPairs(str.substring(1));
   }
   return this.countPairs(str.substring(1));
 }
 
 solutions.countAbc = function countAbc(str){
 
   if (str.length <= 2) {
     return 0;
   }
 
   if (str.substring(0, 3) === "abc" || str.substring(0, 3) === "aba"){
     return 1 + this.countAbc(str.substring(2));
   }
   return this.countAbc(str.substring(1))
 }
 
 solutions.count11 = function count11(str) {
 
   if (str.length <= 1){
     return 0;
   }
 
   if (str.substring(0, 2) == "11"){
     return 1 + this.count11(str.substring(2))
   }
   return this.count11(str.substring(1));
 }
 
 solutions.stringClean = function stringClean(str) {
   if (str.length == 1){
     return str;
   }
 
   if (str.charAt(0) == str.charAt(1)){
     return this.stringClean(str.substring(1));
   }
   return str.charAt(0) + this.stringClean(str.substring(1));
 }
 
 solutions.countHi2 = function countHi2(str){
   if (str.length <= 1){
     return 0;
   }
 
   if (str.substring(0, 3) == "xhi"){
     return this.countHi2(str.substring(3))
   }
 
   if (str.substring(0, 2) == "hi"){
      return 1 + this.countHi2(str.substring(2))
   }
 
    return this.countHi2(str.substring(1))
 }
 
 solutions.starBit = function starBit(str) {
   if (str.charAt(0) == "-" && str.charAt(str.length - 1) == "*"){
     return str;
   }
 
   if (str.charAt(str.length-1) == "*"){
     return this.starBit(str.substring(1));
   }
 
   if (str.charAt(0) == "-"){
     return this.starBit(str.substring(0, str.length-1));
   }
 
   return this.starBit(str.substring(1, str.length - 1));
 }
 
 solutions.nestParen = function nestParen(str) {
     if(str.length == 0)
         return true;
 
     if(str.charAt(0) == '(' && str.charAt(str.length-1) == ')'){
         return this.nestParen(str.substring(1, str.length-1));
     }
 
     return false;
 }
 
 solutions.strCount = function strCount(str, sub) {
   if (str.length <= 0){
     return 0;
   }
 
   if (str.substring(0, sub.length) == sub){
     return 1 + this.strCount(str.substring(sub.length), sub)
   }
   return this.strCount(str.substring(1), sub);
 }
 
 solutions.strCopies = function strCopies(str, sub, n) {
   if (n == 0){
     return true;
   }
 
   if (str.length < sub.length){
     return false;
   }
 
   if (str.substring(0, sub.length) == sub){
     return this.strCopies(str.substring(1), sub, n-1)
   }
   return this.strCopies(str.substring(1), sub, n)
 }
 
 solutions.strDist = function strDist(str, sub) {
 
   if (str.length <= sub.length){
         if (str == sub){
         return str.length;
       } else {
           return 0;
       }
   }
 
   if (str.substring(0, sub.length) == sub && str.substring(str.length-sub.length) == sub){
     return str.length;
   }
 
   if (str.substring(0, sub.length) == sub){
     return this.strDist(str.substring(0, str.length-1), sub);
   }
 
    if (str.substring(str.length-sub.length) == sub){
     return this.strDist(str.substring(1), sub);
   }
 
   return this.strDist(str.substring(1, str.length-1), sub)
 }

 module.exports = solutions;
},{}],17:[function(require,module,exports){
/** --- Solutions --- **/
// String-1

let solutions = {};

solutions.helloName = function helloName(name) {
    return `Hello ${name}!`;
  };
  
solutions.makeAbba = function makeAbba(a, b) {
  return a + b + b + a;
};

solutions.makeOutWord = function makeOutWord(out, word) {
  front = out.substring(0, 2);
  back = out.substring(2, 4);
  return front + word + back;
};

solutions.extraEnd = function extraEnd(str) {
  if (str.length > 1) {
    back = str.substring(str.length - 2);
    return back + back + back;
  }
};

solutions.withoutEnd = function withoutEnd(str) {
  return str.substring(1, str.length - 1);
};

solutions.comboString = function comboString(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
};

solutions.nonStart = function nonStart(a, b) {
  a = a.substring(1, a.length);
  b = b.substring(1, b.length);
  return a + b;
};

solutions.firstHalf = function firstHalf(str) {
  if (str.length % 2 == 0) {
    return str.substring(0, str.length);
  }
  return str;
};

solutions.firstTwo = function firstTwo(str) {
  if (str.length > 2) {
    return str.substring(0, 2);
  }
  return str;
};

solutions.left2 = function left2(str) {
  if (str.length > 1) {
    front = str.substring(0, 2);
    back = str.substring(2, str.length);
    return back + front;
  }
  return str;
};

solutions.right2 = function right2(str) {
  if (str.length > 1) {
    back = str.substring(str.length - 2, str.length);
    front = str.substring(0, str.length - 2);
    return back + front;
  }
  return str;
};

solutions.theEnd = function theEnd(str, front) {
  if (front) {
    return str.substring(0, 1);
  }
  return str.substring(str.length - 1);
};

solutions.withoutEnd2 = function withoutEnd2(str) {
  if (str.length <= 1) {
    return '';
  }
  return str.substring(1, str.length - 1);
};

solutions.middleTwo = function middleTwo(str) {
  if (str.length % 2 == 0) {
    temp = str.substring(str.length);
    mid = temp.substring(0, 2);
    return mid;
  }
  return str;
};

solutions.endsLy = function endsLy(str) {
  if (str.substring(str.length - 2, str.length) == 'ly') {
    return true;
  } else {
    return false;
  }
};

solutions.nTwice = function nTwice(str, n) {
  first = str.substring(0, n);
  end = str.substring(str.length - n);
  return first + end;
};

solutions.makeTags = function makeTags(tag, word) {
  const otag = `<${tag}>`;
  const ctag = `</${tag}>`;
  return otag + word + ctag;
};

solutions.twoChar = function twoChar(str, index) {
  if (index + 2 > str.length || index < 0) {
    return str.substring(0, 2);
  }

  return str.substring(index, index + 2);
};

solutions.middleThree = function middleThree(str) {
  const i = Math.floor(str.length / 2);

  return str.substring(i - 1, i + 2);
};

solutions.hasBad = function hasBad(str) {
  if (str.length == 3) {
    return str.substring(0, 3) == 'bad';
  }

  if (str.length >= 4) {
    return str.substring(0, 3) == 'bad' ||
            str.substring(1, 4) == 'bad';
  }

  return false;
};

solutions.atFirst = function atFirst(str) {
  if (str.length == 0) {
    return '@@';
  }

  if (str.length == 1) {
    return `${str}@`;
  }

  return str.substring(0, 2);
};

solutions.lastChars = function lastChars(a, b) {
  let res = '';
  if (a.length == 0) {
    res += '@';
  } else {
    res += a.charAt(0);
  }

  if (b.length == 0) {
    res += '@';
  } else {
    res += b.charAt(b.length - 1);
  }

  return res;
};

solutions.conCat = function conCat(a, b) {
  if (a.charAt(a.length - 1) == b.charAt(0)) {
    return a + b.substring(1);
  } else {
    return a + b;
  }
};

solutions.lastTwo = function lastTwo(str) {
  if (str.length < 2) {
    return str;
  }

  return str.substring(0, str.length - 2) + str.charAt(str.length - 1) +
        str.charAt(str.length - 2);
};

solutions.seeColor = function seeColor(str) {
  if (str.length >= 3 && str.substring(0, 3) == 'red') {
    return 'red';
  }

  if (str.length >= 4 && str.substring(0, 4) == 'blue') {
    return 'blue';
  }

  return '';
};

solutions.frontAgain = function frontAgain(str) {
  if (str.length < 2) {
    return false;
  }

  return str.substring(0, 2) == str.substring(str.length - 2);
};

solutions.minCat = function minCat(a, b) {
  const min = Math.min(a.length, b.length);

  return a.substring(a.length - min) + b.substring(b.length - min);
};

solutions.extraFront = function extraFront(str) {
  if (str.length >= 2) {
    str = str.substring(0, 2);
  }

  return str + str + str;
};

solutions.without2 = function without2(str) {
  if (str.length >= 2 &&
        str.substring(0, 2) == str.substring(str.length - 2)) {
    return str.substring(2);
  }

  return str;
};

solutions.deFront = function deFront(str) {
  if (str.length == 1 && str.charAt(0) != 'a') {
    return '';
  }

  if (str.length >= 2) {
    if (str.charAt(0) != 'a' && str.charAt(1) != 'b') {
      return str.substring(2);
    } else if (str.charAt(0) != 'a') {
      return str.substring(1);
    } else if (str.charAt(1) != 'b') {
      return `a${str.substring(2)}`;
    }
  }

  return str;
};

solutions.startWord = function startWord(str, word) {
  if (str.length >= word.length &&
        str.substring(1, word.length) == (word.substring(1))) {
    return str.substring(0, word.length);
  }

  return '';
};

solutions.withoutX = function withoutX(str) {
  let start = 0;
  let end = str.length;

  if (str.length > 0 && str.charAt(0) == 'x') { start = 1; }

  if (str.length > 1 && str.charAt(str.length - 1) == 'x') {
    end--;
  }

  return str.substring(start, end);
};

solutions.withoutX2 = function withoutX2(str) {
  if (str.length == 1 && str.charAt(0) == 'x') {
    return '';
  }

  if (str.length >= 2) {
    if (str.charAt(0) == 'x' && str.charAt(1) == 'x') {
      return str.substring(2);
    } else if (str.charAt(0) == 'x') {
      return str.substring(1);
    } else if (str.charAt(1) == 'x') {
      return str.charAt(0) + str.substring(2);
    }
  }

  return str;
};

// String-2

solutions.doubleChar = function doubleChar(str) {
  let dStr = "";

  for (let i = 0; i < str.length; i++){
      dStr += str[i]+str[i];
  }
  return dStr;
}

solutions.countHi = function countHi(str) {

  let count = 0;

  for (let i = 0; i < str.length; i++){
      if (str[i] + str[i+1] == "hi"){
          count +=1;
      }
  }
  return count;

}

solutions.catDog = function catDog(str) {
  let cat = 0;
  let dog = 0;

  for (let i = 0; i < str.length; i++) {
      if(str.substring(i, i+3) == "cat") {
          cat += 1;
      }
        if(str.substring(i, i+3) == "dog") {
          dog += 1;
          }

    }
    return cat == dog;
}

solutions.countCode = function countCode(str) {
  let count = 0;

    for (let i = 0; i < str.length; i++){
        if(str.substring(i, i+2) == "co" && str.substring(i+3, i+4) == "e"){
            count += 1;
        }
    }

    return count;
}

solutions.endOther = function endOther(a, b) {
  let short = "";
  let long = "";

    if (a == b) {
        return true;
    }

    if (a.length < b.length){
        short += a.toLowerCase();
        long += b.toLowerCase();
    } else {
        short += b.toLowerCase();
        long += a.toLowerCase();
    }

    let longEnd = long.substring(long.length -short.length);

    return longEnd == short;
}

solutions.xyzThere = function xyzThere(str) {
  let x = "xyz";
  for (let i = 0; i < str.length; i++){
    if(str.substring(i, i+3) == x && str.charAt(i-1, i) != "."){
        return true;
    }
  }
    return false;
}

solutions.bobThere = function bobThere(str) {
  for (let i = 0; i < str.length; i++){
      if (str.charAt(i) == "b" && str.charAt(i+2) == "b"){
          return true;
      }
  }
    return false;
}

solutions.xyBalance = function xyBalance(str) {
    let y = false;
    //backwards loop
    for(let i = str.length - 1; i >= 0; i--) {
        if(str.charAt(i) == 'y')
            y = true;

        if(str.charAt(i) == 'x' && !y)
            return false;
    }

    return true;
}

solutions.mixString = function mixString(a, b) {
    let large = "";
    let newStr = "";

    if (a.length > b.length) {
        large += a.length;
    } else {
        large += b.length;
    }

    for (let i = 0; i < large; i++) {
        if (a[i] != undefined) {
          newStr += a[i];
        }
        if (b[i] != undefined){
            newStr += b[i];
        }
    }

    return newStr;
}

solutions.repeatEnd = function repeatEnd(str, n) {
    let retStr = "";
  let sub = str.substring(str.length - n);

    while (n != 0) {
        retStr += sub;
        n--
    }

    return retStr;
}

solutions.repeatFront = function repeatFront(str, n) {

    let nu = "";

    for (let i = n; i > 0; i--){
        nu += str.substring(0, i);
    }

    return nu;
}

solutions.repeatSeparator = function repeatSeparator(word, sep, count) {
  let nu = "";

      if (count == 0){
        return "";
      }


    for (let i = 0; i < count - 1; i++){
        nu += word;
        nu += sep;
    }

    nu += word;

    return nu;
}

solutions.prefixAgain = function prefixAgain(str, n) {
    let prefix = str.substring(0, n);

    for (let i = str.length; i > n; i--){
        if(str.substring(i-n, i) == prefix) {
            return true;
        }
    }
    return false;
}

solutions.xyzMiddle = function xyzMiddle(str) {
    if(str.length < 3)
        return false;

    let start1 = str.length / 2 - 2;
    let start2 = str.length / 2 - 1;

    if(str.length % 2 == 0) {
        return str.substring(start1, start1 + 3) == "xyz" ||
            str.substring(start2, start2 + 3) == "xyz";
    }

    return str.substring(start2, start2 + 3) == "xyz";
}

solutions.getSandwich = function getSandwich(str) {
  let temp1 = "";
  let i1 = 0;
    for (let i = 0; i < str.length; i++){
        if (str.slice(i, i+5) == "bread") {
            temp1 = str.slice(i, i+5);
            i1 = i+5;
            break;
        }
    }
  let temp2 = "";
  let i2 = 0;
    for (let i = str.length; i >= 0; i--){
        if (str.slice(i-5, i) == "bread") {
            temp2 = str.slice(i-5, i);
            i2 = i-5;
            break;
        }
    }

    let res = "";

    for (let j = i1; j < i2; j++){
        res += str[j];
    }

    return res;
}

solutions.sameStarChar = function sameStarChar(str) {

    for (let i = 1; i < str.length - 1; i++){
        if (str.charAt(i) == '*' && str.charAt(i-1) != str.charAt(i+1)){
            return false;
        }
    }
    return true;
}

solutions.oneTwo = function oneTwo(str) {
    let nust = "";

    for (let i = 0; i < str.length-1; i+= 3){
        if (str[i+2] != undefined){
          nust += str[i+1]; //c
          nust += str[i+2]; //b
          nust += str[i]; //a
        }
  }
    return nust;
}

solutions.zipZap = function zipZap(str) {
  let nust = "";
  for (let i = 0; i < str.length; i++){
    if (str[i-1] != "z" || str[i+1] != "p"){
      nust += str[i];
    }
  }
  return nust;
}

solutions.starOut = function starOut(str) {
    if(str.length < 1)
        return "";

    if(str.length == 1) {
        if(str.charAt(0) == '*')
            return "";
        else
            return str;
    }

    let len = str.length;
    let arr = new Array();

    let count = 0;


    if(str.charAt(0) != '*' && str.charAt(1) != '*') {
        arr[count] = str.charAt(0);
        count++;
    }

    for(let i = 1; i < str.length - 1; i++) {
        if(str.charAt(i-1)!='*' && str.charAt(i) != '*' &&
            str.charAt(i+1) != '*') {
            arr[count] = str.charAt(i);
            count++;
        }
    }

    if(str.charAt(str.length-1) != '*' &&
        str.charAt(str.length-2) != '*') {
        arr[count] = str.charAt(str.length - 1);
        count++;
    }

    let x = arr.toString();

      return x.replace(/,/g, "");
}

solutions.plusOut = function plusOut(str, word) {
  let slen = str.length;
  let wlen = word.length;
  let fin = "";

  for (let i = 0; i < slen; i++) {
    if (i <= slen - wlen) {
      let tmp = str.substring(i,i+wlen);
      if (tmp == word) {
        fin += word;
        i += wlen-1;
      }
      else
        fin += "+";
    }
    else
      fin += "+";
  }
  return fin;
}

solutions.wordEnds = function wordEnds(str, word){
  let slen = str.length;
  let wlen = word.length;
  let res = "";

  if (slen.length < 1){
    return str;
  }

  for (let i = 0; i < slen; i++) {
    if (i <= slen - wlen){
      let temp = str.substring(i, i+wlen);
      if (temp == word){
        if (str[i-1] != undefined) {
          res += str[i-1];
        }
        if (str[i+wlen]){
          res+= str[i+wlen];
        }
        i += wlen-1;
      } else {

      }
    } else {

    }
  }
  return res;
}

// String-3

solutions.countYZ = function countYZ(str){
  let count=0;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-z]/i) || str.charAt(i) == " ") {

        if (str.charAt(i-1).toLowerCase() == "y" || str.charAt(i-1).toLowerCase() == "z"){
        count += 1;
      }
    }
    if (i == str.length-1) {
        if (str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "z"){
        count += 1;
      }
    }
  }
  return count;
}

solutions.withoutString = function withoutString(base, remove){

  let rlen = remove.length;

  let res = "";

  for (let i = 0; i < base.length; i++){
    let subbie = base.substring(i, i+ rlen);
    if (subbie.toLowerCase() != remove.toLowerCase()) {
        if (base[i] == " " && res.charAt(res.length-1) == " "){
        }  else {
            res += base[i];
        }
    }  else {
      i += rlen-1;
    }
  }
  return res;
}

solutions.equalIsNot = function equalIsNot(str){
  let is = "is";
  let not = "not";

  let isCount = 0;
  let notCount = 0;

  for (let i = 0; i < str.length; i++) {
      let checkIs = str.substring(i, i+is.length);
      let checkNot = str.substring(i, i+not.length);

      if (checkIs == is){
        isCount += 1;
      }

      if (checkNot == not){
        notCount += 1;
      }
  }

  return isCount == notCount;

}

solutions.gHappy = function gHappy(str) {

  for (let i = 0; i < str.length; i++){
    if (str[i] == "g" && (str[i-1] != "g" && str[i+1] != "g")){
      return false;
    }
  }
  return true;
}

solutions.countTriple = function countTriple(str) {

  let count = 0;

  for (let i = 0; i <= str.length-2; i++) {
    let triple = str.substring(i, i+3);
    if (triple[0] == triple[1] && triple[1] == triple[2]){
      count += 1;
    }
  }
  return count;
}

solutions.sumDigits = function sumDigits(str) {

  let add = (a, b) => a+b;

  let nums = []

  for (let i = 0; i < str.length; i++) {

    if (Number.isInteger(parseInt(str[i]))) {
        nums.push(parseInt(str[i]))
    }
  }

    if (nums.length != 0) {
      return nums.reduce(add);
    } else {
      return 0;
    }
}

solutions.sameEnds = function sameEnds(string) {
    let start = Math.ceil(string.length/2);
    let end = string.length/2;

    for (let i = 0; i < string.length/2; i++){
      if (string.substring(0, end) == string.substring(start)){
        return string.substring(0, end);
      } else {
          start++;
          end--
      }
    }
  return "";
}

solutions.mirrorEnds = function mirrorEnds(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] == string[string.length - i - 1]) {
        result += string[i]
      } else {
        break;
      }
    }

    return result;
}

solutions.maxBlock = function maxBlock(str) {
  let count = 0;
  let stick = 1;

  for (let i = 0; i < str.length; i++){
    if (i < str.length-1 && str[i] == str[i+1]){
      stick += 1;
    } else {
      stick = 1;
    }

    if (stick > count){
      count= stick;
    }
  }

  return count;

}

solutions.sumNumbers = function sumNumbers(str) {

  let len = str.length;
  let temp = "";
  let sum = 0;

  for (let i = 0; i < str.length; i++){
    if (parseInt(str[i])){
      if (i < len-1 && parseInt(str[i+1])){
        temp+= str[i]
      } else {
        temp+= str[i]
        sum += parseInt(temp);
        temp="";
      }
    }
  }
  return sum;
}

solutions.notReplace = function notReplace(str) {

  let result = "";

  for (let i = 0; i < str.length; i++){
        /* using charAt here rather than bracket index, b/c bracket index shows undefined for chars at
      -1 index, causing error. charAt shows "", so no error*/
      if ((str.charAt(i-1).match(/[a-z]/i)
    || i+2 < str.length && str.charAt(i+2).match(/[a-z]/i))){
        result += str[i];
      } else if (str.substring(i, i+2) == "is"){
        result += "is not";
        i++;
      } else {

        result += str[i];
      }
    }
    return result;
}

module.exports = solutions;
},{}],18:[function(require,module,exports){
module.exports = [
  {
    title: 'Warmup-1',
    name: 'SleepIn',
    question: `The parameter WEEKDAY is true if it is a weekday, and the parameter
       VACATION is FALSE if we are on vacation. We sleep in if it is not a weekday or
       we're on vacation. Output <code>"TRUE"</code> if we sleep in, "FALSE" if we do not.`,
    inputs: [
      '(TRUE, TRUE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
      '(FALSE, FALSE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'MonkeyTrouble',
    question: `We have two monkeys, a and b, and the parameters ASMILE and
            BSMILE indicate if each is smiling. We are in trouble if they are both smiling
            or if neither of them is smiling. Output <code>"TRUE"</code> if we are in trouble, "FALSE" otherwise.`,
    inputs: [
      '(TRUE, TRUE)',
      '(FALSE, FALSE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'SumDouble',
    question: `Given two numbers, output their sum. Unless the two values are the same,
     then output double their sum.`,
    inputs: [
      '(1, 2)',
      '(3, 2)',
      '(2, 2)',
      '(-1, 0)',
      '(3, 3)',
      '(0, 0)',
      '(0, 1)',
      '(3, 4)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Diff21',
    question: `Given an number, N, output the absolute difference between N and 21,
              except output double the absolute difference if N is over 21.`,
    inputs: [
      '(19)',
      '(10)',
      '(21)',
      '(22)',
      '(25)',
      '(30)',
      '(0)',
      '(1)',
      '(2)',
      '(-1)',
      '(-2)',
      '(50)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'ParrotTrouble',
    question: `We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
  We are in trouble if the parrot is talking and the hour is before 7 or after 20.
  Output <code>"TRUE"</code> if we are in trouble.`,
    inputs: [
      '(TRUE, 6)',
      '(TRUE, 7)',
      '(FALSE, 6)',
      '(TRUE, 21)',
      '(FALSE, 21)',
      '(TRUE, 23)',
      '(FALSE, 23)',
      '(TRUE, 20)',
      '(FALSE, 12)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Makes10',
    question: 'Given 2 numbers, A and B, Output <code>"TRUE"</code> if one if them is 10 or if their sum is 10.',
    inputs: [
      '(9, 10)',
      '(9, 9)',
      '(1, 9)',
      '(10, 1)',
      '(10, 10)',
      '(8, 2)',
      '(8, 3)',
      '(10, 42)',
      '(12, -2)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'NearHundred',
    question: `Given a number N, Output <code>"TRUE"</code> if it is within 10 of 100 or 200.`,
    inputs: [
      '(93)',
      '(90)',
      '(89)',
      '(110)',
      '(111)',
      '(121)',
      '(0)',
      '(5)',
      '(191)',
      '(189)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'PosNeg',
    question: `Given 2 number values, Output <code>"TRUE"</code> if one is negative and one is positive.
        Except if the parameter <code>NEGATIVE</code> is true, then output <code>"TRUE"</code> only if both are negative.`,
    inputs: [
      '(1, -1, FALSE)',
      '(-1, 1, FALSE)',
      '(-4, -5, true)',
      '(-4, -5, FALSE)',
      '(-4, 5, FALSE)',
      '(-4, 5, true)',
      '(1, 1, FALSE)',
      '(-1, -1, FALSE)',
      '(1, -1, true)',
      '(-1, 1, true)',
      '(1, 1, true)',
      '(-1, -1, true)',
      '(5, -5, FALSE)',
      '(-6, 6, FALSE)',
      '(-5, -6, FALSE)',
      '(-2, -1, FALSE)',
      '(1, 2, FALSE)',
      '(-5, 6, true)',
      '(-5, -5, true)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'NotString',
    question: `Given a string, output a new string where "not " has been added to the front. However,
    if the string already begins with "not", output the string unchanged. You can use the method STRING.SubStr(S,L)
    where S is the first index in the substring (first char is 0!) and L is how many chars you want`,
    inputs: [
      "('candy')",
      "('x')",
      "('not bad')",
      "('bad')",
      "('not')",
      "('is not')",
      "('no')",
    ],
  }, {
    title: 'Warmup-1',
    name: 'Front3',
    inputs: [
      "('Java')",
      "('Chocolate')",
      "('abc')",
      "('abcXYZ')",
      "('ab')",
      "('a')",
      "('')",
    ],
    question: `Given a string, we'll say that the front is the first 3 chars of the string.
            If the string length is less than 3, the front is whatever is there. Return a new
            string which is 3 copies of the front. You can use the method STRING.SubStr(S,L)
            where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'Or35',
    inputs: [
      '(3)',
      '(10)',
      '(8)',
      '(15)',
      '(5)',
      '(4)',
      '(9)',
      '(4)',
      '(7)',
      '(6)',
      '(17)',
      '(18)',
      '(29)',
      '(20)',
      '(21)',
      '(22)',
      '(45)',
      '(99)',
      '(100)',
      '(101)',
      '(121)',
      '(122)',
      '(123)',
    ],
    question: `Output <code>"TRUE"</code> if the given non- negative number is a multiple of 3 or a
            multiple of 5.(Hint: Use the < code > mod</code > operator)`,
  }, {
    title: 'Warmup-1',
    name: 'Front22',
    inputs: [
      "('kitten')",
      "('Ha')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('Logic')",
    ],
    question: `Given a string, take the first 2 chars and output the string with the 2
chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are
there. You can use the method STRING.SubStr(S,L)
where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'StartHi',
    inputs: [
      "('hi there')",
      "('hi')",
      "('hello hi')",
      "('he')",
      "('h')",
      "('')",
      "('ho hi')",
      "('hi ho')",
    ],
    question: `Given a string, Output <code>"TRUE"</code> if the string starts with 'hi'and
FALSE otherwise. You can use the method STRING.SubStr(S,L)
where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'IcyHot',
    inputs: [
      '(120, -1)',
      '(-1, 120)',
      '(2, 120)',
      '(-1, 100)',
      '(-2, 120)',
      '(120, 120)',
    ],
    question: `Given two temperatures, Output <code>"TRUE"</code> if one is less than 0 and the
other is greater than 100.`,
  }, {
    title: 'Warmup-1',
    name: 'In1020',
    inputs: [
      '(12, 99)',
      '(21, 12)',
      '(8, 99)',
      '(99, 10)',
      '(20, 20)',
      '(21, 21)',
      '(9, 9)',
    ],
    question: `Given 2 number values, Output <code>"TRUE"</code> if either or both of them is in the range
10..20 inclusive.`,
  }, {
    title: 'Warmup-1',
    name: 'HasTeen',
    inputs: [
      '(13, 20, 10)',
      '(20, 19, 10)',
      '(20, 10, 13)',
      '(1, 20, 12)',
      '(19, 20, 12)',
      '(12, 20, 19)',
      '(12, 9, 20)',
      '(12, 18, 20)',
      '(14, 2, 20)',
      '(4, 2, 20)',
      '(11, 22, 22)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values,
Output <code>"TRUE"</code> if 1 or more of them are teen.`,
  }, {
    title: 'Warmup-1',
    name: 'LoneTeen',
    inputs: [
      '(13, 99)',
      '(21, 19)',
      '(13, 13)',
      '(14, 20)',
      '(20, 15)',
      '(16, 17)',
      '(16, 9)',
      '(16, 18)',
      '(13, 19)',
      '(13, 20)',
      '(6, 18)',
      '(99, 13)',
      '(99, 99)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
Given 2 int values, Output <code>"TRUE"</code> if one or the other is teen, but not both.`,
  }, {
    title: 'Warmup-1',
    name: 'MixStart',
    inputs: [
      "('mix snacks')",
      "('pix snacks')",
      "('piz snacks')",
      "('nix')",
      "('ni')",
      "('n')",
    ],
    question: `Output <code>"TRUE"</code> if the given string begins with 'mix', except the 'm' can be
anything, so 'pix', '9ix'..all count. You can use the method STRING.SubStr(S,L) to get a substring
where S is the first index in the substring (first char is 0!) and L is how many chars you want (at max).`,
  },
  {
    title: 'Warmup-1',
    name: 'IntMax',
    inputs: [
      '(1, 2, 3)',
      '(1, 3, 2)',
      '(3, 2, 1)',
      '(9, 3, 3)',
      '(3, 9, 3)',
      '(3, 3, 9)',
      '(8, 2, 3)',
      '(-3, -1, -2)',
      '(6, 2, 5)',
      '(5, 6, 2)',
      '(5, 2, 6)',
    ],
    question: 'Given three int values, A, B, and C, output the largest.',
  },
  {
    title: 'Warmup-1',
    name: 'Close10',
    inputs: [
      '(8, 13)',
      '(13, 8)',
      '(13, 7)',
      '(7, 13)',
      '(9, 13)',
      '(13, 8)',
      '(10, 12)',
      '(11, 10)',
      '(5, 21)',
      '(0, 20)',
      '(0, 20)',
      '(10, 10)',
    ],
    question: `Given 2 int values, output whichever value is nearest to the value 10,
  or output 0 in the event of a tie.`,
  },
  {
    title: 'Warmup-1',
    name: 'StringE',
    inputs: [
      "('Hello')",
      "('Heelle')",
      "('Heelele')",
      "('HII')",
      "('e')",
      "('')",
    ],
    question: `Output <code>"TRUE</code>" if the given string contains between 1 and 3 <code>e</code> chars. 
    Hint: the length of a string can be found using the <code>STR.Length()</code> method, and you can access one char
    within a string using brackets, so if <code>ST = "ABC"</code> then <code>ST[1]</code> gives you a <code>B</code>`
  },
  {
    title: 'Warmup-1',
    name: 'LastDigit',
    inputs: [
      '(7, 17)',
      '(6, 17)',
      '(3, 113)',
      '(114, 113)',
      '(114, 4)',
      '(10, 0)',
      '(11, 0)',
    ],
    question: `Given two non - negative int values, Output <code>"TRUE"</code> if they have the same
last digit, such as with 27 and 57. Note that the <code>mod</code> operator computes
remainders, so <code>17 mod 10</code> is 7.`,
  }, {
    title: 'Warmup-1',
    name: 'EveryNth',
    inputs: [
      "('Miracle', 2)",
      "('abcdefg', 2)",
      "('abcdefg', 3)",
      "('Chocolate', 3)",
      "('Chocolates', 3)",
      "('Chocolates', 4)",
      "('Chocolates', 100)",
    ],
    question: `Given a non - empty string and an int N, output the string made starting
with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
                   ...and so on. N will always be 1 or more.`,
  },
  {
    title: 'Warmup-2',
    name: 'StringTimes',
    inputs: [
      "('Hi', 2)",
      "('Hi', 3)",
      "('Hi', 1)",
      "('Hi', 0)",
      "('Hi', 5)",
      "('Oh Boy!', 2)",
      "('x', 4)",
      "('', 4)",
      "('code', 2)",
      "('code', 3)",
    ],
    question: `Given a string and a non-negative integer N, output a larger string that is N
copies of the original string.`,
  }, {
    title: 'Warmup-2',
    name: 'FrontTimes',
    inputs: [
      "('Chocolate', 2)",
      "('Chocolate', 3)",
      "('Abc', 3)",
      "('Ab', 4)",
      "('A', 4)",
      "('',4)",
      "('Abc', 0)",
    ],
    question: `Given a string and a non - negative int n, we'll say that the front of the string is the first 3 chars,
or whatever is there if the string is less than length 3. Return n copies of the front.`,
  }, {
    title: 'Warmup-2',
    name: 'StringBits',
    inputs: [
      "('Hello')",
      "('Hi')",
      "('Heeololeo')",
      "('HiHiHi')",
      "('')",
      "('Greetings')",
      "('Chocolate')",
      "('pi')",
      "('Hello Kitten')",
      "('hxaxpxpxy')",
    ],
    question: `Given a string, output a new string made of every other char starting
with the first, so "Hello" yields "Hlo".`,
  }, {
    title: 'Warmup-2',
    name: 'StringSplosion',
    question: 'Given a non-empty string like "Code" output a string like "CCoCodCode".',
    inputs: [], // TODO: write inputs here
  }, {
    title: 'Warmup-2',
    name: 'Last2',
    inputs: [
      "('hixxhi')",
      "('xaxxaxaxx')",
      "('axxaaxx')",
      "('xxaxxaxxaxx')",
      "('xaxaxaa')",
      "('xxxx')",
      "('13121312')",
      "('11212')",
      "('13121311')",
      "('hi')",
      "('h')",
      "('')",
    ],
    question: `Given a string, output the count of the number of times that a substring
length 2 appears in the string and also as the last 2 chars of the string, so
"hixxxhi" yields 1(we won't count the end substring).`,
  }, {
    title: 'Warmup-2',
    name: 'ArrayCount9',
    inputs: [
      '([1,2,9])',
      '([1,9,9])',
      '([1,9,9,3,9])',
      '([1,2,3])',
      '([])',
      '([4,2,4,3,1])',
      '([9,2,4,3,1])',
    ],
    question: 'Given an array of ints, output the number of 9\'s in the array.',
  }, {
    title: 'Warmup-2',
    name: 'ArrayFront9',
    inputs: [
      '([1,2,9,3,4])',
      '([1,2,3,4,9])',
      '([1,2,3,4,5])',
      '([9,2,3])',
      '([1,9,9])',
      '([1,2,3])',
      '([1,9])',
      '([5,5])',
      '([2])',
      '([9])',
      '([])',
      '([3,9,2,3,3])',
    ],
    question: `Given an array of ints, Output <code>"TRUE"</code> if one of the first 4 elements in
          the array is a 9. The array length may be less than 4.`,
  }, {
    title: 'Warmup-2',
    name: 'Array123',
    question: `Given an array of ints, Output <code>"TRUE"</code> if the sequence of numbers 1, 2, 3
        appears in the array somewhere.`,
    inputs: [], // TODO
  }, {
    title: 'Warmup-2',
    name: 'StringMatch',
    inputs: [
      "('xxcaazz', 'xxbaaz')",
      "('abc', 'abc')",
      "('abc', 'axc')",
      "('hello', 'he')",
      "('he', 'hello')",
      "('', 'hello')",
      "('aabbccdd', 'abbbxxd')",
      "('aaxxaaxx', 'iaxxai')",
      "('iaxxai', 'aaxxaaxx')",
    ],
    question: `Given 2 strings, a and b, output the number of the positions where they contain the same length 2 substring.
          So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.`,
  }, {
    title: 'Warmup-2',
    name: 'StringX',
    inputs: [
      "('xxHxix')",
      "('abxxxcd')",
      "('xabxxxcdx')",
      "('xKittenx')",
      "('Hello')",
      "('xx')",
      "('x')",
      "('')",
    ],
    question: `Given a string, output a version where all the "x" have been removed.
            Except an "x" at the very start or end should not be removed.`,
  }, {
    title: 'Warmup-2',
    name: 'AltPairs',
    inputs: [
      "('kitten')",
      "('Chocolate')",
      "('CodingHorror')",
      "('yak')",
      "('ya')",
      "('y')",
      "('')",
      "('ThisThatTheOther')",
    ],
    question: `Given a string, output a string made of the chars at indexes 0,1, 4,5, 8,9 ...
            so "kittens" yields "kien".`,
  }, {
    title: 'Warmup-2',
    name: 'StringYak',
    inputs: [
      "('yakpak')",
      "('pakyak')",
      "('yak123ya')",
      "('yak')",
      "('yakxxxyak')",
      "('xxcaazz', 'hiyakHi')",
      "('xxxyakyyyakzzz')",
    ],
    question: `Suppose the string "yak" is unlucky. Given a string, output a version
            where all the "yak" are removed, but the "a" can be any char. The "yak" strings
            will not overlap.`,
  }, {
    title: 'Warmup-2',
    name: 'Array667',
    inputs: [
      '([6,6,2])',
      '([6,6,2,6])',
      '([6,7,2,6])',
      '([6,6,2,7,6,7])',
      '([1,6,3])',
      '([6,1])',
      '([])',
      '([3,6,7,6])',
      '([3,6,6,7])',
      '([6,3,6,6])',
      '([6,7,6,6])',
      '([1,2,3,5,6])',
      '([1,2,3,6,6])',
    ],
    question: `Given an array of ints, output the number of times that two 6's
              are next to each other in the array. Also count instances where the second
              "6" is actually a 7.`,
  }, {
    title: 'Warmup-2',
    name: 'NoTriples',
    inputs: [
      '([1,1,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,2,1])',
      '([1,1,1])',
      '([1,1])',
      '([1])',
      '([1])',
      '([])',
    ],
    question: `Given an array of ints, we'll say that a triple is a value appearing 3 times
                in a row in the array. Output <code>"TRUE"</code> if the array does not contain any triples.`,
  }, {
    title: 'Warmup-2',
    name: 'Has271',
    inputs: [
      '([1,2,7,1])',
      '([1,2,8,1])',
      '([2,7,1])',
      '([3,8,2])',
      '([2,7,3])',
      '([2,7,4])',
      '([2,7,-1])',
      '([2,7,-2])',
      '([4,5,3,8,0])',
      '([2,7,5,10,4])',
      '([2,7,-2,4,9,3])',
      '([2,7,5,10,1])',
      '([2,7,-2,10,2])',
    ],
    question: `Given an array of ints, Output <code>"TRUE"</code> if it contains a 2, 7, 1
                pattern -- a value, followed by the value plus 5, followed by the value
                minus 1. Additionally the 271 counts even if the "1" differs by 2 or less
                from the correct value.`,
  }
];
},{}],19:[function(require,module,exports){
/**---Solutions--- **/
// Warmup-1

const { theEnd } = require("./stringSolutions");

let solutions = {};

solutions.SleepIn = `method sleepIn(WEEKDAY, VACATION)
  if NOT WEEKDAY OR VACATION then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.MonkeyTrouble = `method MonkeyTrouble(ASMILE, BSMILE)
  if (ASMILE AND BSMILE) OR (NOT ASMILE AND NOT BSMILE) then
  // alternative: if ASMILE = BSMILE then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.SumDouble = `method SumDouble(A, B)
  if A = B then
    output 2* (A + B)
  else
    output A + B
  end if
end method`;

solutions.Diff21 = `method Diff21(N)
  if N <= 21 then
    output 21 - N
  else
    output (N - 21) * 2
  end if
end method`;

solutions.ParrotTrouble = `method ParrotTrouble(TALKING, HOUR)
  if TALKING AND (HOUR < 7 OR HOUR > 20) then
    output "TRUE"
  else 
    output "FALSE"
  end if
end method`;

solutions.Makes10 = `method Makes10(A, B)
  if A = 10 OR B = 10 OR (A + B = 10) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.NearHundred = `method nearHundred(N) 
  if (100 - N) >= -10 AND (100 - N) <= 10 then
    output "TRUE"
  else if (200 - N) >= -10 AND (200 - N) <= 10 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.NotString = `method NotString(STR)
  if STR.SubStr(0,3) = "not" then
    output STR
  else 
    output "not"+ STR
  end if
end method`;

solutions.Front3 = `method Front3(STR) 
  FRONT = STR.SubStr(0,3)
  output FRONT + FRONT + FRONT
end method`;

solutions.Or35 = `method Or35(n) 
  if n mod 3 = 0 OR n mod 5 = 0 then 
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.Front22 = `method Front22(STR) 
  take = 2;
  if take > str.length then
    take = str.length;
  }
  front = str.substring(0, take);
  return front + str + front;
end method`;

solutions.PosNeg = `method PosNeg(A, B, NEGATIVE) 
  if NEGATIVE then
    if A < 0 AND B < 0 then
      output "TRUE"
    else
      output "FALSE
    end if
  end if
  if (A < 0 AND B > 0) OR (A > 0 AND B < 0) then
    output "TRUE"
  else
    output "FALSE"
  }
end method`;

solutions.StartHi = `method StartHi(STR) 
  front = STR.SubStr(0,2);
  if front = 'hi' then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.IcyHot = `method IcyHot(temp1, temp2) 
  if temp1 < 0 AND temp2 > 100 OR temp2 < 0 AND temp1 > 100 then
    output "TRUE"
  end if
  output "FALSE"
end method`;

solutions.In1020 = `method In1020(A, B) 
  if (A >= 10 AND A <= 20) OR (B >= 10 AND B <= 20) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.HasTeen = `method HasTeen(A, B, C) 
  if (A >= 13 AND A <= 19) OR (B >= 13 AND B <= 19) OR (C >= 13 AND C <= 19) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.LoneTeen = `method LoneTeen(A, B) 
  if A >=13 AND A <=19 AND (B < 13 OR B > 19) then
    output "TRUE"
  else if (A < 13 OR A > 19) AND B >= 13 AND B <= 19 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.MixStart = `method MixStart(STR) 
  if STR.length < 3 then
    output "FALSE"
  end if
  TWO = STR.SubStr(1, 2);
  if TWO = 'ix' then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.IntMax = `method IntMax(A, B, C) 
  MAX = 0
  if A > B then
    MAX = A
  else
    MAX = B
  end if
  if C > MAX then
    MAX = C
  end if
  output MAX
end method`;

solutions.Close10 = `method Close10(A, B) 
  ADF = A - 10
  if ADF < 0 then
    ADF = 10 - A
  end if

  BDF = B - 10
  if BDF < 0 then
    BDF = 10 - B
  end if

  if ADF < BDF then
    output A
  else if BDF < ADF then
    output B
  else
    output 0
  end if
end method`;

solutions.StringE = `method StringE(STR) 
  COUNT = 0
  loop I from 0 to STR.Length()
    if STR[I] = 'e' then
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 1 AND COUNT <= 3 then
    output "TRUE"
  else
    output "FALSE" 
  end if
end method`;

solutions.LastDigit = `method LastDigit(A, B) 
  if A mod 10 = B mod 10 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.EveryNth = `method EveryNth(STR, N) 
  RESULT = ""
  COUNT = 0
  loop while COUNT < STR.Length()
    RESULT = RESULT + STR[COUNT]
    COUNT = COUNT + N
  }
  output RESULT
end method`;

solutions.StringTimes = `method StringTimes(STR, N) 
  FINAL = ""
  loop I from 1 to N 
    FINAL = FINAL + STR
  end loop
  output FINAL
end method`;

solutions.FrontTimes = `method FrontTimes(STR, N) 
  FRONT = STR.SubStr(0,3)
  RESULT = ""
  loop X from 1 to N 
    RESULT = RESULT + FRONT
  end loop
  output RESULT
end method`;

/***** Start un-edited ones */


solutions.Last2 = `method Last2(str) 
  count = 0;
  if str.length < 2 then
    return 0;
  end if
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if sub = end then
      count++;
    end if
  }
  return count;
end method`;

solutions.Array123 = `method Array123(nums) 
  return !!(nums.join('').match(/123/g));
end method`;

solutions.AltPairs = `method AltPairs(str) 
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if end > str.length then
      end = str.length;
    end if
    result = result + str.substring(x, end);
  }
  return result;
end method`;

solutions.NoTriples = `method NoTriples(nums) 
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if first = nums[x + 1] then
      if first = nums[x + 2] then
        output "FALSE"
      end if
    end if
  } output "TRUE"
end method`;

solutions.StringBits = `method StringBits(STR) 
  OUT = ""
  X = 0
  loop while X < STR.length
    OUT = OUT + STR.SubStr(X, 1)
    X = X + 2
  end loop
  output OUT
end method`;

solutions.ArrayCount9 = `method ArrayCount9(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 9 then
      count++;
    end if
  }
  return count;
end method`;

solutions.StringMatch = `method StringMatch(a, b) 
  len = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < len - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if aSub = bSub then
      count++;
    end if
  }
  return count;
end method`;

solutions.StringYak = `method StringYak(str) 
  result = '';
  for (x = 0; x < str.length; x++) {
    if x + 2 < str.length AND str.charAt(x) = 'y' AND str.charAt(x + 2) = 'k' then
      x = x + 2;
    else
      result = result + str.charAt(x);
    end if
  }
  return result;
end method`;

solutions.Has271 = `method Has271(nums) 
  return !!(nums.join('').match(/271/g));
end method`;

solutions.CountXX = `method CountXX(str) 
  count = 0;
  for (x = 0; x < str.length; x++) {
    if str.charAt(x) = 'x' then
      if str.charAt(x + 1) = 'x' then
        count++;
      end if
    end if
  }
  return count++;
end method`;

solutions.StringSplosion = `method StringSplosion(str) 
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
end method`;

solutions.ArrayFront9 = `method ArrayFront9(nums) 
  for (x = 0; x < 4; x++) {
    if nums[x] = 9 then
      output "TRUE"
    end if
  }
  output "FALSE"
end method`;

solutions.StringX = `method StringX(str) 
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if str.charAt(i) != 'x' then
      result += str.charAt(i);
    end if
  }
  return front + result + end;
end method`;

solutions.Array667 = `method Array667(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 6 then
      if nums[x + 1] = 6 OR nums[x + 1] = 7 then
        count++;
      end if
    end if
  } return count;
end method`;

module.exports = solutions;
},{"./stringSolutions":17}],20:[function(require,module,exports){
const _ = require("lodash");
const CodeMirror = require("codemirror-minified");
const runPS = require("./utility/convertPStoJS");
const exercises = require("./allExercisesIncludingHidden.js");
const solutions = require("./solutions.js");
const defaultInput = require("./utility/defaultInput.js");
const deParam = require("./utility/deParam.js");
const inputParser = require("./utility/inputParser.js");
const tableHeader = require("./utility/tableHeader.js");
const formatResults = require("./utility/formatResults.js");
const setInitialEditorContents = require("./utility/setInitialEditorContents.js");
const displayExampleRuns = require("./utility/displayExampleRuns.js");
const prettyPrintMap = require("./utility/prettyPrintMap.js");
const exerciseListeners = require("./listeners/exerciseListeners");
const keyboardShortcuts = require("./listeners/keyboardShortcuts");

require("../node_modules/codemirror-minified/addon/edit/matchbrackets.js");
const CodeMirrorPSHighlighting = require("./utility/cmps.js");
CodeMirrorPSHighlighting(CodeMirror);

// define codemirror editor to interact with code on page
const editor = CodeMirror.fromTextArea(document.getElementById("answer"), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "pseudocode",
  viewportMargin: Infinity,
  lineWrapping: true,
  extraKeys: {
    "Cmd-/": "toggleComment",
    "Ctrl-/": "toggleComment",
    Tab: cm => cm.execCommand("indentMore"),
    "Shift-Tab": cm => cm.execCommand("indentLess"),
  },
});
editor.getWrapperElement().style.height = "auto";
editor.setSize("100%", "auto");

const solutionArea = CodeMirror.fromTextArea(document.getElementById("solution"), {
  readOnly: true,
  noCursor: true,
  mode: "pseudocode",
  viewportMargin: Infinity,
  lineWrapping: true,
  lineNumbers: true,
  cursorBlinkRate: -1,
});
solutionArea.getWrapperElement().style.display = "none";
solutionArea.getWrapperElement().style.background = "#dadada";


// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(ex => ex.name === exerciseName)[0];

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
document.getElementById('title').innerText = exercise.title;
document.getElementById('name').innerText = exercise.name;
document.getElementById('problem').innerHTML = exercise.question;

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);


document.getElementById("defaults").addEventListener('click', () => {
  editor.setValue(`${defaultInput(exerciseName)}`);
});
document.getElementById("solve").addEventListener('click', () => {
  document.querySelectorAll('tr').forEach((e) => e.remove());
  document.getElementById("tests").append(tableHeader());
  const answer = editor.getValue();

  // whenever the user checks their solution,
  // save the most recent version of their code to localStorage
  const exerciseCode = `${exerciseName} - code`;
  localStorage.setItem(exerciseName, "attempted");
  localStorage.setItem(exerciseCode, answer);


  try {
    document.querySelectorAll(".congrats").forEach((e) => e.innerText = "");
    document.querySelectorAll(".errorMessage").forEach((e) => e.innerText = "");
    const inputs = exercise.inputs;

    const results = [];
    inputs.forEach((inputStr) => {
      const input = inputParser(exercise, inputStr);
      let result;
      let idealResult;

      // if the input is an array/object, make a copy to avoid user changing the passed version...
      const inputCopy = inputParser(exercise, inputStr);

      if (exercise.inputType === "map") {
        const formattedInput = prettyPrintMap(input, "parentheses");
        if (typeof (solutions[exerciseName]) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solutions[exerciseName], input);
        } else {
          idealOut = "";
          idealResult = solutions[exerciseName](...input);
        }
        [result, output] = runPS(answer, input);
        const formattedMapIdealResult = prettyPrintMap(idealResult);
        const formattedMapUserResult = prettyPrintMap(result);

        document.getElementById("tests").append(formatResults(exerciseName, formattedInput, formattedMapIdealResult, formattedMapUserResult, idealOut, output));
      } else {
        if (typeof (solutions[exerciseName]) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solutions[exerciseName], inputCopy);
        } else {
          idealOut = "";
          idealResult = solutions[exerciseName](...inputCopy);
        }
        [result, output] = runPS(answer, inputCopy);

        document.getElementById("tests").append(formatResults(exerciseName, inputStr, idealResult, result, idealOut, output));
      }

      if (idealOut === "") {
        results.push(_.isEqual(result, idealResult));
      } else {
        results.push(_.isEqual(output, idealOut));
      }
    });

    if (results.every(isTrue)) {
      document.querySelectorAll(".congrats").forEach((e) => e.innerText = "100% Passing. Well Done!");
      localStorage.setItem(exerciseName, "solved");
    }
  } catch (theError) {
    document.querySelectorAll(".congrats").forEach((e) => e.innerText = "");
    document.querySelectorAll('th').forEach((e) => e.remove());
    document.querySelectorAll(".errorMessage").forEach((e) => e.innerText = theError);
    console.log(theError.stack);
  }
});

document.getElementById("showSolution").addEventListener('click', () => {
  if (document.getElementById("showSolution").innerText === "Show Solution") {
    const s = solutions[exerciseName].toString();
    const r = new RegExp(/function/);
    // eslint-disable-next-line no-unused-vars
    const n = s.replace(r, `function ${exercise.name}`);
    editor.getWrapperElement().style.display = "none";

    solutionArea.setValue(s);
    solutionArea.getWrapperElement().style.display = "block";
    solutionArea.setSize("100%", "auto");
    document.getElementById("showSolution").innerText = "Hide Solution";
  } else {
    document.getElementById("showSolution").innerText = "Show Solution";
    editor.getWrapperElement().style.display = "block";
    solutionArea.getWrapperElement().style.display = "none";
  }
});

function isTrue(someValue) {
  return someValue === true;
}

},{"../node_modules/codemirror-minified/addon/edit/matchbrackets.js":1,"./allExercisesIncludingHidden.js":5,"./listeners/exerciseListeners":27,"./listeners/keyboardShortcuts":29,"./solutions.js":31,"./utility/cmps.js":32,"./utility/convertPStoJS":33,"./utility/deParam.js":34,"./utility/defaultInput.js":35,"./utility/displayExampleRuns.js":36,"./utility/formatResults.js":37,"./utility/inputParser.js":38,"./utility/prettyPrintMap.js":39,"./utility/setInitialEditorContents.js":40,"./utility/tableHeader.js":41,"codemirror-minified":2,"lodash":4}],21:[function(require,module,exports){

let warmupExercises = require("./data/warmup.js");
//let stringExercises = require("./data/string.js");
let recursionExercises = require("./data/recursion.js");
let logicExercises = require("./data/logic.js");
let arrayExcercises = require("./data/array.js");
let apExcercises = require("./data/ap.js");
//let mapExercises = require("./data/map.js");

let mainPageExercises = [...warmupExercises, ...arrayExcercises,
...logicExercises,
...recursionExercises, ...apExcercises];

module.exports = mainPageExercises;
},{"./data/ap.js":6,"./data/array.js":8,"./data/logic.js":10,"./data/recursion.js":15,"./data/warmup.js":18}],22:[function(require,module,exports){
let deParam = require("./utility/deParam.js");
let _ = require("lodash");
let exercises = require("./exercisesToShowOnIndex.js");
require("./listeners/indexSaveLoadAll.js");

let title = deParam(window.location.search).title;
let allTitles = _.uniq(exercises.map(e => e.title));
let titles = title ? [title] : allTitles;

// display all problems
for (title of titles) {
  let outerDiv = document.getElementById('exerciseIndex');
  outerDiv.innerHTML += `<h3 class="probTitle" id="${title}">${title}</h3>`;

  let div = document.createElement("div");
  div.classList.add("problems");
  document.getElementById("exerciseIndex").appendChild(div);

  let x = exercises.filter((ex) => ex.title == title);

  x.forEach((ex) => {
    let sp = document.createElement("sp");
    sp.classList.add("exercise-link");
    sp.id = `${ex.name}`;
    sp.innerHTML = `<a href='exercise.html?name=${ex.name}&title=${ex.title}'>${ex.name}</a>&nbsp;`;
    div.appendChild(sp);
    sp.insertAdjacentHTML("afterend", "<br>");
    if (localStorage[ex.name] === "solved") {
      sp.insertAdjacentHTML('beforeend', '<span class="tick"><b>✓</b></span>');
    } else if (localStorage[ex.name] === "attempted") {
      sp.insertAdjacentHTML('beforeend', '<span class="wrong"><b>✖</b></span>')
    }
  });
}


},{"./exercisesToShowOnIndex.js":21,"./listeners/indexSaveLoadAll.js":28,"./utility/deParam.js":34,"lodash":4}],23:[function(require,module,exports){

function loadAllSolutionsFromFile() {
  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function (e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      // localStorage.clear();
      let parsedFile = JSON.parse(reader.result);
      writeLocalStorage(parsedFile);
      location.reload();
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  $("#fileInput").click(); // activate the hidden file input
}

function writeLocalStorage(data) {
  Object.keys(data).forEach(function (key) { localStorage.setItem(key, data[key]) });
}

module.exports = loadAllSolutionsFromFile;
},{}],24:[function(require,module,exports){
module.exports = function loadCodeFile(editor) {
  // remove_fileInput_listener();
  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function (e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      editor.setValue(reader.result);
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  document.querySelector("#fileInput").click(); // activate the hidden file input
}
},{}],25:[function(require,module,exports){
let FileSaver = require('file-saver');

function saveAllSolutionsToFile() {
  let allSolutions = getLocalStorage();
  let blob = new Blob([allSolutions], {
    type: "text/javascript;charset=utf-8"
  });
  FileSaver.saveAs(blob, "combinedSolutions.js", true);
}

function getLocalStorage() {
  return JSON.stringify(localStorage);
}

module.exports = saveAllSolutionsToFile;
},{"file-saver":3}],26:[function(require,module,exports){
let FileSaver = require('file-saver');

module.exports = function saveCodeFile(editor, exerciseName) {
  // event.preventDefault(); // is this needed?
  let blob = new Blob([editor.getValue()], {
    type: "text/javascript;charset=utf-8"
  });
  FileSaver.saveAs(blob, exerciseName + ".js", true);
}

},{"file-saver":3}],27:[function(require,module,exports){
let _ = require("lodash");
let exercises = require("../exercisesToShowOnIndex");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

module.exports = function (editor, exerciseName) {

    document.querySelector('#next').addEventListener('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) + 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#previous').addEventListener('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) - 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#save').addEventListener('click', () => {
        saveCodeFile(editor, exerciseName);
    })

    document.querySelector('#open').addEventListener('click', () => {
        loadCodeFile(editor);
    })

};
},{"../exercisesToShowOnIndex":21,"../io/loadCodeFile.js":24,"../io/saveCodeFile.js":26,"lodash":4}],28:[function(require,module,exports){

let saveAllSolutionsToFile = require("../io/saveAllSolutionsToFile.js");
let loadAllSolutionsFromFile = require("../io/loadAllSolutionsFromFile.js");


document.querySelector('#saveAll').addEventListener('click', () => {
    saveAllSolutionsToFile();
})

document.querySelector('#loadAll').addEventListener('click', () => {
    loadAllSolutionsFromFile();
})
},{"../io/loadAllSolutionsFromFile.js":23,"../io/saveAllSolutionsToFile.js":25}],29:[function(require,module,exports){
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

module.exports = function (editor, exerciseName) {
  //allow user to save/open code with keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      saveCodeFile(editor, exerciseName);
    }
    if (e.keyCode == 79 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      loadCodeFile(editor);
    }
    if (e.key == "Enter" && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      document.querySelector("#solve").click(); //run code on ctrl-enter
    }
    // if (e.keyCode == 74 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //   e.preventDefault();
    //   $("#jsref-link").click(); //help screen on ctrl-j
    // }
    // if (e.keyCode == 191 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //   e.preventDefault();
    //   editor.toggleComment();
    // }
  });
};
},{"../io/loadCodeFile.js":24,"../io/saveCodeFile.js":26}],30:[function(require,module,exports){
var pathSuffix = location.pathname.split('/').splice(-1)[0]
if (pathSuffix === "") {
  // main page
  require("./indexPage.js");
}

else if (pathSuffix === "exercise.html") {
  // individual problem/exercise page
  require("./exercisePage.js");
}

// this lets you not display anything until the entire page is ready (since we set html
//  to invisible in style.css)
// useful, since otherwise you see the transition from textarea to codemirror, etc...
document.addEventListener("DOMContentLoaded", () =>
  document.getElementsByTagName("html")[0].style.visibility = "visible");
},{"./exercisePage.js":20,"./indexPage.js":22}],31:[function(require,module,exports){
let warmupSolutions = require("./data/warmupSolutions.js");
let stringSolutions = require("./data/stringSolutions.js");
let recursionSolutions = require("./data/recursionSolutions.js");
let logicSolutions = require("./data/logicSolutions.js");
let arraySolutions = require("./data/arraySolutions.js");
let apSolutions = require("./data/apSolutions.js");
let mapSolutions = require("./data/mapSolutions.js");
let quizSolutions = require("./data/quizSolutions.js");

// this ES2018 spread syntax was causing browserify problems, so I replaced it below...
// let solutions = {...warmupSolutions, ...stringSolutions };

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object. 
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
let solutions = Object.assign({}, 
    warmupSolutions, 
    stringSolutions,
    recursionSolutions,
    logicSolutions,
    arraySolutions,
    apSolutions,
    mapSolutions,
    quizSolutions
    );

module.exports = solutions;
},{"./data/apSolutions.js":7,"./data/arraySolutions.js":9,"./data/logicSolutions.js":11,"./data/mapSolutions.js":12,"./data/quizSolutions.js":14,"./data/recursionSolutions.js":16,"./data/stringSolutions.js":17,"./data/warmupSolutions.js":19}],32:[function(require,module,exports){
module.exports = function CodeMirrorPSHighlighting(CodeMirror) {
  CodeMirror.defineMode("pseudocode", function () {
    var define = ["method", "class"];
    var keywords = ["override", "overload", "new", "loop", "from",
      "while", "if", "then", "else", "AND", "OR", "NOT", "end", "method", "mod", "div"];
    var operator = /^[+\-*&%=<>!?|~^]/;
    var bracket = /^[:;\(\)\[\]\{\}]/;
    var atom = ["TRUE", "FALSE", "output", "input"];
    var number = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
    var word = /^\w+(?:'\w+)?/;
    var uword = /^[A-Z_][A-Z_0-9]+/;

    define = new RegExp("((" + define.join(")|(") + "))\\b");
    keywords = new RegExp("((" + keywords.join(")|(") + "))\\b");
    atom = new RegExp("((" + atom.join(")|(") + "))\\b");

    function tokenBase(stream, state) {
      function internalTokenBase(stream, state) {
        var ch = stream.peek();

        if (stream.eol()) {
          state.define = false;
        }

        if (state.incomment) {
          if (!stream.skipTo("*/")) {
            stream.skipToEnd();
          } else {
            stream.eatWhile(/\*|\//);
            state.incomment = false;
          }
          return "doc-multiline";
        }
        else if (state.instring) {
          if (ch == state.instring) {
            state.instring = false;
          }
          stream.next();
          return "string";
        }
        else if (ch == "'" || ch == '"') {
          state.instring = ch;
          stream.next();
          return "string";
        }
        else if (stream.eat("/")) {
          if (stream.eat("*")) {
            state.incomment = true;
            if (!stream.skipTo("*/")) {
              stream.skipToEnd();
            } else {
              stream.eatWhile(/\*|\//);
              state.incomment = false;
            }
            return "doc-multiline";
          }
          else if (stream.eat("/")) {
            if (stream.match(/\s*\.\.\.+\s*$/)) {
              stream.skipToEnd();
              return "comment";
            }
            stream.skipToEnd();
            return "doc";
          }
        } else {
          if (stream.eat(" ")) {
            stream.eatSpace();
            return;
          }
          else {
            if (state.sol && stream.match(define)) {
              state.define = true;
              state.def_mode = 1;
              return "keyword";
            }
            if (stream.match(keywords)) {
              state.define = false;
              state.def_mode = null;
              return "keyword";
            }
            if (stream.match(atom)) {
              return "atom";
            }
            if (stream.match(operator)) {
              return "operator";
            }
            if (stream.match(bracket)) {
              state.define = false;
              state.def_mode = null;
              return "bracket";
            }
            if (stream.match(number)) {
              return "number";
            }
            if (stream.match(uword)) {
              return "variable";
            }
            if (stream.match(word)) {
              if (state.define) {
                var token = "def";
                return token;
              }
              return "variable";
            }
          }
        }

        stream.next();
      }

      if (stream.sol()) {
        state.sol = true;
      }
      var result = internalTokenBase(stream, state);
      if (result) {
        state.sol = false;
      }
      return result;
    }

    return {
      startState: function () {
        return {};
      },
      token: function (stream, state) {
        return tokenBase(stream, state);
      }
    };
  });

  CodeMirror.defineMIME("text/x-pseudocode", "pseudocode");
}
},{}],33:[function(require,module,exports){

// these three variables help the translation work
var out;
var TRUE = true;
var FALSE = false;

/**
 * takes pseudocode, converts to javascript, and runs it on the input
 * @param {function} f
 * @param {any} input
 * @return {any}
 */
module.exports = function runPS(code, i) {

  let lines = getLines(code);
  var c = "";
  for (const line of lines) {
    c += translate(line) + "\n";
  }
  let userCode;
  try {
    eval(`out="";TRUE=true;FALSE=false;userCode=${c}`);
  } catch (e) {
    console.log("Error, here is the translated function")
    console.log(c);
    throw (e);
  }
  var ret = userCode(...i);
  return [ret, out];
}

//The next batch of functions are used BY the pseudocode. Don't delete them!

function input(str) {
  var answer = prompt(str)
  if (answer != null && answer.length > 0 && !isNaN(answer)) {
    return parseFloat(answer)
  }
  else {
    return answer
  }
}

function output() {
  var a = 0
  var stuff = " "
  for (a = 0; a < arguments.length; a++) {
    stuff = stuff + arguments[a] + " "
  }
  out += stuff + "\n";
}

function div(A, B) {
  return Math.floor(A / B)
}

function Collection() {
  var values = new Array();
  var next = 0;

  this.isEmpty = function () {
    if (values.length) {
      return (values.length < 1)
    }
    else { return true }
  }

  this.add = function (value) {
    var size = values.length
    values[size] = value;
  }

  this.addItem = function (value) {
    var size = values.length
    values[size] = value;
  }

  this.resetNext = function () {
    next = 0
  }

  this.getNext = function () {
    var result = null
    if (this.hasNext()) {
      result = values[next]
      next = next + 1
    }
    return result
  }

  this.hasNext = function () {
    if (next < values.length) {
      return true;
    }
    else {
      return false;
    }
  }

  this.showAll = function () {
    alert("There are " + values.length + " values in this collection")
    var saveNext = next;
    this.resetNext();
    while (this.hasNext()) {
      alert(this.getNext())
    }
    next = saveNext;
  }

  this.contains = function (val) {
    var x = 0
    while (x < values.length) {
      if (values[x] == val) {
        return true
      }
      x++;
    }
    return false
  }

  this.remove = function (val) {
    var found = -1
    var p = 0;
    while (p < values.length) {
      if (values[p] == val) {
        found = p
        break
      }
      p++
    }
    if (found >= 0) {
      values.splice(found, 1)
    }
  }

}

function Stack() {
  var values = new Array();
  var next = 0;

  this.isEmpty = function () {
    if (values.length) {
      return (values.length < 1)
    }
    else { return true }
  }

  this.push = function (val) {
    values.splice(0, 0, val)
  }

  this.pop = function () {
    var result = null
    if (values.length > 0) {
      result = values[0]
      values.splice(0, 1)
    }
    return result
  }

}

function Queue() {
  var values = new Array();
  var next = 0;

  this.isEmpty = function () {
    if (values.length) {
      return (values.length < 1)
    }
    else { return true }
  }

  this.enqueue = function (value) {
    var size = values.length
    values[size] = value;
  }

  this.dequeue = function () {
    var result = null
    if (values.length > 0) {
      result = values[0]
      values.splice(0, 1)
    }
    return result
  }
}

function Array2D(rows, cols) {
  a2d = new Array(rows)
  for (r = 0; r < rows; r++) {
    a2d[r] = new Array(cols)
  }
  return a2d
}

/** Translates a single line from PS (or JS) to JS */
function translate(line) {
  //do a sanity check - if this is javascript, leave it alone
  if (line.indexOf("{") !== -1) return line;
  line = line.replace(/ mod /g, " % ")
  line = line.replaceAll(/([0-9A-Za-z]+) div ([0-9A-Za-z]+)/g, "div($1, $2)");
  line = line.replaceAll(/(\([^()]+\)) div (\([^()]+\))/g, "div($1, $2)");
  line = line.replaceAll(/([0-9A-Za-z]+) div (\([^()]+\))/g, "div($1, $2)");
  line = line.replaceAll(/(\([^()]+\)) div ([0-9A-Za-z]+)/g, "div($1, $2)");
  line = line.replaceAll(/([^"])TRUE/g, "$1true");
  line = line.replaceAll(/([^"])FALSE/g, "$1false");
  line = line.replaceAll("SubStr", "substr");
  line = line.replaceAll("Length()", "length");
  var lin = line.trim();
  var sp = lin.indexOf(" ");
  var first = "";
  if (startswith(lin, "if")) { first = "if" }
  else if (startswith(lin, "else if")) { first = "else if" }
  else if (startswith(lin, "else")) { first = "else" }
  else if (startswith(lin, "loop while")) { first = "loop while" }
  else if (startswith(lin, "loop for")) { first = "loop for" }
  else if (startswith(lin, "loop until")) { first = "loop until" }
  else if (startswith(lin, "loop ")) { first = "loop" }
  else if (startswith(lin, "output")) { first = "output" }
  else if (startswith(lin, "method ")) { first = "method" }
  else if (startswith(lin, "Class ")) { first = "class" }
  else if (startswith(lin, "input")) { first = "input" }
  else {
    if (sp >= 0) { first = lin.substring(0, sp); }
  }
  if ((first == "if" || first == "else if")) {

    line = line.replace("if ", "if(");
    if (first == "else if") { line = line.replace("else if", "}else if") }
    line = line.replace(" then", "){");
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "else") { line = line.replace("else", "}else{") }
  if (first == "loop while") {
    line = line.replace("loop while", "while(") + "){";
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "loop for") {
    var v = line.indexOf("loop for") + 9;
    var ve = line.indexOf(" ", v);
    var vname = line.substring(v, ve);

    var vs = line.indexOf(" from ") + 6;
    var vt = line.indexOf(" to ");
    var vstart = line.substring(vs, vt);

    var vend = line.substring(vt + 4);

    line = "for(" + vname + "=" + vstart + ";" + vname + "<=" + vend + ";" + vname + "++){"

  }
  if (first == "loop until") {
    line = line.replace("loop until", "while(!(") + ")){";
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "loop") {
    var v = line.indexOf("loop") + 5;
    var ve = line.indexOf(" ", v);
    var vname = line.substring(v, ve);

    var vs = line.indexOf(" from ") + 6;
    var vt = line.indexOf(" to ");
    var vstart = line.substring(vs, vt);

    var vend = line.substring(vt + 4);

    line = "for(" + vname + "=" + vstart + ";" + vname + "<=" + vend + ";" + vname + "++){"

  }
  if (first == "end") { line = "}"; }
  if (first == "output") {
    var t = line.indexOf("output") + 6
    line = "output(" + line.substring(t) + ")"
  }
  if (first == "input") {
    var v = line.indexOf("input") + 6
    var name = line.substring(v)
    line = name + " = input(\"" + name + "\")"
  }
  if (first == "method") {
    line = line.replace(/method/, "function") + "{"
  }

  if (first == "class") {
    line = line.replace(/Class/, "function") + "{"
  }

  return line
}

function startswith(whole, part) {
  var n = part.length
  if (whole.substring(0, n) == part) {
    return true
  }
  else { return false }
}

function trim(s) {
  var b = 0
  var e = s.length
  while (e > 0 && s.charAt(e - 1) <= ' ') { e-- }
  while (b < e && s.charAt(b) <= ' ') { b++ }
  return s.substring(b, e)
}

function getLines(code) {
  var lines = code.split("\n")
  for (c = 0; c < lines.length; c++) { lines[c] = trim(lines[c]) }

  return lines
}

function replacePairs(s, a, b, ar, br) {
  var p = s.indexOf(a)
  while (p >= 0) {
    s = s.substring(0, p) + ar + s.substring(p + a.length)
    p = s.indexOf(b)
    if (p < 0) { s = s + br }
    else { s = s.substring(0, p) + br + s.substring(p + b.length) }
    p = s.indexOf(a)
  }
  return s
}
},{}],34:[function(require,module,exports){
/** takes url parameter and transforms into object **/
function deParam(urlStr) {
  const subbie = urlStr.substring(1);
  const x = subbie.split('&').map(s => s.split('='));
  return x.reduce((accum, arr) => { accum[arr[0]] = arr[1]; return accum; }, {});
}

module.exports = deParam;
},{}],35:[function(require,module,exports){
/** creates default input to start function **/
solutions = require("../solutions.js");

module.exports = function defaultInput(exerciseName) {
  if (typeof (solutions[exerciseName]) === "string") {
    // we have a string solution, likely pseudocode
    var lines = solutions[exerciseName].split("\n");
    return (lines[0].trim() + "\n \n \n \n" + lines[lines.length - 1].trim());
  }
  let solutionFullText = solutions[exerciseName].toString();
  let openingBracket = solutionFullText.indexOf("{")
  return solutionFullText.substring(0, openingBracket) + "{\n \n \n}";
}
},{"../solutions.js":31}],36:[function(require,module,exports){

let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let runPS = require("./convertPStoJS.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function (exercise, exerciseName) {
    // example/sample runs
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;
            if (exercise.inputType === "map") {
                // display syntax message
                if (i === 0) {
                    document.querySelectorAll(".examples")
                        .forEach((e) => {
                            e.insertAdjacentHTML('beforeEnd', `<p><em>Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.</em></p>`);
                        });
                }

                let inputCopy = inputParser(exercise, exercise.inputs[i]);
                let formattedInput = prettyPrintMap(inputCopy, "parentheses");
                if (typeof (solutions[exerciseName]) === "string") {
                    [result, out] = runPS(solutions[exerciseName], inputCopy);
                    if (!result) result = out;
                } else {
                    result = solutions[exerciseName](inputCopy);
                }
                let formattedResult = prettyPrintMap(result);
                document.querySelector('.examples').forEach(
                    (e) => {
                        e.insertAdjacentHTML('beforeend', `<li>${exerciseName}${formattedInput} → ${formattedResult}</li>`);
                    }
                );
            }
            else {
                if (typeof (solutions[exerciseName]) === "string") {
                    [result, out] = runPS(solutions[exerciseName], input);
                    if (!result) result = out;
                } else {
                    result = solutions[exerciseName](...input);
                }
                document.querySelector('.examples').forEach(
                    (e) => {
                        e.insertAdjacentHTML('beforeend', `<li>${exerciseName}${exercise.inputs[i]} → ${result}</li>`);
                    }
                );
            }
        } catch (e) {
            console.log(e);
            break;
        }
    }
}
},{"../solutions.js":31,"./convertPStoJS.js":33,"./inputParser.js":38,"./prettyPrintMap.js":39}],37:[function(require,module,exports){
let _ = require("lodash");

/** Return row for html table **/
function formatResults(funcName, inputStr, idealResult, result, idealOutput, output) {
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = _.isEqual(idealResult, result);
    // Format the string to have no parents if a single input, and use capitalized true/false
    if (inputStr.indexOf(",") === -1) {
        inputStr = inputStr.slice(1, -1);
    }
    inputStr = inputStr.replaceAll("true", "TRUE");
    inputStr = inputStr.replaceAll("false", "FALSE");
    var row = document.createElement("tr");
    row.innerHTML = `<td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${result}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>`;
    return row;
}

module.exports = formatResults;
},{"lodash":4}],38:[function(require,module,exports){
/**
 * it converts nodingbat input (as stored) to js
 *     e.g. inputParser('(1,2)')=>[1,2]
 **/
module.exports = function inputParser(exercise, inputStr) {
  var argsWithoutParentheses = inputStr.slice(1, -1);
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("TRUE", "true");
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("FALSE", "false");
  let functionInput;

  if (exercise.inputType === "map") {
    if (argsWithoutParentheses === "[[]]") {
      return new Map();
    }
    else {
      let tempArrayOfArgs = JSON.parse(argsWithoutParentheses);
      functionInput = new Map();
      for (let item of tempArrayOfArgs) {
        functionInput.set(item[0], item[1]);
      }
    }
  }
  else {
    try {
      let arrayOfArgs = '[' + argsWithoutParentheses + ']';
      eval("functionInput = " + arrayOfArgs);
    } catch (e) {
      functionInput = e.toString();
    }
  }
  return functionInput;
}
},{}],39:[function(require,module,exports){
// function to show the Map data type in a user-friendly way
//  - without doing something like this, it just shows up as Object()

let _ = require("lodash");

function prettyPrintMap(theMap, style="no_parentheses") {
  let formattedMapResult = "";
  if (style == "parentheses") {
    formattedMapResult = "(";
  }
  formattedMapResult = formattedMapResult + "{";
  
  //check if it is an empty map
  let emtpyMap = new Map();
  let isEmpty = _.isEqual(theMap, emtpyMap);
  if (!isEmpty) {
    for (let item of theMap) {
      formattedMapResult += `'${item[0]}': '${item[1]}', `;
    }
  
    formattedMapResult = formattedMapResult.slice(0, -2);    
  }
  
  formattedMapResult = formattedMapResult + "}";

  if (style == "parentheses") {
    formattedMapResult = formattedMapResult +  ")";
  }
  return formattedMapResult;
}

module.exports = prettyPrintMap;

},{"lodash":4}],40:[function(require,module,exports){
let defaultInput = require("./defaultInput.js");

module.exports = function (editor, exerciseName, exercise) {
    let exerciseCode = exerciseName + " - code";
    if (localStorage.getItem(exerciseCode)) {
        //load previous solution from localStorage, if possible
        editor.setValue(localStorage.getItem(exerciseCode));
    } else {
        // no previous solution, just display the default...
        editor.setValue(defaultInput(exercise.name));
        editor.focus();
        editor.setCursor({
            line: 1,
            ch: 2
        });
    }
};
},{"./defaultInput.js":35}],41:[function(require,module,exports){
function tableHeader() {
    var row = document.createElement("tr");
    row.innerHTML = `<th>Inputs</th>
                <th>Expected result</th>
                <th>Your result</th>
                <th colspan="2">Correct?</th>`;
    return row;
}

module.exports = tableHeader;
},{}]},{},[30]);
