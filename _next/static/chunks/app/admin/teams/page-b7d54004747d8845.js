(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{88790:function(e,t,s){Promise.resolve().then(s.bind(s,12888))},12888:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Z}});var a=s(57437),r=s(15671),l=s(2265),n=s(81006),i=s(63280),d=s(62177),o=s(575),c=s(22782),u=s(1657),m=s(82012),x=s(51014);let f=l.forwardRef((e,t)=>{let{className:s,orientation:r="horizontal",decorative:l=!0,...n}=e;return(0,a.jsx)(x.f,{ref:t,decorative:l,orientation:r,className:(0,u.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",s),...n})});f.displayName=x.f.displayName;var h=s(33277),p=s(26739);function g(e){let{column:t,title:s,options:r}=e,l=null==t?void 0:t.getFacetedUniqueValues(),n=new Set(null==t?void 0:t.getFilterValue());return(0,a.jsxs)(m.J2,{children:[(0,a.jsx)(m.xo,{asChild:!0,children:(0,a.jsxs)(o.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,a.jsx)(d.SPS,{className:"mr-2 h-4 w-4"}),s,(null==n?void 0:n.size)>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{orientation:"vertical",className:"mx-2 h-4"}),(0,a.jsx)(h.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:n.size}),(0,a.jsx)("div",{className:"hidden space-x-1 lg:flex",children:n.size>2?(0,a.jsxs)(h.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[n.size," selected"]}):r.filter(e=>n.has(e.value)).map(e=>(0,a.jsx)(h.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,a.jsx)(m.yk,{className:"w-[200px] p-0",align:"start",children:(0,a.jsxs)(p.mY,{children:[(0,a.jsx)(p.sZ,{placeholder:s}),(0,a.jsxs)(p.e8,{children:[(0,a.jsx)(p.rb,{children:"No results found."}),(0,a.jsx)(p.fu,{children:r.map(e=>{let s=n.has(e.value);return(0,a.jsxs)(p.di,{onSelect:()=>{s?n.delete(e.value):n.add(e.value);let a=Array.from(n);null==t||t.setFilterValue(a.length?a:void 0)},children:[(0,a.jsx)("div",{className:(0,u.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",s?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,a.jsx)(d.nQG,{className:(0,u.cn)("h-4 w-4")})}),e.icon&&(0,a.jsx)(e.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),(0,a.jsx)("span",{children:e.label}),(null==l?void 0:l.get(e.value))&&(0,a.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:l.get(e.value)})]},e.value)})}),n.size>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.zz,{}),(0,a.jsx)(p.fu,{children:(0,a.jsx)(p.di,{onSelect:()=>null==t?void 0:t.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}var j=s(81100),N=s(34645);function v(e){let{table:t}=e;return(0,a.jsxs)(N.h_,{children:[(0,a.jsx)(j.$F,{asChild:!0,children:(0,a.jsxs)(o.z,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[(0,a.jsx)(d.hsZ,{className:"mr-2 h-4 w-4"}),"View"]})}),(0,a.jsxs)(N.AW,{align:"end",className:"w-[150px]",children:[(0,a.jsx)(N.Ju,{children:"Toggle columns"}),(0,a.jsx)(N.VD,{}),t.getAllColumns().filter(e=>void 0!==e.accessorFn&&e.getCanHide()).map(e=>(0,a.jsx)(N.bO,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:e.id},e.id))]})]})}var b=s(82084);function y(e){var t,s;let{table:r}=e,l=r.getState().columnFilters.length>0;return(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,a.jsx)(c.I,{placeholder:"Filtrer les \xe9quipes...",value:null!==(s=null===(t=r.getColumn("name"))||void 0===t?void 0:t.getFilterValue())&&void 0!==s?s:"",onChange:e=>{var t;return null===(t=r.getColumn("name"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),r.getColumn("difficulty")&&(0,a.jsx)(g,{column:r.getColumn("difficulty"),title:"Parcours",options:b.n9}),r.getColumn("meeting_place")&&(0,a.jsx)(g,{column:r.getColumn("meeting_place"),title:"Lieu de rendez-vous",options:b.xQ}),l&&(0,a.jsxs)(o.z,{variant:"ghost",onClick:()=>r.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Supprimer",(0,a.jsx)(d.Pxu,{className:"ml-2 h-4 w-4"})]})]}),(0,a.jsx)(v,{table:r})]})}var w=s(18641);function C(e){let{table:t}=e;return(0,a.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,a.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[t.getFilteredSelectedRowModel().rows.length," of"," ",t.getFilteredRowModel().rows.length," row(s) selected."]}),(0,a.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("p",{className:"text-sm font-medium",children:"Rows per page"}),(0,a.jsxs)(w.Ph,{value:"".concat(t.getState().pagination.pageSize),onValueChange:e=>{t.setPageSize(Number(e))},children:[(0,a.jsx)(w.i4,{className:"h-8 w-[70px]",children:(0,a.jsx)(w.ki,{placeholder:t.getState().pagination.pageSize})}),(0,a.jsx)(w.Bw,{side:"top",children:[10,20,30,40,50].map(e=>(0,a.jsx)(w.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,a.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",t.getState().pagination.pageIndex+1," of"," ",t.getPageCount()]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)(o.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(0),disabled:!t.getCanPreviousPage(),children:[(0,a.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,a.jsx)(d.kRt,{className:"h-4 w-4"})]}),(0,a.jsxs)(o.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.previousPage(),disabled:!t.getCanPreviousPage(),children:[(0,a.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,a.jsx)(d.wyc,{className:"h-4 w-4"})]}),(0,a.jsxs)(o.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.nextPage(),disabled:!t.getCanNextPage(),children:[(0,a.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,a.jsx)(d.XCv,{className:"h-4 w-4"})]}),(0,a.jsxs)(o.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(t.getPageCount()-1),disabled:!t.getCanNextPage(),children:[(0,a.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,a.jsx)(d.yr4,{className:"h-4 w-4"})]})]})]})]})}var k=s(5887);function S(e){var t;let{columns:s,data:r}=e,[d,o]=l.useState({}),[c,u]=l.useState({}),[m,x]=l.useState([]),[f,h]=l.useState([]),p=(0,n.b7)({data:r,columns:s,state:{sorting:f,columnVisibility:c,rowSelection:d,columnFilters:m},enableRowSelection:!0,onRowSelectionChange:o,onSortingChange:h,onColumnFiltersChange:x,onColumnVisibilityChange:u,getCoreRowModel:(0,i.sC)(),getFilteredRowModel:(0,i.vL)(),getPaginationRowModel:(0,i.G_)(),getSortedRowModel:(0,i.tj)(),getFacetedRowModel:(0,i.o6)(),getFacetedUniqueValues:(0,i.JG)()});return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(y,{table:p}),(0,a.jsx)("div",{className:"rounded-md border",children:(0,a.jsxs)(k.iA,{children:[(0,a.jsx)(k.xD,{children:p.getHeaderGroups().map(e=>(0,a.jsx)(k.SC,{children:e.headers.map(e=>(0,a.jsx)(k.ss,{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,n.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,a.jsx)(k.RM,{children:(null===(t=p.getRowModel().rows)||void 0===t?void 0:t.length)?p.getRowModel().rows.map(e=>(0,a.jsx)(k.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,a.jsx)(k.pj,{children:(0,n.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,a.jsx)(k.SC,{children:(0,a.jsx)(k.pj,{colSpan:s.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,a.jsx)(C,{table:p})]})}var R=s(79024);function z(e){let{column:t,title:s,className:r}=e;return t.getCanSort()?(0,a.jsx)("div",{className:(0,u.cn)("flex items-center space-x-2",r),children:(0,a.jsxs)(N.h_,{children:[(0,a.jsx)(N.$F,{asChild:!0,children:(0,a.jsxs)(o.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,a.jsx)("span",{children:s}),"desc"===t.getIsSorted()?(0,a.jsx)(d.veu,{className:"ml-2 h-4 w-4"}):"asc"===t.getIsSorted()?(0,a.jsx)(d.Hf3,{className:"ml-2 h-4 w-4"}):(0,a.jsx)(d.jnn,{className:"ml-2 h-4 w-4"})]})}),(0,a.jsxs)(N.AW,{align:"start",children:[(0,a.jsxs)(N.Xi,{onClick:()=>t.toggleSorting(!1),children:[(0,a.jsx)(d.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,a.jsxs)(N.Xi,{onClick:()=>t.toggleSorting(!0),children:[(0,a.jsx)(d.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,a.jsx)(N.VD,{}),(0,a.jsxs)(N.Xi,{onClick:()=>t.toggleVisibility(!1),children:[(0,a.jsx)(d.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):(0,a.jsx)("div",{className:(0,u.cn)(r),children:s})}function V(e){let{row:t}=e,s=t.original;return(0,a.jsxs)(N.h_,{children:[(0,a.jsx)(N.$F,{asChild:!0,children:(0,a.jsxs)(o.z,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[(0,a.jsx)(d.nWS,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,a.jsxs)(N.AW,{align:"end",className:"w-[160px]",children:[(0,a.jsx)(N.Xi,{children:"Edit"}),(0,a.jsx)(N.Xi,{children:"Make a copy"}),(0,a.jsx)(N.Xi,{children:"Favorite"}),(0,a.jsx)(N.VD,{}),(0,a.jsxs)(N.Ph,{children:[(0,a.jsx)(N.kt,{children:"Parcours"}),(0,a.jsx)(N.TG,{children:(0,a.jsx)(N._x,{value:s.name,children:b.n9.map(e=>(0,a.jsx)(N.qB,{value:e.value,children:e.label},e.value))})})]}),(0,a.jsx)(N.VD,{}),(0,a.jsxs)(N.Xi,{children:["Delete",(0,a.jsx)(N.KM,{children:"⌘⌫"})]})]})]})}let _=[{id:"select",header:e=>{let{table:t}=e;return(0,a.jsx)(R.X,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all",className:"translate-y-[2px]"})},cell:e=>{let{row:t}=e;return(0,a.jsx)(R.X,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row",className:"translate-y-[2px]"})},enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Equipe"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{children:t.getValue("name")})},enableSorting:!1,enableHiding:!1},{accessorKey:"captain",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Capitaine"})},cell:e=>{let{row:t}=e,s=t.getValue("captain");return(0,a.jsxs)("div",{className:"flex space-x-2",children:[s.firstname," ",s.name]})},enableSorting:!1},{accessorKey:"second",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Co\xe9quiper"})},cell:e=>{let{row:t}=e,s=t.getValue("second");return(0,a.jsx)("div",{className:"flex space-x-2",children:s?"".concat(s.firstname," ").concat(s.name):"Aucun"})},enableSorting:!1},{accessorKey:"difficulty",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Parcours"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex space-x-2",children:(0,a.jsx)(h.C,{variant:"outline",children:(0,b.Jg)(b.n9,t.getValue("difficulty"))})})},filterFn:(e,t,s)=>s.includes(e.getValue(t))},{accessorKey:"meeting_place",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Lie de rendezvous"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex space-x-2",children:(0,a.jsx)(h.C,{variant:"outline",children:(0,b.Jg)(b.n9,t.getValue("meeting_place"))})})},filterFn:(e,t,s)=>s.includes(e.getValue(t))},{accessorKey:"validation_progress",header:e=>{let{column:t}=e;return(0,a.jsx)(z,{column:t,title:"Inscription"})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"flex w-[100px] items-center",children:(0,a.jsxs)("span",{children:[t.getValue("validation_progress"),"%"]})})},sortingFn:(e,t,s)=>e.getValue(s)-t.getValue(s)},{id:"actions",cell:e=>{let{row:t}=e;return(0,a.jsx)(V,{row:t})}}];var F=s(53832),P=s(1146),Y=s(41391),I=s(47907),Z=()=>{let{isAdmin:e}=(0,Y.a)(),{teams:t,isLoading:s}=(0,P.y)(),l=(0,I.useRouter)();return e()||l.replace("/?redirect=/admin/teams"),(0,a.jsxs)("div",{className:"flex min-h-screen w-full flex-col bg-muted/40",children:[(0,a.jsx)(F.D,{}),(0,a.jsx)("main",{className:"grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8",children:(0,a.jsxs)(r.Zb,{children:[(0,a.jsxs)(r.Ol,{children:[(0,a.jsx)(r.ll,{children:"Equipes"}),(0,a.jsx)(r.SZ,{children:"Liste des \xe9quipes enregistr\xe9es"})]}),(0,a.jsx)(r.aY,{children:t&&(0,a.jsx)(S,{data:t,columns:_})})]})})]})}},53832:function(e,t,s){"use strict";s.d(t,{D:function(){return f}});var a=s(57437),r=s(8792),l=s(12153),n=s(79744),i=s(575),d=s(34645),o=s(50326),c=s(40695),u=s(77625),m=s(41391),x=s(91806);let f=()=>{let{me:e}=(0,m.a)();function t(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{href:"#",className:"flex items-center gap-2 text-lg font-semibold md:text-base",children:[(0,a.jsx)(l.Z,{className:"h-6 w-6"}),(0,a.jsx)("span",{className:"sr-only",children:"Acme Inc"})]}),(0,a.jsx)(r.default,{href:"#",className:"text-foreground transition-colors hover:text-foreground",children:"Tableau de bord"}),(0,a.jsx)(r.default,{href:"/admin/teams",className:"text-muted-foreground transition-colors hover:text-foreground",children:"Equipes"})]})}return(0,a.jsxs)("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6",children:[(0,a.jsx)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full",children:t()}),(0,a.jsxs)(o.yo,{children:[(0,a.jsx)(o.aM,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,a.jsx)(n.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,a.jsx)(o.ue,{side:"left",children:(0,a.jsx)("nav",{className:"grid gap-6 text-lg font-medium",children:t()})})]}),(0,a.jsx)("div",{className:"flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0",children:(0,a.jsxs)("div",{className:"flex flex-row ml-auto",children:[(0,a.jsxs)(d.h_,{children:[(0,a.jsx)(d.$F,{asChild:!0,children:(0,a.jsx)(i.z,{variant:"ghost",children:(null==e?void 0:e.firstname)===void 0||(null==e?void 0:e.name)===void 0?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.O,{className:"w-24 h-6"})}):(0,a.jsx)(a.Fragment,{children:e.firstname+" "+e.name})})}),(0,a.jsx)(d.AW,{align:"end",children:(0,a.jsx)(d.Xi,{children:(0,a.jsx)(x.s,{})})})]}),(0,a.jsx)("div",{className:"w-4"}),(0,a.jsx)(c.U,{})]})})]})}},33277:function(e,t,s){"use strict";s.d(t,{C:function(){return i}});var a=s(57437);s(2265);var r=s(57742),l=s(1657);let n=(0,r.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:s,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)(n({variant:s}),t),...r})}},79024:function(e,t,s){"use strict";s.d(t,{X:function(){return d}});var a=s(57437),r=s(2265),l=s(86969),n=s(80037),i=s(1657);let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.fC,{ref:t,className:(0,i.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",s),...r,children:(0,a.jsx)(l.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(n.Z,{className:"h-4 w-4"})})})});d.displayName=l.fC.displayName},26739:function(e,t,s){"use strict";s.d(t,{di:function(){return f},e8:function(){return c},fu:function(){return m},mY:function(){return d},rb:function(){return u},sZ:function(){return o},zz:function(){return x}});var a=s(57437),r=s(2265),l=s(63124),n=s(28670),i=s(1657);s(9208);let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",s),...r})});d.displayName=l.mY.displayName;let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,a.jsx)(n.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,a.jsx)(l.mY.Input,{ref:t,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",s),...r})]})});o.displayName=l.mY.Input.displayName;let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",s),...r})});c.displayName=l.mY.List.displayName;let u=r.forwardRef((e,t)=>(0,a.jsx)(l.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=l.mY.Empty.displayName;let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",s),...r})});m.displayName=l.mY.Group.displayName;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",s),...r})});x.displayName=l.mY.Separator.displayName;let f=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...r})});f.displayName=l.mY.Item.displayName},9208:function(e,t,s){"use strict";s.d(t,{$N:function(){return h},Be:function(){return p},Vq:function(){return d},cN:function(){return f},cZ:function(){return m},fK:function(){return x},hg:function(){return o}});var a=s(57437),r=s(2265),l=s(72936),n=s(52235),i=s(1657);let d=l.fC,o=l.xz,c=l.h_;l.x8;let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r})});u.displayName=l.aV.displayName;let m=r.forwardRef((e,t)=>{let{className:s,children:r,hideClose:d,...o}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(l.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...o,children:[r,!d&&(0,a.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(n.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=l.VY.displayName;let x=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};x.displayName="DialogHeader";let f=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};f.displayName="DialogFooter";let h=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});h.displayName=l.Dx.displayName;let p=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",s),...r})});p.displayName=l.dk.displayName},22782:function(e,t,s){"use strict";s.d(t,{I:function(){return n}});var a=s(57437),r=s(2265),l=s(1657);let n=r.forwardRef((e,t)=>{let{className:s,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...n})});n.displayName="Input"},82012:function(e,t,s){"use strict";s.d(t,{J2:function(){return i},xo:function(){return d},yk:function(){return o}});var a=s(57437),r=s(2265),l=s(57427),n=s(1657);let i=l.fC,d=l.xz,o=r.forwardRef((e,t)=>{let{className:s,align:r="center",sideOffset:i=4,...d}=e;return(0,a.jsx)(l.h_,{children:(0,a.jsx)(l.VY,{ref:t,align:r,sideOffset:i,className:(0,n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...d})})});o.displayName=l.VY.displayName},18641:function(e,t,s){"use strict";s.d(t,{Bw:function(){return h},Ph:function(){return c},Ql:function(){return p},i4:function(){return m},ki:function(){return u}});var a=s(57437),r=s(2265),l=s(18178),n=s(23441),i=s(85159),d=s(80037),o=s(1657);let c=l.fC;l.ZA;let u=l.B4,m=r.forwardRef((e,t)=>{let{className:s,children:r,...i}=e;return(0,a.jsxs)(l.xz,{ref:t,className:(0,o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...i,children:[r,(0,a.jsx)(l.JO,{asChild:!0,children:(0,a.jsx)(n.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=l.xz.displayName;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.u_,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});x.displayName=l.u_.displayName;let f=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.$G,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(n.Z,{className:"h-4 w-4"})})});f.displayName=l.$G.displayName;let h=r.forwardRef((e,t)=>{let{className:s,children:r,position:n="popper",...i}=e;return(0,a.jsx)(l.h_,{children:(0,a.jsxs)(l.VY,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:n,...i,children:[(0,a.jsx)(x,{}),(0,a.jsx)(l.l_,{className:(0,o.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(f,{})]})})});h.displayName=l.VY.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.__,{ref:t,className:(0,o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",s),...r})}).displayName=l.__.displayName;let p=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(l.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.wU,{children:(0,a.jsx)(d.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(l.eT,{children:r})]})});p.displayName=l.ck.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",s),...r})}).displayName=l.Z0.displayName},5887:function(e,t,s){"use strict";s.d(t,{RM:function(){return d},SC:function(){return o},iA:function(){return n},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var a=s(57437),r=s(2265),l=s(1657);let n=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",s),...r})})});n.displayName="Table";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",s),...r})});i.displayName="TableHeader";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",s),...r})});d.displayName="TableBody",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r})}).displayName="TableFooter";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r})});o.displayName="TableRow";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...r})});c.displayName="TableHead";let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...r})});u.displayName="TableCell",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",s),...r})}).displayName="TableCaption"},1146:function(e,t,s){"use strict";s.d(t,{y:function(){return n}});var a=s(425),r=s(94505),l=s(41391);let n=()=>{let{token:e}=(0,r.u)(),{isAdmin:t}=(0,l.a)(),{data:s,isLoading:n,refetch:i}=(0,a.kAw)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:t()&&null!==e,retry:0,queryHash:"getTeams"});return{teams:s,isLoading:n,refetchTeams:i}}}},function(e){e.O(0,[422,310,50,991,701,97,935,600,456,971,69,744],function(){return e(e.s=88790)}),_N_E=e.O()}]);