(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(10),r=n.n(o),i=(n(9),n(13)),c=n(3),l=n.p+"static/media/header-logo.bad0f45a.svg",u=n(2),d=n(5),m=n(0);var b=function(e){var t=Object(u.g)();return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e"}),Object(m.jsx)("div",{className:"header__auth",children:e.isLoggedIn?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"header__email",children:e.currentUserEmail}),Object(m.jsx)(d.b,{to:"/sign-in",className:"header__link",onClick:function(){localStorage.removeItem("jwt"),e.handleLogout(),t("/sign-in")},children:" \u0412\u044b\u0439\u0442\u0438 "})]}):Object(m.jsxs)(m.Fragment,{children:["/sign-up"===window.location.pathname&&Object(m.jsx)(d.b,{to:"/sign-in",className:"header__link",children:" \u0412\u043e\u0439\u0442\u0438 "}),"/sign-in"===window.location.pathname&&Object(m.jsx)(d.b,{to:"/sign-up",className:"header__link",children:" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f "})]})})]})},p=s.a.createContext();var h=function(e){var t=s.a.useContext(p),n=e.card.owner._id===t._id?"element__basket-button":"element__basket-button element__basket-button_hidden",a=e.card.likes.some((function(e){return e._id===t._id}))?"element__like-button element__like-button_active":"element__like-button";return Object(m.jsxs)("article",{className:"element",children:[Object(m.jsx)("button",{className:n,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(m.jsx)("img",{className:"element__photo",src:e.card.link,alt:e.card.name,onClick:function(){e.handleClick(e.card)}}),Object(m.jsxs)("div",{className:"element__text-block",children:[Object(m.jsx)("h2",{className:"element__title",children:e.card.name}),Object(m.jsxs)("div",{className:"element__like-section",children:[Object(m.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(m.jsx)("span",{className:"element__like-count",children:e.card.likes.length})]})]})]})};var j=function(e){var t=s.a.useContext(p);return Object(m.jsxs)("main",{children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsxs)("div",{className:"profile__user-block",children:[Object(m.jsxs)("div",{className:"profile__photo-block",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(m.jsx)("img",{className:"profile__photo",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(m.jsx)("div",{className:"profile__photo-overlay",onClick:e.onEditAvatar})]}),Object(m.jsxs)("div",{className:"profile__text-info",children:[Object(m.jsx)("h1",{className:"profile__name",children:t.name}),Object(m.jsx)("button",{className:"profile__edit-button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile}),Object(m.jsx)("p",{className:"profile__description",children:t.about})]})]}),Object(m.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",onClick:e.onAddPlace})]}),Object(m.jsx)("section",{className:"elements",children:e.cards.map((function(t,n){return Object(m.jsx)(h,{card:t,handleClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},n)}))})]})};var f=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){var t=e.isOpen?"popup popup_active":"popup";return Object(m.jsxs)("div",{className:t,id:"viewPhoto",onClick:e.closeByOverlay,children:[Object(m.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(m.jsx)("img",{className:"popup__photo",src:e.card.link,alt:e.card.name}),Object(m.jsx)("h3",{className:"popup__photo-caption",children:e.card.name})]})},x=n(11),g=n(12),v="https://api.onemoreproject.nomoredomains.rocks",_={baseRoute:v,headers:{"Content-Type":"application/json"}},y=new(function(){function e(t){Object(x.a)(this,e),this._params=t,this._queryParams={},this._queryParams.headers=this._params.headers}return Object(g.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._params.baseRoute,"/cards"),this._queryParams).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._params.baseRoute,"/users/me"),this._queryParams).then((function(t){return e._getResponseData(t)}))}},{key:"patchUserInfo",value:function(e,t){var n=this,a={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({name:e,about:t})};return fetch("".concat(this._params.baseRoute,"/users/me"),a).then((function(e){return n._getResponseData(e)}))}},{key:"patchUserPhoto",value:function(e){var t=this,n={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({avatar:e})};return fetch("".concat(this._params.baseRoute,"/users/me/avatar"),n).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this,a={method:"POST",headers:this._queryParams.headers,body:JSON.stringify({name:e,link:t})};return fetch("".concat(this._params.baseRoute,"/cards"),a).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this,n={method:"DELETE",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/").concat(e),n).then((function(e){return t._getResponseData(e)}))}},{key:"handleLikeButton",value:function(e,t){var n=this;if(t){var a={method:"DELETE",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(e),a).then((function(e){return n._getResponseData(e)}))}var s={method:"PUT",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(e),s).then((function(e){return n._getResponseData(e)}))}}]),e}())(_);var A=function(e){var t=e.isOpen?"popup popup_active":"popup";return Object(m.jsxs)("div",{className:t,id:e.name,onClick:e.closeByOverlay,children:[Object(m.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("h2",{className:"popup__title",children:e.title}),Object(m.jsxs)("form",{className:"form",name:"edit".concat(e.name),onSubmit:e.onSubmit,children:[e.children,Object(m.jsx)("button",{className:"form__submit-button",type:"submit",children:e.button})]})]})]})};var C=function(e){var t=s.a.useState(""),n=Object(c.a)(t,2),a=n[0],o=n[1],r=s.a.useState(""),i=Object(c.a)(r,2),l=i[0],u=i[1],d=s.a.useContext(p);return s.a.useEffect((function(){o(d.name),u(d.about)}),[d,e.isOpen]),Object(m.jsxs)(A,{name:"profileForm",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,closeByOverlay:e.closeByOverlay,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(a,l)},children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"name-input",required:!0,className:"form__input-field",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:a||"",onChange:function(e){o(e.target.value)}}),Object(m.jsx)("span",{className:"name-input-error form__input-error"})]}),Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"description-input",required:!0,className:"form__input-field",type:"text",name:"description",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",value:l||"",onChange:function(e){u(e.target.value)}}),Object(m.jsx)("span",{className:"description-input-error form__input-error"})]})]})};var N=function(e){var t=s.a.useRef();return Object(m.jsx)(A,{name:"profileImageForm",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,closeByOverlay:e.closeByOverlay,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"profile-image-url-input",required:!0,className:"form__input-field",type:"url",name:"photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t}),Object(m.jsx)("span",{className:"profile-image-url-input-error form__input-error"})]})})};var k=function(e){var t=s.a.useRef(),n=s.a.useRef();return Object(m.jsxs)(A,{name:"addCardForm",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,closeByOverlay:e.closeByOverlay,onSubmit:function(a){a.preventDefault(),e.addCard(t.current.value,n.current.value)},children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"title-input",required:!0,className:"form__input-field",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"3",maxLength:"30",ref:t}),Object(m.jsx)("span",{className:"title-input-error form__input-error"})]}),Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"url-input",required:!0,className:"form__input-field",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:n}),Object(m.jsx)("span",{className:"url-input-error form__input-error"})]})]})};var I=function(e){var t=e.children,n=e.redirectTo;return e.loggedIn?t:Object(m.jsx)(u.a,{to:n})},L={Accept:"application/json","Content-Type":"application/json"};var T=function(e){var t=s.a.useState(""),n=Object(c.a)(t,2),a=n[0],o=n[1],r=s.a.useState(""),i=Object(c.a)(r,2),l=i[0],u=i[1];return Object(m.jsxs)("div",{className:"form__container",children:[Object(m.jsx)("h2",{className:"form__title",children:e.title}),Object(m.jsxs)("form",{className:"form",name:"".concat(e.name,"form"),noValidate:!0,onSubmit:function(t){t.preventDefault(),e.onSubmit(a,l)},children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"email-input",required:!0,className:"form__input-field form__input-field_white",type:"email",name:"email",placeholder:"email",minLength:"4",maxLength:"40",value:a,onChange:function(e){o(e.target.value)}}),Object(m.jsx)("span",{className:"email-input-error form__input-error"})]}),Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{id:"password-input",required:!0,className:"form__input-field form__input-field_white",type:"password",name:"password",placeholder:"password",minLength:"8",maxLength:"200",value:l,onChange:function(e){u(e.target.value)}}),Object(m.jsx)("span",{className:"password-input-error form__input-error"})]}),Object(m.jsx)("button",{className:"form__submit-button form__submit-button_white",type:"submit",children:e.button}),e.isSignUp&&Object(m.jsx)(d.b,{to:"/sign-in",className:"form__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})};var B=function(e){var t=Object(u.g)();return Object(m.jsx)(T,{name:"SignUp",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isSignUp:!0,onSubmit:function(n,a){(function(e,t){return fetch("".concat(v,"/signup"),{method:"POST",headers:L,body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){return e.error?{error:e.error}:e.message?{error:e.message}:{email:e.data.email}}))})(n,a).then((function(n){n.error?e.handleInfoTooltip(!1,n.error):n.email?(e.handleInfoTooltip(!0,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),t("/sign-in")):e.handleInfoTooltip(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")})).catch((function(t){console.error(t),e.handleInfoTooltip(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))}})};var E=function(e){var t=Object(u.g)();return Object(m.jsx)(T,{name:"SignIn",title:"\u0412\u0445\u043e\u0434",button:"\u0412\u043e\u0439\u0442\u0438",isSignUp:!1,onSubmit:function(n,a){(function(e,t){return fetch("".concat(v,"/signin"),{method:"POST",headers:L,body:JSON.stringify({email:e,password:t})}).then((function(e){return 200===e.status?e.json():401===e.status?{error:"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}:400===e.status?{error:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u043b\u0438 \u043f\u043e\u043b\u044f 'email' \u0438\u043b\u0438 '\u043f\u0430\u0440\u043e\u043b\u044c'"}:void 0}))})(n,a).then((function(n){n.error&&e.handleInfoTooltip(!1,n.error),n.token&&(e.handleLogin(),t("/"))})).catch((function(){e.handleInfoTooltip(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))}})};var S=function(e){var t=e.isOpen?"popup popup_active":"popup",n=e.isSuccess?"data:image/png;base64,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":"data:image/png;base64,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";return Object(m.jsxs)("div",{className:t,id:"InfoTooltip",onClick:e.closeByOverlay,children:[Object(m.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(m.jsx)("div",{className:"popup__container",children:Object(m.jsxs)("div",{className:"popup__info",children:[Object(m.jsx)("img",{className:"popup__logo",src:n,alt:"\u041b\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430"}),Object(m.jsx)("span",{className:"popup__message",children:e.message})]})})]})};var W=function(){var e=s.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=s.a.useState(!1),r=Object(c.a)(o,2),l=r[0],d=r[1],h=s.a.useState(!1),x=Object(c.a)(h,2),g=x[0],_=x[1],A=s.a.useState({}),L=Object(c.a)(A,2),T=L[0],W=L[1],w=s.a.useState(!1),G=Object(c.a)(w,2),V=G[0],P=G[1],H=s.a.useState({}),R=Object(c.a)(H,2),Q=R[0],U=R[1],q=s.a.useState([]),D=Object(c.a)(q,2),F=D[0],Y=D[1],Z=s.a.useState(!1),M=Object(c.a)(Z,2),z=M[0],K=M[1],J=s.a.useState(!1),X=Object(c.a)(J,2),$=X[0],ee=X[1],te=s.a.useState(!1),ne=Object(c.a)(te,2),ae=ne[0],se=ne[1],oe=s.a.useState(""),re=Object(c.a)(oe,2),ie=re[0],ce=re[1],le=s.a.useState(""),ue=Object(c.a)(le,2),de=ue[0],me=ue[1],be=Object(u.g)();function pe(e){e.target===e.currentTarget&&he()}function he(){a(!1),d(!1),_(!1),P(!1),ee(!1)}function je(e,t){ee(!0),se(e),ce(t)}return s.a.useEffect((function(){y.getInitialCards().then((function(e){Y(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){y.getUserInfo().then((function(e){U({name:e.name,about:e.about,avatar:e.avatar,_id:e._id})})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(v,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){return e}))).then((function(e){e&&(me(e.data.email),K(!0),be("/"))})).catch((function(e){console.error(e)}))}),[z,me,K,be]),Object(m.jsx)(p.Provider,{value:Q,children:Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)(b,{isLoggedIn:z,currentUserEmail:de,handleLogout:function(){K(!1)}}),Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{path:"/",element:Object(m.jsx)(I,{redirectTo:"./sign-up",loggedIn:z,children:Object(m.jsx)(j,{onEditAvatar:function(){a(!0)},onEditProfile:function(){d(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){W(e),P(!0)},cards:F,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Q._id}));y.handleLikeButton(e._id,t).then((function(t){Y((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(){Y(F.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))}})})}),Object(m.jsx)(u.b,{path:"/sign-up",element:Object(m.jsx)(B,{handleInfoTooltip:je})}),Object(m.jsx)(u.b,{path:"/sign-in",element:Object(m.jsx)(E,{handleLogin:function(){K(!0)},handleInfoTooltip:je})})]}),Object(m.jsx)(f,{}),Object(m.jsx)(N,{isOpen:n,onClose:he,closeByOverlay:pe,onUpdateAvatar:function(e){y.patchUserPhoto(e).then((function(e){U({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),he()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(C,{isOpen:l,onClose:he,closeByOverlay:pe,onUpdateUser:function(e,t){y.patchUserInfo(e,t).then((function(e){U({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),he()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(k,{isOpen:g,onClose:he,closeByOverlay:pe,addCard:function(e,t){y.addNewCard(e,t).then((function(e){Y([e].concat(Object(i.a)(F))),he()})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(O,{card:T,isOpen:V,onClose:he,closeByOverlay:pe}),Object(m.jsx)(S,{isOpen:$,isSuccess:ae,onClose:he,closeByOverlay:pe,message:ie})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(W,{})})}),document.getElementById("root")),w()},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.ead5d689.chunk.js.map