(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{24654:function(){},1657:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(75504),a=r(51367);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},425:function(e,t,r){"use strict";r.d(t,{Bz8:function(){return L},wnt:function(){return D},KH8:function(){return Z},p6t:function(){return b},uHv:function(){return k},kAw:function(){return N},Tzb:function(){return y},oiV:function(){return _},xAP:function(){return C},w2w:function(){return J},Ayu:function(){return p},RDe:function(){return z},qGn:function(){return P},EwT:function(){return v},Ij9:function(){return F}});var n=r(94642),a=r(20568);function o(e){return{fetcherOptions:{},queryOptions:{},queryKeyFn:i}}let i=e=>{let t=l(e)?e.path.split("/").filter(Boolean).map(t=>s(t,e.variables.pathParams)):e.path.split("/").filter(Boolean);return u(e)&&t.push(e.variables.queryParams),d(e)&&t.push(e.variables.body),t},s=(e,t)=>e.startsWith("{")&&e.endsWith("}")?t[e.slice(1,-1)]:e,l=e=>!!e.variables.pathParams,d=e=>!!e.variables.body,u=e=>!!e.variables.queryParams;async function c(e){let{url:t,method:r,body:n,headers:a,pathParams:o,queryParams:i,signal:s}=e;try{var l;let e={"Content-Type":"application/json",...a};e["Content-Type"].toLowerCase().includes("multipart/form-data")&&delete e["Content-Type"];let d=await window.fetch("".concat("https://hyperion-3.dev.eclair.ec-lyon.fr").concat(f(t,i,o)),{signal:s,method:r.toUpperCase(),body:n?n instanceof FormData?n:JSON.stringify(n):void 0,headers:e});if(!d.ok){let e;try{e=await d.json()}catch(t){e={status:"unknown",payload:t instanceof Error?"Unexpected error (".concat(t.message,")"):"Unexpected error"}}throw e}if(null===(l=d.headers.get("content-type"))||void 0===l?void 0:l.includes("json"))return await d.json();return await d.blob()}catch(e){throw{name:"unknown",message:e instanceof Error?"Network error (".concat(e.message,")"):"Network error",stack:e}}}let f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new URLSearchParams(t).toString();return n&&(n="?".concat(n)),e.replace(/\{\w*\}/g,e=>r[e.slice(1,-1)])+n},m=(e,t)=>c({url:"/users/me",method:"get",...e,signal:t}),p=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/users/me",operationId:"readCurrentUserUsersMeGet",variables:e}),queryFn:t=>{let{signal:n}=t;return m({...r,...e},n)},...t,...a})},h=(e,t)=>c({url:"/raid/participants/{participantId}",method:"get",...e,signal:t}),y=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/raid/participants/{participantId}",operationId:"getParticipantByIdRaidParticipantsParticipantIdGet",variables:e}),queryFn:t=>{let{signal:n}=t;return h({...r,...e},n)},...t,...a})},g=(e,t)=>c({url:"/raid/participants/{participantId}",method:"patch",...e,signal:t}),v=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>g({...t,...e}),...e})},x=(e,t)=>c({url:"/raid/participants",method:"post",...e,signal:t}),b=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>x({...t,...e}),...e})},w=(e,t)=>c({url:"/raid/teams",method:"get",...e,signal:t}),N=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/raid/teams",operationId:"getAllTeamsRaidTeamsGet",variables:e}),queryFn:t=>{let{signal:n}=t;return w({...r,...e},n)},...t,...a})},j=(e,t)=>c({url:"/raid/teams",method:"post",...e,signal:t}),k=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>j({...t,...e}),...e})},I=(e,t)=>c({url:"/raid/participants/{participantId}/team",method:"get",...e,signal:t}),C=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/raid/participants/{participantId}/team",operationId:"getTeamByParticipantIdRaidParticipantsParticipantIdTeamGet",variables:e}),queryFn:t=>{let{signal:n}=t;return I({...r,...e},n)},...t,...a})},R=(e,t)=>c({url:"/raid/teams/{teamId}",method:"get",...e,signal:t}),_=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/raid/teams/{teamId}",operationId:"getTeamByIdRaidTeamsTeamIdGet",variables:e}),queryFn:t=>{let{signal:n}=t;return R({...r,...e},n)},...t,...a})},T=(e,t)=>c({url:"/raid/teams/{teamId}",method:"patch",...e,signal:t}),F=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>T({...t,...e}),...e})},U=(e,t)=>c({url:"/raid/participant/{participantId}/document",method:"post",...e,signal:t}),D=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>U({...t,...e}),...e})},q=(e,t)=>c({url:"/raid/document/{documentId}",method:"get",...e,signal:t}),z=(e,t)=>{let{fetcherOptions:r,queryOptions:a,queryKeyFn:i}=o(t);return n.a({queryKey:i({path:"/raid/document/{documentId}",operationId:"readDocumentRaidDocumentDocumentIdGet",variables:e}),queryFn:t=>{let{signal:n}=t;return q({...r,...e},n)},...t,...a})},A=(e,t)=>c({url:"/raid/security_file/",method:"post",...e,signal:t}),P=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>A({...t,...e}),...e})},S=(e,t)=>c({url:"/raid/participant/{participantId}/security_file",method:"post",...e,signal:t}),L=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>S({...t,...e}),...e})},E=(e,t)=>c({url:"/raid/teams/{teamId}/invite",method:"post",...e,signal:t}),Z=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>E({...t,...e}),...e})},B=(e,t)=>c({url:"/raid/teams/join/{token}",method:"post",...e,signal:t}),J=e=>{let{fetcherOptions:t}=o();return a.D({mutationFn:e=>B({...t,...e}),...e})}},575:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(57437),a=r(2265),o=r(59143),i=r(57742),s=r(1657);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-red-700 text-destructive-foreground hover:bg-red-700/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:d=!1,...u}=e,c=d?o.g7:"button";return(0,n.jsx)(c,{className:(0,s.cn)(l({variant:a,size:i,className:r})),ref:t,...u})});d.displayName="Button"},15671:function(e,t,r){"use strict";r.d(t,{Ol:function(){return s},SZ:function(){return d},Zb:function(){return i},aY:function(){return u},eW:function(){return c},ll:function(){return l}});var n=r(57437),a=r(2265),o=r(1657);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...a})});s.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...a})});u.displayName="CardContent";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...a})});c.displayName="CardFooter"},34645:function(e,t,r){"use strict";r.d(t,{$F:function(){return c},AW:function(){return y},Ju:function(){return b},KM:function(){return N},Ph:function(){return f},TG:function(){return h},VD:function(){return w},Xi:function(){return g},_x:function(){return m},bO:function(){return v},h_:function(){return u},kt:function(){return p},qB:function(){return x}});var n=r(57437),a=r(2265),o=r(81100),i=r(37805),s=r(80037),l=r(37501),d=r(1657);let u=o.fC,c=o.xz;o.ZA,o.Uv;let f=o.Tr,m=o.Ee,p=a.forwardRef((e,t)=>{let{className:r,inset:a,children:s,...l}=e;return(0,n.jsxs)(o.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",r),...l,children:[s,(0,n.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})});p.displayName=o.fF.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...a})});h.displayName=o.tu.displayName;let y=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...i}=e;return(0,n.jsx)(o.Uv,{children:(0,n.jsx)(o.VY,{ref:t,sideOffset:a,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...i})})});y.displayName=o.VY.displayName;let g=a.forwardRef((e,t)=>{let{className:r,inset:a,...i}=e;return(0,n.jsx)(o.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",r),...i})});g.displayName=o.ck.displayName;let v=a.forwardRef((e,t)=>{let{className:r,children:a,checked:i,...l}=e;return(0,n.jsxs)(o.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:i,...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(o.wU,{children:(0,n.jsx)(s.Z,{className:"h-4 w-4"})})}),a]})});v.displayName=o.oC.displayName;let x=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(o.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(o.wU,{children:(0,n.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),a]})});x.displayName=o.Rk.displayName;let b=a.forwardRef((e,t)=>{let{className:r,inset:a,...i}=e;return(0,n.jsx)(o.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",r),...i})});b.displayName=o.__.displayName;let w=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});w.displayName=o.Z0.displayName;let N=e=>{let{className:t,...r}=e;return(0,n.jsx)("span",{className:(0,d.cn)("ml-auto text-xs tracking-widest opacity-60",t),...r})};N.displayName="DropdownMenuShortcut"},50326:function(e,t,r){"use strict";r.d(t,{Ei:function(){return x},FF:function(){return g},Tu:function(){return y},aM:function(){return u},bC:function(){return v},sw:function(){return c},ue:function(){return h},yo:function(){return d}});var n=r(57437),a=r(2265),o=r(72936),i=r(57742),s=r(52235),l=r(1657);let d=o.fC,u=o.xz,c=o.x8,f=o.h_,m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a,ref:t})});m.displayName=o.aV.displayName;let p=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",team:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-none"}},defaultVariants:{side:"right"}}),h=a.forwardRef((e,t)=>{let{side:r="right",className:a,children:i,...d}=e;return(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{}),(0,n.jsxs)(o.VY,{ref:t,className:(0,l.cn)(p({side:r}),a),...d,children:[i,(0,n.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,n.jsx)(s.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=o.VY.displayName;let y=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};y.displayName="SheetHeader";let g=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};g.displayName="SheetFooter";let v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",r),...a})});v.displayName=o.Dx.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...a})});x.displayName=o.dk.displayName},77625:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var n=r(57437),a=r(1657);function o(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-muted",t),...r})}},40695:function(e,t,r){"use strict";r.d(t,{U:function(){return d}});var n=r(57437);r(2265);var a=r(31047),o=r(72891),i=r(64848),s=r(575),l=r(34645);function d(){let{setTheme:e}=(0,i.F)();return(0,n.jsxs)(l.h_,{children:[(0,n.jsx)(l.$F,{asChild:!0,children:(0,n.jsxs)(s.z,{variant:"outline",size:"icon",children:[(0,n.jsx)(a.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(o.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Changer le th\xe8me"})]})}),(0,n.jsxs)(l.AW,{align:"end",children:[(0,n.jsx)(l.Xi,{onClick:()=>e("light"),children:"Clair"}),(0,n.jsx)(l.Xi,{onClick:()=>e("dark"),children:"Sombre"}),(0,n.jsx)(l.Xi,{onClick:()=>e("system"),children:"Syst\xe8me"})]})]})}},91806:function(e,t,r){"use strict";r.d(t,{s:function(){return d}});var n=r(57437),a=r(68855),o=r(29908),i=r(575),s=r(41328),l=r(65400);let d=()=>{let{logout:e}=(0,a.a)(),{setUser:t}=(0,s.L)(),{setParticipant:r}=(0,l.p)();return(0,n.jsxs)(i.z,{variant:"destructive",onClick:function(){t(void 0),r(void 0),e()},className:"w-full",children:[(0,n.jsx)(o.ApJ,{className:"mr-2 h-4 w-4"}),"Se d\xe9connecter"]})}},68855:function(e,t,r){"use strict";r.d(t,{a:function(){return x}});var n=r(2265),a=r(7908),o=r(13374),i=r(22020),s=r(65249);let l=(0,i.Ue)()((0,s.mW)((0,s.tJ)(e=>({token:null,refreshToken:null,userId:null,setToken:t=>{let r=t?JSON.parse(atob(t.split(".")[1])).sub:null;e({token:t,userId:r})},setRefreshToken:t=>{e({refreshToken:t})}}),{name:"token-storage"})));var d=r(47907),u=r(41328),c=r(65400),f=r(87456),m=r(94642),p=r(49079);let h="Titan",y=p.env.NEXT_PUBLIC_REDIRECT_URL||"https://myecl.fr/static.html",g="https://hyperion-3.dev.eclair.ec-lyon.fr",v=["API"],x=()=>{let[e,t]=(0,n.useState)(!1),{token:r,setToken:i,refreshToken:s,setRefreshToken:p,userId:x}=l(),{resetUser:b}=(0,u.L)(),{resetParticipant:w}=(0,c.p)(),{resetInviteToken:N}=(0,f.u)(),[j,k]=(0,n.useState)(!1),I=(0,d.useRouter)();async function C(e){let t=new TextEncoder().encode(e);return await crypto.subtle.digest("SHA-256",t).then(e=>btoa(Array.from(new Uint8Array(e)).map(e=>String.fromCharCode(e)).join("")).replace(/\+/g,"-").replace(/\//g,"_"))}async function R(e){let r=(0,o.stringify)(e);try{let e=await a.Z.post("".concat(g,"/auth/token"),r,{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});if(200!=e.status){t(!1);return}let n=e.data;t(!1),i(n.access_token),p(n.refresh_token)}catch(e){console.error(e),t(!1),U()}}async function _(){return(t(!0),console.log("refreshing tokens"),s)?(await R({grant_type:"refresh_token",client_id:h,refresh_token:s}),s):null}function T(){return!!r&&(r?JSON.parse(atob(r.split(".")[1])).exp:0)<Math.floor(Date.now()/1e3)-60}async function F(e){let r=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,a=crypto.getRandomValues(new Uint8Array(e)),o=0;o<e;o++)t+=r.charAt(Math.floor(a[o]/e*n));return t}(128),n="".concat(g,"/auth/authorize?client_id=").concat(h,"&response_type=code&scope=").concat(v.join(" "),"&redirect_uri=").concat(y,"&code_challenge=").concat(await C(r),"&code_challenge_method=S256");t(!0);let a=window.outerHeight/2+window.screenY-450,o=window.outerWidth/2+window.screenX-400;e=window.open(n,"Hyperion","height=".concat(900,",width=").concat(800,",top=").concat(a,",left=").concat(o,",scrollbars=yes"));let i=setInterval(()=>{try{e&&e.closed&&(clearInterval(i),t(!1))}catch(e){console.error(e)}},1e3);window.addEventListener("message",t=>{let n=t.data;null!=n&&null!==new URL(n).searchParams.get("code")&&function(t){let n=new URL(t).searchParams.get("code");e&&(e.close(),e=null),R({grant_type:"authorization_code",client_id:h,code:n,redirect_uri:y,code_verifier:r})}(n)})}function U(){i(null),p(null),k(!0),I.replace("/login"),b(),w(),N()}async function D(){return(console.log("getting token from storage"),e)?null:(t(!0),null!==r?T()?_():(i(r),t(!1)):(t(!1),I.replace("/login")),k(!0),r)}return(0,m.a)({queryKey:["getTokenFromStorage"],queryFn:()=>D(),retry:0,enabled:!j}),(0,m.a)({queryKey:["refreshTokens"],queryFn:()=>_(),retry:0,enabled:j&&T()}),{getTokenFromRequest:F,isLoading:e,token:r,isTokenQueried:j,logout:U,userId:x}}},41391:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});var n=r(425),a=r(41328),o=r(68855);let i=()=>{let{token:e}=(0,o.a)(),{user:t,setUser:r}=(0,a.L)(),{data:i,isLoading:s}=(0,n.Ayu)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:null!==e&&void 0===t,retry:0});return void 0!==i&&void 0===t&&null!==e&&r(i),{me:t,isLoading:s,isAdmin:()=>{var e,r;return null!==(r=null==t?void 0:null===(e=t.groups)||void 0===e?void 0:e.some(e=>"b378b102-4979-4186-8630-d28fe460ee08"===e.id))&&void 0!==r&&r}}}},82084:function(e,t,r){"use strict";r.d(t,{J7:function(){return i},Jg:function(){return s},LN:function(){return n},n9:function(){return a},xQ:function(){return o}});let n=[{value:"centrale",label:"Centrale"},{value:"otherschool",label:"Autre \xe9cole"},{value:"corporatepartner",label:"Partenaire entreprise"},{value:"other",label:"Autre"}],a=[{value:"discovery",label:"D\xe9couverte"},{value:"sports",label:"Sportif"},{value:"expert",label:"Expert"}],o=[{value:"centrale",label:"Centrale"},{value:"bellecour",label:"Bellecour"},{value:"anyway",label:"Peu importe"}],i=[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"}];function s(e,t){var r;let n=e.find(e=>e.value===t);return null!==(r=null==n?void 0:n.label)&&void 0!==r?r:"Non renseign\xe9"}},55348:function(e,t,r){"use strict";function n(e){return null==e?void 0:e.split(" : ")[0]}function a(e){let t=null==e?void 0:e.split(" : ");return(null==t?void 0:t.length)===2?t[1]:"Centrale"}r.d(t,{Q:function(){return a},l:function(){return n}})},87456:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var n=r(22020),a=r(65249);let o=(0,n.Ue)()((0,a.mW)((0,a.tJ)(e=>({InviteToken:void 0,setInviteToken:t=>{e({inviteToken:t})},resetInviteToken:()=>{e({inviteToken:void 0})}}),{name:"raid-invite-token-storage"})))},65400:function(e,t,r){"use strict";r.d(t,{p:function(){return o}});var n=r(22020),a=r(65249);let o=(0,n.Ue)()((0,a.mW)((0,a.tJ)(e=>({participant:void 0,setParticipant:t=>{e({participant:t})},resetParticipant:()=>{e({participant:void 0})}}),{name:"raid-participant-storage"})))},41328:function(e,t,r){"use strict";r.d(t,{L:function(){return o}});var n=r(22020),a=r(65249);let o=(0,n.Ue)()((0,a.mW)((0,a.tJ)(e=>({user:void 0,setUser:t=>{e({user:t})},resetUser:()=>{e({user:void 0})}}),{name:"raid-user-storage"})))}}]);