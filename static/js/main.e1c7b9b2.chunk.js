(this["webpackJsonpprojekt-books"]=this["webpackJsonpprojekt-books"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),a=c.n(s),r=(c(13),c(0));function o(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsxs)("div",{className:"footer-info",children:[Object(r.jsxs)("span",{className:"footer-copy",children:["\xa9 ",(new Date).getFullYear()," Copy text"]}),Object(r.jsx)("a",{className:"footer-href",href:"https://github.com/Viktor-libr/react-shop",children:"repo"})]})})}function l(){return Object(r.jsx)("nav",{className:"brown",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"/",className:"brand-logo",children:"Shop App"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/Viktor-libr/react-shop",children:"Repo"})})})]})})}var j=c(8),d=c(2),u=c(3);function b(e){var t=e.name,c=void 0===t?"":t,i=e.closeAlert,s=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var e=setTimeout(s,3e3);return function(){clearTimeout(e)}}),[c]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"]})})}function O(e){var t=e.name,c=e.quantity,n=e.prise,i=e.id,s=e.deleteOrder,a=void 0===s?Function.prototype:s,o=e.handleQuantity,l=void 0===o?Function.prototype:o;return Object(r.jsxs)("li",{className:"collection-item item-collection",children:[t,":",Object(r.jsxs)("span",{className:"item-collection-arrow",children:[Object(r.jsx)("i",{className:"material-icons close-busket",onClick:function(){return l(i,"minus")},children:"arrow_back"}),Object(r.jsx)("i",{className:"collection-arrow",children:c})," ",Object(r.jsx)("i",{className:"material-icons close-busket",onClick:function(){return l(i,"plus")},children:"arrow_forward"})]}),": ",n*c,Object(r.jsx)("span",{className:"secondary-content close-busket",children:Object(r.jsx)("i",{className:"material-icons close-busket",onClick:function(){return a(i)},children:"delete_forever"})})]})}function h(e){var t=e.order,c=e.handleVisibleBusket,n=e.deleteOrder,i=void 0===n?Function.prototype:n,s=e.handleQuantity,a=void 0===s?Function.prototype:s,o=t.reduce((function(e,t){return e+t.prise*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection busket-list",children:[Object(r.jsxs)("li",{className:"collection-item active",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(r.jsx)("span",{className:"secondary-content close-busket",onClick:c,children:Object(r.jsx)("i",{className:"material-icons",children:"clear"})})]}),t.length?t.map((function(e){return Object(r.jsx)(O,Object(d.a)(Object(d.a)({},e),{},{handleQuantity:a,deleteOrder:i}),e.id)})):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection summary-prise",children:["\u0421\u0443\u043c\u0430: ",Object(r.jsx)("span",{className:"sum-prise-total",children:o})]})]})}function m(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,i=Object(u.a)(e.displayAssets,1)[0].full_background,s=e.price.regularPrice,a=e.handleOrder,o=void 0===a?Function.prototype:a;return Object(r.jsxs)("div",{className:"card",id:t,children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:i,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action-my",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return o({prise:s,name:c,id:t})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(r.jsxs)("span",{className:"right",style:{fontSize:"14px",fontWeight:"bold",marginLeft:"15px"},children:[s," \u0443.\u0435."]})]})]})}function p(e){var t=e.goods,c=e.handleOrder,n=void 0===c?Function.prototype:c;return Object(r.jsx)("div",{className:"stores",children:t.map((function(e){return Object(r.jsx)(m,Object(d.a)(Object(d.a)({},e),{},{handleOrder:n}),e.mainId)}))})}function f(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}function x(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleVisibleBusket,i=void 0===n?Function.prototype:n;return Object(r.jsxs)("div",{className:"cart green lighten-4",onClick:i,children:[Object(r.jsx)("i",{className:"material-icons",children:"add_shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})}function v(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!0),a=Object(u.a)(s,2),o=a[0],l=a[1],O=Object(n.useState)([]),m=Object(u.a)(O,2),v=m[0],N=m[1],y=Object(n.useState)(!1),k=Object(u.a)(y,2),g=k[0],q=k[1],w=Object(n.useState)(""),F=Object(u.a)(w,2),S=F[0],C=F[1],V=function(){q(!g)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"ced9352c-7b724746-e3c9ee98-eea29fc7"}}).then((function(e){return e.json()})).then((function(e){e.shop&&i(e.shop),l(!1)})).catch((function(e){return console.error(e)}))}),[]),Object(r.jsxs)("div",{className:"container content",children:[Object(r.jsx)(x,{quantity:v.length,handleVisibleBusket:V}),o?Object(r.jsx)(f,{}):Object(r.jsx)(p,{handleOrder:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(j.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}C(e.name)},goods:c}),g?Object(r.jsx)(h,{handleQuantity:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("plus"===t){var c=v.map((function(t){return e===t.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}):t}));N(c)}else if("minus"===t){var n=v.map((function(t){return e===t.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity>0?t.quantity-1:0}):t}));N(n)}},deleteOrder:function(e){N(v.filter((function(t){return t.id!==e})))},handleVisibleBusket:V,order:v}):null,S&&Object(r.jsx)(b,{closeAlert:function(){C("")},name:S})]})}var N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(v,{}),Object(r.jsx)(o,{})]})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e1c7b9b2.chunk.js.map