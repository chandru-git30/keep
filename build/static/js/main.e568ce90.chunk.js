(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(4),r=n.n(l),o=n(7),u=n(2);n(21);var i=function(){var e=c.a.createElement("img",{src:"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png",alt:"logo"});return c.a.createElement("div",{className:"header"},e,c.a.createElement("h1",null,"Keep"))},m=n(5),s=n(12),E=n(13);var f=function(e){var t=e.onAdd,n=Object(a.useState)(!1),l=Object(u.a)(n,2),r=l[0],o=l[1],i=Object(a.useState)({title:"",content:""}),f=Object(u.a)(i,2),v=f[0],d=f[1];function p(e){var t=e.target,n=t.name,a=t.value;d(function(e){return Object(s.a)({},e,Object(m.a)({},n,a))})}return c.a.createElement("div",null,c.a.createElement("form",null,r&&c.a.createElement("input",{value:v.title,type:"text",placeholder:"Title",name:"title",onChange:p}),c.a.createElement("p",null,c.a.createElement("textarea",{value:v.content,onClick:function(){o(!0)},name:"content",placeholder:"Take a note...",onChange:p,rows:r?3:1})),c.a.createElement("button",{onClick:function(e){t(v),d({title:"",content:""});var n=Object.keys(localStorage).length;localStorage.setItem(n+1,JSON.stringify(v)),e.preventDefault()}},c.a.createElement(E.a,{size:35}))))},v=n(14),d=n.n(v),p=n(15);var g=function(e){var t=e.title,n=e.content,a=e.onDelete,l=e.id;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,t),c.a.createElement("p",null,n),c.a.createElement("button",{onClick:function(){return a(l)}},c.a.createElement(p.a,{size:25}))))};var b=function(e){var t=e.count;return c.a.createElement("div",{className:"count"},c.a.createElement("h4",null,t))};var h=function(e){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"\u24b8 Team IT"))};var O=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],r=n[1];function m(e){r(function(t){return localStorage.removeItem(e+1),Object(o.a)(t.filter(function(t,n){return n!==e}))})}return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(b,{count:0===l.length?"Empty":"Showing ".concat(l.length," Notes in Database")}),c.a.createElement(f,{onAdd:function(e){r(function(t){return[].concat(Object(o.a)(t),[e])})}}),l.map(function(e,t){return c.a.createElement(g,{key:t,id:t,title:e.title,content:e.content,onDelete:m})}),c.a.createElement(h,null))},j=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,30)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),j()}},[[16,3,2]]]);
//# sourceMappingURL=main.e568ce90.chunk.js.map