(this["webpackJsonptodos-react"]=this["webpackJsonptodos-react"]||[]).push([[0],{36:function(e,t,o){},37:function(e,t,o){},38:function(e,t,o){},43:function(e,t,o){},44:function(e,t,o){},45:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(12),a=o.n(c),s=(o(36),o(26)),l=o(25),r=o(8),d=(o(37),o(48)),i=o(47),u=o(49),j=o(31),b=o(28),h=o(29),m=o(52),f=o(51),p=o(30),O=o(50),x=(o(38),o(6));function v(e){var t=Object(n.useState)(),o=Object(r.a)(t,2),c=o[0],a=o[1];return Object(x.jsxs)(i.a,{className:"todoitem-row",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)},children:[Object(x.jsx)(O.a.Check,{className:e.todo.completed?"todoItem-checkbox checked todoitem-row":"todoItem-checkbox todoitem-row",type:"checkbox",checked:e.todo.completed,onChange:function(){return e.handleChangeProps(e.todo.id)},label:e.todo.title}),Object(x.jsx)("button",{value:c,className:c?"delete-todoItem-btn visible":"delete-todoItem-btn hidden",onClick:function(){e.todo.completed?e.deleteTodoProps(e.todo.id):e.handleShow(e.todo.id)},children:"x"})]})}o(43);function C(e){return Object(x.jsx)(f.a,{responsive:!0,className:"transparet-element",children:e.todos.map((function(t){return Object(x.jsx)(p.a,{responsive:!0,className:"transparet-element",children:Object(x.jsx)(v,{responsive:!0,className:"transparet-element",todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,handleShow:e.handleShow},t.id)},t.id)}))})}o(44);function N(e){var t=Object(n.useState)(""),o=Object(r.a)(t,2),c=o[0],a=o[1];return Object(x.jsx)(O.a,{className:"todo-form",onSubmit:function(t){return function(e,t){e.preventDefault(),""!==c&&t.addTodoProps(c),a("")}(t,e)},children:Object(x.jsx)(O.a.Control,{type:"text",placeholder:"What's next?",value:c,onChange:function(e){return function(e){e.preventDefault(),a(e.target.value)}(e)}})})}var g=o(18);var k=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),o=t[0],c=t[1],a=Object(n.useState)(0),f=Object(r.a)(a,2),p=f[0],O=f[1],v=Object(n.useState)("All"),k=Object(r.a)(v,2),S=k[0],P=k[1],w=Object(n.useState)(!1),T=Object(r.a)(w,2),A=T[0],y=T[1],I=Object(n.useState)(),D=Object(r.a)(I,2),F=D[0],B=D[1],M=function(e){var t,n=Object(s.a)(o);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.id!==e||a.completed||O(p-1)}}catch(l){n.e(l)}finally{n.f()}c(o.filter((function(t){return t.id!==e})))},J=function(){return y(!1)};return Object(x.jsxs)(d.a,{className:"app-todos",children:[Object(x.jsx)("h1",{className:"header-todo",children:"Todos"}),Object(x.jsx)(N,{addTodoProps:function(e){c(o.concat({title:e,id:"_"+Math.random().toString(36).substr(2,9),completed:!1})),O(p+1)}}),o.length>0?Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{todos:"All"===S?o:"Completed"===S?o.filter((function(e){return e.completed})):o.filter((function(e){return!e.completed})),setTodos:c,handleChangeProps:function(e){c(o.map((function(t){return t.id===e?(t.completed?O(p+1):O(p-1),Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed})):t})))},deleteTodoProps:M,handleShow:function(e){B(e),y(!0)}}),Object(x.jsxs)(i.a,{className:"bottom-row",children:[Object(x.jsxs)("div",{className:"open-todos",children:[p," items left"]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsx)("button",{className:"All"===S?"button-filter marked":"button-filter",onClick:function(){return P("All")},children:"All"}),Object(x.jsx)("button",{className:"Active"===S?"button-filter marked":"button-filter",onClick:function(){return P("Active")},children:"Active"}),Object(x.jsx)("button",{className:"Completed"===S?"button-filter marked":"button-filter",onClick:function(){return P("Completed")},children:"Completed"})]})]})]}):"",Object(x.jsxs)(u.a,{show:A,onHide:J,className:"delete-modal",children:[Object(x.jsx)(g.a,{closeButton:!0,children:Object(x.jsx)(j.a,{children:"Attention Please!"})}),Object(x.jsx)(b.a,{children:"you going to remove a open todo, are you sure?"}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(m.a,{className:"modal-delete-button",onClick:J,children:"No, Don't delete!"}),Object(x.jsx)(m.a,{className:"modal-delete-button",onClick:function(){M(F),B(),y(!1)},children:"Yes, Delete"})]})]})]})},S=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,53)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),n(e),c(e),a(e),s(e)}))};a.a.render(Object(x.jsx)(k,{}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.db7feb01.chunk.js.map