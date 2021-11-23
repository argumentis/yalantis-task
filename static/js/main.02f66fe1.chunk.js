(this["webpackJsonpyalantis-task"]=this["webpackJsonpyalantis-task"]||[]).push([[0],{10:function(e,t,s){},25:function(e,t,s){},60:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(11),r=s.n(n),a=s(5),i=s(7),l=s(3),o=s(27),u=s.n(o),d=s(6),j=s.n(d),b="UPDATE_USERS_LIST",m="UPDATE_SELECTED_LIST",p=function(e){var t=e.filter((function(e){return e.selected})).map((function(e){return e.id}));return function(e){e({type:"UPDATE_SELECTED_LIST",payload:t})}},h={usersList:[],selectedUsers:JSON.parse(localStorage.getItem("selectedUsers"))||[]};var O=Object(i.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{usersList:t.payload});case m:return localStorage.setItem("selectedUsers",JSON.stringify(t.payload)),Object(l.a)(Object(l.a)({},e),{},{selectedUsers:t.payload});default:return e}}}),f=s(28),v=s(29),y=Object(i.createStore)(O,Object(f.composeWithDevTools)(Object(i.applyMiddleware)(v.a))),x=s(31),N=s(12),L=s.n(N),E=(s(60),s(30)),S=s.n(E),g=(s(10),s(1)),U=function(e){var t=e.id,s=e.selected,c=e.title,n=e.value;return Object(g.jsxs)("div",{className:"radioButton",children:[Object(g.jsx)("input",{type:"radio",name:t,value:n,defaultChecked:s}),Object(g.jsx)("div",{children:c})]})},T=Object(a.b)(null,{updateUser:function(e,t){return function(s,c){var n=j.a.get(c(),"users.usersList",[]).map((function(s){return s.id===e?Object(l.a)(Object(l.a)({},s),{},{selected:t}):s}));s({type:"UPDATE_USERS_LIST",payload:n}),s(p(n))}}})((function(e){var t,s=e.employee,c=e.updateUser,n=[{id:s.id,title:"active",value:"true",checked:s.selected},{id:s.id,title:"not active",value:"false",checked:!s.selected}];return Object(g.jsxs)("div",{className:"listItem",children:[Object(g.jsx)("h4",{className:L()("employeeName",s.selected&&"checkedName"),children:"".concat(s.firstName," ").concat(s.lastName)}),Object(g.jsx)("div",{className:"buttonsContainer",onChange:(t=s.id,function(e){var s=e.target.value;c(t,"true"===s)}),children:n.map((function(e,t){return Object(g.jsx)(U,{id:e.id,title:e.title,value:e.value,selected:e.checked},t)}))})]})})),I=function(e){var t=e.letter,s=e.employeesList;return Object(g.jsxs)("div",{className:"lettersListItem",children:[Object(g.jsx)("h3",{className:"letter",children:t}),Object(g.jsx)("div",{className:"usersList",children:j.a.isEmpty(s)?Object(g.jsx)("p",{className:"noData",children:"No employees"}):s.map((function(e){return Object(g.jsx)(T,{employee:e},e.id)}))})]})},M="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),D=Object(a.b)((function(e){return{usersList:e.users.usersList}}),{})((function(e){var t=e.usersList,s=e.loading;return Object(g.jsxs)("div",{className:"employeesListRoot",children:[Object(g.jsx)("h2",{children:"Employees"}),s?Object(g.jsx)("div",{className:"spinnerContainer",children:Object(g.jsx)(S.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})}):Object(g.jsx)("div",{className:"lettersList",children:M.map((function(e,s){var c=t.filter((function(t){return t.firstName[0]===e}));return Object(g.jsx)(I,{letter:e,employeesList:c},s)}))})]})})),k=s(15),C=s.n(k),_=(s(25),function(e){var t,s=e.monthName,c=e.employeesInMonth;return Object(g.jsxs)("div",{className:"flexContainer",children:[Object(g.jsx)("h4",{children:s}),j.a.isEmpty(c)?Object(g.jsx)("p",{children:"No Employees"}):Object(g.jsx)("div",{className:"flexContainer",children:c.sort((t="lastName",function(e,s){return e[t]>s[t]?1:-1})).map((function(e){return Object(g.jsx)("p",{children:"".concat(e.lastName," ").concat(e.firstName," - ").concat(e.dob)},e.id)}))})]})}),A=["November","December","January","February","March","April","May","June","July","August","September","October"],J=Object(a.b)((function(e){var t=e.users;return{usersList:t.usersList,selectedUsers:t.selectedUsers}}),{})((function(e){var t=e.selectedUsers,s=e.usersList,c=void 0===s?[]:s,n=e.loading,r=c.filter((function(e){return t.includes(e.id)})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{birthdayMonth:C()(e.dob).format("MMMM"),dob:C()(e.dob).format("LL")})}));return Object(g.jsxs)("div",{className:"birthdayRoot",children:[Object(g.jsx)("h2",{children:"Employees birthday"}),Object(g.jsx)("div",{className:"flexContainer",children:j.a.isEmpty(t)||n?Object(g.jsx)("h4",{children:"Employees List is empty"}):Object(g.jsx)("div",{children:A.map((function(e){var t=r.filter((function(t){return t.birthdayMonth===e}));return Object(g.jsx)(_,{monthName:e,employeesInMonth:t},e)}))})})]})})),R=Object(a.b)(null,{getUsersList:function(){return function(e,t){return u.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(s){var c=j.a.get(s,"data",[]),n=j.a.get(t(),"users.selectedUsers",[]),r=c.map((function(e){return n.includes(e.id)?Object(l.a)(Object(l.a)({},e),{},{selected:!0}):Object(l.a)(Object(l.a)({},e),{},{selected:!1})}));return e({type:"UPDATE_USERS_LIST",payload:r}),s}))}}})((function(e){var t=e.getUsersList,s=Object(c.useState)(!0),n=Object(x.a)(s,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){return t().then((function(){return a(!1)})).catch((function(e){return alert(e)}))}),[]),Object(g.jsxs)("div",{className:L()("app",r&&"appEmptyState"),children:[Object(g.jsx)("div",{className:"employeesList",children:Object(g.jsx)(D,{loading:r})}),Object(g.jsx)("div",{className:"employeesBirthday",children:Object(g.jsx)(J,{loading:r})})]})})),P=(s(80),document.getElementById("root"));r.a.render(Object(g.jsx)(a.a,{store:y,children:Object(g.jsx)(R,{})}),P)}},[[81,1,2]]]);
//# sourceMappingURL=main.02f66fe1.chunk.js.map