(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(86)},59:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),l=a.n(o),s=a(8),i=a(9),c=a(13),u=a(10),m=a(14),p=(a(58),a(59),a(97)),d=a(98),h=a(99),g=a(100),E=a(101),f=a(102),O=a(103),b=a(12),y=a(19),v=a(88),S=a(108),j=a(89),C=a(90),A=a(91),I=a(92),w=a(93),k=a(94),_=a(95),R=a(96),L=a(21),T=a.n(L),N=function(e,t){return{type:"GET_ERRORS",payload:{msg:e,status:t,id:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},D=function(){return{type:"CLEAR_ERRORS"}},G=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:"",email:"",password:"",msg:null},a.toggle=function(){a.props.clearErrors(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={name:t.name,email:t.email,password:t.password};a.props.register(n)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:this.toggle,href:"#"},"Register"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(j.a,{toggle:this.toggle},"Register"),r.a.createElement(C.a,null,this.state.msg?r.a.createElement(A.a,{color:"danger"},this.state.msg):null,r.a.createElement(I.a,{onSubmit:this.onSubmit},r.a.createElement(w.a,null,r.a.createElement(k.a,{for:"name"},"Name"),r.a.createElement(_.a,{type:"text",name:"name",id:"name",placeholder:"Enter your name",className:"mb-3",onChange:this.onChange}),r.a.createElement(k.a,{for:"email"},"Email"),r.a.createElement(_.a,{type:"email",name:"email",id:"email",placeholder:"Enter your email",className:"mb-3",onChange:this.onChange}),r.a.createElement(k.a,{for:"password"},"Password"),r.a.createElement(_.a,{type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:this.onChange}),r.a.createElement(R.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Register"))))))}}]),t}(n.Component),F=Object(b.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}},{register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var r=JSON.stringify({name:t,email:a,password:n});T.a.post("/api/users",r,{headers:{"Content-type":"application/json"}}).then(function(t){return e({type:"REGISTER_SUCCESS",payload:t.data})}).catch(function(t){e(N(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:"REGISTER_FAIL"})})}},clearErrors:D})(U),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,email:"",password:"",msg:null},a.toggle=function(){a.props.clearErrors(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={email:t.email,password:t.password};a.props.login(n)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{onClick:this.toggle,href:"#"},"Login"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(j.a,{toggle:this.toggle},"Login"),r.a.createElement(C.a,null,this.state.msg?r.a.createElement(A.a,{color:"danger"},this.state.msg):null,r.a.createElement(I.a,{onSubmit:this.onSubmit},r.a.createElement(w.a,null,r.a.createElement(k.a,{for:"email"},"Email"),r.a.createElement(_.a,{type:"email",name:"email",id:"email",placeholder:"Enter your email",className:"mb-3",onChange:this.onChange}),r.a.createElement(k.a,{for:"password"},"Password"),r.a.createElement(_.a,{type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:this.onChange}),r.a.createElement(R.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Login"))))))}}]),t}(n.Component),x=Object(b.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}},{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});T.a.post("/api/auth",n,{headers:{"Content-type":"application/json"}}).then(function(t){return e({type:"LOGIN_SUCCESS",payload:t.data})}).catch(function(t){e(N(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:"LOGIN_FAIL"})})}},clearErrors:D})(M),J=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{onClick:this.props.logout,href:"#"},"Logout"))}}]),t}(n.Component),P=Object(b.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}}})(J),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,o=r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("span",{className:"navbar-text mr-3"},r.a.createElement("strong",null,a?"Welcome ".concat(a.name):null))),r.a.createElement(p.a,null,r.a.createElement(P,null))),l=r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(x,null)),r.a.createElement(p.a,null,r.a.createElement(F,null)));return r.a.createElement("div",null,r.a.createElement(d.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(h.a,null,r.a.createElement(g.a,{href:"/"},"Shopping List"),r.a.createElement(E.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(O.a,{className:"ml-auto",navbar:!0},t?o:l)))))}}]),t}(n.Component),W=Object(b.b)(function(e){return{auth:e.auth}},null)(B),H=a(104),X=a(105),z=a(106),V=a(107),$=function(){return{type:"ITEMS_LOADING"}},q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){a.props.deleteItem(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(H.a,null,r.a.createElement(z.a,{className:"shopping-list"},t.map(function(t){var a=t._id,n=t.name;return r.a.createElement(V.a,{key:a,timeout:500,classNames:"fade"},r.a.createElement(X.a,null,e.props.isAuthenticated?r.a.createElement(R.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"\xd7"):null,"\xa0 ",n))})))}}]),t}(n.Component),K=Object(b.b)(function(e){return{item:e.item,isAuthenticated:e.auth.isAuthenticated}},{getItems:function(){return function(e){e($()),T.a.get("api/items").then(function(t){return e({type:"GET_ITEMS",payload:t.data})}).catch(function(t){return e(N(t.response.data,t.response.status))})}},deleteItem:function(e){return function(t,a){T.a.delete("/api/items/".concat(e),G(a)).then(function(a){return t({type:"DELETE_ITEM",payload:e})}).catch(function(e){return t(N(e.response.data,e.response.status))})}}})(q),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name};a.props.addItem(t),a.toggle()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.isAuthenticated?r.a.createElement(R.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"):r.a.createElement("h4",{className:"mb-3 ml-4"},"Please log in to manage items"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(j.a,{toggle:this.toggle},"Add To Shopping List"),r.a.createElement(C.a,null,r.a.createElement(I.a,{onSubmit:this.onSubmit},r.a.createElement(w.a,null,r.a.createElement(k.a,{for:"item"},"Item"),r.a.createElement(_.a,{type:"text",name:"name",id:"item",placeholder:"Add shopping item",onChange:this.onChange}),r.a.createElement(R.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add Item"))))))}}]),t}(n.Component),Y=Object(b.b)(function(e){return{item:e.items,isAuthenticated:e.auth.isAuthenticated}},{addItem:function(e){return function(t,a){T.a.post("/api/items",e,G(a)).then(function(e){return t({type:"ADD_ITEM",payload:e.data})}).catch(function(e){return t(N(e.response.data,e.response.status))})}}})(Q),Z=a(20),ee=a(50),te=a(51),ae=a(7),ne={items:[],loading:!1},re={token:localStorage.getItem("token"),isAuthenticated:!1,isLoading:!1,user:null},oe={msg:{},status:null,id:null},le=Object(Z.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(ae.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object(ae.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ADD_ITEM":return Object(ae.a)({},e,{items:[].concat(Object(te.a)(e.items),[t.payload])});case"ITEMS_LOADING":return Object(ae.a)({},e,{loading:!e.loading});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(ae.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(ae.a)({},e,{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(ae.a)({},e,t.payload,{isAuthenticated:!0,isLoading:!1});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(ae.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}}}),se=[ee.a],ie=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d)(Z.a.apply(void 0,se)),ce=Object(Z.e)(le,{},ie),ue=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){ce.dispatch(function(e,t){e({type:"USER_LOADING"}),T.a.get("/api/auth/user",G(t)).then(function(t){return e({type:"USER_LOADED",payload:t.data})}).catch(function(t){e(N(t.response.data,t.response.status)),e({type:"AUTH_ERROR"})})})}},{key:"render",value:function(){return r.a.createElement(b.a,{store:ce},r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(h.a,null,r.a.createElement(Y,null),r.a.createElement(K,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.a6cfee36.chunk.js.map