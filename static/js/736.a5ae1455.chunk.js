"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,a,u=n(885),c=n(2791),i=n(6871),o=n(273),s=n(168),p=n(6444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\n  margin: 10px;\n  border: 1px gray solid;\n  padding: 5px;\n  text-align: center;\n"]))),d=n(184),h=function(){var e=(0,i.UO)().movieId,t=(0,c.useState)([]),n=(0,u.Z)(t,2),r=n[0],a=n[1];return(0,c.useEffect)((function(){(0,o.ww)(e).then(a)}),[e]),0===r.length?null:(0,d.jsx)(f,{children:r.map((function(e){var t=e.name,n=e.character,r=e.profile_path,a=e.id;return(0,d.jsxs)(l,{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/"+r,alt:t}),(0,d.jsx)("p",{children:t}),(0,d.jsxs)("p",{children:["Character: ",n]})]},a)}))})}},273:function(e,t,n){n.d(t,{Ex:function(){return l},G0:function(){return p},e4:function(){return s},fV:function(){return d},ww:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="70cb528e64bd13ac19df414fea399cc5",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,c,s,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,r=n.data,a=r.vote_average,c=r.title,s=r.overview,p=r.genres,f=r.poster_path,l=r.release_date,e.abrupt("return",{vote_average:a,title:c,overview:s,genres:p,poster_path:f,release_date:l});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{id:e.id,title:e.title}}));return 0===t.length?(alert("We can't found anythings, please repeate your request"),[]):t}))}}}]);
//# sourceMappingURL=736.a5ae1455.chunk.js.map