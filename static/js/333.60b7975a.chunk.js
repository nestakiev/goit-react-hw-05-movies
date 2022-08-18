"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[333],{3333:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,i,c,s=t(885),o=t(2791),u=t(501),p=t(6871),l=t(273),d=t(168),f=t(6444),h=t(9128),v=f.ZP.section(r||(r=(0,d.Z)(["\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px grey solid;\n"]))),x=f.ZP.div(a||(a=(0,d.Z)(["\n  margin-left: 30px;\n"]))),g=(0,f.ZP)(u.rU)(i||(i=(0,d.Z)(["\n  padding: 5px 10px;\n  background-color: lightgray;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  margin-bottom: 10px;\n    &:hover {\n      color: blue;\n      background-color: red;\n    }\n\n"]))),m=(0,f.ZP)(h.siY)(c||(c=(0,d.Z)(["\n\n  \n"]))),w=t(8748),b=t(184),j=function(){var e,n,t=(0,p.UO)().movieId,r=(0,p.TH)(),a=(0,o.useState)({}),i=(0,s.Z)(a,2),c=i[0],d=i[1];if((0,o.useEffect)((function(){(0,l.G0)(t).then(d)}),[t]),0===Object.keys(c).length)return null;var f=c.vote_average,h=c.title,j=c.overview,k=c.genres,y=c.poster_path,_=c.release_date,Z="https://image.tmdb.org/t/p/w300"+y,U=parseInt(10*f),S=k.map((function(e){return e.name})).join(" "),C=_.split("-")[0],G=null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,b.jsxs)("div",{children:[(0,b.jsxs)(v,{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)(g,{to:G,children:[" ",(0,b.jsx)(m,{}),"Go Back"]}),(0,b.jsx)("img",{src:Z,alt:"".concat(h," poster")})]}),(0,b.jsxs)(x,{children:[(0,b.jsxs)("h2",{children:[h," (",C,")"]}),(0,b.jsxs)("p",{children:["User Score: ",U,"%"]}),(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:j}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:S})]})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)(w.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),children:(0,b.jsx)(p.j3,{})})]})}},273:function(e,n,t){t.d(n,{Ex:function(){return d},G0:function(){return p},e4:function(){return u},fV:function(){return f},ww:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),s=t.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var o="70cb528e64bd13ac19df414fea399cc5",u=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day?api_key=".concat(o));case 2:return n=e.sent,t=n.data.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,c,u,p,l,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(n,"?api_key=").concat(o));case 2:return t=e.sent,r=t.data,a=r.vote_average,c=r.title,u=r.overview,p=r.genres,l=r.poster_path,d=r.release_date,e.abrupt("return",{vote_average:a,title:c,overview:u,genres:p,poster_path:l,release_date:d});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie/?api_key=".concat(o,"&language=en-US&page=1&query=").concat(n));case 2:if(t=e.sent,0!==(r=t.data.results.map((function(e){return{id:e.id,title:e.title}}))).length){e.next=7;break}return alert("We can't found anythings, please repeate your request"),e.abrupt("return",[]);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=333.60b7975a.chunk.js.map