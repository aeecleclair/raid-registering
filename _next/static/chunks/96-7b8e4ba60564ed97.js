(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{59899:function(e,t,r){"use strict";r.d(t,{ZP:function(){return d}});var n=r(2265),i=r(85935),s=r.n(i),a=r(49079);let o=(e,...t)=>{var r,n;let i=null!==(r=e.basePath)&&void 0!==r?r:"";return e.subdirectory&&(i+=`/${e.subdirectory}`),`${i}/js/${[null!==(n=e.scriptName)&&void 0!==n?n:"script",...t.sort().filter(e=>null!==e)].join(".")}.js`},u=e=>e?"plausible":"script",l=e=>{var t;return null!==(t=e.customDomain)&&void 0!==t?t:"https://plausible.io"},c=e=>{var t,r;return`${null!==(t=e.basePath)&&void 0!==t?t:""}/${null!==(r=e.subdirectory)&&void 0!==r?r:"proxy"}/api/event${e.trailingSlash?"/":""}`};function d(e){var t;let{enabled:r=!a.env.NEXT_PUBLIC_VERCEL_ENV||"production"===a.env.NEXT_PUBLIC_VERCEL_ENV}=e,i={trailingSlash:"true"===a.env.next_plausible_trailingSlash,basePath:a.env.next_plausible_basePath,customDomain:"https://plausible.eclair.ec-lyon.fr",scriptName:a.env.next_plausible_scriptName,subdirectory:a.env.next_plausible_subdirectory};return n.createElement(n.Fragment,null,r&&n.createElement(s(),Object.assign({async:!0,defer:!0,"data-api":i?c(i):void 0,"data-domain":e.domain,"data-exclude":e.exclude,src:(i?"":l(e))+o(Object.assign(Object.assign({},i),{scriptName:i?i.scriptName:u(e.selfHosted)}),e.trackLocalhost?"local":null,e.manualPageviews?"manual":null,e.pageviewProps?"pageview-props":null,e.trackOutboundLinks?"outbound-links":null,e.exclude?"exclusions":null,e.revenue?"revenue":null,e.trackFileDownloads?"file-downloads":null,e.taggedEvents?"tagged-events":null,e.hash?"hash":null),integrity:e.integrity,crossOrigin:e.integrity?"anonymous":void 0},"object"==typeof e.pageviewProps?Object.fromEntries(Object.entries(e.pageviewProps).map(([e,t])=>[`event-${e}`,t])):void 0,e.scriptProps)),r&&n.createElement(s(),{id:"next-plausible-init",dangerouslySetInnerHTML:{__html:"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"},nonce:null===(t=e.scriptProps)||void 0===t?void 0:t.nonce}),e.children)}},49079:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(13127)},13313:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return s},default:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:t,props:r}=e,i=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let s=n[e]||e.toLowerCase();"script"===t&&("async"===s||"defer"===s||"noModule"===s)?i[s]=!!r[e]:i.setAttribute(s,r[e])}let{children:s,dangerouslySetInnerHTML:a}=r;return a?i.innerHTML=a.__html||"":s&&(i.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):""),i}function s(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,i="";if(n){let{children:e}=n.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),a=Number(n.content),o=[];for(let t=0,r=n.previousElementSibling;t<a;t++,r=(null==r?void 0:r.previousElementSibling)||null){var u;(null==r?void 0:null==(u=r.tagName)?void 0:u.toLowerCase())===e&&o.push(r)}let l=t.map(i).filter(e=>{for(let t=0,r=o.length;t<r;t++)if(s(o[t],e))return o.splice(t,1),!1;return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>r.insertBefore(e,n)),n.content=(a-o.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85935:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return v},default:function(){return w}});let n=r(86921),i=r(91884),s=r(57437),a=n._(r(54887)),o=i._(r(2265)),u=r(27484),l=r(13313),c=r(52185),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:i=null,dangerouslySetInnerHTML:s,children:a="",strategy:o="afterInteractive",onError:u,stylesheets:c}=e,m=r||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(n,u);return}let y=()=>{i&&i(),f.add(m)},v=document.createElement("script"),g=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),n&&n.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[r,n]of(s?(v.innerHTML=s.__html||"",y()):a?(v.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(v.src=t,d.set(t,g)),Object.entries(e))){if(void 0===n||h.includes(r))continue;let e=l.DOMAttributeNames[r]||r.toLowerCase();v.setAttribute(e,n)}"worker"===o&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",o),c&&p(c),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function v(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:i=null,strategy:l="afterInteractive",onError:d,stylesheets:h,...p}=e,{updateScripts:y,scripts:v,getIsSsr:g,appDir:w,nonce:b}=(0,o.useContext)(u.HeadManagerContext),E=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||r;E.current||(i&&e&&f.has(e)&&i(),E.current=!0)},[i,t,r]);let T=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!T.current&&("afterInteractive"===l?m(e):"lazyOnload"===l&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),T.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(y?(v[l]=(v[l]||[]).concat([{id:t,src:r,onLoad:n,onReady:i,onError:d,...p}]),y(v)):g&&g()?f.add(t||r):g&&!g()&&m(e)),w){if(h&&h.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return r?(a.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),(0,s.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===l&&r&&a.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let w=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13127:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=o(d);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||o(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},81971:function(e){e.exports={style:{fontFamily:"'__Outfit_85f290', '__Outfit_Fallback_85f290'",fontStyle:"normal"},className:"__className_85f290"}},29586:function(e,t,r){"use strict";r.d(t,{WV:function(){return o},jH:function(){return u}});var n=r(14749),i=r(2265),s=r(54887),a=r(59143);let o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,i.forwardRef)((e,r)=>{let{asChild:s,...o}=e,u=s?a.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(u,(0,n.Z)({},o,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&(0,s.flushSync)(()=>e.dispatchEvent(t))}},86736:function(e,t,r){"use strict";r.d(t,{Dx:function(){return U},aU:function(){return G},dk:function(){return z},fC:function(){return B},l_:function(){return X},x8:function(){return Y},zt:function(){return $}});var n=r(14749),i=r(2265),s=r(54887),a=r(44991),o=r(61266),u=r(27533),l=r(84104),c=r(1260),d=r(37881),f=r(12642),h=r(29586),p=r(39830),m=r(9310),y=r(32618),v=r(11780);let g="ToastProvider",[w,b,E]=(0,u.B)("Toast"),[T,C]=(0,l.b)("Toast",[E]),[x,P]=T(g),_=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:s="right",swipeThreshold:a=50,children:o}=e,[u,l]=(0,i.useState)(null),[c,d]=(0,i.useState)(0),f=(0,i.useRef)(!1),h=(0,i.useRef)(!1);return(0,i.createElement)(w.Provider,{scope:t},(0,i.createElement)(x,{scope:t,label:r,duration:n,swipeDirection:s,swipeThreshold:a,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:(0,i.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,i.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h},o))};_.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${g}\`. Expected non-empty \`string\`.`):null};let M=["F8"],O="toast.viewportPause",S="toast.viewportResume",q=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:s=M,label:a="Notifications ({hotkey})",...u}=e,l=P("ToastViewport",r),d=b(r),f=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(null),y=(0,i.useRef)(null),v=(0,o.e)(t,y,l.onViewportChange),g=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=l.toastCount>0;(0,i.useEffect)(()=>{let e=e=>{var t;s.every(t=>e[t]||e.code===t)&&(null===(t=y.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[s]),(0,i.useEffect)(()=>{let e=f.current,t=y.current;if(E&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(O);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(S);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[E,l.isClosePausedRef]);let T=(0,i.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,i.useEffect)(()=>{let e=y.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,i,s;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=p.current)||void 0===n||n.focus();return}let o=T({tabbingDirection:a?"backwards":"forwards"}),u=o.findIndex(e=>e===r);W(o.slice(u+1))?t.preventDefault():a?null===(i=p.current)||void 0===i||i.focus():null===(s=m.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,T]),(0,i.createElement)(c.I0,{ref:f,role:"region","aria-label":a.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:E?void 0:"none"}},E&&(0,i.createElement)(R,{ref:p,onFocusFromOutsideViewport:()=>{W(T({tabbingDirection:"forwards"}))}}),(0,i.createElement)(w.Slot,{scope:r},(0,i.createElement)(h.WV.ol,(0,n.Z)({tabIndex:-1},u,{ref:v}))),E&&(0,i.createElement)(R,{ref:m,onFocusFromOutsideViewport:()=>{W(T({tabbingDirection:"backwards"}))}}))}),R=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:s,...a}=e,o=P("ToastFocusProxy",r);return(0,i.createElement)(v.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},a,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=o.viewport)&&void 0!==t&&t.contains(r)||s()}}))}),D="Toast",L=(0,i.forwardRef)((e,t)=>{let{forceMount:r,open:s,defaultOpen:o,onOpenChange:u,...l}=e,[c=!0,d]=(0,m.T)({prop:s,defaultProp:o,onChange:u});return(0,i.createElement)(f.z,{present:r||c},(0,i.createElement)(k,(0,n.Z)({open:c},l,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[A,F]=T(D,{onClose(){}}),k=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,type:u="foreground",duration:l,open:d,onClose:f,onEscapeKeyDown:m,onPause:y,onResume:v,onSwipeStart:g,onSwipeMove:b,onSwipeCancel:E,onSwipeEnd:T,...C}=e,x=P(D,r),[_,M]=(0,i.useState)(null),q=(0,o.e)(t,e=>M(e)),R=(0,i.useRef)(null),L=(0,i.useRef)(null),F=l||x.duration,k=(0,i.useRef)(0),N=(0,i.useRef)(F),Q=(0,i.useRef)(0),{onToastAdd:j,onToastRemove:V}=x,H=(0,p.W)(()=>{var e;(null==_?void 0:_.contains(document.activeElement))&&(null===(e=x.viewport)||void 0===e||e.focus()),f()}),W=(0,i.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(Q.current),k.current=new Date().getTime(),Q.current=window.setTimeout(H,e))},[H]);(0,i.useEffect)(()=>{let e=x.viewport;if(e){let t=()=>{W(N.current),null==v||v()},r=()=>{let e=new Date().getTime()-k.current;N.current=N.current-e,window.clearTimeout(Q.current),null==y||y()};return e.addEventListener(O,r),e.addEventListener(S,t),()=>{e.removeEventListener(O,r),e.removeEventListener(S,t)}}},[x.viewport,F,y,v,W]),(0,i.useEffect)(()=>{d&&!x.isClosePausedRef.current&&W(F)},[d,F,x.isClosePausedRef,W]),(0,i.useEffect)(()=>(j(),()=>V()),[j,V]);let $=(0,i.useMemo)(()=>_?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(_):null,[_]);return x.viewport?(0,i.createElement)(i.Fragment,null,$&&(0,i.createElement)(I,{__scopeToast:r,role:"status","aria-live":"foreground"===u?"assertive":"polite","aria-atomic":!0},$),(0,i.createElement)(A,{scope:r,onClose:H},(0,s.createPortal)((0,i.createElement)(w.ItemSlot,{scope:r},(0,i.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,a.M)(m,()=>{x.isFocusedToastEscapeKeyDownRef.current||H(),x.isFocusedToastEscapeKeyDownRef.current=!1})},(0,i.createElement)(h.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":x.swipeDirection},C,{ref:q,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==m||m(e.nativeEvent),e.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,H()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(R.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!R.current)return;let t=e.clientX-R.current.x,r=e.clientY-R.current.y,n=!!L.current,i=["left","right"].includes(x.swipeDirection),s=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,a=i?s(0,t):0,o=i?0:s(0,r),u="touch"===e.pointerType?10:2,l={x:a,y:o},c={originalEvent:e,delta:l};n?(L.current=l,K("toast.swipeMove",b,c,{discrete:!1})):Z(l,x.swipeDirection,u)?(L.current=l,K("toast.swipeStart",g,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(R.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=L.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),L.current=null,R.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};Z(t,x.swipeDirection,x.swipeThreshold)?K("toast.swipeEnd",T,n,{discrete:!0}):K("toast.swipeCancel",E,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),x.viewport))):null});k.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${D}\`. Expected \`foreground | background\`.`):null};let I=e=>{let{__scopeToast:t,children:r,...n}=e,s=P(D,t),[a,o]=(0,i.useState)(!1),[u,l]=(0,i.useState)(!1);return function(e=()=>{}){let t=(0,p.W)(e);(0,y.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),(0,i.useEffect)(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,i.createElement)(d.h,{asChild:!0},(0,i.createElement)(v.T,n,a&&(0,i.createElement)(i.Fragment,null,s.label," ",r)))},N=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...s}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({},s,{ref:t}))}),Q=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...s}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({},s,{ref:t}))}),j=(0,i.forwardRef)((e,t)=>{let{altText:r,...s}=e;return r?(0,i.createElement)(H,{altText:r,asChild:!0},(0,i.createElement)(V,(0,n.Z)({},s,{ref:t}))):null});j.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let V=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,...s}=e,o=F("ToastClose",r);return(0,i.createElement)(H,{asChild:!0},(0,i.createElement)(h.WV.button,(0,n.Z)({type:"button"},s,{ref:t,onClick:(0,a.M)(e.onClick,o.onClose)})))}),H=(0,i.forwardRef)((e,t)=>{let{__scopeToast:r,altText:s,...a}=e;return(0,i.createElement)(h.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0},a,{ref:t}))});function K(e,t,r,{discrete:n}){let i=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?(0,h.jH)(i,s):i.dispatchEvent(s)}let Z=(e,t,r=0)=>{let n=Math.abs(e.x),i=Math.abs(e.y),s=n>i;return"left"===t||"right"===t?s&&n>r:!s&&i>r};function W(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let $=_,X=q,B=L,U=N,z=Q,G=j,Y=V},11780:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(14749),i=r(2265),s=r(29586);let a=(0,i.forwardRef)((e,t)=>(0,i.createElement)(s.WV.span,(0,n.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))},1793:function(e,t,r){"use strict";r.d(t,{R:function(){return o},m:function(){return a}});var n=r(45139),i=r(2041),s=r(90326),a=class extends i.F{#e;#t;#r;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.defaultOptions,this.#r=e.mutationCache,this.#e=[],this.state=e.state||o(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#r.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#r.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#i({type:"pending",variables:e}),await this.#r.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#i({type:"pending",context:t,variables:e})}let r=await (this.#n=(0,s.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#i({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#n.promise);return await this.#r.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#r.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#i({type:"success",data:r}),r}catch(t){try{throw await this.#r.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#r.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#i({type:"error",error:t})}}}#i(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,s.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#r.notify({mutation:this,type:"updated",action:e})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},73582:function(e,t,r){"use strict";r.d(t,{t:function(){return o}});var n=r(46063),i=r(4668),s=r(45139),a=r(44614),o=class extends a.l{constructor(e={}){super(),this.config=e,this.#s=new Map}#s;build(e,t,r){let s=t.queryKey,a=t.queryHash??(0,n.Rm)(s,t),o=this.get(a);return o||(o=new i.A({cache:this,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(o)),o}add(e){this.#s.has(e.queryHash)||(this.#s.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#s.get(e.queryHash);t&&(e.destroy(),t===e&&this.#s.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#s.get(e)}getAll(){return[...this.#s.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}}},73221:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var n=r(46063),i=r(73582),s=r(45139),a=r(1793),o=r(44614),u=class extends o.l{constructor(e={}){super(),this.config=e,this.#a=[],this.#o=0}#a;#o;#u;build(e,t,r){let n=new a.m({mutationCache:this,mutationId:++this.#o,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#a.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#a=this.#a.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){s.V.batch(()=>{this.#a.forEach(e=>{this.remove(e)})})}getAll(){return this.#a}find(e){let t={exact:!0,...e};return this.#a.find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.#a.filter(t=>(0,n.X7)(e,t))}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#u=(this.#u??Promise.resolve()).then(()=>{let e=this.#a.filter(e=>e.state.isPaused);return s.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(n.ZT)),Promise.resolve()))}).then(()=>{this.#u=void 0}),this.#u}},l=r(79555),c=r(17211);function d(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var f=class{#l;#r;#t;#c;#d;#f;#h;#p;constructor(e={}){this.#l=e.queryCache||new i.t,this.#r=e.mutationCache||new u,this.#t=e.defaultOptions||{},this.#c=new Map,this.#d=new Map,this.#f=0}mount(){this.#f++,1===this.#f&&(this.#h=l.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onFocus())}),this.#p=c.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#l.onOnline())}))}unmount(){this.#f--,0===this.#f&&(this.#h?.(),this.#h=void 0,this.#p?.(),this.#p=void 0)}isFetching(e){return this.#l.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),n=this.#l.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),s=this.#l.get(i.queryHash),a=s?.state.data,o=(0,n.SE)(t,a);if(void 0!==o)return this.#l.build(this,i).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return s.V.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#l.get(t.queryHash)?.state}removeQueries(e){let t=this.#l;s.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#l,n={type:"active",...e};return s.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(s.V.batch(()=>this.#l.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return s.V.batch(()=>{if(this.#l.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(s.V.batch(()=>this.#l.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#l.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let i=async()=>{let r;let i=e.options,s=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=e.options.queryFn&&e.options.queryFn!==n.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),f=async(t,r,i)=>{if(u)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let s={queryKey:e.queryKey,pageParam:r,direction:i?"backward":"forward",meta:e.options.meta};l(s);let a=await c(s),{maxPages:o}=e.options,d=i?n.Ht:n.VX;return{pages:d(t.pages,a,o),pageParams:d(t.pageParams,r,o)}};if(s&&a.length){let e="backward"===s,t={pages:a,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:d)(i,t);r=await f(t,n,e)}else{r=await f({pages:[],pageParams:[]},o[0]??i.initialPageParam);let e=t??a.length;for(let t=1;t<e;t++){let e=d(i,r);r=await f(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return c.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#l}getMutationCache(){return this.#r}getDefaultOptions(){return this.#t}setDefaultOptions(e){this.#t=e}setQueryDefaults(e,t){this.#c.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#d.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#d.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#t.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#t.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#l.clear(),this.#r.clear()}}}}]);