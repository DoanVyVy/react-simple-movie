(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[503],{541:function(e,t,r){"use strict";r.d(t,{d:function(){return u},Z:function(){return c}});r(791);var n=r(689),s=r(555),o=r(460),i=r(470),l=r(184),a=function(e){return(0,l.jsx)("div",{className:"skeleton ".concat(e.className),style:{height:e.height,width:e.width||"100%",borderRadius:e.radius}})};var c=(0,i.withErrorBoundary)((function(e){var t=e.item,r=t.title,i=t.vote_average,a=t.release_date,c=t.poster_path,u=t.id,d=(0,n.s0)();return(0,l.jsxs)("div",{className:"flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800",children:[(0,l.jsx)("img",{src:s.Qo.image500(c),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5"}),(0,l.jsx)("h3",{className:"mb-3 text-xl font-bold",children:r}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-10 text-sm opacity-50",children:[(0,l.jsx)("span",{children:new Date(a).getFullYear()}),(0,l.jsx)("span",{children:i})]}),(0,l.jsx)(o.Z,{onClick:function(){return d("/movie/".concat(u))},full:!0,children:"Watch now"})]})]})}),{FallbackComponent:function(){return(0,l.jsx)("p",{className:"text-red-400 bg-red-50",children:"Something went wrong with this component"})}}),u=function(){return(0,l.jsxs)("div",{className:"flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800",children:[(0,l.jsx)(a,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsx)("h3",{className:"mb-3 text-xl font-bold",children:(0,l.jsx)(a,{width:"100%",height:"20px"})}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-10 text-sm opacity-50",children:[(0,l.jsx)("span",{children:(0,l.jsx)(a,{width:"50px",height:"10px"})}),(0,l.jsx)("span",{children:(0,l.jsx)(a,{width:"30px",height:"10px"})})]}),(0,l.jsx)(a,{width:"100%",height:"45px",radius:"6px"})]})]})}},503:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(791),s=r(339),o=r(541),i=r(419),l=r(555),a=r(470),c=r(184);var u=(0,a.withErrorBoundary)((function(e){var t=e.type,r=void 0===t?"now_playing":t,n=(0,i.ZP)(l.Qo.getMovieList(r),l._i),a=n.data,u=n.error,d=!a&&!u,h=(null===a||void 0===a?void 0:a.results)||[];return(0,c.jsxs)("div",{className:"movie-list",children:[d&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:[(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.d,{})}),(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.d,{})}),(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.d,{})}),(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.d,{})}),(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.d,{})})]})}),!d&&(0,c.jsx)(s.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:h.length>0&&h.map((function(e){return(0,c.jsx)(s.o5,{children:(0,c.jsx)(o.Z,{item:e})},e.id)}))})]})}),{FallbackComponent:function(){return(0,c.jsx)("p",{className:"text-red-400 bg-red-50",children:"Something went wrong with this component"})}}),d=function(){return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsxs)("section",{className:"pb-10 movies-layout page-container",children:[(0,c.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"Now playing"}),(0,c.jsx)(u,{type:"now_playing"})]}),(0,c.jsxs)("section",{className:"pb-20 movies-layout page-container",children:[(0,c.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"Top rated"}),(0,c.jsx)(u,{type:"top_rated"})]}),(0,c.jsxs)("section",{className:"pb-10 movies-layout page-container",children:[(0,c.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"Trending"}),(0,c.jsx)(u,{type:"popular"})]})]})}},470:function(e,t,r){!function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(t);function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,s(e,t)}var i=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},l={error:null},a=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state=l,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}o(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.setState(l)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidUpdate=function(e,t){var r,n,s=this.state.error,o=this.props.resetKeys;null!==s&&null!==t.error&&i(e.resetKeys,o)&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,o),this.reset())},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,s=t.FallbackComponent,o=t.fallback;if(null!==e){var i={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(o))return o;if("function"===typeof r)return r(i);if(s)return n.createElement(s,i);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function c(e,t){var r=function(r){return n.createElement(a,t,n.createElement(e,r))},s=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+s+")",r}function u(e){var t=n.useState(null),r=t[0],s=t[1];if(null!=e)throw e;if(null!=r)throw r;return s}e.ErrorBoundary=a,e.useErrorHandler=u,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(791))}}]);
//# sourceMappingURL=503.a50886a9.chunk.js.map