"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[459],{459:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var a=r(861),n=r(439),s=r(757),c=r.n(s),u=r(689),i=r(791),o=r(390),p=r(596),_=(r(462),r(691)),f={cast__wrap:"Cast_cast__wrap__dYECt",cast__item:"Cast_cast__item__dGjV1",cast__photo:"Cast_cast__photo__XIork",cast__name:"Cast_cast__name__V7tRY",cast_character:"Cast_cast_character__1tyj1",cast__message:"Cast_cast__message__KbGPQ"},l=r(184),h=function(){var t=(0,i.useState)(null),e=(0,n.Z)(t,2),r=e[0],s=e[1],h=(0,i.useState)(!0),v=(0,n.Z)(h,2),m=v[0],d=v[1],w=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,o.M1)(w);case 4:e=t.sent,r=e.cast,s(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),p.Am.error(t.t0.message);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[w]),(0,l.jsxs)(l.Fragment,{children:[m?(0,l.jsx)(_.fe,{visible:!0,height:"200",width:"200",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"dna-wrapper"}):(null===r||void 0===r?void 0:r.length)>0?(0,l.jsx)("div",{className:f.cast__wrap,children:(0,l.jsx)("ul",{className:f.cast__list,children:r.map((function(t){var e=t.name,r=t.character,a=t.profile_path,n=t.id;return(0,l.jsxs)("li",{className:f.cast__item,children:[(0,l.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w92"+a:"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",alt:e,className:f.cast__photo}),(0,l.jsx)("p",{className:f.cast__name,children:e}),(0,l.jsx)("p",{className:f.cast_character,children:r})]},n)}))})}):(0,l.jsx)("p",{className:f.cast__message,children:"No data found"}),(0,l.jsx)(p.Ix,{})]})}},390:function(t,e,r){r.d(e,{Df:function(){return u},M1:function(){return _},TP:function(){return o},qF:function(){return v},tx:function(){return l}});var a=r(861),n=r(757),s=r.n(n),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"fb4e362ef4f8f4291a6c9eb4634b1354",language:"en-US"}});function u(){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,c.get("/trending/movie/week");case 4:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(s().mark((function t(e){var r,a,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,c.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function _(t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(s().mark((function t(e){var r,a,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,c.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(s().mark((function t(e){var r,a,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,c.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(s().mark((function t(e){var r,a,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/search/movie?query=".concat(e),t.prev=1,t.next=4,c.get(r);case 4:return a=t.sent,n=a.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=459.0bd95142.chunk.js.map