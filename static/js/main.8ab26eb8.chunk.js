(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(29),r=n.n(i),o=n(8),l=n(2),j=n(17),u=n.n(j),m=n(30),d=n(11),v=n(12),b=n(14),p=n(13),h=n(31),O=n.n(h);n(56);var x=function(e){var t=e.id,n=e.year,s=e.title,c=e.summary,i=e.poster,r=e.genres;return Object(a.jsx)(o.b,{style:{textDecoration:"none"},to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:c,poster:i,genres:r}},children:Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:s}),Object(a.jsx)("h5",{className:"movie_year",children:n}),Object(a.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[c.slice(0,140),"..."]})]})]})})},f=(n(62),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));n(63);var y=function(e){return console.log(e),Object(a.jsx)("div",{className:"about__container",children:"Yu Jeong's Movie App ^v^"})},g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsx)("span",{children:e.state.title}):null}}]),n}(c.a.Component);n(64);var _=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})};n(65);var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(_,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(l.a,{path:"/about",component:y}),Object(a.jsx)(l.a,{path:"/movie/:id",component:g})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8ab26eb8.chunk.js.map