(this["webpackJsonpquize-app"]=this["webpackJsonpquize-app"]||[]).push([[0],{24:function(e,t,n){e.exports={Drawer:"Drawer__Drawer--2Nzcl",close:"Drawer__close--3eUiV",active:"Drawer__active--WxScd"}},27:function(e,t,n){e.exports={MenuToggle:"MenuToggle__MenuToggle--1mqO0",open:"MenuToggle__open--1kMjG"}},31:function(e,t,n){e.exports={ActiveQuize:"ActiveQuize__ActiveQuize--rqxsq",ActiveQuize_Counter:"ActiveQuize__ActiveQuize_Counter--3qAOb"}},32:function(e,t,n){e.exports={AnswerItem:"AnswerItem__AnswerItem--2zL-2",success:"AnswerItem__success--3_2dH",error:"AnswerItem__error--32_hj"}},33:function(e,t,n){e.exports={FinishedQuize:"FinishedQuize__FinishedQuize--2XCI-",success:"FinishedQuize__success--3Drtq",error:"FinishedQuize__error--3CNfN"}},34:function(e,t,n){e.exports={Button:"Button__Button--QI7b2",success:"Button__success--3d-85",error:"Button__error--tZCD8",primary:"Button__primary--2Lss2"}},35:function(e,t,n){e.exports={Loader:"Loader__Loader--2iSOk",center:"Loader__center--1YZNW","lds-ripple":"Loader__lds-ripple--1XXys"}},36:function(e,t,n){e.exports={Input:"Input__Input--s67N0",invalid:"Input__invalid--flTJ3"}},37:function(e,t,n){e.exports={Auth:"Auth__Auth--2YUr1","c-input":"Auth__c-input--2j9yl","c-input-wrapper":"Auth__c-input-wrapper--14Jjd","c-input-col":"Auth__c-input-col--3I6LL"}},47:function(e,t,n){e.exports={Layout:"Layout__Layout--2C2_c"}},48:function(e,t,n){e.exports={BackDrop:"BackDrop__BackDrop--wZny4"}},51:function(e,t,n){e.exports={Quize:"Quize__Quize--1257c"}},52:function(e,t,n){e.exports={AnswersList:"AnswersList__AnswersList--1nEo1"}},53:function(e,t,n){e.exports={QuizeList:"QuizeList__QuizeList--1xTRV"}},54:function(e,t,n){e.exports={QuizeCreator:"QuizeCreator__QuizeCreator--2rrL5"}},55:function(e,t,n){e.exports={Select:"Select__Select--1rPbL"}},58:function(e,t,n){e.exports=n(87)},63:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),u=(n(63),n(3)),s=n(4),c=n(6),l=n(7),p=n(47),d=n.n(p),m=n(27),h=n.n(m),v=function(e){var t=[h.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(h.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},f=n(24),E=n.n(f),b=n(13),g=n(48),_=n.n(g),w=function(e){return r.a.createElement("div",{className:_.a.BackDrop,onClick:e.onClick})},C=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).clickHandler=function(){e.props.onClose()},e}return Object(s.a)(n,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(b.c,{to:e.to,exact:e.exact,activeClassName:E.a.active,onClick:t.clickHandler},e.label))}))}},{key:"render",value:function(){var e=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];this.props.isAuthenticated?(e.push({to:"/quize-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),e.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):e.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1});var t=[E.a.Drawer];return this.props.isOpen||t.push(E.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:t.join(" ")},r.a.createElement("ul",null,this.renderLinks(e))),this.props.isOpen?r.a.createElement(w,{onClick:this.props.onClose}):null)}}]),n}(a.Component),y=n(5),z=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.Layout},r.a.createElement(C,{isOpen:this.state.menu,onClose:this.menuCloseHandler,isAuthenticated:this.props.isAuthenticated}),r.a.createElement(v,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),n}(a.Component);var O=Object(y.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(z),k=n(51),j=n.n(k),S=n(31),Q=n.n(S),q=n(52),A=n.n(q),I=n(32),T=n.n(I),x=function(e){var t=[T.a.AnswerItem];return e.state&&t.push(T.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){e.onAnswerClick(e.answer.id)}},e.answer.text)},N=function(e){return r.a.createElement("ul",{className:A.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(x,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},U=function(e){return r.a.createElement("div",{className:Q.a.ActiveQuize},r.a.createElement("div",{className:Q.a.ActiveQuize_Counter},e.answerNumber," \u0438\u0437 ",e.quizeLength),r.a.createElement("h2",null,e.answerNumber,". ",e.question),r.a.createElement(N,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},H=n(33),L=n.n(H),F=n(34),D=n.n(F),M=function(e){var t=[D.a.Button,D.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},Z=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:L.a.FinishedQuize},r.a.createElement("ul",null,e.quize.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",L.a[e.results[t.id]]];return r.a.createElement("li",{key:"index"},r.a.createElement("strong",null,n+1," ",t.question),r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quize.length),r.a.createElement("div",null,r.a.createElement(M,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(b.b,{to:"/"},r.a.createElement(M,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},R=n(35),B=n.n(R),V=function(e){return r.a.createElement("div",{className:B.a.center},r.a.createElement("div",{className:B.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null)))},X=n(21),W=n(12),P=n.n(W),J=n(17),Y=n(19),G=n.n(Y),$=G.a.create({baseURL:"https://quize-dcede.firebaseio.com/"});function K(e){return{type:"FETCH_QUIZES_SUCCESS",quizes:e}}function ee(e){return{type:"FETCH_QUIZES_ERROR",error:e}}function te(e){return{type:"FETCH_QUIZE_SUCCESS",quize:e}}function ne(e,t){return{type:"QUIZE_SET_STATE",answerState:e,results:t}}var ae=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuizeById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryQuize()}},{key:"render",value:function(){return r.a.createElement("div",{className:j.a.Quize},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u043e\u0442\u0432\u0435\u0442\u043e\u0432"),r.a.createElement("div",null,this.props.loading||!this.props.quize?r.a.createElement(V,null):this.props.isFinished?r.a.createElement(Z,{results:this.props.results,quize:this.props.quize,onRetry:this.props.retryQuize}):r.a.createElement(U,{state:this.props.answerState,quizeLength:this.props.quize.length,question:this.props.quize[this.props.activeQuestion].question,answers:this.props.quize[this.props.activeQuestion].answers,onAnswerClick:this.props.quizeAnswerClick,answerNumber:this.props.activeQuestion+1}))))}}]),n}(a.Component);var re=Object(y.b)((function(e){return{results:e.quize.results,isFinished:e.quize.isFinished,activeQuestion:e.quize.activeQuestion,answerState:e.quize.answerState,quize:e.quize.quize,loading:e.quize.loading}}),(function(e){return{fetchQuizeById:function(t){return e((n=t,function(){var e=Object(J.a)(P.a.mark((function e(t){var a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,$.get("/quize/".concat(n,".json"));case 4:a=e.sent,r=a.data,t(te(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(ee(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizeAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quize;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var i=a.quize[a.activeQuestion],o=a.results;if(console.log("question",i),i.rightAnswer===e){o[i.id]||(o[i.id]="success"),t(ne(Object(X.a)({},e,"success"),o));var u=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quize.length}(a)?t({type:"QUIZE_NEXT_QUIESTIN",number:a.activeQuestion+1}):t({type:"FINISHED_QUIZE"}),window.clearTimeout(u)}),1e3)}else o[i.id]="error",t(ne(Object(X.a)({},e,"error"),o))}}(t))},retryQuize:function(){return e({type:"RETRY_QUIZE"})}}}))(ae),ie=n(16),oe=n(53),ue=n.n(oe),se=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(b.c,{to:"/quize/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:ue.a.QuizeList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.props.loading&&0!==this.props.quizes.length?r.a.createElement(V,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),n}(a.Component);var ce=Object(y.b)((function(e){return{quizes:e.quize.quizes,loading:e.quize.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(J.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,n=[],e.next=5,$.get("/quize.json");case 5:a=e.sent,Object.keys(a.data).forEach((function(e,t){n.push({id:e,name:"\u0422\u0435\u0441\u0442 ".concat(t+1)})})),t(K(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(ee(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(se),le=n(2),pe=n(54),de=n.n(pe),me=n(36),he=n.n(me);function ve(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var fe=function(e){var t=e.type||"text",n=[he.a.Input],a="".concat(t,"-").concat(Math.random());return ve(e)&&n.push(he.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{id:a,type:t,value:e.value,onChange:e.onChange}),ve(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)};function Ee(e,t){return Object(le.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function ge(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var _e=function(e){return e.children},we=n(55),Ce=n.n(we),ye=function(e){var t="".concat(e.label,"-").concat(100*Math.random());return r.a.createElement("div",{className:Ce.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function ze(e){return Ee({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function Oe(){return{question:Ee({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:ze(1),option2:ze(2),option3:ze(3),option4:ze(4)}}var ke=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rightAnswer:1,isFormValid:!1,formControls:Oe()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.formControls,a=n.question,r=n.option1,i=n.option2,o=n.option3,u=n.option4,s={question:a.value,id:e.props.quize.length+1,rightAnswer:e.state.rightAnswer,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};e.props.createQuizeQuestion(s),e.setState({rightAnswer:1,isFormValid:!1,formControls:Oe()})},e.createQuizeHandler=function(t){t.preventDefault(),e.setState({rightAnswer:1,isFormValid:!1,formControls:Oe()}),e.props.finishCreateQuize()},e.changeHandler=function(t,n){var a=Object(le.a)({},e.state.formControls),r=Object(le.a)({},a[n]);r.touched=!0,r.value=t,r.valid=be(r.value,r.validation),a[n]=r,e.setState({formControls:a,isFormValid:ge(a)})},e.changeSelectHandler=function(t){e.setState({rightAnswer:+t.target.value})},e}return Object(s.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(_e,{key:t+n},r.a.createElement(fe,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(ye,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswer,onChange:this.changeSelectHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:de.a.QuizeCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement("div",null,r.a.createElement(M,{type:"primary",disabled:!this.state.isFormValid,onClick:this.addQuestionHandler},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(M,{type:"success",disabled:0===this.props.quize.length,onClick:this.createQuizeHandler},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442")))))}}]),n}(a.Component);var je=Object(y.b)((function(e){return{quize:e.create.quize}}),(function(e){return{createQuizeQuestion:function(t){return e(function(e){return function(t,n){n().create.quize.push(e)}}(t))},finishCreateQuize:function(){return e(function(){var e=Object(J.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.post("/quize.json",n().create.quize);case 2:t({type:"RESET_QUIZE_CREATION"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(ke),Se=n(37),Qe=n.n(Se),qe=n(56),Ae=n.n(qe);function Ie(e){return{type:"AUTH_SUCCESS",token:e}}function Te(e){return function(t){setTimeout((function(){t(xe())}),1e3*e)}}function xe(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}var Ne=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!0)},e.registerHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!1)},e.submitHandlet=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(le.a)({},e.state.formControls),r=Object(le.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validateControl(r.value,r.validation),a[n]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),e.setState({formControls:a,isFormValid:i})},e}return Object(s.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=Ae.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(fe,{key:t+n,type:a.type,label:a.label,errorMessage:a.errorMessage,valid:a.valid,touched:a.touched,shouldValidate:!!a.validation,onChange:function(n){e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:Qe.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandlet},r.a.createElement("div",{className:Qe.a["c-input-wrapper"]},this.renderInputs()),r.a.createElement(M,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(M,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),n}(a.Component);var Ue=Object(y.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(J.a)(P.a.mark((function a(r){var i,o,u,s,c,l;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o={email:e,password:t,returnSecureToken:!0},u="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(i="AIzaSyCuZlcuhOi6W_pp8qQZZhMMAeo0QBv_TBU"),n&&(u="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(i)),a.next=6,G.a.post(u,o);case 6:s=a.sent,console.log(s.data),c=s.data,l=new Date((new Date).getTime()+1e3*c.expiresIn),localStorage.setItem("token",c.idToken),localStorage.setItem("userId",c.localId),localStorage.setItem("expirationDate",l),r(Ie(c.idToken)),r(Te(c.expiresIn));case 15:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Ne),He=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(ie.a,{to:"/"})}}]),n}(a.Component);var Le=Object(y.b)(null,(function(e){return{logout:function(){return e(xe())}}}))(He),Fe=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=r.a.createElement(ie.d,null,r.a.createElement(ie.b,{path:"/auth",component:Ue}),r.a.createElement(ie.b,{path:"/quize/:id",component:re}),r.a.createElement(ie.b,{path:"/",exact:!0,component:ce}),r.a.createElement(ie.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(ie.d,null,r.a.createElement(ie.b,{path:"/quize-creator",component:je}),r.a.createElement(ie.b,{path:"/quize/:id",component:re}),r.a.createElement(ie.b,{path:"/",exact:!0,component:ce}),r.a.createElement(ie.b,{path:"/logout",component:Le}),r.a.createElement(ie.a,{to:"/"}))),r.a.createElement("div",{className:"App"},r.a.createElement(O,null,e))}}]),n}(a.Component);var De=Object(ie.g)(Object(y.b)((function(e){return console.log(e),{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(xe()):(e(Ie(t)),e(Te((n.getTime()-(new Date).getTime())/1e3)))}else e(xe())}))}}}))(Fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=n(15),Ze={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quize:null};var Re={quize:[]};var Be={token:null};var Ve=Object(Me.c)({quize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZES_START":return Object(le.a)({},e,{loading:!0});case"FETCH_QUIZES_SUCCESS":return Object(le.a)({},e,{loading:!1,quizes:t.quizes});case"FETCH_QUIZES_ERROR":return Object(le.a)({},e,{loading:!1,error:t.error});case"FETCH_QUIZE_SUCCESS":return Object(le.a)({},e,{loading:!1,quize:t.quize});case"QUIZE_SET_STATE":return Object(le.a)({},e,{answerState:t.answerState,results:t.results});case"FINISHED_QUIZE":return Object(le.a)({},e,{isFinished:!0});case"QUIZE_NEXT_QUIESTIN":return Object(le.a)({},e,{answerState:null,activeQuestion:t.number});case"RETRY_QUIZE":return Object(le.a)({},e,{results:{},isFinished:!1,activeQuestion:0,answerState:null});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_QUIZE_CREATION":return Object(le.a)({},e,{quize:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(le.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(le.a)({},e,{token:null});default:return e}}}),Xe=n(57),We="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Me.d,Pe=Object(Me.e)(Ve,We(Object(Me.a)(Xe.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:Pe},r.a.createElement(b.a,null,r.a.createElement(De,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.0efde5b7.chunk.js.map