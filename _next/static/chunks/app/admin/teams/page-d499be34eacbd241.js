(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{88790:function(e,s,l){Promise.resolve().then(l.bind(l,73044))},73044:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return ea}});var t=l(57437),a=l(15671),n=l(2265),r=l(81006),i=l(63280),c=l(62177),d=l(575),o=l(22782),u=l(1657),m=l(82012),x=l(51014);let h=n.forwardRef((e,s)=>{let{className:l,orientation:a="horizontal",decorative:n=!0,...r}=e;return(0,t.jsx)(x.f,{ref:s,decorative:n,orientation:a,className:(0,u.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",l),...r})});h.displayName=x.f.displayName;var f=l(33277),j=l(26739);function g(e){let{column:s,title:l,options:a}=e,n=null==s?void 0:s.getFacetedUniqueValues(),r=new Set(null==s?void 0:s.getFilterValue());return(0,t.jsxs)(m.J2,{children:[(0,t.jsx)(m.xo,{asChild:!0,children:(0,t.jsxs)(d.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,t.jsx)(c.SPS,{className:"mr-2 h-4 w-4"}),l,(null==r?void 0:r.size)>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{orientation:"vertical",className:"mx-2 h-4"}),(0,t.jsx)(f.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:r.size}),(0,t.jsx)("div",{className:"hidden space-x-1 lg:flex",children:r.size>2?(0,t.jsxs)(f.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[r.size," selected"]}):a.filter(e=>r.has(e.value)).map(e=>(0,t.jsx)(f.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,t.jsx)(m.yk,{className:"w-[200px] p-0",align:"start",children:(0,t.jsxs)(j.mY,{children:[(0,t.jsx)(j.sZ,{placeholder:l}),(0,t.jsxs)(j.e8,{children:[(0,t.jsx)(j.rb,{children:"No results found."}),(0,t.jsx)(j.fu,{children:a.map(e=>{let l=r.has(e.value);return(0,t.jsxs)(j.di,{onSelect:()=>{l?r.delete(e.value):r.add(e.value);let t=Array.from(r);null==s||s.setFilterValue(t.length?t:void 0)},children:[(0,t.jsx)("div",{className:(0,u.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",l?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,t.jsx)(c.nQG,{className:(0,u.cn)("h-4 w-4")})}),e.icon&&(0,t.jsx)(e.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,t.jsx)("span",{children:e.label}),(null==n?void 0:n.get(e.value))&&(0,t.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:n.get(e.value)})]},e.value)})}),r.size>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.zz,{}),(0,t.jsx)(j.fu,{children:(0,t.jsx)(j.di,{onSelect:()=>null==s?void 0:s.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}var p=l(81100),v=l(34645);function N(e){let{table:s}=e;return(0,t.jsxs)(v.h_,{children:[(0,t.jsx)(p.$F,{asChild:!0,children:(0,t.jsxs)(d.z,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[(0,t.jsx)(c.hsZ,{className:"mr-2 h-4 w-4"}),"Colonnes"]})}),(0,t.jsxs)(v.AW,{align:"end",className:"w-[180px]",children:[(0,t.jsx)(v.Ju,{children:"Activer les colonnes"}),(0,t.jsx)(v.VD,{}),s.getAllColumns().filter(e=>void 0!==e.accessorFn&&e.getCanHide()).map(e=>(0,t.jsx)(v.bO,{checked:e.getIsVisible(),onCheckedChange:s=>e.toggleVisibility(!!s),children:function(e){switch(e){case"second":return"Co\xe9quipier";case"captain":return"Capitaine";case"difficulty":return"Parcours";case"meeting_place":return"Lieu de rendez-vous";case"validation_progress":return"Inscription";default:return e}}(e.id)},e.id))]})]})}var b=l(82084);function w(e){var s,l;let{table:a}=e,n=a.getState().columnFilters.length>0;return(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,t.jsx)(o.I,{placeholder:"Filtrer les \xe9quipes...",value:null!==(l=null===(s=a.getColumn("name"))||void 0===s?void 0:s.getFilterValue())&&void 0!==l?l:"",onChange:e=>{var s;return null===(s=a.getColumn("name"))||void 0===s?void 0:s.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),a.getColumn("difficulty")&&(0,t.jsx)(g,{column:a.getColumn("difficulty"),title:"Parcours",options:b.n9}),a.getColumn("meeting_place")&&(0,t.jsx)(g,{column:a.getColumn("meeting_place"),title:"Lieu de rendez-vous",options:b.xQ}),n&&(0,t.jsxs)(d.z,{variant:"ghost",onClick:()=>a.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Supprimer",(0,t.jsx)(c.Pxu,{className:"ml-2 h-4 w-4"})]})]}),(0,t.jsx)(N,{table:a})]})}var y=l(18641);function C(e){let{table:s}=e;return(0,t.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,t.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[s.getFilteredSelectedRowModel().rows.length," sur"," ",s.getFilteredRowModel().rows.length," \xe9quipe(s) s\xe9l\xe9ctionn\xe9es."]}),(0,t.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("p",{className:"text-sm font-medium",children:"Equipes par page"}),(0,t.jsxs)(y.Ph,{value:"".concat(s.getState().pagination.pageSize),onValueChange:e=>{s.setPageSize(Number(e))},children:[(0,t.jsx)(y.i4,{className:"h-8 w-[70px]",children:(0,t.jsx)(y.ki,{placeholder:s.getState().pagination.pageSize})}),(0,t.jsx)(y.Bw,{side:"top",children:[10,20,30,40,50].map(e=>(0,t.jsx)(y.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,t.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",s.getState().pagination.pageIndex+1," sur"," ",s.getPageCount()]}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsxs)(d.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(0),disabled:!s.getCanPreviousPage(),children:[(0,t.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,t.jsx)(c.kRt,{className:"h-4 w-4"})]}),(0,t.jsxs)(d.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.previousPage(),disabled:!s.getCanPreviousPage(),children:[(0,t.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,t.jsx)(c.wyc,{className:"h-4 w-4"})]}),(0,t.jsxs)(d.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.nextPage(),disabled:!s.getCanNextPage(),children:[(0,t.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,t.jsx)(c.XCv,{className:"h-4 w-4"})]}),(0,t.jsxs)(d.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(s.getPageCount()-1),disabled:!s.getCanNextPage(),children:[(0,t.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,t.jsx)(c.yr4,{className:"h-4 w-4"})]})]})]})]})}var S=l(5887),k=l(47907);function z(e){var s;let{columns:l,data:a}=e,[c,d]=n.useState({}),[o,u]=n.useState({}),[m,x]=n.useState([]),[h,f]=n.useState([]),j=(0,k.useRouter)(),g=(0,r.b7)({data:a,columns:l,state:{sorting:h,columnVisibility:o,rowSelection:c,columnFilters:m},enableRowSelection:!0,onRowSelectionChange:d,onSortingChange:f,onColumnFiltersChange:x,onColumnVisibilityChange:u,getCoreRowModel:(0,i.sC)(),getFilteredRowModel:(0,i.vL)(),getPaginationRowModel:(0,i.G_)(),getSortedRowModel:(0,i.tj)(),getFacetedRowModel:(0,i.o6)(),getFacetedUniqueValues:(0,i.JG)()});return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(w,{table:g}),(0,t.jsx)("div",{className:"rounded-md border",children:(0,t.jsxs)(S.iA,{children:[(0,t.jsx)(S.xD,{children:g.getHeaderGroups().map(e=>(0,t.jsx)(S.SC,{children:e.headers.map(e=>(0,t.jsx)(S.ss,{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,r.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,t.jsx)(S.RM,{children:(null===(s=g.getRowModel().rows)||void 0===s?void 0:s.length)?g.getRowModel().rows.map(e=>(0,t.jsx)(S.SC,{"data-state":e.getIsSelected()&&"selected",onClick:()=>{var s;return s=e.original.id,void j.replace("/admin/teams?teamId=".concat(s))},children:e.getVisibleCells().map(e=>(0,t.jsx)(S.pj,{children:(0,r.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,t.jsx)(S.SC,{children:(0,t.jsx)(S.pj,{colSpan:l.length,className:"h-24 text-center",children:"Pas de r\xe9sultat"})})})]})}),(0,t.jsx)(C,{table:g})]})}var R=l(79024);function F(e){let{column:s,title:l,className:a}=e;return s.getCanSort()?(0,t.jsx)("div",{className:(0,u.cn)("flex items-center space-x-2",a),children:(0,t.jsxs)(v.h_,{children:[(0,t.jsx)(v.$F,{asChild:!0,children:(0,t.jsxs)(d.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,t.jsx)("span",{children:l}),"desc"===s.getIsSorted()?(0,t.jsx)(c.veu,{className:"ml-2 h-4 w-4"}):"asc"===s.getIsSorted()?(0,t.jsx)(c.Hf3,{className:"ml-2 h-4 w-4"}):(0,t.jsx)(c.jnn,{className:"ml-2 h-4 w-4"})]})}),(0,t.jsxs)(v.AW,{align:"start",children:[(0,t.jsxs)(v.Xi,{onClick:()=>s.toggleSorting(!1),children:[(0,t.jsx)(c.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,t.jsxs)(v.Xi,{onClick:()=>s.toggleSorting(!0),children:[(0,t.jsx)(c.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,t.jsx)(v.VD,{}),(0,t.jsxs)(v.Xi,{onClick:()=>s.toggleVisibility(!1),children:[(0,t.jsx)(c.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Cacher"]})]})]})}):(0,t.jsx)("div",{className:(0,u.cn)(a),children:l})}function V(e){let{row:s}=e,l=s.original;return(0,t.jsxs)(v.h_,{children:[(0,t.jsx)(v.$F,{asChild:!0,children:(0,t.jsxs)(d.z,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[(0,t.jsx)(c.nWS,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,t.jsxs)(v.AW,{align:"end",className:"w-[160px]",children:[(0,t.jsx)(v.Xi,{children:"Edit"}),(0,t.jsx)(v.Xi,{children:"Make a copy"}),(0,t.jsx)(v.Xi,{children:"Favorite"}),(0,t.jsx)(v.VD,{}),(0,t.jsxs)(v.Ph,{children:[(0,t.jsx)(v.kt,{children:"Parcours"}),(0,t.jsx)(v.TG,{children:(0,t.jsx)(v._x,{value:l.name,children:b.n9.map(e=>(0,t.jsx)(v.qB,{value:e.value,children:e.label},e.value))})})]}),(0,t.jsx)(v.VD,{}),(0,t.jsxs)(v.Xi,{children:["Delete",(0,t.jsx)(v.KM,{children:"⌘⌫"})]})]})]})}let P=[{id:"select",header:e=>{let{table:s}=e;return(0,t.jsx)(R.X,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>s.toggleAllPageRowsSelected(!!e),"aria-label":"Select all",className:"translate-y-[2px]"})},cell:e=>{let{row:s}=e;return(0,t.jsx)(R.X,{checked:s.getIsSelected(),onCheckedChange:e=>s.toggleSelected(!!e),"aria-label":"Select row",className:"translate-y-[2px]"})},enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Equipe"})},cell:e=>{let{row:s}=e;return(0,t.jsx)("div",{children:s.getValue("name")})},enableSorting:!1,enableHiding:!1},{accessorKey:"captain",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Capitaine"})},cell:e=>{let{row:s}=e,l=s.getValue("captain");return(0,t.jsxs)("div",{className:"flex space-x-2",children:[l.firstname," ",l.name]})},enableSorting:!1},{accessorKey:"second",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Co\xe9quiper"})},cell:e=>{let{row:s}=e,l=s.getValue("second");return(0,t.jsx)("div",{className:"flex space-x-2",children:l?"".concat(l.firstname," ").concat(l.name):"Aucun"})},enableSorting:!1},{accessorKey:"difficulty",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Parcours"})},cell:e=>{let{row:s}=e;return(0,t.jsx)("div",{className:"flex space-x-2",children:(0,t.jsx)(f.C,{variant:"outline",children:(0,b.Jg)(b.n9,s.getValue("difficulty"))})})},filterFn:(e,s,l)=>l.includes(e.getValue(s))},{accessorKey:"meeting_place",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Lie de rendezvous"})},cell:e=>{let{row:s}=e;return(0,t.jsx)("div",{className:"flex space-x-2",children:(0,t.jsx)(f.C,{variant:"outline",children:(0,b.Jg)(b.n9,s.getValue("meeting_place"))})})},filterFn:(e,s,l)=>l.includes(e.getValue(s))},{accessorKey:"validation_progress",header:e=>{let{column:s}=e;return(0,t.jsx)(F,{column:s,title:"Inscription"})},cell:e=>{let{row:s}=e;return(0,t.jsx)("div",{className:"flex w-[100px] items-center",children:(0,t.jsxs)("span",{children:[s.getValue("validation_progress").toFixed(0),"%"]})})},sortingFn:(e,s,l)=>e.getValue(l)-s.getValue(l)},{id:"actions",cell:e=>{let{row:s}=e;return(0,t.jsx)(V,{row:s})}}];var _=l(53832),D=l(1146),A=l(41391),I=l(50326),q=l(425),T=l(68855);let M=e=>{let{token:s,userId:l}=(0,T.a)(),{isAdmin:t}=(0,A.a)(),{data:a}=(0,q.oiV)({headers:{Authorization:"Bearer ".concat(s)},pathParams:{teamId:e}},{enabled:null!==l&&t(),retry:0,queryHash:"getTeamById"});return{team:a}};var O=l(99497),Z=l(68932),X=l(55348);let E=e=>{let{participant:s}=e;return(0,t.jsxs)(a.Zb,{children:[(0,t.jsxs)(a.Ol,{children:[(0,t.jsx)(a.ll,{children:s.firstname+" "+s.name}),(0,t.jsxs)(a.SZ,{children:["dossier particiant complet\xe9 \xe0"," ",s.validation_progress.toFixed(0),"%"]})]}),(0,t.jsxs)(a.aY,{children:[(0,t.jsx)(Z.l,{label:"Addresse",value:s.address}),(0,t.jsx)(Z.l,{label:"Taille de v\xe9lo",value:s.bike_size}),(0,t.jsx)(Z.l,{label:"Taille de t-shirt",value:s.t_shirt_size}),(0,t.jsx)(Z.l,{label:"R\xe9gime alimentaire",value:s.diet}),function(e){var s,l;let a=(0,X.l)(null!==(s=e.situation)&&void 0!==s?s:void 0),n=(0,X.Q)(null!==(l=e.situation)&&void 0!==l?l:void 0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z.l,{label:"Situation",value:(0,b.Jg)(b.LN,a)}),"otherschool"===a&&(0,t.jsx)(Z.l,{label:"Nom de l'\xe9cole",value:n}),"corporatepartner"===a&&(0,t.jsx)(Z.l,{label:"Nom de l'entreprise",value:n}),"other"===a&&(0,t.jsx)(Z.l,{label:"Autre situation",value:n})]})}(s),(0,t.jsx)(Z.l,{label:"Attestation sur l'honneur",value:s.attestation_on_honour})]})]})},H=e=>{let{team:s}=e;return(0,t.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4",children:[(0,t.jsx)(E,{participant:s.captain}),s.second?(0,t.jsx)(E,{participant:s.second}):(0,t.jsx)(a.Zb,{className:"w-full h-full",children:(0,t.jsx)(a.aY,{className:"w-full h-full mt-3",children:(0,t.jsx)("span",{className:"flex m-auto h-full justify-center items-center text-muted-foreground",children:"Aucun co\xe9quipier n'a \xe9t\xe9 ajout\xe9 \xe0 cette \xe9quipe."})})})]})};var L=l(77625),U=l(80146),G=l(23441);let Y=U.fC,K=n.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)(U.ck,{ref:s,className:(0,u.cn)("border-b",l),...a})});K.displayName="AccordionItem";let B=n.forwardRef((e,s)=>{let{className:l,children:a,...n}=e;return(0,t.jsx)(U.h4,{className:"flex",children:(0,t.jsxs)(U.xz,{ref:s,className:(0,u.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",l),...n,children:[a,(0,t.jsx)(G.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});B.displayName=U.xz.displayName;let J=n.forwardRef((e,s)=>{let{className:l,children:a,...n}=e;return(0,t.jsx)(U.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:(0,t.jsx)("div",{className:(0,u.cn)("pb-4 pt-0",l),children:a})})});J.displayName=U.VY.displayName;var Q=l(29908);let W=e=>{let{value:s,document:l,index:a,setDocument:n,downloadDocument:r}=e,i=l&&l.validated||!1;return(0,t.jsxs)(K,{value:"item-".concat(a),onClick:()=>{l&&n(l)},children:[(0,t.jsx)(B,{disabled:i,children:(0,t.jsxs)("div",{className:"flex flex-row mr-auto items-center",children:[i&&(0,t.jsx)(Q.dZ6,{className:"mr-4"}),s]})}),(0,t.jsx)(J,{children:!i&&(0,t.jsx)(t.Fragment,{children:l?(0,t.jsxs)("div",{className:"flex grid-cols-2 gap-6",children:[(0,t.jsx)(d.z,{variant:"outline",className:"w-full",onClick:e=>r(l),children:"T\xe9l\xe9charger le document"}),(0,t.jsx)(d.z,{className:"w-full",children:"Valider le document"})]}):(0,t.jsx)("span",{className:"text-muted-foreground",children:"Aucun document"})})})]})},$=e=>{var s,l,n,r;let{participant:i,setDocument:c,downloadDocument:d}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Ol,{children:(0,t.jsxs)(a.ll,{children:[i.firstname," ",i.name]})}),(0,t.jsx)(a.aY,{children:(0,t.jsxs)(Y,{type:"single",collapsible:!0,className:"w-full",children:[(0,t.jsx)(W,{value:"Carte d'identit\xe9",document:i.id_card,index:0,setDocument:c,downloadDocument:d}),(0,t.jsx)(W,{value:"Certificat m\xe9dical",document:i.medical_certificate,index:1,setDocument:c,downloadDocument:d}),(0,t.jsx)(W,{value:"R\xe9glement",document:null!==(s=i.raid_rules)&&void 0!==s?s:null,index:2,setDocument:c,downloadDocument:d}),["centrale","otherschool"].includes(null!==(n=(0,X.l)(null!==(l=i.situation)&&void 0!==l?l:void 0))&&void 0!==n?n:"")&&(0,t.jsx)(W,{value:"Carte \xe9tudiant",document:null!==(r=i.student_card)&&void 0!==r?r:null,index:3,setDocument:c,downloadDocument:d})]})})]})};var ee=l(99257),es=l(56201);let el=e=>{let{team:s}=e,{getDocument:l}=(0,es.k)(),[r,i]=(0,n.useState)(null),[c,d]=(0,n.useState)(null);function o(e,s){console.log("setDocument",e),i(e),d(s)}function u(e,s){let t=e.type,a=l(s.id,t);if(void 0!==a){let e=a.type.split("/")[1],l="".concat(s.firstname,"_").concat(s.name,"_").concat(t,".").concat(e),n=window.URL.createObjectURL(new Blob([a])),r=document.createElement("a");r.href=n,r.setAttribute("download",l),document.body.appendChild(r),r.click()}}let m=null==r?void 0:r.type;return(0,t.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4",children:[(0,t.jsxs)(a.Zb,{children:[(0,t.jsx)($,{participant:s.captain,setDocument:e=>o(e,s.captain.id),downloadDocument:e=>u(e,s.captain)}),s.second&&(0,t.jsx)($,{participant:s.second,setDocument:e=>o(e,s.second.id),downloadDocument:e=>u(e,s.second)})]}),r&&m&&c&&(0,t.jsx)(ee.s,{userId:c,documentKey:m,id:r.id,file:l(c,m)})]})},et=e=>{let{isOpened:s,onClose:l,teamId:a}=e,{team:n}=M(a),r=(null==n?void 0:n.id)!==a;return(0,t.jsx)(I.yo,{open:s,onOpenChange:l,children:(0,t.jsxs)(I.ue,{side:"team",children:[(0,t.jsx)(I.Tu,{children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.O,{className:"h-8 w-32"}),(0,t.jsx)(L.O,{className:"h-4 w-80"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.bC,{children:null==n?void 0:n.name}),(0,t.jsxs)(I.Ei,{children:["Dossier \xe9quipe complet\xe9 \xe0 ",null==n?void 0:n.validation_progress.toFixed(0)," ","%"]})]})}),(0,t.jsx)("div",{className:"p-4"}),(0,t.jsxs)(O.mQ,{defaultValue:"information",className:"",children:[(0,t.jsxs)(O.dr,{className:"grid grid-cols-3 w-[500px]",children:[(0,t.jsx)(O.SP,{value:"information",children:"Informations"}),(0,t.jsx)(O.SP,{value:"document",children:"Documents"}),(0,t.jsx)(O.SP,{value:"payment",children:"Paiement"})]}),r?(0,t.jsx)(L.O,{className:"h-96 w-192 mt-6"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.nU,{value:"information",children:n&&(0,t.jsx)(H,{team:n})}),(0,t.jsx)(O.nU,{value:"document",children:n&&(0,t.jsx)(el,{team:n})}),(0,t.jsx)(O.nU,{value:"payment"})]})]})]})})};var ea=()=>{let{isAdmin:e}=(0,A.a)(),{teams:s}=(0,D.y)(),l=(0,k.useRouter)(),r=(0,k.useSearchParams)(),[i,c]=(0,n.useState)(!1),[d,o]=(0,n.useState)(null);if(!e()){let e=new URL(window.location.href),s=e.pathname+e.search;l.replace("/?redirect=".concat(s))}let u=r.get("teamId");return u!==d&&(o(u),c(!!u)),(0,t.jsxs)("div",{className:"flex min-h-screen w-full flex-col bg-muted/40",children:[(0,t.jsx)(_.D,{}),(0,t.jsx)("main",{className:"grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8",children:(0,t.jsxs)(a.Zb,{children:[(0,t.jsxs)(a.Ol,{children:[(0,t.jsx)(a.ll,{children:"Equipes"}),(0,t.jsx)(a.SZ,{children:"Liste des \xe9quipes enregistr\xe9es"})]}),(0,t.jsx)(a.aY,{children:s&&(0,t.jsx)(z,{data:s,columns:P})})]})}),d&&(0,t.jsx)(et,{isOpened:i,onClose:function(){c(!1),l.replace("/admin/teams"),o(null)},teamId:d})]})}},53832:function(e,s,l){"use strict";l.d(s,{D:function(){return h}});var t=l(57437),a=l(8792),n=l(12153),r=l(79744),i=l(575),c=l(34645),d=l(50326),o=l(40695),u=l(77625),m=l(41391),x=l(91806);let h=()=>{let{me:e}=(0,m.a)();function s(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{href:"#",className:"flex items-center gap-2 text-lg font-semibold md:text-base",children:(0,t.jsx)(n.Z,{className:"h-6 w-6"})}),(0,t.jsx)(a.default,{href:"/admin",className:"text-foreground transition-colors hover:text-foreground",children:"Tableau de bord"}),(0,t.jsx)(a.default,{href:"/admin/teams",className:"text-muted-foreground transition-colors hover:text-foreground",children:"Equipes"})]})}return(0,t.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6",children:[(0,t.jsx)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full",children:s()}),(0,t.jsxs)(d.yo,{children:[(0,t.jsx)(d.aM,{asChild:!0,children:(0,t.jsxs)(i.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,t.jsx)(r.Z,{className:"h-5 w-5"}),(0,t.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,t.jsx)(d.ue,{side:"left",children:(0,t.jsx)("nav",{className:"grid gap-6 text-lg font-medium",children:s()})})]}),(0,t.jsx)("div",{className:"flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0",children:(0,t.jsxs)("div",{className:"flex flex-row ml-auto",children:[(0,t.jsxs)(c.h_,{children:[(0,t.jsx)(c.$F,{asChild:!0,children:(0,t.jsx)(i.z,{variant:"ghost",children:(null==e?void 0:e.firstname)===void 0||(null==e?void 0:e.name)===void 0?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u.O,{className:"w-24 h-6"})}):(0,t.jsx)(t.Fragment,{children:e.firstname+" "+e.name})})}),(0,t.jsx)(c.AW,{align:"end",children:(0,t.jsx)(c.Xi,{children:(0,t.jsx)(x.s,{})})})]}),(0,t.jsx)("div",{className:"w-4"}),(0,t.jsx)(o.U,{})]})})]})}},33277:function(e,s,l){"use strict";l.d(s,{C:function(){return i}});var t=l(57437);l(2265);var a=l(57742),n=l(1657);let r=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:s,variant:l,...a}=e;return(0,t.jsx)("div",{className:(0,n.cn)(r({variant:l}),s),...a})}},5887:function(e,s,l){"use strict";l.d(s,{RM:function(){return c},SC:function(){return d},iA:function(){return r},pj:function(){return u},ss:function(){return o},xD:function(){return i}});var t=l(57437),a=l(2265),n=l(1657);let r=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("div",{className:"relative w-full overflow-auto",children:(0,t.jsx)("table",{ref:s,className:(0,n.cn)("w-full caption-bottom text-sm",l),...a})})});r.displayName="Table";let i=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("thead",{ref:s,className:(0,n.cn)("[&_tr]:border-b",l),...a})});i.displayName="TableHeader";let c=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("tbody",{ref:s,className:(0,n.cn)("[&_tr:last-child]:border-0",l),...a})});c.displayName="TableBody",a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("tfoot",{ref:s,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",l),...a})}).displayName="TableFooter";let d=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("tr",{ref:s,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l),...a})});d.displayName="TableRow";let o=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("th",{ref:s,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",l),...a})});o.displayName="TableHead";let u=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("td",{ref:s,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",l),...a})});u.displayName="TableCell",a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)("caption",{ref:s,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",l),...a})}).displayName="TableCaption"},99497:function(e,s,l){"use strict";l.d(s,{SP:function(){return d},dr:function(){return c},mQ:function(){return i},nU:function(){return o}});var t=l(57437),a=l(2265),n=l(64694),r=l(1657);let i=n.fC,c=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)(n.aV,{ref:s,className:(0,r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l),...a})});c.displayName=n.aV.displayName;let d=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)(n.xz,{ref:s,className:(0,r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l),...a})});d.displayName=n.xz.displayName;let o=a.forwardRef((e,s)=>{let{className:l,...a}=e;return(0,t.jsx)(n.VY,{ref:s,className:(0,r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",l),...a})});o.displayName=n.VY.displayName},1146:function(e,s,l){"use strict";l.d(s,{y:function(){return r}});var t=l(425),a=l(41391),n=l(68855);let r=()=>{let{token:e}=(0,n.a)(),{isAdmin:s}=(0,a.a)(),{data:l,isLoading:r,refetch:i}=(0,t.kAw)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:s()&&null!==e,retry:0,queryHash:"getTeams"});return{teams:l,isLoading:r,refetchTeams:i}}}},function(e){e.O(0,[422,310,651,470,305,169,953,864,712,244,149,971,69,744],function(){return e(e.s=88790)}),_N_E=e.O()}]);