(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.52aacb8b.png"},42:function(e,t){},44:function(e,t,a){e.exports=a(90)},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),o=a(3),s=a(4),i=a(6),u=a(5),m=a(7),d=a(96),h=a(98),p=a(94),b=a(34);a(50);var E=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},f=a(12),g=a.n(f),v={getProducts:function(){return g.a.get("/api/products")},getProduct:function(e){return g.a.get("/api/products/"+e)},deleteProduct:function(e){return g.a.delete("/api/products/"+e)},createProduct:function(e){return g.a.post("/api/products",e)}},N=a(93);function j(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function w(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(69);function O(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function k(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function C(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function P(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"left",marginBottom:10},className:"btn btn-success"}),e.children)}a(70);var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],name:"",neighborhood:"",phoneNumber:"",description:""},a.loadProducts=function(){v.getProducts().then(function(e){return a.setState({products:e.data,name:"",zipCode:"",phoneNumber:"",description:""})}).catch(function(e){return console.log(e)})},a.deleteProduct=function(e){v.deleteProduct(e).then(function(e){return a.loadProducts()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.name&&a.state.neighborhood&&a.state.phoneNumber&&v.createProduct({name:a.state.name,neighborhood:a.state.neighborhood,phoneNumber:a.state.phoneNumber,description:a.state.description}).then(function(e){return a.loadProducts()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this;return r.a.createElement(j,{fluid:!0},r.a.createElement(w,null,r.a.createElement(y,{size:"md-6"},r.a.createElement("div",{className:"submitAndProducts"},"Submit a New Product"),r.a.createElement("form",null,r.a.createElement(C,{value:this.state.name,onChange:this.handleInputChange,name:"name",placeholder:"Product Name (required)"}),r.a.createElement(C,{value:this.state.neighborhood,onChange:this.handleInputChange,name:"neighborhood",placeholder:"Neighborhood (ex: Church Hill, The Fan, etc.)"}),r.a.createElement(C,{value:this.state.phoneNumber,onChange:this.handleInputChange,name:"phoneNumber",placeholder:"Phone Number (required)"}),r.a.createElement(C,{value:this.state.description,onChange:this.handleInputChange,name:"description",placeholder:"Description (Required)"}),r.a.createElement(P,{disabled:!(this.state.phoneNumber&&this.state.neighborhood),onClick:this.handleFormSubmit},"Submit Product"))),r.a.createElement(y,{size:"md-6 sm-12"},r.a.createElement("div",{className:"submitAndProducts"},"Free Product List"),this.state.products.length?r.a.createElement(O,null,this.state.products.map(function(t){return r.a.createElement(k,{key:t._id},r.a.createElement(N.a,{to:"/products/"+t._id},r.a.createElement("strong",null,t.name," "),": ",t.description,r.a.createElement("br",null)," ",r.a.createElement("em",null,"Location: ",t.neighborhood)),r.a.createElement(E,{onClick:function(){return e.deleteProduct(t._id)}}))})):r.a.createElement("h3",null,r.a.createElement("em",null,"No Results to Display")))))}}]),t}(n.Component),x=(a(73),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={product:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getProduct(this.props.match.params.id).then(function(t){return e.setState({product:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Free ",this.state.product.name),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",{className:"lead"},r.a.createElement("em",null,this.state.product.description))),r.a.createElement("br",null),r.a.createElement("h5",null,"Location: ",this.state.product.neighborhood,r.a.createElement("br",null),"Call: ",this.state.product.phoneNumber),r.a.createElement("br",null),r.a.createElement(N.a,{className:"arrow",to:"/products"},"\u2190 Products"))))}}]),t}(n.Component));a(74);var I=function(e){var t=e.children,a=e.className,n=void 0===a?"":a;return r.a.createElement("div",{className:"jumbotron landing ".concat(n)},t)};var L=function(){return r.a.createElement(j,{fluid:!0},r.a.createElement(w,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(I,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},T=a(97),_=a(35),A=a.n(_),D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("jwtToken"),this.props.history.push("/")}},{key:"render",value:function(){var e=r.a.createElement("ul",{className:"navbar-nav navbar-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/login",className:"nav-link"},"Login"))),t=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/products",className:"nav-link"},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:A.a,width:"250",height:"auto",alt:""})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-left",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"/",className:"nav-link"},"Home"))),localStorage.jwtToken?t:e))}}]),t}(n.Component),F=Object(T.a)(D),R=a(95);a(76);var q=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(R.a,null,r.a.createElement(R.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://oimg.photobucket.com/albums/v240/Chenla/car3.png?t=1563657862",alt:"First slide"}),r.a.createElement(R.a.Caption,null,r.a.createElement("h4",null,"This is the place to peruse and post free local items"))),r.a.createElement(R.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://oimg.photobucket.com/albums/v240/Chenla/car2.jpg?t=1563658066",alt:"Second slide"}),r.a.createElement(R.a.Caption,null,r.a.createElement("h4",null,"Help elimnate waste by reducing, reusing, and upcycling."))),r.a.createElement(R.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://i.imgur.com/lg48n0Y.jpg",alt:"Third slide"}),r.a.createElement(R.a.Caption,null,r.a.createElement("h4",null,"Create an account to search and share items!")))))};var W=function(){return r.a.createElement(q,null)},z=(a(32),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;g.a.post("/api/auth/login",{username:n,password:r}).then(function(t){localStorage.setItem("jwtToken",t.data.token),e.setState({message:""}),e.props.history.push("/products")}).catch(function(t){401===t.response.status&&e.setState({message:"Login failed. Username or password not match"})})},e.state={username:"",password:"",message:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.message;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-signin",onSubmit:this.onSubmit},""!==n&&r.a.createElement("div",{className:"alert alert-warning alert-dismissible",role:"alert"},n),r.a.createElement("h2",{className:"form-signin-heading"},"Please sign in"),r.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Login"),r.a.createElement("p",null,"Not a member?"," ",r.a.createElement(N.a,{to:"/register"},r.a.createElement("span",{className:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," ","Register here"))))}}]),t}(n.Component)),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;g.a.post("/api/auth/register",{username:n,password:r}).then(function(t){localStorage.setItem("jwtToken",t.data.token),e.props.history.push("/products")})},e.state={username:"",password:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-signin",onSubmit:this.onSubmit},r.a.createElement("h2",{className:"form-signin-heading"},"Register"),r.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Register")))}}]),t}(n.Component),B=a(40),H=a.n(B),J=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={first_name:"",last_name:"",email:"",errors:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=H()(e);this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFILE")),r.a.createElement("table",{className:"table col-md-6 mx-auto"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,this.state.first_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,this.state.last_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.state.email))))))}}]),t}(n.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"fnavbar navbar-expand-lg navbar-dark bg-dark fixed-bottom"},r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.a,{to:"https://github.com/chenlaou/Curb-Alert-RVA",className:"nav-link"},"CurbAlert RVA | 2019 \xa9")))))}}]),t}(n.Component),V=a(24),Q=a.n(V),Y=a(41),$=a(42),G=a.n($);a(88);var K=function(e){return function(t){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={loading:!0},t}return Object(m.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(Y.a)(Q.a.mark(function e(){var t=this;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.loadSession();case 3:setTimeout(function(){t.setState({loading:!1})},1500),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),this.setState({loading:!1});case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"splash-screen"},r.a.createElement("h1",null," Page is loading. "),r.a.createElement("div",{className:"loading-dot"},".")):r.a.createElement(e,this.props)}}]),a}(n.Component)}(function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:W}),r.a.createElement(p.a,{exact:!0,path:"/products",component:S}),r.a.createElement(p.a,{exact:!0,path:"/products/:id",component:x}),r.a.createElement(p.a,{exact:!0,path:"/register",component:M}),r.a.createElement(p.a,{exact:!0,path:"/login",component:z}),r.a.createElement(p.a,{exact:!0,path:"/profile",component:J}),r.a.createElement(p.a,{component:L}))),r.a.createElement(U,null)))}}]),t}(n.Component)),X=(a(89),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(K,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");X?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Z(e)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.f2289c59.chunk.js.map