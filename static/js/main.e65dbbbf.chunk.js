(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(265)},109:function(e,t,a){},113:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(109),a(60)),i=a.n(s),l=a(96),u=a(19),h=a(20),m=a(23),d=a(21),p=a(22),g=a(14),f=(a(113),a(15)),b=a(47),w=a.n(b),v=a(32),k=a.n(v),E=a(33),S=a.n(E),j=Object(f.withStyles)({root:{flexGrow:1,fontWeight:800},grow:{flexGrow:1}})(function(e){var t=e.title,a=e.classes;return r.a.createElement(w.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(S.a,{variant:"h4",color:"inherit",className:a.grow},t)))}),y=a(98),O=a.n(y),C=a(46),P=a.n(C),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={searchTerms:""},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.emitChangeDebounce=O()(a.queryName,95),a.classes=e.classes,a.saveSearchTerms=e.saveSearchTerms,a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.emitChangeDebounce(e.target.value)}},{key:"queryName",value:function(e){this.setState({searchTerms:e}),this.saveSearchTerms(e)}},{key:"render",value:function(){return r.a.createElement(P.a,{placeholder:"Enter search terms",className:this.classes.input,variant:"outlined",onChange:this.handleChange,inputProps:{"aria-label":"Description"}})}}]),t}(r.a.Component),N=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},input:{backgroundColor:e.palette.common.white,margin:e.spacing.unit}}})(T),x=a(99),W=a.n(x),A=Object(f.withStyles)(function(e){return{button:{backgroundColor:e.palette.primary.light,fontWeight:600,margin:e.spacing.unit},input:{display:"none"}}})(function(e){var t=e.classes,a=e.clickHandler;return r.a.createElement(W.a,{variant:"contained",className:t.button,onClick:a},"Search")}),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={searchTerms:""},a.classes=e.classes,a.publishSearchTerms=e.publishSearchTerms,a.clickHandler=a.clickHandler.bind(Object(g.a)(Object(g.a)(a))),a.saveSearchTerms=a.saveSearchTerms.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"saveSearchTerms",value:function(e){this.setState({searchTerms:e})}},{key:"clickHandler",value:function(){this.publishSearchTerms(this.state.searchTerms)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.classes.container},r.a.createElement(N,{saveSearchTerms:this.saveSearchTerms}),r.a.createElement(A,{clickHandler:this.clickHandler}))}}]),t}(r.a.Component),D=Object(f.withStyles)(function(e){return{container:{display:"flex",backgroundColor:e.palette.common.white,margin:"1rem"}}})(L),R=a(100),B=a.n(R),H=a(102),F=a.n(H),M=a(34),G=a.n(M),I=a(101),z=a.n(I),U=a(103),q=a.n(U),J=a(48),X=a.n(J),Y=a(45),$=a.n(Y),_=Object(f.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}})(G.a),K=Object(f.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.strike,a=e.classes,n=Number.parseFloat(t.mass).toFixed(0),c=null!=t.year?t.year.split("-")[0]:"undefined";return r.a.createElement(X.a,{className:a.row,key:t.id},r.a.createElement(_,{component:"th",scope:"row"},t.name),r.a.createElement(_,{numeric:!0},t.id),r.a.createElement(_,null,t.nametype),r.a.createElement(_,null,t.recclass),r.a.createElement(_,{numeric:!0},n),r.a.createElement(_,null,t.fall),r.a.createElement(_,{numeric:!0},c),r.a.createElement(_,{numeric:!0},t.reclat),r.a.createElement(_,{numeric:!0},t.reclong))}),Q=Object(f.withStyles)(function(e){return{head:{backgroundColor:"#FFB564",color:"#3B3939",fontSize:18,fontWeight:600},body:{fontSize:14}}})(G.a),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={page:0,rowsPerPage:5},a.classes=e.classes,a.meteoriteStrikes=e.meteoriteStrikes,a.searchTerms=e.SearchTerms,a.handleChangePage=a.handleChangePage.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeRowsPerPage=a.handleChangeRowsPerPage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChangePage",value:function(e,t){this.setState({page:t})}},{key:"handleChangeRowsPerPage",value:function(e){this.setState({rowsPerPage:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.meteoriteStrikes,n=e.searchTerms,c=this.state,o=c.rowsPerPage,s=c.page;return r.a.createElement($.a,{className:t.root},r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(B.a,{className:t.table,padding:"dense"},r.a.createElement(z.a,null,r.a.createElement(X.a,null,r.a.createElement(Q,null,"Name"),r.a.createElement(Q,{numeric:!0},"Id"),r.a.createElement(Q,null,"Name Type"),r.a.createElement(Q,null,"Rec Class"),r.a.createElement(Q,{numeric:!0},"Mass (g)"),r.a.createElement(Q,null,"Fall"),r.a.createElement(Q,null,"Year"),r.a.createElement(Q,null,"Latitude"),r.a.createElement(Q,null,"Longitude"))),r.a.createElement(F.a,null,a.slice(s*o,s*o+o).filter(function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())}).map(function(e){return r.a.createElement(K,{className:t.row,key:e.id,strike:e})})))),r.a.createElement(q.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:o,page:s,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),Z=Object(f.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(V),ee=Object(f.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.title,a=e.href,n=e.classes;return r.a.createElement(w.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(S.a,{variant:"subtitle1",color:"inherit",className:n.grow},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))))}),te=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={meteoriteStrikes:{},isDataLoaded:!1,searchTerms:""},a.publishSearchTerms=a.publishSearchTerms.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.nasa.gov/resource/y77d-th95.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({meteoriteStrikes:a}),this.setState({isDataLoaded:!0}),console.log("App.js - componentDidMount - meteoriteStrikes json: ",this.state.meteoriteStrikes);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"publishSearchTerms",value:function(e){this.setState({searchTerms:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(j,{title:"Meteorite Explorer"})),r.a.createElement("section",{className:"App-search"},r.a.createElement(D,{publishSearchTerms:this.publishSearchTerms})),r.a.createElement("section",{className:"App-results"},r.a.createElement("div",null,this.state.isDataLoaded?r.a.createElement(Z,{meteoriteStrikes:this.state.meteoriteStrikes,searchTerms:this.state.searchTerms}):" ")),r.a.createElement("footer",{className:"App-footer"},r.a.createElement(ee,{title:"Data courtesy Nasa Open Data Portal",href:"https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"})))}}]),t}(n.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meteorite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meteorite","/service-worker.js");ae?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[104,2,1]]]);
//# sourceMappingURL=main.e65dbbbf.chunk.js.map