(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},,,function(e,t,a){e.exports=a(62)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(2),s=a(3),o=a(5),u=a(4),d=a(6),m=function(e){return e.children},h=(a(27),a(28),a(18)),p=a.n(h),f=(a(29),function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height,background:e.background}},r.a.createElement("img",{src:p.a,alt:"MyBurger"}))}),b=(a(30),a(31),function(e){return r.a.createElement("li",{className:"NavItem"},r.a.createElement("a",{className:e.active?"active":null,href:"/"},e.children))}),E=function(){return r.a.createElement("ul",{className:"NavItems"},r.a.createElement(b,{active:!0},"Burger Builder"),r.a.createElement(b,null,"Checkout"))};a(32);function v(e){return r.a.createElement("div",{className:"mobileOnly DrawerToggle",onClick:e.showSideDrawer},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}var g=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(f,null),r.a.createElement(v,{showSideDrawer:e.showSideDrawer}),r.a.createElement("nav",{className:"desktopOnly"},r.a.createElement(E,null)))},w=(a(33),a(34),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),y=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(m,null,r.a.createElement(w,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(f,{height:"11%",background:"none"}),r.a.createElement("nav",null,r.a.createElement(E,null))))};a(35);function k(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made With Love By Abid"))}var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.SideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerShowHandler=function(){a.setState({showSideDrawer:!0})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(g,{showSideDrawer:this.sideDrawerShowHandler}),r.a.createElement(y,{open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),r.a.createElement("main",{className:"Content"},this.props.children),r.a.createElement(k,null))}}]),t}(r.a.Component),C=a(7),N=a(20),j=(a(36),a(37),function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":t=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":t=r.a.createElement("div",{className:"Meat"});break;case"cheese":t=r.a.createElement("div",{className:"Cheese"});break;case"bacon":t=r.a.createElement("div",{className:"Bacon"});break;case"salad":t=r.a.createElement("div",{className:"Salad"});break;default:t=null}return t});function O(e){var t=Object.keys(e.ingredients).map(function(t){return Object(N.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(j,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return r.a.createElement("div",{className:"Burger"},r.a.createElement(j,{type:"bread-top"}),t,r.a.createElement(j,{type:"bread-bottom"}),0===t.length?r.a.createElement("h3",null,"Start Adding Ingredients"):null)}a(38),a(39);function H(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{onClick:e.removed,className:"Less",disabled:e.disabled},"Less"),r.a.createElement("button",{onClick:e.added,className:"More"},"More"))}var D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}];function M(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"$")),D.map(function(t){return r.a.createElement(H,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:"OrderButton",onClick:function(){return e.openModal()},disabled:!e.purchasable},"Order Now"))}a(40),a(41);var B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.show!==e.show||this.props.children!==e.children}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(w,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:{display:this.props.show?"block":"none"}},this.props.children))}}]),t}(n.Component),P=(a(42),{Success:"Success",Danger:"Danger"}),A=function(e){return r.a.createElement("button",{onClick:e.clicked,className:["Button",P[e.btnType]].join(" ")},e.children)},I=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",e.totalPrice)),r.a.createElement(A,{clicked:e.purchaseCancelHandle,btnType:"Danger"},"Cancel"),r.a.createElement(A,{clicked:e.purchaseContinueHandle,btnType:"Success"},"Continue"))},T=a(19),L=a.n(T).a.create({baseURL:"https://burger-builder-eca19.firebaseio.com/"});a(60);function x(e){return r.a.createElement("div",{style:{color:e.color},className:"loader"},"Loading...")}var q,W,R={salad:.5,cheese:.4,meat:1.2,bacon:.6},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchaseModal:!1,loading:!1,error:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(C.a)({},a.state.ingredients);n[e]=t;var r=R[e],l=a.state.totalPrice+r;a.setState({ingredients:n,totalPrice:l}),a.updatePurchasState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=Object(C.a)({},a.state.ingredients);n[e]=t;var r=R[e],l=a.state.totalPrice-r;a.setState({ingredients:n,totalPrice:l}),a.updatePurchasState(n)},a.purchaseModalHandler=function(){a.setState({purchaseModal:!0})},a.purchaseCancelHandle=function(){a.setState({purchaseModal:!1})},a.purchaseContinueHandle=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Abid Al Amin",address:{street:"TestStreet 1",zipCode:"445125",country:"Bangladesh"},email:"test@test.com"},deliveryMethod:"fastest"};L.post("/orders.json",e).then(function(e){a.setState({loading:!1,purchaseModal:!1})}).catch(function(e){a.setState({loading:!1,purchaseModal:!1})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.get("https://burger-builder-eca19.firebaseio.com/ingredients.json").then(function(t){return e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchasState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(C.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Can't load ingredients. Server Error!"):r.a.createElement(x,{color:"red"});return this.state.ingredients&&(n=r.a.createElement(m,null,r.a.createElement(O,{className:"Burger",ingredients:this.state.ingredients}),r.a.createElement(M,{className:"Controls",ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,openModal:this.purchaseModalHandler,purchasable:this.state.purchasable})),a=r.a.createElement(I,{ingredients:this.state.ingredients,purchaseCancelHandle:this.purchaseCancelHandle,purchaseContinueHandle:this.purchaseContinueHandle,totalPrice:this.state.totalPrice.toFixed(2)})),this.state.loading&&(a=r.a.createElement(x,{color:"white"})),r.a.createElement(m,null,r.a.createElement(B,{show:this.state.purchaseModal,modalClosed:this.purchaseCancelHandle},a),n)}}]),t}(n.Component),$=(q=U,W=L,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.errorConfirmedHandler=function(){a.setState({error:null})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptors=W.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptors=W.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){W.interceptors.request.eject(this.reqInterceptors),W.interceptors.response.eject(this.resInterceptors)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(B,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(q,this.props))}}]),t}(n.Component));var z=function(){return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement($,null)))};a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[21,1,2]]]);
//# sourceMappingURL=main.6386b952.chunk.js.map