(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(2),a=n(1),r=(n(12),n(13),n(7)),i=(n(14),"/posts"),u=function(t,e){return fetch("".concat("https://mate.academy/students-api").concat(t),e).then((function(t){if(!t.ok)throw new Error("".concat(t.status,"-").concat(t.statusText));return t.json()}))},l=function(t){var e=0!==t?"".concat(i,"?userId=").concat(t):i;return u(e)},j=n(0),m=function(t){var e=t.currentId,n=t.openPost,c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(a.useEffect)((function(){l(e).then((function(t){return u(t)}))}),[]),Object(a.useEffect)((function(){l(e).then((function(t){return u(t)}))}),[e]),Object(j.jsxs)("div",{className:"PostsList",children:[Object(j.jsx)("h2",{children:"Posts:"}),Object(j.jsx)("ul",{className:"PostsList__list",children:i.map((function(t){return Object(j.jsxs)("li",{className:"PostsList__item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),Object(j.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(e){var c=e.nativeEvent.target;if(c.classList.contains("button--active"))n(null),c.classList.remove("button--active"),c.innerText="Open";else{var s=Array.from(document.querySelectorAll(".PostsList__button"));Object(r.a)(s).forEach((function(t){t.classList.remove("button--active"),t.textContent="Open"})),c.classList.add("button--active"),c.innerText="Close",n(t.id)}},children:"Open"})]},t.id)}))})]})},b=(n(16),function(t){var e=t.postId,n=t.newListComments,c=Object(a.useState)(""),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(""),m=Object(o.a)(l,2),b=m[0],d=m[1],O=Object(a.useState)(""),f=Object(o.a)(O,2),h=f[0],p=f[1],x=Object(a.useState)(!1),_=Object(o.a)(x,2),v=_[0],N=_[1],P=Object(a.useState)(!1),y=Object(o.a)(P,2),C=y[0],S=y[1],w=Object(a.useState)(!1),g=Object(o.a)(w,2),E=g[0],L=g[1],A=function(t){t(!0)},I=function(t){t(!1)},D=function(t,e){e(t.target.value)},F=function(t){var c,s;t.preventDefault(),!v&&!C&&!E&&r&&h&&b&&(c="/comments",s={postId:e,name:r,email:b,body:h},u(c,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(s)})).then((function(){return n()})),i(""),d(""),p("")};return Object(j.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){return F(t)},children:[Object(j.jsxs)("div",{className:"form-field",children:[v&&Object(j.jsx)("p",{className:"NewCommentForm__input-error",children:"Please input correct name"}),Object(j.jsx)("input",{type:"text",name:"name",value:r,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){return D(t,i)},onBlur:function(){new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401\u0456\u0406\u0457\u0407']+$").test(r)?I(N):A(N)}})]}),Object(j.jsxs)("div",{className:"form-field",children:[C&&Object(j.jsx)("p",{className:"NewCommentForm__input-error",children:"Please input correct email"}),Object(j.jsx)("input",{type:"text",name:"email",value:b,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){return D(t,d)},onBlur:function(){return b.includes("@")?I(S):A(S)}})]}),Object(j.jsxs)("div",{className:"form-field",children:[E&&Object(j.jsx)("p",{className:"NewCommentForm__input-error",children:"Please input your comment"}),Object(j.jsx)("textarea",{name:"body",value:h,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){return D(t,p)},onBlur:function(){return h.length<3?A(L):I(L)}})]}),Object(j.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),d=(n(17),function(t){var e=t.selectedPostId,n=Object(a.useState)(),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),m=l[0],d=l[1],O=Object(a.useState)(!1),f=Object(o.a)(O,2),h=f[0],p=f[1],x=function(){(function(t){var e="/comments?postId=".concat(t);return u(e)})(e).then((function(t){return d(t)}))};return Object(a.useEffect)((function(){(function(t){var e="/posts/".concat(t);return u(e)})(e).then((function(t){return r(t)}))}),[e]),Object(a.useEffect)((function(){x()}),[e]),Object(j.jsxs)("div",{className:"PostDetails",children:[Object(j.jsx)("h2",{children:"Post details:"}),Object(j.jsx)("section",{className:"PostDetails__post",children:Object(j.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),Object(j.jsxs)("section",{className:"PostDetails__comments",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__button button",disabled:0===m.length,onClick:function(t){var e=t.target;h?(e.innerText="Show ".concat(m.length," comments"),p((function(t){return!t}))):(e.innerText=" Hide ".concat(m.length," comments"),p((function(t){return!t})))},children:" Show ".concat(m.length," comments")}),h&&Object(j.jsx)("ul",{className:"PostDetails__list",children:m.map((function(t){return Object(j.jsxs)("li",{className:"PostDetails__list-item",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var e;(e="/comments/".concat(t.id),u(e,{method:"DELETE"})).then((function(){return x()}))},children:"X"}),Object(j.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(j.jsx)(b,{postId:null===s||void 0===s?void 0:s.id,newListComments:x})})})]})}),O=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),i=r[0],l=r[1],b=Object(a.useState)(null),O=Object(o.a)(b,2),f=O[0],h=O[1];Object(a.useEffect)((function(){(function(t){var e=t?"/users?username=".concat(t):"/users";return u(e)})().then((function(t){return c(t.slice(0,10))}))}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App__header",children:Object(j.jsxs)("label",{htmlFor:"selectUsers",children:["Select a user: \xa0",Object(j.jsxs)("select",{className:"App__user-selector",id:"selectUsers",onChange:function(t){return l(+t.target.value)},children:[Object(j.jsx)("option",{value:0,children:"All users"}),n.map((function(t){return Object(j.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),Object(j.jsxs)("main",{className:"App__main",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(m,{currentId:i,openPost:function(t){h(t)}})}),Object(j.jsx)("div",{className:"App__content",children:f&&Object(j.jsx)(d,{selectedPostId:f})})]})]})};s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.fedb4261.chunk.js.map