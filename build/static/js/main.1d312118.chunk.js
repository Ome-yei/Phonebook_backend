(this.webpackJsonpthe_phonebook=this.webpackJsonpthe_phonebook||[]).push([[0],{20:function(e,n,t){},22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),o=t.n(r),a=t(3),i=(t(20),t(0));function s(e){var n=e.filterPeople,t=e.filterName,c=e.handleFilterNameChange;return Object(i.jsxs)("form",{onSubmit:n,children:["filter shown with:"," ",Object(i.jsx)("input",{value:t,onChange:c}),Object(i.jsx)("button",{children:"Search"})]})}function u(e){var n=e.addPerson,t=e.newName,c=e.handlePersonChange,r=e.newNumber,o=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})}function d(e){var n=e.person;return Object(i.jsxs)("p",{children:[n.name," | ",n.phone]})}function j(e){var n=e.persons,t=e.deletePerson;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{person:e},e.id),Object(i.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]})}))})}t(22);function l(e){var n=e.notificationSettings,t=n.type,c=n.message;n.isActive;return Object(i.jsx)("div",{className:"notification ".concat(t),children:Object(i.jsx)("p",{children:c})})}var h=t(4),f=t.n(h),b="/api/persons",m=function(){return f.a.get(b).then((function(e){return e.data}))},p=function(e){return f.a.post(b,e).then((function(e){return e.data}))},O=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},x=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),d=Object(a.a)(o,2),h=d[0],f=d[1],b=Object(c.useState)(""),x=Object(a.a)(b,2),g=x[0],N=x[1],w=Object(c.useState)(""),C=Object(a.a)(w,2),P=C[0],S=C[1],y=Object(c.useState)({type:"",message:"",isActive:!1}),A=Object(a.a)(y,2),k=A[0],D=A[1];Object(c.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var E=function(){var e=t.find((function(e){return e.name===h}));return e||!1},F=function(e,n){D({type:e,message:n,isActive:!0}),setTimeout((function(){D({type:"",message:"",isActive:!1})}),2e3)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(l,{notificationSettings:k}),Object(i.jsx)(s,{filterPeople:function(e){e.preventDefault();var n=t.filter((function(e){return e.name.toUpperCase().includes(P.toUpperCase())}));n.length>0?r(n):(alert("".concat(P," was not found.")),S(""))},filterName:P,handleFilterNameChange:function(e){S(e.target.value)}}),Object(i.jsx)("h2",{children:"Add New Number"}),Object(i.jsx)(u,{addPerson:function(e){e.preventDefault();var n=E();if(n){var c={name:n.name,phone:g};v(n.id,c).then((function(e){console.log("Return Person",e),r(t.map((function(t){return t.id!==n.id?t:e})))}))}else{p({name:h,phone:g}).then((function(e){console.log("Return Person",e),r(t.concat(e))}))}F("success","Added ".concat(h)),f(""),N("")},newName:h,handlePersonChange:function(e){f(e.target.value)},newNumber:g,handleNumberChange:function(e){N(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(j,{persons:t,deletePerson:function(e){console.log(e.id),window.confirm("Delete ".concat(e.name))&&(O(e.id).then((function(n){var c=t.filter((function(n){return n.id!==e.id}));r(c)})).catch((function(n){F("error","".concat(e.name," has already been removed from server!"))})),F("warning","".concat(e.name," was deleted from server")))}})]})},g=document.getElementById("root");o.a.render(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(x,{})}),g)}},[[42,1,2]]]);
//# sourceMappingURL=main.1d312118.chunk.js.map