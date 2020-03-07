(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{119:function(e,t,n){e.exports=n(223)},124:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c);n(124),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(125);var i=n(113),l=n(24),u=n(36),s=n.n(u),m=n(48),p=n(29),d=n(53),h=n(253),f=n(254),g=n(259),y=n(255),b=n(261),E=n(250),v=n(262),w=n(18),x=n(106),j=n.n(x),O=n(107),C=n.n(O),k=n(252),D=Object(E.a)((function(e){return Object(v.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})})})),T=function(e){var t=D();return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,null),r.a.createElement(h.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(g.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(j.a,null)),r.a.createElement(y.a,{className:t.title,variant:"h6",noWrap:!0},"Weather Forecast"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(C.a,null)),r.a.createElement("form",{onSubmit:e.getForeCast},r.a.createElement(b.a,{placeholder:"Search City\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){return e.textChanged(t.target.value)}}))))))},S=n(224),M=n(257),N=n(54),U=n(19),A=n(20),F=n(111),I=n.n(F),z=n(51),B=n(110),G=n(256),J=new(function(){function e(){var t=this;Object(z.a)(this,e),this.tempUnit="C",this.sunnyColor=G.a[50],this.moreThanTwentyColor="orange",this.bothSunnyAndMoreThanTwenty={backgroundImage:"linear-gradient(red, ".concat(this.sunnyColor,")")},this.getCurrentTemp=function(e){var n=new Date(Date.now()).getHours();return n>=6&&n<12?"".concat(e.morn,"\xb0").concat(t.tempUnit):n>=12&&n<18?"".concat(e.day,"\xb0").concat(t.tempUnit):n>=18&&n<24?"".concat(e.eve,"\xb0").concat(t.tempUnit):"".concat(e.night,"\xb0").concat(t.tempUnit)},this.getDay=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]},this.getDate=function(e){var t=new Date(1e3*e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate()," ").concat(t.getFullYear())},this.getDateString=function(e){var n=new Date(1e3*e);return"".concat(t.getDay(n.getDay()),", ").concat(t.getDate(e))},this.isDay=function(){var e=new Date(Date.now()).getHours();return e>=7&&e<=20},this.isTemperatureGreater=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=parseInt(e.replace("\xb0C",""));return n>t}}return Object(B.a)(e,[{key:"averageTemperature",value:function(e){return"".concat(Math.round(Object.values(e.temp).reduce((function(e,t){return e+t}))/Object.values(e.temp).length),"\xb0").concat(this.tempUnit)}}]),e}());function R(){var e=Object(U.a)(["\n  margin: 0;\n  font-weight: normal;\n  text-transform: capitalize;\n  float: left;\n  color: ",";\n  font-weight: bold;\n"]);return R=function(){return e},e}function W(){var e=Object(U.a)(["\n  margin: 0;\n"]);return W=function(){return e},e}function H(){var e=Object(U.a)(["\n  margin-left: 20px;\n  float: left;\n"]);return H=function(){return e},e}function V(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n\n  i {\n    font-size: 120px;\n    margin-top: -30px;\n\n    @media (max-width: 700px) {\n      font-size: 70px;\n    }\n  }"]);return V=function(){return e},e}function K(){var e=Object(U.a)(["\n  font-size: 120px;\n  margin-right: 70px;\n\n  @media (max-width: 700px) {\n    font-size: 70px;\n    margin: 30px 0;\n  }"]);return K=function(){return e},e}function L(){var e=Object(U.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  margin-left: 70px;\n\n  @media (max-width: 700px) {\n    margin: 20px 0;\n  }\n\n  li {\n    display: flex;\n    justify-content: space-between;\n  }\n    \n   span{\n     margin: 5px 0;\n    }\n\n  p {\n    width: 250px;\n    margin: 5px 0;\n    font-size: 18px;\n    padding-right: 20px;\n    text-align: right;\n  }"]);return L=function(){return e},e}var q=A.a.ul(L()),P=A.a.h1(K()),Y=A.a.div(V()),$=A.a.div(H()),Q=A.a.h2(W()),X=A.a.h3(R(),I.a[900]),Z=function(e){return r.a.createElement("div",{className:"weather-today-today"},r.a.createElement($,null,r.a.createElement(Q,null,J.getDateString(e.day.dt)),r.a.createElement(X,null,e.day.weather[0].description)),r.a.createElement(Y,null,r.a.createElement(P,null,"".concat(J.getCurrentTemp(e.day.temp))),r.a.createElement("i",{className:"wi wi-owm-".concat(J.isDay()?"day":"night","-").concat(e.day.weather[0].id)}),r.a.createElement(q,null,r.a.createElement("li",null,r.a.createElement("p",null,"Morning"),r.a.createElement("span",null,"".concat(e.day.temp.morn,"\xb0").concat(J.tempUnit))),r.a.createElement("li",null,r.a.createElement("p",null,"Afternoon"),r.a.createElement("span",null,"".concat(e.day.temp.day,"\xb0").concat(J.tempUnit))),r.a.createElement("li",null,r.a.createElement("p",null,"Evening"),r.a.createElement("span",null,"".concat(e.day.temp.eve,"\xb0").concat(J.tempUnit))),r.a.createElement("li",null,r.a.createElement("p",null,"Night"),r.a.createElement("span",null,"".concat(e.day.temp.night,"\xb0").concat(J.tempUnit)))),r.a.createElement(q,null,r.a.createElement("li",null,r.a.createElement("p",null,"Sunny"),r.a.createElement("span",{style:{backgroundColor:J.sunnyColor}},"color")),r.a.createElement("li",null,r.a.createElement("p",null,"More than 20\xb0C"),r.a.createElement("span",{style:{backgroundColor:J.moreThanTwentyColor}},"color")),r.a.createElement("li",null,r.a.createElement("p",null,"Sunny & More than 20\xb0C"),r.a.createElement("span",{style:J.bothSunnyAndMoreThanTwenty},"color")))))};function _(){var e=Object(U.a)(["\n  padding: 20px;\n  border-radius: 15px;\n  &:hover  {\n    transform: scale(1.1);\n    cursor: pointer;\n  }\n  i {\n    font-size: 60px;\n   }"]);return _=function(){return e},e}var ee=A.a.div(_()),te=function(e){var t=J.getDateString(e.day.dt).split(","),n=Object(p.a)(t,2),a=n[0],c=n[1];return r.a.createElement(ee,{onClick:function(){return e.onClick(e.day)},style:function(){var t=e.day.weather[0].description,n=J.isTemperatureGreater(J.averageTemperature(e.day)),a="#448aff";return n&&"sky is clear"===t?J.bothSunnyAndMoreThanTwenty:(n?a=J.moreThanTwentyColor:"sky is clear"===t&&(a=J.sunnyColor),{backgroundColor:a})}()},r.a.createElement("h3",null,c),r.a.createElement("h4",null,a),r.a.createElement("i",{className:"wi wi-owm-".concat(e.day.weather[0].id)}),r.a.createElement("p",null,"Average: ",J.averageTemperature(e.day)))},ne=n(258),ae=n(260);function re(e){return r.a.createElement(ae.a,Object.assign({elevation:6,variant:"filled"},e))}var ce=Object(E.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),oe=function(e){var t=ce();return r.a.createElement("div",{className:t.root},r.a.createElement(ne.a,{open:!0,autoHideDuration:6e3},r.a.createElement(re,{severity:e.showMessage},"info"===e.showMessage?"Search for a city!":"City name does not exist")))},ie=Object(E.a)((function(e){return Object(v.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",background:N.a.A200,minHeight:"200px"}})})),le=function(e){var t,n,a=ie();return null===e.forecast?r.a.createElement(oe,{searchValue:e.searchValue,showMessage:e.showMessage}):r.a.createElement("div",{className:a.root},r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(S.a,{className:a.paper},r.a.createElement(Z,{day:null!==(t=e.headerDay)&&void 0!==t?t:null===(n=e.forecast)||void 0===n?void 0:n.list[0]}))),e.forecast.list.map((function(t){return r.a.createElement(M.a,{item:!0,xs:2,key:t.dt},r.a.createElement(S.a,{className:a.paper},r.a.createElement(te,{day:t,onClick:e.onClickUpdate})))}))))},ue=new function e(){var t=this;Object(z.a)(this,e),this.apiKey="dbb624c32c7f0d652500552c5ebbde56",this.baseUrl="https://api.openweathermap.org/data/2.5/forecast",this.getForecastByCity=function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.baseUrl,"/daily?q=").concat(n,"&units=metric&cnt=8&appid=").concat(t.apiKey));case 2:if(a=e.sent,r=a.headers.get("content-type"),200!==a.status||!r||-1===r.indexOf("application/json")){e.next=10;break}return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},se=n(112),me=n.n(se),pe=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(null),l=Object(p.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)("info"),f=Object(p.a)(h,2),g=f[0],y=f[1],b=Object(a.useState)(),E=Object(p.a)(b,2),v=E[0],w=E[1],x=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,ue.getForecastByCity(c);case 3:(n=e.sent)?(d(n),w(n.list[0])):(d(null),y("error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(me.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(T,{getForeCast:x,textChanged:function(e){o(e)}}),r.a.createElement(le,{forecast:u,searchValue:c,showMessage:g,onClickUpdate:function(e){w(e)},headerDay:v})))},de=(n(221),function(e){return a.createElement(i.a,null,a.createElement("main",{className:"container"},a.createElement(l.c,null,a.createElement(l.a,{exact:!0,path:"/",component:pe}))))});o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.b6396b61.chunk.js.map