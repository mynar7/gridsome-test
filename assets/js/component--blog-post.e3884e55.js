(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return a});var o=n(0),r=o.a.observable({});function i(e,t){return o.a.set(r,e,t)}function u(e){return r[e]}function a(e,t){var n=t.matched[0],o=n?n.components.default:{};if(e.stringified&&o.__file)return console.error("An error occurred while executing "+"page-query for ".concat(o.__file,"\n\n")+"Error: ".concat(e.stringified));console.error(e.message)}},215:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n(0),i=n(186),u=n(72),a=r.a.config.optionMergeStrategies,c=function(e){!function(e){var t=e.options,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.__pageQuery)t.__pageQuery=o;else{t.__pageQuery=o,t.computed=a.computed({$page:function(){return Object(i.b)(this.$route.path)}},t.computed);var r=function(e){t[e]=a[e]([c(t)],t[e])},c=function(){return function(e,o,r){n.e(9).then(n.bind(null,213)).then(function(n){n.default(e,t.__pageQuery).then(function(t){404===t.code?r({name:u.b,params:{0:e.path}}):r()}).catch(function(t){t.code===u.a||404===t.code?(console.error(t),r({name:u.b,params:{0:e.path}})):Object(i.a)(t,e)})})}};r("beforeRouteEnter"),r("beforeRouteUpdate")}}(e,void 0)},s=Object(o.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("h1",[this._v(this._s(this.$page.blogPost.title))]),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.blogPost.content)}}),t("h4",[this._v(this._s(this.$route.params))])])},[],!1,null,null,null);"function"==typeof c&&c(s);t.default=s.exports}}]);