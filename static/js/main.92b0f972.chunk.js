(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(26),o=n.n(c),s=(n(35),n(13)),u=n(14),i=n(18),l=n(16),p=n(19),d=(n(36),n(17)),h=n(4),g=n.n(h),O=n(23),f=n(29),b=n(11),v=n(8),m=g.a.mark(S),w=g.a.mark(k),j=Object(b.createAction)("LOGIN/TRIGGER","LOGIN/SUCCESS")(S,g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}},e)})),E=Object(b.createAction)("LOGOUT/TRIGGER")();function S(e){var t,n;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.account,a.next=3,Object(v.delay)(1e3);case 3:return n=Object(b.put)(j.success({session:(new Date).toString(),account:t})),a.next=6,n;case 6:return a.abrupt("return",Object(b.reg)(t));case 7:case"end":return a.stop()}},m)}function k(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.all)([Object(v.takeLatest)(j.TRIGGER,j.handleTrigger)]);case 2:case"end":return e.stop()}},w)}var y={},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SUCCESS:var n=t.payload,a=n.account,r=n.session;return Object(f.a)({},e,{account:a,session:r});case E.TRIGGER:var c=t.payload.session;return console.log("LOGOUT Reducer Session -  ".concat(c)),{};default:return e}},L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={account:"",loading:!1},n.handleLogin=Object(O.a)(g.a.mark(function e(){var t,a,r,c,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.loginAction,a=n.state.account,n.setState({loading:!0}),r=t({account:a}),c=r.promise,e.next=6,c;case 6:o=e.sent,alert("You are now logged in as ".concat(o)),n.setState({loading:!1});case 9:case"end":return e.stop()}},e)})),n.handleLogout=Object(O.a)(g.a.mark(function e(){var t,a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.props,a=t.session,r=t.logoutAction,a&&r({session:a});case 2:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.session,a=t.account,c=this.state,o=c.account,s=c.loading,u=!!n;return r.a.createElement("div",{style:{display:"flex",height:500,justifyContent:"center",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement("p",null,"Status: ",u?"Logged In":"Logged Out"),r.a.createElement("p",null,"Session: ",n),r.a.createElement("p",null,"Email: ",a),s?"...loading":u?r.a.createElement("button",{onClick:this.handleLogout},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"account",value:o,onChange:function(t){var n=t.target.value;return e.setState({account:n})}})),r.a.createElement("button",{onClick:this.handleLogin},"Login"))))}}]),t}(a.PureComponent),G={loginAction:j,logoutAction:E},C=Object(d.b)(function(e){var t=e.auth;return{account:t.account,session:t.session}},G)(L),I=n(6),R=n(28),T=Object(I.c)({auth:x}),A=g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.all)([k()]);case 2:case"end":return e.stop()}},e)}),_=T,U=window,N=Object(R.a)(),D=U.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,B=Object(I.e)(_,D(Object(I.a)(N)));N.run(A);var J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:B},r.a.createElement(C,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.92b0f972.chunk.js.map