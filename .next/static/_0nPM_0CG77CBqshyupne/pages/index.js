(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(208),{page:e.exports.default}})},208:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(75),l=r.n(o);r(212);t.default=function(){return a.a.createElement("div",{className:"example"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.a,{href:"/a",as:"/a"},a.a.createElement("a",null,"a"))),a.a.createElement("li",null,a.a.createElement(l.a,{href:"/b",as:"/b"},a.a.createElement("a",null,"b")))),a.a.createElement("img",{src:"/static/iphone.png"}))}},209:function(e,t,r){"use strict";var n=r(19),a=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(210)),l=a(r(47)),f=a(r(7)),i=a(r(8)),s=a(r(16)),u=a(r(17)),p=a(r(18)),c=a(r(49)),h=a(r(13)),d=r(104),v=n(r(1)),m=(a(r(29)),n(r(46))),E=r(24);var y=function(e){function t(){var e,r,n,a,o,i;(0,f.default)(this,t);for(var p=arguments.length,v=new Array(p),y=0;y<p;y++)v[y]=arguments[y];return r=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(v))),(0,h.default)((0,c.default)((0,c.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,l.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,l.default)(t)?(0,d.format)(t):t}},a=null,o=null,i=null,function(e,t){if(e===a&&t===o)return i;var r=n(e,t);return a=e,o=t,i=r,r})),(0,h.default)((0,c.default)((0,c.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),l=o.href,f=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(l)){var i=window.location.pathname;l=(0,d.resolve)(i,l),f=f?(0,d.resolve)(i,f):l,e.preventDefault();var s=r.props.scroll;null==s&&(s=f.indexOf("#")<0);var u=r.props.replace?"replace":"push";m.default[u](l,f,{shallow:r.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,d.resolve)(e,t);m.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var o=v.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,m._rewriteUrlForNextExport)(l.href)),v.default.cloneElement(o,l)}}]),t}(v.Component);t.default=y},210:function(e,t,r){e.exports=r(211)},211:function(e,t,r){var n=r(0),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},75:function(e,t,r){e.exports=r(209)}},[[207,1,0,8]]]);