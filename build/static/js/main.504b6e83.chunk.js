(this.webpackJsonpthe_phonebook=this.webpackJsonpthe_phonebook||[]).push([[0],{20:function(e,n,t){},22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),a=t.n(r),i=t(3),o=(t(20),t(0));function s(e){var n=e.filterPeople,t=e.filterName,c=e.handleFilterNameChange;return Object(o.jsxs)("form",{onSubmit:n,children:["filter shown with:"," ",Object(o.jsx)("input",{value:t,onChange:c}),Object(o.jsx)("button",{children:"Search"})]})}function u(e){var n=e.addPerson,t=e.newName,c=e.handlePersonChange,r=e.newNumber,a=e.handleNumberChange;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:t,onChange:c})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{value:r,onChange:a})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})}function j(e){var n=e.person;return Object(o.jsxs)("p",{children:[n.name," | ",n.phone]})}function d(e){var n=e.persons,t=e.deletePerson;return Object(o.jsx)("div",{children:n.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{person:e},e.id),Object(o.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]})}))})}t(22);function l(e){var n=e.notificationSettings,t=n.type,c=n.message;n.isActive;return Object(o.jsx)("div",{className:"notification ".concat(t),children:Object(o.jsx)("p",{children:c})})}var h=t(4),b=t.n(h),f="/api/persons",m=function(){return b.a.get(f).then((function(e){return e.data}))},O=function(e){return b.a.post(f,e).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),h=j[0],b=j[1],f=Object(c.useState)(""),v=Object(i.a)(f,2),x=v[0],g=v[1],N=Object(c.useState)(""),w=Object(i.a)(N,2),C=w[0],S=w[1],P=Object(c.useState)({type:"",message:"",isActive:!1}),y=Object(i.a)(P,2),A=y[0],k=y[1];Object(c.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var D=function(e,n){k({type:e,message:n,isActive:!0}),setTimeout((function(){k({type:"",message:"",isActive:!1})}),2e3)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Phonebook"}),Object(o.jsx)(l,{notificationSettings:A}),Object(o.jsx)(s,{filterPeople:function(e){e.preventDefault();var n=t.filter((function(e){return e.name.toUpperCase().includes(C.toUpperCase())}));n.length>0?r(n):(alert("".concat(C," was not found.")),S(""))},filterName:C,handleFilterNameChange:function(e){S(e.target.value)}}),Object(o.jsx)("h2",{children:"Add New Number"}),Object(o.jsx)(u,{addPerson:function(e){e.preventDefault(),O({name:h,phone:x}).then((function(e){console.log("Return Person",e),r(t.concat(e))})),D("success","Added ".concat(h)),b(""),g("")},newName:h,handlePersonChange:function(e){b(e.target.value)},newNumber:x,handleNumberChange:function(e){g(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(d,{persons:t,deletePerson:function(e){console.log(e.id),window.confirm("Delete ".concat(e.name))&&(p(e.id).then((function(n){var c=t.filter((function(n){return n.id!==e.id}));r(c)})).catch((function(n){D("error","".concat(e.name," has already been removed from server!"))})),D("warning","".concat(e.name," was deleted from server")))}})]})},x=document.getElementById("root");a.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(v,{})}),x)}},[[42,1,2]]]);
//# sourceMappingURL=main.504b6e83.chunk.js.map