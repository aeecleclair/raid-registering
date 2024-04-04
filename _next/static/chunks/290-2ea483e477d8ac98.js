"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{9744:function(t,e,n){n.d(e,{Z:function(){return s}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n(843).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},2891:function(t,e,n){n.d(e,{Z:function(){return s}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n(843).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},2153:function(t,e,n){n.d(e,{Z:function(){return s}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n(843).Z)("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]])},1047:function(t,e,n){n.d(e,{Z:function(){return s}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n(843).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},8792:function(t,e,n){n.d(e,{default:function(){return i.a}});var s=n(5250),i=n.n(s)},2178:function(t,e,n){n.d(e,{Ee:function(){return b},NY:function(){return g},fC:function(){return v}});var s=n(2110),i=n(2265),a=n(4104),o=n(9830),r=n(2618),u=n(9586);let c="Avatar",[h,l]=(0,a.b)(c),[d,m]=h(c),p=(0,i.forwardRef)((t,e)=>{let{__scopeAvatar:n,...a}=t,[o,r]=(0,i.useState)("idle");return(0,i.createElement)(d,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:r},(0,i.createElement)(u.WV.span,(0,s.Z)({},a,{ref:e})))}),f=(0,i.forwardRef)((t,e)=>{let{__scopeAvatar:n,src:a,onLoadingStatusChange:c=()=>{},...h}=t,l=m("AvatarImage",n),d=function(t){let[e,n]=(0,i.useState)("idle");return(0,r.b)(()=>{if(!t){n("error");return}let e=!0,s=new window.Image,i=t=>()=>{e&&n(t)};return n("loading"),s.onload=i("loaded"),s.onerror=i("error"),s.src=t,()=>{e=!1}},[t]),e}(a),p=(0,o.W)(t=>{c(t),l.onImageLoadingStatusChange(t)});return(0,r.b)(()=>{"idle"!==d&&p(d)},[d,p]),"loaded"===d?(0,i.createElement)(u.WV.img,(0,s.Z)({},h,{ref:e,src:a})):null}),y=(0,i.forwardRef)((t,e)=>{let{__scopeAvatar:n,delayMs:a,...o}=t,r=m("AvatarFallback",n),[c,h]=(0,i.useState)(void 0===a);return(0,i.useEffect)(()=>{if(void 0!==a){let t=window.setTimeout(()=>h(!0),a);return()=>window.clearTimeout(t)}},[a]),c&&"loaded"!==r.imageLoadingStatus?(0,i.createElement)(u.WV.span,(0,s.Z)({},o,{ref:e})):null}),v=p,b=f,g=y},1793:function(t,e,n){n.d(e,{R:function(){return r},m:function(){return o}});var s=n(5139),i=n(2041),a=n(326),o=class extends i.F{#t;#e;#n;#s;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#n=t.mutationCache,this.#t=[],this.state=t.state||r(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#i({type:"pending",variables:t}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#i({type:"pending",context:e,variables:t})}let n=await (this.#s=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#i({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#s.promise);return await this.#n.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#n.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#i({type:"success",data:n}),n}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#i({type:"error",error:e})}}}#i(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}};function r(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},568:function(t,e,n){n.d(e,{D:function(){return l}});var s=n(2265),i=n(1793),a=n(5139),o=n(4614),r=n(6063),u=class extends o.l{#a;#o=void 0;#r;#u;constructor(t,e){super(),this.#a=t,this.setOptions(e),this.bindMethods(),this.#c()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#a.defaultMutationOptions(t),(0,r.VS)(this.options,e)||this.#a.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,r.Ym)(e.mutationKey)!==(0,r.Ym)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(t){this.#c(),this.#h(t)}getCurrentResult(){return this.#o}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#c(),this.#h()}mutate(t,e){return this.#u=e,this.#r?.removeObserver(this),this.#r=this.#a.getMutationCache().build(this.#a,this.options),this.#r.addObserver(this),this.#r.execute(t)}#c(){let t=this.#r?.state??(0,i.R)();this.#o={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#h(t){a.V.batch(()=>{if(this.#u&&this.hasListeners()){let e=this.#o.variables,n=this.#o.context;t?.type==="success"?(this.#u.onSuccess?.(t.data,e,n),this.#u.onSettled?.(t.data,null,e,n)):t?.type==="error"&&(this.#u.onError?.(t.error,e,n),this.#u.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach(t=>{t(this.#o)})})}},c=n(7082),h=n(826);function l(t,e){let n=(0,c.NL)(e),[i]=s.useState(()=>new u(n,t));s.useEffect(()=>{i.setOptions(t)},[i,t]);let o=s.useSyncExternalStore(s.useCallback(t=>i.subscribe(a.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),r=s.useCallback((t,e)=>{i.mutate(t,e).catch(h.Z)},[i]);if(o.error&&(0,h.L)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:r,mutateAsync:o.mutate}}},4848:function(t,e,n){n.d(e,{F:function(){return c},f:function(){return h}});var s=n(2265),i=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,r=s.createContext(void 0),u={setTheme:t=>{},themes:[]},c=()=>{var t;return null!=(t=s.useContext(r))?t:u},h=t=>s.useContext(r)?t.children:s.createElement(d,{...t}),l=["light","dark"],d=t=>{let{forcedTheme:e,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:u=!0,storageKey:c="theme",themes:h=l,defaultTheme:d=o?"system":"light",attribute:v="data-theme",value:b,children:g,nonce:w}=t,[C,S]=s.useState(()=>p(c,d)),[k,M]=s.useState(()=>p(c)),x=b?Object.values(b):h,E=s.useCallback(t=>{let e=t;if(!e)return;"system"===t&&o&&(e=y());let s=b?b[e]:e,a=n?f():null,r=document.documentElement;if("class"===v?(r.classList.remove(...x),s&&r.classList.add(s)):s?r.setAttribute(v,s):r.removeAttribute(v),u){let t=i.includes(d)?d:null,n=i.includes(e)?e:t;r.style.colorScheme=n}null==a||a()},[]),O=s.useCallback(t=>{let e="function"==typeof t?t(t):t;S(e);try{localStorage.setItem(c,e)}catch(t){}},[e]),R=s.useCallback(t=>{M(y(t)),"system"===C&&o&&!e&&E("system")},[C,e]);s.useEffect(()=>{let t=window.matchMedia(a);return t.addListener(R),R(t),()=>t.removeListener(R)},[R]),s.useEffect(()=>{let t=t=>{t.key===c&&O(t.newValue||d)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[O]),s.useEffect(()=>{E(null!=e?e:C)},[e,C]);let T=s.useMemo(()=>({theme:C,setTheme:O,forcedTheme:e,resolvedTheme:"system"===C?k:C,themes:o?[...h,"system"]:h,systemTheme:o?k:void 0}),[C,O,e,k,o,h]);return s.createElement(r.Provider,{value:T},s.createElement(m,{forcedTheme:e,disableTransitionOnChange:n,enableSystem:o,enableColorScheme:u,storageKey:c,themes:h,defaultTheme:d,attribute:v,value:b,children:g,attrs:x,nonce:w}),g)},m=s.memo(t=>{let{forcedTheme:e,storageKey:n,attribute:o,enableSystem:r,enableColorScheme:u,defaultTheme:c,value:h,attrs:l,nonce:d}=t,m="system"===c,p="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(l.map(t=>"'".concat(t,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),f=u?(i.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=h?h[t]:t,a=e?t+"|| ''":"'".concat(s,"'"),r="";return u&&n&&!e&&i.includes(t)&&(r+="d.style.colorScheme = '".concat(t,"';")),"class"===o?e||s?r+="c.add(".concat(a,")"):r+="null":s&&(r+="d[s](n,".concat(a,")")),r},v=e?"!function(){".concat(p).concat(y(e),"}()"):r?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(h?"var x=".concat(JSON.stringify(h),";"):"").concat(y(h?"x[e]":"e",!0),"}").concat(m?"":"else{"+y(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(h?"var x=".concat(JSON.stringify(h),";"):"").concat(y(h?"x[e]":"e",!0),"}else{").concat(y(c,!1,!1),";}").concat(f,"}catch(t){}}();");return s.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})}),p=(t,e)=>{let n;if(!o){try{n=localStorage.getItem(t)||void 0}catch(t){}return n||e}},f=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=t=>(t||(t=window.matchMedia(a)),t.matches?"dark":"light")}}]);