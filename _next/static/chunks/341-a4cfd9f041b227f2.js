(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{93414:function(){},70172:function(){},2001:function(){},33779:function(){},82258:function(){},3689:function(e,t,a){"use strict";a.d(t,{s:function(){return d}});var s=a(57437),n=a(90174),r=a(64701),l=a(66648),i=a(2183),o=a(90713),c=a(2265);let d=e=>{let{userId:t,documentKey:a,id:d,file:u}=e,{data:m,setDocumentId:f,documentId:p}=(0,n.k)(),{setDocument:x}=(0,r.a)(),[h,v]=(0,c.useState)((null==m?void 0:m.size)===void 0);return(null==u?void 0:u.size)===void 0&&p!==d&&(f(d),v(!0)),(null==m?void 0:m.size)!==void 0&&h&&(x(t,a,d,m),v(!1)),(0,s.jsx)(s.Fragment,{children:(null==u?void 0:u.size)?(null==u?void 0:u.type)==="application/pdf"?(0,s.jsx)("div",{className:"h-[600px]",children:(0,s.jsx)(o.X,{file:u})}):(0,s.jsx)(l.default,{src:URL.createObjectURL(u),alt:a,width:300,height:200,className:"rounded-lg w-auto max-h-[400px] m-auto"}):(0,s.jsx)(i.O,{className:"w-full h-80"})})}},15956:function(e,t,a){"use strict";a.d(t,{l:function(){return _}});var s=a(57437),n=a(44541),r=a(2183),l=a(54662),i=a(89733),o=a(3689),c=a(90174),d=a(76865);let u=e=>{let{file:t}=e;return(0,s.jsxs)("div",{className:"flex flex-col justify-between h-full w-full",children:[(0,s.jsx)(_,{label:"Allergies",value:t.allergy}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{label:"Asthme",value:t.asthma}),t.asthma&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{label:"Passage en soins intensifs",value:t.intensive_care_unit}),t.intensive_care_unit&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_,{label:"Date de passage en soins intensifs",value:t.intensive_care_unit_when})})]})]}),(0,s.jsx)(_,{label:"Traitement en cours",value:t.ongoing_treatment}),(0,s.jsx)(_,{label:"Maladies",value:t.sicknesses}),(0,s.jsx)(_,{label:"Hospitalisation",value:t.hospitalization}),(0,s.jsx)(_,{label:"Op\xe9ration chirurgicale",value:t.surgical_operation}),(0,s.jsx)(_,{label:"Traumatisme",value:t.trauma}),(0,s.jsx)(_,{label:"Ant\xe9c\xe9dents familiaux",value:t.family}),(0,s.jsx)("div",{className:"my-4 items-center",children:(0,s.jsx)(d.S,{text:"Personne \xe0 contacter en cas d'urgence"})}),(0,s.jsx)(_,{label:"Pr\xe9nom",value:t.emergency_person_firstname}),(0,s.jsx)(_,{label:"Nom",value:t.emergency_person_name}),(0,s.jsx)(_,{label:"T\xe9l\xe9phone",value:t.emergency_person_phone,isPhone:!0})]})};var m=a(39589),f=a.n(m),p=a(22468),x=a(74697),h=a(40933),v=a(18189),g=a(2265),j=a(27071),N=a(37440);let y=j.zt,b=j.fC,w=j.xz,S=g.forwardRef((e,t)=>{let{className:a,sideOffset:n=4,...r}=e;return(0,s.jsx)(j.VY,{ref:t,sideOffset:n,className:(0,N.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})});S.displayName=j.VY.displayName;let _=e=>{let{label:t,value:a,participantId:d,placeholder:m,isPhone:g=!1}=e,{getDocument:j}=(0,c.k)(),N=e=>"XS"===e||"S"===e||"M"===e||"L"===e||"XL"===e,_=e=>"boolean"==typeof e,k=e=>null===e,z=e=>"string"==typeof(null==e?void 0:e.type),T=e=>"boolean"==typeof(null==e?void 0:e.asthma),A=e=>"string"==typeof e,D=e=>{switch(e){case"accepted":return(0,s.jsx)(p.Z,{});case"refused":return(0,s.jsx)(x.Z,{});case"pending":return(0,s.jsx)(h.Z,{});case"temporary":return(0,s.jsx)(v.Z,{})}},C=e=>{switch(e){case"accepted":return"Le document a \xe9t\xe9 accept\xe9";case"refused":return"Le document a \xe9t\xe9 refus\xe9, veuillez le modifier et le renvoyer";case"pending":return"En attente de validation de la part de l'organisateur";case"temporary":return"Vous vous engagez \xe0 fournir le document dans les plus brefs d\xe9lais"}},L=e=>{switch(e){case"accepted":return"Vous avez renseign\xe9 la personne \xe0 contacter en cas d'urgence";case"refused":return"Veuillez renseigner la personne \xe0 contact en cas d'urgence";case"pending":return"En attente de validation de la part de l'organisateur";case"temporary":return"Veuillez compl\xe9ter la personne \xe0 contacter en cas d'urgence"}};return(0,s.jsxs)("div",{className:"grid p-2 grid-cols-6 items-center w-full",children:[(0,s.jsx)("span",{className:"font-semibold text-left my-auto col-span-2",children:t}),(e=>{var a;switch(!0){case g&&A(e):return(0,s.jsx)("div",{className:"col-span-4",children:(0,s.jsx)(f(),{value:e,country:"fr",specialLabel:"",inputClass:"bg-transparent text-right w-full",disabled:!0})});case _(e):return(0,s.jsx)(n.X,{checked:e,className:"col-span-4 ml-auto disabled:opacity-100",disabled:!0});case N(e):return(0,s.jsx)("div",{className:" col-start-6 col-span-1",children:(0,s.jsx)("div",{className:"bg-zinc-200 px-2 rounded-md w-8 flex justify-center ml-auto dark:bg-zinc-700",children:(0,s.jsx)("span",{children:e})})});case z(e):let c=e.type,p=j(d,c);return(0,s.jsxs)("div",{className:"flex flex-row justify-end items-center h-6 col-span-4 w-5/6 ml-auto",children:[(0,s.jsxs)(l.Vq,{children:[(0,s.jsx)(l.hg,{asChild:!0,children:(0,s.jsx)(i.z,{variant:null,className:"ml-auto max-w-full bg-zinc-200",children:(0,s.jsx)("div",{className:"flex flex-row items-start max-w-full",children:(0,s.jsx)("span",{className:"text-gray-500 overflow-hidden",children:null!==(a=e.name)&&void 0!==a?a:"Aucun fichier s\xe9l\xe9ctionn\xe9"})})})}),(0,s.jsxs)(l.cZ,{className:"md:max-w-2xl top-1/2",children:[(0,s.jsx)(l.fK,{children:(0,s.jsx)(l.$N,{className:"text-red sm:text-lg",children:t})}),(0,s.jsx)("div",{className:"flex flex-col items-center gap-4",children:(0,s.jsx)("span",{className:"text-gray-500 overflow-hidden m-auto",children:(0,s.jsx)(o.s,{userId:d,documentKey:c,id:e.id,file:p})})})]})]}),(0,s.jsx)(y,{children:(0,s.jsxs)(b,{children:[(0,s.jsx)(w,{asChild:!0,className:"ml-4 h-4 w-4 shrink-0",children:D(e.validation)}),(0,s.jsx)(S,{children:(0,s.jsx)("div",{className:"flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]",children:C(e.validation)})})]})})]});case T(e):return(0,s.jsxs)("div",{className:"flex flex-row w-full justify-end items-center h-6 col-span-4",children:[(0,s.jsxs)(l.Vq,{children:[(0,s.jsx)(l.hg,{asChild:!0,children:(0,s.jsx)(i.z,{variant:null,className:"col-span-4 px-4 bg-zinc-200 ",children:(0,s.jsx)("div",{className:"flex flex-row items-start w-full",children:(0,s.jsx)("span",{className:"text-gray-500 overflow-hidden",children:"Fiche s\xe9curit\xe9"})})})}),(0,s.jsxs)(l.cZ,{className:"md:max-w-2xl top-1/2",children:[(0,s.jsx)(l.fK,{children:(0,s.jsx)(l.$N,{className:"text-red sm:text-lg",children:t})}),(0,s.jsx)("div",{className:"flex flex-col items-center",children:(0,s.jsx)(u,{file:e})})]})]}),(0,s.jsx)(y,{children:(0,s.jsxs)(b,{children:[(0,s.jsx)(w,{asChild:!0,className:"ml-4 h-4 w-4 shrink-0",children:D(e.validation)}),(0,s.jsx)(S,{children:(0,s.jsx)("div",{className:"flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]",children:L(e.validation)})})]})})]});case A(e):return(0,s.jsx)("span",{className:"col-span-4 text-right",children:e});case k(e):return(0,s.jsx)("span",{className:"".concat(null!=m?m:"text-zinc-400"," col-span-4 text-right"),children:null!=m?m:"Non renseign\xe9"});default:return(0,s.jsx)(r.O,{className:"w-24 h-6 col-span-4 text-right"})}})(a)]})}},90713:function(e,t,a){"use strict";a.d(t,{X:function(){return d}});var s=a(57437),n=a(2265),r=a(2183),l=a(98726),i=a(68330),o=a(74574);a(95152),l.default.GlobalWorkerOptions.workerSrc=new a.U(a(67550)).toString();let c={cMapUrl:"/cmaps/",standardFontDataUrl:"/standard_fonts/"},d=e=>{let{file:t}=e,[a,l]=(0,n.useState)();return(0,s.jsx)(i.Z,{file:t,onLoadSuccess:function(e){let{numPages:t}=e;l(t)},options:c,loading:(0,s.jsx)(r.O,{className:"w-full h-80"}),className:"w-full aspect-auto overflow-y-scroll",children:Array.from(Array(a),(e,t)=>(0,s.jsx)(o.Z,{pageNumber:t+1,renderTextLayer:!1},"page_".concat(t+1)))})}},29061:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(57437),n=a(13304),r=a(54662),l=a(89733),i=a(91833);let o=e=>{let{isOpened:t,setIsOpened:a,isLoading:o,title:c,description:d,validateLabel:u,callback:m,width:f="w-[100px]"}=e;return(0,s.jsx)(r.Vq,{open:t,onOpenChange:a,children:(0,s.jsxs)(r.cZ,{className:"sm:max-w-[600px]",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(r.fK,{children:(0,s.jsx)(r.$N,{children:c})}),(0,s.jsx)(n.Be,{children:d}),(0,s.jsxs)("div",{className:"flex justify-end mt-2 space-x-4",children:[(0,s.jsx)(l.z,{variant:"outline",onClick:function(e){e.stopPropagation(),a(!1)},disabled:o,className:f,children:"Annuler"}),(0,s.jsx)(i.f,{isLoading:o,onClick:function(e){e.stopPropagation(),m()},label:u,className:f})]})]})})}},35265:function(e,t,a){"use strict";a.d(t,{Qd:function(){return c},UQ:function(){return o},o4:function(){return d},vF:function(){return u}});var s=a(57437),n=a(2265),r=a(64756),l=a(42421),i=a(37440);let o=r.fC,c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.ck,{ref:t,className:(0,i.cn)("border-b",a),...n})});c.displayName="AccordionItem";let d=n.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,s.jsx)(r.h4,{className:"flex",children:(0,s.jsxs)(r.xz,{ref:t,className:(0,i.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...o,children:[n,(0,s.jsx)(l.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=r.xz.displayName;let u=n.forwardRef((e,t)=>{let{className:a,children:n,...l}=e;return(0,s.jsx)(r.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,s.jsx)("div",{className:(0,i.cn)("pb-4 pt-0",a),children:n})})});u.displayName=r.VY.displayName},44541:function(e,t,a){"use strict";a.d(t,{X:function(){return o}});var s=a(57437),n=a(2265),r=a(69324),l=a(22468),i=a(37440);let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.fC,{ref:t,className:(0,i.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...n,children:(0,s.jsx)(r.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})})});o.displayName=r.fC.displayName},34063:function(e,t,a){"use strict";a.d(t,{di:function(){return p},e8:function(){return d},fu:function(){return m},mY:function(){return o},rb:function(){return u},sZ:function(){return c},zz:function(){return f}});var s=a(57437),n=a(2265),r=a(34465),l=a(54817),i=a(37440);a(54662);let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",a),...n})});o.displayName=r.mY.displayName;let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,s.jsx)(l.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,s.jsx)(r.mY.Input,{ref:t,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",a),...n})]})});c.displayName=r.mY.Input.displayName;let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",a),...n})});d.displayName=r.mY.List.displayName;let u=n.forwardRef((e,t)=>(0,s.jsx)(r.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=r.mY.Empty.displayName;let m=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",a),...n})});m.displayName=r.mY.Group.displayName;let f=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",a),...n})});f.displayName=r.mY.Separator.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n})});p.displayName=r.mY.Item.displayName},54662:function(e,t,a){"use strict";a.d(t,{$N:function(){return x},Be:function(){return h},Vq:function(){return o},cN:function(){return p},cZ:function(){return m},fK:function(){return f},hg:function(){return c}});var s=a(57437),n=a(2265),r=a(13304),l=a(74697),i=a(37440);let o=r.fC,c=r.xz,d=r.h_;r.x8;let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});u.displayName=r.aV.displayName;let m=n.forwardRef((e,t)=>{let{className:a,children:n,hideClose:o,...c}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...c,children:[n,!o&&(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName;let f=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};f.displayName="DialogHeader";let p=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};p.displayName="DialogFooter";let x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})});x.displayName=r.Dx.displayName;let h=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...n})});h.displayName=r.dk.displayName},76865:function(e,t,a){"use strict";a.d(t,{S:function(){return n}});var s=a(57437);a(2265);let n=e=>{let{text:t}=e;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,s.jsx)("span",{className:"w-full border-t"})}),(0,s.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,s.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:t})})]})};n.displayName="TextSeparator"},78068:function(e,t,a){"use strict";a.d(t,{Am:function(){return u},pm:function(){return m}});var s=a(2265);let n=0,r=new Map,l=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?l(a):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function d(e){c=i(c,e),o.forEach(e=>{e(c)})}function u(e){let{...t}=e,a=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>d({type:"DISMISS_TOAST",toastId:a});return d({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||s()}}}),{id:a,dismiss:s,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function m(){let[e,t]=s.useState(c);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},90174:function(e,t,a){"use strict";a.d(t,{k:function(){return c}});var s=a(93191),n=a(84980),r=a(42126),l=a(64701),i=a(2265),o=a(40133);let c=()=>{let e=(0,s.NL)(),{token:t,userId:a}=(0,o.a)(),{documents:c,setDocument:d}=(0,l.a)(),[u,m]=(0,i.useState)(""),{mutate:f}=(0,n.Zxv)(),{data:p,refetch:x,isPending:h}=(0,n.lN0)({headers:{Authorization:"Bearer ".concat(t)},pathParams:{documentId:u}},{enabled:""!==u&&void 0!==u}),{mutate:v,isPending:g}=(0,n.vT9)();return{assignDocument:(s,n)=>{f({headers:{Authorization:"Bearer ".concat(t)},pathParams:{participantId:a},body:s},{onSuccess:()=>{e.invalidateQueries({predicate:e=>"getTeamByParticipantId"===e.queryHash}),n()}})},uploadDocument:(a,s,n,l,i)=>{let o=new FormData;o.append("image",a),r.Z.post("".concat("https://hyperion-3.dev.eclair.ec-lyon.fr","/raid/document/").concat(n),o,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}}).then(()=>{e.invalidateQueries({predicate:e=>"getDocument"===e.queryHash}),d(l,s,n,a),i()})},getDocument:(e,t)=>{var a;if(""!==t&&void 0!==t&&void 0!==c[e])return null===(a=c[e][t])||void 0===a?void 0:a.file},data:p,refetch:x,isLoading:h,setDocumentId:m,documentId:u,setDocumentValidation:(e,a,s)=>{v({headers:{Authorization:"Bearer ".concat(t)},pathParams:{documentId:e},queryParams:{validation:a}},{onSettled:()=>{s()}})},isValidationLoading:g}}},63967:function(e,t,a){"use strict";a.d(t,{FS:function(){return i},J1:function(){return o},Jg:function(){return c},LN:function(){return s},Tx:function(){return l},n9:function(){return n},xQ:function(){return r}});let s=[{value:"centrale",label:"Centrale Lyon"},{value:"otherschool",label:"Autre \xe9cole"},{value:"corporatepartner",label:"Partenaire entreprise"},{value:"other",label:"Autre"}],n=[{value:"discovery",label:"D\xe9couverte"},{value:"sports",label:"Sportif"},{value:"expert",label:"Expert"}],r=[{value:"centrale",label:"Centrale Lyon"},{value:"bellecour",label:"Bellecour"},{value:"anyway",label:"Peu importe"}],l=[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"},{value:"no",label:"Pas de Tshirt"}],i=[{value:"xs",label:"XS (< 1m55)"},{value:"s",label:"S (1m55 - 1m165)"},{value:"m",label:"M (1m65 - 1m80)"},{value:"l",label:"L (1m80 - 1m90)"},{value:"xl",label:"XL (> 1m90)"}],o=[{value:"discovery",label:"Accessible \xe0 tous"},{value:"sports",label:"Demandant de la pr\xe9paration"},{value:"expert",label:"Le plus exigeant"},{value:void 0,label:"S\xe9lectionner un parcours"}];function c(e,t){var a;let s=e.find(e=>e.value===t);return null!==(a=null==s?void 0:s.label)&&void 0!==a?a:"Non renseign\xe9"}},77504:function(e,t,a){"use strict";function s(e){return null==e?void 0:e.split(" : ")[0]}function n(e){let t=null==e?void 0:e.split(" : ");return(null==t?void 0:t.length)===2?t[1]:"Centrale"}a.d(t,{Q:function(){return n},l:function(){return s}})},64701:function(e,t,a){"use strict";a.d(t,{a:function(){return r}});var s=a(39099),n=a(89291);let r=(0,s.Ue)()((0,n.mW)((0,n.tJ)(e=>({documents:{},setDocument:(t,a,s,n)=>{e(e=>({documents:{...e.documents,[t]:{...e.documents[t],[a]:{id:s,file:n}}}}))}}),{name:"raid-documents-storage"})))}}]);