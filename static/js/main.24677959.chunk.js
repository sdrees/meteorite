(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),s=a.n(c),l=(a(81),a(47)),i=a.n(l),o=a(68),u=a(19),m=a(20),h=a(23),d=a(21),p=a(22),b=a(10),f=(a(85),a(7)),E=a(33),g=a.n(E),w=a(34),v=a.n(w),k=a(35),S=a.n(k),y=Object(f.withStyles)({root:{flexGrow:1,fontWeight:800},grow:{flexGrow:1}})(function(e){var t=e.title,a=e.classes;return r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(S.a,{variant:"h4",color:"inherit",className:a.grow},t)))}),j=a(70),O=a.n(j),T=a(71),C=a.n(T),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={searchTerms:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.emitChangeDebounce=O()(a.queryName,150),a.classes=e.classes,a.saveSearchTerms=e.saveSearchTerms,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.emitChangeDebounce(e.target.value)}},{key:"queryName",value:function(e){this.setState({searchTerms:e}),this.saveSearchTerms(e)}},{key:"render",value:function(){return r.a.createElement(C.a,{placeholder:"Enter search terms",className:this.classes.input,variant:"outlined",onChange:this.handleChange,inputProps:{"aria-label":"Description"}})}}]),t}(r.a.Component),x=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},input:{backgroundColor:e.palette.common.white,margin:e.spacing.unit}}})(N),D=a(72),L=a.n(D),W=Object(f.withStyles)(function(e){return{button:{backgroundColor:e.palette.primary.light,fontWeight:600,margin:e.spacing.unit},input:{display:"none"}}})(function(e){var t=e.classes,a=e.clickHandler;return r.a.createElement(L.a,{variant:"contained",className:t.button,onClick:a},"Search")}),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={searchTerms:""},a.classes=e.classes,a.publishSearchTerms=e.publishSearchTerms,a.clickHandler=a.clickHandler.bind(Object(b.a)(Object(b.a)(a))),a.saveSearchTerms=a.saveSearchTerms.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"saveSearchTerms",value:function(e){this.setState({searchTerms:e})}},{key:"clickHandler",value:function(){this.publishSearchTerms(this.state.searchTerms)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.classes.container},r.a.createElement(x,{saveSearchTerms:this.saveSearchTerms}),r.a.createElement(W,{clickHandler:this.clickHandler}))}}]),t}(r.a.Component),H=Object(f.withStyles)(function(e){return{container:{display:"flex",backgroundColor:e.palette.common.white,margin:"1rem"}}})(A),B=a(73),F=a.n(B),M=a(75),G=a.n(M),z=a(36),q=a.n(z),I=a(74),J=a.n(I),P=a(37),R=a.n(P),X=a(46),Y=a.n(X),$=Object(f.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}})(q.a),_=Object(f.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.strike,a=e.classes,n=Number.parseFloat(t.mass).toFixed(0),c=null!=t.year?t.year.split("-")[0]:"undefined";return r.a.createElement(R.a,{className:a.row,key:t.id},r.a.createElement($,{component:"th",scope:"row"},t.name),r.a.createElement($,{numeric:!0},t.id),r.a.createElement($,null,t.nametype),r.a.createElement($,null,t.recclass),r.a.createElement($,{numeric:!0},n),r.a.createElement($,null,t.fall),r.a.createElement($,{numeric:!0},c),r.a.createElement($,{numeric:!0},t.reclat),r.a.createElement($,{numeric:!0},t.reclong))}),K=Object(f.withStyles)(function(e){return{head:{backgroundColor:"#FFB564",color:"#3B3939",fontSize:18,fontWeight:600},body:{fontSize:14}}})(q.a),Q=Object(f.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.classes,a=e.meteoriteStrikes,n=e.searchTerms;return r.a.createElement(Y.a,{className:t.root},r.a.createElement(F.a,{className:t.table,padding:"dense"},r.a.createElement(J.a,null,r.a.createElement(R.a,null,r.a.createElement(K,null,"Name"),r.a.createElement(K,{numeric:!0},"Id"),r.a.createElement(K,null,"Name Type"),r.a.createElement(K,null,"Rec Class"),r.a.createElement(K,{numeric:!0},"Mass (g)"),r.a.createElement(K,null,"Fall"),r.a.createElement(K,null,"Year"),r.a.createElement(K,null,"Latitude"),r.a.createElement(K,null,"Longitude"))),r.a.createElement(G.a,null,a.filter(function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())}).map(function(e){return r.a.createElement(_,{className:t.row,key:e.id,strike:e})}))))}),U=Object(f.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.title,a=e.href,n=e.classes;return r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(S.a,{variant:"subtitle1",color:"inherit",className:n.grow},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))))}),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={meteoriteStrikes:{},isDataLoaded:!1,searchTerms:""},a.publishSearchTerms=a.publishSearchTerms.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.nasa.gov/resource/y77d-th95.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({meteoriteStrikes:a}),this.setState({isDataLoaded:!0}),console.log("App.js - componentDidMount - meteoriteStrikes json: ",this.state.meteoriteStrikes);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"publishSearchTerms",value:function(e){this.setState({searchTerms:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(y,{title:"Meteorite Explorer"})),r.a.createElement("section",{className:"App-search"},r.a.createElement(H,{publishSearchTerms:this.publishSearchTerms})),r.a.createElement("section",{className:"App-results"},r.a.createElement("div",null,this.state.isDataLoaded?r.a.createElement(Q,{meteoriteStrikes:this.state.meteoriteStrikes,searchTerms:this.state.searchTerms}):" ")),r.a.createElement("footer",{className:"App-footer"},r.a.createElement(U,{title:"Data courtesy Nasa Open Data Portal",href:"https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a(198)},81:function(e,t,a){},85:function(e,t,a){}},[[76,2,1]]]);
//# sourceMappingURL=main.24677959.chunk.js.map