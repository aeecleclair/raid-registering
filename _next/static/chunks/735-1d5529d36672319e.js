(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{93414:function(){},70172:function(){},2001:function(){},33779:function(){},82258:function(){},3689:function(e,a,t){"use strict";t.d(a,{s:function(){return u}});var r=t(57437),l=t(90174),n=t(64701),s=t(66648),i=t(2183),c=t(90713),o=t(2265),d=t(80023);let u=e=>{let{userId:a,documentKey:t,id:u,file:m,width:f}=e,{data:x,setDocumentId:p,documentId:h}=(0,l.k)(),{setDocument:v}=(0,n.a)(),[j,g]=(0,o.useState)((null==x?void 0:x.size)===void 0);return(null==m?void 0:m.size)===void 0&&h!==u&&(p(u),g(!0)),(null==x?void 0:x.size)!==void 0&&j&&(v(a,t,u,x),g(!1)),(0,r.jsx)(r.Fragment,{children:(null==m?void 0:m.size)?(null==m?void 0:m.type)==="application/pdf"?(0,r.jsx)(d.x,{className:"h-[calc(100vh-180px)] flex mx-auto",children:(0,r.jsx)(c.X,{file:m,width:f})}):(0,r.jsx)(s.default,{src:URL.createObjectURL(m),alt:t,width:300,height:200,className:"rounded-lg w-auto max-h-[400px] m-auto"}):(0,r.jsx)(i.O,{className:"w-full h-80"})})}},15956:function(e,a,t){"use strict";t.d(a,{l:function(){return k}});var r=t(57437),l=t(44541),n=t(2183),s=t(54662),i=t(89733),c=t(3689),o=t(90174),d=t(76865);let u=e=>{let{file:a}=e;return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full w-full",children:[(0,r.jsx)(k,{label:"Allergies",value:a.allergy}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{label:"Asthme",value:a.asthma}),a.asthma&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{label:"Passage en soins intensifs",value:a.intensive_care_unit}),a.intensive_care_unit&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(k,{label:"Date de passage en soins intensifs",value:a.intensive_care_unit_when})})]})]}),(0,r.jsx)(k,{label:"Traitement en cours",value:a.ongoing_treatment}),(0,r.jsx)(k,{label:"Maladies",value:a.sicknesses}),(0,r.jsx)(k,{label:"Hospitalisation",value:a.hospitalization}),(0,r.jsx)(k,{label:"Op\xe9ration chirurgicale",value:a.surgical_operation}),(0,r.jsx)(k,{label:"Traumatisme",value:a.trauma}),(0,r.jsx)(k,{label:"Ant\xe9c\xe9dents familiaux",value:a.family}),(0,r.jsx)("div",{className:"my-4 items-center",children:(0,r.jsx)(d.S,{text:"Personne \xe0 contacter en cas d'urgence"})}),(0,r.jsx)(k,{label:"Pr\xe9nom",value:a.emergency_person_firstname}),(0,r.jsx)(k,{label:"Nom",value:a.emergency_person_name}),(0,r.jsx)(k,{label:"T\xe9l\xe9phone",value:a.emergency_person_phone,isPhone:!0})]})};var m=t(39589),f=t.n(m),x=t(22468),p=t(74697),h=t(40933),v=t(18189),j=t(2265),g=t(27071),b=t(37440);let N=g.zt,y=g.fC,w=g.xz,z=j.forwardRef((e,a)=>{let{className:t,sideOffset:l=4,...n}=e;return(0,r.jsx)(g.VY,{ref:a,sideOffset:l,className:(0,b.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})});z.displayName=g.VY.displayName;let k=e=>{let{label:a,value:t,participantId:d,placeholder:m,isPhone:j=!1}=e,{getDocument:g}=(0,o.k)(),b=e=>"XS"===e||"S"===e||"M"===e||"L"===e||"XL"===e,k=e=>"boolean"==typeof e,_=e=>null===e,L=e=>"string"==typeof(null==e?void 0:e.type),S=e=>"boolean"==typeof(null==e?void 0:e.asthma),C=e=>"string"==typeof e,P=e=>{switch(e){case"accepted":return(0,r.jsx)(x.Z,{});case"refused":return(0,r.jsx)(p.Z,{});case"pending":return(0,r.jsx)(h.Z,{});case"temporary":return(0,r.jsx)(v.Z,{})}},Y=e=>{switch(e){case"accepted":return"Le document a \xe9t\xe9 accept\xe9";case"refused":return"Le document a \xe9t\xe9 refus\xe9, veuillez le modifier et le renvoyer";case"pending":return"En attente de validation de la part de l'organisateur";case"temporary":return"Vous vous engagez \xe0 fournir le document dans les plus brefs d\xe9lais"}},Z=e=>{switch(e){case"accepted":return"Vous avez renseign\xe9 la personne \xe0 contacter en cas d'urgence";case"refused":return"Veuillez renseigner la personne \xe0 contact en cas d'urgence";case"pending":return"En attente de validation de la part de l'organisateur";case"temporary":return"Veuillez compl\xe9ter la personne \xe0 contacter en cas d'urgence"}};return(0,r.jsxs)("div",{className:"grid p-2 grid-cols-6 items-center w-full",children:[(0,r.jsx)("span",{className:"font-semibold text-left my-auto col-span-2",children:a}),(e=>{var t;switch(!0){case j&&C(e):return(0,r.jsx)("div",{className:"col-span-4",children:(0,r.jsx)(f(),{value:e,country:"fr",specialLabel:"",inputClass:"bg-transparent text-right w-full",disabled:!0})});case k(e):return(0,r.jsx)(l.X,{checked:e,className:"col-span-4 ml-auto disabled:opacity-100",disabled:!0});case b(e):return(0,r.jsx)("div",{className:" col-start-6 col-span-1",children:(0,r.jsx)("div",{className:"bg-zinc-200 px-2 rounded-md w-8 flex justify-center ml-auto dark:bg-zinc-700",children:(0,r.jsx)("span",{children:e})})});case L(e):let o=e.type,x=g(d,o);return(0,r.jsxs)("div",{className:"flex flex-row justify-end items-center h-6 col-span-4 w-5/6 ml-auto",children:[(0,r.jsxs)(s.Vq,{children:[(0,r.jsx)(s.hg,{asChild:!0,children:(0,r.jsx)(i.z,{variant:null,className:"ml-auto max-w-full bg-zinc-200",children:(0,r.jsx)("div",{className:"flex flex-row items-start max-w-full",children:(0,r.jsx)("span",{className:"text-gray-500 overflow-hidden",children:null!==(t=e.name)&&void 0!==t?t:"Aucun fichier s\xe9l\xe9ctionn\xe9"})})})}),(0,r.jsxs)(s.cZ,{className:"md:max-w-2xl top-1/2",children:[(0,r.jsx)(s.fK,{children:(0,r.jsx)(s.$N,{className:"text-red sm:text-lg",children:a})}),(0,r.jsx)("div",{className:"flex flex-col items-center gap-4",children:(0,r.jsx)("span",{className:"text-gray-500 overflow-hidden m-auto",children:(0,r.jsx)(c.s,{userId:d,documentKey:o,id:e.id,file:x})})})]})]}),(0,r.jsx)(N,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(w,{asChild:!0,className:"ml-4 h-4 w-4 shrink-0",children:P(e.validation)}),(0,r.jsx)(z,{children:(0,r.jsx)("div",{className:"flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]",children:Y(e.validation)})})]})})]});case S(e):return(0,r.jsxs)("div",{className:"flex flex-row w-full justify-end items-center h-6 col-span-4",children:[(0,r.jsxs)(s.Vq,{children:[(0,r.jsx)(s.hg,{asChild:!0,children:(0,r.jsx)(i.z,{variant:null,className:"col-span-4 px-4 bg-zinc-200 ",children:(0,r.jsx)("div",{className:"flex flex-row items-start w-full",children:(0,r.jsx)("span",{className:"text-gray-500 overflow-hidden",children:"Fiche s\xe9curit\xe9"})})})}),(0,r.jsxs)(s.cZ,{className:"md:max-w-2xl top-1/2",children:[(0,r.jsx)(s.fK,{children:(0,r.jsx)(s.$N,{className:"text-red sm:text-lg",children:a})}),(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)(u,{file:e})})]})]}),(0,r.jsx)(N,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(w,{asChild:!0,className:"ml-4 h-4 w-4 shrink-0",children:P(e.validation)}),(0,r.jsx)(z,{children:(0,r.jsx)("div",{className:"flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]",children:Z(e.validation)})})]})})]});case C(e):return(0,r.jsx)("span",{className:"col-span-4 text-right",children:e});case _(e):return(0,r.jsx)("span",{className:"".concat(null!=m?m:"text-zinc-400"," col-span-4 text-right"),children:null!=m?m:"Non renseign\xe9"});default:return(0,r.jsx)(n.O,{className:"w-24 h-6 col-span-4 text-right"})}})(t)]})}},90713:function(e,a,t){"use strict";t.d(a,{X:function(){return d}});var r=t(57437),l=t(2265),n=t(2183),s=t(98726),i=t(68330),c=t(74574);t(95152),s.default.GlobalWorkerOptions.workerSrc=new t.U(t(67550)).toString();let o={cMapUrl:"/cmaps/",standardFontDataUrl:"/standard_fonts/"},d=e=>{var a,t;let{file:s,width:d}=e,[u,m]=(0,l.useState)();return null===(a=self)||void 0===a||a.innerWidth,(0,r.jsx)(i.Z,{file:s,onLoadSuccess:function(e){let{numPages:a}=e;m(a)},options:o,loading:(0,r.jsx)(n.O,{className:"w-full h-80"}),children:Array.from(Array(u),(e,a)=>(0,r.jsx)(c.Z,{pageNumber:a+1,renderTextLayer:!1,className:"max-w-full aspect-auto",width:d},"page_".concat(a+1)))})}},29061:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var r=t(57437),l=t(13304),n=t(54662),s=t(89733),i=t(91833);let c=e=>{let{isOpened:a,setIsOpened:t,isLoading:c,title:o,description:d,validateLabel:u,callback:m,width:f="w-[100px]",customButton:x}=e;return(0,r.jsx)(n.Vq,{open:a,onOpenChange:t,children:(0,r.jsxs)(n.cZ,{className:"sm:max-w-[600px]",onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(n.fK,{children:(0,r.jsx)(n.$N,{children:o})}),(0,r.jsx)(l.Be,{children:d}),(0,r.jsxs)("div",{className:"flex justify-end mt-2 space-x-4",children:[(0,r.jsx)(s.z,{variant:"outline",onClick:function(e){e.stopPropagation(),t(!1)},disabled:c,className:f,children:"Annuler"}),null!=x?x:(0,r.jsx)(i.f,{isLoading:c,onClick:function(e){e.stopPropagation(),m&&m()},label:u,className:f})]})]})})}},44541:function(e,a,t){"use strict";t.d(a,{X:function(){return c}});var r=t(57437),l=t(2265),n=t(69324),s=t(22468),i=t(37440);let c=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.fC,{ref:a,className:(0,i.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...l,children:(0,r.jsx)(n.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(s.Z,{className:"h-4 w-4"})})})});c.displayName=n.fC.displayName},34063:function(e,a,t){"use strict";t.d(a,{di:function(){return x},e8:function(){return d},fu:function(){return m},mY:function(){return c},rb:function(){return u},sZ:function(){return o},zz:function(){return f}});var r=t(57437),l=t(2265),n=t(34465),s=t(54817),i=t(37440);t(54662);let c=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.mY,{ref:a,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...l})});c.displayName=n.mY.displayName;let o=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,r.jsx)(s.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,r.jsx)(n.mY.Input,{ref:a,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...l})]})});o.displayName=n.mY.Input.displayName;let d=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.mY.List,{ref:a,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...l})});d.displayName=n.mY.List.displayName;let u=l.forwardRef((e,a)=>(0,r.jsx)(n.mY.Empty,{ref:a,className:"py-6 text-center text-sm",...e}));u.displayName=n.mY.Empty.displayName;let m=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.mY.Group,{ref:a,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...l})});m.displayName=n.mY.Group.displayName;let f=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.mY.Separator,{ref:a,className:(0,i.cn)("-mx-1 h-px bg-border",t),...l})});f.displayName=n.mY.Separator.displayName;let x=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(n.mY.Item,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l})});x.displayName=n.mY.Item.displayName},80023:function(e,a,t){"use strict";t.d(a,{x:function(){return i}});var r=t(57437),l=t(2265),n=t(26770),s=t(37440);let i=l.forwardRef((e,a)=>{let{className:t,children:l,...i}=e;return(0,r.jsxs)(n.fC,{ref:a,className:(0,s.cn)("relative overflow-hidden",t),...i,children:[(0,r.jsx)(n.l_,{className:"h-full w-full rounded-[inherit]",children:l}),(0,r.jsx)(c,{}),(0,r.jsx)(n.Ns,{})]})});i.displayName=n.fC.displayName;let c=l.forwardRef((e,a)=>{let{className:t,orientation:l="vertical",...i}=e;return(0,r.jsx)(n.gb,{ref:a,orientation:l,className:(0,s.cn)("flex touch-none select-none transition-colors","vertical"===l&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===l&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...i,children:(0,r.jsx)(n.q4,{className:"relative flex-1 rounded-full bg-border"})})});c.displayName=n.gb.displayName},29973:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var r=t(57437),l=t(2265),n=t(48484),s=t(37440);let i=l.forwardRef((e,a)=>{let{className:t,orientation:l="horizontal",decorative:i=!0,...c}=e;return(0,r.jsx)(n.f,{ref:a,decorative:i,orientation:l,className:(0,s.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",t),...c})});i.displayName=n.f.displayName},76865:function(e,a,t){"use strict";t.d(a,{S:function(){return l}});var r=t(57437);t(2265);let l=e=>{let{text:a}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,r.jsx)("span",{className:"w-full border-t"})}),(0,r.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,r.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:a})})]})};l.displayName="TextSeparator"},90174:function(e,a,t){"use strict";t.d(a,{k:function(){return d}});var r=t(93191),l=t(84980),n=t(42126),s=t(64701),i=t(2265),c=t(40133),o=t(78068);let d=()=>{let e=(0,r.NL)(),{token:a,userId:t}=(0,c.a)(),{documents:d,setDocument:u}=(0,s.a)(),[m,f]=(0,i.useState)(""),{mutate:x}=(0,l.Zxv)(),{data:p,refetch:h,isPending:v}=(0,l.lN0)({headers:{Authorization:"Bearer ".concat(a)},pathParams:{documentId:m}},{enabled:""!==m&&void 0!==m}),{mutate:j,isPending:g}=(0,l.vT9)();return{assignDocument:(t,r,l)=>{x({headers:{Authorization:"Bearer ".concat(a)},pathParams:{participantId:r},body:t},{onSuccess:()=>{e.invalidateQueries({predicate:e=>"getTeamByParticipantId"===e.queryHash}),l()}})},uploadDocument:(t,r)=>{let l=new FormData;l.append("file",t),n.Z.post("".concat("https://hyperion-3.dev.eclair.ec-lyon.fr","/raid/document"),l,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a)}}).then(a=>{if(a.status>300){console.error(a.data),(0,o.Am)({title:"Erreur lors de l'ajout du document",description:"Une erreur est survenue, veuillez r\xe9essayer plus tard",variant:"destructive"});return}e.invalidateQueries({predicate:e=>"getDocument"===e.queryHash}),r(a.data.id)})},getDocument:(e,a)=>{var t;if(""!==a&&void 0!==a&&void 0!==d[e])return null===(t=d[e][a])||void 0===t?void 0:t.file},data:p,refetch:h,isLoading:v,setDocumentId:f,documentId:m,setDocumentValidation:(e,t,r)=>{j({headers:{Authorization:"Bearer ".concat(a)},pathParams:{documentId:e},queryParams:{validation:t}},{onSettled:()=>{r()}})},isValidationLoading:g}}},63967:function(e,a,t){"use strict";t.d(a,{FS:function(){return i},J1:function(){return c},Jg:function(){return o},LN:function(){return r},Tx:function(){return s},n9:function(){return l},xQ:function(){return n}});let r=[{value:"centrale",label:"Centrale Lyon"},{value:"otherschool",label:"Autre \xe9cole"},{value:"corporatepartner",label:"Partenaire entreprise"},{value:"other",label:"Autre"}],l=[{value:"discovery",label:"D\xe9couverte"},{value:"sports",label:"Sportif"},{value:"expert",label:"Expert"}],n=[{value:"centrale",label:"Centrale Lyon"},{value:"bellecour",label:"Bellecour"},{value:"anyway",label:"Peu importe"}],s=[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"},{value:"no",label:"Pas de Tshirt"}],i=[{value:"xs",label:"XS (< 1m55)"},{value:"s",label:"S (1m55 - 1m165)"},{value:"m",label:"M (1m65 - 1m80)"},{value:"l",label:"L (1m80 - 1m90)"},{value:"xl",label:"XL (> 1m90)"}],c=[{value:"discovery",label:"Accessible \xe0 tous"},{value:"sports",label:"Demandant de la pr\xe9paration"},{value:"expert",label:"Le plus exigeant"},{value:void 0,label:"S\xe9lectionner un parcours"}];function o(e,a){var t;let r=e.find(e=>e.value===a);return null!==(t=null==r?void 0:r.label)&&void 0!==t?t:"Non renseign\xe9"}},77504:function(e,a,t){"use strict";function r(e){return null==e?void 0:e.split(" : ")[0]}function l(e){let a=null==e?void 0:e.split(" : ");return(null==a?void 0:a.length)===2?a[1]:"Centrale"}t.d(a,{Q:function(){return l},l:function(){return r}})},64701:function(e,a,t){"use strict";t.d(a,{a:function(){return n}});var r=t(39099),l=t(89291);let n=(0,r.Ue)()((0,l.mW)((0,l.tJ)(e=>({documents:{},setDocument:(a,t,r,l)=>{e(e=>({documents:{...e.documents,[a]:{...e.documents[a],[t]:{id:r,file:l}}}}))}}),{name:"raid-documents-storage"})))}}]);