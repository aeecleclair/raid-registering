"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{88835:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(57437);r(2265);var a=r(6460),l=r(24241),s=r(13415),o=r(37440),i=r(21413),d=r(89733),c=r(69081);function u(e){let{date:t,setDate:r,defaultDate:u,fromDate:m,toDate:f}=e;return(0,n.jsxs)(i.J2,{children:[(0,n.jsx)(i.xo,{asChild:!0,children:(0,n.jsxs)(d.z,{variant:"outline",className:(0,o.cn)("w-full justify-start text-left font-normal",!t&&"text-muted-foreground"),type:"button",children:[(0,n.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),t?(0,a.WU)(t,"PPP",{locale:s.fr}):(0,n.jsx)("span",{children:"S\xe9lectionner une date"})]})}),(0,n.jsx)(i.yk,{className:"w-auto p-0",children:(0,n.jsx)(c.f,{mode:"single",selected:t,onSelect:r,locale:s.fr,captionLayout:"dropdown-buttons",fromDate:null!=m?m:new Date(1900),toDate:null!=f?f:new Date,defaultMonth:u,initialFocus:!0})})]})}},36136:function(e,t,r){r.d(t,{e:function(){return p}});var n=r(57437),a=r(89733),l=r(37440),s=r(2265),o=r(38746);let i=e=>{let{setIsOpen:t,onDropAccepted:r,multiple:a=!1,maxSize:i=10485760,accept:d={"image/*":[".jpg",".jpeg",".png"],"application/pdf":[".pdf"]}}=e,[c,u]=(0,s.useState)(!1),[m,f]=(0,s.useState)(""),x=i/1e6,p=Object.values(d).map(e=>e.map(e=>e.replaceAll(".","")).join(", ")).join(", ");return(0,n.jsx)(o.ZP,{accept:d,onDropAccepted:(e,n)=>{u(!1),t(!1),r(e,n)},onDropRejected:(e,t)=>{e[0].file.size>i?f("Fichier trop lourd (max: ".concat(x,"Mo)")):f("Type de fichier non support\xe9 (support\xe9: ".concat(p,")")),u(!0)},multiple:a,maxSize:i,children:e=>{let{getRootProps:t,getInputProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)("span",{className:"text-red-600 font-medium",children:m}),(0,n.jsx)("div",{...t({className:(0,l.cn)("container flex flex-col items-center justify-center w-full h-48 border-2 ".concat(c?"border-red-600":"border-gray-300"," border-dashed rounded-lg cursor-pointer"))}),children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-x-3 mt-2 mb-2",children:[(0,n.jsxs)("span",{className:"flex items-center space-x-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),(0,n.jsxs)("span",{className:"font-medium text-gray-600",children:["Glissez et d\xe9posez votre fichier ici ou"," ",(0,n.jsx)("span",{className:"text-blue-600 underline",children:"s\xe9lectionnez un fichier"})]})]}),(0,n.jsx)("input",{...r()})]})})]})}})};var d=r(90174),c=r(66648),u=r(64701),m=r(2183),f=r(10119),x=r(80023);let p=e=>{let{setIsUploading:t,setIsOpen:r,field:l,fileType:o,documentId:p,participantId:h}=e,{uploadDocument:v,getDocument:g,data:j,setDocumentId:y,documentId:w}=(0,d.k)(),{setDocument:b}=(0,u.a)(),N=g(h,o),[_,F]=(0,s.useState)(N),[z,C]=(0,s.useState)((null==j?void 0:j.size)===void 0);return(null==N?void 0:N.size)===void 0&&w!==p&&(null==j?void 0:j.size)===void 0&&(y(l.value.id),C(!0)),(null==j?void 0:j.size)!==void 0&&z&&(b(h,o,l.value.id,j),F(j),C(!1)),(0,n.jsx)(n.Fragment,{children:(null==_?void 0:_.size)!==void 0?(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(null==_?void 0:_.type)==="application/pdf"?(0,n.jsx)(x.x,{className:"h-[400px]",children:(0,n.jsx)(f.X,{file:_,width:550})}):(0,n.jsx)(c.default,{src:URL.createObjectURL(_),alt:l.name,width:300,height:200,className:"rounded-lg w-auto max-h-[400px]"}),(0,n.jsx)(a.z,{className:"w-full",onClick:()=>{l.onChange(null),F(void 0)},children:"Modifier"})]}):(0,n.jsx)(n.Fragment,{children:p?(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,n.jsx)(m.O,{className:"w-full h-80"}),(0,n.jsx)(a.z,{className:"w-full",onClick:()=>{l.onChange(null),F(void 0)},children:"Modifier"})]}):(0,n.jsx)(i,{setIsOpen:r,onDropAccepted:(e,r)=>{let n=e[0];t(!0),v(n,e=>{l.onChange({name:n.name,id:e,type:o,updated:!0}),b(h,o,e,n),y(e),t(!1)})}})})})}},52934:function(e,t,r){r.d(t,{l:function(){return s}});var n=r(57437),a=r(93363),l=r(77209);let s=e=>{let{form:t,label:r,id:s,placeholder:o}=e;return(0,n.jsx)(a.Wi,{control:t.control,name:s,render:e=>{let{field:t}=e;return(0,n.jsx)(a.xJ,{children:(0,n.jsxs)("div",{className:"grid grid-cols-5 items-center gap-4",children:[(0,n.jsx)(a.lX,{className:"text-right",children:r}),(0,n.jsxs)("div",{className:"col-span-4",children:[(0,n.jsx)(a.zG,{}),(0,n.jsx)(a.NI,{children:(0,n.jsx)(l.I,{placeholder:o,...t})})]})]})})}})}},69081:function(e,t,r){r.d(t,{f:function(){return m}});var n=r(57437);r(2265);var a=r(70518),l=r(87592),s=r(16150),o=r(13415),i=r(37440),d=r(89733),c=r(2128),u=r(6460);function m(e){let{className:t,classNames:r,showOutsideDays:m=!0,...f}=e;return(0,n.jsx)(s._W,{showOutsideDays:m,className:(0,i.cn)("p-3",t),locale:o.fr,classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium hidden",nav:"space-x-1 flex items-center",nav_button:(0,i.cn)((0,d.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,i.cn)((0,d.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",caption_dropdowns:"flex gap-1 items-center",...r},components:{IconLeft:e=>{let{...t}=e;return(0,n.jsx)(a.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,n.jsx)(l.Z,{className:"h-4 w-4"})},Dropdown:e=>{var t,r;let{fromDate:a,fromMonth:l,fromYear:i,toDate:d,toMonth:m,toYear:f}=(0,s.kD)(),{goToMonth:x,currentMonth:p}=(0,s.HJ)();if("months"===e.name){let r=Array.from({length:12},(e,t)=>{let r=new Date(0,t);return{value:t.toString(),label:r.toLocaleString("default",{month:"long"})}});return(0,n.jsxs)(c.Ph,{value:null===(t=e.value)||void 0===t?void 0:t.toString(),onValueChange:e=>{let t=new Date(p);t.setMonth(parseInt(e)),x(t)},children:[(0,n.jsx)(c.i4,{children:(0,u.WU)(p,"MMM",{locale:o.fr})}),(0,n.jsx)(c.Bw,{children:r.map(e=>(0,n.jsx)(c.Ql,{value:e.value,children:e.label},e.value))})]})}{let t=i||(null==l?void 0:l.getFullYear())||(null==a?void 0:a.getFullYear()),s=f||(null==m?void 0:m.getFullYear())||(null==d?void 0:d.getFullYear());if(!t||!s)return(0,n.jsx)(n.Fragment,{});{let a=Array.from({length:s-t+1},(e,r)=>{let n=t+r;return{value:n.toString(),label:n.toString()}});return(0,n.jsxs)(c.Ph,{value:null===(r=e.value)||void 0===r?void 0:r.toString(),onValueChange:e=>{let t=new Date(p);t.setFullYear(parseInt(e)),x(t)},children:[(0,n.jsx)(c.i4,{children:p.getFullYear()}),(0,n.jsx)(c.Bw,{children:a.map(e=>(0,n.jsx)(c.Ql,{value:e.value,children:e.label},e.value))})]})}}}},...f})}m.displayName="Calendar"},93363:function(e,t,r){r.d(t,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},xJ:function(){return x},zG:function(){return v}});var n=r(57437),a=r(2265),l=r(71538),s=r(39343),o=r(37440),i=r(70402);let d=s.RV,c=a.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(s.Qr,{...t})})},m=()=>{let e=a.useContext(c),t=a.useContext(f),{getFieldState:r,formState:n}=(0,s.Gc)(),l=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},f=a.createContext({}),x=a.forwardRef((e,t)=>{let{className:r,...l}=e,s=a.useId();return(0,n.jsx)(f.Provider,{value:{id:s},children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...l})})});x.displayName="FormItem";let p=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:l,formItemId:s}=m();return(0,n.jsx)(i._,{ref:t,className:(0,o.cn)(l&&"text-destructive",r),htmlFor:s,...a})});p.displayName="FormLabel";let h=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:s,formDescriptionId:o,formMessageId:i}=m();return(0,n.jsx)(l.g7,{ref:t,id:s,"aria-describedby":a?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!a,...r})});h.displayName="FormControl",a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:l}=m();return(0,n.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})}).displayName="FormDescription";let v=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e,{error:s,formMessageId:i}=m(),d=s?String(null==s?void 0:s.message):a;return d?(0,n.jsx)("p",{ref:t,id:i,className:(0,o.cn)("text-sm font-medium text-destructive",r),...l,children:d}):null});v.displayName="FormMessage"},70402:function(e,t,r){r.d(t,{_:function(){return d}});var n=r(57437),a=r(2265),l=r(38364),s=r(12218),o=r(37440);let i=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,o.cn)(i(),r),...a})});d.displayName=l.f.displayName},59805:function(e,t,r){r.d(t,{u:function(){return l}});var n=r(84980),a=r(40133);let l=()=>{let{token:e,userId:t}=(0,a.a)(),{data:r,isLoading:l,refetch:s}=(0,n.THV)({headers:{Authorization:"Bearer ".concat(e)}},{enabled:null!==t,retry:0,queryHash:"getRaidInformation"}),{mutate:o,isPending:i}=(0,n.Arm)({});return{information:r,isLoading:l,refetchInformation:s,updateInformation:(t,r)=>{o({body:t,headers:{Authorization:"Bearer ".concat(e)}},{onSettled:()=>{s(),r()}})},isUpdateLoading:i}}}}]);