(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function v(a,c,b){var f=a.getLineHandle(c.line),d=c.ch-1,g=b&&b.afterCursor;null==g&&(g=/(^| )cm-fat-cursor($| )/.test(a.getWrapperElement().className));var h=b&&b.bracketRegex||/[(){}[\]]/;f=!g&&0<=d&&h.test(f.text.charAt(d))&&t[f.text.charAt(d)]||h.test(f.text.charAt(d+1))&&t[f.text.charAt(++d)];if(!f)return null;
g=">"==f.charAt(1)?1:-1;if(b&&b.strict&&0<g!=(d==c.ch))return null;h=a.getTokenTypeAt(p(c.line,d+1));a=w(a,p(c.line,d+(0<g?1:0)),g,h,b);return null==a?null:{from:p(c.line,d),to:a&&a.pos,match:a&&a.ch==f.charAt(0),forward:0<g}}function w(a,c,b,f,d){var g=d&&d.maxScanLineLength||1E4,h=d&&d.maxScanLines||1E3,m=[];d=d&&d.bracketRegex||/[(){}[\]]/;h=0<b?Math.min(c.line+h,a.lastLine()+1):Math.max(a.firstLine()-1,c.line-h);for(var e=c.line;e!=h;e+=b){var n=a.getLine(e);if(n){var l=0<b?0:n.length-1,z=0<b?
n.length:-1;if(!(n.length>g))for(e==c.line&&(l=c.ch-(0>b?1:0));l!=z;l+=b){var q=n.charAt(l);if(d.test(q)&&(void 0===f||(a.getTokenTypeAt(p(e,l+1))||"")==(f||""))){var x=t[q];if(x&&">"==x.charAt(1)==0<b)m.push(q);else if(m.length)m.pop();else return{pos:p(e,l),ch:q}}}}}return e-b==(0<b?a.lastLine():a.firstLine())?!1:null}function y(a,c,b){for(var f=a.state.matchBrackets.maxHighlightLineLength||1E3,d=b&&b.highlightNonMatching,g=[],h=a.listSelections(),m=0;m<h.length;m++){var e=h[m].empty()&&v(a,h[m].head,
b);if(e&&(e.match||!1!==d)&&a.getLine(e.from.line).length<=f){var n=e.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";g.push(a.markText(e.from,p(e.from.line,e.from.ch+1),{className:n}));e.to&&a.getLine(e.to.line).length<=f&&g.push(a.markText(e.to,p(e.to.line,e.to.ch+1),{className:n}))}}if(g.length)if(A&&a.state.focused&&a.focus(),b=function(){a.operation(function(){for(var l=0;l<g.length;l++)g[l].clear()})},c)setTimeout(b,800);else return b}function r(a){a.operation(function(){a.state.matchBrackets.currentlyHighlighted&&
(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null);a.state.matchBrackets.currentlyHighlighted=y(a,!1,a.state.matchBrackets)})}function u(a){a.state.matchBrackets&&a.state.matchBrackets.currentlyHighlighted&&(a.state.matchBrackets.currentlyHighlighted(),a.state.matchBrackets.currentlyHighlighted=null)}var A=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),p=k.Pos,t={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<",
"<":">>",">":"<<"};k.defineOption("matchBrackets",!1,function(a,c,b){b&&b!=k.Init&&(a.off("cursorActivity",r),a.off("focus",r),a.off("blur",u),u(a));c&&(a.state.matchBrackets="object"==typeof c?c:{},a.on("cursorActivity",r),a.on("focus",r),a.on("blur",u))});k.defineExtension("matchBrackets",function(){y(this,!0)});k.defineExtension("findMatchingBracket",function(a,c,b){if(b||"boolean"==typeof c)b?(b.strict=c,c=b):c=c?{strict:!0}:null;return v(this,a,c)});k.defineExtension("scanForBracket",function(a,
c,b,f){return w(this,a,c,b,f)})});

},{"../../lib/codemirror":2}],2:[function(require,module,exports){
(function (global){(function (){
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(y,E,D){y instanceof String&&(y=String(y));for(var v=y.length,M=0;M<v;M++){var ja=y[M];if(E.call(D,ja,M,y))return{i:M,v:ja}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(y,E,D){if(y==Array.prototype||y==Object.prototype)return y;y[E]=D.value;return y};$jscomp.getGlobal=function(y){y=["object"==typeof globalThis&&globalThis,y,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var E=0;E<y.length;++E){var D=y[E];if(D&&D.Math==Math)return D}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(y,E){var D=$jscomp.propertyToPolyfillSymbol[E];if(null==D)return y[E];D=y[D];return void 0!==D?D:y[E]};
$jscomp.polyfill=function(y,E,D,v){E&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(y,E,D,v):$jscomp.polyfillUnisolated(y,E,D,v))};$jscomp.polyfillUnisolated=function(y,E,D,v){D=$jscomp.global;y=y.split(".");for(v=0;v<y.length-1;v++){var M=y[v];if(!(M in D))return;D=D[M]}y=y[y.length-1];v=D[y];E=E(v);E!=v&&null!=E&&$jscomp.defineProperty(D,y,{configurable:!0,writable:!0,value:E})};
$jscomp.polyfillIsolated=function(y,E,D,v){var M=y.split(".");y=1===M.length;v=M[0];v=!y&&v in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var ja=0;ja<M.length-1;ja++){var ka=M[ja];if(!(ka in v))return;v=v[ka]}M=M[M.length-1];D=$jscomp.IS_SYMBOL_NATIVE&&"es6"===D?v[M]:null;E=E(D);null!=E&&(y?$jscomp.defineProperty($jscomp.polyfills,M,{configurable:!0,writable:!0,value:E}):E!==D&&(void 0===$jscomp.propertyToPolyfillSymbol[M]&&(D=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[M]=
$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(M):$jscomp.POLYFILL_PREFIX+D+"$"+M),$jscomp.defineProperty(v,$jscomp.propertyToPolyfillSymbol[M],{configurable:!0,writable:!0,value:E})))};$jscomp.polyfill("Array.prototype.find",function(y){return y?y:function(E,D){return $jscomp.findInternal(this,E,D).v}},"es6","es3");
(function(y,E){"object"===typeof exports&&"undefined"!==typeof module?module.exports=E():"function"===typeof define&&define.amd?define(E):(y=y||self,y.CodeMirror=E())})(this,function(){function y(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function E(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function D(a,b){return E(a).appendChild(b)}function v(a,b,d,c){a=document.createElement(a);d&&(a.className=d);c&&(a.style.cssText=c);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(d=0;d<b.length;++d)a.appendChild(b[d]);return a}function M(a,b,d,c){a=v(a,b,d,c);a.setAttribute("role","presentation");return a}function ja(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function ka(a){try{var b=a.activeElement}catch(d){b=a.body||null}for(;b&&b.shadowRoot&&b.shadowRoot.activeElement;)b=b.shadowRoot.activeElement;return b}function Ya(a,b){var d=a.className;y(b).test(d)||(a.className+=
(d?" ":"")+b)}function fd(a,b){a=a.split(" ");for(var d=0;d<a.length;d++)a[d]&&!y(a[d]).test(b)&&(b+=" "+a[d]);return b}function qa(a){return a.display.wrapper.ownerDocument}function gd(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Za(a,b,d){b||(b={});for(var c in a)!a.hasOwnProperty(c)||!1===d&&b.hasOwnProperty(c)||(b[c]=a[c]);return b}function wa(a,b,d,c,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));c=c||0;for(e=e||0;;){var f=a.indexOf("\t",
c);if(0>f||f>=b)return e+(b-c);e+=f-c;e+=d-e%d;c=f+1}}function ea(a,b){for(var d=0;d<a.length;++d)if(a[d]==b)return d;return-1}function hd(a,b,d){for(var c=0,e=0;;){var f=a.indexOf("\t",c);-1==f&&(f=a.length);var g=f-c;if(f==a.length||e+g>=b)return c+Math.min(g,b-e);e+=f-c;e+=d-e%d;c=f+1;if(e>=b)return c}}function id(a){for(;vc.length<=a;)vc.push(J(vc)+" ");return vc[a]}function J(a){return a[a.length-1]}function wc(a,b){for(var d=[],c=0;c<a.length;c++)d[c]=b(a[c],c);return d}function yg(a,b,d){for(var c=
0,e=d(b);c<a.length&&d(a[c])<=e;)c++;a.splice(c,0,b)}function pe(){}function qe(a,b){Object.create?a=Object.create(a):(pe.prototype=a,a=new pe);b&&Za(b,a);return a}function jd(a){return/\w/.test(a)||"\u0080"<a&&(a.toUpperCase()!=a.toLowerCase()||zg.test(a))}function xc(a,b){return b?-1<b.source.indexOf("\\w")&&jd(a)?!0:b.test(a):jd(a)}function re(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function kd(a){return 768<=a.charCodeAt(0)&&Ag.test(a)}function se(a,b,d){for(;(0>d?0<b:
b<a.length)&&kd(a.charAt(b));)b+=d;return b}function Jb(a,b,d){for(var c=b>d?-1:1;;){if(b==d)return b;var e=(b+d)/2;e=0>c?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:d;a(e)?d=e:b=e+c}}function Bg(a,b,d,c){if(!a)return c(b,d,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<d&&g.to>b||b==d&&g.to==b)c(Math.max(g.from,b),Math.min(g.to,d),1==g.level?"rtl":"ltr",f),e=!0}e||c(b,d,"ltr")}function Kb(a,b,d){var c;Lb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;
f.to==b&&(f.from!=f.to&&"before"==d?c=e:Lb=e);f.from==b&&(f.from!=f.to&&"before"!=d?c=e:Lb=e)}return null!=c?c:Lb}function Ja(a,b){var d=a.order;null==d&&(d=a.order=Cg(a.text,b));return d}function ta(a,b,d){if(a.removeEventListener)a.removeEventListener(b,d,!1);else if(a.detachEvent)a.detachEvent("on"+b,d);else{var c=(a=a._handlers)&&a[b];c&&(d=ea(c,d),-1<d&&(a[b]=c.slice(0,d).concat(c.slice(d+1))))}}function W(a,b){var d=a._handlers&&a._handlers[b]||yc;if(d.length)for(var c=Array.prototype.slice.call(arguments,
2),e=0;e<d.length;++e)d[e].apply(null,c)}function Z(a,b,d){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}});W(a,d||b.type,a,b);return ld(b)||b.codemirrorIgnore}function te(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var d=0;d<b.length;++d)-1==ea(a,b[d])&&a.push(b[d])}}function xa(a,b){return 0<(a._handlers&&a._handlers[b]||yc).length}function pb(a){a.prototype.on=function(b,d){z(this,
b,d)};a.prototype.off=function(b,d){ta(this,b,d)}}function la(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function ue(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function ld(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Mb(a){la(a);ue(a)}function ve(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ya&&a.ctrlKey&&1==b&&(b=3);return b}function Dg(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,
2));md[a]=b}function zc(a){if("string"==typeof a&&qb.hasOwnProperty(a))a=qb[a];else if(a&&"string"==typeof a.name&&qb.hasOwnProperty(a.name)){var b=qb[a.name];"string"==typeof b&&(b={name:b});a=qe(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return zc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return zc("application/json")}return"string"==typeof a?{name:a}:a||{name:"null"}}function nd(a,b){b=zc(b);var d=md[b.name];if(!d)return nd(a,
"text/plain");a=d(a,b);if(rb.hasOwnProperty(b.name)){d=rb[b.name];for(var c in d)d.hasOwnProperty(c)&&(a.hasOwnProperty(c)&&(a["_"+c]=a[c]),a[c]=d[c])}a.name=b.name;b.helperType&&(a.helperType=b.helperType);if(b.modeProps)for(var e in b.modeProps)a[e]=b.modeProps[e];return a}function Eg(a,b){a=rb.hasOwnProperty(a)?rb[a]:rb[a]={};Za(b,a)}function $a(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);a={};for(var d in b){var c=b[d];c instanceof Array&&(c=c.concat([]));a[d]=c}return a}function od(a,
b){for(var d;a.innerMode;){d=a.innerMode(b);if(!d||d.mode==a)break;b=d.state;a=d.mode}return d||{mode:a,state:b}}function we(a,b,d){return a.startState?a.startState(b,d):!0}function w(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(;!a.lines;)for(var d=0;;++d){var c=a.children[d],e=c.chunkSize();if(b<e){a=c;break}b-=e}return a.lines[b]}function ab(a,b,d){var c=[],e=b.line;a.iter(b.line,d.line+1,function(f){f=f.text;e==d.line&&(f=f.slice(0,d.ch));
e==b.line&&(f=f.slice(b.ch));c.push(f);++e});return c}function pd(a,b,d){var c=[];a.iter(b,d,function(e){c.push(e.text)});return c}function Ea(a,b){if(b-=a.height)for(;a;a=a.parent)a.height+=b}function N(a){if(null==a.parent)return null;var b=a.parent;a=ea(b.lines,a);for(var d=b.parent;d;b=d,d=d.parent)for(var c=0;d.children[c]!=b;++c)a+=d.children[c].chunkSize();return a+b.first}function bb(a,b){var d=a.first;a:do{for(var c=0;c<a.children.length;++c){var e=a.children[c],f=e.height;if(b<f){a=e;continue a}b-=
f;d+=e.chunkSize()}return d}while(!a.lines);for(c=0;c<a.lines.length;++c){e=a.lines[c].height;if(b<e)break;b-=e}return d+c}function Nb(a,b){return b>=a.first&&b<a.first+a.size}function qd(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function t(a,b,d){void 0===d&&(d=null);if(!(this instanceof t))return new t(a,b,d);this.line=a;this.ch=b;this.sticky=d}function B(a,b){return a.line-b.line||a.ch-b.ch}function rd(a,b){return a.sticky==b.sticky&&0==B(a,b)}function sd(a){return t(a.line,
a.ch)}function Ac(a,b){return 0>B(a,b)?b:a}function Bc(a,b){return 0>B(a,b)?a:b}function C(a,b){if(b.line<a.first)return t(a.first,0);var d=a.first+a.size-1;if(b.line>d)return t(d,w(a,d).text.length);a=w(a,b.line).text.length;d=b.ch;b=null==d||d>a?t(b.line,a):0>d?t(b.line,0):b;return b}function xe(a,b){for(var d=[],c=0;c<b.length;c++)d[c]=C(a,b[c]);return d}function ye(a,b,d,c){var e=[a.state.modeGen],f={};ze(a,b.text,a.doc.mode,d,function(k,l){return e.push(k,l)},f,c);var g=d.state;c=function(k){d.baseTokens=
e;var l=a.state.overlays[k],m=1,n=0;d.state=!0;ze(a,b.text,l.mode,d,function(p,q){for(var r=m;n<p;){var u=e[m];u>p&&e.splice(m,1,p,e[m+1],u);m+=2;n=Math.min(p,u)}if(q)if(l.opaque)e.splice(r,m-r,p,"overlay "+q),m=r+2;else for(;r<m;r+=2)p=e[r+1],e[r+1]=(p?p+" ":"")+"overlay "+q},f);d.state=g;d.baseTokens=null;d.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)c(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function Ae(a,b,d){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=Ob(a,
N(b)),e=b.text.length>a.options.maxHighlightLength&&$a(a.doc.mode,c.state),f=ye(a,b,c);e&&(c.state=e);b.stateAfter=c.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);d===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function Ob(a,b,d){var c=a.doc,e=a.display;if(!c.mode.startState)return new Fa(c,!0,b);var f=Fg(a,b,d),g=f>c.first&&w(c,f-1).stateAfter,h=g?Fa.fromSaved(c,g,f):new Fa(c,
we(c.mode),f);c.iter(f,b,function(k){td(a,k.text,h);var l=h.line;k.stateAfter=l==b-1||0==l%5||l>=e.viewFrom&&l<e.viewTo?h.save():null;h.nextLine()});d&&(c.modeFrontier=h.line);return h}function td(a,b,d,c){var e=a.doc.mode;a=new X(b,a.options.tabSize,d);a.start=a.pos=c||0;for(""==b&&Be(e,d.state);!a.eol();)ud(e,a,d.state),a.start=a.pos}function Be(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode&&(a=od(a,b),a.mode.blankLine))return a.mode.blankLine(a.state)}function ud(a,b,d,c){for(var e=
0;10>e;e++){c&&(c[0]=od(a,d).mode);var f=a.token(b,d);if(b.pos>b.start)return f}throw Error("Mode "+a.name+" failed to advance stream.");}function Ce(a,b,d,c){var e=a.doc,f=e.mode;b=C(e,b);var g=w(e,b.line);d=Ob(a,b.line,d);a=new X(g.text,a.options.tabSize,d);var h;for(c&&(h=[]);(c||a.pos<b.ch)&&!a.eol();){a.start=a.pos;var k=ud(f,a,d.state);c&&h.push(new De(a,k,$a(e.mode,d.state)))}return c?h:new De(a,k,d.state)}function Ee(a,b){if(a)for(;;){var d=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!d)break;
a=a.slice(0,d.index)+a.slice(d.index+d[0].length);var c=d[1]?"bgClass":"textClass";null==b[c]?b[c]=d[2]:(new RegExp("(?:^|\\s)"+d[2]+"(?:$|\\s)")).test(b[c])||(b[c]+=" "+d[2])}return a}function ze(a,b,d,c,e,f,g){var h=d.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new X(b,a.options.tabSize,c),n=a.options.addModeClass&&[null];for(""==b&&Ee(Be(d,c.state),f);!m.eol();){if(m.pos>a.options.maxHighlightLength){h=!1;g&&td(a,b,c,m.pos);m.pos=b.length;var p=null}else p=Ee(ud(d,m,c.state,
n),f);if(n){var q=n[0].name;q&&(p="m-"+(p?q+" "+p:q))}if(!h||l!=p){for(;k<m.start;)k=Math.min(m.start,k+5E3),e(k,l);l=p}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function Fg(a,b,d){for(var c,e,f=a.doc,g=d?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=w(f,b-1),k=h.stateAfter;if(k&&(!d||b+(k instanceof Cc?k.lookAhead:0)<=f.modeFrontier))return b;h=wa(h.text,null,a.options.tabSize);if(null==e||c>h)e=b-1,c=h}return e}function Gg(a,b){a.modeFrontier=
Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<b-10)){for(var d=a.first,c=b-1;c>d;c--){var e=w(a,c).stateAfter;if(e&&(!(e instanceof Cc)||c+e.lookAhead<b)){d=c+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,d)}}function Dc(a,b,d){this.marker=a;this.from=b;this.to=d}function Pb(a,b){if(a)for(var d=0;d<a.length;++d){var c=a[d];if(c.marker==b)return c}}function vd(a,b){if(b.full)return null;var d=Nb(a,b.from.line)&&w(a,b.from.line).markedSpans,c=Nb(a,b.to.line)&&w(a,b.to.line).markedSpans;
if(!d&&!c)return null;a=b.from.ch;var e=b.to.ch,f=0==B(b.from,b.to),g;if(d)for(var h=0;h<d.length;++h){var k=d[h],l=k.marker;if(null==k.from||(l.inclusiveLeft?k.from<=a:k.from<a)||!(k.from!=a||"bookmark"!=l.type||f&&k.marker.insertLeft)){var m=null==k.to||(l.inclusiveRight?k.to>=a:k.to>a);(g||(g=[])).push(new Dc(l,k.from,m?null:k.to))}}d=g;var n;if(c)for(g=0;g<c.length;++g)if(h=c[g],k=h.marker,null==h.to||(k.inclusiveRight?h.to>=e:h.to>e)||h.from==e&&"bookmark"==k.type&&(!f||h.marker.insertLeft))l=
null==h.from||(k.inclusiveLeft?h.from<=e:h.from<e),(n||(n=[])).push(new Dc(k,l?null:h.from-e,null==h.to?null:h.to-e));c=1==b.text.length;e=J(b.text).length+(c?a:0);if(d)for(f=0;f<d.length;++f)if(g=d[f],null==g.to)(h=Pb(n,g.marker),h)?c&&(g.to=null==h.to?null:h.to+e):g.to=a;if(n)for(a=0;a<n.length;++a)f=n[a],null!=f.to&&(f.to+=e),null==f.from?Pb(d,f.marker)||(f.from=e,c&&(d||(d=[])).push(f)):(f.from+=e,c&&(d||(d=[])).push(f));d&&(d=Fe(d));n&&n!=d&&(n=Fe(n));a=[d];if(!c){b=b.text.length-2;var p;if(0<
b&&d)for(c=0;c<d.length;++c)null==d[c].to&&(p||(p=[])).push(new Dc(d[c].marker,null,null));for(d=0;d<b;++d)a.push(p);a.push(n)}return a}function Fe(a){for(var b=0;b<a.length;++b){var d=a[b];null!=d.from&&d.from==d.to&&!1!==d.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function Hg(a,b,d){var c=null;a.iter(b.line,d.line+1,function(m){if(m.markedSpans)for(var n=0;n<m.markedSpans.length;++n){var p=m.markedSpans[n].marker;!p.readOnly||c&&-1!=ea(c,p)||(c||(c=[])).push(p)}});if(!c)return null;
a=[{from:b,to:d}];for(b=0;b<c.length;++b){d=c[b];for(var e=d.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>B(g.to,e.from)||0<B(g.from,e.to))){var h=[f,1],k=B(g.from,e.from),l=B(g.to,e.to);(0>k||!d.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!d.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function Ge(a){var b=a.markedSpans;if(b){for(var d=0;d<b.length;++d)b[d].marker.detachLine(a);a.markedSpans=null}}function He(a,b){if(b){for(var d=0;d<
b.length;++d)b[d].marker.attachLine(a);a.markedSpans=b}}function wd(a,b){var d=a.lines.length-b.lines.length;if(0!=d)return d;d=a.find();var c=b.find(),e=B(d.from,c.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(d=B(d.to,c.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?d:b.id-a.id}function sb(a,b){a=Ka&&a.markedSpans;if(a)for(var d,c=0;c<a.length;++c)if(d=a[c],d.marker.collapsed&&null==(b?d.from:d.to)&&(!e||0>wd(e,d.marker)))var e=d.marker;return e}function Ie(a,b,d,c,e){a=
w(a,b);if(a=Ka&&a.markedSpans)for(b=0;b<a.length;++b){var f=a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=B(g.from,d)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=B(g.to,c)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=B(g.to,d):0<B(g.to,d))||0<=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0>=B(g.from,c):0>B(g.from,c))))return!0}}}function za(a){for(var b;b=sb(a,!0);)a=b.find(-1,!0).line;return a}
function xd(a,b){a=w(a,b);var d=za(a);return a==d?b:N(d)}function Je(a,b){if(b>a.lastLine())return b;var d=w(a,b);if(!Pa(a,d))return b;for(;a=sb(d,!1);)d=a.find(1,!0).line;return N(d)+1}function Pa(a,b){var d=Ka&&b.markedSpans;if(d)for(var c,e=0;e<d.length;++e)if(c=d[e],c.marker.collapsed&&(null==c.from||!c.marker.widgetNode&&0==c.from&&c.marker.inclusiveLeft&&yd(a,b,c)))return!0}function yd(a,b,d){if(null==d.to)return b=d.marker.find(1,!0),yd(a,b.line,Pb(b.line.markedSpans,d.marker));if(d.marker.inclusiveRight&&
d.to==b.text.length)return!0;for(var c,e=0;e<b.markedSpans.length;++e)if(c=b.markedSpans[e],c.marker.collapsed&&!c.marker.widgetNode&&c.from==d.to&&(null==c.to||c.to!=d.from)&&(c.marker.inclusiveLeft||d.marker.inclusiveRight)&&yd(a,b,c))return!0}function Ga(a){a=za(a);for(var b=0,d=a.parent,c=0;c<d.lines.length;++c){var e=d.lines[c];if(e==a)break;else b+=e.height}for(a=d.parent;a;d=a,a=d.parent)for(c=0;c<a.children.length&&(e=a.children[c],e!=d);++c)b+=e.height;return b}function Ec(a){if(0==a.height)return 0;
for(var b=a.text.length,d,c=a;d=sb(c,!0);)d=d.find(0,!0),c=d.from.line,b+=d.from.ch-d.to.ch;for(c=a;d=sb(c,!1);)a=d.find(0,!0),b-=c.text.length-a.from.ch,c=a.to.line,b+=c.text.length-a.to.ch;return b}function zd(a){var b=a.display;a=a.doc;b.maxLine=w(a,a.first);b.maxLineLength=Ec(b.maxLine);b.maxLineChanged=!0;a.iter(function(d){var c=Ec(d);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=d)})}function Ke(a,b){if(!a||/^\s*$/.test(a))return null;b=b.addModeClass?Ig:Jg;return b[a]||(b[a]=a.replace(/\S+/g,
"cm-$&"))}function Le(a,b){var d=M("span",null,null,fa?"padding-right: .1px":null);d={pre:M("pre",[d],"CodeMirror-line"),content:d,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:a.getOption("lineWrapping")};b.measure={};for(var c=0;c<=(b.rest?b.rest.length:0);c++){var e=c?b.rest[c-1]:b.line,f=void 0;d.pos=0;d.addToken=Kg;var g=a.display.measure;if(null!=Ad)g=Ad;else{var h=D(g,document.createTextNode("A\u062eA")),k=Qb(h,0,1).getBoundingClientRect();h=Qb(h,1,2).getBoundingClientRect();E(g);g=k&&k.left!=
k.right?Ad=3>h.right-k.right:!1}g&&(f=Ja(e,a.doc.direction))&&(d.addToken=Lg(d.addToken,f));d.map=[];var l=b!=a.display.externalMeasured&&N(e);a:{var m=h=k=g=void 0,n=void 0,p=void 0,q=void 0;f=d;l=Ae(a,e,l);var r=e.markedSpans,u=e.text,A=0;if(r)for(var Y=u.length,x=0,P=1,K="",Q=0;;){if(Q==x){n=m=h=p="";k=g=null;Q=Infinity;for(var S=[],F=void 0,R=0;R<r.length;++R){var H=r[R],L=H.marker;if("bookmark"==L.type&&H.from==x&&L.widgetNode)S.push(L);else if(H.from<=x&&(null==H.to||H.to>x||L.collapsed&&H.to==
x&&H.from==x)){null!=H.to&&H.to!=x&&Q>H.to&&(Q=H.to,m="");L.className&&(n+=" "+L.className);L.css&&(p=(p?p+";":"")+L.css);L.startStyle&&H.from==x&&(h+=" "+L.startStyle);L.endStyle&&H.to==Q&&(F||(F=[])).push(L.endStyle,H.to);L.title&&((g||(g={})).title=L.title);if(L.attributes)for(var ha in L.attributes)(g||(g={}))[ha]=L.attributes[ha];L.collapsed&&(!k||0>wd(k.marker,L))&&(k=H)}else H.from>x&&Q>H.from&&(Q=H.from)}if(F)for(R=0;R<F.length;R+=2)F[R+1]==Q&&(m+=" "+F[R]);if(!k||k.from==x)for(F=0;F<S.length;++F)Me(f,
0,S[F]);if(k&&(k.from||0)==x){Me(f,(null==k.to?Y+1:k.to)-x,k.marker,null==k.from);if(null==k.to)break a;k.to==x&&(k=!1)}}if(x>=Y)break;for(S=Math.min(Y,Q);;){if(K){F=x+K.length;k||(R=F>S?K.slice(0,S-x):K,f.addToken(f,R,q?q+n:n,h,x+R.length==Q?m:"",p,g));if(F>=S){K=K.slice(S-x);x=S;break}x=F;h=""}K=u.slice(A,A=l[P++]);q=Ke(l[P++],f.cm.options)}}else for(g=1;g<l.length;g+=2)f.addToken(f,u.slice(A,A=l[g]),Ke(l[g+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(d.bgClass=fd(e.styleClasses.bgClass,
d.bgClass||"")),e.styleClasses.textClass&&(d.textClass=fd(e.styleClasses.textClass,d.textClass||"")));0==d.map.length&&(e=d.map,f=e.push,g=d.content,k=g.appendChild,h=a.display.measure,null==Bd&&(m=v("span","\u200b"),D(h,v("span",[m,document.createTextNode("x")])),0!=h.firstChild.offsetHeight&&(Bd=1>=m.offsetWidth&&2<m.offsetHeight&&!(G&&8>T))),h=Bd?v("span","\u200b"):v("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px"),h.setAttribute("cm-text",""),f.call(e,0,0,k.call(g,
h)));0==c?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||(b.measure.caches=[])).push({}))}fa&&(ha=d.content.lastChild,/\bcm-tab\b/.test(ha.className)||ha.querySelector&&ha.querySelector(".cm-tab"))&&(d.content.className="cm-tab-wrap-hack");W(a,"renderLine",a,b.line,d.pre);d.pre.className&&(d.textClass=fd(d.pre.className,d.textClass||""));return d}function Mg(a){var b=v("span","\u2022","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);
b.setAttribute("aria-label",b.title);return b}function Kg(a,b,d,c,e,f,g){if(b){if(a.splitSpaces){var h=a.trailingSpace;if(1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m="\u00a0");k+=m;h=" "==m}h=k}}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var n=0;;){l.lastIndex=n;var p=l.exec(b),q=p?p.index-n:b.length-n;if(q){var r=document.createTextNode(k.slice(n,n+
q));G&&9>T?h.appendChild(v("span",[r])):h.appendChild(r);a.map.push(a.pos,a.pos+q,r);a.col+=q;a.pos+=q}if(!p)break;n+=q+1;"\t"==p[0]?(p=a.cm.options.tabSize,p-=a.col%p,q=h.appendChild(v("span",id(p),"cm-tab")),q.setAttribute("role","presentation"),q.setAttribute("cm-text","\t"),a.col+=p):("\r"==p[0]||"\n"==p[0]?(q=h.appendChild(v("span","\r"==p[0]?"\u240d":"\u2424","cm-invalidchar")),q.setAttribute("cm-text",p[0])):(q=a.cm.options.specialCharPlaceholder(p[0]),q.setAttribute("cm-text",p[0]),G&&9>T?
h.appendChild(v("span",[q])):h.appendChild(q)),a.col+=1);a.map.push(a.pos,a.pos+1,q);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),G&&9>T&&(m=!0),a.pos+=b.length;a.trailingSpace=32==k.charCodeAt(b.length-1);if(d||c||e||m||f||g){b=d||"";c&&(b+=c);e&&(b+=e);c=v("span",[h],b,f);if(g)for(var u in g)g.hasOwnProperty(u)&&"style"!=u&&"class"!=u&&c.setAttribute(u,g[u]);return a.content.appendChild(c)}a.content.appendChild(h)}}function Lg(a,b){return function(d,
c,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=d.pos,m=l+c.length;;){for(var n=void 0,p=0;p<b.length&&!(n=b[p],n.to>l&&n.from<=l);p++);if(n.to>=m)return a(d,c,e,f,g,h,k);a(d,c.slice(0,n.to-l),e,f,null,h,k);f=null;c=c.slice(n.to-l);l=n.to}}}function Me(a,b,d,c){var e=!c&&d.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!c&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",d.id));e&&(a.cm.display.input.setUneditable(e),
a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function Ne(a,b,d){for(var c=this.line=b,e;c=sb(c,!1);)c=c.find(1,!0).line,(e||(e=[])).push(c);this.size=(this.rest=e)?N(J(this.rest))-d+1:1;this.node=this.text=null;this.hidden=Pa(a,b)}function Fc(a,b,d){var c=[],e;for(e=b;e<d;)b=new Ne(a.doc,w(a.doc,e),e),e+=b.size,c.push(b);return c}function Ng(a,b){if(a=a.ownsGroup)try{var d=a.delayedCallbacks,c=0;do{for(;c<d.length;c++)d[c].call(null);for(var e=0;e<a.ops.length;e++){var f=a.ops[e];if(f.cursorActivityHandlers)for(;f.cursorActivityCalled<
f.cursorActivityHandlers.length;)f.cursorActivityHandlers[f.cursorActivityCalled++].call(null,f.cm)}}while(c<d.length)}finally{tb=null,b(a)}}function aa(a,b){var d=a._handlers&&a._handlers[b]||yc;if(d.length){var c=Array.prototype.slice.call(arguments,2);if(tb)var e=tb.delayedCallbacks;else Rb?e=Rb:(e=Rb=[],setTimeout(Og,0));for(var f=function(h){e.push(function(){return d[h].apply(null,c)})},g=0;g<d.length;++g)f(g)}}function Og(){var a=Rb;Rb=null;for(var b=0;b<a.length;++b)a[b]()}function Oe(a,b,
d,c){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){f=a;var g=b,h=g.text.className,k=Pe(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=k.bgClass,g.textClass=k.textClass,Cd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)Qe(a,b,d,c);else if("class"==f)Cd(a,b);else if("widget"==f){f=a;g=b;h=c;g.alignable&&(g.alignable=null);k=y("CodeMirror-linewidget");for(var l=g.node.firstChild,
m;l;l=m)m=l.nextSibling,k.test(l.className)&&g.node.removeChild(l);Re(f,g,h)}}b.changes=null}function Sb(a){a.node==a.text&&(a.node=v("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),G&&8>T&&(a.node.style.zIndex=2));return a.node}function Pe(a,b){var d=a.display.externalMeasured;return d&&d.line==b.line?(a.display.externalMeasured=null,b.measure=d.measure,d.built):Le(a,b)}function Cd(a,b){var d=b.bgClass?b.bgClass+" "+
(b.line.bgClass||""):b.line.bgClass;d&&(d+=" CodeMirror-linebackground");if(b.background)d?b.background.className=d:(b.background.parentNode.removeChild(b.background),b.background=null);else if(d){var c=Sb(b);b.background=c.insertBefore(v("div",null,d),c.firstChild);a.display.input.setUneditable(b.background)}b.line.wrapClass?Sb(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function Qe(a,
b,d,c){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Sb(b);b.gutterBackground=v("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px; width: "+c.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||
e){var f=Sb(b),g=b.gutter=v("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px");g.setAttribute("aria-hidden","true");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(v("div",qd(a.options,d),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+c.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+
a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.display.gutterSpecs.length;++b)d=a.display.gutterSpecs[b].className,(f=e.hasOwnProperty(d)&&e[d])&&g.appendChild(v("div",[f],"CodeMirror-gutter-elt","left: "+c.gutterLeft[d]+"px; width: "+c.gutterWidth[d]+"px"))}}function Pg(a,b,d,c){var e=Pe(a,b);b.text=b.node=e.pre;e.bgClass&&(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);Cd(a,b);Qe(a,b,d,c);Re(a,b,c);return b.node}function Re(a,b,d){Se(a,b.line,b,d,!0);if(b.rest)for(var c=0;c<b.rest.length;c++)Se(a,
b.rest[c],b,d,!1)}function Se(a,b,d,c,e){if(b.widgets){var f=Sb(d),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=v("div",[h.node],"CodeMirror-linewidget"+(h.className?" "+h.className:""));h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,n=c;if(l.noHScroll){(d.alignable||(d.alignable=[])).push(m);var p=n.wrapperWidth;m.style.left=n.fixedPos+"px";l.coverGutter||(p-=n.gutterTotalWidth,m.style.paddingLeft=n.gutterTotalWidth+"px");m.style.width=p+"px"}l.coverGutter&&(m.style.zIndex=
5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-n.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,d.gutter||d.text):f.appendChild(k);aa(h,"redraw")}}}function Tb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!ja(document.body,a.node)){var d="position: relative;";a.coverGutter&&(d+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(d+="width: "+b.display.wrapper.clientWidth+"px;");D(b.display.measure,v("div",
[a.node],null,d))}return a.height=a.node.parentNode.offsetHeight}function La(a,b){for(b=b.target||b.srcElement;b!=a.wrapper;b=b.parentNode)if(!b||1==b.nodeType&&"true"==b.getAttribute("cm-ignore-events")||b.parentNode==a.sizer&&b!=a.mover)return!0}function Dd(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Te(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=D(a.measure,v("pre","x","CodeMirror-line-like"));b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;b={left:parseInt(b.paddingLeft),
right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function Ha(a){return 50-a.display.nativeBarWidth}function cb(a){return a.display.scroller.clientWidth-Ha(a)-a.display.barWidth}function Ed(a){return a.display.scroller.clientHeight-Ha(a)-a.display.barHeight}function Ue(a,b,d){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};if(a.rest){for(var c=0;c<a.rest.length;c++)if(a.rest[c]==b)return{map:a.measure.maps[c],cache:a.measure.caches[c]};for(b=
0;b<a.rest.length;b++)if(N(a.rest[b])>d)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}}function Fd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[db(a,b)];if((a=a.display.externalMeasured)&&b>=a.lineN&&b<a.lineN+a.size)return a}function eb(a,b){var d=N(b),c=Fd(a,d);c&&!c.text?c=null:c&&c.changes&&(Oe(a,c,d,Gd(a)),a.curOp.forceUpdate=!0);if(!c){var e=za(b);c=N(e);e=a.display.externalMeasured=new Ne(a.doc,e,c);e.lineN=c;c=e.built=Le(a,e);e.text=c.pre;D(a.display.lineMeasure,
c.pre);c=e}a=Ue(c,b,d);return{line:b,view:c,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Aa(a,b,d,c,e){b.before&&(d=-1);var f=d+(c||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&cb(a);if(!g.measure.heights||k&&g.measure.width!=l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){l=
g[k];var n=g[k+1];2<Math.abs(l.bottom-n.bottom)&&m.push((l.bottom+n.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=c;g=Ve(b.map,d,m);c=g.node;h=g.start;k=g.end;d=g.collapse;if(3==c.nodeType){for(var p=0;4>p;p++){for(;h&&kd(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&kd(b.line.text.charAt(g.coverStart+k));)++k;if(G&&9>T&&0==h&&k==g.coverEnd-g.coverStart)var q=c.parentNode.getBoundingClientRect();else{q=Qb(c,h,k).getClientRects();k=We;if("left"==m)for(l=0;l<q.length&&
(k=q[l]).left==k.right;l++);else for(l=q.length-1;0<=l&&(k=q[l]).left==k.right;l--);q=k}if(q.left||q.right||0==h)break;k=h;--h;d="right"}G&&11>T&&((p=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=Hd?p=Hd:(m=D(a.display.measure,v("span","x")),p=m.getBoundingClientRect(),m=Qb(m,0,1).getBoundingClientRect(),p=Hd=1<Math.abs(p.left-m.left)),p=!p),p||(p=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,q={left:q.left*p,right:q.right*p,
top:q.top*m,bottom:q.bottom*m}))}else 0<h&&(d=m="right"),q=a.options.lineWrapping&&1<(p=c.getClientRects()).length?p["right"==m?p.length-1:0]:c.getBoundingClientRect();!(G&&9>T)||h||q&&(q.left||q.right)||(q=(q=c.parentNode.getClientRects()[0])?{left:q.left,right:q.left+ub(a.display),top:q.top,bottom:q.bottom}:We);c=q.top-b.rect.top;h=q.bottom-b.rect.top;p=(c+h)/2;m=b.view.measure.heights;for(g=0;g<m.length-1&&!(p<m[g]);g++);d={left:("right"==d?q.right:q.left)-b.rect.left,right:("left"==d?q.left:q.right)-
b.rect.left,top:g?m[g-1]:0,bottom:m[g]};q.left||q.right||(d.bogus=!0);a.options.singleCursorHeightPerLine||(d.rtop=c,d.rbottom=h);a=d;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Ve(a,b,d){for(var c,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){c=a[l+2];h==k&&d==(c.insertLeft?"left":"right")&&(g=d);if("left"==
d&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)c=a[(l-=3)+2],g="left";if("right"==d&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)c=a[(l+=3)+2],g="right";break}}return{node:c,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function Xe(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function Ye(a){a.display.externalMeasure=null;E(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Xe(a.display.view[b])}
function Ub(a){Ye(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Ze(a){return Qa&&Gc?-(a.body.getBoundingClientRect().left-parseInt(getComputedStyle(a.body).marginLeft)):a.defaultView.pageXOffset||(a.documentElement||a.body).scrollLeft}function $e(a){return Qa&&Gc?-(a.body.getBoundingClientRect().top-parseInt(getComputedStyle(a.body).marginTop)):a.defaultView.pageYOffset||
(a.documentElement||a.body).scrollTop}function Id(a){a=za(a).widgets;var b=0;if(a)for(var d=0;d<a.length;++d)a[d].above&&(b+=Tb(a[d]));return b}function Hc(a,b,d,c,e){e||(e=Id(b),d.top+=e,d.bottom+=e);if("line"==c)return d;c||(c="local");b=Ga(b);b="local"==c?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==c||"window"==c)e=a.display.lineSpace.getBoundingClientRect(),b+=e.top+("window"==c?0:$e(qa(a))),a=e.left+("window"==c?0:Ze(qa(a))),d.left+=a,d.right+=a;d.top+=b;d.bottom+=b;return d}
function af(a,b,d){if("div"==d)return b;var c=b.left;b=b.top;"page"==d?(c-=Ze(qa(a)),b-=$e(qa(a))):"local"!=d&&d||(d=a.display.sizer.getBoundingClientRect(),c+=d.left,b+=d.top);a=a.display.lineSpace.getBoundingClientRect();return{left:c-a.left,top:b-a.top}}function Ic(a,b,d,c,e){c||(c=w(a.doc,b.line));var f=c;b=b.ch;c=Aa(a,eb(a,c),b,e);return Hc(a,f,c,d)}function Ba(a,b,d,c,e,f){function g(p,q){p=Aa(a,e,p,q?"right":"left",f);q?p.left=p.right:p.right=p.left;return Hc(a,c,p,d)}function h(p,q,r){return g(r?
p-1:p,1==k[q].level!=r)}c=c||w(a.doc,b.line);e||(e=eb(a,c));var k=Ja(c,a.doc.direction),l=b.ch;b=b.sticky;l>=c.text.length?(l=c.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=Kb(k,l,b),n=Lb;m=h(l,m,"before"==b);null!=n&&(m.other=h(l,n,"before"!=b));return m}function bf(a,b){var d=0;b=C(a.doc,b);a.options.lineWrapping||(d=ub(a.display)*b.ch);b=w(a.doc,b.line);a=Ga(b)+a.display.lineSpace.offsetTop;return{left:d,right:d,top:a,bottom:a+b.height}}function Jd(a,
b,d,c,e){a=t(a,b,d);a.xRel=e;c&&(a.outside=c);return a}function Kd(a,b,d){var c=a.doc;d+=a.display.viewOffset;if(0>d)return Jd(c.first,0,null,-1,-1);var e=bb(c,d),f=c.first+c.size-1;if(e>f)return Jd(c.first+c.size-1,w(c,f).text.length,null,1,1);0>b&&(b=0);for(var g=w(c,e);;){f=Qg(a,g,e,b,d);var h=void 0;var k=f.ch+(0<f.xRel||0<f.outside?1:0);if(g=Ka&&g.markedSpans)for(var l=0;l<g.length;++l){var m=g[l];m.marker.collapsed&&(null==m.from||m.from<k)&&(null==m.to||m.to>k)&&(!h||0>wd(h,m.marker))&&(h=
m.marker)}if(!h)return f;f=h.find(1);if(f.line==e)return f;g=w(c,e=f.line)}}function cf(a,b,d,c){c-=Id(b);b=b.text.length;var e=Jb(function(f){return Aa(a,d,f-1).bottom<=c},b,0);b=Jb(function(f){return Aa(a,d,f).top>c},e,b);return{begin:e,end:b}}function df(a,b,d,c){d||(d=eb(a,b));c=Hc(a,b,Aa(a,d,c),"line").top;return cf(a,b,d,c)}function Ld(a,b,d,c){return a.bottom<=d?!1:a.top>d?!0:(c?a.left:a.right)>b}function Qg(a,b,d,c,e){e-=Ga(b);var f=eb(a,b),g=Id(b),h=0,k=b.text.length,l=!0,m=Ja(b,a.doc.direction);
m&&(m=(a.options.lineWrapping?Rg:Sg)(a,b,d,f,m,c,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var n=null,p=null;m=Jb(function(r){var u=Aa(a,f,r);u.top+=g;u.bottom+=g;if(!Ld(u,c,e,!1))return!1;u.top<=e&&u.left<=c&&(n=r,p=u);return!0},h,k);var q=!1;p?(h=c-p.left<p.right-c,l=h==l,m=n+(l?0:1),l=l?"after":"before",h=h?p.left:p.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":Aa(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",q=Ba(a,t(d,m,l),"line",b,f),h=q.left,q=e<q.top?-1:e>=
q.bottom?1:0);m=se(b.text,m,1);return Jd(d,m,l,q,c-h)}function Sg(a,b,d,c,e,f,g){var h=Jb(function(m){m=e[m];var n=1!=m.level;return Ld(Ba(a,t(d,n?m.to:m.from,n?"before":"after"),"line",b,c),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level;l=Ba(a,t(d,l?k.from:k.to,l?"after":"before"),"line",b,c);Ld(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Rg(a,b,d,c,e,f,g){g=cf(a,b,c,g);d=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=
g||l.to<=d)){var m=Aa(a,c,1!=l.level?Math.min(g,l.to)-1:Math.max(d,l.from)).right;m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<d&&(b={from:d,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function vb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==fb){fb=v("pre",null,"CodeMirror-line-like");for(var b=0;49>b;++b)fb.appendChild(document.createTextNode("x")),fb.appendChild(v("br"));fb.appendChild(document.createTextNode("x"))}D(a.measure,
fb);b=fb.offsetHeight/50;3<b&&(a.cachedTextHeight=b);E(a.measure);return b||1}function ub(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=v("span","xxxxxxxxxx"),d=v("pre",[b],"CodeMirror-line-like");D(a.measure,d);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function Gd(a){for(var b=a.display,d={},c={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g){var h=a.display.gutterSpecs[g].className;d[h]=f.offsetLeft+f.clientLeft+
e;c[h]=f.clientWidth}return{fixedPos:Md(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:d,gutterWidth:c,wrapperWidth:b.wrapper.clientWidth}}function Md(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function ef(a){var b=vb(a.display),d=a.options.lineWrapping,c=d&&Math.max(5,a.display.scroller.clientWidth/ub(a.display)-3);return function(e){if(Pa(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);
return d?f+(Math.ceil(e.text.length/c)||1)*b:f+b}}function Nd(a){var b=a.doc,d=ef(a);b.iter(function(c){var e=d(c);e!=c.height&&Ea(c,e)})}function gb(a,b,d,c){var e=a.display;if(!d&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;d=e.lineSpace.getBoundingClientRect();try{var f=b.clientX-d.left;var g=b.clientY-d.top}catch(k){return null}b=Kd(a,f,g);var h;c&&0<b.xRel&&(h=w(a.doc,b.line).text).length==b.ch&&(c=wa(h,h.length,a.options.tabSize)-h.length,b=t(b.line,Math.max(0,
Math.round((f-Te(a.display).left)/ub(a.display))-c)));return b}function db(a,b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;a=a.display.view;for(var d=0;d<a.length;d++)if(b-=a[d].size,0>b)return d}function ma(a,b,d,c){null==b&&(b=a.doc.first);null==d&&(d=a.doc.first+a.doc.size);c||(c=0);var e=a.display;c&&d<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)Ka&&xd(a.doc,b)<e.viewTo&&Ra(a);else if(d<=
e.viewFrom)Ka&&Je(a.doc,d+c)>e.viewFrom?Ra(a):(e.viewFrom+=c,e.viewTo+=c);else if(b<=e.viewFrom&&d>=e.viewTo)Ra(a);else if(b<=e.viewFrom){var f=Jc(a,d,d+c,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=c):Ra(a)}else if(d>=e.viewTo)(f=Jc(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Ra(a);else{f=Jc(a,b,b,-1);var g=Jc(a,d,d+c,1);f&&g?(e.view=e.view.slice(0,f.index).concat(Fc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=c):Ra(a)}if(a=e.externalMeasured)d<
a.lineN?a.lineN+=c:b<a.lineN+a.size&&(e.externalMeasured=null)}function Sa(a,b,d){a.curOp.viewChanged=!0;var c=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(c.externalMeasured=null);b<c.viewFrom||b>=c.viewTo||(a=c.view[db(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==ea(a,d)&&a.push(d)))}function Ra(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function Jc(a,b,d,c){var e=db(a,b),f=a.display.view;if(!Ka||d==a.doc.first+
a.doc.size)return{index:e,lineN:d};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<c){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;d+=b}for(;xd(a.doc,d)!=d;){if(e==(0>c?0:f.length-1))return null;d+=c*f[e-(0>c?1:0)].size;e+=c}return{index:e,lineN:d}}function ff(a){a=a.display.view;for(var b=0,d=0;d<a.length;d++){var c=a[d];c.hidden||c.node&&!c.changes||++b}return b}function Vb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function gf(a,b){void 0===
b&&(b=!0);var d=a.doc,c={},e=c.cursors=document.createDocumentFragment(),f=c.selection=document.createDocumentFragment(),g=a.options.$customCursor;g&&(b=!0);for(var h=0;h<d.sel.ranges.length;h++)if(b||h!=d.sel.primIndex){var k=d.sel.ranges[h];if(!(k.from().line>=a.display.viewTo||k.to().line<a.display.viewFrom)){var l=k.empty();if(g){var m=g(a,k);m&&Od(a,m,e)}else(l||a.options.showCursorWhenSelecting)&&Od(a,k.head,e);l||Tg(a,k,f)}}return c}function Od(a,b,d){var c=Ba(a,b,"div",null,null,!a.options.singleCursorHeightPerLine),
e=d.appendChild(v("div","\u00a0","CodeMirror-cursor"));e.style.left=c.left+"px";e.style.top=c.top+"px";e.style.height=Math.max(0,c.bottom-c.top)*a.options.cursorHeight+"px";/\bcm-fat-cursor\b/.test(a.getWrapperElement().className)&&(b=Ic(a,b,"div",null,null),b=b.right-b.left,e.style.width=(0<b?b:a.defaultCharWidth())+"px");c.other&&(a=d.appendChild(v("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor")),a.style.display="",a.style.left=c.other.left+"px",a.style.top=c.other.top+"px",a.style.height=
.85*(c.other.bottom-c.other.top)+"px")}function Kc(a,b){return a.top-b.top||a.left-b.left}function Tg(a,b,d){function c(q,r,u,A){0>r&&(r=0);r=Math.round(r);A=Math.round(A);h.appendChild(v("div",null,"CodeMirror-selected","position: absolute; left: "+q+"px;\n                             top: "+r+"px; width: "+(null==u?m-q:u)+"px;\n                             height: "+(A-r)+"px"))}function e(q,r,u){function A(F,R){return Ic(a,t(q,F),"div",x,R)}function Y(F,R,H){F=df(a,x,null,F);R="ltr"==R==("after"==
H)?"left":"right";H="after"==H?F.begin:F.end-(/\s/.test(x.text.charAt(F.end-1))?2:1);return A(H,R)[R]}var x=w(g,q),P=x.text.length,K,Q,S=Ja(x,g.direction);Bg(S,r||0,null==u?P:u,function(F,R,H,L){var ha="ltr"==H,na=A(F,ha?"left":"right"),ua=A(R-1,ha?"right":"left"),hb=null==r&&0==F,ib=null==u&&R==P,Pd=0==L;L=!S||L==S.length-1;3>=ua.top-na.top?(R=(n?hb:ib)&&Pd?l:(ha?na:ua).left,c(R,na.top,((n?ib:hb)&&L?m:(ha?ua:na).right)-R,na.bottom)):(ha?(ha=n&&hb&&Pd?l:na.left,hb=n?m:Y(F,H,"before"),F=n?l:Y(R,H,
"after"),ib=n&&ib&&L?m:ua.right):(ha=n?Y(F,H,"before"):l,hb=!n&&hb&&Pd?m:na.right,F=!n&&ib&&L?l:ua.left,ib=n?Y(R,H,"after"):m),c(ha,na.top,hb-ha,na.bottom),na.bottom<ua.top&&c(l,na.bottom,null,ua.top),c(F,ua.top,ib-F,ua.bottom));if(!K||0>Kc(na,K))K=na;0>Kc(ua,K)&&(K=ua);if(!Q||0>Kc(na,Q))Q=na;0>Kc(ua,Q)&&(Q=ua)});return{start:K,end:Q}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=Te(a.display),l=k.left,m=Math.max(f.sizerWidth,cb(a)-f.sizer.offsetLeft)-k.right,n="ltr"==g.direction;
f=b.from();b=b.to();if(f.line==b.line)e(f.line,f.ch,b.ch);else{var p=w(g,f.line);k=w(g,b.line);k=za(p)==za(k);f=e(f.line,f.ch,k?p.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(c(f.right,f.top,null,f.bottom),c(l,b.top,b.left,b.bottom)):c(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&c(l,f.bottom,null,b.top)}d.appendChild(h)}function Qd(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var d=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?
b.blinker=setInterval(function(){a.hasFocus()||wb(a);b.cursorDiv.style.visibility=(d=!d)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function hf(a){a.hasFocus()||(a.display.input.focus(),a.state.focused||Rd(a))}function Sd(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,a.state.focused&&wb(a))},100)}function Rd(a,b){a.state.delayingBlurEvent&&!a.state.draggingText&&(a.state.delayingBlurEvent=
!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(W(a,"focus",a,b),a.state.focused=!0,Ya(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),fa&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),Qd(a))}function wb(a,b){a.state.delayingBlurEvent||(a.state.focused&&(W(a,"blur",a,b),a.state.focused=!1,jb(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||
(a.display.shift=!1)},150))}function Lc(a){for(var b=a.display,d=b.lineDiv.offsetTop,c=Math.max(0,b.scroller.getBoundingClientRect().top),e=b.lineDiv.getBoundingClientRect().top,f=0,g=0;g<b.view.length;g++){var h=b.view[g],k=a.options.lineWrapping,l=0;if(!h.hidden){e+=h.line.height;if(G&&8>T){k=h.node.offsetTop+h.node.offsetHeight;var m=k-d;d=k}else{var n=h.node.getBoundingClientRect();m=n.bottom-n.top;!k&&h.text.firstChild&&(l=h.text.firstChild.getBoundingClientRect().right-n.left-1)}k=h.line.height-
m;if(.005<k||-.005>k)if(e<c&&(f-=k),Ea(h.line,m),jf(h.line),h.rest)for(m=0;m<h.rest.length;m++)jf(h.rest[m]);l>a.display.sizerWidth&&(l=Math.ceil(l/ub(a.display)),l>a.display.maxLineLength&&(a.display.maxLineLength=l,a.display.maxLine=h.line,a.display.maxLineChanged=!0))}}2<Math.abs(f)&&(b.scroller.scrollTop+=f)}function jf(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b){var d=a.widgets[b],c=d.node.parentNode;c&&(d.height=c.offsetHeight)}}function Mc(a,b,d){var c=d&&null!=d.top?Math.max(0,d.top):
a.scroller.scrollTop;c=Math.floor(c-a.lineSpace.offsetTop);var e=d&&null!=d.bottom?d.bottom:c+a.wrapper.clientHeight;c=bb(b,c);e=bb(b,e);if(d&&d.ensure){var f=d.ensure.from.line;d=d.ensure.to.line;f<c?(c=f,e=bb(b,Ga(w(b,f))+a.wrapper.clientHeight)):Math.min(d,b.lastLine())>=e&&(c=bb(b,Ga(w(b,d))-a.wrapper.clientHeight),e=d)}return{from:c,to:Math.max(e,c+1)}}function Td(a,b){var d=a.display,c=vb(a.display);0>b.top&&(b.top=0);var e=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:d.scroller.scrollTop,
f=Ed(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+Dd(d),k=b.top<c;c=b.bottom>h-c;b.top<e?g.scrollTop=k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(c?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.options.fixedGutter?0:d.gutters.offsetWidth;f=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:d.scroller.scrollLeft-e;a=cb(a)-d.gutters.offsetWidth;if(d=b.right-b.left>a)b.right=b.left+a;10>b.left?g.scrollLeft=0:b.left<f?g.scrollLeft=Math.max(0,b.left+e-(d?0:10)):b.right>a+f-3&&(g.scrollLeft=
b.right+(d?0:10)-a);return g}function Nc(a,b){null!=b&&(Oc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}function xb(a){Oc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Wb(a,b,d){null==b&&null==d||Oc(a);null!=b&&(a.curOp.scrollLeft=b);null!=d&&(a.curOp.scrollTop=d)}function Oc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var d=bf(a,b.from),c=bf(a,b.to);kf(a,d,c,b.margin)}}function kf(a,b,d,
c){b=Td(a,{left:Math.min(b.left,d.left),top:Math.min(b.top,d.top)-c,right:Math.max(b.right,d.right),bottom:Math.max(b.bottom,d.bottom)+c});Wb(a,b.scrollLeft,b.scrollTop)}function Xb(a,b){2>Math.abs(a.doc.scrollTop-b)||(Ma||Ud(a,{top:b}),lf(a,b,!0),Ma&&Ud(a),Yb(a,100))}function lf(a,b,d){b=Math.max(0,Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b));if(a.display.scroller.scrollTop!=b||d)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=
b&&(a.display.scroller.scrollTop=b)}function kb(a,b,d,c){b=Math.max(0,Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth));(d?b==a.doc.scrollLeft:2>Math.abs(a.doc.scrollLeft-b))&&!c||(a.doc.scrollLeft=b,mf(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Zb(a){var b=a.display,d=b.gutters.offsetWidth,c=Math.round(a.doc.height+Dd(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,
scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?d:0,docHeight:c,scrollHeight:c+Ha(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:d}}function yb(a,b){b||(b=Zb(a));var d=a.display.barWidth,c=a.display.barHeight;nf(a,b);for(b=0;4>b&&d!=a.display.barWidth||c!=a.display.barHeight;b++)d!=a.display.barWidth&&a.options.lineWrapping&&Lc(a),nf(a,Zb(a)),d=a.display.barWidth,c=a.display.barHeight}function nf(a,b){var d=
a.display,c=d.scrollbars.update(b);d.sizer.style.paddingRight=(d.barWidth=c.right)+"px";d.sizer.style.paddingBottom=(d.barHeight=c.bottom)+"px";d.heightForcer.style.borderBottom=c.bottom+"px solid transparent";c.right&&c.bottom?(d.scrollbarFiller.style.display="block",d.scrollbarFiller.style.height=c.bottom+"px",d.scrollbarFiller.style.width=c.right+"px"):d.scrollbarFiller.style.display="";c.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(d.gutterFiller.style.display="block",
d.gutterFiller.style.height=c.bottom+"px",d.gutterFiller.style.width=b.gutterWidth+"px"):d.gutterFiller.style.display=""}function of(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&jb(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new pf[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);z(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});
b.setAttribute("cm-not-content","true")},function(b,d){"horizontal"==d?kb(a,b):Xb(a,b)},a);a.display.scrollbars.addClass&&Ya(a.display.wrapper,a.display.scrollbars.addClass)}function lb(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Ug,markArrays:null};a=a.curOp;tb?tb.ops.push(a):a.ownsGroup=
tb={ops:[a],delayedCallbacks:[]}}function mb(a){(a=a.curOp)&&Ng(a,function(b){for(var d=0;d<b.ops.length;d++)b.ops[d].cm.curOp=null;b=b.ops;for(d=0;d<b.length;d++){var c=b[d],e=c.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=Ha(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=Ha(e)+"px",g.scrollbarsClipped=!0);c.updateMaxLine&&zd(e);c.mustUpdate=
c.viewChanged||c.forceUpdate||null!=c.scrollTop||c.scrollToPos&&(c.scrollToPos.from.line<f.viewFrom||c.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;c.update=c.mustUpdate&&new Pc(e,c.mustUpdate&&{top:c.scrollTop,ensure:c.scrollToPos},c.forceUpdate)}for(d=0;d<b.length;d++)c=b[d],c.updatedDisplay=c.mustUpdate&&Vd(c.cm,c.update);for(d=0;d<b.length;d++)if(c=b[d],e=c.cm,f=e.display,c.updatedDisplay&&Lc(e),c.barMeasure=Zb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=f.maxLine.text.length,
g=Aa(e,eb(e,f.maxLine),g,void 0),c.adjustWidthTo=g.left+3,e.display.sizerWidth=c.adjustWidthTo,c.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+c.adjustWidthTo+Ha(e)+e.display.barWidth),c.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+c.adjustWidthTo-cb(e))),c.updatedDisplay||c.selectionChanged)c.preparedSelection=f.input.prepareSelection();for(d=0;d<b.length;d++)c=b[d],e=c.cm,null!=c.adjustWidthTo&&(e.display.sizer.style.minWidth=c.adjustWidthTo+"px",c.maxScrollLeft<e.doc.scrollLeft&&
kb(e,Math.min(e.display.scroller.scrollLeft,c.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=c.focus&&c.focus==ka(qa(e)),c.preparedSelection&&e.display.input.showSelection(c.preparedSelection,f),(c.updatedDisplay||c.startHeight!=e.doc.height)&&yb(e,c.barMeasure),c.updatedDisplay&&Wd(e,c.barMeasure),c.selectionChanged&&Qd(e),e.state.focused&&c.updateInput&&e.display.input.reset(c.typing),f&&hf(c.cm);for(d=0;d<b.length;d++){var h=void 0;c=b[d];e=c.cm;f=e.display;g=e.doc;c.updatedDisplay&&qf(e,c.update);
null==f.wheelStartX||null==c.scrollTop&&null==c.scrollLeft&&!c.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=c.scrollTop&&lf(e,c.scrollTop,c.forceScroll);null!=c.scrollLeft&&kb(e,c.scrollLeft,!0,!0);if(c.scrollToPos){var k=C(g,c.scrollToPos.from);var l=C(g,c.scrollToPos.to);var m=c.scrollToPos.margin;null==m&&(m=0);e.options.lineWrapping||k!=l||(l="before"==k.sticky?t(k.line,k.ch+1,"before"):k,k=k.ch?t(k.line,"before"==k.sticky?k.ch-1:k.ch,"after"):k);for(var n=0;5>n;n++){var p=!1;h=Ba(e,
k);var q=l&&l!=k?Ba(e,l):h;h={left:Math.min(h.left,q.left),top:Math.min(h.top,q.top)-m,right:Math.max(h.left,q.left),bottom:Math.max(h.bottom,q.bottom)+m};q=Td(e,h);var r=e.doc.scrollTop,u=e.doc.scrollLeft;null!=q.scrollTop&&(Xb(e,q.scrollTop),1<Math.abs(e.doc.scrollTop-r)&&(p=!0));null!=q.scrollLeft&&(kb(e,q.scrollLeft),1<Math.abs(e.doc.scrollLeft-u)&&(p=!0));if(!p)break}l=h;Z(e,"scrollCursorIntoView")||(m=e.display,n=m.sizer.getBoundingClientRect(),k=null,p=m.wrapper.ownerDocument,0>l.top+n.top?
k=!0:l.bottom+n.top>(p.defaultView.innerHeight||p.documentElement.clientHeight)&&(k=!1),null==k||Vg||(l=v("div","\u200b",null,"position: absolute;\n                         top: "+(l.top-m.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(l.bottom-l.top+Ha(e)+m.barHeight)+"px;\n                         left: "+l.left+"px; width: "+Math.max(2,l.right-l.left)+"px;"),e.display.lineSpace.appendChild(l),l.scrollIntoView(k),e.display.lineSpace.removeChild(l)))}l=c.maybeHiddenMarkers;
k=c.maybeUnhiddenMarkers;if(l)for(m=0;m<l.length;++m)l[m].lines.length||W(l[m],"hide");if(k)for(l=0;l<k.length;++l)k[l].lines.length&&W(k[l],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);c.changeObjs&&W(e,"changes",e,c.changeObjs);c.update&&c.update.finish()}})}function ra(a,b){if(a.curOp)return b();lb(a);try{return b()}finally{mb(a)}}function ba(a,b){return function(){if(a.curOp)return b.apply(a,arguments);lb(a);try{return b.apply(a,arguments)}finally{mb(a)}}}function ia(a){return function(){if(this.curOp)return a.apply(this,
arguments);lb(this);try{return a.apply(this,arguments)}finally{mb(this)}}}function ca(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);lb(b);try{return a.apply(this,arguments)}finally{mb(b)}}}function Yb(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,gd(Wg,a))}function Wg(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var d=+new Date+a.options.workTime,c=Ob(a,b.highlightFrontier),e=[];b.iter(c.line,Math.min(b.first+b.size,a.display.viewTo+
500),function(f){if(c.line>=a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength?$a(b.mode,c.state):null,k=ye(a,f,c,!0);h&&(c.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(c.line);f.stateAfter=c.save()}else f.text.length<=a.options.maxHighlightLength&&td(a,f.text,c),
f.stateAfter=0==c.line%5?c.save():null;c.nextLine();if(+new Date>d)return Yb(a,a.options.workDelay),!0});b.highlightFrontier=c.line;b.modeFrontier=Math.max(b.modeFrontier,c.line);e.length&&ra(a,function(){for(var f=0;f<e.length;f++)Sa(a,e[f],"text")})}}function Vd(a,b){var d=a.display,c=a.doc;if(b.editorIsHidden)return Ra(a),!1;if(!b.force&&b.visible.from>=d.viewFrom&&b.visible.to<=d.viewTo&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo)&&d.renderedView==d.view&&0==ff(a))return!1;rf(a)&&
(Ra(a),b.dims=Gd(a));var e=c.first+c.size,f=Math.max(b.visible.from-a.options.viewportMargin,c.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);d.viewFrom<f&&20>f-d.viewFrom&&(f=Math.max(c.first,d.viewFrom));d.viewTo>g&&20>d.viewTo-g&&(g=Math.min(e,d.viewTo));Ka&&(f=xd(a.doc,f),g=Je(a.doc,g));c=f!=d.viewFrom||g!=d.viewTo||d.lastWrapHeight!=b.wrapperHeight||d.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=Fc(a,f,g),e.viewFrom=f):(e.viewFrom>
f?e.view=Fc(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(db(a,f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(Fc(a,e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,db(a,g))));e.viewTo=g;d.viewOffset=Ga(w(a.doc,d.viewFrom));a.display.mover.style.top=d.viewOffset+"px";g=ff(a);if(!c&&0==g&&!b.force&&d.renderedView==d.view&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo))return!1;a.hasFocus()?f=null:(f=ka(qa(a)))&&ja(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&
(e=qa(a).defaultView.getSelection(),e.anchorNode&&e.extend&&ja(a.display.lineDiv,e.anchorNode)&&(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(d.lineDiv.style.display="none");Xg(a,d.updateLineNumbers,b.dims);4<g&&(d.lineDiv.style.display="");d.renderedView=d.view;(g=f)&&g.activeElt&&g.activeElt!=ka(g.activeElt.ownerDocument)&&(g.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(g.activeElt.nodeName)&&g.anchorNode&&ja(document.body,
g.anchorNode)&&ja(document.body,g.focusNode)&&(e=g.activeElt.ownerDocument,f=e.defaultView.getSelection(),e=e.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),f.addRange(e),f.extend(g.focusNode,g.focusOffset)));E(d.cursorDiv);E(d.selectionDiv);d.gutters.style.height=d.sizer.style.minHeight=0;c&&(d.lastWrapHeight=b.wrapperHeight,d.lastWrapWidth=b.wrapperWidth,Yb(a,400));d.updateLineNumbers=null;return!0}function qf(a,b){for(var d=b.viewport,c=!0;;c=!1){if(c&&a.options.lineWrapping&&
b.oldDisplayWidth!=cb(a))c&&(b.visible=Mc(a.display,a.doc,d));else if(d&&null!=d.top&&(d={top:Math.min(a.doc.height+Dd(a.display)-Ed(a),d.top)}),b.visible=Mc(a.display,a.doc,d),b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!Vd(a,b))break;Lc(a);c=Zb(a);Vb(a);yb(a,c);Wd(a,c);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=
a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function Ud(a,b){b=new Pc(a,b);if(Vd(a,b)){Lc(a);qf(a,b);var d=Zb(a);Vb(a);yb(a,d);Wd(a,d);b.finish()}}function Xg(a,b,d){function c(p){var q=p.nextSibling;fa&&ya&&a.display.currentWheelTarget==p?p.style.display="none":p.parentNode.removeChild(p);return q}var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view;e=e.viewFrom;for(var l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=
c(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<ea(m.changes,"gutter")&&(h=!1),Oe(a,m,e,d));h&&(E(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(qd(a.options,e))));h=m.node.nextSibling}else{var n=Pg(a,m,e,d);g.insertBefore(n,h)}e+=m.size}for(;h;)h=c(h)}function Xd(a){a.sizer.style.marginLeft=a.gutters.offsetWidth+"px";aa(a,"gutterChanged",a)}function Wd(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=
b.docHeight+a.display.barHeight+Ha(a)+"px"}function mf(a){var b=a.display,d=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=Md(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=c+"px",g=0;g<d.length;g++)if(!d[g].hidden){a.options.fixedGutter&&(d[g].gutter&&(d[g].gutter.style.left=f),d[g].gutterBackground&&(d[g].gutterBackground.style.left=f));var h=d[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=
c+e+"px")}}function rf(a){if(!a.options.lineNumbers)return!1;var b=a.doc;b=qd(a.options,b.first+b.size-1);var d=a.display;if(b.length!=d.lineNumChars){var c=d.measure.appendChild(v("div",[v("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=c.firstChild.offsetWidth;c=c.offsetWidth-e;d.lineGutter.style.width="";d.lineNumInnerWidth=Math.max(e,d.lineGutter.offsetWidth-c)+1;d.lineNumWidth=d.lineNumInnerWidth+c;d.lineNumChars=d.lineNumInnerWidth?b.length:-1;d.lineGutter.style.width=d.lineNumWidth+
"px";Xd(a.display);return!0}return!1}function Yd(a,b){for(var d=[],c=!1,e=0;e<a.length;e++){var f=a[e],g=null;"string"!=typeof f&&(g=f.style,f=f.className);if("CodeMirror-linenumbers"==f)if(b)c=!0;else continue;d.push({className:f,style:g})}b&&!c&&d.push({className:"CodeMirror-linenumbers",style:null});return d}function sf(a){var b=a.gutters,d=a.gutterSpecs;E(b);a.lineGutter=null;for(var c=0;c<d.length;++c){var e=d[c],f=e.className;e=e.style;var g=b.appendChild(v("div",null,"CodeMirror-gutter "+f));
e&&(g.style.cssText=e);"CodeMirror-linenumbers"==f&&(a.lineGutter=g,g.style.width=(a.lineNumWidth||1)+"px")}b.style.display=d.length?"":"none";Xd(a)}function $b(a){sf(a.display);ma(a);mf(a)}function Yg(a,b,d,c){this.input=d;this.scrollbarFiller=v("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=v("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=M("div",null,"CodeMirror-code");
this.selectionDiv=v("div",null,null,"position: relative; z-index: 1");this.cursorDiv=v("div",null,"CodeMirror-cursors");this.measure=v("div",null,"CodeMirror-measure");this.lineMeasure=v("div",null,"CodeMirror-measure");this.lineSpace=M("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var e=M("div",[this.lineSpace],"CodeMirror-lines");this.mover=v("div",[e],null,"position: relative");this.sizer=v("div",[this.mover],"CodeMirror-sizer");
this.sizerWidth=null;this.heightForcer=v("div",null,null,"position: absolute; height: 50px; width: 1px;");this.gutters=v("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=v("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=v("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");Qa&&105<=tf&&(this.wrapper.style.clipPath="inset(0px)");this.wrapper.setAttribute("translate","no");G&&8>
T&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);fa||Ma&&ac||(this.scroller.draggable=!0);a&&(a.appendChild?a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=
this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;this.gutterSpecs=Yd(c.gutters,c.lineNumbers);sf(this);d.init(this)}function uf(a){var b=a.wheelDeltaX,d=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==d&&a.detail&&a.axis==a.VERTICAL_AXIS?
d=a.detail:null==d&&(d=a.wheelDelta);return{x:b,y:d}}function Zg(a){a=uf(a);a.x*=Na;a.y*=Na;return a}function vf(a,b){Qa&&102==tf&&(null==a.display.chromeScrollHack?a.display.sizer.style.pointerEvents="none":clearTimeout(a.display.chromeScrollHack),a.display.chromeScrollHack=setTimeout(function(){a.display.chromeScrollHack=null;a.display.sizer.style.pointerEvents=""},100));var d=uf(b),c=d.x;d=d.y;var e=Na;0===b.deltaMode&&(c=b.deltaX,d=b.deltaY,e=1);var f=a.display,g=f.scroller,h=g.scrollWidth>g.clientWidth,
k=g.scrollHeight>g.clientHeight;if(c&&h||d&&k){if(d&&ya&&fa){h=b.target;var l=f.view;a:for(;h!=g;h=h.parentNode)for(var m=0;m<l.length;m++)if(l[m].node==h){a.display.currentWheelTarget=h;break a}}!c||Ma||Ca||null==e?(d&&null!=e&&(e*=d,k=a.doc.scrollTop,h=k+f.wrapper.clientHeight,0>e?k=Math.max(0,k+e-50):h=Math.min(a.doc.height,h+e+50),Ud(a,{top:k,bottom:h})),20>Qc&&0!==b.deltaMode&&(null==f.wheelStartX?(f.wheelStartX=g.scrollLeft,f.wheelStartY=g.scrollTop,f.wheelDX=c,f.wheelDY=d,setTimeout(function(){if(null!=
f.wheelStartX){var n=g.scrollLeft-f.wheelStartX,p=g.scrollTop-f.wheelStartY;n=p&&f.wheelDY&&p/f.wheelDY||n&&f.wheelDX&&n/f.wheelDX;f.wheelStartX=f.wheelStartY=null;n&&(Na=(Na*Qc+n)/(Qc+1),++Qc)}},200)):(f.wheelDX+=c,f.wheelDY+=d))):(d&&k&&Xb(a,Math.max(0,g.scrollTop+d*e)),kb(a,Math.max(0,g.scrollLeft+c*e)),(!d||d&&k)&&la(b),f.wheelStartX=null)}}function Da(a,b,d){a=a&&a.options.selectionsMayTouch;d=b[d];b.sort(function(k,l){return B(k.from(),l.from())});d=ea(b,d);for(var c=1;c<b.length;c++){var e=
b[c],f=b[c-1],g=B(f.to(),e.from());if(a&&!e.empty()?0<g:0<=g){g=Bc(f.from(),e.from());var h=Ac(f.to(),e.to());e=f.empty()?e.from()==e.head:f.from()==f.head;c<=d&&--d;b.splice(--c,2,new I(e?h:g,e?g:h))}}return new va(b,d)}function Oa(a,b){return new va([new I(a,b||a)],0)}function Ta(a){return a.text?t(a.from.line+a.text.length-1,J(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function wf(a,b){if(0>B(a,b.from))return a;if(0>=B(a,b.to))return Ta(b);var d=a.line+b.text.length-(b.to.line-b.from.line)-
1,c=a.ch;a.line==b.to.line&&(c+=Ta(b).ch-b.to.ch);return t(d,c)}function Zd(a,b){for(var d=[],c=0;c<a.sel.ranges.length;c++){var e=a.sel.ranges[c];d.push(new I(wf(e.anchor,b),wf(e.head,b)))}return Da(a.cm,d,a.sel.primIndex)}function xf(a,b,d){return a.line==b.line?t(d.line,a.ch-b.ch+d.ch):t(d.line+(a.line-b.line),a.ch)}function $d(a){a.doc.mode=nd(a.options,a.doc.modeOption);bc(a)}function bc(a){a.doc.iter(function(b){b.stateAfter&&(b.stateAfter=null);b.styles&&(b.styles=null)});a.doc.modeFrontier=
a.doc.highlightFrontier=a.doc.first;Yb(a,100);a.state.modeGen++;a.curOp&&ma(a)}function yf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==J(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function ae(a,b,d,c){function e(r,u,A){r.text=u;r.stateAfter&&(r.stateAfter=null);r.styles&&(r.styles=null);null!=r.order&&(r.order=null);Ge(r);He(r,A);u=c?c(r):1;u!=r.height&&Ea(r,u);aa(r,"change",r,b)}function f(r,u){for(var A=[];r<u;++r)A.push(new zb(k[r],d?d[r]:null,c));return A}var g=b.from,h=b.to,k=b.text,
l=w(a,g.line),m=w(a,h.line),n=J(k),p=d?d[k.length-1]:null,q=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-k.length)):yf(a,b)?(h=f(0,k.length-1),e(m,m.text,p),q&&a.remove(g.line,q),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+n+l.text.slice(h.ch),p):(q=f(1,k.length-1),q.push(new zb(n+l.text.slice(h.ch),p,c)),e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),a.insert(g.line+1,q)):1==k.length?(e(l,l.text.slice(0,g.ch)+k[0]+m.text.slice(h.ch),d?d[0]:null),
a.remove(g.line+1,q)):(e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),e(m,n+m.text.slice(h.ch),p),p=f(1,k.length-1),1<q&&a.remove(g.line+1,q-1),a.insert(g.line+1,p));aa(a,"change",a,b)}function Ua(a,b,d){function c(e,f,g){if(e.linked)for(var h=0;h<e.linked.length;++h){var k=e.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!d||l)b(k.doc,l),c(k.doc,e,l)}}}c(a,null,!0)}function zf(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;Nd(a);$d(a);Af(a);a.options.direction=b.direction;
a.options.lineWrapping||zd(a);a.options.mode=b.modeOption;ma(a)}function Af(a){("rtl"==a.doc.direction?Ya:jb)(a.display.lineDiv,"CodeMirror-rtl")}function $g(a){ra(a,function(){Af(a);ma(a)})}function Rc(a){this.done=[];this.undone=[];this.undoDepth=a?a.undoDepth:Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a?a.maxGeneration:1}function be(a,b){var d={from:sd(b.from),to:Ta(b),text:ab(a,b.from,b.to)};
Bf(a,d,b.from.line,b.to.line+1);Ua(a,function(c){return Bf(c,d,b.from.line,b.to.line+1)},!0);return d}function Cf(a){for(;a.length;)if(J(a).ranges)a.pop();else break}function Df(a,b,d,c){var e=a.history;e.undone.length=0;var f=+new Date,g;if(g=e.lastOp==c||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&e.lastModTime>f-(a.cm?a.cm.options.historyEventDelay:500)||"*"==b.origin.charAt(0))){if(e.lastOp==c){Cf(e.done);var h=J(e.done)}else e.done.length&&!J(e.done).ranges?h=J(e.done):1<e.done.length&&
!e.done[e.done.length-2].ranges?(e.done.pop(),h=J(e.done)):h=void 0;g=h}if(g){var k=J(h.changes);0==B(b.from,b.to)&&0==B(b.from,k.to)?k.to=Ta(b):h.changes.push(be(a,b))}else for((h=J(e.done))&&h.ranges||Sc(a.sel,e.done),h={changes:[be(a,b)],generation:e.generation},e.done.push(h);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(d);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=c;e.lastOrigin=e.lastSelOrigin=b.origin;k||W(a,"historyAdded")}
function Sc(a,b){var d=J(b);d&&d.ranges&&d.equals(a)||b.push(a)}function Bf(a,b,d,c){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,d),Math.min(a.first+a.size,c),function(g){g.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=g.markedSpans);++f})}function Ef(a,b){var d;if(d=b["spans_"+a.id]){for(var c=[],e=0;e<b.text.length;++e){var f=c,g=f.push;var h=void 0;var k=d[e];if(k){for(var l=0;l<k.length;++l)k[l].marker.explicitlyCleared?h||(h=k.slice(0,l)):h&&h.push(k[l]);h=h?h.length?h:null:k}else h=null;
g.call(f,h)}d=c}else d=null;a=vd(a,b);if(!d)return a;if(!a)return d;for(b=0;b<d.length;++b)if(c=d[b],e=a[b],c&&e)a:for(f=0;f<e.length;++f){g=e[f];for(h=0;h<c.length;++h)if(c[h].marker==g.marker)continue a;c.push(g)}else e&&(d[b]=e);return d}function Ab(a,b,d){for(var c=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)c.push(d?va.prototype.deepCopy.call(f):f);else{f=f.changes;var g=[];c.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=
m.match(/^spans_(\d+)$/))&&-1<ea(b,Number(l[1]))&&(J(g)[m]=k[m],delete k[m])}}}return c}function ce(a,b,d,c){return c?(a=a.anchor,d&&(c=0>B(b,a),c!=0>B(d,a)?(a=b,b=d):c!=0>B(b,d)&&(b=d)),new I(a,b)):new I(d||b,b)}function Tc(a,b,d,c,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));da(a,new va([ce(a.sel.primary(),b,d,e)],0),c)}function Ff(a,b,d){for(var c=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)c[f]=ce(a.sel.ranges[f],b[f],null,e);b=Da(a.cm,c,a.sel.primIndex);da(a,
b,d)}function de(a,b,d,c){var e=a.sel.ranges.slice(0);e[b]=d;da(a,Da(a.cm,e,a.sel.primIndex),c)}function ah(a,b,d){d={ranges:b.ranges,update:function(c){this.ranges=[];for(var e=0;e<c.length;e++)this.ranges[e]=new I(C(a,c[e].anchor),C(a,c[e].head))},origin:d&&d.origin};W(a,"beforeSelectionChange",a,d);a.cm&&W(a.cm,"beforeSelectionChange",a.cm,d);return d.ranges!=b.ranges?Da(a.cm,d.ranges,d.ranges.length-1):b}function Gf(a,b,d){var c=a.history.done,e=J(c);e&&e.ranges?(c[c.length-1]=b,Uc(a,b,d)):da(a,
b,d)}function da(a,b,d){Uc(a,b,d);b=a.sel;var c=a.cm?a.cm.curOp.id:NaN,e=a.history,f=d&&d.origin,g;if(!(g=c==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=J(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Sc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=c;
d&&!1!==d.clearRedo&&Cf(e.undone)}function Uc(a,b,d){if(xa(a,"beforeSelectionChange")||a.cm&&xa(a.cm,"beforeSelectionChange"))b=ah(a,b,d);var c=d&&d.bias||(0>B(b.primary().head,a.sel.primary().head)?-1:1);Hf(a,If(a,b,c,!0));d&&!1===d.scroll||!a.cm||"nocursor"==a.cm.getOption("readOnly")||xb(a.cm)}function Hf(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=1,a.cm.curOp.selectionChanged=!0,te(a.cm)),aa(a,"cursorActivity",a))}function Jf(a){Hf(a,If(a,a.sel,null,!1))}function If(a,b,d,c){for(var e,
f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==a.sel.ranges.length&&a.sel.ranges[f],k=Vc(a,g.anchor,h&&h.anchor,d,c);h=g.head==g.anchor?k:Vc(a,g.head,h&&h.head,d,c);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new I(k,h)}return e?Da(a.cm,e,b.primIndex):b}function Bb(a,b,d,c,e){var f=w(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker,l="selectLeft"in k?!k.selectLeft:k.inclusiveLeft,m="selectRight"in k?!k.selectRight:
k.inclusiveRight;if((null==h.from||(l?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(m?h.to>=b.ch:h.to>b.ch))){if(e&&(W(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;continue}else break;if(k.atomic){if(d){g=k.find(0>c?1:-1);h=void 0;if(0>c?m:l)g=Kf(a,g,-c,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=B(g,d))&&(0>c?0>h:0<h))return Bb(a,g,b,c,e)}d=k.find(0>c?-1:1);if(0>c?l:m)d=Kf(a,d,c,d.line==b.line?f:null);return d?Bb(a,d,b,c,e):null}}}return b}function Vc(a,b,d,c,e){c=c||1;b=
Bb(a,b,d,c,e)||!e&&Bb(a,b,d,c,!0)||Bb(a,b,d,-c,e)||!e&&Bb(a,b,d,-c,!0);return b?b:(a.cantEdit=!0,t(a.first,0))}function Kf(a,b,d,c){return 0>d&&0==b.ch?b.line>a.first?C(a,t(b.line-1)):null:0<d&&b.ch==(c||w(a,b.line)).text.length?b.line<a.first+a.size-1?t(b.line+1,0):null:new t(b.line,b.ch+d)}function Lf(a){a.setSelection(t(a.firstLine(),0),t(a.lastLine()),Ia)}function Mf(a,b,d){var c={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return c.canceled=!0}};d&&(c.update=
function(e,f,g,h){e&&(c.from=C(a,e));f&&(c.to=C(a,f));g&&(c.text=g);void 0!==h&&(c.origin=h)});W(a,"beforeChange",a,c);a.cm&&W(a.cm,"beforeChange",a.cm,c);return c.canceled?(a.cm&&(a.cm.curOp.updateInput=2),null):{from:c.from,to:c.to,text:c.text,origin:c.origin}}function Cb(a,b,d){if(a.cm){if(!a.cm.curOp)return ba(a.cm,Cb)(a,b,d);if(a.cm.state.suppressEdits)return}if(xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange"))if(b=Mf(a,b,!0),!b)return;if(d=Nf&&!d&&Hg(a,b.from,b.to))for(var c=d.length-1;0<=
c;--c)Of(a,{from:d[c].from,to:d[c].to,text:c?[""]:b.text,origin:b.origin});else Of(a,b)}function Of(a,b){if(1!=b.text.length||""!=b.text[0]||0!=B(b.from,b.to)){var d=Zd(a,b);Df(a,b,d,a.cm?a.cm.curOp.id:NaN);cc(a,b,d,vd(a,b));var c=[];Ua(a,function(e,f){f||-1!=ea(c,e.history)||(Pf(e.history,b),c.push(e.history));cc(e,b,null,vd(e,b))})}}function Wc(a,b,d){var c=a.cm&&a.cm.state.suppressEdits;if(!c||d){for(var e=a.history,f,g=a.sel,h="undo"==b?e.done:e.undone,k="undo"==b?e.undone:e.done,l=0;l<h.length&&
(f=h[l],d?!f.ranges||f.equals(a.sel):f.ranges);l++);if(l!=h.length){for(e.lastOrigin=e.lastSelOrigin=null;;)if(f=h.pop(),f.ranges){Sc(f,k);if(d&&!f.equals(a.sel)){da(a,f,{clearRedo:!1});return}g=f}else{if(c){h.push(f);return}break}var m=[];Sc(g,k);k.push({changes:m,generation:e.generation});e.generation=f.generation||++e.maxGeneration;var n=xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange");d=function(p){var q=f.changes[p];q.origin=b;if(n&&!Mf(a,q,!1))return h.length=0,{};m.push(be(a,q));var r=p?
Zd(a,q):J(h);cc(a,q,r,Ef(a,q));!p&&a.cm&&a.cm.scrollIntoView({from:q.from,to:Ta(q)});var u=[];Ua(a,function(A,Y){Y||-1!=ea(u,A.history)||(Pf(A.history,q),u.push(A.history));cc(A,q,null,Ef(A,q))})};for(c=f.changes.length-1;0<=c;--c)if(e=d(c))return e.v}}}function Qf(a,b){if(0!=b&&(a.first+=b,a.sel=new va(wc(a.sel.ranges,function(e){return new I(t(e.anchor.line+b,e.anchor.ch),t(e.head.line+b,e.head.ch))}),a.sel.primIndex),a.cm)){ma(a.cm,a.first,a.first-b,b);for(var d=a.cm.display,c=d.viewFrom;c<d.viewTo;c++)Sa(a.cm,
c,"gutter")}}function cc(a,b,d,c){if(a.cm&&!a.cm.curOp)return ba(a.cm,cc)(a,b,d,c);if(b.to.line<a.first)Qf(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Qf(a,e);b={from:t(a.first,0),to:t(b.to.line+e,b.to.ch),text:[J(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:t(e,w(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=ab(a,b.from,b.to);d||(d=Zd(a,b));a.cm?bh(a.cm,
b,c):ae(a,b,c);Uc(a,d,Ia);a.cantEdit&&Vc(a,t(a.firstLine(),0))&&(a.cantEdit=!1)}}function bh(a,b,d){var c=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=N(za(w(c,f.line))),c.iter(k,g.line+1,function(l){if(l==e.maxLine)return h=!0}));-1<c.sel.contains(b.from,b.to)&&te(a);ae(c,b,d,ef(a));a.options.lineWrapping||(c.iter(k,f.line+b.text.length,function(l){var m=Ec(l);m>e.maxLineLength&&(e.maxLine=l,e.maxLineLength=m,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));
Gg(c,f.line);Yb(a,400);d=b.text.length-(g.line-f.line)-1;b.full?ma(a):f.line!=g.line||1!=b.text.length||yf(a.doc,b)?ma(a,f.line,g.line+1,d):Sa(a,f.line,"text");d=xa(a,"changes");if((c=xa(a,"change"))||d)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},c&&aa(a,"change",a,b),d&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function Db(a,b,d,c,e){c||(c=d);0>B(c,d)&&(c=[c,d],d=c[0],c=c[1]);"string"==typeof b&&(b=a.splitLines(b));Cb(a,{from:d,to:c,
text:b,origin:e})}function Rf(a,b,d,c){d<a.line?a.line+=c:b<a.line&&(a.line=b,a.ch=0)}function Sf(a,b,d,c){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)Rf(f.ranges[g].anchor,b,d,c),Rf(f.ranges[g].head,b,d,c);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(d<k.from.line)k.from=t(k.from.line+c,k.from.ch),k.to=t(k.to.line+c,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Pf(a,
b){var d=b.from.line,c=b.to.line;b=b.text.length-(c-d)-1;Sf(a.done,d,c,b);Sf(a.undone,d,c,b)}function dc(a,b,d,c){var e=b,f=b;"number"==typeof b?f=w(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=N(b);if(null==e)return null;c(f,e)&&a.cm&&Sa(a.cm,e,d);return f}function ec(a){this.lines=a;this.parent=null;for(var b=0,d=0;d<a.length;++d)a[d].parent=this,b+=a[d].height;this.height=b}function fc(a){this.children=a;for(var b=0,d=0,c=0;c<a.length;++c){var e=a[c];b+=e.chunkSize();d+=e.height;e.parent=
this}this.size=b;this.height=d;this.parent=null}function ch(a,b,d,c){var e=new gc(a,d,c),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);dc(a,b,"widget",function(g){var h=g.widgets||(g.widgets=[]);null==e.insertAt?h.push(e):h.splice(Math.min(h.length,Math.max(0,e.insertAt)),0,e);e.line=g;f&&!Pa(a,g)&&(h=Ga(g)<a.scrollTop,Ea(g,g.height+Tb(e)),h&&Nc(f,e.height),f.curOp.forceUpdate=!0);return!0});f&&aa(f,"lineWidgetAdded",f,e,"number"==typeof b?b:N(b));return e}function Eb(a,b,d,c,e){if(c&&c.shared)return dh(a,
b,d,c,e);if(a.cm&&!a.cm.curOp)return ba(a.cm,Eb)(a,b,d,c,e);var f=new Va(a,e);e=B(b,d);c&&Za(c,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=M("span",[f.replacedWith],"CodeMirror-widget"),c.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events","true"),c.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(Ie(a,b.line,b,d,f)||b.line!=d.line&&Ie(a,d.line,b,d,f))throw Error("Inserting collapsed marker partially overlapping an existing one");
Ka=!0}f.addToHistory&&Df(a,{from:b,to:d,origin:"markText"},a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,d.line+1,function(l){h&&f.collapsed&&!h.options.lineWrapping&&za(l)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&Ea(l,0);var m=new Dc(f,g==b.line?b.ch:null,g==d.line?d.ch:null),n=a.cm&&a.cm.curOp;(n=n&&window.WeakSet&&(n.markedSpans||(n.markedSpans=new WeakSet)))&&l.markedSpans&&n.has(l.markedSpans)?l.markedSpans.push(m):(l.markedSpans=l.markedSpans?l.markedSpans.concat([m]):[m],n&&n.add(l.markedSpans));
m.marker.attachLine(l);++g});f.collapsed&&a.iter(b.line,d.line+1,function(l){Pa(a,l)&&Ea(l,0)});f.clearOnEnter&&z(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(Nf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Tf,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)ma(h,b.line,d.line+1);else if(f.className||f.startStyle||f.endStyle||f.css||f.attributes||f.title)for(c=b.line;c<=d.line;c++)Sa(h,c,"text");f.atomic&&Jf(h.doc);
aa(h,"markerAdded",h,f)}return f}function dh(a,b,d,c,e){c=Za(c);c.shared=!1;var f=[Eb(a,b,d,c,e)],g=f[0],h=c.widgetNode;Ua(a,function(k){h&&(c.widgetNode=h.cloneNode(!0));f.push(Eb(k,C(k,b),C(k,d),c,e));for(var l=0;l<k.linked.length;++l)if(k.linked[l].isParent)return;g=J(f)});return new hc(f,g)}function Uf(a){return a.findMarks(t(a.first,0),a.clipPos(t(a.lastLine())),function(b){return b.parent})}function eh(a){for(var b=function(c){c=a[c];var e=[c.primary.doc];Ua(c.primary.doc,function(h){return e.push(h)});
for(var f=0;f<c.markers.length;f++){var g=c.markers[f];-1==ea(e,g.doc)&&(g.parent=null,c.markers.splice(f--,1))}},d=0;d<a.length;d++)b(d)}function fh(a){var b=this;Vf(b);if(!Z(b,a)&&!La(b.display,a)){la(a);G&&(Wf=+new Date);var d=gb(b,a,!0),c=a.dataTransfer.files;if(d&&!b.isReadOnly())if(c&&c.length&&window.FileReader&&window.File)for(var e=c.length,f=Array(e),g=0,h=function(){++g==e&&ba(b,function(){d=C(b.doc,d);var m={from:d,to:d,text:b.doc.splitLines(f.filter(function(n){return null!=n}).join(b.doc.lineSeparator())),
origin:"paste"};Cb(b.doc,m);Gf(b.doc,Oa(C(b.doc,d),C(b.doc,Ta(m))))})()},k=function(m,n){if(b.options.allowDropFileTypes&&-1==ea(b.options.allowDropFileTypes,m.type))h();else{var p=new FileReader;p.onerror=function(){return h()};p.onload=function(){var q=p.result;/[\x00-\x08\x0e-\x1f]{2}/.test(q)||(f[n]=q);h()};p.readAsText(m)}},l=0;l<c.length;l++)k(c[l],l);else if(b.state.draggingText&&-1<b.doc.sel.contains(d))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(k=
a.dataTransfer.getData("Text")){b.state.draggingText&&!b.state.draggingText.copy&&(l=b.listSelections());Uc(b.doc,Oa(d,d));if(l)for(c=0;c<l.length;++c)Db(b.doc,"",l[c].anchor,l[c].head,"drag");b.replaceSelection(k,"around","paste");b.display.input.focus()}}catch(m){}}}function Vf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Xf(a){if(document.getElementsByClassName){for(var b=document.getElementsByClassName("CodeMirror"),d=[],c=
0;c<b.length;c++){var e=b[c].CodeMirror;e&&d.push(e)}d.length&&d[0].operation(function(){for(var f=0;f<d.length;f++)a(d[f])})}}function gh(){var a;z(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null;Xf(hh)},100))});z(window,"blur",function(){return Xf(wb)})}function hh(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null;b.scrollbarsClipped=!1;a.setSize()}function ih(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var d,c,e,f,g=0;g<b.length-1;g++){var h=b[g];
if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))d=!0;else if(/^(c|ctrl|control)$/i.test(h))c=!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}d&&(a="Alt-"+a);c&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function jh(a){var b={},d;for(d in a)if(a.hasOwnProperty(d)){var c=a[d];if(!/^(name|fallthrough|(de|at)tach)$/.test(d)){if("..."!=c)for(var e=wc(d.split(" "),ih),f=0;f<e.length;f++){if(f==e.length-1){var g=e.join(" ");var h=c}else g=
e.slice(0,f+1).join(" "),h="...";var k=b[g];if(!k)b[g]=h;else if(k!=h)throw Error("Inconsistent bindings for "+g);}delete a[d]}}for(var l in b)a[l]=b[l];return a}function Fb(a,b,d,c){b=Xc(b);var e=b.call?b.call(a,c):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&d(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Fb(a,b.fallthrough,d,c);for(e=0;e<b.fallthrough.length;e++){var f=Fb(a,b.fallthrough[e],d,c);if(f)return f}}}
function Yf(a){a="string"==typeof a?a:Wa[a.keyCode];return"Ctrl"==a||"Alt"==a||"Shift"==a||"Mod"==a}function Zf(a,b,d){var c=a;b.altKey&&"Alt"!=c&&(a="Alt-"+a);($f?b.metaKey:b.ctrlKey)&&"Ctrl"!=c&&(a="Ctrl-"+a);($f?b.ctrlKey:b.metaKey)&&"Mod"!=c&&(a="Cmd-"+a);!d&&b.shiftKey&&"Shift"!=c&&(a="Shift-"+a);return a}function ag(a,b){if(Ca&&34==a.keyCode&&a["char"])return!1;var d=Wa[a.keyCode];if(null==d||a.altGraphKey)return!1;3==a.keyCode&&a.code&&(d=a.code);return Zf(d,a,b)}function Xc(a){return"string"==
typeof a?ic[a]:a}function Gb(a,b){for(var d=a.doc.sel.ranges,c=[],e=0;e<d.length;e++){for(var f=b(d[e]);c.length&&0>=B(f.from,J(c).to);){var g=c.pop();if(0>B(g.from,f.from)){f.from=g.from;break}}c.push(f)}ra(a,function(){for(var h=c.length-1;0<=h;h--)Db(a.doc,"",c[h].from,c[h].to,"+delete");xb(a)})}function ee(a,b,d){b=se(a.text,b+d,d);return 0>b||b>a.text.length?null:b}function fe(a,b,d){a=ee(a,b.ch,d);return null==a?null:new t(b.line,a,0>d?"after":"before")}function ge(a,b,d,c,e){if(a&&("rtl"==
b.doc.direction&&(e=-e),a=Ja(d,b.doc.direction))){a=0>e?J(a):a[0];var f=0>e==(1==a.level)?"after":"before";if(0<a.level||"rtl"==b.doc.direction){var g=eb(b,d);var h=0>e?d.text.length-1:0;var k=Aa(b,g,h).top;h=Jb(function(l){return Aa(b,g,l).top==k},0>e==(1==a.level)?a.from:a.to-1,h);"before"==f&&(h=ee(d,h,1))}else h=0>e?a.to:a.from;return new t(c,h,f)}return new t(c,0>e?d.text.length:0,0>e?"before":"after")}function kh(a,b,d,c){var e=Ja(b,a.doc.direction);if(!e)return fe(b,d,c);d.ch>=b.text.length?
(d.ch=b.text.length,d.sticky="before"):0>=d.ch&&(d.ch=0,d.sticky="after");var f=Kb(e,d.ch,d.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<c?g.to>d.ch:g.from<d.ch))return fe(b,d,c);var h=function(q,r){return ee(b,q instanceof t?q.ch:q,r)},k,l=function(q){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||eb(a,b);return df(a,b,k,q)},m=l("before"==d.sticky?h(d,-1):d.ch);if("rtl"==a.doc.direction||1==g.level){var n=1==g.level==0>c,p=h(d,n?1:-1);if(null!=p&&(n?p<=g.to&&p<=m.end:
p>=g.from&&p>=m.begin))return new t(d.line,p,n?"before":"after")}g=function(q,r,u){for(var A=function(K,Q){return Q?new t(d.line,h(K,1),"before"):new t(d.line,K,"after")};0<=q&&q<e.length;q+=r){var Y=e[q],x=0<r==(1!=Y.level),P=x?u.begin:h(u.end,-1);if(Y.from<=P&&P<Y.to)return A(P,x);P=x?Y.from:h(Y.to,-1);if(u.begin<=P&&P<u.end)return A(P,x)}};if(f=g(f+c,c,m))return f;m=0<c?m.end:h(m.begin,-1);return null==m||0<c&&m==b.text.length||!(f=g(0<c?0:e.length-1,c,l(m)))?null:f}function bg(a,b){var d=w(a.doc,
b),c=za(d);c!=d&&(b=N(c));return ge(!0,a,c,b,1)}function cg(a,b){var d=bg(a,b.line),c=w(a.doc,d.line);a=Ja(c,a.doc.direction);return a&&0!=a[0].level?d:(c=Math.max(d.ch,c.text.search(/\S/)),t(d.line,b.line==d.line&&b.ch<=c&&b.ch?0:c,d.sticky))}function Yc(a,b,d){if("string"==typeof b&&(b=jc[b],!b))return!1;a.display.input.ensurePolled();var c=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d&&(a.display.shift=!1),e=b(a)!=Zc}finally{a.display.shift=c,a.state.suppressEdits=!1}return e}
function kc(a,b,d,c){var e=a.state.keySeq;if(e){if(Yf(b))return"handled";/'$/.test(b)?a.state.keySeq=null:lh.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});if(dg(a,e+" "+b,d,c))return!0}return dg(a,b,d,c)}function dg(a,b,d,c){a:{for(var e=0;e<a.state.keyMaps.length;e++){var f=Fb(b,a.state.keyMaps[e],c,a);if(f){c=f;break a}}c=a.options.extraKeys&&Fb(b,a.options.extraKeys,c,a)||Fb(b,a.options.keyMap,c,a)}"multi"==c&&(a.state.keySeq=b);"handled"==c&&aa(a,"keyHandled",
a,b,d);if("handled"==c||"multi"==c)la(d),Qd(a);return!!c}function eg(a,b){var d=ag(b,!0);return d?b.shiftKey&&!a.state.keySeq?kc(a,"Shift-"+d,b,function(c){return Yc(a,c,!0)})||kc(a,d,b,function(c){if("string"==typeof c?/^go[A-Z]/.test(c):c.motion)return Yc(a,c)}):kc(a,d,b,function(c){return Yc(a,c)}):!1}function mh(a,b,d){return kc(a,"'"+d+"'",b,function(c){return Yc(a,c,!0)})}function fg(a){if(!a.target||a.target==this.display.input.getField())if(this.curOp.focus=ka(qa(this)),!Z(this,a)){G&&11>
T&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var d=eg(this,a);Ca&&(he=d?b:null,!d&&88==b&&!nh&&(ya?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));Ma&&!ya&&!d&&46==b&&a.shiftKey&&!a.ctrlKey&&document.execCommand&&document.execCommand("cut");18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||oh(this)}}function oh(a){function b(c){18!=c.keyCode&&c.altKey||(jb(d,"CodeMirror-crosshair"),ta(document,"keyup",b),ta(document,"mouseover",
b))}var d=a.display.lineDiv;Ya(d,"CodeMirror-crosshair");z(document,"keyup",b);z(document,"mouseover",b)}function gg(a){16==a.keyCode&&(this.doc.sel.shift=!1);Z(this,a)}function hg(a){if(!(a.target&&a.target!=this.display.input.getField()||La(this.display,a)||Z(this,a)||a.ctrlKey&&!a.altKey||ya&&a.metaKey)){var b=a.keyCode,d=a.charCode;if(Ca&&b==he)he=null,la(a);else if(!Ca||a.which&&!(10>a.which)||!eg(this,a))if(b=String.fromCharCode(null==d?b:d),"\b"!=b&&!mh(this,a,b))this.display.input.onKeyPress(a)}}
function ph(a,b){var d=+new Date;if(lc&&lc.compare(d,a,b))return mc=lc=null,"triple";if(mc&&mc.compare(d,a,b))return lc=new ie(d,a,b),mc=null,"double";mc=new ie(d,a,b);lc=null;return"single"}function ig(a){var b=this.display;if(!(Z(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,La(b,a))fa||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!$c(this,a,"gutterClick",!0)){var d=gb(this,a),c=ve(a),e=d?ph(d,c):"single";
qa(this).defaultView.focus();1==c&&this.state.selectingText&&this.state.selectingText(a);if(!d||!qh(this,c,d,e,a))if(1==c)d?rh(this,d,e,a):(a.target||a.srcElement)==b.scroller&&la(a);else if(2==c)d&&Tc(this.doc,d),setTimeout(function(){return b.input.focus()},20);else if(3==c)if(je)this.display.input.onContextMenu(a);else Sd(this)}}function qh(a,b,d,c,e){var f="Click";"double"==c?f="Double"+f:"triple"==c&&(f="Triple"+f);return kc(a,Zf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(g){"string"==
typeof g&&(g=jc[g]);if(!g)return!1;var h=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),h=g(a,d)!=Zc}finally{a.state.suppressEdits=!1}return h})}function rh(a,b,d,c){G?setTimeout(gd(hf,a),0):a.curOp.focus=ka(qa(a));var e=a.getOption("configureMouse");e=e?e(a,d,c):{};null==e.unit&&(e.unit=(sh?c.shiftKey&&c.metaKey:c.altKey)?"rectangle":"single"==d?"char":"double"==d?"word":"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||c.shiftKey;null==e.addNew&&(e.addNew=ya?c.metaKey:c.ctrlKey);
null==e.moveOnDrag&&(e.moveOnDrag=!(ya?c.altKey:c.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&th&&!a.isReadOnly()&&"single"==d&&-1<(g=f.contains(b))&&(0>B((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<B(g.to(),b)||0>b.xRel)?uh(a,c,b,e):vh(a,c,b,e)}function uh(a,b,d,c){var e=a.display,f=!1,g=ba(a,function(l){fa&&(e.scroller.draggable=!1);a.state.draggingText=!1;a.state.delayingBlurEvent&&(a.hasFocus()?a.state.delayingBlurEvent=!1:Sd(a));ta(e.wrapper.ownerDocument,"mouseup",g);ta(e.wrapper.ownerDocument,
"mousemove",h);ta(e.scroller,"dragstart",k);ta(e.scroller,"drop",g);f||(la(l),c.addNew||Tc(a.doc,d,null,null,c.extend),fa&&!ad||G&&9==T?setTimeout(function(){e.wrapper.ownerDocument.body.focus({preventScroll:!0});e.input.focus()},20):e.input.focus())}),h=function(l){f=f||10<=Math.abs(b.clientX-l.clientX)+Math.abs(b.clientY-l.clientY)},k=function(){return f=!0};fa&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!c.moveOnDrag;z(e.wrapper.ownerDocument,"mouseup",g);z(e.wrapper.ownerDocument,
"mousemove",h);z(e.scroller,"dragstart",k);z(e.scroller,"drop",g);a.state.delayingBlurEvent=!0;setTimeout(function(){return e.input.focus()},20);e.scroller.dragDrop&&e.scroller.dragDrop()}function jg(a,b,d){if("char"==d)return new I(b,b);if("word"==d)return a.findWordAt(b);if("line"==d)return new I(t(b.line,0),C(a.doc,t(b.line+1,0)));a=d(a,b);return new I(a.from,a.to)}function vh(a,b,d,c){function e(x){if(0!=B(q,x))if(q=x,"rectangle"==c.unit){var P=[],K=a.options.tabSize,Q=wa(w(k,d.line).text,d.ch,
K),S=wa(w(k,x.line).text,x.ch,K),F=Math.min(Q,S);Q=Math.max(Q,S);S=Math.min(d.line,x.line);for(var R=Math.min(a.lastLine(),Math.max(d.line,x.line));S<=R;S++){var H=w(k,S).text,L=hd(H,F,K);F==Q?P.push(new I(t(S,L),t(S,L))):H.length>L&&P.push(new I(t(S,L),t(S,hd(H,Q,K))))}P.length||P.push(new I(d,d));da(k,Da(a,l.ranges.slice(0,n).concat(P),n),{origin:"*mouse",scroll:!1});a.scrollIntoView(x)}else P=p,F=jg(a,x,c.unit),x=P.anchor,0<B(F.anchor,x)?(K=F.head,x=Bc(P.from(),F.anchor)):(K=F.anchor,x=Ac(P.to(),
F.head)),P=l.ranges.slice(0),P[n]=wh(a,new I(C(k,x),K)),da(k,Da(a,P,n),ke)}function f(x){var P=++u,K=gb(a,x,!0,"rectangle"==c.unit);if(K)if(0!=B(K,q)){a.curOp.focus=ka(qa(a));e(K);var Q=Mc(h,k);(K.line>=Q.to||K.line<Q.from)&&setTimeout(ba(a,function(){u==P&&f(x)}),150)}else{var S=x.clientY<r.top?-20:x.clientY>r.bottom?20:0;S&&setTimeout(ba(a,function(){u==P&&(h.scroller.scrollTop+=S,f(x))}),50)}}function g(x){a.state.selectingText=!1;u=Infinity;x&&(la(x),h.input.focus());ta(h.wrapper.ownerDocument,
"mousemove",A);ta(h.wrapper.ownerDocument,"mouseup",Y);k.history.lastSelOrigin=null}G&&Sd(a);var h=a.display,k=a.doc;la(b);var l=k.sel,m=l.ranges;if(c.addNew&&!c.extend){var n=k.sel.contains(d);var p=-1<n?m[n]:new I(d,d)}else p=k.sel.primary(),n=k.sel.primIndex;"rectangle"==c.unit?(c.addNew||(p=new I(d,d)),d=gb(a,b,!0,!0),n=-1):(b=jg(a,d,c.unit),p=c.extend?ce(p,b.anchor,b.head,c.extend):b);c.addNew?-1==n?(n=m.length,da(k,Da(a,m.concat([p]),n),{scroll:!1,origin:"*mouse"})):1<m.length&&m[n].empty()&&
"char"==c.unit&&!c.extend?(da(k,Da(a,m.slice(0,n).concat(m.slice(n+1)),0),{scroll:!1,origin:"*mouse"}),l=k.sel):de(k,n,p,ke):(n=0,da(k,new va([p],0),ke),l=k.sel);var q=d,r=h.wrapper.getBoundingClientRect(),u=0,A=ba(a,function(x){0!==x.buttons&&ve(x)?f(x):g(x)}),Y=ba(a,g);a.state.selectingText=Y;z(h.wrapper.ownerDocument,"mousemove",A);z(h.wrapper.ownerDocument,"mouseup",Y)}function wh(a,b){var d=b.anchor,c=b.head,e=w(a.doc,d.line);if(0==B(d,c)&&d.sticky==c.sticky)return b;e=Ja(e);if(!e)return b;var f=
Kb(e,d.ch,d.sticky),g=e[f];if(g.from!=d.ch&&g.to!=d.ch)return b;var h=f+(g.from==d.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;c.line!=d.line?a=0<(c.line-d.line)*("ltr"==a.doc.direction?1:-1):(a=Kb(e,c.ch,c.sticky),f=a-f||(c.ch-d.ch)*(1==g.level?-1:1),a=a==h-1||a==h?0>f:0<f);e=e[h+(a?-1:0)];e=(h=a==(1==e.level))?e.from:e.to;h=h?"after":"before";return d.ch==e&&d.sticky==h?b:new I(new t(d.line,e,h),c)}function $c(a,b,d,c){if(b.touches){var e=b.touches[0].clientX;var f=b.touches[0].clientY}else try{e=
b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;c&&la(b);c=a.display;var g=c.lineDiv.getBoundingClientRect();if(f>g.bottom||!xa(a,d))return ld(b);f-=g.top-c.viewOffset;for(g=0;g<a.display.gutterSpecs.length;++g){var h=c.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=e)return e=bb(a.doc,f),W(a,d,a,e,a.display.gutterSpecs[g].className,b),ld(b)}}function kg(a,b){var d;(d=La(a.display,b))||(d=xa(a,"gutterContextMenu")?$c(a,
b,"gutterContextMenu",!1):!1);if(!d&&!Z(a,b,"contextmenu")&&!je)a.display.input.onContextMenu(b)}function lg(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Ub(a)}function xh(a,b,d){!b!=!(d&&d!=Hb)&&(d=a.display.dragFunctions,b=b?z:ta,b(a.display.scroller,"dragstart",d.start),b(a.display.scroller,"dragenter",d.enter),b(a.display.scroller,"dragover",d.over),b(a.display.scroller,"dragleave",d.leave),b(a.display.scroller,
"drop",d.drop))}function yh(a){a.options.lineWrapping?(Ya(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(jb(a.display.wrapper,"CodeMirror-wrap"),zd(a));Nd(a);ma(a);Ub(a);setTimeout(function(){return yb(a)},100)}function U(a,b){var d=this;if(!(this instanceof U))return new U(a,b);this.options=b=b?Za(b):{};Za(mg,b,!1);var c=b.value;"string"==typeof c?c=new oa(c,b.mode,null,b.lineSeparator,b.direction):b.mode&&(c.modeOption=b.mode);this.doc=c;var e=
new U.inputStyles[b.inputStyle](this);a=this.display=new Yg(a,c,e,b);a.wrapper.CodeMirror=this;lg(this);b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");of(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Xa,keySeq:null,specialChars:null};b.autofocus&&!ac&&a.input.focus();G&&11>T&&setTimeout(function(){return d.display.input.reset(!0)},
20);zh(this);ng||(gh(),ng=!0);lb(this);this.curOp.forceUpdate=!0;zf(this,c);b.autofocus&&!ac||this.hasFocus()?setTimeout(function(){d.hasFocus()&&!d.state.focused&&Rd(d)},20):wb(this);for(var f in bd)if(bd.hasOwnProperty(f))bd[f](this,b[f],Hb);rf(this);b.finishInit&&b.finishInit(this);for(c=0;c<le.length;++c)le[c](this);mb(this);fa&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function zh(a){function b(){c.activeTouch&&(e=
setTimeout(function(){return c.activeTouch=null},1E3),f=c.activeTouch,f.end=+new Date)}function d(h,k){if(null==k.left)return!0;var l=k.left-h.left;h=k.top-h.top;return 400<l*l+h*h}var c=a.display;z(c.scroller,"mousedown",ba(a,ig));G&&11>T?z(c.scroller,"dblclick",ba(a,function(h){if(!Z(a,h)){var k=gb(a,h);!k||$c(a,h,"gutterClick",!0)||La(a.display,h)||(la(h),h=a.findWordAt(k),Tc(a.doc,h.anchor,h.head))}})):z(c.scroller,"dblclick",function(h){return Z(a,h)||la(h)});z(c.scroller,"contextmenu",function(h){return kg(a,
h)});z(c.input.getField(),"contextmenu",function(h){c.scroller.contains(h.target)||kg(a,h)});var e,f={end:0};z(c.scroller,"touchstart",function(h){var k;if(k=!Z(a,h))1!=h.touches.length?k=!1:(k=h.touches[0],k=1>=k.radiusX&&1>=k.radiusY),k=!k;k&&!$c(a,h,"gutterClick",!0)&&(c.input.ensurePolled(),clearTimeout(e),k=+new Date,c.activeTouch={start:k,moved:!1,prev:300>=k-f.end?f:null},1==h.touches.length&&(c.activeTouch.left=h.touches[0].pageX,c.activeTouch.top=h.touches[0].pageY))});z(c.scroller,"touchmove",
function(){c.activeTouch&&(c.activeTouch.moved=!0)});z(c.scroller,"touchend",function(h){var k=c.activeTouch;if(k&&!La(c,h)&&null!=k.left&&!k.moved&&300>new Date-k.start){var l=a.coordsChar(c.activeTouch,"page");k=!k.prev||d(k,k.prev)?new I(l,l):!k.prev.prev||d(k,k.prev.prev)?a.findWordAt(l):new I(t(l.line,0),C(a.doc,t(l.line+1,0)));a.setSelection(k.anchor,k.head);a.focus();la(h)}b()});z(c.scroller,"touchcancel",b);z(c.scroller,"scroll",function(){c.scroller.clientHeight&&(Xb(a,c.scroller.scrollTop),
kb(a,c.scroller.scrollLeft,!0),W(a,"scroll",a))});z(c.scroller,"mousewheel",function(h){return vf(a,h)});z(c.scroller,"DOMMouseScroll",function(h){return vf(a,h)});z(c.wrapper,"scroll",function(){return c.wrapper.scrollTop=c.wrapper.scrollLeft=0});c.dragFunctions={enter:function(h){Z(a,h)||Mb(h)},over:function(h){if(!Z(a,h)){var k=gb(a,h);if(k){var l=document.createDocumentFragment();Od(a,k,l);a.display.dragCursor||(a.display.dragCursor=v("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,
a.display.cursorDiv));D(a.display.dragCursor,l)}Mb(h)}},start:function(h){if(G&&(!a.state.draggingText||100>+new Date-Wf))Mb(h);else if(!Z(a,h)&&!La(a.display,h)&&(h.dataTransfer.setData("Text",a.getSelection()),h.dataTransfer.effectAllowed="copyMove",h.dataTransfer.setDragImage&&!ad)){var k=v("img",null,null,"position: fixed; left: 0; top: 0;");k.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Ca&&(k.width=k.height=1,a.display.wrapper.appendChild(k),k._top=k.offsetTop);
h.dataTransfer.setDragImage(k,0,0);Ca&&k.parentNode.removeChild(k)}},drop:ba(a,fh),leave:function(h){Z(a,h)||Vf(a)}};var g=c.input.getField();z(g,"keyup",function(h){return gg.call(a,h)});z(g,"keydown",ba(a,fg));z(g,"keypress",ba(a,hg));z(g,"focus",function(h){return Rd(a,h)});z(g,"blur",function(h){return wb(a,h)})}function nc(a,b,d,c){var e=a.doc,f;null==d&&(d="add");"smart"==d&&(e.mode.indent?f=Ob(a,b).state:d="prev");var g=a.options.tabSize,h=w(e,b),k=wa(h.text,null,g);h.stateAfter&&(h.stateAfter=
null);var l=h.text.match(/^\s*/)[0];if(!c&&!/\S/.test(h.text)){var m=0;d="not"}else if("smart"==d&&(m=e.mode.indent(f,h.text.slice(l.length),h.text),m==Zc||150<m)){if(!c)return;d="prev"}"prev"==d?m=b>e.first?wa(w(e,b-1).text,null,g):0:"add"==d?m=k+a.options.indentUnit:"subtract"==d?m=k-a.options.indentUnit:"number"==typeof d&&(m=k+d);m=Math.max(0,m);d="";c=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)c+=g,d+="\t";c<m&&(d+=id(m-c));if(d!=l)return Db(e,d,t(b,0),t(b,l.length),"+input"),
h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<l.length){b=t(b,l.length);de(e,g,new I(b,b));break}}function me(a,b,d,c,e){var f=a.doc;a.display.shift=!1;c||(c=f.sel);var g=+new Date-200,h="paste"==e||a.state.pasteIncoming>g,k=ne(b),l=null;if(h&&1<c.ranges.length)if(sa&&sa.text.join("\n")==b){if(0==c.ranges.length%sa.text.length){l=[];for(var m=0;m<sa.text.length;m++)l.push(f.splitLines(sa.text[m]))}}else k.length==c.ranges.length&&a.options.pasteLinesPerSelection&&
(l=wc(k,function(u){return[u]}));m=a.curOp.updateInput;for(var n=c.ranges.length-1;0<=n;n--){var p=c.ranges[n],q=p.from(),r=p.to();p.empty()&&(d&&0<d?q=t(q.line,q.ch-d):a.state.overwrite&&!h?r=t(r.line,Math.min(w(f,r.line).text.length,r.ch+J(k).length)):h&&sa&&sa.lineWise&&sa.text.join("\n")==k.join("\n")&&(q=r=t(q.line,0)));p={from:q,to:r,text:l?l[n%l.length]:k,origin:e||(h?"paste":a.state.cutIncoming>g?"cut":"+input")};Cb(a.doc,p);aa(a,"inputRead",a,p)}b&&!h&&og(a,b);xb(a);2>a.curOp.updateInput&&
(a.curOp.updateInput=m);a.curOp.typing=!0;a.state.pasteIncoming=a.state.cutIncoming=-1}function pg(a,b){var d=a.clipboardData&&a.clipboardData.getData("Text");if(d)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||!b.hasFocus()||ra(b,function(){return me(b,d,0,null,"paste")}),!0}function og(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var d=a.doc.sel,c=d.ranges.length-1;0<=c;c--){var e=d.ranges[c];if(!(100<e.head.ch||c&&d.ranges[c-1].head.line==e.head.line)){var f=a.getModeAt(e.head),
g=!1;if(f.electricChars)for(var h=0;h<f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=nc(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(w(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=nc(a,e.head.line,"smart"));g&&aa(a,"electricInput",a,e.head.line)}}}function qg(a){for(var b=[],d=[],c=0;c<a.doc.sel.ranges.length;c++){var e=a.doc.sel.ranges[c].head.line;e={anchor:t(e,0),head:t(e+1,0)};d.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,
ranges:d}}function rg(a,b,d,c){a.setAttribute("autocorrect",d?"":"off");a.setAttribute("autocapitalize",c?"":"off");a.setAttribute("spellcheck",!!b)}function sg(){var a=v("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),b=v("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");fa?a.style.width="1000px":a.setAttribute("wrap","off");oc&&(a.style.border="1px solid black");rg(a);return b}function oe(a,
b,d,c,e){function f(u){if("codepoint"==c){var A=k.text.charCodeAt(b.ch+(0<d?0:-1));A=isNaN(A)?null:new t(b.line,Math.max(0,Math.min(k.text.length,b.ch+d*((0<d?55296<=A&&56320>A:56320<=A&&57343>A)?2:1))),-d)}else A=e?kh(a.cm,k,b,d):fe(k,b,d);if(null==A){if(u=!u)u=b.line+l,u<a.first||u>=a.first+a.size?u=!1:(b=new t(u,b.ch,b.sticky),u=k=w(a,u));if(u)b=ge(e,a.cm,k,b.line,l);else return!1}else b=A;return!0}var g=b,h=d,k=w(a,b.line),l=e&&"rtl"==a.direction?-d:d;if("char"==c||"codepoint"==c)f();else if("column"==
c)f(!0);else if("word"==c||"group"==c)for(var m=null,n="group"==c,p=a.cm&&a.cm.getHelper(b,"wordChars"),q=!0;!(0>d)||f(!q);q=!1){var r=k.text.charAt(b.ch)||"\n";r=xc(r,p)?"w":n&&"\n"==r?"n":!n||/\s/.test(r)?null:"p";!n||q||r||(r="s");if(m&&m!=r){0>d&&(d=1,f(),b.sticky="after");break}r&&(m=r);if(0<d&&!f(!q))break}h=Vc(a,b,g,h,!0);rd(g,h)&&(h.hitSide=!0);return h}function tg(a,b,d,c){var e=a.doc,f=b.left;if("page"==c){var g=Math.min(a.display.wrapper.clientHeight,qa(a).defaultView.innerHeight||e(a).documentElement.clientHeight);
g=Math.max(g-.5*vb(a.display),3);g=(0<d?b.bottom:b.top)+d*g}else"line"==c&&(g=0<d?b.bottom+3:b.top-3);for(;;){b=Kd(a,f,g);if(!b.outside)break;if(0>d?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*d}return b}function ug(a,b){var d=Fd(a,b.line);if(!d||d.hidden)return null;var c=w(a.doc,b.line);d=Ue(d,c,b.line);a=Ja(c,a.doc.direction);c="left";a&&(c=Kb(a,b.ch)%2?"right":"left");b=Ve(d.map,b.ch,c);b.offset="right"==b.collapse?b.end:b.start;return b}function Ah(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;
return!1}function Ib(a,b){b&&(a.bad=!0);return a}function Bh(a,b,d,c,e){function f(q){return function(r){return r.id==q}}function g(){m&&(l+=n,p&&(l+=n),m=p=!1)}function h(q){q&&(g(),l+=q)}function k(q){if(1==q.nodeType){var r=q.getAttribute("cm-text");if(r)h(r);else{r=q.getAttribute("cm-marker");var u;if(r)q=a.findMarks(t(c,0),t(e+1,0),f(+r)),q.length&&(u=q[0].find(0))&&h(ab(a.doc,u.from,u.to).join(n));else if("false"!=q.getAttribute("contenteditable")&&(u=/^(pre|div|p|li|table|br)$/i.test(q.nodeName),
/^br$/i.test(q.nodeName)||0!=q.textContent.length)){u&&g();for(r=0;r<q.childNodes.length;r++)k(q.childNodes[r]);/^(pre|p)$/i.test(q.nodeName)&&(p=!0);u&&(m=!0)}}}else 3==q.nodeType&&h(q.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var l="",m=!1,n=a.doc.lineSeparator(),p=!1;;){k(b);if(b==d)break;b=b.nextSibling;p=!1}return l}function cd(a,b,d){if(b==a.display.lineDiv){var c=a.display.lineDiv.childNodes[d];if(!c)return Ib(a.clipPos(t(a.display.viewTo-1)),!0);b=null;d=0}else for(c=b;;c=
c.parentNode){if(!c||c==a.display.lineDiv)return null;if(c.parentNode&&c.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==c)return Ch(f,b,d)}}function Ch(a,b,d){function c(m,n,p){for(var q=-1;q<(l?l.length:0);q++)for(var r=0>q?k.map:l[q],u=0;u<r.length;u+=3){var A=r[u+2];if(A==m||A==n){n=N(0>q?a.line:a.rest[q]);q=r[u]+p;if(0>p||A!=m)q=r[u+(p?1:0)];return t(n,q)}}}var e=a.text.firstChild,f=!1;if(!b||!ja(e,b))return Ib(t(N(a.line),0),!0);
if(b==e&&(f=!0,b=e.childNodes[d],d=0,!b))return d=a.rest?J(a.rest):a.line,Ib(t(N(d),d.text.length),f);var g=3==b.nodeType?b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,d&&(d=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=c(g,h,d))return Ib(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-d:0;e;e=e.nextSibling){if(b=c(e,e.firstChild,0))return Ib(t(b.line,b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=
c(h,h.firstChild,-1))return Ib(t(b.line,b.ch+d),f);d+=h.textContent.length}}var pa=navigator.userAgent,vg=navigator.platform,Ma=/gecko\/\d/i.test(pa),wg=/MSIE \d/.test(pa),xg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pa),dd=/Edge\/(\d+)/.exec(pa),G=wg||xg||dd,T=G&&(wg?document.documentMode||6:+(dd||xg)[1]),fa=!dd&&/WebKit\//.test(pa),Dh=fa&&/Qt\/\d+\.\d+/.test(pa),Qa=!dd&&/Chrome\/(\d+)/.exec(pa),tf=Qa&&+Qa[1],Ca=/Opera\//.test(pa),ad=/Apple Computer/.test(navigator.vendor),Eh=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(pa),
Vg=/PhantomJS/.test(pa),oc=ad&&(/Mobile\/\w+/.test(pa)||2<navigator.maxTouchPoints),Gc=/Android/.test(pa),ac=oc||Gc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(pa),ya=oc||/Mac/.test(vg),sh=/\bCrOS\b/.test(pa),Fh=/win/i.test(vg),nb=Ca&&pa.match(/Version\/(\d*\.\d*)/);nb&&(nb=Number(nb[1]));nb&&15<=nb&&(Ca=!1,fa=!0);var $f=ya&&(Dh||Ca&&(null==nb||12.11>nb)),je=Ma||G&&9<=T,jb=function(a,b){var d=a.className;if(b=y(b).exec(d)){var c=d.slice(b.index+b[0].length);a.className=d.slice(0,b.index)+
(c?b[1]+c:"")}};var Qb=document.createRange?function(a,b,d,c){var e=document.createRange();e.setEnd(c||a,d);e.setStart(a,b);return e}:function(a,b,d){var c=document.body.createTextRange();try{c.moveToElementText(a.parentNode)}catch(e){return c}c.collapse(!0);c.moveEnd("character",d);c.moveStart("character",b);return c};var pc=function(a){a.select()};oc?pc=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:G&&(pc=function(a){try{a.select()}catch(b){}});var Xa=function(){this.f=this.id=null;
this.time=0;this.handler=gd(this.onTimeout,this)};Xa.prototype.onTimeout=function(a){a.id=0;a.time<=+new Date?a.f():setTimeout(a.handler,a.time-+new Date)};Xa.prototype.set=function(a,b){this.f=b;b=+new Date+a;if(!this.id||b<this.time)clearTimeout(this.id),this.id=setTimeout(this.handler,a),this.time=b};var Zc={toString:function(){return"CodeMirror.Pass"}},Ia={scroll:!1},ke={origin:"*mouse"},qc={origin:"+move"},vc=[""],zg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
Ag=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
Lb=null,Cg=function(){function a(g,h,k){this.level=g;this.from=h;this.to=k}var b=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,c=/[LRr]/,e=/[Lb1n]/,f=/[1n]/;return function(g,h){var k="ltr"==h?"L":"R";if(0==g.length||"ltr"==h&&!b.test(g))return!1;for(var l=g.length,m=[],n=0;n<l;++n){var p=m,q=p.push;var r=g.charCodeAt(n);r=247>=r?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(r):
1424<=r&&1524>=r?"R":1536<=r&&1785>=r?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(r-1536):1774<=r&&2220>=r?"r":8192<=r&&8203>=r?"w":8204==r?"b":"L";q.call(p,r)}n=0;for(p=k;n<l;++n)q=m[n],"m"==q?m[n]=p:p=q;n=0;for(p=k;n<l;++n)q=m[n],"1"==q&&"r"==p?m[n]="n":c.test(q)&&(p=q,"r"==q&&(m[n]=
"R"));n=1;for(p=m[0];n<l-1;++n)q=m[n],"+"==q&&"1"==p&&"1"==m[n+1]?m[n]="1":","!=q||p!=m[n+1]||"1"!=p&&"n"!=p||(m[n]=p),p=q;for(n=0;n<l;++n)if(p=m[n],","==p)m[n]="N";else if("%"==p){for(p=n+1;p<l&&"%"==m[p];++p);for(q=n&&"!"==m[n-1]||p<l&&"1"==m[p]?"1":"N";n<p;++n)m[n]=q;n=p-1}n=0;for(p=k;n<l;++n)q=m[n],"L"==p&&"1"==q?m[n]="L":c.test(q)&&(p=q);for(p=0;p<l;++p)if(d.test(m[p])){for(n=p+1;n<l&&d.test(m[n]);++n);q="L"==(p?m[p-1]:k);for(q=q==("L"==(n<l?m[n]:k))?q?"L":"R":k;p<n;++p)m[p]=q;p=n-1}k=[];var u;
for(n=0;n<l;)if(e.test(m[n])){p=n;for(++n;n<l&&e.test(m[n]);++n);k.push(new a(0,p,n))}else{var A=n;p=k.length;q="rtl"==h?1:0;for(++n;n<l&&"L"!=m[n];++n);for(r=A;r<n;)if(f.test(m[r])){A<r&&(k.splice(p,0,new a(1,A,r)),p+=q);A=r;for(++r;r<n&&f.test(m[r]);++r);k.splice(p,0,new a(2,A,r));p+=q;A=r}else++r;A<n&&k.splice(p,0,new a(1,A,n))}"ltr"==h&&(1==k[0].level&&(u=g.match(/^\s+/))&&(k[0].from=u[0].length,k.unshift(new a(0,0,u[0].length))),1==J(k).level&&(u=g.match(/\s+$/))&&(J(k).to-=u[0].length,k.push(new a(0,
l-u[0].length,l))));return"rtl"==h?k.reverse():k}}(),yc=[],z=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent?a.attachEvent("on"+b,d):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||yc).concat(d))},th=function(){if(G&&9>T)return!1;var a=v("div");return"draggable"in a||"dragDrop"in a}(),Bd,Ad,ne=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,d=[],c=a.length;b<=c;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");
-1!=g?(d.push(f.slice(0,g)),b+=g+1):(d.push(f),b=e+1)}return d}:function(a){return a.split(/\r\n?|\n/)},Gh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(d){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},nh=function(){var a=v("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),Hd=null,md={},qb={},rb={},X=
function(a,b,d){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=d};X.prototype.eol=function(){return this.pos>=this.string.length};X.prototype.sol=function(){return this.pos==this.lineStart};X.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};X.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};X.prototype.eat=function(a){var b=this.string.charAt(this.pos);
if("string"==typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};X.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};X.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};X.prototype.skipToEnd=function(){this.pos=this.string.length};X.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};X.prototype.backUp=function(a){this.pos-=a};X.prototype.column=
function(){this.lastColumnPos<this.start&&(this.lastColumnValue=wa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.indentation=function(){return wa(this.string,null,this.tabSize)-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.match=function(a,b,d){if("string"==typeof a){var c=function(f){return d?f.toLowerCase():
f},e=this.string.substr(this.pos,a.length);if(c(e)==c(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};X.prototype.current=function(){return this.string.slice(this.start,this.pos)};X.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};X.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};X.prototype.baseToken=function(){var a=
this.lineOracle;return a&&a.baseToken(this.pos)};var Cc=function(a,b){this.state=a;this.lookAhead=b},Fa=function(a,b,d,c){this.state=b;this.doc=a;this.line=d;this.maxLookAhead=c||0;this.baseTokens=null;this.baseTokenPos=1};Fa.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};Fa.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};Fa.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};Fa.fromSaved=function(a,b,d){return b instanceof Cc?new Fa(a,$a(a.mode,b.state),d,b.lookAhead):new Fa(a,$a(a.mode,b),d)};Fa.prototype.save=function(a){a=!1!==a?$a(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new Cc(a,this.maxLookAhead):a};var De=function(a,b,d){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=d},Nf=!1,Ka=!1,zb=function(a,b,d){this.text=a;He(this,b);this.height=d?d(this):1};zb.prototype.lineNo=function(){return N(this)};pb(zb);var Jg={},Ig={},tb=null,Rb=null,We={left:0,right:0,top:0,bottom:0},fb,ob=function(a,b,d){this.cm=d;var c=this.vert=v("div",[v("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=v("div",[v("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");c.tabIndex=e.tabIndex=-1;a(c);a(e);z(c,
"scroll",function(){c.clientHeight&&b(c.scrollTop,"vertical")});z(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;G&&8>T&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};ob.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,d=a.scrollHeight>a.clientHeight+1,c=a.nativeBarWidth;d?(this.vert.style.display="block",this.vert.style.bottom=b?c+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-
(b?c:0)))+"px"):(this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=d?c+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(d?c:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==c&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:d?
c:0,bottom:b?c:0}};ob.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};ob.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};ob.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ya&&!Eh?"12px":"18px";this.horiz.style.visibility=this.vert.style.visibility=
"hidden";this.disableHoriz=new Xa;this.disableVert=new Xa};ob.prototype.enableZeroWidthBar=function(a,b,d){function c(){var e=a.getBoundingClientRect();("vert"==d?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.visibility="hidden":b.set(1E3,c)}a.style.visibility="";b.set(1E3,c)};ob.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var rc=function(){};rc.prototype.update=
function(){return{bottom:0,right:0}};rc.prototype.setScrollLeft=function(){};rc.prototype.setScrollTop=function(){};rc.prototype.clear=function(){};var pf={"native":ob,"null":rc},Ug=0,Pc=function(a,b,d){var c=a.display;this.viewport=b;this.visible=Mc(c,a.doc,b);this.editorIsHidden=!c.wrapper.offsetWidth;this.wrapperHeight=c.wrapper.clientHeight;this.wrapperWidth=c.wrapper.clientWidth;this.oldDisplayWidth=cb(a);this.force=d;this.dims=Gd(a);this.events=[]};Pc.prototype.signal=function(a,b){xa(a,b)&&
this.events.push(arguments)};Pc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)W.apply(null,this.events[a])};var Qc=0,Na=null;G?Na=-.53:Ma?Na=15:Qa?Na=-.7:ad&&(Na=-1/3);var va=function(a,b){this.ranges=a;this.primIndex=b};va.prototype.primary=function(){return this.ranges[this.primIndex]};va.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var d=this.ranges[b],c=a.ranges[b];
if(!rd(d.anchor,c.anchor)||!rd(d.head,c.head))return!1}return!0};va.prototype.deepCopy=function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new I(sd(this.ranges[b].anchor),sd(this.ranges[b].head));return new va(a,this.primIndex)};va.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};va.prototype.contains=function(a,b){b||(b=a);for(var d=0;d<this.ranges.length;d++){var c=this.ranges[d];if(0<=B(b,c.from())&&0>=B(a,c.to()))return d}return-1};
var I=function(a,b){this.anchor=a;this.head=b};I.prototype.from=function(){return Bc(this.anchor,this.head)};I.prototype.to=function(){return Ac(this.anchor,this.head)};I.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};ec.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var d=a,c=a+b;d<c;++d){var e=this.lines[d];this.height-=e.height;var f=e;f.parent=null;Ge(f);aa(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,
this.lines)},insertInner:function(a,b,d){this.height+=d;this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,d){for(b=a+b;a<b;++a)if(d(this.lines[a]))return!0}};fc.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var d=0;d<this.children.length;++d){var c=this.children[d],e=c.chunkSize();if(a<e){var f=Math.min(b,e-a),g=c.height;c.removeInner(a,f);this.height-=g-c.height;e==f&&(this.children.splice(d--,
1),c.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-b&&(1<this.children.length||!(this.children[0]instanceof ec))&&(a=[],this.collapse(a),this.children=[new ec(a)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,d){this.size+=b.length;this.height+=d;for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<=f){e.insertInner(a,b,d);if(e.lines&&50<e.lines.length){for(b=
a=e.lines.length%25+25;b<e.lines.length;)d=new ec(e.lines.slice(b,b+=25)),e.height-=d.height,this.children.splice(++c,0,d),d.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5);b=new fc(b);if(a.parent){a.size-=b.size;a.height-=b.height;var d=ea(a.parent.children,a);a.parent.children.splice(d+1,0,b)}else d=new fc(a.children),d.parent=a,a.children=[d,b],a=d;b.parent=a.parent}while(10<
a.children.length);a.parent.maybeSpill()}},iterN:function(a,b,d){for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,d))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var gc=function(a,b,d){if(d)for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);this.doc=a;this.node=b};gc.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,d=this.line,c=N(d);if(null!=c&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||
(d.widgets=null);var f=Tb(this);Ea(d,Math.max(0,d.height-f));a&&(ra(a,function(){var g=-f;Ga(d)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Nc(a,g);Sa(a,c,"widget")}),aa(a,"lineWidgetCleared",a,this,c))}};gc.prototype.changed=function(){var a=this,b=this.height,d=this.doc.cm,c=this.line;this.height=null;var e=Tb(this)-b;e&&(Pa(this.doc,c)||Ea(c,c.height+e),d&&ra(d,function(){d.curOp.forceUpdate=!0;Ga(c)<(d.curOp&&d.curOp.scrollTop||d.doc.scrollTop)&&Nc(d,e);aa(d,"lineWidgetChanged",d,a,N(c))}))};
pb(gc);var Tf=0,Va=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=++Tf};Va.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&lb(a);if(xa(this,"clear")){var d=this.find();d&&aa(this,"clear",d.from,d.to)}for(var c=d=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Pb(f.markedSpans,this);a&&!this.collapsed?Sa(a,N(f),"text"):a&&(null!=g.to&&(c=N(f)),null!=g.from&&(d=N(f)));for(var h=f,k=void 0,l=f.markedSpans,m=g,n=0;n<l.length;++n)l[n]!=m&&(k||
(k=[])).push(l[n]);h.markedSpans=k;null==g.from&&this.collapsed&&!Pa(this.doc,f)&&a&&Ea(f,vb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=za(this.lines[e]),g=Ec(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=d&&a&&this.collapsed&&ma(a,d,c+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Jf(a.doc));a&&aa(a,"markerCleared",a,this,d,
c);b&&mb(a);this.parent&&this.parent.clear()}};Va.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var d,c,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Pb(f.markedSpans,this);if(null!=g.from&&(d=t(b?f:N(f),g.from),-1==a))return d;if(null!=g.to&&(c=t(b?f:N(f),g.to),1==a))return c}return d&&{from:d,to:c}};Va.prototype.changed=function(){var a=this,b=this.find(-1,!0),d=this,c=this.doc.cm;b&&c&&ra(c,function(){var e=b.line,f=N(b.line);if(f=Fd(c,f))Xe(f),c.curOp.selectionChanged=
c.curOp.forceUpdate=!0;c.curOp.updateMaxLine=!0;Pa(d.doc,e)||null==d.height||(f=d.height,d.height=null,(f=Tb(d)-f)&&Ea(e,e.height+f));aa(c,"markerChanged",c,a)})};Va.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=ea(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Va.prototype.detachLine=function(a){this.lines.splice(ea(this.lines,a),1);!this.lines.length&&this.doc.cm&&
(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};pb(Va);var hc=function(a,b){this.markers=a;this.primary=b;for(b=0;b<a.length;++b)a[b].parent=this};hc.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();aa(this,"clear")}};hc.prototype.find=function(a,b){return this.primary.find(a,b)};pb(hc);var Hh=0,oa=function(a,b,d,c,e){if(!(this instanceof oa))return new oa(a,b,d,c,e);null==
d&&(d=0);fc.call(this,[new ec([new zb("",null)])]);this.first=d;this.scrollTop=this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=d;d=t(d,0);this.sel=Oa(d);this.history=new Rc(null);this.id=++Hh;this.modeOption=b;this.lineSep=c;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));ae(this,{from:d,to:d,text:a});da(this,Oa(d),Ia)};oa.prototype=qe(fc.prototype,{constructor:oa,iter:function(a,b,d){d?this.iterN(a-this.first,
b-a,d):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var d=0,c=0;c<b.length;++c)d+=b[c].height;this.insertInner(a-this.first,b,d)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=pd(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:ca(function(a){var b=t(this.first,0),d=this.first+this.size-1;Cb(this,{from:b,to:t(d,w(this,d).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&
Wb(this.cm,0,0);da(this,Oa(b),Ia)}),replaceRange:function(a,b,d,c){b=C(this,b);d=d?C(this,d):b;Db(this,a,b,d,c)},getRange:function(a,b,d){a=ab(this,C(this,a),C(this,b));return!1===d?a:""===d?a.join(""):a.join(d||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(Nb(this,a))return w(this,a)},getLineNumber:function(a){return N(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=w(this,a));return za(a)},lineCount:function(){return this.size},
firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return C(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ca(function(a,b,d){a=C(this,"number"==typeof a?t(a,b||0):a);da(this,Oa(a,null),d)}),setSelection:ca(function(a,
b,d){var c=C(this,a);a=C(this,b||a);da(this,Oa(c,a),d)}),extendSelection:ca(function(a,b,d){Tc(this,C(this,a),b&&C(this,b),d)}),extendSelections:ca(function(a,b){Ff(this,xe(this,a),b)}),extendSelectionsBy:ca(function(a,b){a=wc(this.sel.ranges,a);Ff(this,xe(this,a),b)}),setSelections:ca(function(a,b,d){if(a.length){for(var c=[],e=0;e<a.length;e++)c[e]=new I(C(this,a[e].anchor),C(this,a[e].head||a[e].anchor));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));da(this,Da(this.cm,c,b),d)}}),addSelection:ca(function(a,
b,d){var c=this.sel.ranges.slice(0);c.push(new I(C(this,a),C(this,b||a)));da(this,Da(this.cm,c,c.length-1),d)}),getSelection:function(a){for(var b=this.sel.ranges,d,c=0;c<b.length;c++){var e=ab(this,b[c].from(),b[c].to());d=d?d.concat(e):e}return!1===a?d:d.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],d=this.sel.ranges,c=0;c<d.length;c++){var e=ab(this,d[c].from(),d[c].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[c]=e}return b},replaceSelection:function(a,b,d){for(var c=
[],e=0;e<this.sel.ranges.length;e++)c[e]=a;this.replaceSelections(c,b,d||"+input")},replaceSelections:ca(function(a,b,d){for(var c=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];c[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:d}}if(a=b&&"end"!=b){a=[];e=d=t(this.first,0);for(f=0;f<c.length;f++){var h=c[f];g=xf(h.from,d,e);var k=xf(Ta(h),d,e);d=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>B(h.head,h.anchor),a[f]=new I(h?k:g,h?g:k)):a[f]=new I(g,g)}a=new va(a,this.sel.primIndex)}b=
a;for(a=c.length-1;0<=a;a--)Cb(this,c[a]);b?Gf(this,b):this.cm&&xb(this.cm)}),undo:ca(function(){Wc(this,"undo")}),redo:ca(function(){Wc(this,"redo")}),undoSelection:ca(function(){Wc(this,"undo",!0)}),redoSelection:ca(function(){Wc(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,d=0,c=0;c<a.done.length;c++)a.done[c].ranges||++b;for(c=0;c<a.undone.length;c++)a.undone[c].ranges||++d;return{undo:b,
redo:d}},clearHistory:function(){var a=this;this.history=new Rc(this.history);Ua(this,function(b){return b.history=a.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:Ab(this.history.done),undone:Ab(this.history.undone)}},
setHistory:function(a){var b=this.history=new Rc(this.history);b.done=Ab(a.done.slice(0),null,!0);b.undone=Ab(a.undone.slice(0),null,!0)},setGutterMarker:ca(function(a,b,d){return dc(this,a,"gutter",function(c){var e=c.gutterMarkers||(c.gutterMarkers={});e[b]=d;!d&&re(e)&&(c.gutterMarkers=null);return!0})}),clearGutter:ca(function(a){var b=this;this.iter(function(d){d.gutterMarkers&&d.gutterMarkers[a]&&dc(b,d,"gutter",function(){d.gutterMarkers[a]=null;re(d.gutterMarkers)&&(d.gutterMarkers=null);
return!0})})}),lineInfo:function(a){if("number"==typeof a){if(!Nb(this,a))return null;var b=a;a=w(this,a);if(!a)return null}else if(b=N(a),null==b)return null;return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:ca(function(a,b,d){return dc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(c[e]){if(y(d).test(c[e]))return!1;
c[e]+=" "+d}else c[e]=d;return!0})}),removeLineClass:ca(function(a,b,d){return dc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=c[e];if(f)if(null==d)c[e]=null;else{var g=f.match(y(d));if(!g)return!1;var h=g.index+g[0].length;c[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:ca(function(a,b,d){return ch(this,a,b,d)}),removeLineWidget:function(a){a.clear()},
markText:function(a,b,d){return Eb(this,C(this,a),C(this,b),d,d&&d.type||"range")},setBookmark:function(a,b){b={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=C(this,a);return Eb(this,a,a,b,"bookmark")},findMarksAt:function(a){a=C(this,a);var b=[],d=w(this,a.line).markedSpans;if(d)for(var c=0;c<d.length;++c){var e=d[c];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||
e.marker)}return b},findMarks:function(a,b,d){a=C(this,a);b=C(this,b);var c=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||d&&!d(h.marker)||c.push(h.marker.parent||h.marker)}++e});return c},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var d=0;d<b.length;++d)null!=b[d].from&&a.push(b[d].marker)});return a},posFromIndex:function(a){var b,
d=this.first,c=this.lineSeparator().length;this.iter(function(e){e=e.text.length+c;if(e>a)return b=a,!0;a-=e;++d});return C(this,t(d,b))},indexFromPos:function(a){a=C(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var d=this.lineSeparator().length;this.iter(this.first,a.line,function(c){b+=c.text.length+d});return b},copy:function(a){var b=new oa(pd(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;
b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||(a={});var b=this.first,d=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<d&&(d=a.to);b=new oa(pd(this,b,d),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Uf(this);
for(d=0;d<a.length;d++){var c=a[d],e=c.find(),f=b.clipPos(e.from);e=b.clipPos(e.to);B(f,e)&&(f=Eb(b,f,e,c.primary,c.primary.type),c.markers.push(f),f.parent=c)}return b},unlinkDoc:function(a){a instanceof U&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);eh(Uf(this));break}if(a.history==this.history){var d=[a.id];Ua(a,function(c){return d.push(c.id)},!0);a.history=new Rc(null);a.history.done=Ab(this.history.done,d);
a.history.undone=Ab(this.history.undone,d)}},iterLinkedDocs:function(a){Ua(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):ne(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ca(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(b){return b.order=null}),this.cm&&$g(this.cm))})});oa.prototype.eachLine=oa.prototype.iter;for(var Wf=0,ng=!1,Wa={3:"Pause",
8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},sc=0;10>sc;sc++)Wa[sc+48]=Wa[sc+96]=String(sc);for(var ed=65;90>=ed;ed++)Wa[ed]=String.fromCharCode(ed);for(var tc=1;12>=tc;tc++)Wa[tc+111]=Wa[tc+63235]="F"+tc;var ic={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",
Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars",
"Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace",
"Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};ic["default"]=ya?ic.macDefault:ic.pcDefault;var jc={selectAll:Lf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Ia)},killLine:function(a){return Gb(a,function(b){if(b.empty()){var d=
w(a.doc,b.head.line).text.length;return b.head.ch==d&&b.head.line<a.lastLine()?{from:b.head,to:t(b.head.line+1,0)}:{from:b.head,to:t(b.head.line,d)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return Gb(a,function(b){return{from:t(b.from().line,0),to:C(a.doc,t(b.to().line+1,0))}})},delLineLeft:function(a){return Gb(a,function(b){return{from:t(b.from().line,0),to:b.from()}})},delWrappedLineLeft:function(a){return Gb(a,function(b){var d=a.charCoords(b.head,"div").top+5;return{from:a.coordsChar({left:0,
top:d},"div"),to:b.from()}})},delWrappedLineRight:function(a){return Gb(a,function(b){var d=a.charCoords(b.head,"div").top+5;d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:d},"div");return{from:b.from(),to:d}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(t(a.firstLine(),0))},goDocEnd:function(a){return a.extendSelection(t(a.lastLine()))},
goLineStart:function(a){return a.extendSelectionsBy(function(b){return bg(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return cg(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var d=w(a.doc,b);var c=d;for(var e;e=sb(c,!1);)c=e.find(1,!0).line;c!=d&&(b=N(c));return ge(!0,a,d,b,-1)},{origin:"+move",bias:-1})},goLineRight:function(a){return a.extendSelectionsBy(function(b){b=
a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div")},qc)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},qc)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var d=a.cursorCoords(b.head,"div").top+5;d=a.coordsChar({left:0,top:d},"div");return d.ch<a.getLine(d.line).search(/\S/)?cg(a,b.head):d},qc)},goLineUp:function(a){return a.moveV(-1,
"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,"group")},goGroupLeft:function(a){return a.moveH(-1,
"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,"codepoint")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},indentMore:function(a){return a.indentSelection("add")},
indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},insertSoftTab:function(a){for(var b=[],d=a.listSelections(),c=a.options.tabSize,e=0;e<d.length;e++){var f=d[e].from();f=wa(a.getLine(f.line),f.ch,c);b.push(id(c-f%c))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return ra(a,function(){for(var b=a.listSelections(),d=[],c=0;c<b.length;c++)if(b[c].empty()){var e=
b[c].head,f=w(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new t(e.line,e.ch-1)),0<e.ch)e=new t(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),t(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=w(a.doc,e.line-1).text;g&&(e=new t(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),t(e.line-1,g.length-1),e,"+transpose"))}d.push(new I(e,e))}a.setSelections(d)})},newlineAndIndent:function(a){return ra(a,function(){for(var b=a.listSelections(),
d=b.length-1;0<=d;d--)a.replaceRange(a.doc.lineSeparator(),b[d].anchor,b[d].head,"+input");b=a.listSelections();for(d=0;d<b.length;d++)a.indentLine(b[d].from().line,null,!0);xb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},lh=new Xa,he=null,ie=function(a,b,d){this.time=a;this.pos=b;this.button=d};ie.prototype.compare=function(a,b,d){return this.time+400>a&&0==B(b,this.pos)&&d==this.button};var mc,lc,Hb={toString:function(){return"CodeMirror.Init"}},
mg={},bd={};U.defaults=mg;U.optionHandlers=bd;var le=[];U.defineInitHook=function(a){return le.push(a)};var sa=null,O=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Xa;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};O.prototype.init=function(a){function b(h){for(h=h.target;h;h=h.parentNode){if(h==g)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(h.className))break}return!1}function d(h){if(b(h)&&!Z(f,
h)){if(f.somethingSelected())sa={lineWise:!1,text:f.getSelections()},"cut"==h.type&&f.replaceSelection("",null,"cut");else if(f.options.lineWiseCopyCut){var k=qg(f);sa={lineWise:!0,text:k.text};"cut"==h.type&&f.operation(function(){f.setSelections(k.ranges,0,Ia);f.replaceSelection("",null,"cut")})}else return;if(h.clipboardData){h.clipboardData.clearData();var l=sa.text.join("\n");h.clipboardData.setData("Text",l);if(h.clipboardData.getData("Text")==l){h.preventDefault();return}}var m=sg();h=m.firstChild;
f.display.lineSpace.insertBefore(m,f.display.lineSpace.firstChild);h.value=sa.text.join("\n");var n=ka(g.ownerDocument);pc(h);setTimeout(function(){f.display.lineSpace.removeChild(m);n.focus();n==g&&e.showPrimarySelection()},50)}}var c=this,e=this,f=e.cm,g=e.div=a.lineDiv;g.contentEditable=!0;rg(g,f.options.spellcheck,f.options.autocorrect,f.options.autocapitalize);z(g,"paste",function(h){!b(h)||Z(f,h)||pg(h,f)||11>=T&&setTimeout(ba(f,function(){return c.updateFromDOM()}),20)});z(g,"compositionstart",
function(h){c.composing={data:h.data,done:!1}});z(g,"compositionupdate",function(h){c.composing||(c.composing={data:h.data,done:!1})});z(g,"compositionend",function(h){c.composing&&(h.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});z(g,"touchstart",function(){return e.forceCompositionEnd()});z(g,"input",function(){c.composing||c.readFromDOMSoon()});z(g,"copy",d);z(g,"cut",d)};O.prototype.screenReaderLabelChanged=function(a){a?this.div.setAttribute("aria-label",a):this.div.removeAttribute("aria-label")};
O.prototype.prepareSelection=function(){var a=gf(this.cm,!1);a.focus=ka(this.div.ownerDocument)==this.div;return a};O.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};O.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};O.prototype.showPrimarySelection=function(){var a=this.getSelection(),b=this.cm,d=b.doc.sel.primary(),c=d.from();d=d.to();if(b.display.viewTo==
b.display.viewFrom||c.line>=b.display.viewTo||d.line<b.display.viewFrom)a.removeAllRanges();else{var e=cd(b,a.anchorNode,a.anchorOffset),f=cd(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=B(Bc(e,f),c)||0!=B(Ac(e,f),d))if(e=b.display.view,c=c.line>=b.display.viewFrom&&ug(b,c)||{node:e[0].measure.map[2],offset:0},d=d.line<b.display.viewTo&&ug(b,d),d||(d=e[e.length-1].measure,d=d.maps?d.maps[d.maps.length-1]:d.map,d={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}),c&&d){e=a.rangeCount&&
a.getRangeAt(0);try{var g=Qb(c.node,c.offset,d.offset,d.node)}catch(h){}g&&(!Ma&&b.state.focused?(a.collapse(c.node,c.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):Ma&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};O.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=
!0})},20)};O.prototype.showMultipleSelections=function(a){D(this.cm.display.cursorDiv,a.cursors);D(this.cm.display.selectionDiv,a.selection)};O.prototype.rememberSelection=function(){var a=this.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};O.prototype.selectionInEditor=function(){var a=this.getSelection();if(!a.rangeCount)return!1;a=a.getRangeAt(0).commonAncestorContainer;return ja(this.div,a)};
O.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&ka(this.div.ownerDocument)==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())};O.prototype.blur=function(){this.div.blur()};O.prototype.getField=function(){return this.div};O.prototype.supportsTouch=function(){return!0};O.prototype.receivedFocus=function(){function a(){d.cm.state.focused&&(d.pollSelection(),d.polling.set(d.cm.options.pollInterval,a))}var b=this,d=this;this.selectionInEditor()?
setTimeout(function(){return b.pollSelection()},20):ra(this.cm,function(){return d.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};O.prototype.selectionChanged=function(){var a=this.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};O.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=this.getSelection(),
b=this.cm;if(Gc&&Qa&&this.cm.display.gutterSpecs.length&&Ah(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var d=cd(b,a.anchorNode,a.anchorOffset),c=cd(b,a.focusNode,a.focusOffset);d&&c&&ra(b,function(){da(b.doc,Oa(d,c),Ia);if(d.bad||c.bad)b.curOp.selectionChanged=!0})}}};O.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=
null);var a=this.cm,b=a.display,d=a.doc.sel.primary(),c=d.from(),e=d.to();0==c.ch&&c.line>a.firstLine()&&(c=t(c.line-1,w(a.doc,c.line-1).length));e.ch==w(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=t(e.line+1,0));if(c.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;c.line==b.viewFrom||0==(f=db(a,c.line))?(d=N(b.view[0].line),f=b.view[0].node):(d=N(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=db(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):(e=N(b.view[g+1].line)-
1,b=b.view[g+1].node.previousSibling);if(!f)return!1;b=a.doc.splitLines(Bh(a,f,b,d,e));for(f=ab(a.doc,t(d,0),t(e,w(a.doc,e).text.length));1<b.length&&1<f.length;)if(J(b)==J(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),d++;else break;var h=0;g=0;for(var k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=J(b);l=J(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)++g;
if(1==b.length&&1==f.length&&d==c.line)for(;h&&h>c.ch&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");c=t(d,h);d=t(e,f.length?J(f).length-g:0);if(1<b.length||b[0]||B(c,d))return Db(a.doc,b,c,d,"+input"),!0};O.prototype.ensurePolled=function(){this.forceCompositionEnd()};O.prototype.reset=function(){this.forceCompositionEnd()};O.prototype.forceCompositionEnd=function(){this.composing&&
(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())};O.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};O.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||ra(this.cm,function(){return ma(a.cm)})};O.prototype.setUneditable=function(a){a.contentEditable=
"false"};O.prototype.onKeyPress=function(a){0==a.charCode||this.composing||(a.preventDefault(),this.cm.isReadOnly()||ba(this.cm,me)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};O.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};O.prototype.onContextMenu=function(){};O.prototype.resetPosition=function(){};O.prototype.needsContentAttribute=!0;var V=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Xa;this.hasSelection=
!1;this.composing=null;this.resetting=!1};V.prototype.init=function(a){function b(g){if(!Z(e,g)){if(e.somethingSelected())sa={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var h=qg(e);sa={lineWise:!0,text:h.text};"cut"==g.type?e.setSelections(h.ranges,null,Ia):(c.prevInput="",f.value=h.text.join("\n"),pc(f))}else return;"cut"==g.type&&(e.state.cutIncoming=+new Date)}}var d=this,c=this,e=this.cm;this.createField(a);var f=this.textarea;a.wrapper.insertBefore(this.wrapper,a.wrapper.firstChild);
oc&&(f.style.width="0px");z(f,"input",function(){G&&9<=T&&d.hasSelection&&(d.hasSelection=null);c.poll()});z(f,"paste",function(g){Z(e,g)||pg(g,e)||(e.state.pasteIncoming=+new Date,c.fastPoll())});z(f,"cut",b);z(f,"copy",b);z(a.scroller,"paste",function(g){if(!La(a,g)&&!Z(e,g))if(f.dispatchEvent){var h=new Event("paste");h.clipboardData=g.clipboardData;f.dispatchEvent(h)}else e.state.pasteIncoming=+new Date,c.focus()});z(a.lineSpace,"selectstart",function(g){La(a,g)||la(g)});z(f,"compositionstart",
function(){var g=e.getCursor("from");c.composing&&c.composing.range.clear();c.composing={start:g,range:e.markText(g,e.getCursor("to"),{className:"CodeMirror-composing"})}});z(f,"compositionend",function(){c.composing&&(c.poll(),c.composing.range.clear(),c.composing=null)})};V.prototype.createField=function(a){this.wrapper=sg();this.textarea=this.wrapper.firstChild};V.prototype.screenReaderLabelChanged=function(a){a?this.textarea.setAttribute("aria-label",a):this.textarea.removeAttribute("aria-label")};
V.prototype.prepareSelection=function(){var a=this.cm,b=a.display,d=a.doc,c=gf(a);if(a.options.moveInputWithCursor){a=Ba(a,d.sel.primary().head,"div");d=b.wrapper.getBoundingClientRect();var e=b.lineDiv.getBoundingClientRect();c.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-d.top));c.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-d.left))}return c};V.prototype.showSelection=function(a){var b=this.cm.display;D(b.cursorDiv,a.cursors);D(b.selectionDiv,a.selection);
null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")};V.prototype.reset=function(a){if(!(this.contextMenuPending||this.composing&&a)){var b=this.cm;this.resetting=!0;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&pc(this.textarea),G&&9<=T&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",G&&9<=T&&(this.hasSelection=null));this.resetting=!1}};V.prototype.getField=function(){return this.textarea};
V.prototype.supportsTouch=function(){return!1};V.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!ac||ka(this.textarea.ownerDocument)!=this.textarea))try{this.textarea.focus()}catch(a){}};V.prototype.blur=function(){this.textarea.blur()};V.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};V.prototype.receivedFocus=function(){this.slowPoll()};V.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,
function(){a.poll();a.cm.state.focused&&a.slowPoll()})};V.prototype.fastPoll=function(){function a(){d.poll()||b?(d.pollingFast=!1,d.slowPoll()):(b=!0,d.polling.set(60,a))}var b=!1,d=this;d.pollingFast=!0;d.polling.set(20,a)};V.prototype.poll=function(){var a=this,b=this.cm,d=this.textarea,c=this.prevInput;if(this.contextMenuPending||this.resetting||!b.state.focused||Gh(d)&&!c&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=d.value;if(e==c&&!b.somethingSelected())return!1;
if(G&&9<=T&&this.hasSelection===e||ya&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),!1;if(b.doc.sel==b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||c||(c="\u200b");if(8666==f)return this.reset(),this.cm.execCommand("undo")}var g=0;for(f=Math.min(c.length,e.length);g<f&&c.charCodeAt(g)==e.charCodeAt(g);)++g;ra(b,function(){me(b,e.slice(g),c.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?d.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),
a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});return!0};V.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};V.prototype.onKeyPress=function(){G&&9<=T&&(this.hasSelection=null);this.fastPoll()};V.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var q=e.somethingSelected(),r="\u200b"+(q?g.value:"");g.value="\u21da";g.value=r;c.prevInput=q?"":"\u200b";g.selectionStart=1;g.selectionEnd=
r.length;f.selForContextMenu=e.doc.sel}}function d(){if(c.contextMenuPending==d&&(c.contextMenuPending=!1,c.wrapper.style.cssText=m,g.style.cssText=l,G&&9>T&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k),null!=g.selectionStart)){(!G||G&&9>T)&&b();var q=0,r=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"\u200b"==c.prevInput?ba(e,Lf)(e):10>q++?f.detectingSelectAll=setTimeout(r,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(r,
200)}}var c=this,e=c.cm,f=e.display,g=c.textarea;c.contextMenuPending&&c.contextMenuPending();var h=gb(e,a),k=f.scroller.scrollTop;if(h&&!Ca){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&ba(e,da)(e.doc,Oa(h),Ia);var l=g.style.cssText,m=c.wrapper.style.cssText;h=c.wrapper.offsetParent.getBoundingClientRect();c.wrapper.style.cssText="position: static";g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-
5)+"px;\n      z-index: 1000; background: "+(G?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";if(fa)var n=g.ownerDocument.defaultView.scrollY;f.input.focus();fa&&g.ownerDocument.defaultView.scrollTo(null,n);f.input.reset();e.somethingSelected()||(g.value=c.prevInput=" ");c.contextMenuPending=d;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);G&&9<=T&&b();if(je){Mb(a);var p=
function(){ta(window,"mouseup",p);setTimeout(d,20)};z(window,"mouseup",p)}else setTimeout(d,50)}};V.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a;this.textarea.readOnly=!!a};V.prototype.setUneditable=function(){};V.prototype.needsContentAttribute=!1;(function(a){function b(c,e,f,g){a.defaults[c]=e;f&&(d[c]=g?function(h,k,l){l!=Hb&&f(h,k,l)}:f)}var d=a.optionHandlers;a.defineOption=b;a.Init=Hb;b("value","",function(c,e){return c.setValue(e)},!0);b("mode",
null,function(c,e){c.doc.modeOption=e;$d(c)},!0);b("indentUnit",2,$d,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(c){bc(c);Ub(c);ma(c)},!0);b("lineSeparator",null,function(c,e){if(c.doc.lineSep=e){var f=[],g=c.doc.first;c.doc.iter(function(k){for(var l=0;;){var m=k.text.indexOf(e,l);if(-1==m)break;l=m+e.length;f.push(t(g,m))}g++});for(var h=f.length-1;0<=h;h--)Db(c.doc,e,f[h],t(f[h].line,f[h].ch+e.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
function(c,e,f){c.state.specialChars=new RegExp(e.source+(e.test("\t")?"":"|\t"),"g");f!=Hb&&c.refresh()});b("specialCharPlaceholder",Mg,function(c){return c.refresh()},!0);b("electricChars",!0);b("inputStyle",ac?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");},!0);b("spellcheck",!1,function(c,e){return c.getInputField().spellcheck=e},!0);b("autocorrect",!1,function(c,e){return c.getInputField().autocorrect=e},!0);b("autocapitalize",
!1,function(c,e){return c.getInputField().autocapitalize=e},!0);b("rtlMoveVisually",!Fh);b("wholeLineUpdateBefore",!0);b("theme","default",function(c){lg(c);$b(c)},!0);b("keyMap","default",function(c,e,f){e=Xc(e);(f=f!=Hb&&Xc(f))&&f.detach&&f.detach(c,e);e.attach&&e.attach(c,f||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,yh,!0);b("gutters",[],function(c,e){c.display.gutterSpecs=Yd(e,c.options.lineNumbers);$b(c)},!0);b("fixedGutter",!0,function(c,e){c.display.gutters.style.left=
e?Md(c.display)+"px":"0";c.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(c){return yb(c)},!0);b("scrollbarStyle","native",function(c){of(c);yb(c);c.display.scrollbars.setScrollTop(c.doc.scrollTop);c.display.scrollbars.setScrollLeft(c.doc.scrollLeft)},!0);b("lineNumbers",!1,function(c,e){c.display.gutterSpecs=Yd(c.options.gutters,e);$b(c)},!0);b("firstLineNumber",1,$b,!0);b("lineNumberFormatter",function(c){return c},$b,!0);b("showCursorWhenSelecting",!1,Vb,!0);b("resetSelectionOnContextMenu",
!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",!0);b("selectionsMayTouch",!1);b("readOnly",!1,function(c,e){"nocursor"==e&&(wb(c),c.display.input.blur());c.display.input.readOnlyChanged(e)});b("screenReaderLabel",null,function(c,e){c.display.input.screenReaderLabelChanged(""===e?null:e)});b("disableInput",!1,function(c,e){e||c.display.input.reset()},!0);b("dragDrop",!0,xh);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Vb,!0);b("singleCursorHeightPerLine",
!0,Vb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,bc,!0);b("addModeClass",!1,bc,!0);b("pollInterval",100);b("undoDepth",200,function(c,e){return c.doc.history.undoDepth=e});b("historyEventDelay",1250);b("viewportMargin",10,function(c){return c.refresh()},!0);b("maxHighlightLength",1E4,bc,!0);b("moveInputWithCursor",!0,function(c,e){e||c.display.input.resetPosition()});b("tabindex",null,function(c,e){return c.display.input.getField().tabIndex=e||""});b("autofocus",null);b("direction",
"ltr",function(c,e){return c.doc.setDirection(e)},!0);b("phrases",null)})(U);(function(a){var b=a.optionHandlers,d=a.helpers={};a.prototype={constructor:a,focus:function(){qa(this).defaultView.focus();this.display.input.focus()},setOption:function(c,e){var f=this.options,g=f[c];if(f[c]!=e||"mode"==c)f[c]=e,b.hasOwnProperty(c)&&ba(this,b[c])(this,e,g),W(this,"optionChange",this,c)},getOption:function(c){return this.options[c]},getDoc:function(){return this.doc},addKeyMap:function(c,e){this.state.keyMaps[e?
"push":"unshift"](Xc(c))},removeKeyMap:function(c){for(var e=this.state.keyMaps,f=0;f<e.length;++f)if(e[f]==c||e[f].name==c)return e.splice(f,1),!0},addOverlay:ia(function(c,e){var f=c.token?c:a.getMode(this.options,c);if(f.startState)throw Error("Overlays may not be stateful.");yg(this.state.overlays,{mode:f,modeSpec:c,opaque:e&&e.opaque,priority:e&&e.priority||0},function(g){return g.priority});this.state.modeGen++;ma(this)}),removeOverlay:ia(function(c){for(var e=this.state.overlays,f=0;f<e.length;++f){var g=
e[f].modeSpec;if(g==c||"string"==typeof c&&g.name==c){e.splice(f,1);this.state.modeGen++;ma(this);break}}}),indentLine:ia(function(c,e,f){"string"!=typeof e&&"number"!=typeof e&&(e=null==e?this.options.smartIndent?"smart":"prev":e?"add":"subtract");Nb(this.doc,c)&&nc(this,c,e,f)}),indentSelection:ia(function(c){for(var e=this.doc.sel.ranges,f=-1,g=0;g<e.length;g++){var h=e[g];if(h.empty())h.head.line>f&&(nc(this,h.head.line,c,!0),f=h.head.line,g==this.doc.sel.primIndex&&xb(this));else{var k=h.from();
h=h.to();var l=Math.max(f,k.line);f=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1;for(h=l;h<f;++h)nc(this,h,c);h=this.doc.sel.ranges;0==k.ch&&e.length==h.length&&0<h[g].from().ch&&de(this.doc,g,new I(k,h[g].to()),Ia)}}}),getTokenAt:function(c,e){return Ce(this,c,e)},getLineTokens:function(c,e){return Ce(this,t(c),e,!0)},getTokenTypeAt:function(c){c=C(this.doc,c);var e=Ae(this,w(this.doc,c.line)),f=0,g=(e.length-1)/2;c=c.ch;if(0==c)e=e[2];else for(;;){var h=f+g>>1;if((h?e[2*h-1]:0)>=c)g=h;else if(e[2*
h+1]<c)f=h+1;else{e=e[2*h+2];break}}f=e?e.indexOf("overlay "):-1;return 0>f?e:0==f?null:e.slice(0,f-1)},getModeAt:function(c){var e=this.doc.mode;return e.innerMode?a.innerMode(e,this.getTokenAt(c).state).mode:e},getHelper:function(c,e){return this.getHelpers(c,e)[0]},getHelpers:function(c,e){var f=[];if(!d.hasOwnProperty(e))return f;var g=d[e];c=this.getModeAt(c);if("string"==typeof c[e])g[c[e]]&&f.push(g[c[e]]);else if(c[e])for(var h=0;h<c[e].length;h++){var k=g[c[e][h]];k&&f.push(k)}else c.helperType&&
g[c.helperType]?f.push(g[c.helperType]):g[c.name]&&f.push(g[c.name]);for(e=0;e<g._global.length;e++)h=g._global[e],h.pred(c,this)&&-1==ea(f,h.val)&&f.push(h.val);return f},getStateAfter:function(c,e){var f=this.doc;c=Math.max(f.first,Math.min(null==c?f.first+f.size-1:c,f.first+f.size-1));return Ob(this,c+1,e).state},cursorCoords:function(c,e){var f=this.doc.sel.primary();c=null==c?f.head:"object"==typeof c?C(this.doc,c):c?f.from():f.to();return Ba(this,c,e||"page")},charCoords:function(c,e){return Ic(this,
C(this.doc,c),e||"page")},coordsChar:function(c,e){c=af(this,c,e||"page");return Kd(this,c.left,c.top)},lineAtHeight:function(c,e){c=af(this,{top:c,left:0},e||"page").top;return bb(this.doc,c+this.display.viewOffset)},heightAtLine:function(c,e,f){var g=!1;if("number"==typeof c){var h=this.doc.first+this.doc.size-1;c<this.doc.first?c=this.doc.first:c>h&&(c=h,g=!0);c=w(this.doc,c)}return Hc(this,c,{top:0,left:0},e||"page",f||g).top+(g?this.doc.height-Ga(c):0)},defaultTextHeight:function(){return vb(this.display)},
defaultCharWidth:function(){return ub(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(c,e,f,g,h){var k=this.display;c=Ba(this,C(this.doc,c));var l=c.bottom,m=c.left;e.style.position="absolute";e.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(e);k.sizer.appendChild(e);if("over"==g)l=c.top;else if("above"==g||"near"==g){var n=Math.max(k.wrapper.clientHeight,this.doc.height),p=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);
("above"==g||c.bottom+e.offsetHeight>n)&&c.top>e.offsetHeight?l=c.top-e.offsetHeight:c.bottom+e.offsetHeight<=n&&(l=c.bottom);m+e.offsetWidth>p&&(m=p-e.offsetWidth)}e.style.top=l+"px";e.style.left=e.style.right="";"right"==h?(m=k.sizer.clientWidth-e.offsetWidth,e.style.right="0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-e.offsetWidth)/2),e.style.left=m+"px");f&&(c=Td(this,{left:m,top:l,right:m+e.offsetWidth,bottom:l+e.offsetHeight}),null!=c.scrollTop&&Xb(this,c.scrollTop),null!=c.scrollLeft&&
kb(this,c.scrollLeft))},triggerOnKeyDown:ia(fg),triggerOnKeyPress:ia(hg),triggerOnKeyUp:gg,triggerOnMouseDown:ia(ig),execCommand:function(c){if(jc.hasOwnProperty(c))return jc[c].call(null,this)},triggerElectric:ia(function(c){og(this,c)}),findPosH:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);c=C(this.doc,c);for(var k=0;k<e&&(c=oe(this.doc,c,h,f,g),!c.hitSide);++k);return c},moveH:ia(function(c,e){var f=this;this.extendSelectionsBy(function(g){return f.display.shift||f.doc.extend||g.empty()?oe(f.doc,
g.head,c,e,f.options.rtlMoveVisually):0>c?g.from():g.to()},qc)}),deleteH:ia(function(c,e){var f=this.doc;this.doc.sel.somethingSelected()?f.replaceSelection("",null,"+delete"):Gb(this,function(g){var h=oe(f,g.head,c,e,!1);return 0>c?{from:h,to:g.head}:{from:g.head,to:h}})}),findPosV:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);var k=C(this.doc,c);for(c=0;c<e&&(k=Ba(this,k,"div"),null==g?g=k.left:k.left=g,k=tg(this,k,h,f),!k.hitSide);++c);return k},moveV:ia(function(c,e){var f=this,g=this.doc,h=[],k=
!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(m){if(k)return 0>c?m.from():m.to();var n=Ba(f,m.head,"div");null!=m.goalColumn&&(n.left=m.goalColumn);h.push(n.left);var p=tg(f,n,c,e);"page"==e&&m==g.sel.primary()&&Nc(f,Ic(f,p,"div").top-n.top);return p},qc);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(c){var e=w(this.doc,c.line).text,f=c.ch,g=c.ch;if(e){var h=this.getHelper(c,"wordChars");"before"!=
c.sticky&&g!=e.length||!f?++g:--f;var k=e.charAt(f);for(k=xc(k,h)?function(l){return xc(l,h)}:/\s/.test(k)?function(l){return/\s/.test(l)}:function(l){return!/\s/.test(l)&&!xc(l)};0<f&&k(e.charAt(f-1));)--f;for(;g<e.length&&k(e.charAt(g));)++g}return new I(t(c.line,f),t(c.line,g))},toggleOverwrite:function(c){if(null==c||c!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Ya(this.display.cursorDiv,"CodeMirror-overwrite"):jb(this.display.cursorDiv,"CodeMirror-overwrite"),W(this,"overwriteToggle",
this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==ka(qa(this))},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ia(function(c,e){Wb(this,c,e)}),getScrollInfo:function(){var c=this.display.scroller;return{left:c.scrollLeft,top:c.scrollTop,height:c.scrollHeight-Ha(this)-this.display.barHeight,width:c.scrollWidth-Ha(this)-this.display.barWidth,clientHeight:Ed(this),clientWidth:cb(this)}},scrollIntoView:ia(function(c,e){null==c?(c=
{from:this.doc.sel.primary().head,to:null},null==e&&(e=this.options.cursorScrollMargin)):"number"==typeof c?c={from:t(c,0),to:null}:null==c.from&&(c={from:c,to:null});c.to||(c.to=c.from);c.margin=e||0;null!=c.from.line?(Oc(this),this.curOp.scrollToPos=c):kf(this,c.from,c.to,c.margin)}),setSize:ia(function(c,e){var f=this,g=function(k){return"number"==typeof k||/^\d+$/.test(String(k))?k+"px":k};null!=c&&(this.display.wrapper.style.width=g(c));null!=e&&(this.display.wrapper.style.height=g(e));this.options.lineWrapping&&
Ye(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(k){if(k.widgets)for(var l=0;l<k.widgets.length;l++)if(k.widgets[l].noHScroll){Sa(f,h,"widget");break}++h});this.curOp.forceUpdate=!0;W(this,"refresh",this)}),operation:function(c){return ra(this,c)},startOperation:function(){return lb(this)},endOperation:function(){return mb(this)},refresh:ia(function(){var c=this.display.cachedTextHeight;ma(this);this.curOp.forceUpdate=!0;Ub(this);Wb(this,this.doc.scrollLeft,this.doc.scrollTop);
Xd(this.display);(null==c||.5<Math.abs(c-vb(this.display))||this.options.lineWrapping)&&Nd(this);W(this,"refresh",this)}),swapDoc:ia(function(c){var e=this.doc;e.cm=null;this.state.selectingText&&this.state.selectingText();zf(this,c);Ub(this);this.display.input.reset();Wb(this,c.scrollLeft,c.scrollTop);this.curOp.forceScroll=!0;aa(this,"swapDoc",this,e);return e}),phrase:function(c){var e=this.options.phrases;return e&&Object.prototype.hasOwnProperty.call(e,c)?e[c]:c},getInputField:function(){return this.display.input.getField()},
getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};pb(a);a.registerHelper=function(c,e,f){d.hasOwnProperty(c)||(d[c]=a[c]={_global:[]});d[c][e]=f};a.registerGlobalHelper=function(c,e,f,g){a.registerHelper(c,e,g);d[c]._global.push({pred:f,val:g})}})(U);var Ih="iter insert remove copy getEditor constructor".split(" "),uc;for(uc in oa.prototype)oa.prototype.hasOwnProperty(uc)&&
0>ea(Ih,uc)&&(U.prototype[uc]=function(a){return function(){return a.apply(this.doc,arguments)}}(oa.prototype[uc]));pb(oa);U.inputStyles={textarea:V,contenteditable:O};U.defineMode=function(a){U.defaults.mode||"null"==a||(U.defaults.mode=a);Dg.apply(this,arguments)};U.defineMIME=function(a,b){qb[a]=b};U.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});U.defineMIME("text/plain","null");U.defineExtension=function(a,b){U.prototype[a]=b};U.defineDocExtension=function(a,b){oa.prototype[a]=
b};U.fromTextArea=function(a,b){function d(){a.value=h.getValue()}b=b?Za(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var c=ka(a.ownerDocument);b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(z(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form;var f=e.submit;try{var g=e.submit=function(){d();e.submit=f;e.submit();e.submit=g}}catch(k){}}b.finishInit=
function(k){k.save=d;k.getTextArea=function(){return a};k.toTextArea=function(){k.toTextArea=isNaN;d();a.parentNode.removeChild(k.getWrapperElement());a.style.display="";a.form&&(ta(a.form,"submit",d),b.leaveSubmitMethodAlone||"function"!=typeof a.form.submit||(a.form.submit=f))}};a.style.display="none";var h=U(function(k){return a.parentNode.insertBefore(k,a.nextSibling)},b);return h};(function(a){a.off=ta;a.on=z;a.wheelEventPixels=Zg;a.Doc=oa;a.splitLines=ne;a.countColumn=wa;a.findColumn=hd;a.isWordChar=
jd;a.Pass=Zc;a.signal=W;a.Line=zb;a.changeEnd=Ta;a.scrollbarModel=pf;a.Pos=t;a.cmpPos=B;a.modes=md;a.mimeModes=qb;a.resolveMode=zc;a.getMode=nd;a.modeExtensions=rb;a.extendMode=Eg;a.copyState=$a;a.startState=we;a.innerMode=od;a.commands=jc;a.keyMap=ic;a.keyName=ag;a.isModifierKey=Yf;a.lookupKey=Fb;a.normalizeKeyMap=jh;a.StringStream=X;a.SharedTextMarker=hc;a.TextMarker=Va;a.LineWidget=gc;a.e_preventDefault=la;a.e_stopPropagation=ue;a.e_stop=Mb;a.addClass=Ya;a.contains=ja;a.rmClass=jb;a.keyNames=Wa})(U);
U.version="5.65.9";return U});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.JSON5 = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.5' };
	if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) { throw TypeError(it + ' is not an object!'); }
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document) && _isObject(document.createElement);
	var _domCreate = function (it) {
	  return is ? document.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) { return it; }
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) { try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ } }
	  if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
	  if ('value' in Attributes) { O[P] = Attributes.value; }
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _library = false;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: _library ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) { _has(val, 'name') || _hide(val, 'name', key); }
	  if (O[key] === val) { return; }
	  if (isFunction) { _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) { return fn; }
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) { source = name; }
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) { _redefine(target, key, out, type & $export.U); }
	    // export
	    if (exports[key] != out) { _hide(exports, key, exp); }
	    if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) { throw TypeError("Can't call method on  " + it); }
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var $at = _stringAt(false);
	_export(_export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

	var codePointAt = _core.String.codePointAt;

	var max = Math.max;
	var min = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    var arguments$1 = arguments;
	 // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments$1[i++];
	      if (_toAbsoluteIndex(code, 0x10ffff) !== code) { throw RangeError(code + ' is not a valid code point'); }
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

	var fromCodePoint = _core.String.fromCodePoint;

	// This is a generated file. Do not edit.
	var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
	var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
	var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;

	var unicode = {
		Space_Separator: Space_Separator,
		ID_Start: ID_Start,
		ID_Continue: ID_Continue
	};

	var util = {
	    isSpaceSeparator: function isSpaceSeparator (c) {
	        return typeof c === 'string' && unicode.Space_Separator.test(c)
	    },

	    isIdStartChar: function isIdStartChar (c) {
	        return typeof c === 'string' && (
	            (c >= 'a' && c <= 'z') ||
	        (c >= 'A' && c <= 'Z') ||
	        (c === '$') || (c === '_') ||
	        unicode.ID_Start.test(c)
	        )
	    },

	    isIdContinueChar: function isIdContinueChar (c) {
	        return typeof c === 'string' && (
	            (c >= 'a' && c <= 'z') ||
	        (c >= 'A' && c <= 'Z') ||
	        (c >= '0' && c <= '9') ||
	        (c === '$') || (c === '_') ||
	        (c === '\u200C') || (c === '\u200D') ||
	        unicode.ID_Continue.test(c)
	        )
	    },

	    isDigit: function isDigit (c) {
	        return typeof c === 'string' && /[0-9]/.test(c)
	    },

	    isHexDigit: function isHexDigit (c) {
	        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
	    },
	};

	var source;
	var parseState;
	var stack;
	var pos;
	var line;
	var column;
	var token;
	var key;
	var root;

	var parse = function parse (text, reviver) {
	    source = String(text);
	    parseState = 'start';
	    stack = [];
	    pos = 0;
	    line = 1;
	    column = 0;
	    token = undefined;
	    key = undefined;
	    root = undefined;

	    do {
	        token = lex();

	        // This code is unreachable.
	        // if (!parseStates[parseState]) {
	        //     throw invalidParseState()
	        // }

	        parseStates[parseState]();
	    } while (token.type !== 'eof')

	    if (typeof reviver === 'function') {
	        return internalize({'': root}, '', reviver)
	    }

	    return root
	};

	function internalize (holder, name, reviver) {
	    var value = holder[name];
	    if (value != null && typeof value === 'object') {
	        if (Array.isArray(value)) {
	            for (var i = 0; i < value.length; i++) {
	                var key = String(i);
	                var replacement = internalize(value, key, reviver);
	                if (replacement === undefined) {
	                    delete value[key];
	                } else {
	                    Object.defineProperty(value, key, {
	                        value: replacement,
	                        writable: true,
	                        enumerable: true,
	                        configurable: true,
	                    });
	                }
	            }
	        } else {
	            for (var key$1 in value) {
	                var replacement$1 = internalize(value, key$1, reviver);
	                if (replacement$1 === undefined) {
	                    delete value[key$1];
	                } else {
	                    Object.defineProperty(value, key$1, {
	                        value: replacement$1,
	                        writable: true,
	                        enumerable: true,
	                        configurable: true,
	                    });
	                }
	            }
	        }
	    }

	    return reviver.call(holder, name, value)
	}

	var lexState;
	var buffer;
	var doubleQuote;
	var sign;
	var c;

	function lex () {
	    lexState = 'default';
	    buffer = '';
	    doubleQuote = false;
	    sign = 1;

	    for (;;) {
	        c = peek();

	        // This code is unreachable.
	        // if (!lexStates[lexState]) {
	        //     throw invalidLexState(lexState)
	        // }

	        var token = lexStates[lexState]();
	        if (token) {
	            return token
	        }
	    }
	}

	function peek () {
	    if (source[pos]) {
	        return String.fromCodePoint(source.codePointAt(pos))
	    }
	}

	function read () {
	    var c = peek();

	    if (c === '\n') {
	        line++;
	        column = 0;
	    } else if (c) {
	        column += c.length;
	    } else {
	        column++;
	    }

	    if (c) {
	        pos += c.length;
	    }

	    return c
	}

	var lexStates = {
	    default: function default$1 () {
	        switch (c) {
	        case '\t':
	        case '\v':
	        case '\f':
	        case ' ':
	        case '\u00A0':
	        case '\uFEFF':
	        case '\n':
	        case '\r':
	        case '\u2028':
	        case '\u2029':
	            read();
	            return

	        case '/':
	            read();
	            lexState = 'comment';
	            return

	        case undefined:
	            read();
	            return newToken('eof')
	        }

	        if (util.isSpaceSeparator(c)) {
	            read();
	            return
	        }

	        // This code is unreachable.
	        // if (!lexStates[parseState]) {
	        //     throw invalidLexState(parseState)
	        // }

	        return lexStates[parseState]()
	    },

	    comment: function comment () {
	        switch (c) {
	        case '*':
	            read();
	            lexState = 'multiLineComment';
	            return

	        case '/':
	            read();
	            lexState = 'singleLineComment';
	            return
	        }

	        throw invalidChar(read())
	    },

	    multiLineComment: function multiLineComment () {
	        switch (c) {
	        case '*':
	            read();
	            lexState = 'multiLineCommentAsterisk';
	            return

	        case undefined:
	            throw invalidChar(read())
	        }

	        read();
	    },

	    multiLineCommentAsterisk: function multiLineCommentAsterisk () {
	        switch (c) {
	        case '*':
	            read();
	            return

	        case '/':
	            read();
	            lexState = 'default';
	            return

	        case undefined:
	            throw invalidChar(read())
	        }

	        read();
	        lexState = 'multiLineComment';
	    },

	    singleLineComment: function singleLineComment () {
	        switch (c) {
	        case '\n':
	        case '\r':
	        case '\u2028':
	        case '\u2029':
	            read();
	            lexState = 'default';
	            return

	        case undefined:
	            read();
	            return newToken('eof')
	        }

	        read();
	    },

	    value: function value () {
	        switch (c) {
	        case '{':
	        case '[':
	            return newToken('punctuator', read())

	        case 'n':
	            read();
	            literal('ull');
	            return newToken('null', null)

	        case 't':
	            read();
	            literal('rue');
	            return newToken('boolean', true)

	        case 'f':
	            read();
	            literal('alse');
	            return newToken('boolean', false)

	        case '-':
	        case '+':
	            if (read() === '-') {
	                sign = -1;
	            }

	            lexState = 'sign';
	            return

	        case '.':
	            buffer = read();
	            lexState = 'decimalPointLeading';
	            return

	        case '0':
	            buffer = read();
	            lexState = 'zero';
	            return

	        case '1':
	        case '2':
	        case '3':
	        case '4':
	        case '5':
	        case '6':
	        case '7':
	        case '8':
	        case '9':
	            buffer = read();
	            lexState = 'decimalInteger';
	            return

	        case 'I':
	            read();
	            literal('nfinity');
	            return newToken('numeric', Infinity)

	        case 'N':
	            read();
	            literal('aN');
	            return newToken('numeric', NaN)

	        case '"':
	        case "'":
	            doubleQuote = (read() === '"');
	            buffer = '';
	            lexState = 'string';
	            return
	        }

	        throw invalidChar(read())
	    },

	    identifierNameStartEscape: function identifierNameStartEscape () {
	        if (c !== 'u') {
	            throw invalidChar(read())
	        }

	        read();
	        var u = unicodeEscape();
	        switch (u) {
	        case '$':
	        case '_':
	            break

	        default:
	            if (!util.isIdStartChar(u)) {
	                throw invalidIdentifier()
	            }

	            break
	        }

	        buffer += u;
	        lexState = 'identifierName';
	    },

	    identifierName: function identifierName () {
	        switch (c) {
	        case '$':
	        case '_':
	        case '\u200C':
	        case '\u200D':
	            buffer += read();
	            return

	        case '\\':
	            read();
	            lexState = 'identifierNameEscape';
	            return
	        }

	        if (util.isIdContinueChar(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('identifier', buffer)
	    },

	    identifierNameEscape: function identifierNameEscape () {
	        if (c !== 'u') {
	            throw invalidChar(read())
	        }

	        read();
	        var u = unicodeEscape();
	        switch (u) {
	        case '$':
	        case '_':
	        case '\u200C':
	        case '\u200D':
	            break

	        default:
	            if (!util.isIdContinueChar(u)) {
	                throw invalidIdentifier()
	            }

	            break
	        }

	        buffer += u;
	        lexState = 'identifierName';
	    },

	    sign: function sign$1 () {
	        switch (c) {
	        case '.':
	            buffer = read();
	            lexState = 'decimalPointLeading';
	            return

	        case '0':
	            buffer = read();
	            lexState = 'zero';
	            return

	        case '1':
	        case '2':
	        case '3':
	        case '4':
	        case '5':
	        case '6':
	        case '7':
	        case '8':
	        case '9':
	            buffer = read();
	            lexState = 'decimalInteger';
	            return

	        case 'I':
	            read();
	            literal('nfinity');
	            return newToken('numeric', sign * Infinity)

	        case 'N':
	            read();
	            literal('aN');
	            return newToken('numeric', NaN)
	        }

	        throw invalidChar(read())
	    },

	    zero: function zero () {
	        switch (c) {
	        case '.':
	            buffer += read();
	            lexState = 'decimalPoint';
	            return

	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return

	        case 'x':
	        case 'X':
	            buffer += read();
	            lexState = 'hexadecimal';
	            return
	        }

	        return newToken('numeric', sign * 0)
	    },

	    decimalInteger: function decimalInteger () {
	        switch (c) {
	        case '.':
	            buffer += read();
	            lexState = 'decimalPoint';
	            return

	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalPointLeading: function decimalPointLeading () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalFraction';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalPoint: function decimalPoint () {
	        switch (c) {
	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalFraction';
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalFraction: function decimalFraction () {
	        switch (c) {
	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalExponent: function decimalExponent () {
	        switch (c) {
	        case '+':
	        case '-':
	            buffer += read();
	            lexState = 'decimalExponentSign';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalExponentInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalExponentSign: function decimalExponentSign () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalExponentInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalExponentInteger: function decimalExponentInteger () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    hexadecimal: function hexadecimal () {
	        if (util.isHexDigit(c)) {
	            buffer += read();
	            lexState = 'hexadecimalInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    hexadecimalInteger: function hexadecimalInteger () {
	        if (util.isHexDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    string: function string () {
	        switch (c) {
	        case '\\':
	            read();
	            buffer += escape();
	            return

	        case '"':
	            if (doubleQuote) {
	                read();
	                return newToken('string', buffer)
	            }

	            buffer += read();
	            return

	        case "'":
	            if (!doubleQuote) {
	                read();
	                return newToken('string', buffer)
	            }

	            buffer += read();
	            return

	        case '\n':
	        case '\r':
	            throw invalidChar(read())

	        case '\u2028':
	        case '\u2029':
	            separatorChar(c);
	            break

	        case undefined:
	            throw invalidChar(read())
	        }

	        buffer += read();
	    },

	    start: function start () {
	        switch (c) {
	        case '{':
	        case '[':
	            return newToken('punctuator', read())

	        // This code is unreachable since the default lexState handles eof.
	        // case undefined:
	        //     return newToken('eof')
	        }

	        lexState = 'value';
	    },

	    beforePropertyName: function beforePropertyName () {
	        switch (c) {
	        case '$':
	        case '_':
	            buffer = read();
	            lexState = 'identifierName';
	            return

	        case '\\':
	            read();
	            lexState = 'identifierNameStartEscape';
	            return

	        case '}':
	            return newToken('punctuator', read())

	        case '"':
	        case "'":
	            doubleQuote = (read() === '"');
	            lexState = 'string';
	            return
	        }

	        if (util.isIdStartChar(c)) {
	            buffer += read();
	            lexState = 'identifierName';
	            return
	        }

	        throw invalidChar(read())
	    },

	    afterPropertyName: function afterPropertyName () {
	        if (c === ':') {
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    beforePropertyValue: function beforePropertyValue () {
	        lexState = 'value';
	    },

	    afterPropertyValue: function afterPropertyValue () {
	        switch (c) {
	        case ',':
	        case '}':
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    beforeArrayValue: function beforeArrayValue () {
	        if (c === ']') {
	            return newToken('punctuator', read())
	        }

	        lexState = 'value';
	    },

	    afterArrayValue: function afterArrayValue () {
	        switch (c) {
	        case ',':
	        case ']':
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    end: function end () {
	        // This code is unreachable since it's handled by the default lexState.
	        // if (c === undefined) {
	        //     read()
	        //     return newToken('eof')
	        // }

	        throw invalidChar(read())
	    },
	};

	function newToken (type, value) {
	    return {
	        type: type,
	        value: value,
	        line: line,
	        column: column,
	    }
	}

	function literal (s) {
	    for (var i = 0, list = s; i < list.length; i += 1) {
	        var c = list[i];

	        var p = peek();

	        if (p !== c) {
	            throw invalidChar(read())
	        }

	        read();
	    }
	}

	function escape () {
	    var c = peek();
	    switch (c) {
	    case 'b':
	        read();
	        return '\b'

	    case 'f':
	        read();
	        return '\f'

	    case 'n':
	        read();
	        return '\n'

	    case 'r':
	        read();
	        return '\r'

	    case 't':
	        read();
	        return '\t'

	    case 'v':
	        read();
	        return '\v'

	    case '0':
	        read();
	        if (util.isDigit(peek())) {
	            throw invalidChar(read())
	        }

	        return '\0'

	    case 'x':
	        read();
	        return hexEscape()

	    case 'u':
	        read();
	        return unicodeEscape()

	    case '\n':
	    case '\u2028':
	    case '\u2029':
	        read();
	        return ''

	    case '\r':
	        read();
	        if (peek() === '\n') {
	            read();
	        }

	        return ''

	    case '1':
	    case '2':
	    case '3':
	    case '4':
	    case '5':
	    case '6':
	    case '7':
	    case '8':
	    case '9':
	        throw invalidChar(read())

	    case undefined:
	        throw invalidChar(read())
	    }

	    return read()
	}

	function hexEscape () {
	    var buffer = '';
	    var c = peek();

	    if (!util.isHexDigit(c)) {
	        throw invalidChar(read())
	    }

	    buffer += read();

	    c = peek();
	    if (!util.isHexDigit(c)) {
	        throw invalidChar(read())
	    }

	    buffer += read();

	    return String.fromCodePoint(parseInt(buffer, 16))
	}

	function unicodeEscape () {
	    var buffer = '';
	    var count = 4;

	    while (count-- > 0) {
	        var c = peek();
	        if (!util.isHexDigit(c)) {
	            throw invalidChar(read())
	        }

	        buffer += read();
	    }

	    return String.fromCodePoint(parseInt(buffer, 16))
	}

	var parseStates = {
	    start: function start () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        push();
	    },

	    beforePropertyName: function beforePropertyName () {
	        switch (token.type) {
	        case 'identifier':
	        case 'string':
	            key = token.value;
	            parseState = 'afterPropertyName';
	            return

	        case 'punctuator':
	            // This code is unreachable since it's handled by the lexState.
	            // if (token.value !== '}') {
	            //     throw invalidToken()
	            // }

	            pop();
	            return

	        case 'eof':
	            throw invalidEOF()
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    afterPropertyName: function afterPropertyName () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator' || token.value !== ':') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        parseState = 'beforePropertyValue';
	    },

	    beforePropertyValue: function beforePropertyValue () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        push();
	    },

	    beforeArrayValue: function beforeArrayValue () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        if (token.type === 'punctuator' && token.value === ']') {
	            pop();
	            return
	        }

	        push();
	    },

	    afterPropertyValue: function afterPropertyValue () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        switch (token.value) {
	        case ',':
	            parseState = 'beforePropertyName';
	            return

	        case '}':
	            pop();
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    afterArrayValue: function afterArrayValue () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        switch (token.value) {
	        case ',':
	            parseState = 'beforeArrayValue';
	            return

	        case ']':
	            pop();
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    end: function end () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'eof') {
	        //     throw invalidToken()
	        // }
	    },
	};

	function push () {
	    var value;

	    switch (token.type) {
	    case 'punctuator':
	        switch (token.value) {
	        case '{':
	            value = {};
	            break

	        case '[':
	            value = [];
	            break
	        }

	        break

	    case 'null':
	    case 'boolean':
	    case 'numeric':
	    case 'string':
	        value = token.value;
	        break

	    // This code is unreachable.
	    // default:
	    //     throw invalidToken()
	    }

	    if (root === undefined) {
	        root = value;
	    } else {
	        var parent = stack[stack.length - 1];
	        if (Array.isArray(parent)) {
	            parent.push(value);
	        } else {
	            Object.defineProperty(parent, key, {
	                value: value,
	                writable: true,
	                enumerable: true,
	                configurable: true,
	            });
	        }
	    }

	    if (value !== null && typeof value === 'object') {
	        stack.push(value);

	        if (Array.isArray(value)) {
	            parseState = 'beforeArrayValue';
	        } else {
	            parseState = 'beforePropertyName';
	        }
	    } else {
	        var current = stack[stack.length - 1];
	        if (current == null) {
	            parseState = 'end';
	        } else if (Array.isArray(current)) {
	            parseState = 'afterArrayValue';
	        } else {
	            parseState = 'afterPropertyValue';
	        }
	    }
	}

	function pop () {
	    stack.pop();

	    var current = stack[stack.length - 1];
	    if (current == null) {
	        parseState = 'end';
	    } else if (Array.isArray(current)) {
	        parseState = 'afterArrayValue';
	    } else {
	        parseState = 'afterPropertyValue';
	    }
	}

	// This code is unreachable.
	// function invalidParseState () {
	//     return new Error(`JSON5: invalid parse state '${parseState}'`)
	// }

	// This code is unreachable.
	// function invalidLexState (state) {
	//     return new Error(`JSON5: invalid lex state '${state}'`)
	// }

	function invalidChar (c) {
	    if (c === undefined) {
	        return syntaxError(("JSON5: invalid end of input at " + line + ":" + column))
	    }

	    return syntaxError(("JSON5: invalid character '" + (formatChar(c)) + "' at " + line + ":" + column))
	}

	function invalidEOF () {
	    return syntaxError(("JSON5: invalid end of input at " + line + ":" + column))
	}

	// This code is unreachable.
	// function invalidToken () {
	//     if (token.type === 'eof') {
	//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
	//     }

	//     const c = String.fromCodePoint(token.value.codePointAt(0))
	//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
	// }

	function invalidIdentifier () {
	    column -= 5;
	    return syntaxError(("JSON5: invalid identifier character at " + line + ":" + column))
	}

	function separatorChar (c) {
	    console.warn(("JSON5: '" + (formatChar(c)) + "' in strings is not valid ECMAScript; consider escaping"));
	}

	function formatChar (c) {
	    var replacements = {
	        "'": "\\'",
	        '"': '\\"',
	        '\\': '\\\\',
	        '\b': '\\b',
	        '\f': '\\f',
	        '\n': '\\n',
	        '\r': '\\r',
	        '\t': '\\t',
	        '\v': '\\v',
	        '\0': '\\0',
	        '\u2028': '\\u2028',
	        '\u2029': '\\u2029',
	    };

	    if (replacements[c]) {
	        return replacements[c]
	    }

	    if (c < ' ') {
	        var hexString = c.charCodeAt(0).toString(16);
	        return '\\x' + ('00' + hexString).substring(hexString.length)
	    }

	    return c
	}

	function syntaxError (message) {
	    var err = new SyntaxError(message);
	    err.lineNumber = line;
	    err.columnNumber = column;
	    return err
	}

	var stringify = function stringify (value, replacer, space) {
	    var stack = [];
	    var indent = '';
	    var propertyList;
	    var replacerFunc;
	    var gap = '';
	    var quote;

	    if (
	        replacer != null &&
	        typeof replacer === 'object' &&
	        !Array.isArray(replacer)
	    ) {
	        space = replacer.space;
	        quote = replacer.quote;
	        replacer = replacer.replacer;
	    }

	    if (typeof replacer === 'function') {
	        replacerFunc = replacer;
	    } else if (Array.isArray(replacer)) {
	        propertyList = [];
	        for (var i = 0, list = replacer; i < list.length; i += 1) {
	            var v = list[i];

	            var item = (void 0);

	            if (typeof v === 'string') {
	                item = v;
	            } else if (
	                typeof v === 'number' ||
	                v instanceof String ||
	                v instanceof Number
	            ) {
	                item = String(v);
	            }

	            if (item !== undefined && propertyList.indexOf(item) < 0) {
	                propertyList.push(item);
	            }
	        }
	    }

	    if (space instanceof Number) {
	        space = Number(space);
	    } else if (space instanceof String) {
	        space = String(space);
	    }

	    if (typeof space === 'number') {
	        if (space > 0) {
	            space = Math.min(10, Math.floor(space));
	            gap = '          '.substr(0, space);
	        }
	    } else if (typeof space === 'string') {
	        gap = space.substr(0, 10);
	    }

	    return serializeProperty('', {'': value})

	    function serializeProperty (key, holder) {
	        var value = holder[key];
	        if (value != null) {
	            if (typeof value.toJSON5 === 'function') {
	                value = value.toJSON5(key);
	            } else if (typeof value.toJSON === 'function') {
	                value = value.toJSON(key);
	            }
	        }

	        if (replacerFunc) {
	            value = replacerFunc.call(holder, key, value);
	        }

	        if (value instanceof Number) {
	            value = Number(value);
	        } else if (value instanceof String) {
	            value = String(value);
	        } else if (value instanceof Boolean) {
	            value = value.valueOf();
	        }

	        switch (value) {
	        case null: return 'null'
	        case true: return 'true'
	        case false: return 'false'
	        }

	        if (typeof value === 'string') {
	            return quoteString(value, false)
	        }

	        if (typeof value === 'number') {
	            return String(value)
	        }

	        if (typeof value === 'object') {
	            return Array.isArray(value) ? serializeArray(value) : serializeObject(value)
	        }

	        return undefined
	    }

	    function quoteString (value) {
	        var quotes = {
	            "'": 0.1,
	            '"': 0.2,
	        };

	        var replacements = {
	            "'": "\\'",
	            '"': '\\"',
	            '\\': '\\\\',
	            '\b': '\\b',
	            '\f': '\\f',
	            '\n': '\\n',
	            '\r': '\\r',
	            '\t': '\\t',
	            '\v': '\\v',
	            '\0': '\\0',
	            '\u2028': '\\u2028',
	            '\u2029': '\\u2029',
	        };

	        var product = '';

	        for (var i = 0; i < value.length; i++) {
	            var c = value[i];
	            switch (c) {
	            case "'":
	            case '"':
	                quotes[c]++;
	                product += c;
	                continue

	            case '\0':
	                if (util.isDigit(value[i + 1])) {
	                    product += '\\x00';
	                    continue
	                }
	            }

	            if (replacements[c]) {
	                product += replacements[c];
	                continue
	            }

	            if (c < ' ') {
	                var hexString = c.charCodeAt(0).toString(16);
	                product += '\\x' + ('00' + hexString).substring(hexString.length);
	                continue
	            }

	            product += c;
	        }

	        var quoteChar = quote || Object.keys(quotes).reduce(function (a, b) { return (quotes[a] < quotes[b]) ? a : b; });

	        product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);

	        return quoteChar + product + quoteChar
	    }

	    function serializeObject (value) {
	        if (stack.indexOf(value) >= 0) {
	            throw TypeError('Converting circular structure to JSON5')
	        }

	        stack.push(value);

	        var stepback = indent;
	        indent = indent + gap;

	        var keys = propertyList || Object.keys(value);
	        var partial = [];
	        for (var i = 0, list = keys; i < list.length; i += 1) {
	            var key = list[i];

	            var propertyString = serializeProperty(key, value);
	            if (propertyString !== undefined) {
	                var member = serializeKey(key) + ':';
	                if (gap !== '') {
	                    member += ' ';
	                }
	                member += propertyString;
	                partial.push(member);
	            }
	        }

	        var final;
	        if (partial.length === 0) {
	            final = '{}';
	        } else {
	            var properties;
	            if (gap === '') {
	                properties = partial.join(',');
	                final = '{' + properties + '}';
	            } else {
	                var separator = ',\n' + indent;
	                properties = partial.join(separator);
	                final = '{\n' + indent + properties + ',\n' + stepback + '}';
	            }
	        }

	        stack.pop();
	        indent = stepback;
	        return final
	    }

	    function serializeKey (key) {
	        if (key.length === 0) {
	            return quoteString(key, true)
	        }

	        var firstChar = String.fromCodePoint(key.codePointAt(0));
	        if (!util.isIdStartChar(firstChar)) {
	            return quoteString(key, true)
	        }

	        for (var i = firstChar.length; i < key.length; i++) {
	            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
	                return quoteString(key, true)
	            }
	        }

	        return key
	    }

	    function serializeArray (value) {
	        if (stack.indexOf(value) >= 0) {
	            throw TypeError('Converting circular structure to JSON5')
	        }

	        stack.push(value);

	        var stepback = indent;
	        indent = indent + gap;

	        var partial = [];
	        for (var i = 0; i < value.length; i++) {
	            var propertyString = serializeProperty(String(i), value);
	            partial.push((propertyString !== undefined) ? propertyString : 'null');
	        }

	        var final;
	        if (partial.length === 0) {
	            final = '[]';
	        } else {
	            if (gap === '') {
	                var properties = partial.join(',');
	                final = '[' + properties + ']';
	            } else {
	                var separator = ',\n' + indent;
	                var properties$1 = partial.join(separator);
	                final = '[\n' + indent + properties$1 + ',\n' + stepback + ']';
	            }
	        }

	        stack.pop();
	        indent = stepback;
	        return final
	    }
	};

	var JSON5 = {
	    parse: parse,
	    stringify: stringify,
	};

	var lib = JSON5;

	var es5 = lib;

	return es5;

})));

},{}],4:[function(require,module,exports){

let displayedExercises = require("./exercisesToShowOnIndex.js");
let quizExercises = require("./data/quiz.js");

let exercises = [...displayedExercises, ...quizExercises];

module.exports = exercises;
},{"./data/quiz.js":13,"./exercisesToShowOnIndex.js":20}],5:[function(require,module,exports){
module.exports = [
  {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: '2dArrayPrintAll',

    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]])',
      '([[13, 6], [1, 2], [4, 6]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a two - dimensional array ARR, output each element of the array on its own line. 
    At the end of each row, output the phrase END ROW. `,

    solution: `method PrintAll(ARR)
  loop R from 0 to ARR.Length() - 1
    loop C from 0 to ARR[R].Length() - 1
      output ARR[R][C]
    end loop
    output "END ROW"
  end loop
end method`,
  },
  {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'DiagArray',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]])',
      '([[13, 6], [1, 2], [4, 6]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Give a two - dimensional square array ARR, output a one - dimensional array that contains the elements 
    of its <i>primary diagonal</i > - that is, the elements whose row index and 
    column index are the same. 
    You can assume ARR has the same number of rows and columns.
    You can make a new array of length L with the command <code>NEW = new Array(L)</code> `,
    solution: `method FindDiagonal(ARR)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  NEW = new Array(ARR.Length())
  loop I from 0 to ARR.Length() - 1
    NEW[I] = ARR[I][I]
  end loop
  output NEW
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'FindValue',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6]], 0)`,
      '([[2, 3], [6, 4], [2, 3]], 4)',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]], "A")',
      '([[13, 6], [1, 2], [4, 6]], 6)',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]], 4)',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a two-dimensional array ARR and a search value VAL,
    search the array in reading order - rows then columns - to find the first
    occurence of VAL. Once you find it, output "VAL found at index [R][C]"
    replacing VAL, R, and C with the appropriate values. If it isn't found, output
    "VAL not found". `,
    solution: `method FindValue(ARR, VAL)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  FOUND = FALSE
  loop ROW from 0 to ARR.Length() - 1
    loop COL from 0 to ARR[ROW].Length() - 1
      if ARR[ROW][COL] = VAL then
        output "" + VAL + " found at index [" + ROW + "][" + COL + "]"
        return
      end if
    end loop
  end loop
  output "" + VAL + " not found"
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'SwapRows',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6]], 0, 1)`,
      '([[2, 3], [6, 4], [2, 3]], 0, 2)',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]], 1, 2)',
      '([[13, 6], [1, 2], [4, 6]], 0, 2)',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]], 2, 3)',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2d array MAT and two indices K and L, construct code to swap
    the elements in row K with the elements in row L (you can assume all rows are the
      same length). OUTPUT the new MAT on completion. (IB November 2018, 12b)`,
    solution: `method SwapRows(MAT, K, L)
      loop I from 0 to MAT[K].Length()-1
        TEMP = MAT[K][I]
        MAT[K][I]=MAT[L][I]
        MAT[L][I]=TEMP
      end loop
      output MAT
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'Sort2D',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 21, 5],[4, 15, 6]])`,
      '([[2, 3], [1, 6], [2, 2]])',
      '([[13, 6, 11], [1, 2, 3], [4, 6, 5], [7, 0, -3]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2D array MAT of numbers, construct a method that will sort the matrix 
    so that the sum of each row is in ascending order, and return the sorted array.
    
    Hint: It may be helpful to make submethods such as SumRow(MAT, ROW) and SwapRows(MAT, R1, R2).
    If you make methods inside the main method, you can use them just fine.`,
    solution: `method Sort2D(MAT)
    // Using selection sort
    loop FRNT from 0 to MAT.Length() - 2
      loop CHK from (FRNT + 1) to (MAT.Length() - 1)
        MIN = FRNT
        if SumRow(MAT, CHK) < SumRow(MAT, MIN) then
          MIN = CHK
        end if
        if MIN != FRNT then
          SwapRows(MAT, FRNT, MIN)
        end if
      end loop
    end loop
    
    output MAT


    method SumRow(MAT, R)
      S = 0
      loop I from 0 to MAT[R].Length() - 1
        S = S + MAT[R][I]
      end loop
      return S
    end method

    method SwapRows(MAT, K, L)
      loop I from 0 to MAT[K].Length() - 1
        TEMP = MAT[K][I]
        MAT[K][I]=MAT[L][I]
        MAT[L][I]=TEMP
      end loop
      return MAT
    end method
    
  end method`,

  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'DiagonalCollection',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([[13, 6], [1, 2]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2d array square MAT, build a collection COL that contains the diagonal elements of MAT. Output the new collection. You can make a new collection with the command COL = new Collection()`,
    solution: `method Diagonal(MAT)
    COL = new Collection() 
    loop I from 0 to MAT.Length() - 1
      COL.addItem(MAT[I][I])
    end loop
    output COL
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'CollectionToStack',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a stack STK that contains 
    the elements so that the first element in the collection is the bottom 
    element in the stack. Output the stack. You can create a new stack with the command
    STK = new Stack()`,
    solution: `method CollectionToStack(COL)
        STK = new Stack()
        loop while COL.hasNext() 
          STK.push(COL.getNext())
        end loop
        output STK
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'CollectionToQueue',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a queue that contains 
    the elements so that the first element in the collection is the front of the queue. 
    Output the queue. You can create a new queue with the command
    QUE = new Queue()`,
    solution: `method CollectinToQueue(COL)
        QUE = new Queue()
        loop while COL.hasNext() 
          QUE.enqueue(COL.getNext())
        end loop
        output QUE
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'ReverseCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a new collection that contains the reverse  create a queue
      that contains the same elements in reverse order. (Hint: use a stack in the middle!).
      Output the new collection.`,
    solution: `method ReverseCollection(COL)
        STK = new Stack()
        BCK = new Collection()
        COL.resetNext()

        loop while COL.hasNext() 
          STK.push(COL.getNext())
        end loop

        loop while NOT STK.isEmpty()
          BCK.addItem(STK.pop())
        end loop
        
        output BCK
    end method`,
  }, { //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'SplitStack',
    inputType: "stack",
    inputs: [
      '(B[1, 2, 3]T)',
      '(B[7, -3, 3, 14]T)',
      '(B[9, -2, 5, 11, 2]T)',
      '(B[2, 3, 4, 5, 6]T)',
      '(B[3, -3, 3, -3, 3]T)'
    ],
    question: `Given a stack if integers, STK, take items from the top of the stack
    and move them into a second stack, until you find a 3. The 3 should not be put in
    EITHER stack. 
    
    Output FIRST the new stack THEN the old stack (outputting empty stacks is fine)`,
    solution: `method SplitStack(STK)
    STK2 = new Stack()
    FOUND = false
    loop while NOT STK.isEmpty() AND NOT FOUND
      E = STK.pop()
      if E = 3 then
        FOUND = true
      else
        STK2.push(E)
      end if
    end loop

    output STK2
    output STK
end method`,
  }
]
},{}],6:[function(require,module,exports){
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
    title: 'Array',
    // Pseudocode problems should start with a capital letter
    name: 'FirstSecond6',
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
      '([5, 6])',
      '([5, 5])',
      '([1, 2, 3, 4, 6])',
      '([1, 2, 3, 4])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given an array of numbers, output TRUE if 6 appears as either the first or second element in the array. You can assume the array has at least two elements.`,
    solution: `method FirstSecond6(NUMS)
    if NUMS[0] = 6 OR NUMS[1] = 6 then
      output TRUE
    else
      output FALSE
    end if
  end method`,
  },
  {
    //title is the category it appears in on the homepage
    title: 'Array',
    // Pseudocode problems should start with a capital letter
    name: 'SumFirstThree',
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
      '([3, 6, -1])',
      '([5, 6, 12])',
      '([5, 5, 5])',
      '([1, 2, 3, 4, 6])',
      '([1, 2, 3, 4])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given an array of numbers, output the sum of the first three values. You can assume there are at least three elements in the array.`,
    solution: `method SumFirstThree(NUMS)
    output NUMS[0]+NUMS[1]+NUMS[2]
  end method`,
  },
  {
    //title is the category it appears in on the homepage
    title: 'Array',
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
    question: `Given an array of numbers, output TRUE if 6 appears as either the first or last element in the array. The array will be length 1 or more. Use ARR.Length() to access the number of elements in the array.`,
    solution: `method FirstLast6(NUMS)
    END = NUMS.Length() - 1
    if NUMS[0] = 6 OR NUMS[END] = 6 then
      output TRUE
    else
      output FALSE
    end if
  end method`,
  },
  {
    title: 'Array',
    name: 'SameFirstLast',
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
    question: `Given an array of numbers, output TRUE if the array is length 1 or more, and the first element and the last element are equal. Otherwise output FALSE`,
    solution: `method SameFirstLast(NUMS)
    END = NUMS.Length() - 1
    if END >= 0 AND NUMS[END] = NUMS[0] then
      output TRUE
    else
      output FALSE
    end if
  end method`,
  },
  {
    title: 'Array',
    name: 'CommonEnd',
    inputs: [
      '([1, 2, 3], [7, 3])',
      '([1, 2, 3], [7, 3, 2])',
      '([1, 2, 3], [1, 3])',
      '([1, 2, 3], [1])',
      '([1, 2, 3], [2])',
    ],
    question: `Given 2 arrays, ARR1 and ARR2, output TRUE if they have the same first element or they have the same last element, and FALSE otherwise.`,
    solution: `method CommonEnd(ARR1, ARR2)
    if ARR1[0] = ARR2[0] OR ARR1[ARR1.Length() - 1] = ARR2[ARR2.Length() - 1] then
      output TRUE
    else
      output FALSE
    end if
  end method`
  },
  {
    title: 'Array',
    name: 'MaxEnd',
    inputs: [
      '([1, 2, 3])',
      '([11, 5, 9, 2, 1])',
      '([2, 11, 3, 7, 1])',
      '([11, 3, 3])',
      '([3, 11])',
      '([2, 2, 2, 2])',
      '([2, 11, 2])',
      '([0, 0, 1])',
    ],
    question: `Given an array of numbers, figure out which is larger, the first
    or last element in the array, and set all the other elements to be that value. Then output the new array.
    You can use ARR.Length() to find the length of the array.`,
    solution: `method MaxEnd(NUMS)
    if NUMS[0] > NUMS[NUMS.Length()-1] then
      MAX = NUMS[0]
    else
      MAX = NUMS[NUMS.Length()-1]
    end if
    loop I from 0 to NUMS.Length()-1
      NUMS[I] = MAX
    end loop
    output NUMS
  end method`

  },
  {
    title: 'Array',
    name: 'Sum2',
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
    question: `Given an array of numbers, output the sum of the first 2 elements in the array.
    If the array length is less than 2, just sum up the elements that exist, returning 0 if
    the array is length 0. You can use ARR.Length() to access the length of the array.`,
    solution: `method Sum2(NUMS)
    if NUMS.Length() = 0 then
      output 0
    else if NUMS.Length() = 1 then
      output NUMS[0]
    else
      output NUMS[0]+NUMS[1]
    end if
  end method`
  },
  {
    title: 'Array',
    name: 'MiddleWay',
    inputs: [
      '([1, 2, 3], [4, 5, 6])',
      '([7, 7, 7], [3, 8, 0])',
      '([5, 2, 9], [1, 4, 5])',
      '([1, 9, 7], [4, 8, 8])',
      '([1, 2, 3], [3, 1, 4])',
      '([1, 2, 3], [4, 1, 1])',
    ],
    question: `Given 2 arrays that are both known to have length 3, output a new array of length 2
    containing their middle elements. You can make a new array with the format <code>NEW = [e1, e2, e3]</code>`,
    solution: `method MiddleWay(ARR1, ARR2)
    NEW = [ARR1[1], ARR2[1]];
    output NEW
  end method`
  },
  {
    title: 'Array',
    name: 'MakeEnds',
    inputs: [
      '([1, 2, 3])',
      '(["a", "b", "c", "d"])',
      '([TRUE, FALSE, FALSE, TRUE])',
      '([1.2, 2.0, 2e8, 2.892, 2, 2, 2, 3])',
      '([7, 4])',
      '([7])',
      '([5, 2, 9])',
      '([2, 3, 4, 1])',
    ],
    question: `Given an array, return a new array length 2 containing the
    first and last elements from the original array. The original array will be
    length 1 or more. You can make a new array with the format <code>NEW = [e1, e2, e3]</code>`,
    solution: `method MakeEnds(ARR)
    NEW = [ARR[0], ARR[ARR.Length() - 1]]
    output NEW
  end method`
  },
  {
    title: 'Array',
    name: 'Has23',
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
    question: 'Given an array that contains exactly two numbers, output TRUE if it contains a 2 or a 3,. FALSE otherwise',
    solution: `method Has23(NUMS)
    if NUMS[0] = 2 OR NUMS[0] = 3 OR NUMS[1] = 2 OR NUMS[1] = 3 then
      output TRUE
    else
      output FALSE
    end if
  end method`
  },
  {
    title: 'Array',
    name: 'No23',
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
    question: 'Given an array of numbers of length 2, output TRUE if it does not contain a 2 or 3, FALSE otherwise',
    solution: `method No23(NUMS)
  if NUMS[0] = 2 OR NUMS[1] = 2 OR NUMS[0] = 3 OR NUMS[1] = 3 then
    output FALSE
  else
    output TRUE
  end if
end method`
  },
  {
    title: 'Array',
    name: 'Double23',
    inputs: [
      '([2, 2])',
      '([3, 3])',
      '([2, 3])',
      '([3, 2, 3])',
      '([4, 5, 2, 3])',
      '([2])',
      '([3])',
      '([])',
      '([3, 4])',
    ],
    question: `Given an array of numbers, output TRUE if the array contains at least two 2s or at least two 3s. Use ARR.Length() to get its length.`,
    solution: `method Double23(ARR)
  NUM2 = 0
  NUM3 = 0

  loop I from 0 to ARR.Length()-1
    if ARR[I] = 2 then
      NUM2 = NUM2 + 1
    else if ARR[I] = 3 then
      NUM3 = NUM3 + 1
    end if
  end loop

  if NUM3 >= 2 OR NUM2 >= 2 then
    output TRUE
  else
    output FALSE
  end if

end method`,
  },
  {
    title: 'Array',
    name: 'Sum',
    inputs: [
      '([1, 2, 3, 4])',
      '([2, 3, 5, 7, 2, 3])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an array of integers, output the sum of all numbers in the array.`,
    solution: `method Sum(ARR)
    SUM = 0
    loop I from 0 to ARR.Length()-1
      SUM = SUM + ARR[I]
    end loop
    output SUM
end method`
  },
  {
    title: 'Array',
    name: 'Average',
    inputs: [
      '([1, 2, 3, 4])',
      '([2, 3, 5, 7, 2, 3])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an array of integers, output the average (mean) of all numbers in the array.`,
    solution: `method Average(ARR)
    SUM = 0
    loop I from 0 to ARR.Length()-1
      SUM = SUM + ARR[I]
    end loop
    output SUM / ARR.Length()
end method`
  },
  {
    title: 'Array',
    name: 'PositiveAverage',
    inputs: [
      '([1, 2, 3, 4])',
      '([2, 3, 5, 7, 2, 3])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an array of integers, output the average of all postive numbers in the array.`,
    solution: `method PositiveAverage(ARR)
    SUM = 0
    COUNT = 0
    loop I from 0 to ARR.Length()-1
      if ARR[I] > 0
        SUM = SUM + ARR[I]
        COUNT = COUNT + 1
      end if
    end loop
    output SUM / COUNT
end method`
  },
  {
    title: 'Array',
    name: 'Fix23',
    inputs: [
      '([1, 2, 3, 4])',
      '([2, 3, 5, 7, 2, 3])',
      '([1, 2, 1])',
      '([3, 2, 1])',
      '([2, 2, 3])',
      '([2, 3, 3])',
    ],
    question: `Given an array of integers, any time there is a 2 followed by a 3, change the 3 to a 0. 
    Output the changed array.`,
    solution: `method Fix23(ARR) 
    loop I from 0 to ARR.Length()-2
      if ARR[I] = 2 AND ARR[I+1] = 3 then
        ARR[I+1] = 0
      end if
    end loop
    output ARR
end method`
  },
  {
    title: 'Array',
    name: 'Start1',
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
    question: `Start with 2 int arrays, A and B, of any length. Output how many of the arrays
    have 1 as their first element.`,
    solution: `method Start1(A,B)
    COUNT = 0
    if A.Length() > 0 AND A[0] = 1 then
      COUNT = COUNT + 1
    end if
    if B.Length() > 0 AND B[0] = 1 then
      COUNT = COUNT + 1
    end if
    output COUNT
  end method`

  },
  {
    title: 'Array',
    name: 'BiggerSum',
    inputs: [
      '([1, 2, 3], [3, 4, 4])',
      '([3, 4, 11], [1, 2, 8])',
      '([1, 1, -1], [1, 0, 0])',
      '([2, 1, 1], [1, 1, 2, 3])',
      '([2, 2, 1, 1], [1, 3, 3, -1])',
      '([1, 3], [2, 2])',
      '([6, 7], [3, 1])',
    ],
    question: `Start with integer arrays, A and B. 
      Find the sum of each array and output the winner 
      in the form "<code>A: 23</code>" (where 23 is the sum). 
      If there is a tie, output in the form "<code>TIE: 23</code>"`,
    solution: `method BiggerSum(A,B)
    SUMA = 0
    SUMB = 0
    loop I from 0 to A.Length()-1
      SUMA = SUMA + A[I]
    end loop
    loop I from 0 to B.Length() - 1
      SUMB = SUMB + B[I]
    end loop
    if SUMA > SUMB then
      output "A: " + SUMA
    else if SUMB > SUMA then
      output "B: " + SUMB
    else
      output "TIE: " + SUMA
    end if
  end method`
  },
  {
    title: 'Array',
    name: 'MakeMiddle',
    inputs: [
      '([1, 2, 3, 4, 5])',
      '([7, 1, 2, 3, 4, 9])',
      '([1, 2, 7])',
      '([5, 2, 4, 7])',
      '([9, 0, 4, 3, 9, 1, 2])',
    ],
    question: `Given an array of integers, output a new array of length 2. 
    The new array should contain the two middle elements if the original array had
    an even number of elements, or it should contain the exact middle element twice
    if the original array had an odd number of elements.`,
    solution: `method MakeMiddle(ARR)
    if ARR.Length() mod 2 = 0 then
      MID = ARR.Length() / 2 
      //if length = 4, this will be 2, and we want 1 and 2
      output [ ARR[MID-1], ARR[MID] ]
    else
      MID = ARR.Length() div 2
      // if length = 5, this will be 2, just what we want!
      output [ ARR[MID], ARR[MID] ]
    end if
  end method`,

  },
  {
    title: 'Array',
    name: 'SelectionSort',
    inputs: [
      '([1, 3, 6, 2, 5])',
      '([7, 1, 2, 3, 4, 9])',
      '([1, 3, 2])',
      '([5, 2, 4, 7])',
      '([9, 0, 4, 3, 9, 1, 2])',
    ],
    question: `Sort the given array using selection sort, then output the sorted array.
    (the tool won't know what sort you use, so check the solution to make sure it is right!)`,
    solution: `method SelectionSort(ARR)
    // FRNT is the first unsorted element
    loop FRNT from 0 to ARR.Length() - 2
      MININDEX = FRNT
      // CHK looks for a new minimum
      loop CHK from FRNT + 1 to ARR.Length() - 1
        if ARR[CHK] < ARR[MININDEX] then
          MININDEX = CHK
        end if
      end loop
      // Swap the min value to the front position
      TEMP = ARR[FRNT]
      ARR[FRNT] = ARR[MININDEX]
      ARR[MININDEX] = TEMP
    end loop
    output ARR
  end method`,

  },
  {
    title: 'Array',
    name: 'BubbleSort',
    inputs: [
      '([1, 3, 6, 2, 5])',
      '([7, 1, 2, 3, 4, 9])',
      '([1, 3, 2])',
      '([5, 2, 4, 7])',
      '([9, 0, 4, 3, 9, 1, 2])',
    ],
    question: `Sort the given array using bubble sort, then output the sorted array.
    (the tool won't know what sort you use, so check the solution to make sure it is right!)`,
    solution: `method BubbleSort(ARR)
    loop NUMBUBBLED from 0 to ARR.Length() - 2
      END = ARR.Length() - NUMBUBBLED - 1
      loop BUB from 0 to END
        if ARR[BUB] > ARR[BUB + 1] then
          TEMP = ARR[BUB]
          ARR[BUB] = ARR[BUB + 1]
          ARR[BUB + 1] = TEMP
        end if
      end loop
    end loop
    output ARR
  end method`,

  },
  {
    title: 'Array',
    name: 'BinarySearch',
    inputs: [
      '([1, 2, 3, 5, 7, 11], 7)',
      '([1, 2, 2, 2, 2, 3, 4, 9], 5)',
      '([1, 7, 12, 17, 20, 23, 23], 20)',
      '([2, 4, 5, 7, 7, 11, 11, 17], 17)',
      '([0, 1, 2, 8, 9, 9], 0)',
    ],
    question: `Search the sorted array ARR for the value VAL, outputting the INDEX of its location. If VAL is not in the array, output "NOT FOUND".`,
    solution: `method BinarySearch(ARR, VAL)
    BEGIN = 0
    FOUND = FALSE
    END = ARR.Length() - 1

    loop while BEGIN <= END AND NOT FOUND 
      MID = (BEGIN + END) div 2
      if ARR[MID] = VAL then
        output MID
        FOUND = TRUE
      else if ARR[MID] < VAL then
        BEGIN = MID + 1
      else
        END = MID - 1
      end if
    end loop

    if NOT FOUND then
      output "NOT FOUND"
    end if
    
  end method`,

  },
  {
    title: 'Array',
    name: 'FindTallest',
    inputs: [
      '(["LeBron", "Michael", "Magic", "Shaquille"], [206, 196, 202, 216])',
      '(["Pelé", "Maradona", "Messi", "Ronaldo"], [173, 165, 170, 185])',
      '(["Dave","Mary","Bob"], [180, 172, 191])',

    ],
    preamble: `function Compare(str1, str2) { return str1.localeCompare(str2) }`,
    question: `In this problem, you are given two arrays called NAMES and HEIGHTS. NAMES is an array of strings, representing names. HEIGHTS is an array of heights, in cm. The name in a certain position corresponds to the height in the same position. Your method should find, and output, the tallest person in the list.`,
    solution: `method FindTallest(NAMES, HEIGHTS)
    TallestIndex = 0
    
    loop I from 1 to HEIGHTS.Length() - 1 
      if HEIGHTS[I] > HEIGHTS[TallestIndex] then
         TallestIndex = I
      end if
    end loop
    output NAMES[TallestIndex]
    
  end method`,

  },
  {
    title: 'Array',
    name: 'FindBiggestBMI',
    inputs: [
      '(["LeBron", "Michael", "Magic", "Shaquille"], [206, 196, 202, 216], [113, 98, 100, 147])',
      '(["Pelé", "Maradona", "Messi", "Ronaldo"], [173, 165, 170, 185], [65, 73, 68, 80])',
      '(["Dave","Mary","Bob"], [180, 172, 191], [81, 74, 83])',

    ],
    preamble: `function CalcBMI(h, w) { return w / ((h/100) * (h/100)) }`,
    question: `In this problem, you are given three arrays called NAMES (strings), HEIGHTS (numbers, cm), and WEIGHTS (numbers, kg). You also have access to a method called CalcBMI(H, W) that accepts the height (cm) and weight (kg) and returns the Body Mass Index of the person. Your job is to identify the person with the highest BMI in each group and output something like "Biggest BMI of ____ from ____"`,
    solution: `method FindBiggestBMI(NAMES, HEIGHTS, WEIGHTS)
    BiggestBMIIndex = 0
    BiggestBMI = CalcBMI(HEIGHTS[0], WEIGHTS[0])
    
    loop I from 1 to HEIGHTS.Length() - 1 
      BMI = CalcBMI(HEIGHTS[I], WEIGHTS[I])
      if BMI > BiggestBMI then
         BiggestBMIIndex = I
      end if
    end loop
    output "Biggest BMI of " + BiggestBMI + " from " + NAMES[BiggestBMIIndex]
    
  end method`,

  },

  {
    question: 'Given an array of integers, output all of the three-digit numbers in the array whose digits are in ascending order - that is, numbers like 237 or 368. If no such numbers are in the collection, then the message "No such numbers" should be outputted.',
    title: 'Array',
    name: 'ascendingNumbers',
    inputs: [
      "([9,3456,12,237,45679,368,296])",
      "([1234,56,90,324,876])",
      "([123, 145, 41, 1678, 12])",
      "([198, 234, 378])"
    ],

    solution: `method ascendingNumbers(NUMS)
    FOUNDANY = FALSE
    loop I from 0 to NUMS.Length() - 1
      N = NUMS[I]
      THOUSANDS = N div 1000
      HUNDREDS = (N mod 1000) div 100
      TENS = (N mod 100) div 10
      ONES = N mod 10
      if (THOUSANDS = 0 AND HUNDREDS > 0 AND TENS > HUNDREDS AND ONES > TENS) then
        FOUNDANY=TRUE
        output N
      end if
    end loop
    if NOT FOUNDANY then
      output "No such numbers"
    end if
  end method`
  },

];

var notUsed = [
  {
    title: 'Array',
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
    title: 'Array',
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
    Return the modified array.The array length will be at least 1.`,
  },
  {
    title: 'Array',
    name: 'midThree',
    inputs: [
      '([1, 2, 3, 4, 5])',
      '([8, 6, 7, 5, 3, 0, 9])',
      '([1, 2, 3])',
    ],
    question: `Given an array of ints of odd length, return a new array length 3
    containing the elements from the middle of the array.The array length will be
    at least 3.`,
  },
  {
    title: 'Array',
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
    and middle values in the array and return the largest.The array length will
    be a least 1.`,
  },
  {
    title: 'Array',
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
    2 elements.If the array is smaller than length 2, use whatever
    elements are present.`,
  },
  {
    title: 'Array',
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
    title: 'Array',
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
    as much as will fit, the elements from a followed by the elements from b.The
    arrays may be any length, including 0, but there will be 2 or more elements
    available between the 2 arrays.`,
  },
  {
    title: 'Array',
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
    first element of each array.If either array is length 0, ignore that array.`,
  },
  {
    title: 'Array',
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

    question: `Return the index of the minimum value in an array.The input array will have at
     least one element in it.`
  },
  {
    title: 'Array',
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

    question: `Return the number of even ints in the given array.Note: the % "mod"
    operator computes the remainder, e.g. 5 % 2 is 1.`
  },
  {
    title: 'Array',
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
the largest and smallest values in the array.Note: the built -in Math.min(v1, v2)
and Math.max(v1, v2) methods return the smaller or larger of two values.`
  },
  {
    title: 'Array',
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
values in the array.If there are multiple copies of the smallest value, ignore
just one copy, and likewise for the largest value.Use int division to produce
the final average.You may assume that the array is length 3 or more.`
  },
  {
    title: 'Array',
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
    title: 'Array',
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
numbers starting with a 6 and extending to the next 7(every 6 will be followed
       by at least one 7).Return 0 for no numbers.`
  },
  {
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    is in the range 0..nums.Length() inclusive.`
  },
  {
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
    title: 'Array',
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
  
]
},{}],9:[function(require,module,exports){
let solutions = {};

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
    title: 'Collections',
    name: 'Count7s',
    inputType: "collection",
    inputs: [
      '({1, 2, 6})',
      '({3, 7, 7})',
      `({8, 11, 7, 3, 7})`,
      `({7, 7, 7, 7})`,
      `({7.2, 11, 3})`,
      '({2, 7, 2, 11, 7, 24, 7})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of numbers, count and then output how many 7s appear in the collection.`,
    solution: `method Count7s(NUMS)
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N = 7 then
        COUNT = COUNT + 1
      end if
    end loop
    
    output COUNT
  end method`,
  }, {
    title: 'Collections',
    name: 'NegativeOnetoOne',
    inputType: "collection",
    inputs: [
      '({0.3, 1, -0.7, 2.3, 0.2, 5.3})',
      '({1.1, 0.99, 1.0})',
      `({0.2, 0.3, 0.4, -0.2, -0.3, -0.4})`,
      `({2, -2, 3, -3, 4, -4})`,
      `({.2, -0.2, 0.3, -0.3, 0.4, -0.4})`,
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of real numbers, count how many elements are in the interval [-1, 1] inclusive. Output the count. (IB November 2018, question 8d)`,
    solution: `method NegativeOnetoOne(NUMS)
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N >= -1 AND N <= 1 then
        COUNT = COUNT + 1
      end if
    end loop
    output COUNT
  end method`,
  },
  {title: "Collections",
    name: "Double100s",
    inputType: "collection",
    inputs: [
      "({100, 100, 40, 20})",
      "({78, 102, 98, 104, 23})",
      "({13, 203, 101, 29, 54, 11, 201})"
    ],
    question: "Given a collection of scores, output TRUE if there are two scores of at least 100 next to each other in the collection. Otherwise, output FALSE.",
    solution:`method Double100s(SCORES)
  COUNT = 0
  SCORES.resetNext()
  loop while SCORES.hasNext() and COUNT < 2
    N = SCORES.getNext()
    if N < 100 then
      COUNT = 0
    else
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 2 then
    output TRUE
  else
    output FALSE
  end if
end method`
  },
  {
    title: 'Collections',
    name: 'CountAs',
    inputType: "collection",
    inputs: [
      '({"abc", "ABC", "CBA", "cba", "bcbcbc"})',
      '({"bb","aa","AB","BA"})',
      '({"bat", "abacus"})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of strings, count all the strings whose first letter is "a" of "A" and output the count. You can use the STR.SubStr(i, c) method (look at the reference linked above).`,
    solution: `method CountAs(WORDS)
  COUNT = 0
  WORDS.resetNext()
  loop while WORDS.hasNext()
    W = WORDS.getNext()
    if W.SubStr(0,1) = "a" OR W.SubStr(0,1) = "A" then
      COUNT = COUNT + 1
    end if
  end loop
  
  output COUNT
end method`,
  },
  {
    title: "Collections",
    name: "SearchCollection",
    inputType: "collection",
    inputs: [
      '({1, 22, 34, 1}, 2)',
      '({"Bob", "Joe", "Maria", "Ephraim"},"Maria")',
      '({"A","B","C","C","C","D"},"E"})'
    ],
    question: "Given a collection COL and an variable S, search COL for an element whose value equals S. If the item exists in the collection, output TRUE, otherwise output FALSE.",
    solution: `method SearchCollection(COL, S) 
  COL.resetNext()
  FOUND = FALSE
  loop while COL.hasNext() and not FOUND
    if COL.getNext() = S then
      FOUND = TRUE
    end if
  end loop
  output FOUND
end method`
  },
  {
    title: 'Collections',
    name: 'SumCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({5, 11, 2, -3})',
      '({7, 0, 0, -7})',
      '({1, 2, 1, 1, 2})',
      '({1, 1, 1, 1})',
      '({2, 7, 2, 103})',
    ],
    question: 'Given a Collection of numbers, output the sum of all the elements.',
    solution: `method SumCollection(NUMS)
    SUM = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      SUM = SUM + N
    end loop
    output SUM
  end method`
  },
  {
    title: 'Collections',
    name: 'AverageCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: 'Given a Collection of numbers, return the mean (average) of all the elements.',
    solution: `method AverageCollection(NUMS)
    SUM = 0
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      COUNT = COUNT + 1
      SUM = SUM + N
    end loop
    output (SUM / COUNT)
  end method`
  },
  {
    title: 'Collections',
    name: 'AverageCollectionInRange',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 12, -8, 0})',
      '({-3, 11, 15})',
      '({7, 0, 0, -1, -1})',
      '({1, 12, 1, 22, 1})',
      '({1, 10, 100, 1, 1})',
      '({-2, 7, 2})',
    ],
    question: 'Given a Collection of numbers, output the average of all values between 0 and 10 inclusive. Ignore all other values. If no such values exist, output 0.',
    solution: `method AverageCollectionInRange(NUMS)
    SUM = 0
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N >= 0 AND N <= 10 then
        COUNT = COUNT + 1
        SUM = SUM + N
      end if
    end loop
    if COUNT = 0 then
      output 0
    else
      output (SUM / COUNT)
    end if
  end method`
  },
  {
    title: 'Collections',
    name: 'CountAM',
    inputType: "collection",
    inputs: [
      '({"Smith, Jane","Brown, James"})',
      '({"Duckworth, Eliza", "Altman, Phil"})',
      '({"Mizrahi, Marina", "Nelson, Judd"})',
      '({"A, B", "C, D", "M, N", "P, J", "Q, Z"})'
    ],
    question: `<p>Given a collection of names in the form "Last, First", output the number of names whose last name starts with a letter between A and M in the English alphabet.</p>

    <p>You can assume you have access to a method called <code>Compare(STR1, STR2)</code> that returns <code>0</code> if the two strings are identical, <code>-1</code> if <code>STR1</code> is earlier than <code>STR2</code> in the alphabet, and <code>1</code> if <code>STR1</code> is later than <code>STR2</code> in the alphabet.</p>`,
    solution: `method CountAM(NAMES)
  AM = 0
  NAMES.resetNext()
  loop while NAMES.hasNext()
    N = NAMES.getNext()
    if Compare(N, "N") = -1 then
      AM = AM + 1
    end if
  end loop
  output AM
end method`,
    preamble: `function Compare(str1, str2) { return str1.localeCompare(str2) }`,
  },
  {
    title: 'Collections',
    name: 'RotateLeftCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: `Given an collection of numbers, create a new collection that is the same thing, but with the first element moved to the back. If the original collection is empty, return an empty collection. You can make an empty collection using the command "C = new Collection()"`,
    solution: `method RotateLeftCollection(NUMS)
    C = new Collection()
    if NOT NUMS.isEmpty() then
      FIRST = NUMS.getNext()
      loop while NUMS.hasNext()
        C.addItem(NUMS.getNext())
      end loop
      C.addItem(FIRST)
    end if
    output C  
  end method`
  },
  {
    title: 'Collections',
    name: 'WeightedAverage',
    inputType: "collection",
    inputs: [
      '({17,23,11},{0.2,0.6,0.2})',
      '({11,15,18,18},{1,2,3,4})',
      '({18,12,5,5},{0.2,0.4,0.6,0.1})',
      '({11,12,13,14,15,16,16},{0.25,0.25,0.35,0.15,0.1,0.05,0.05})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given two collections, VALUES and WEIGHTS, output a weighted average. A weighted average is calculated by multiplying each number in the VALUES colllection by its related value in the WEIGHTS collection and summing up the result, then dividing that by the sum of the WEIGHTS values only. You can assume VALUES and WEIGHTS are the same lengths.`,
    solution: `method WeightedAverage(VALUES,WEIGHTS)
  WEIGHTSUM = 0
  TOTALSUM = 0
  VALUES.resetNext()
  WEIGHTS.resetNext()
  loop while VALUES.hasNext()
    V = VALUES.getNext()
    W = WEIGHTS.getNext()
    TOTALSUM = TOTALSUM + W * V
    WEIGHTSUM = WEIGHTSUM + W
  end loop
  output TOTALSUM / WEIGHTSUM
end method`,
  },
  {
    title: 'Collections',
    name: 'CollectionToArray',
    inputType: "collection",
    inputs: [
      '({"Coelho", "Ivana", "Huang", "Victor", "Anderson", "Ingerlis"})',
      '({2,3,4,1,2,3,6,4,7,5,7,-1})',
      '({-1, -2, 1.2, 66.3, -22, 1, 5, 77.6, 2})',
      '({true, false, false, false, true, true, true, false, false, false})',
      '({"A","B","C","D","E","F","G","H","I","J","K","L"})',
    ],
    question: `You have a collection called COL that contains an unknown number of elements. Create and output array with all of the elements. The array should not be bigger than necessary.`,
    solution: `method CollectionToArray(COL)
    COL.resetNext()
    N = 0
    loop while COL.hasNext()
      N = N + 1
      COL.getNext()
    end loop
    ARR = new Array(N)
    COL.resetNext()
    loop I from 0 to N-1
      ARR[I] = COL.getNext()
    end loop
    output ARR
  end method`
  },
  {
    title: 'Collections',
    name: 'CollectionToTwoArrays',
    inputType: "collection",
    inputs: [
      '({"Coelho", "Ivana", "Huang", "Victor", "Anderson", "Ingerlis"})',
      '({"Lee", "Stefan", "Protasio", "Ricardo", "Stark", "Rome"})',
      '({"Merchor", "Maia", "Solamao", "Lucas", "Duran", "Rafael"})',
      '({"Scroffa", "Mateo", "Lima", "Joao", "Vidigal", "Eduardo"})',
    ],
    question: `You have a collection called NAMES that contains the names of three students in your class organized in the format Last -> First -> Last -> First (see examples below). Create two arrays, one with the first names and one with the last names. Output the first names, then the last names.`,
    solution: `method CollectionToArrays(NAMES)
    FIRSTS = new Array(3)
    LASTS = new Array(3)
    I = 0
    NAMES.resetNext()
    loop while NAMES.hasNext()
      LASTS[I] = NAMES.getNext()
      FIRSTS[I] = NAMES.getNext()
      I = I + 1
    end if
    output FIRSTS
    output LASTS  
  end method`
  },
  {
    title: 'Collections',
    name: 'PiecewiseProduct',
    inputType: "collection",
    inputs: [
      '({2, 3, 5, 6}, {3, 4, 1, 2})',
      '({1.2, 3.4, -2, 4}, {6.2, 8.9, 11, 2})',
      '({0, 0, 0, 0, 0, 0}, {1, 1, 1, 1, 1, 1})'
    ],
    question: "(Submitted by Emily Canar, '25) Given two collections, NUMS1 and NUMS2 that are the same length, create and output a new collection that contains the element-by-element product of NUMS1 and NUMS2. For example, if the first element of NUMS1 is 2 and the first element of NUMS2 is 3, then the first element of your collection should be 6.",
    solution: `method PiecewiseProduct(NUMS1, NUMS2)
    COL = new Collection()
    NUMS1.resetNext()
    NUMS2.resetNext()
    loop while NUMS1.hasNext()
      F = NUMS1.getNext()
      D = NUMS2.getNext()
      PROD = F * D
      COL.addItem(PROD)
    end loop
    output COL
  end method`
  },
  {title: 'Collections',
    name:'ProdIndex',
    inputType:'collection',
    inputs:[
      '({3, 2, 1, 7, 8, 4})',
      '({4.3, 5.9, -1.2, 3.4, 9})',
      '({1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1})',
      '({2, 2, 2, 3})'
    ],
    question: '(Contributed Lucas Kenzo Odo Toledo de Barros) Given a collection of numbers, return a collection of the product of each number with its array-style "index"= for example, the first element\'s index will be 0, so the first element of your result will be 0.',
    solution: `method ProdIndex(NUMS)
    PRODS = new Collection()
    NUMS.resetNext()
    I = 0
    loop while NUMS.hasNext()
      N = NUMS.getNext() * I
      I = I + 1
      PRODS.addItem(N)
    end loop
    output PRODS
  end method`
  },
  {title: 'Collections',
    name:'FirstMiddleLast',
    inputType:'collection',
    inputs:[
      '({"appl","obamas","oldo"})',
      '({"barb","meet","fork"})',
      '({"hi","aaaaaaaaaaaa", "monster"})',
    ],
    question: '(Contributed Caster Choi) Given a collection of Strings, count how many of the strings have either the same first and last letter OR have the same two middle letters. You can assume the strings will have an even number of letters.',
    solution: `method FirstMiddleLast(STRINGS)
    COUNT = 0
    STRINGS.resetNext()
    loop while STRINGS.hasNext()
      S = STRINGS.getNext()
      if S.SubStr(0,1) == S.SubStr(S.length - 1,1) or S.SubStr((S.length - 2) / 2,1) == S.SubStr(S.length / 2, 1) then
        COUNT = COUNT + 1
      end if
    end loop
    output COUNT
  end method`
  },
  {
    title: 'Collections',
    name:'EvensMinus1',
    inputType:'collection',
    inputs:[
      '({2, 1, 3, 7})',
      '({2, 2, 2})',
      '({3, 2, 1, 7, 8, 4})',
      '({4, 5, -2, 4, 9})',
      '({1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1})',
      '({2, 2, 2, 3})'
    ],
    question: '(Contributed by Victoria Gubessi Franchi Pinto Ribas, class of \'25) Given a collectino of numbers, find the average of one less than all even numbers. Ignore odd numbers.',
    solution: `method EvensMinus1(NUMS)
    SUM = 0
    COUNT = 0
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N mod 2 = 0 then
        SUM = SUM + N - 1
        COUNT = COUNT + 1
      end if
    end loop
    output SUM / COUNT
  end method`
  },
  {
    title: 'Collections',
    name:'CollectionStory',
    inputType:'collection',
    inputs: [
      '({"Once upon a time","There was an ogre.", "There was a princess.","There was a donkey.","They lived happily after."},{TRUE,FALSE,TRUE,TRUE})',
      '({"A","B","C","D","E","F"},{TRUE, TRUE, FALSE, FALSE, TRUE, TRUE})',
      '({"Luca","Odo","Victoria","Caster","Chloe","Marino"},{TRUE, TRUE, TRUE, TRUE, FALSE, FALSE})'
    ],
    question: '(Contributed by Luca Seltzer, class of \'25) Given a collection of Strings called STORYBITS and a collection of booleans called HAPPENED (same length), create and output a string for the story preview. That is, if the boolean is TRUE, append the associated story bit, otherwise skip it.',
    solution: `method CollectionStory(STORYBITS, HAPPENED)
    REALSTORY = ""
    HAPPENED.resetNext()
    STORYBITS.resetNext()
    loop while HAPPENED.hasNext()
      STR = STORYBITS.getNext()
      BOOL = HAPPENED.getNext()
      if BOOL then
        REALSTORY = REALSTORY + STR
      end if
    end loop
    output REALSTORY
  end method`
  },
  {
    title: 'Collections',
    name: 'MaxPerIndex',
    inputType: 'collection',
    inputs: [
      '({1,2,7},{3,2,4})',
      '({1,7,10,14,24,4,2,9},{9, 60, 3, 5, 5, 4, 8, 2})',
      '({2.3, -1.7, 9.3, 5.2, -11}, {4.9, -3.2, 9.3, -5.1, 5})',
      '({0, 0, 0},{2, -2, 2})'
    ],
    question: "(Contributed by Rafael Leme, '25) Given two parallel collections of numbers, create and output a new array where each index holds the greatest value at that same position between the two collections. For example, if the first element of the first collection is 2, and the first element of the second collection is 5, the first element of the array should be 5. If the two values are the same, the array should put 0 in the corresponding position.",
    solution: `method MaxPerIndex(COL1, COL2)
    COL1.resetNext()
    COL2.resetNext()
    AMOUNT = 0
    loop while COL1.hasNext()
      COL1.getNext()
      AMOUNT = AMOUNT + 1
    end loop
    COL1.resetNext()
    A = new Array(AMOUNT)
    I = 0
    loop while COL1.hasNext()
      U = COL1.getNext()
      V = COL2.getNext()
      if U = V then
        A[I] = 0
      else if U > V then
        A[I] = U
      else
        A[I] = V
      end if
      I = I +1
    end loop
    output A
  end method`
  },{
    title: "Collections",
    name: "MinimumAge",
    inputType: "collection",
    inputs: [
      "({12, 14, 54, 3})",
      "({72, 9, 2, 51, 67, 67, 67})",
      "({23, 65, 32, 19, 11})"
    ],
    question: "(Contributed by Thayná Araújo Dantas Henrique `25 and Yoon Jieun `25) Given a collection of numbers called AGES that represents the various ages of members of a family, output the age of the youngest member of the family.",
    solution: `method MinimumAge(AGES)
    AGES.resetNext()
    SMALLN = AGES.getNext()
    loop while AGES.hasNext()
      N = AGES.getNext()
      if N < SMALLN then
        SMALLN = N
      end if
    end loop
    output SMALLN
  end method`
  }
]


},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
  {
    question:
      "Given N of 1 or more, return the factorial of N, which is N * (N-1) * (N-2) ... 1. Compute the result recursively (without loops).",
    title: "Recursion-1",
    name: "Factorial",
    inputs: ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)", "(12)"],
    solution: `method Factorial(N)
if N = 1 or N = 0 then
  return 1
else
  return N * Factorial(N-1)
end if
end method`,
  },
  {
    question:
      "We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).",
    title: "Recursion-1",
    name: "BunnyEars",
    inputs: ["(0)", "(1)", "(2)", "(3)", "(4)", "(5)", "(12)", "(50)", "(234)"],
    solution: `method BunnyEars(BUNNIES)
  if BUNNIES = 0 then
    return 0
  else
    return 2 + BunnyEars(BUNNIES - 1)
  end if
end method`,
  },
  {
    question:
      "The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.",
    title: "Recursion-1",
    name: "fibonacci",
    inputs: ["(0)", "(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)"],
  },
  {
    question:
      'We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we\'ll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).',
    title: "Recursion-1",
    name: "bunnyEars2",
    inputs: ["(0)", "(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(10)"],
  },
  {
    question:
      "We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.",
    title: "Recursion-1",
    name: "triangle",
    inputs: ["(0)", "(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)"],
  },
  {
    question:
      "Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].",
    title: "Recursion-1",
    name: "sumDigits1",
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
      "(235)",
    ],
  },
  {
    question:
      "Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].",
    title: "Recursion-1",
    name: "count7",
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
      "(99799)",
    ],
  },
  {
    question:
      "Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].",
    title: "Recursion-1",
    name: "count8",
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
      "(78)",
    ],
  },
  {
    question:
      "Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).",
    title: "Recursion-1",
    name: "powerN",
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
      "(10, 3)",
    ],
  },
  {
    question:
      "Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.",
    title: "Recursion-1",
    name: "countX",
    inputs: [
      "('xxhixx')",
      "('xhixhix')",
      "('hi')",
      "('h')",
      "('x')",
      "('')",
      "('hihi')",
      "('hiAAhi12hi')",
    ],
  },
  {
    question:
      'Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.',
    title: "Recursion-1",
    name: "countHi",
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
      "('ship')",
    ],
  },
  {
    question:
      "Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.",
    title: "Recursion-1",
    name: "changeXY",
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
      "('hihi')",
    ],
  },
  {
    question:
      'Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".',
    title: "Recursion-1",
    name: "changePi",
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
      "('xyzzy')",
    ],
  },
  {
    question:
      "Given a string, compute recursively a new string where all the 'x' chars have been removed.",
    title: "Recursion-1",
    name: "noX",
    inputs: [
      "('xaxb')",
      "('abc')",
      "('xx')",
      "('')",
      "('axxbxx')",
      "('Hellox')",
    ],
  },
  {
    question:
      "Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.",
    title: "Recursion-1",
    name: "array6",
    inputs: [
      "([1, 6, 4], 0)",
      "([1, 4], 0)",
      "([6], 0)",
      "([], 0)",
      "([6, 2, 2], 0)",
      "([2, 5], 0)",
      "([1, 9, 4, 6, 6], 0)",
      "([2, 5, 6], 0)",
    ],
  },
  {
    question:
      "Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.",
    title: "Recursion-1",
    name: "array11",
    inputs: [
      "([1, 2, 11], 0)",
      "([11, 11], 0)",
      "([1, 2, 3, 4], 0)",
      "([1, 11, 3, 11, 11], 0)",
      "([11], 0)",
      "([1], 0)",
      "([], 0)",
      "([11, 2, 3, 4, 11, 5], 0)",
      "([11, 5, 11], 0)",
    ],
  },
  {
    question:
      "Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.",
    title: "Recursion-1",
    name: "array220",
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
      "([1, 2, 3, 4, 4, 50, 500, 6], 0)",
    ],
  },
  {
    question:
      'Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".',
    title: "Recursion-1",
    name: "allStar",
    inputs: [
      "('hello')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('3.14')",
      "('Chocolate')",
      "('1234')",
    ],
  },
  {
    question:
      'Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".',
    title: "Recursion-1",
    name: "pairStar",
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
      "('abbba')",
    ],
  },
  {
    question:
      "Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.",
    title: "Recursion-1",
    name: "endX",
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
      "('xxhxi')",
    ],
  },
  {
    question:
      'We\'ll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A\'s make a pair. Pair\'s can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.',
    title: "Recursion-1",
    name: "countPairs",
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
      "('aaa')",
    ],
  },
  {
    question:
      'Count recursively the total number of "abc" and "aba" substrings that appear in the given string.',
    title: "Recursion-1",
    name: "countAbc",
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
      "('aaa')",
    ],
  },
  {
    question:
      'Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.',
    title: "Recursion-1",
    name: "count11",
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
      "('Hello')",
    ],
  },
  {
    question:
      'Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".',
    title: "Recursion-1",
    name: "stringClean",
    inputs: [
      "('yyzzza')",
      "('abbbcdd')",
      "('Hello')",
      "('XXabcYY')",
      "('112ab445')",
      "('Hello Bookkeeper')",
    ],
  },
  {
    question:
      'Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an \'x\' immedately before them.',
    title: "Recursion-1",
    name: "countHi2",
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
      "('Hellohi')",
    ],
  },
  {
    question:
      'This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".',
    title: "Recursion-1",
    name: "starBit",
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
      "('ab,-ab*ab')",
    ],
  },
  {
    question:
      'Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what\'s inside them.',
    title: "Recursion-1",
    name: "nestParen",
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
      "('(((())))')",
    ],
  },
  {
    question:
      "Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.",
    title: "Recursion-1",
    name: "strCount",
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
      "('aaabababab', 'b')",
    ],
  },
  {
    question:
      "Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.",
    title: "Recursion-1",
    name: "strCopies",
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
      "('dogcatdogcat', 'dog', 2)",
    ],
  },
  {
    question:
      "Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.",
    title: "Recursion-1",
    name: "strDist",
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
      "('hiHellohihihi', 'll')",
    ],
  },
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
    title: "Warmup",
    name: "SleepIn",
    question: `The parameter WEEKDAY is TRUE if it is a weekday, and the parameter
         VACATION is FALSE if we are on vacation. We sleep in if it is not a weekday or
         we're on vacation. Output TRUE if we sleep in, FALSE if we do not.`,
    solution: `method sleepIn(WEEKDAY, VACATION)
  if NOT WEEKDAY OR VACATION then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [

      "(TRUE, TRUE)",
      "(TRUE, FALSE)",
      "(FALSE, TRUE)",
      "(FALSE, FALSE)"
    ],
  }, {
    title: "Warmup",
    name: "MonkeyTrouble",
    question: `We have two monkeys, a and b, and the parameters ASMILE and
              BSMILE indicate if each is smiling. We are in trouble if they are both smiling
              or if neither of them is smiling. Output TRUE if we are in trouble, FALSE otherwise.`,
    solution: `method MonkeyTrouble(ASMILE, BSMILE)
  if (ASMILE AND BSMILE) OR (NOT ASMILE AND NOT BSMILE) then
  // alternative: if ASMILE = BSMILE then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(TRUE, TRUE)",
      "(FALSE, FALSE)",
      "(TRUE, FALSE)",
      "(FALSE, TRUE)"
    ],
  }, {
    title: "Warmup",
    name: "SumDouble",
    question: `Given two numbers, output their sum. Unless the two values are the same,
       then output double their sum.`,
    solution: `method SumDouble(A, B)
  if A = B then
    output 2* (A + B)
  else
    output A + B
  end if
end method`,
    inputs: [
      "(1, 2)",
      "(3, 2)",
      "(2, 2)",
      "(-1, 0)",
      "(3, 3)",
      "(0, 0)",
      "(0, 1)",
      "(3, 4)"
    ],
  }, {
    title: "Warmup",
    name: "Diff21",
    question: `Given an number, N, output the absolute difference between N and 21,
                except output double the absolute difference if N is over 21.`,
    solution: `method Diff21(N)
  if N <= 21 then
    output 21 - N
  else
    output (N - 21) * 2
  end if
end method`,
    inputs: [
      "(19)",
      "(10)",
      "(21)",
      "(22)",
      "(25)",
      "(30)",
      "(0)",
      "(1)",
      "(2)",
      "(-1)",
      "(-2)",
      "(50)"
    ],
  }, {
    title: "Warmup",
    name: "ParrotTrouble",
    question: `We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
    We are in trouble if the parrot is talking and the hour is before 7 or after 20.
    Output TRUE if we are in trouble.`,
    solution: `method ParrotTrouble(TALKING, HOUR)
  if TALKING AND (HOUR < 7 OR HOUR > 20) then
    output TRUE
  else 
    output FALSE
  end if
end method`,
    inputs: [
      "(TRUE, 6)",
      "(TRUE, 7)",
      "(FALSE, 6)",
      "(TRUE, 21)",
      "(FALSE, 21)",
      "(TRUE, 23)",
      "(FALSE, 23)",
      "(TRUE, 20)",
      "(FALSE, 12)"
    ],
  }, {
    title: "Warmup",
    name: "Makes10",
    question: `Given 2 numbers, A and B, Output TRUE if one if them is 10 or if their sum is 10.`,
    solution: `method Makes10(A, B)
  if A = 10 OR B = 10 OR (A + B = 10) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(9, 10)",
      "(9, 9)",
      "(1, 9)",
      "(10, 1)",
      "(10, 10)",
      "(8, 2)",
      "(8, 3)",
      "(10, 42)",
      "(12, -2)"
    ],
  }, {
    title: "Warmup",
    name: "NearHundred",
    question: `Given a number N, Output TRUE if it is within 10 of 100 or 200.`,
    solution: `method nearHundred(N) 
  if (100 - N) >= -10 AND (100 - N) <= 10 then
    output TRUE
  else if (200 - N) >= -10 AND (200 - N) <= 10 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(93)",
      "(90)",
      "(89)",
      "(110)",
      "(111)",
      "(121)",
      "(0)",
      "(5)",
      "(191)",
      "(189)"
    ],
  }, {
    title: "Warmup",
    name: "PosNeg",
    question: `Given 2 number values, Output TRUE if one is negative and one is positive.
          Except if the parameter NEGATIVE is TRUE, then output TRUE only if both are negative.`,
    solution: `method PosNeg(A, B, NEGATIVE) 
  if NEGATIVE then
    if A < 0 AND B < 0 then
      output TRUE
    else
      output FALSE
    end if
  else if (A < 0 AND B > 0) OR (A > 0 AND B < 0) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(1, -1, FALSE)",
      "(-1, 1, FALSE)",
      "(-4, -5, TRUE)",
      "(-4, -5, FALSE)",
      "(-4, 5, FALSE)",
      "(-4, 5, TRUE)",
      "(1, 1, FALSE)",
      "(-1, -1, FALSE)",
      "(1, -1, TRUE)",
      "(-1, 1, TRUE)",
      "(1, 1, TRUE)",
      "(-1, -1, TRUE)",
      "(5, -5, FALSE)",
      "(-6, 6, FALSE)",
      "(-5, -6, FALSE)",
      "(-2, -1, FALSE)",
      "(1, 2, FALSE)",
      "(-5, 6, TRUE)",
      "(-5, -5, TRUE)"
    ],
  }, {
    title: "Warmup",
    name: "NotString",
    question: `Given a string, output a new string where "not " has been added to the front. However,
      if the string already begins with "not", output the string unchanged. You can use the method STRING.SubStr(S,L)
      where S is the first index in the substring (first char is 0!) and L is how many chars you want`,
    solution: `method NotString(STR)
  if STR.SubStr(0,3) = "not" then
    output STR
  else 
    output "not"+ STR
  end if
end method`,
    inputs: [
      "('candy')",
      "('x')",
      "('not bad')",
      "('bad')",
      "('not')",
      "('is not')",
      "('no')"
    ],
  }, {
    title: "Warmup",
    name: "Front3",
    question: `Given a string, we'll say that the front is the first 3 chars of the string.
              If the string length is less than 3, the front is whatever is there. Output a new
              string which is 3 copies of the front. You can use the method STRING.SubStr(S,L)
              where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method Front3(STR) 
  FRONT = STR.SubStr(0,3)
  output FRONT + FRONT + FRONT
end method`,
    inputs: [
      "('Java')",
      "('Chocolate')",
      "('abc')",
      "('abcXYZ')",
      "('ab')",
      "('a')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "Or35",
    question: `Output TRUE if the given non- negative number is a multiple of 3 or a
              multiple of 5.(Hint: Use the < code > mod operator)`,
    solution: `method Or35(n) 
  if n mod 3 = 0 OR n mod 5 = 0 then 
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(3)",
      "(10)",
      "(8)",
      "(15)",
      "(5)",
      "(4)",
      "(9)",
      "(4)",
      "(7)",
      "(6)",
      "(17)",
      "(18)",
      "(29)",
      "(20)",
      "(21)",
      "(22)",
      "(45)",
      "(99)",
      "(100)",
      "(101)",
      "(121)",
      "(122)",
      "(123)"
    ],
  }, {
    title: "Warmup",
    name: "Front22",
    question: `Given a string, take the first 2 chars and output the string with the 2
  chars added at both the front and back, so 'kitten' yields 'kikittenki'. You can use the method STRING.SubStr(S,L)
  where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method Front22(STR) 
  FRONT = STR.SubStr(0, 2)
  output FRONT + STR + FRONT
end method`,
    inputs: [
      "('kitten')",
      "('Ha')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('Logic')"
    ],
  }, {
    title: "Warmup",
    name: "StartHi",
    question: `Given a string, Output TRUE if the string starts with 'hi'and
  FALSE otherwise. You can use the method STRING.SubStr(S,L)
  where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method StartHi(STR) 
  FRONT = STR.SubStr(0,2);
  if FRONT = 'hi' then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "('hi there')",
      "('hi')",
      "('hello hi')",
      "('he')",
      "('h')",
      "('')",
      "('ho hi')",
      "('hi ho')"
    ],
  }, {
    title: "Warmup",
    name: "IcyHot",
    question: `Given two temperatures, Output TRUE if one is less than 0 and the
  other is greater than 100.`,
    solution: `method IcyHot(TEMP1, TEMP2) 
  if TEMP1 < 0 AND TEMP2 > 100 OR TEMP2 < 0 AND TEMP1 > 100 then
    output TRUE
  end if
  output FALSE
end method`,
    inputs: [
      "(120, -1)",
      "(-1, 120)",
      "(2, 120)",
      "(-1, 100)",
      "(-2, 120)",
      "(120, 120)"
    ],
  }, {
    title: "Warmup",
    name: "In1020",
    question: `Given 2 number values, Output TRUE if either or both of them is in the range
  10..20 inclusive.`,
    solution: `method In1020(A, B) 
  if (A >= 10 AND A <= 20) OR (B >= 10 AND B <= 20) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(12, 99)",
      "(21, 12)",
      "(8, 99)",
      "(99, 10)",
      "(20, 20)",
      "(21, 21)",
      "(9, 9)"
    ],
  }, {
    title: "Warmup",
    name: "HasTeen",
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values,
  Output TRUE if 1 or more of them are teen.`,
    solution: `method HasTeen(A, B, C) 
  if (A >= 13 AND A <= 19) OR (B >= 13 AND B <= 19) OR (C >= 13 AND C <= 19) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(13, 20, 10)",
      "(20, 19, 10)",
      "(20, 10, 13)",
      "(1, 20, 12)",
      "(19, 20, 12)",
      "(12, 20, 19)",
      "(12, 9, 20)",
      "(12, 18, 20)",
      "(14, 2, 20)",
      "(4, 2, 20)",
      "(11, 22, 22)"
    ],
  }, {
    title: "Warmup",
    name: "LoneTeen",
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
  Given 2 int values, Output TRUE if one or the other is teen, but not both.`,
    solution: `method LoneTeen(A, B) 
  if A >=13 AND A <=19 AND (B < 13 OR B > 19) then
    output TRUE
  else if (A < 13 OR A > 19) AND B >= 13 AND B <= 19 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(13, 99)",
      "(21, 19)",
      "(13, 13)",
      "(14, 20)",
      "(20, 15)",
      "(16, 17)",
      "(16, 9)",
      "(16, 18)",
      "(13, 19)",
      "(13, 20)",
      "(6, 18)",
      "(99, 13)",
      "(99, 99)"
    ],
  }, {
    title: "Warmup",
    name: "MixStart",
    question: `Output TRUE if the given string begins with 'mix', except the 'm' can be
  anything, so 'pix', '9ix'..all count. You can use the method STRING.SubStr(S,L) to get a substring
  where S is the first index in the substring (first char is 0!) and L is how many chars you want (at max).`,
    solution: `method MixStart(STR) 
  if STR.length < 3 then
    output FALSE
  end if
  TWO = STR.SubStr(1, 2);
  if TWO = 'ix' then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "('mix snacks')",
      "('pix snacks')",
      "('piz snacks')",
      "('nix')",
      "('ni')",
      "('n')"
    ],
  }, {
    title: "Warmup",
    name: "IntMax",
    question: `Given three int values, A, B, and C, output the largest.`,
    solution: `method IntMax(A, B, C) 
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
end method`,
    inputs: [
      "(1, 2, 3)",
      "(1, 3, 2)",
      "(3, 2, 1)",
      "(9, 3, 3)",
      "(3, 9, 3)",
      "(3, 3, 9)",
      "(8, 2, 3)",
      "(-3, -1, -2)",
      "(6, 2, 5)",
      "(5, 6, 2)",
      "(5, 2, 6)"
    ],
  }, {
    title: "Warmup",
    name: "Close10",
    question: `Given 2 int values, output whichever value is nearest to the value 10,
    or output 0 in the event of a tie.`,
    solution: `method Close10(A, B) 
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
end method`,
    inputs: [
      "(8, 13)",
      "(13, 8)",
      "(13, 7)",
      "(7, 13)",
      "(9, 13)",
      "(13, 8)",
      "(10, 12)",
      "(11, 10)",
      "(5, 21)",
      "(0, 20)",
      "(0, 20)",
      "(10, 10)"
    ],
  }, {
    title: "Warmup",
    name: "StringE",
    question: `Output TRUE if the given string contains between 1 and 3 e chars. 
      Hint: the length of a string can be found using the STR.Length() method, and you can access one char
      within a string using brackets, so if ST = "ABC" then ST[1] gives you a B`,
    solution: `method StringE(STR) 
  COUNT = 0
  loop I from 0 to STR.Length()
    if STR[I] = 'e' then
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 1 AND COUNT <= 3 then
    output TRUE
  else
    output FALSE 
  end if
end method`,
    inputs: [
      "('Hello')",
      "('Heelle')",
      "('Heelele')",
      "('HII')",
      "('e')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "LastDigit",
    question: `Given two non - negative int values, Output TRUE if they have the same
  last digit, such as with 27 and 57. Note that the mod operator computes
  remainders, so 17 mod 10 is 7.`,
    solution: `method LastDigit(A, B) 
  if A mod 10 = B mod 10 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(7, 17)",
      "(6, 17)",
      "(3, 113)",
      "(114, 113)",
      "(114, 4)",
      "(10, 0)",
      "(11, 0)"
    ],
  }, {
    title: "Warmup",
    name: "EveryNth",
    question: `Given a non - empty string and an int N, output the string made starting
  with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
                     ...and so on. N will always be 1 or more.`,
    solution: `method EveryNth(STR, N) 
  RESULT = ""
  COUNT = 0
  loop while COUNT < STR.Length()
    RESULT = RESULT + STR[COUNT]
    COUNT = COUNT + N
  }
  output RESULT
end method`,
    inputs: [
      "('Miracle', 2)",
      "('abcdefg', 2)",
      "('abcdefg', 3)",
      "('Chocolate', 3)",
      "('Chocolates', 3)",
      "('Chocolates', 4)",
      "('Chocolates', 100)"
    ],
  }, {
    title: "Warmup",
    name: "StringTimes",
    question: `Given a string and a non-negative integer N, output a larger string that is N
  copies of the original string.`,
    solution: `method StringTimes(STR, N) 
  FINAL = ""
  loop I from 1 to N 
    FINAL = FINAL + STR
  end loop
  output FINAL
end method`,
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
      "('code', 3)"
    ],
  }, {
    title: "Warmup",
    name: "FrontTimes",
    question: `Given a string and a non - negative int n, we'll say that the front of the string is the first 3 chars,
  or whatever is there if the string is less than length 3. Output n copies of the front.`,
    solution: `method FrontTimes(STR, N) 
  FRONT = STR.SubStr(0,3)
  RESULT = ""
  loop X from 1 to N 
    RESULT = RESULT + FRONT
  end loop
  output RESULT
end method`,
    inputs: [
      "('Chocolate', 2)",
      "('Chocolate', 3)",
      "('Abc', 3)",
      "('Ab', 4)",
      "('A', 4)",
      "('',4)",
      "('Abc', 0)"
    ],
  }, {
    title: "Warmup",
    name: "StringBits",
    question: `Given a string, output a new string made of every other char starting
  with the first, so "Hello" yields "Hlo".`,
    solution: `method StringBits(STR) 
  OUT = ""
  X = 0
  loop while X < STR.length
    OUT = OUT + STR.SubStr(X, 1)
    X = X + 2
  end loop
  output OUT
end method`,
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
      "('hxaxpxpxy')"
    ],
  }, {
    title: "Warmup",
    name: "StringSplosion",
    question: `Given a non-empty string like "Code" output a string like "CCoCodCode".`,
    solution: `method StringSplosion(STR) 
  RESULT = ""
  loop X from 1 to STR.Length()
    RESULT = RESULT + STR.SubStr(0, X)
  end loop
  output RESULT
end method`,
    inputs: [
      '("Code")',
      '("Bob")',
      '("Apple")',
      '("Str")',
      '("123")'
    ],
  }, {
    title: "Warmup",
    name: "ArrayCount9",
    question: `Given an array of ints, output the number of 9's in the array.`,
    solution: `method ArrayCount9(NUMS) 
  COUNT = 0
  loop X from 0 to NUMS.Length()-1
    if NUMS[X] = 9 then
      COUNT = COUNT + 1
    end if
  end loop
  output COUNT
end method`,
    inputs: [
      "([1,2,9])",
      "([1,9,9])",
      "([1,9,9,3,9])",
      "([1,2,3])",
      "([])",
      "([4,2,4,3,1])",
      "([9,2,4,3,1])"
    ],
  }, {
    title: "Warmup",
    name: "ArrayFront9",
    question: `Given an array of ints, Output TRUE if one of the first 4 elements in
            the array is a 9. The array length may be less than 4.`,
    solution: `method ArrayFront9(NUMS) 
  END = 3
  FOUND = FALSE
  if NUMS.Length() < 4 then
    END = NUMS.Length() - 1
  end if
  loop X from 0 to END
    if NUMS[X] = 9 then
      FOUND = TRUE
    end if
  end loop
  output FOUND
end method`,
    inputs: [
      "([1,2,9,3,4])",
      "([1,2,3,4,9])",
      "([1,2,3,4,5])",
      "([9,2,3])",
      "([1,9,9])",
      "([1,2,3])",
      "([1,9])",
      "([5,5])",
      "([2])",
      "([9])",
      "([])",
      "([3,9,2,3,3])"
    ],
  }, {
    title: "Warmup",
    name: "Array123",
    question: `Given an array of ints, Output TRUE if the sequence of numbers 1, 2, 3
          appears in the array somewhere.`,
    solution: `method Array123(NUMS) 
    FOUND = FALSE
    loop I from 0 to NUMS.Length()-3
      if NUMS[I] = 1 AND NUMS[I+1] = 2 AND NUMS[I+2] = 3 then
        FOUND = TRUE
      end if
    end loop
    output FOUND
end method`,
    inputs: [
      '([1,2,3,4])',
      '([4, 5, 1, 2, 3, 4])',
      '([1, 2, 1, 3, 3])',
      '([3, 2, 1])',
      '([0, 0, 1, 2, 0, 1, 2, 3])'
    ],
  }, {
    title: "Warmup",
    name: "StringX",
    question: `Given a string, output a version where all the "x" have been removed.
              Except an "x" at the very start or end should not be removed.`,
    solution: `method StringX(STR) 
  RESULT= STR.SubStr(0,1)
  
  loop I from 1 to STR.Length() - 2
    if STR.SubStr(I,1) != "x" then
      RESULT = RESULT + STR.SubStr(I,1)
    end if
  end loop
  RESULT = RESULT + STR.SubStr(STR.Length() - 1,1)
  output RESULT
end method`,
    inputs: [
      "('xxHxix')",
      "('abxxxcd')",
      "('xabxxxcdx')",
      "('xKxixtxtxexn')",
      "('Hello')",
      "('xx')",
    ],
  }, {
    title: "Warmup",
    name: "Array667",
    question: `Given an array of integers, output the number of times that the array has a 6 followed by either a 6 or a 7`,
    solution: `method Array667(NUMS) 
  COUNT = 0
  loop X from 0 to NUMS.length -1
    if NUMS[X] = 6 then
      if NUMS[X + 1] = 6 OR NUMS[X + 1] = 7 then
        COUNT = COUNT + 1
      end if
    end if
  end loop
  output COUNT
end method`,
    inputs: [
      "([6,6,2])",
      "([6,6,2,6])",
      "([6,7,2,6])",
      "([6,6,2,7,6,7])",
      "([1,6,3])",
      "([6,1])",
      "([])",
      "([3,6,7,6])",
      "([3,6,6,7])",
      "([6,3,6,6])",
      "([6,7,6,6])",
      "([1,2,3,5,6])",
      "([1,2,3,6,6])"
    ],
  }, {
    title: "Warmup",
    name: "NoTriples",
    question: `Given an array of integers, we'll say that a triple is a value appearing 3 times
                  in a row in the array. Output TRUE if the array does not contain any triples.`,
    solution: `method NoTriples(NUMS) 
    TRIPLEFOUND = FALSE
    loop X from 0 to NUMS.length - 3
    if NUMS[X] = NUMS[X+1] AND NUMS[X] = NUMS[X+2] then
        TRIPLEFOUND = TRUE
    end if
  end loop 
  output NOT TRIPLEFOUND
end method`,
    inputs: [
      "([1,1,2,2,1])",
      "([1,1,2,2,2,1])",
      "([1,1,2,2,2,1])",
      "([1,2,1])",
      "([1,1,1])",
      "([1,1])",
      "([1])",
      "([1])",
      "([])"
    ],
  }, {
    title: "Warmup",
    name: "Has271",
    question: `Given an array of ints, Output TRUE if it contains a 2, 7, 1
                  pattern -- a value, followed by the value plus 5, followed by the value
                  minus 1.`,
    solution: `method Has271(NUMS) 
    FOUND = FALSE
    loop X from 0 to NUMS.length - 3
    if NUMS[X] + 5 = NUMS[X + 1] AND NUMS[X] - 1 = NUMS[X+2] then
        FOUND = TRUE
    end if
  end loop 
  output FOUND
end method`,
    inputs: [
      "([1,2,7,1])",
      "([1,2,8,1])",
      "([2,7,1])",
      "([3,8,2])",
      "([2,7,3])",
      "([2,7,4])",
      "([2,7,-1])",
      "([2,7,-2])",
      "([4,5,3,8,0])",
      "([2,7,5,10,4])",
      "([2,7,-2,4,9,3])",
      "([2,7,5,10,1])",
      "([2,7,-2,10,2])"
    ],
  },
];
},{}],19:[function(require,module,exports){
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
require("./listeners/darkModeCheckbox.js");


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
  mode: "pseudocode",
  viewportMargin: Infinity,
  lineWrapping: true,
  lineNumbers: true,
  cursorBlinkRate: -1,
});
solutionArea.getWrapperElement().style.display = "none";


// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(ex => ex.name === exerciseName)[0];
let solution = exercise.solution || solutions[exerciseName];

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
document.getElementById('title').innerText = exercise.title;
document.getElementById('name').innerText = exercise.name;
document.getElementById('problem').innerHTML = exercise.question;

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);


document.getElementById("defaults").addEventListener('click', () => {
  editor.setValue(`${defaultInput(exercise)}`);
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

      if (typeof (solution) === "string") {
        //we have a pseudocode solution!
        [idealResult, idealOut] = runPS(solution, input, exercise.preamble);
      } else {
        idealOut = "";
        idealResult = solution(...input);
      }
      [result, output] = runPS(answer, input, exercise.preamble);

      document.getElementById("tests").append(formatResults(input, inputStr, idealResult, result, idealOut, output));


      if (idealOut === "") {
        results.push(result === idealResult);
      } else {
        results.push(output === idealOut);
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
    const s = solution.toString();
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

},{"../node_modules/codemirror-minified/addon/edit/matchbrackets.js":1,"./allExercisesIncludingHidden.js":4,"./listeners/darkModeCheckbox.js":26,"./listeners/exerciseListeners":27,"./listeners/keyboardShortcuts":29,"./solutions.js":31,"./utility/cmps.js":32,"./utility/convertPStoJS":34,"./utility/deParam.js":35,"./utility/defaultInput.js":36,"./utility/displayExampleRuns.js":37,"./utility/formatResults.js":38,"./utility/inputParser.js":39,"./utility/prettyPrintMap.js":40,"./utility/setInitialEditorContents.js":42,"./utility/tableHeader.js":44,"codemirror-minified":2}],20:[function(require,module,exports){

let warmupExercises = require("./data/warmup.js");
//let stringExercises = require("./data/string.js");
let recursionExercises = require("./data/recursion.js");
let logicExercises = require("./data/logic.js");
let arrayExercises = require("./data/array.js");
let apExercises = require("./data/ap.js");
let collectionsExercises = require("./data/collections.js");
//let mapExercises = require("./data/map.js");
let advExercises = require("./data/advancedDataStructures.js")

let mainPageExercises = [...warmupExercises, ...arrayExercises,
...collectionsExercises, ...advExercises, ...logicExercises,
...recursionExercises, ...apExercises];

module.exports = mainPageExercises;
},{"./data/advancedDataStructures.js":5,"./data/ap.js":6,"./data/array.js":8,"./data/collections.js":10,"./data/logic.js":11,"./data/recursion.js":15,"./data/warmup.js":18}],21:[function(require,module,exports){
let deParam = require("./utility/deParam.js");
let exercises = require("./exercisesToShowOnIndex.js");
require("./listeners/indexSaveLoadAll.js");
require("./listeners/darkModeCheckbox.js");

function uniq(a) {
  var temp = {};
  for (var i = 0; i < a.length; i++)
    temp[a[i]] = true;
  return Object.keys(temp);
}

let title = deParam(window.location.search).title;
let allTitles = uniq(exercises.map(e => e.title));
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


},{"./exercisesToShowOnIndex.js":20,"./listeners/darkModeCheckbox.js":26,"./listeners/indexSaveLoadAll.js":28,"./utility/deParam.js":35}],22:[function(require,module,exports){

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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
//let FileSaver = require('file-saver');

function saveAllSolutionsToFile() {
  let allSolutions = getLocalStorage();
  let blob = new Blob([allSolutions], {
    type: "text/javascript;charset=utf-8"
  });
  //FileSaver.saveAs(blob, "combinedSolutions.js", true);
}

function getLocalStorage() {
  return JSON.stringify(localStorage);
}

module.exports = saveAllSolutionsToFile;
},{}],25:[function(require,module,exports){
//let FileSaver = require('file-saver');

module.exports = function saveCodeFile(editor, exerciseName) {
  // event.preventDefault(); // is this needed?
  let blob = new Blob([editor.getValue()], {
    type: "text/javascript;charset=utf-8"
  });
  //FileSaver.saveAs(blob, exerciseName + ".js", true);
}

},{}],26:[function(require,module,exports){
var checkbox = document.querySelector("#darkmodecheckbox");
if (localStorage.getItem("darkMode") === "true") {
  checkbox.checked = true;
  document.querySelector("html").classList.remove("light");
  document.querySelector("html").classList.add("dark");
} else {
  checkbox.checked = false;
  document.querySelector("html").classList.add("light");
  document.querySelector("html").classList.remove("dark");
}

checkbox.addEventListener("input", (e) => {
  if (checkbox.checked === true) {
    localStorage.setItem("darkMode", "true");
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("dark");
  } else {
    localStorage.setItem("darkMode", "false");
    document.querySelector("html").classList.add("light");
    document.querySelector("html").classList.remove("dark");
  }
});

},{}],27:[function(require,module,exports){
let exercises = require("../exercisesToShowOnIndex");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

function findIndex(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return i;
        }
    }
    return i;
}

module.exports = function (editor, exerciseName) {

    document.querySelector('#next').addEventListener('click', () => {
        let indx = findIndex(exercises, exerciseName) + 1;
        if (indx >= exercises.length) indx = exercises.length - 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#previous').addEventListener('click', () => {
        let indx = findIndex(exercises, exerciseName) - 1;
        if (indx < 0) indx = 0;
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
},{"../exercisesToShowOnIndex":20,"../io/loadCodeFile.js":23,"../io/saveCodeFile.js":25}],28:[function(require,module,exports){

let saveAllSolutionsToFile = require("../io/saveAllSolutionsToFile.js");
let loadAllSolutionsFromFile = require("../io/loadAllSolutionsFromFile.js");


document.querySelector('#saveAll').addEventListener('click', () => {
    saveAllSolutionsToFile();
})

document.querySelector('#loadAll').addEventListener('click', () => {
    loadAllSolutionsFromFile();
})
},{"../io/loadAllSolutionsFromFile.js":22,"../io/saveAllSolutionsToFile.js":24}],29:[function(require,module,exports){
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
},{"../io/loadCodeFile.js":23,"../io/saveCodeFile.js":25}],30:[function(require,module,exports){
var pathSuffix = location.pathname.split('/').splice(-1)[0]
if (pathSuffix === "" || pathSuffix === "index.html") {
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
},{"./exercisePage.js":19,"./indexPage.js":21}],31:[function(require,module,exports){
let stringSolutions = require("./data/stringSolutions.js");
let recursionSolutions = require("./data/recursionSolutions.js");
let logicSolutions = require("./data/logicSolutions.js");
let arraySolutions = require("./data/arraySolutions.js");
let apSolutions = require("./data/apSolutions.js");

let quizSolutions = require("./data/quizSolutions.js");
// this ES2018 spread syntax was causing browserify problems, so I replaced it below...
// let solutions = {...warmupSolutions, ...stringSolutions };

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object. 
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
let solutions = Object.assign({},
  stringSolutions,
  recursionSolutions,
  logicSolutions,
  arraySolutions,
  apSolutions,
  quizSolutions
);

module.exports = solutions;
},{"./data/apSolutions.js":7,"./data/arraySolutions.js":9,"./data/logicSolutions.js":12,"./data/quizSolutions.js":14,"./data/recursionSolutions.js":16,"./data/stringSolutions.js":17}],32:[function(require,module,exports){
module.exports = function CodeMirrorPSHighlighting(CodeMirror) {
  CodeMirror.defineMode("pseudocode", function () {
    var define = ["method", "class"];
    var keywords = ["to","override", "overload", "new", "from","input","output",
      "while", "AND", "OR", "NOT", "and", "or", "not", "mod", "div"];
    var operator = /^[+\-*&%=<>!?|~^]/;
    var bracket = /^[:;\(\)\[\]\{\}]/;
    var atom = ["TRUE", "FALSE","loop","end loop","if", "else", "end if", "then", "method", "end method"];
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
              return "token";
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
const JSON5 = require('json5');
const { strCount } = require('../data/recursionSolutions');
module.exports = class Collection {

  elements = [];
  index = 0;

  /**
   * Creates an IB style collection from the elements in an array
   * @param {Array} [arr=[]] - Array with starting values, defaults to empty
   */
  constructor(arr) {
    if (Array.isArray(arr)) {
      this.elements = arr;
    }
  }

  addItem(a) {
    this.elements.push(a);
  }

  resetNext() {
    this.index = 0;
  }

  hasNext() {
    return (this.index < this.elements.length)
  }

  getNext() {
    this.index++;
    return this.elements[this.index - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  toString() {
    var str = JSON5.stringify(this.elements);
    str = str.replaceAll(",", ", ").replaceAll("[", "{").replaceAll("]", "}");
    return str;
  }
}
},{"../data/recursionSolutions":16,"json5":3}],34:[function(require,module,exports){
const Collection = require("./collections")
const Queue = require("./queues")
const Stack = require("./stacks")
const JSON5 = require("json5");
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
module.exports = function runPS(code, i, preamble) {
  if (preamble === undefined) preamble = "";
  let lines = getLines(code);
  var c = "";
  for (const line of lines) {
    c += translate(line) + "\n";
  }
  let userCode;
  try {
    eval(`${preamble};out="";TRUE=true;FALSE=false;userCode=${c}`);
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
  var a = 0;
  var output = "";
  if (out != "") { out += "\n" }
  for (a = 0; a < arguments.length; a++) {
    if (arguments[a] instanceof Collection ||
      arguments[a] instanceof Stack ||
      arguments[a] instanceof Queue) {
      output = arguments[a].toString()
    } else {
      output = JSON5.stringify(arguments[a])
    }
    output = output.replaceAll("true", "TRUE").replaceAll("false", "FALSE");
    // Spaces in arrays...
    if (output.substring(0, 1) == "[" || output.substring(0, 1) == "{") {
      output = output.replaceAll(",", ", ")
    }
    if (output.substring(0, 2) == "[[") {
      output = output.replaceAll("], [", "],\n [");
    }
    out += output;
  }

}

function div(A, B) {
  return Math.floor(A / B)
}




function Array2D(rows, cols) {
  a2d = new Array(rows)
  for (r = 0; r < rows; r++) {
    a2d[r] = new Array(cols)
  }
  return a2d
}

Array.prototype.Length = function () {
  return this.length;
}

Array.prototype.Slice = function (S, L) {
  return this.slice(S, S + L);
}

String.prototype.Length = function () {
  return this.length;
}

String.prototype.SubStr = function (S, L) {
  return this.substr(S, L);
}

/** Translates a single line from PS (or JS) to JS */
function translate(line) {
  //do a sanity check - if this is javascript, leave it alone
  if (line.indexOf("{") !== -1) return line;
  line = line.replace(/ mod /g, " % ")
  line = line.replace(/ MOD /g, " % ")
  //oof this is ugly. However, it should successfully match all div statements (??)
  line = line.replaceAll(/([0-9A-Za-z]+| \(.+\)|[0-9A-Za-z]+\.[0-9A-Za-z]+\(\)) div ([0-9A-Za-z]+|\(.+\)|[0-9A-Za-z]+\.[0-9A-Za-z]+\(\))/g, "div($1, $2)");
  line = line.replaceAll(/([0-9A-Za-z]+| \(.+\)|[0-9A-Za-z]+\.[0-9A-Za-z]+\(\)) DIV ([0-9A-Za-z]+|\(.+\)|[0-9A-Za-z]+\.[0-9A-Za-z]+\(\))/g, "div($1, $2)");
  line = line.replaceAll(/([^"])TRUE/g, "$1true");
  line = line.replaceAll(/([^"])FALSE/g, "$1false");
  var lin = line.trim();
  var sp = lin.indexOf(" ");
  var first = "";
  if (startswith(lin, "if")) { first = "if" }
  else if (startswith(lin, "return")) { first = "return" }
  else if (startswith(lin, "output")) { first = "output" }
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
  else if (startswith(lin, "end")) {first = "end" }
  else {
    if (sp >= 0) { first = lin.substring(0, sp); }
  }
  if ((first == "if" || first == "else if" || first == "return" || first == "output")) {
    line = line.replace(/([ \(])NOT /g, "$1! ");
    line = line.replace(/([ \(])not /g,"$1!");
    line = line.replace("if ", "if ( ");
    if (first == "else if") { line = line.replace("else if", "} else if") }
    if (first == "if" || first == "else if") { 
      // remove then at end if it exists, add the curly brace - this allows the 'then' to be skipped...
      line = line.replace("then","");
      line = line + "){";
    }
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");
    line = line.replace(/ and /g, " && ");
    line = line.replace(/ or /g, " || ");


    line = line.replace(/<>/g, "!=");
    line = line.replace(/([ \]\w])=([ \]\w])/g, "$1==$2")
  }
  if (first == "else") { line = line.replace("else", "}else{") }
  if (first == "loop while") {
    line = line.replace("loop while", "while(") + "){";
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");
    line = line.replace(/ and /g, " && ");
    line = line.replace(/ or /g, " || ");
    line = line.replace(/([ \(])NOT /g, "$1! ");
    line = line.replace(/([ \(])not /g, "$1!");
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
    line = line.replace(/ and /g, " && ");
    line = line.replace(/ or /g, " || ");
    line = line.replace(/([ \(])NOT /g, "$1! ");
    line = line.replace(/([ \(])not /g, "$1! ");
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
},{"./collections":33,"./queues":41,"./stacks":43,"json5":3}],35:[function(require,module,exports){
/** takes url parameter and transforms into object **/
function deParam(urlStr) {
  const subbie = urlStr.substring(1);
  const x = subbie.split('&').map(s => s.split('='));
  return x.reduce((accum, arr) => { accum[arr[0]] = arr[1]; return accum; }, {});
}

module.exports = deParam;
},{}],36:[function(require,module,exports){
/** creates default input to start function **/
solutions = require("../solutions.js");

module.exports = function defaultInput(exercise) {
  let solution = exercise.solution || solutions[exercise.name];
  if (typeof (solution) === "string") {
    // we have a string solution, likely pseudocode
    var lines = solution.split("\n");
    return (lines[0].trim() + "\n \n \n \n" + lines[lines.length - 1].trim());
  }
  let solutionFullText = solution.toString();
  let openingBracket = solutionFullText.indexOf("{")
  return solutionFullText.substring(0, openingBracket) + "{\n \n \n}";
}
},{"../solutions.js":31}],37:[function(require,module,exports){

let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let runPS = require("./convertPStoJS.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function (exercise) {
    // example/sample runs
    let solution = exercise.solution || solutions[exercise.name];
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;

            if (typeof (solution) === "string") {
                [result, out] = runPS(solution, input, exercise.preamble);
                if (!result) result = out;
            } else {
                result = solution(...input);
            }
            document.querySelector('.examples')
                .insertAdjacentHTML('beforeend',
                    `<li>${exercise.name}${exercise.inputs[i]} → ${result}</li>`);

        } catch (e) {
            console.log(e);
            break;
        }
    }
}
},{"../solutions.js":31,"./convertPStoJS.js":34,"./inputParser.js":39,"./prettyPrintMap.js":40}],38:[function(require,module,exports){
const Collection = require("./collections")
const Queue = require("./queues")
const Stack = require("./stacks")
/** Return row for html table **/
function formatResults(input, inputStr, idealResult, result, idealOutput, output) {
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = (idealResult === result);
    // remove parens from inputStr if it is a single thing
    if (input.length == 1) {
        inputStr= inputStr.slice(1, inputStr.length-1);
    }
    var row = document.createElement("tr");
    row.innerHTML = `<td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${result}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>`;
    return row;
}

module.exports = formatResults;
},{"./collections":33,"./queues":41,"./stacks":43}],39:[function(require,module,exports){

//const { args } = require("watchify");
const Collection = require("./collections.js");
const Stack = require("./stacks.js")
const Queue = require("./queues.js")

/**
 * it converts nodingbat input (as stored) to js
 *     e.g. inputParser('(1,2)')=>[1,2]
 **/


module.exports = function inputParser(exercise, inputStr) {
  /**
   * @type String
   */
  var argsWithoutParentheses = inputStr.slice(1, -1);
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("TRUE", "true");
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("FALSE", "false");
  let functionInput;

 if (exercise.inputType === "collection") {
     //collections are in the form {1, 2, 3}
     let arrayInputString = "[" + argsWithoutParentheses.replaceAll("{", "[").replaceAll("}", "]") + "]";
     let arrayInput = JSON.parse(arrayInputString);
     functionInput = [];
     for (let col of arrayInput) {
       functionInput.push(new Collection(col));
     }
  } else if (exercise.inputType === "stack") {
    //stacks take the form "B[1,2,3]T" with Bottom and Top
    let arrayInputString = argsWithoutParentheses
      .substring(argsWithoutParentheses.indexOf("["),
        argsWithoutParentheses.indexOf("]") + 1);
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Stack(arrayInput)]
  } else if (exercise.inputType === "queue") {
    //queues take the form "F[1,2,3]B" for front and back
    let arrayInputString = argsWithoutParentheses
      .substring(argsWithoutParentheses.indexOf("["),
        argsWithoutParentheses.indexOf("]") + 1);
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Queue(arrayInput)]
  }
  else {
    try {
      let arrayOfArgs = '[' + argsWithoutParentheses + ']';
      functionInput = JSON.parse(arrayOfArgs);
    } catch (e) {
      functionInput = e.toString();
    }
  }
  return functionInput;
}
},{"./collections.js":33,"./queues.js":41,"./stacks.js":43}],40:[function(require,module,exports){
// function to show the Map data type in a user-friendly way
//  - without doing something like this, it just shows up as Object()


function prettyPrintMap(theMap, style = "no_parentheses") {
  let formattedMapResult = "";
  if (style == "parentheses") {
    formattedMapResult = "(";
  }
  formattedMapResult = formattedMapResult + "{";

  //check if it is an empty map
  let emtpyMap = new Map();
  let isEmpty = (theMap === emtpyMap);
  if (!isEmpty) {
    for (let item of theMap) {
      formattedMapResult += `'${item[0]}': '${item[1]}', `;
    }

    formattedMapResult = formattedMapResult.slice(0, -2);
  }

  formattedMapResult = formattedMapResult + "}";

  if (style == "parentheses") {
    formattedMapResult = formattedMapResult + ")";
  }
  return formattedMapResult;
}

module.exports = prettyPrintMap;

},{}],41:[function(require,module,exports){
const JSON5 = require("json5");

module.exports = class Queue {
  values = new Array();
  next = 0;

  constructor(arr) {
    if (arr && Array.isArray(arr))
      this.values = arr;
  }

  isEmpty = function () {
    if (this.values.length) {
      return (this.values.length < 1)
    }
    else { return true }
  }

  enqueue = function (value) {
    this.values.push(value);
  }

  dequeue = function () {
    return this.values.shift();
  }

  toString = function () {
    return "Fr" + JSON5.stringify(this.values).replaceAll(",", ", ") + "Bk";
  }
}
},{"json5":3}],42:[function(require,module,exports){
let defaultInput = require("./defaultInput.js");

module.exports = function (editor, exerciseName, exercise) {
    let exerciseCode = exerciseName + " - code";
    if (localStorage.getItem(exerciseCode)) {
        //load previous solution from localStorage, if possible
        editor.setValue(localStorage.getItem(exerciseCode));
    } else {
        // no previous solution, just display the default...
        editor.setValue(defaultInput(exercise));
        editor.focus();
        editor.setCursor({
            line: 1,
            ch: 2
        });
    }
};
},{"./defaultInput.js":36}],43:[function(require,module,exports){
const JSON5 = require("json5")
module.exports = class Stack {
  values = new Array();
  next = 0;

  constructor(arr) {
    if (arr && Array.isArray(arr))
      this.values = arr;
  }

  push = function (el) {
    this.values.push(el);
  }
  pop = function () {
    return this.values.pop();
  }
  isEmpty = function () {
    if (this.values.length) {
      return (this.values.length < 1)
    }
    else { return true }
  }

  toString = function () {
    var out = "B" + JSON5.stringify(this.values).replaceAll(",", ", ") + "T";
    return out;
  }

}

},{"json5":3}],44:[function(require,module,exports){
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
