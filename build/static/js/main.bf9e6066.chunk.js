(this["webpackJsonpyalantis-task"]=this["webpackJsonpyalantis-task"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(7),a=n.n(c),r=(n(28),n(29),n(8)),i=n(20),u=n.n(i),o=n(21),d=n.n(o),l="GET_USERS_LIST",b=n(2);var f=Object(r.b)((function(e){return{usersList:e.users.usersList}}),{getUsersList:function(){return function(e){u.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){e({type:"GET_USERS_LIST",payload:d.a.get(t,"data",[])})})).catch((function(e){return alert(e)}))}}})((function(e){var t=e.getUsersList,n=e.usersList;return Object(s.useEffect)((function(){return t()}),[]),Object(b.jsx)("div",{className:"App",children:n.map((function(e){return Object(b.jsxs)("div",{children:[e.firstName," ",e.lastName]},e.id)}))})})),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},p=n(4),O=n(3),h={usersList:[],selectedUsers:["5e00928d91e7feaa9872ec08","5e00928df892b0c84c82db9d"]};var g=Object(p.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;if(t.type===l){var n=t.payload.map((function(t){return e.selectedUsers.includes(t.id)?Object(O.a)(Object(O.a)({},t),{},{selected:!0}):Object(O.a)(Object(O.a)({},t),{},{selected:!1})}));return Object(O.a)(Object(O.a)({},e),{},{usersList:n})}return e}}),v=n(22),L=n(23),m=Object(p.createStore)(g,Object(v.composeWithDevTools)(Object(p.applyMiddleware)(L.a))),y=document.getElementById("root");a.a.render(Object(b.jsx)(r.a,{store:m,children:Object(b.jsx)(f,{})}),y),j()}},[[57,1,2]]]);
//# sourceMappingURL=main.bf9e6066.chunk.js.map