(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),l=n.n(r),c=(n(24),n(3)),s=n(4),i=n(6),u=n(5),m=n(7),h=(n(25),n(26),n(8)),p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,e.id," ",e.name),o.a.createElement("img",{src:e.url}),o.a.createElement("button",null,"Add to Cart"),o.a.createElement("button",null,"Remove from Cart"))};p.defaultProps={name:"Apple IPhone X"};var f=function(e){return o.a.createElement("div",null,e.items.map(function(e){return o.a.createElement(p,{key:e.id,id:e.id,url:e.url})}))},d=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",onChange:e.takeInput,placeholder:"Type to Search"}))};var g=n(2),v=n.n(g);v.a.defaults.baseURL="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master",v.a.defaults.headers.get["Content-Type"]="application/json";var b=v.a.interceptors.request.use(function(e){return console.log("Request Interceptor Invoked ",localStorage.tokenNumber),e.tokenId=localStorage.tokenNumber,e});function y(e){return console.log("*********************Axios is  Type ",typeof v.a),v.a.create({baseURL:"https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master",timeout:4e3}).get(e,{maxContentLength:4e3})}v.a.interceptors.response.use(function(e){return console.log("Response Interceptor Invoked ",e),e.data.mobiles[0].id=999999,e}),setTimeout(function(){v.a.interceptors.request.eject(b)},9e3);var E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={msg:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"saveInfo",value:function(){console.log("Ref is ",this.refs,"Type of ",typeof this.refs);var e={};for(var t in this.refs)e[t]=this.refs[t].value;console.log("Object ",e);var n="";for(var a in e)n+="".concat(a," ").concat(e[a]);this.setState({msg:n})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Register Form"),o.a.createElement("p",null,this.state.msg),o.a.createElement("input",{type:"text",ref:"name",placeholder:"Type Your Name"}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",ref:"salary",placeholder:"Type Your Salary"}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",ref:"city",placeholder:"Type Your City"}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",ref:"phone",placeholder:"Type Your Phone"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.saveInfo.bind(this)},"Register"))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).msg=!1,n.counter=1,n.interval=void 0,n.state={items:[],msg:n.msg},console.log("Constructor call"),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"jsonResult",value:function(e){console.log("JSON Rec in Shop componet",typeof e);var t=JSON.parse(e);console.log("data is parsed"),console.log("object is",t,"",typeof t);var n=t.mobiles;this.setState(Object(h.a)({},this.state,{items:n}))}},{key:"takeInput",value:function(e){this.searchValue=e.target.value}},{key:"componentWillMount",value:function(){var e=this;console.log("************Component will Mount Call And Do Ajax Call");var t="/mobiles.json",n=y(t),a=y(t),o=y(t);v.a.all([n,a,o]).then(function(e){console.log("All Promise Result is ",e)}),n.then(function(t){console.log("Axios Result is ",t.data.mobiles);var n=t.data.mobiles;e.setState(Object(h.a)({},e.state,{items:n}))}).catch(function(e){console.log("Error is ",e)})}},{key:"toggleMessage",value:function(){this.msg=!this.msg,this.setState(Object(h.a)({},this.state,{msg:this.msg}))}},{key:"render",value:function(){var e=this;return console.log("Render call"),o.a.createElement("div",null,o.a.createElement(E,null),this.state.msg?o.a.createElement("p",null,"Shopping"):o.a.createElement("h1",null,"Shop Here"),o.a.createElement("button",{onClick:function(){e.toggleMessage()}},"Toggle"),o.a.createElement(d,{takeInput:this.takeInput.bind(this)}),o.a.createElement(f,{items:this.state.items}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.counter++},4e3),console.log("Did Mount Call")}},{key:"componentShouldUpdate",value:function(e,t){return this.state.counter!=t.counter}},{key:"componentWillUnmount",value:function(){console.log("UnMount Call"),clearInterval(this.interval)}}]),t}(o.a.Component),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).count=100,e.state={counter:e.count},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"changeX",value:function(){this.count++,this.setState({counter:this.count})}},{key:"render",value:function(){var e=100==this.state.counter?o.a.createElement(k,null):o.a.createElement("h1",null,"No Shop Loaded");return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.changeX.bind(this)},"COUNTDOWN"),e)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[19,1,2]]]);
//# sourceMappingURL=main.c57b1d23.chunk.js.map