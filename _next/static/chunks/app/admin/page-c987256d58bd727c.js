(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{18916:function(e,t,a){Promise.resolve().then(a.bind(a,12471))},12471:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var n=a(57437),s=a(26477),r=a(85115),l=a(87138),i=a(30338),d=a(89733),o=a(48185),c=a(47304),u=a(2183),f=a(16463),m=a(26142);let x=e=>{var t;let{teams:a,isLoading:s}=e,r=(0,f.useRouter)();return(0,n.jsxs)(o.Zb,{className:"xl:col-span-2",children:[(0,n.jsxs)(o.Ol,{className:"flex flex-row items-center",children:[(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsx)(o.ll,{children:"Equipes"}),(0,n.jsxs)(o.SZ,{children:["Aper\xe7u des ",null!==(t=null==a?void 0:a.slice(0,5).length)&&void 0!==t?t:0," \xe9quipes les plus proches de la validation de leur dossier"]})]}),(0,n.jsx)(d.z,{asChild:!0,size:"sm",className:"ml-auto gap-1",children:(0,n.jsxs)(l.default,{href:"/admin/teams",children:["Voir tout",(0,n.jsx)(i.Z,{className:"h-4 w-4"})]})})]}),(0,n.jsx)(o.aY,{children:(0,n.jsxs)(c.iA,{children:[(0,n.jsx)(c.xD,{children:(0,n.jsxs)(c.SC,{children:[(0,n.jsx)(c.ss,{children:"Nom"}),(0,n.jsx)(c.ss,{className:"max-md:hidden",children:"Capitaine"}),(0,n.jsx)(c.ss,{className:"max-md:hidden",children:"Co\xe9quipier"}),(0,n.jsx)(c.ss,{className:"max-md:hidden",children:"Documents"}),(0,n.jsx)(c.ss,{className:"text-right",children:"Inscription"})]})}),(0,n.jsxs)(c.RM,{children:[s&&(0,n.jsx)(n.Fragment,{children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,n.jsxs)(c.SC,{children:[(0,n.jsx)(c.pj,{className:"h-[78px]",children:(0,n.jsx)(u.O,{className:"h-6 w-24"})}),[void 0,void 0,void 0].map((e,t)=>(0,n.jsx)(c.pj,{className:"max-md:hidden",children:(0,n.jsx)(u.O,{className:"h-6 w-24"})},t)),(0,n.jsx)(c.pj,{children:(0,n.jsx)(u.O,{className:"h-6 w-8 ml-auto"})})]},t))}),a&&(0,n.jsx)(n.Fragment,{children:a.toSorted((e,t)=>t.validation_progress%100-e.validation_progress%100).slice(0,5).map(e=>{var t,a,s,l,i,d;let o=e.captain.number_of_validated_document+(null!==(i=null===(t=e.second)||void 0===t?void 0:t.number_of_validated_document)&&void 0!==i?i:0),u=e.captain.number_of_document+(null!==(d=null===(a=e.second)||void 0===a?void 0:a.number_of_document)&&void 0!==d?d:0);return(0,n.jsxs)(c.SC,{onClick:()=>{var t;return t=e.id,void r.push("/admin/teams?teamId="+t)},children:[(0,n.jsx)(c.pj,{className:"h-[78px]",children:e.name}),(0,n.jsx)(c.pj,{className:"max-md:hidden",children:(0,n.jsxs)("div",{className:"font-medium",children:[null===(s=e.captain)||void 0===s?void 0:s.firstname," ",null===(l=e.captain)||void 0===l?void 0:l.name]})}),(0,n.jsx)(c.pj,{className:"max-md:hidden",children:e.second?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"font-medium",children:[e.second.firstname," ",e.second.name]})}):(0,n.jsx)("div",{className:"font-medium text-muted-foreground",children:"Non renseign\xe9"})}),(0,n.jsx)(c.pj,{className:"max-md:hidden",children:(0,n.jsx)(m.r,{progress:o,total:u})}),(0,n.jsxs)(c.pj,{className:"text-right",children:[null==e?void 0:e.validation_progress.toFixed(0),"%"]})]},e.id)})})]})]})})]})};var p=a(35231),h=a(83799),v=a(14725),g=a(68295),j=a(79512);let b={cssVars:{light:{primary:"240 5.9% 10%"},dark:{primary:"0 0% 98%"}}},N=e=>{let{data:t}=e,{theme:a}=(0,j.F)();return(0,n.jsxs)("div",{children:[(0,n.jsx)(p.h,{className:"min-h-40 md:min-h-80",children:(0,n.jsx)(h.v,{data:t,children:(0,n.jsx)(v.$,{dataKey:"value",radius:[10,10,0,0],style:{fill:"hsl(".concat(null==b?void 0:b.cssVars["dark"===a?"dark":"light"].primary,")"),opacity:1},children:t.map((e,t)=>(0,n.jsx)(g.b,{},"cell-".concat(t+1)))})})}),(0,n.jsx)("div",{className:"flex flex-row mt-1",children:t.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("span",{className:"text-center font-semibold",children:e.label}),(0,n.jsx)("span",{className:"text-sm text-muted-foreground w-full text-center",children:e.value})]},"cell-".concat(t+1)))})]})};var y=a(86864),w=a(2265),k=a(9646),_=a(37440);let S=w.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(k.fC,{className:(0,_.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...s,ref:t,children:(0,n.jsx)(k.bU,{className:(0,_.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});S.displayName=k.fC.displayName;var C=a(77504);let R=e=>{let{teams:t,isLoading:a}=e,[s,r]=(0,w.useState)(!1),{difficultyData:l,meetingPlaceData:i,bikeSizeData:d,tShirtSizeData:c,situationData:u}=function(e,t){var a,n,s,r,l;let i=null==t?void 0:t.filter(t=>100===t.validation_progress||e),d=(a=[{value:0,label:"D\xe9couverte"},{value:0,label:"Sportif"},{value:0,label:"Expert"}],e&&a.push({value:0,label:"Non renseign\xe9"}),i&&i.forEach(t=>{"discovery"===t.difficulty?a[0].value++:"sports"===t.difficulty?a[1].value++:"expert"===t.difficulty?a[2].value++:e&&a[3].value++}),a),o=(n=[{value:0,label:"Centrale Lyon"},{value:0,label:"Bellecour"},{value:0,label:"Peu importe"}],e&&n.push({value:0,label:"Non renseign\xe9"}),i&&i.forEach(t=>{switch(t.meeting_place){case"centrale":n[0].value++;break;case"bellecour":n[1].value++;break;case"anyway":n[2].value++;break;default:e&&n[3].value++}}),n);return{difficultyData:d,meetingPlaceData:o,bikeSizeData:(s=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"}],e&&s.push({value:0,label:"N/A"}),i&&i.map(e=>[e.captain,e.second]).flat(1).forEach(t=>{if(t)switch(t.bike_size){case"XS":s[0].value++;break;case"S":s[1].value++;break;case"M":s[2].value++;break;case"L":s[3].value++;break;case"XL":s[4].value++;break;default:e&&s[5].value++}}),s),tShirtSizeData:(r=[{value:0,label:"XS"},{value:0,label:"S"},{value:0,label:"M"},{value:0,label:"L"},{value:0,label:"XL"},{value:0,label:"Non"}],i&&i.map(e=>[e.captain,e.second]).flat(1).forEach(e=>{if(e)switch(e.t_shirt_size){case"XS":r[0].value++;break;case"S":r[1].value++;break;case"M":r[2].value++;break;case"L":r[3].value++;break;case"XL":r[4].value++;break;default:r[5].value++}}),r),situationData:(l=[{value:0,label:"Centrale Lyon"},{value:0,label:"Autre \xe9cole"},{value:0,label:"Partenaire"},{value:0,label:"Autre"}],e&&l.push({value:0,label:"N/A"}),i&&i.map(e=>[e.captain,e.second]).flat(1).forEach(t=>{if(t){var a;switch((0,C.l)(null!==(a=t.situation)&&void 0!==a?a:void 0)){case"centrale":l[0].value++;break;case"otherschool":l[1].value++;break;case"corporatepartner":l[2].value++;break;case"other":l[3].value++;break;default:e&&l[4].value++}}}),l)}}(s,t);return(0,n.jsxs)(o.Zb,{children:[(0,n.jsxs)(o.Ol,{className:"flex flex-col items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-between w-full",children:[(0,n.jsx)(o.ll,{children:"Statistiques"}),(0,n.jsx)(S,{checked:s,onCheckedChange:r})]}),(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsx)(o.SZ,{children:s?"Toutes les \xe9quipes":"Equipes valid\xe9es"})})]}),(0,n.jsx)(o.aY,{children:(0,n.jsxs)(y.mQ,{defaultValue:"difficulty",children:[(0,n.jsxs)(y.dr,{className:"grid w-full grid-cols-5 mb-6",children:[(0,n.jsx)(y.SP,{value:"difficulty",children:"Parcours"}),(0,n.jsx)(y.SP,{value:"meetingPlace",children:"D\xe9part"}),(0,n.jsx)(y.SP,{value:"bikeSize",children:"VTT"}),(0,n.jsx)(y.SP,{value:"tShirtSize",children:"T-Shirt"}),(0,n.jsx)(y.SP,{value:"situation",children:"Situation"})]}),(0,n.jsx)(y.nU,{value:"difficulty",children:(0,n.jsx)(N,{data:l})}),(0,n.jsx)(y.nU,{value:"meetingPlace",children:(0,n.jsx)(N,{data:i})}),(0,n.jsx)(y.nU,{value:"bikeSize",children:(0,n.jsx)(N,{data:d})}),(0,n.jsx)(y.nU,{value:"tShirtSize",children:(0,n.jsx)(N,{data:c})}),(0,n.jsx)(y.nU,{value:"situation",children:(0,n.jsx)(N,{data:u})})]})})]})};var z=a(17042),U=a(32897),P=a(39202),E=a(59805),L=()=>{var e;let{isAdmin:t}=(0,z.a)(),{teams:a,isLoading:l}=(0,U.y)(),{information:i}=(0,E.u)(),d=(0,f.useRouter)(),o=null==a?void 0:a.filter(e=>null!==e.second),c=null!==(e=null==a?void 0:a.map(e=>[e.captain,e.second]).flat(1).filter(e=>null!==e))&&void 0!==e?e:[],u=null==c?void 0:c.map(e=>e.payment?1:0).reduce((e,t)=>e+t,0),m=null!=i&&!!i.raid_registering_end_date&&(0,P.pc)(null==i?void 0:i.raid_registering_end_date)>=0,p=[{title:"Participants inscrits",value:(null==c?void 0:c.length.toString())||"0",description:"inscription d\xe9but\xe9e",unit:void 0},{title:"Bin\xf4mes constitu\xe9s",value:(null==o?void 0:o.length.toString())||"0",description:"".concat((null==c?void 0:c.length)-((null==o?void 0:o.length)||0)," participants sans bin\xf4me"),unit:void 0},{title:"Paiements efectu\xe9s",value:(null==u?void 0:u.toString())||"0",description:"".concat((null==c?void 0:c.length)-u," paiements manquants"),unit:void 0},{title:"Equipes valid\xe9es",value:(null==a?void 0:a.filter(e=>100===e.validation_progress).length.toString())||"0",description:"dossier complet valid\xe9 et pay\xe9",unit:void 0},{title:"Cloture des inscriptions",value:(null==i?void 0:i.raid_registering_end_date)?(0,P.p6)(null==i?void 0:i.raid_registering_end_date):"Date non renseign\xe9e",description:(null==i?void 0:i.raid_registering_end_date)?m?"".concat((0,P.pc)(null==i?void 0:i.raid_registering_end_date)," jours restants"):"Inscriptions ferm\xe9es":"Date de fin non renseign\xe9e",unit:void 0}];return t()||d.replace("/?redirect=/admin"),(0,n.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,n.jsx)(r.D,{}),(0,n.jsxs)("main",{className:"flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8",children:[(0,n.jsx)("div",{className:"grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-5",children:p.map(e=>(0,n.jsx)(s.L,{info:e,isLoaded:!l},e.title))}),(0,n.jsxs)("div",{className:"grid gap-4 md:gap-8 xl:grid-cols-3",children:[(0,n.jsx)(x,{teams:a,isLoading:l}),(0,n.jsx)(R,{teams:a,isLoading:l})]})]})]})}},85115:function(e,t,a){"use strict";a.d(t,{D:function(){return m}});var n=a(57437),s=a(87138),r=a(42873),l=a(89733),i=a(19706),d=a(55936),o=a(60603),c=a(2183),u=a(17042),f=a(24729);let m=()=>{let{me:e}=(0,u.a)(),t=window.location.pathname;function a(e,a){let r=t===e;return(0,n.jsx)(s.default,{href:e,className:"".concat(r?"text-foreground":"text-muted-foreground"," transition-colors hover:text-foreground"),children:a})}function m(){return(0,n.jsxs)(n.Fragment,{children:[a("/admin","Tableau de bord"),a("/admin/teams","Equipes"),a("/admin/information","Informations")]})}return(0,n.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10",children:[(0,n.jsx)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full",children:m()}),(0,n.jsxs)(d.yo,{children:[(0,n.jsx)(d.aM,{asChild:!0,children:(0,n.jsxs)(l.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,n.jsx)(r.Z,{className:"h-5 w-5"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,n.jsx)(d.ue,{side:"left",children:(0,n.jsx)("nav",{className:"grid gap-6 text-lg font-medium",children:m()})})]}),(0,n.jsx)("div",{className:"flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0",children:(0,n.jsx)("div",{className:"flex flex-row ml-auto",children:(0,n.jsx)(i.nm,{children:(0,n.jsxs)(i.QP,{children:[(0,n.jsx)(i.rQ,{asChild:!0,children:(0,n.jsx)(l.z,{variant:"ghost",children:(null==e?void 0:e.firstname)===void 0||(null==e?void 0:e.name)===void 0?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.O,{className:"w-24 h-6"})}):(0,n.jsx)(n.Fragment,{children:e.firstname+" "+e.name})})}),(0,n.jsxs)(i.uE,{align:"end",children:[(0,n.jsx)(o.U,{}),(0,n.jsx)(i.yE,{}),(0,n.jsx)(f.s,{})]})]})})})})]})}},26142:function(e,t,a){"use strict";a.d(t,{r:function(){return i}});var n=a(57437),s=a(79055),r=a(43178);a(70982);let l=e=>{let{value:t}=e;return(0,n.jsx)("div",{className:"h-3 w-3",children:(0,n.jsx)(r.Ip,{value:t,strokeWidth:15,styles:{root:{},path:{stroke:"black",strokeLinecap:"round"},trail:{},text:{},background:{}}})})},i=e=>{let{progress:t,total:a}=e;return(0,n.jsx)("div",{className:"flex items-center w-[120px]",children:(0,n.jsxs)(s.C,{variant:"outline",children:[(0,n.jsx)(l,{value:t/a*100}),(0,n.jsxs)("span",{className:"ml-2",children:[t," / ",a," ","valid\xe9s"]})]})})}},60603:function(e,t,a){"use strict";a.d(t,{U:function(){return o}});var n=a(57437);a(2265);var s=a(38296),r=a(92699),l=a(66441),i=a(79512),d=a(19706);function o(){let{setTheme:e}=(0,i.F)();return(0,n.jsxs)(d.tP,{children:[(0,n.jsx)(d.hL,{children:"Th\xe8me"}),(0,n.jsxs)(d.lS,{children:[(0,n.jsxs)(d.N,{onClick:()=>e("light"),children:["Clair",(0,n.jsx)(d.U7,{children:(0,n.jsx)(s.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"})})]}),(0,n.jsxs)(d.N,{onClick:()=>e("dark"),children:["Sombre",(0,n.jsx)(d.U7,{children:(0,n.jsx)(r.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"})})]}),(0,n.jsxs)(d.N,{onClick:()=>e("system"),children:["Syst\xe8me",(0,n.jsx)(d.U7,{children:(0,n.jsx)(l.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"})})]})]})]})}},26477:function(e,t,a){"use strict";a.d(t,{L:function(){return l}});var n=a(57437),s=a(48185),r=a(2183);let l=e=>{let{info:t,isLoaded:a}=e;return(0,n.jsxs)(s.Zb,{children:[(0,n.jsxs)(s.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,n.jsx)(s.ll,{className:"text-sm font-medium",children:a?(0,n.jsx)("span",{children:t.title}):(0,n.jsx)(r.O,{className:"w-24 h-5"})}),t.unit&&(a?t.unit:(0,n.jsx)(r.O,{className:"w-4 h-4 text-muted-foreground"}))]}),(0,n.jsxs)(s.aY,{children:[(0,n.jsx)("div",{className:"text-2xl font-bold",children:a?t.value:(0,n.jsx)(r.O,{className:"w-[150px] h-6"})}),a?(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:t.description}):(0,n.jsx)(r.O,{className:"w-[120px] h-4 mt-1"})]})]},t.title)}},24729:function(e,t,a){"use strict";a.d(t,{s:function(){return i}});var n=a(57437),s=a(40133),r=a(54008),l=a(89733);let i=()=>{let{logout:e}=(0,s.a)();return(0,n.jsxs)(l.z,{variant:"ghost",onClick:e,className:"px-2 py-1.5 text-sm font-medium w-full justify-start hover:bg-background text-destructive",children:["Se d\xe9connecter",(0,n.jsx)(r.ApJ,{className:"h-4 w-4 ml-auto"})]})}},79055:function(e,t,a){"use strict";a.d(t,{C:function(){return i}});var n=a(57437);a(2265);var s=a(12218),r=a(37440);let l=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:a,...s}=e;return(0,n.jsx)("div",{className:(0,r.cn)(l({variant:a}),t),...s})}},19706:function(e,t,a){"use strict";a.d(t,{N:function(){return v},QP:function(){return c},U7:function(){return j},hL:function(){return x},lS:function(){return p},nm:function(){return f},rQ:function(){return m},tP:function(){return u},uE:function(){return h},yE:function(){return g}});var n=a(57437),s=a(2265),r=a(92005),l=a(87592),i=a(22468),d=a(28165),o=a(37440);let c=r.v2;r.ZA,r.h_;let u=r.Tr;r.Ee;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.fC,{ref:t,className:(0,o.cn)("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",a),...s})});f.displayName=r.fC.displayName;let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.xz,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a),...s})});m.displayName=r.xz.displayName;let x=s.forwardRef((e,t)=>{let{className:a,inset:s,children:i,...d}=e;return(0,n.jsxs)(r.fF,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",s&&"pl-8",a),...d,children:[i,(0,n.jsx)(l.Z,{className:"ml-auto h-4 w-4"})]})});x.displayName=r.fF.displayName;let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})});p.displayName=r.tu.displayName;let h=s.forwardRef((e,t)=>{let{className:a,align:s="start",alignOffset:l=-4,sideOffset:i=8,...d}=e;return(0,n.jsx)(r.h_,{children:(0,n.jsx)(r.VY,{ref:t,align:s,alignOffset:l,sideOffset:i,className:(0,o.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...d})})});h.displayName=r.VY.displayName;let v=s.forwardRef((e,t)=>{let{className:a,inset:s,...l}=e;return(0,n.jsx)(r.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",a),...l})});v.displayName=r.ck.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,checked:l,...d}=e;return(0,n.jsxs)(r.oC,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:l,...d,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})}).displayName=r.oC.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,...l}=e;return(0,n.jsxs)(r.Rk,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=r.Rk.displayName,s.forwardRef((e,t)=>{let{className:a,inset:s,...l}=e;return(0,n.jsx)(r.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...l})}).displayName=r.__.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...s})});g.displayName=r.Z0.displayName;let j=e=>{let{className:t,...a}=e;return(0,n.jsx)("span",{className:(0,o.cn)("ml-auto text-xs tracking-widest text-muted-foreground",t),...a})};j.displayname="MenubarShortcut"},55936:function(e,t,a){"use strict";a.d(t,{Ei:function(){return g},FF:function(){return h},Tu:function(){return p},aM:function(){return c},bC:function(){return v},ue:function(){return x},yo:function(){return o}});var n=a(57437),s=a(2265),r=a(13304),l=a(12218),i=a(74697),d=a(37440);let o=r.fC,c=r.xz;r.x8;let u=r.h_,f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.aV,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});f.displayName=r.aV.displayName;let m=(0,l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",team:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-none"}},defaultVariants:{side:"right"}}),x=s.forwardRef((e,t)=>{let{side:a="right",className:s,children:l,...o}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(f,{}),(0,n.jsxs)(r.VY,{ref:t,className:(0,d.cn)(m({side:a}),s),...o,children:[l,(0,n.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=r.VY.displayName;let p=e=>{let{className:t,...a}=e;return(0,n.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};p.displayName="SheetHeader";let h=e=>{let{className:t,...a}=e;return(0,n.jsx)("div",{className:(0,d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};h.displayName="SheetFooter";let v=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold text-foreground",a),...s})});v.displayName=r.Dx.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",a),...s})});g.displayName=r.dk.displayName},2183:function(e,t,a){"use strict";a.d(t,{O:function(){return r}});var n=a(57437),s=a(37440);function r(e){let{className:t,...a}=e;return(0,n.jsx)("div",{className:(0,s.cn)("animate-pulse rounded-md bg-muted",t),...a})}},47304:function(e,t,a){"use strict";a.d(t,{RM:function(){return d},SC:function(){return o},iA:function(){return l},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var n=a(57437),s=a(2265),r=a(37440);let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,r.cn)("w-full caption-bottom text-sm",a),...s})})});l.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("thead",{ref:t,className:(0,r.cn)("[&_tr]:border-b",a),...s})});i.displayName="TableHeader";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,r.cn)("[&_tr:last-child]:border-0",a),...s})});d.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("tr",{ref:t,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});o.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("th",{ref:t,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});c.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("td",{ref:t,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("caption",{ref:t,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"},86864:function(e,t,a){"use strict";a.d(t,{SP:function(){return o},dr:function(){return d},mQ:function(){return i},nU:function(){return c}});var n=a(57437),s=a(2265),r=a(62447),l=a(37440);let i=r.fC,d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.aV,{ref:t,className:(0,l.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...s})});d.displayName=r.aV.displayName;let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.xz,{ref:t,className:(0,l.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...s})});o.displayName=r.xz.displayName;let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.VY,{ref:t,className:(0,l.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...s})});c.displayName=r.VY.displayName},59805:function(e,t,a){"use strict";a.d(t,{u:function(){return r}});var n=a(84980),s=a(40133);let r=()=>{let{token:e,userId:t}=(0,s.a)(),{data:a,isLoading:r,refetch:l}=(0,n.THV)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:null!==t,retry:0,queryHash:"getRaidInformation"}),{mutate:i,isPending:d}=(0,n.Arm)({});return{information:a,isLoading:r,refetchInformation:l,updateInformation:(t,a)=>{i({body:t,headers:{Authorization:"Bearer ".concat(e)}},{onSettled:()=>{l(),a()}})},isUpdateLoading:d}}},32897:function(e,t,a){"use strict";a.d(t,{y:function(){return l}});var n=a(84980),s=a(17042),r=a(40133);let l=()=>{let{token:e,isTokenExpired:t}=(0,r.a)(),{isAdmin:a}=(0,s.a)(),{data:l,isLoading:i,refetch:d}=(0,n.EnB)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:a()&&!t(),retry:0,queryHash:"getTeams"});return{teams:l,isLoading:i,refetchTeams:d}}},17042:function(e,t,a){"use strict";a.d(t,{a:function(){return l}});var n=a(84980),s=a(64773),r=a(40133);let l=()=>{let{token:e,isTokenExpired:t}=(0,r.a)(),{user:a,setUser:l}=(0,s.L)(),{data:i,isLoading:d}=(0,n.gFH)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:void 0===a&&!t(),retry:0});return void 0!==i&&void 0===a&&null!==e&&l(i),{me:a,isLoading:d,isAdmin:()=>{var e,t;return null!==(t=null==a?void 0:null===(e=a.groups)||void 0===e?void 0:e.some(e=>"e9e6e3d3-9f5f-4e9b-8e5f-9f5f4e9b8e5f"===e.id))&&void 0!==t&&t}}}},77504:function(e,t,a){"use strict";function n(e){return null==e?void 0:e.split(" : ")[0]}function s(e){let t=null==e?void 0:e.split(" : ");return(null==t?void 0:t.length)===2?t[1]:"Centrale"}a.d(t,{Q:function(){return s},l:function(){return n}})},39202:function(e,t,a){"use strict";a.d(t,{_Q:function(){return d},p6:function(){return i},pc:function(){return l},uv:function(){return o}});var n=a(33831),s=a(6460),r=a(13415);function l(e){let t=new Date(e).setHours(0,0,0,0),a=new Date().setHours(0,0,0,0);return(0,n.j)(t,a)}function i(e){return(0,s.WU)(e,"PPP",{locale:r.fr})}function d(e,t){let a=(0,s.WU)(e,"dd",{locale:r.fr}),n=(0,s.WU)(e,"MMMM",{locale:r.fr}),l=(0,s.WU)(t,"dd",{locale:r.fr}),i=(0,s.WU)(t,"MMMM",{locale:r.fr}),d=(0,s.WU)(e,"yyyy",{locale:r.fr}),o=(0,s.WU)(t,"yyyy",{locale:r.fr});return d!==o?"".concat(a," ").concat(n," ").concat(d," - ").concat(l," ").concat(i," ").concat(o):n!==i?"".concat(a," ").concat(n," - ").concat(l," ").concat(i," ").concat(d):"".concat(a," - ").concat(l," ").concat(n," ").concat(d)}function o(e){return e?(0,s.WU)(e,"yyyy-MM-dd",{locale:r.fr}):void 0}}},function(e){e.O(0,[74,422,756,629,792,547,974,633,805,425,971,23,744],function(){return e(e.s=18916)}),_N_E=e.O()}]);