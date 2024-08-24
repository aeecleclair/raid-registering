(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{24654:function(){},37440:function(t,e,r){"use strict";r.d(e,{cn:function(){return i}});var n=r(44839),a=r(96164);function i(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,a.m6)((0,n.W)(e))}},84980:function(t,e,r){"use strict";r.d(e,{Uqw:function(){return M},lN0:function(){return W},L4N:function(){return td},THV:function(){return to},p5N:function(){return D},B1y:function(){return O},EnB:function(){return R},nzy:function(){return U},gFH:function(){return m},RoB:function(){return tp},Arm:function(){return ts},iEE:function(){return x},fKu:function(){return P},vT9:function(){return z},NmN:function(){return Z},rHE:function(){return Y},UIb:function(){return S},bsA:function(){return B},TuY:function(){return q},K$j:function(){return tt},mzN:function(){return ta},uBv:function(){return Q},RM4:function(){return tr},z2o:function(){return v},NWG:function(){return y},KRD:function(){return T},iqb:function(){return w}});var n=r(40932),a=r(25524);function i(t){return{fetcherOptions:{},queryOptions:{},queryKeyFn:o}}let o=t=>{let e=s(t)?t.path.split("/").filter(Boolean).map(e=>u(e,t.variables.pathParams)):t.path.split("/").filter(Boolean);return d(t)&&e.push(t.variables.queryParams),c(t)&&e.push(t.variables.body),e},u=(t,e)=>t.startsWith("{")&&t.endsWith("}")?e[t.slice(1,-1)]:t,s=t=>!!t.variables.pathParams,c=t=>!!t.variables.body,d=t=>!!t.variables.queryParams;async function l(t){let{url:e,method:r,body:n,headers:a,pathParams:i,queryParams:o,signal:u}=t;try{var s;let t={"Content-Type":"application/json",...a};t["Content-Type"].toLowerCase().includes("multipart/form-data")&&delete t["Content-Type"];let c=await window.fetch("".concat("https://hyperion.dev.eclair.ec-lyon.fr").concat(p(e,o,i)),{signal:u,method:r.toUpperCase(),body:n?n instanceof FormData?n:JSON.stringify(n):void 0,headers:t});if(!c.ok){let t;try{t=await c.json()}catch(e){t={status:"unknown",payload:e instanceof Error?"Unexpected error (".concat(e.message,")"):"Unexpected error"}}throw t}if(null===(s=c.headers.get("content-type"))||void 0===s?void 0:s.includes("json"))return await c.json();return await c.blob()}catch(t){throw{name:"unknown",message:t instanceof Error?"Network error (".concat(t.message,")"):"Network error",stack:t}}}let p=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new URLSearchParams(e).toString();return n&&(n="?".concat(n)),t.replace(/\{\w*\}/g,t=>r[t.slice(1,-1)])+n},f=(t,e)=>l({url:"/users/me",method:"get",...t,signal:e}),m=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/users/me",operationId:"getUsersMe",variables:t}),queryFn:e=>{let{signal:n}=e;return f({...r,...t},n)},...e,...a})},h=(t,e)=>l({url:"/users/create",method:"post",...t,signal:e}),y=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>h({...e,...t}),...t})},g=(t,e)=>l({url:"/users/activate",method:"post",...t,signal:e}),v=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>g({...e,...t}),...t})},b=(t,e)=>l({url:"/users/recover",method:"post",...t,signal:e}),T=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>b({...e,...t}),...t})},I=(t,e)=>l({url:"/users/reset-password",method:"post",...t,signal:e}),w=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>I({...e,...t}),...t})},k=(t,e)=>l({url:"/raid/participants/{participantId}",method:"get",...t,signal:e}),D=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/participants/{participantId}",operationId:"getRaidParticipantsParticipantId",variables:t}),queryFn:e=>{let{signal:n}=e;return k({...r,...t},n)},...e,...a})},_=(t,e)=>l({url:"/raid/participants/{participantId}",method:"patch",...t,signal:e}),x=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>_({...e,...t}),...t})},F=(t,e)=>l({url:"/raid/participants",method:"post",...t,signal:e}),S=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>F({...e,...t}),...t})},N=(t,e)=>l({url:"/raid/teams",method:"get",...t,signal:e}),R=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/teams",operationId:"getRaidTeams",variables:t}),queryFn:e=>{let{signal:n}=e;return N({...r,...t},n)},...e,...a})},A=(t,e)=>l({url:"/raid/teams",method:"post",...t,signal:e}),q=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>A({...e,...t}),...t})},E=(t,e)=>l({url:"/raid/participants/{participantId}/team",method:"get",...t,signal:e}),O=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/participants/{participantId}/team",operationId:"getRaidParticipantsParticipantIdTeam",variables:t}),queryFn:e=>{let{signal:n}=e;return E({...r,...t},n)},...e,...a})},C=(t,e)=>l({url:"/raid/teams/{teamId}",method:"get",...t,signal:e}),U=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/teams/{teamId}",operationId:"getRaidTeamsTeamId",variables:t}),queryFn:e=>{let{signal:n}=e;return C({...r,...t},n)},...e,...a})},j=(t,e)=>l({url:"/raid/teams/{teamId}",method:"patch",...t,signal:e}),P=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>j({...e,...t}),...t})},K=(t,e)=>l({url:"/raid/teams/{teamId}",method:"delete",...t,signal:e}),M=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>K({...e,...t}),...t})},V=(t,e)=>l({url:"/raid/document/{documentId}",method:"get",...t,signal:e}),W=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/document/{documentId}",operationId:"getRaidDocumentDocumentId",variables:t}),queryFn:e=>{let{signal:n}=e;return V({...r,...t},n)},...e,...a})},J=(t,e)=>l({url:"/raid/document/{documentId}/validate",method:"post",...t,signal:e}),z=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>J({...e,...t}),...t})},L=(t,e)=>l({url:"/raid/security_file/",method:"post",...t,signal:e}),B=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>L({...e,...t}),...t})},H=(t,e)=>l({url:"/raid/participant/{participantId}/payment",method:"post",...t,signal:e}),Z=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>H({...e,...t}),...t})},G=(t,e)=>l({url:"/raid/participant/{participantId}/t_shirt_payment",method:"post",...t,signal:e}),Y=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>G({...e,...t}),...t})},X=(t,e)=>l({url:"/raid/teams/{teamId}/invite",method:"post",...t,signal:e}),Q=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>X({...e,...t}),...t})},$=(t,e)=>l({url:"/raid/teams/join/{token}",method:"post",...t,signal:e}),tt=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>$({...e,...t}),...t})},te=(t,e)=>l({url:"/raid/teams/{teamId}/kick/{participantId}",method:"post",...t,signal:e}),tr=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>te({...e,...t}),...t})},tn=(t,e)=>l({url:"/raid/teams/merge",method:"post",...t,signal:e}),ta=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>tn({...e,...t}),...t})},ti=(t,e)=>l({url:"/raid/information",method:"get",...t,signal:e}),to=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/information",operationId:"getRaidInformation",variables:t}),queryFn:e=>{let{signal:n}=e;return ti({...r,...t},n)},...e,...a})},tu=(t,e)=>l({url:"/raid/information",method:"patch",...t,signal:e}),ts=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>tu({...e,...t}),...t})},tc=(t,e)=>l({url:"/raid/drive",method:"get",...t,signal:e}),td=(t,e)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:o}=i(e);return n.a({queryKey:o({path:"/raid/drive",operationId:"getRaidDrive",variables:t}),queryFn:e=>{let{signal:n}=e;return tc({...r,...t},n)},...e,...a})},tl=(t,e)=>l({url:"/raid/drive",method:"patch",...t,signal:e}),tp=t=>{let{fetcherOptions:e}=i();return a.D({mutationFn:t=>tl({...e,...t}),...t})}},89733:function(t,e,r){"use strict";r.d(e,{d:function(){return s},z:function(){return c}});var n=r(57437),a=r(2265),i=r(71538),o=r(12218),u=r(37440);let s=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-red-700 text-destructive-foreground hover:bg-red-700/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((t,e)=>{let{className:r,variant:a,size:o,asChild:c=!1,...d}=t,l=c?i.g7:"button";return(0,n.jsx)(l,{className:(0,u.cn)(s({variant:a,size:o,className:r})),ref:e,...d})});c.displayName="Button"},48185:function(t,e,r){"use strict";r.d(e,{Ol:function(){return u},SZ:function(){return c},Zb:function(){return o},aY:function(){return d},eW:function(){return l},ll:function(){return s}});var n=r(57437),a=r(2265),i=r(37440);let o=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("div",{ref:e,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});o.displayName="Card";let u=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("div",{ref:e,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...a})});u.displayName="CardHeader";let s=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("h3",{ref:e,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});s.displayName="CardTitle";let c=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("p",{ref:e,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})});c.displayName="CardDescription";let d=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("div",{ref:e,className:(0,i.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let l=a.forwardRef((t,e)=>{let{className:r,...a}=t;return(0,n.jsx)("div",{ref:e,className:(0,i.cn)("flex items-center p-6 pt-0",r),...a})});l.displayName="CardFooter"},78068:function(t,e,r){"use strict";r.d(e,{Am:function(){return l},pm:function(){return p}});var n=r(2265);let a=0,i=new Map,o=t=>{if(i.has(t))return;let e=setTimeout(()=>{i.delete(t),d({type:"REMOVE_TOAST",toastId:t})},1e6);i.set(t,e)},u=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{let{toastId:r}=e;return r?o(r):t.toasts.forEach(t=>{o(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===r||void 0===r?{...t,open:!1}:t)}}case"REMOVE_TOAST":if(void 0===e.toastId)return{...t,toasts:[]};return{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)}}},s=[],c={toasts:[]};function d(t){c=u(c,t),s.forEach(t=>{t(c)})}function l(t){let{...e}=t,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...e,id:r,open:!0,onOpenChange:t=>{t||n()}}}),{id:r,dismiss:n,update:t=>d({type:"UPDATE_TOAST",toast:{...t,id:r}})}}function p(){let[t,e]=n.useState(c);return n.useEffect(()=>(s.push(e),()=>{let t=s.indexOf(e);t>-1&&s.splice(t,1)}),[t]),{...t,toast:l,dismiss:t=>d({type:"DISMISS_TOAST",toastId:t})}}},40133:function(t,e,r){"use strict";r.d(e,{a:function(){return T}});var n=r(2265),a=r(42126),i=r(97334),o=r(39099),u=r(89291);let s=(0,o.Ue)()((0,u.mW)((0,u.tJ)(t=>({token:null,refreshToken:null,userId:null,setToken:e=>{let r=e?JSON.parse(atob(e.split(".")[1])).sub:null;t({token:e,userId:r})},setRefreshToken:e=>{t({refreshToken:e})}}),{name:"token-storage"})));var c=r(16463),d=r(64773),l=r(84475),p=r(40832),f=r(40932),m=r(45099),h=r(78068);let y="RaidRegistering",g="".concat("https://inscription-raid.myecl.fr","/login"),v="https://hyperion.dev.eclair.ec-lyon.fr",b=["API"],T=()=>{let t=(0,c.usePathname)(),[e,r]=(0,n.useState)(!1),{token:o,setToken:u,refreshToken:T,setRefreshToken:I,userId:w}=s(),{resetUser:k}=(0,d.L)(),{resetParticipant:D}=(0,l.p)(),{resetInviteToken:_}=(0,p.u)(),[x,F]=(0,n.useState)(!1),S=(0,c.useRouter)(),{codeVerifier:N,setCodeVerifier:R,resetCodeVerifier:A}=(0,m.f)(),q=(0,n.useRef)(null);async function E(t){let e=new TextEncoder().encode(t);return await crypto.subtle.digest("SHA-256",e).then(t=>btoa(Array.from(new Uint8Array(t)).map(t=>String.fromCharCode(t)).join("")).replace(/\+/g,"-").replace(/\//g,"_"))}async function O(t){r(!0);let e=(0,i.stringify)(t);try{let t=await a.Z.post("".concat(v,"/auth/token"),e,{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});if(200!=t.status){r(!1),(0,h.Am)({title:"Erreur",description:"Une erreur est survenue lors de la connexion",variant:"destructive"});return}let n=t.data;r(!1),u(n.access_token),I(n.refresh_token)}catch(t){r(!1),U()&&K()}}async function C(){return e?null:(r(!0),T)?(await O({grant_type:"refresh_token",client_id:y,refresh_token:T}),T):null}function U(){return!!o&&(o?JSON.parse(atob(o.split(".")[1])).exp:0)<Math.floor(Date.now()/1e3)-60}async function j(t,r){N&&!e&&(await O({grant_type:"authorization_code",client_id:y,code:t,redirect_uri:g,code_verifier:N}),F(!0),r&&r(),A())}async function P(){r(!0);let t=function(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,a=crypto.getRandomValues(new Uint8Array(128)),i=0;i<128;i++)e+=r.charAt(Math.floor(a[i]/128*n));return e}(128);R(t);let e="".concat(v,"/auth/authorize?client_id=").concat(y,"&response_type=code&scope=").concat(b.join(" "),"&redirect_uri=").concat(g,"&code_challenge=").concat(await E(t),"&code_challenge_method=S256");window.location.href=e}function K(){u(null),I(null),F(!1),S.replace("/login"),k(),D(),_()}async function M(){return e?null:(r(!0),null!==o?F(!0):["/login","/recover","/register"].includes(null!=t?t:"")||S.replace("/login"),r(!1),o)}return(0,f.a)({queryKey:["lookToRefreshToken"],queryFn:()=>(function(){if(q.current&&clearTimeout(q.current),null===o)return null;let t=(o?JSON.parse(atob(o.split(".")[1])).exp:0)*1e3-Date.now()-6e4;return t<=0?C():q.current=setTimeout(()=>{C(),q.current=null},t),o})(),retry:0,enabled:x,refetchOnMount:!1}),(0,f.a)({queryKey:["getTokenFromStorage"],queryFn:()=>M(),retry:0,enabled:!x,refetchOnMount:!1}),{getTokenFromRequest:P,isLoading:e,token:o,isTokenQueried:x,logout:K,userId:w,isTokenExpired:U,login:j}}},45099:function(t,e,r){"use strict";r.d(e,{f:function(){return i}});var n=r(39099),a=r(89291);let i=(0,n.Ue)()((0,a.mW)((0,a.tJ)(t=>({codeVerifier:void 0,setCodeVerifier:e=>{t({codeVerifier:e,isLoading:!0})},resetCodeVerifier:()=>{t({codeVerifier:void 0,isLoading:!1})},isLoading:!1}),{name:"raid-code-verifier-storage"})))},40832:function(t,e,r){"use strict";r.d(e,{u:function(){return i}});var n=r(39099),a=r(89291);let i=(0,n.Ue)()((0,a.mW)((0,a.tJ)(t=>({InviteToken:void 0,setInviteToken:e=>{t({inviteToken:e})},resetInviteToken:()=>{t({inviteToken:void 0})}}),{name:"raid-invite-token-storage"})))},84475:function(t,e,r){"use strict";r.d(e,{p:function(){return i}});var n=r(39099),a=r(89291);let i=(0,n.Ue)()((0,a.mW)((0,a.tJ)(t=>({participant:void 0,setParticipant:e=>{t({participant:e})},resetParticipant:()=>{t({participant:void 0})}}),{name:"raid-participant-storage"})))},64773:function(t,e,r){"use strict";r.d(e,{L:function(){return i}});var n=r(39099),a=r(89291);let i=(0,n.Ue)()((0,a.mW)((0,a.tJ)(t=>({user:void 0,setUser:e=>{t({user:e})},resetUser:()=>{t({user:void 0})}}),{name:"raid-user-storage"})))}}]);