(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports={page:"styles_page__2elCm",link_box:"styles_link_box__3bH1u",copyright:"styles_copyright__25g6N"}},115:function(e,t,a){e.exports=a(326)},12:function(e,t,a){e.exports={component1:"form_component1__1_idS",button:"form_button__iHmi7",emailInput:"form_emailInput__2heeC",passwordInput:"form_passwordInput__W9PmZ",inputFieldLabel:"form_inputFieldLabel__2xXnS",inputField:"form_inputField__1ucth",submitButtons:"form_submitButtons__3dD6Q"}},24:function(e,t,a){e.exports={frame:"frame_frame__USei3",tool:"frame_tool__wHV-w",symbol:"frame_symbol__2RPB7",tools:"frame_tools__cxjaJ",content:"frame_content__26uft",button:"frame_button__1ebKW","frame---navigation-button":"frame_frame---navigation-button__3KHsb"}},319:function(e,t,a){},321:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(112),s=a.n(i),o=a(3),c=a(4),l=a(8),u=a(6),m=a(7),d=a(2),p=a(28),b=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"configure",value:function(){p.Auth.configure({identityPoolId:"eu-west-1:25388842-fe3f-47da-b371-8523843a6018",userPoolId:"eu-west-1_CTOnEIecG",userPoolWebClientId:"1f39eiq38scgarj4l6hdnmlqct",mandatorySignIn:!1})}},{key:"signIn",value:function(){var e=this.state,t=e.emailInput,a=e.passwordInput;p.Auth.signIn(t,a).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"signOut",value:function(){p.Auth.signOut().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"register",value:function(){var e=this.state,t={username:e.emailInput,password:e.passwordInput};p.Auth.signUp(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"verifyUser",value:function(){var e=this;p.Auth.currentSession().then(function(t){var a=t.accessToken;e.setState({userId:a.payload.username})}).catch(function(t){console.log(t),e.setState({userId:""})})}},{key:"changePassword",value:function(){var e=this.props.history,t=this.state.emailInput;e.push({pathname:"/login/reset-password",state:{emailInput:t}})}},{key:"resetPassword",value:function(){var e=this.props.history,t=this.state.emailInput;p.Auth.forgotPassword(t).then(function(a){e.push({pathname:"/login/change-password",state:{emailInput:t}})}).catch(function(e){var t=e.code||e;console.log(t)})}},{key:"setNewPassword",value:function(){var e=this.props.history,t=this.state,a=t.emailInput,n=t.verificationCodeInput,r=t.passwordInput;p.Auth.forgotPasswordSubmit(a,n,r).then(function(t){e.push({pathname:"/login",state:{targetUser:a}})}).catch(function(e){e.code})}}]),e}(),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"blank"},"...")}}]),t}(r.a.Component),f=a(328),v=a(113),j=a.n(v),O=a(35),g=a.n(O),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:g.a.item,to:"/about-us"},"About-us"));return e=this.props.userId?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:g.a.item,to:"/account"},"Account"),t):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:g.a.item,to:"/login"},"Login"),r.a.createElement(f.a,{className:g.a.item,to:"/register"},"Register"),t),r.a.createElement("div",{className:j.a.page},r.a.createElement("div",{className:g.a.menu},e))}}]),t}(r.a.Component),E=a(331),w=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"handleInputChange",value:function(e){var t=e,a={};a[t.target.id]=t.target.value,this.setState(a)}},{key:"traverseForm",value:function(e){var t=e;if("Enter"===t.key)for(var a=t.target,n=this.form.current,r=this.formSubmitButton.current,i=document.createNodeIterator(n,NodeFilter.SHOW_ELEMENT,function(e){return"INPUT"===e.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}),s=i.nextNode();s;){if(s===a)try{i.nextNode().focus()}catch(e){e instanceof TypeError?r.click():console.log("unknown-error-code")}s=i.nextNode()}}}]),e}(),I=a(12),_=a.n(I),F=a(44),C=a.n(F),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleInputChange=w.handleInputChange.bind(Object(d.a)(Object(d.a)(e))),e.traverseForm=w.traverseForm.bind(Object(d.a)(Object(d.a)(e))),e.register=e.register.bind(Object(d.a)(Object(d.a)(e))),e.form=r.a.createRef(),e.formSubmitButton=r.a.createRef(),e.state={},e.state.emailField="",e.state.businessNameField="",e.state.passwordField="",e.state.passwordConfirmationField="",e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"register",value:function(){window.alert(JSON.stringify(this.state.emailField+" "+this.state.businessNameField+" "+this.state.passwordField+" "+this.state.passwordConfirmationField))}},{key:"render",value:function(){var e;return e=""===this.props.userId?r.a.createElement("div",{className:_.a.form,ref:this.form},r.a.createElement("div",{className:_.a.inputFields},r.a.createElement("div",{className:_.a.inputField},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"emailField"},"email"),r.a.createElement("input",{id:"emailField",className:_.a.emailField,type:"text",autoComplete:"off",value:this.state.emailField,onChange:this.handleInputChange,onKeyDown:this.traverseForm})),r.a.createElement("div",{className:_.a.inputField},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"businessNameField"},"business name"),r.a.createElement("input",{id:"businessNameField",className:_.a.businessNameField,placeholder:"",type:"text",autoComplete:"off",value:this.state.businessNameField,onChange:this.handleInputChange,onKeyDown:this.traverseForm})),r.a.createElement("div",{className:"".concat(_.a.inputField)},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"passwordField"},"password"),r.a.createElement("input",{id:"passwordField",className:_.a.passwordField,type:"password",autoComplete:"off",value:this.state.passwordField,onChange:this.handleInputChange,onKeyDown:this.traverseForm})),r.a.createElement("div",{className:_.a.inputField},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"confirmPasswordField"},"confirm-password"),r.a.createElement("input",{id:"confirmPasswordField",className:_.a.confirmPasswordField,type:"password",autoComplete:"off",value:this.state.comfirmPasswordField,onChange:this.handleInputChange,onKeyDown:this.traverseForm}))),r.a.createElement("div",{className:_.a.submitButtons},r.a.createElement("div",{tabIndex:"0",ref:this.formSubmitButton,className:_.a.button,onClick:this.register},"submit"))):r.a.createElement(E.a,{to:"/account"}),r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:C.a.title},"Register"),e)}}]),t}(r.a.Component),N=a(48),x=a.n(N),P=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(x.a.page)},r.a.createElement("div",{className:"".concat(x.a.paragraph)},"We develop and maintain interactive websites for various types of organisations."),r.a.createElement("div",{className:"".concat(x.a.paragraph)},"Our purpose is to facillitate the processing and management of distributed information by computerising primary business processes."))}}]),t}(r.a.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e.state.data=[{key:"web-system",value:"_a website, or a set of interdependent websites designed to implement one or more business processes"},{key:"business process",value:"_activities or tasks performed successively to achieve a specific result"}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.data.map(function(e,t){var a=e,n=t;return r.a.createElement("div",{key:n},r.a.createElement("div",null,a.key),r.a.createElement("div",null,a.value))});return r.a.createElement("div",{className:"glossary"},r.a.createElement("div",null,"glossary"),e)}}]),t}(r.a.Component),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).changePassword=b.changePassword.bind(Object(d.a)(Object(d.a)(e))),e.handleInputChange=w.handleInputChange.bind(Object(d.a)(Object(d.a)(e))),e.traverseForm=w.traverseForm.bind(Object(d.a)(Object(d.a)(e))),e.login=e.login.bind(Object(d.a)(Object(d.a)(e))),e.form=r.a.createRef(),e.formSubmitButton=r.a.createRef(),e.state={},e.state.emailField="",e.state.passwordField="",e.state.inputIconSize="",e.state.submitButtonIconSize="1.2em",e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){window.alert(JSON.stringify(this.state.emailField))}},{key:"render",value:function(){var e;return e=""===this.props.userId?r.a.createElement("div",{className:_.a.form,ref:this.form},r.a.createElement("div",{className:_.a.inputFields},r.a.createElement("div",{className:_.a.inputField},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"emailField"},"email"),r.a.createElement("input",{id:"emailField",className:_.a.emailField,type:"text",value:this.state.emailField,onChange:this.handleInputChange,onKeyDown:this.traverseForm})),r.a.createElement("div",{className:_.a.inputField},r.a.createElement("label",{className:_.a.inputFieldLabel,htmlFor:"passwordField"},"password"),r.a.createElement("input",{id:"passwordField",className:_.a.passwordField,type:"password",value:this.state.passwordField,onChange:this.handleInputChange,onKeyDown:this.traverseForm}))),r.a.createElement("div",{className:_.a.submitButtons},r.a.createElement("div",{tabIndex:"0",className:_.a.button,onClick:this.changePassword},"change-password"),r.a.createElement("div",{tabIndex:"0",className:_.a.button,ref:this.formSubmitButton,onClick:this.login},"login"))):r.a.createElement(E.a,{to:"/account"}),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:C.a.title},"Login"),e)}}]),t}(r.a.Component),B=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._resetPassword=b.resetPassword.bind(Object(d.a)(Object(d.a)(a))),a._handleInputChange=w.handleInputChange.bind(Object(d.a)(Object(d.a)(a))),a._traverseForm=w.traverseForm.bind(Object(d.a)(Object(d.a)(a)));var n=e.location;return a.form=r.a.createRef(),a.formSubmitButton=r.a.createRef(),a.state={},a.state.emailInput=n.state&&n.state.emailInput?n.state.emailInput:"",a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{ref:this.form},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"emailInput"},"email"),r.a.createElement("input",{id:"emailInput",type:"email",autoComplete:"off",value:this.state.emailInput,onChange:this._handleInputChange,onKeyDown:this._traverseForm})),r.a.createElement("div",null,r.a.createElement("div",{tabIndex:"0",ref:this.formSubmitButton,onClick:this._resetPassword},"submit")));return r.a.createElement("div",null,r.a.createElement("div",null,"password-reset"),e)}}]),t}(r.a.Component),K=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._handleInputChange=w.handleInputChange.bind(Object(d.a)(Object(d.a)(a))),a._setNewPassword=b.setNewPassword.bind(Object(d.a)(Object(d.a)(a))),a._traverseForm=w.traverseForm.bind(Object(d.a)(Object(d.a)(a)));var n=e.location;return a.form=r.a.createRef(),a.formSubmitButton=r.a.createRef(),a.state={},a.state.emailInput=n.state&&n.state.emailInput?n.state.emailInput:"",a.state.verificationCodeInput="",a.state.passwordInput="",a.state.passwordConfirmationInput="",a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.state.emailInput}},{key:"render",value:function(){var e=r.a.createElement("div",{ref:this.form},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"emailInput"},"email"),r.a.createElement("input",{id:"emailInput",type:"email",autoComplete:"off",value:this.state.emailInput,onKeyDown:this._traverseForm,onChange:this._handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"verificationCodeInput"},"verification code"),r.a.createElement("input",{id:"verificationCodeInput",type:"number",value:this.state.verificationCodeInput,onKeyDown:this._traverseForm,onChange:this._handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"passwordInput"},"new password"),r.a.createElement("input",{id:"passwordInput",type:"password",value:this.state.passwordInput,onKeyDown:this._traverseForm,onChange:this._handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"passwordConfirmationInput"},"confirm new password"),r.a.createElement("input",{id:"passwordConfirmationInput",type:"password",value:this.state.passwordConfirmationInput,onKeyDown:this._traverseForm,onChange:this._handleInputChange})),r.a.createElement("div",null,r.a.createElement("div",{tabIndex:"0",ref:this.formSubmitButton,onClick:this._setNewPassword},"submit")));return r.a.createElement("div",null,r.a.createElement("div",null,"Change Password"),e)}}]),t}(r.a.Component),D=a(329),L=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"renderRoutes",value:function(){var e=this;return this.state.routes.map(function(t,a){var n=t,i=a;return r.a.createElement(D.a,{key:i,exact:n.exact,path:n.endpoint,component:function(t){var a=t,i={};return i.userId=e.props.userId,r.a.createElement(n.component,Object.assign(i,a))}})})}}]),e}(),A=a(333),U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).renderRoutes=L.renderRoutes.bind(Object(d.a)(Object(d.a)(e))),e.state={},e.state.routes=[{endpoint:"/login",component:R,exact:!0},{endpoint:"/login/reset-password",component:B,exact:!0},{endpoint:"/login/change-password",component:K,exact:!0}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this.renderRoutes(),r.a.createElement(D.a,{component:h}))}}]),t}(r.a.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.a,{to:"/examples/salon-interface"},"salon interface")),r.a.createElement("div",null,r.a.createElement(f.a,{to:"/examples/takeaway-interface"},"takeaway interface")),r.a.createElement("div",null,r.a.createElement(f.a,{to:"/examples/restaurant-interface"},"restaurant interface")));return r.a.createElement("div",null,"examples",r.a.createElement("div",null,e))}}]),t}(r.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[{subject:"function",text:"allow customers to request your service in advance"},{subject:"setup fee",text:"193.41gbp per website"},{subject:"maintenance fee",text:"1.23gbp per day"},{subject:"cloud computing fee",text:"0.439gbp+ per day"}].map(function(e,t){var a=e,n=t;return r.a.createElement("div",{key:n},r.a.createElement("div",null,a.subject),r.a.createElement("div",null,a.text))});return r.a.createElement("div",null,r.a.createElement("div",null,"takeaway web-system info"),r.a.createElement("div",null,e))}}]),t}(r.a.Component),H=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e.state.data=[{key:"function",value:"create and manage routine records of information"},{key:"setup fee",value:"193.41gbp per website"},{key:"maintenance fee",value:"1.23gbp per day"},{key:"cloud computing fee",value:"0.439gbp+ per day"}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.data.map(function(e,t){var a=e,n=t;return r.a.createElement("div",{key:n},r.a.createElement("div",null,a.key),r.a.createElement("div",null,a.value))});return r.a.createElement("div",null,r.a.createElement("div",null,"salon web-system info"),e)}}]),t}(r.a.Component),J=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).renderRoutes=L.renderRoutes.bind(Object(d.a)(Object(d.a)(e))),e.state={},e.state.routes=[{endpoint:"/examples",component:z,exact:!0},{endpoint:"/examples/salon-system",component:H,exact:!0},{endpoint:"/examples/takeaway-system",component:T,exact:!0}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this.renderRoutes(),r.a.createElement(D.a,{component:h}))}}]),t}(r.a.Component),q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e.state.menu=[{endpoint:"/account/billing",title:"billing"},{endpoint:"/account/projects",title:"projects"}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"account--home"},r.a.createElement("div",null,r.a.createElement("div",null,"your account"),r.a.createElement("div",null,this.props.userId)),this.state.menu.map(function(e,t){var a=e,n=t;return r.a.createElement("div",{key:n},r.a.createElement(f.a,{to:a.endpoint},a.title))}))}}]),t}(r.a.Component),M=(a(319),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"account--billing"},r.a.createElement("div",null,"your bill"))}}]),t}(r.a.Component)),W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"account--projects"},r.a.createElement("div",null,"your projects"))}}]),t}(r.a.Component),V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).renderRoutes=L.renderRoutes.bind(Object(d.a)(Object(d.a)(e))),e.state={},e.state.routes=[{component:q,endpoint:"/account",exact:!0},{endpoint:"/account/billing",component:M,exact:!0},{endpoint:"/account/projects",component:W,exact:!0}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this._renderRoutes(),r.a.createElement(D.a,{component:h}))}}]),t}(r.a.Component),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).renderRoutes=L.renderRoutes.bind(Object(d.a)(Object(d.a)(e))),e.state={},e.state.routes=[{endpoint:"/",component:y,exact:!0},{endpoint:"/register",component:k,exact:!0},{endpoint:"/login",component:U,exact:!1},{endpoint:"/account",component:V,exact:!1},{endpoint:"/examples",component:J,exact:!1},{endpoint:"/about-us",component:P,exact:!0},{endpoint:"/glossary",component:S,exact:!0}],e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this.renderRoutes(),r.a.createElement(D.a,{component:h}))}}]),t}(r.a.Component),Q=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"navigateUp",value:function(){var e=this.props,t=e.location,a=e.history,n=t.pathname.split("/");a.push("/"+n[n.length-2])}}]),e}(),X=a(332),Z=a(49),Y=(a(321),a(24)),$=a.n(Y),ee=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(d.a)(Object(d.a)(e))),e.navigateUp=Q.navigateUp.bind(Object(d.a)(Object(d.a)(e))),e.signOut=b.signOut.bind(Object(d.a)(Object(d.a)(e))),e.verifyUser=b.verifyUser.bind(Object(d.a)(Object(d.a)(e))),e.configureAuthentication=b.configure.bind(Object(d.a)(Object(d.a)(e))),e.upButton=r.a.createRef(),e.backButton=r.a.createRef(),e.settingsButton=r.a.createRef(),e.state={},e.state.userId="",e.state.toolIconSize="1em",document.title="Maona Systems",e.configureAuthentication(),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleKeyPress",value:function(e){var t=e;" "!==t.key&&"Enter"!==t.key||this[t.target.id].current.click()}},{key:"render",value:function(){var e=r.a.createElement("div",{className:$.a.tools},r.a.createElement("div",{id:"upButton",className:$.a.button,tabIndex:"0",ref:this.upButton,onClick:this.navigateUp,onKeyDown:this.handleKeyPress},r.a.createElement(Z.b,{className:$.a.symbol,size:this.state.toolIconSize})),r.a.createElement("div",{id:"backButton",className:$.a.button,tabIndex:"0",ref:this.backButton,onClick:this.goBack,onKeyDown:this.handleKeyPress},r.a.createElement(Z.a,{className:$.a.symbol,size:this.state.toolIconSize})),r.a.createElement("div",{id:"settingsButton",className:$.a.button,tabIndex:"0",ref:this.settingsButton,onClick:this.goBack,onKeyDown:this.handleKeyPress},r.a.createElement(Z.c,{className:$.a.symbol,size:this.state.toolIconSize})));return r.a.createElement("div",{className:$.a.frame},e,r.a.createElement("div",{className:$.a.content},r.a.createElement(G,{userId:this.state.userId})))}}]),t}(r.a.Component),te=Object(X.a)(ee),ae=a(330),ne=document.querySelector(".anchor"),re=r.a.createElement(ae.a,null,r.a.createElement(te,null));s.a.render(re,ne)},35:function(e,t,a){e.exports={menu:"menu_menu__1itAO",item:"menu_item__2MHJx"}},44:function(e,t,a){e.exports={title:"page_title__abVkn"}},48:function(e,t,a){e.exports={page:"about_page__3qlUL",paragraph:"about_paragraph__-0tU5"}},54:function(e,t){}},[[115,2,1]]]);
//# sourceMappingURL=main.84cbc253.chunk.js.map