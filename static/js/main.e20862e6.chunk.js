(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(3),i=a.n(s),r=(a(9),a(10)),l=a(11),o=a(14),d=a(12),j=a(4),b="ADD_TODO",h="REMOVE_TODO",u="DELETE_TODO";var O=a(1),p=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleChange=function(t){console.log(t.target.value),n.setState({text:t.target.value})},n.handleAdd=function(){var t;n.props.dispatch((t=n.state.text,{type:b,payload:{id:(new Date).getTime().toString(),data:t}}))},n.delete=function(){n.props.dispatch({type:u})},n.state={text:""},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.list;return Object(O.jsx)("div",{className:"parents",children:Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("span",{className:"text-white h5",children:"Add To Do \u2712"}),Object(O.jsxs)("div",{className:"main-input ",children:[Object(O.jsx)("input",{value:this.state.text,onChange:this.handleChange,className:"form-control",type:"text",placeholder:"\u270d Type Here"}),Object(O.jsx)("i",{onClick:this.handleAdd,className:"fas fa-plus-circle"})]}),e.map((function(e){return Object(O.jsxs)("div",{className:"list-container",children:[Object(O.jsx)("span",{className:"h5",children:e.data}),Object(O.jsx)("i",{onClick:function(){return t.props.dispatch((a=e.id,{type:h,id:a}));var a},className:"far fa-times-circle ml-1"})]},e.id)})),Object(O.jsx)("button",{type:"button",class:"btn btn-outline-warning mt-5",onClick:this.delete,children:"Remove all"}),Object(O.jsxs)("a",{href:"https://github.com/arbaztalk2me/",className:"btn btn-outline-danger mt-5",children:["Source Code ",Object(O.jsx)("i",{class:"fab fa-github"})]})]})})}}]),a}(c.a.Component);var m=Object(j.b)((function(t){return{list:t.todo.list}}))(p),f=a(5),v=a(13),x=a(2),g={list:[]};var y=Object(f.a)({todo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:var a=e.payload,n=a.id,c=a.data;return Object(x.a)(Object(x.a)({},t),{},{list:[].concat(Object(v.a)(t.list),[{data:c,id:n}])});case u:return Object(x.a)(Object(x.a)({},t),{},{list:[]});case h:var s=t.list.filter((function(t){return t.id!==e.id}));return Object(x.a)(Object(x.a)({},t),{},{list:s});default:return t}}}),N=Object(f.b)(y);console.log(N.getState()),i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(j.a,{store:N,children:Object(O.jsx)(m,{})})}),document.getElementById("root"))},9:function(t,e,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.e20862e6.chunk.js.map