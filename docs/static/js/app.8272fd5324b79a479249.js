webpackJsonp([1],[,,,,,,function(t,s,a){"use strict";s.a={name:"app",data:function(){return{isActive:!1}},methods:{toggleNav:function(){this.isActive=!this.isActive}}}},function(t,s,a){"use strict";s.a={name:"home",data:function(){return{}}}},function(t,s,a){"use strict";var e=a(28),n=a.n(e);s.a={data:function(){return{faqs:[],errors:[]}},created:function(){var t=this;n.a.get("https://jsonplaceholder.typicode.com/").then(function(s){t.faqs=s.data.slice(0,5)}).catch(function(s){t.errors.push(s)})}}},,,,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(3),n=a(17),i=a(21);e.a.config.productionTip=!1,new e.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},,,function(t,s,a){"use strict";function e(t){a(18)}var n=a(6),i=a(20),c=a(1),r=e,o=c(n.a,i.a,!1,r,null,null);s.a=o.exports},function(t,s){},,function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar is-primary"},[a("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{"data-target":"navbarExampleTransparentExample"},on:{click:t.toggleNav}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarExampleTransparentExample"}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n          Home\n        ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/blog"}},[t._v("\n          Blog\n        ")])],1)])]),t._v(" "),a("router-view"),t._v(" "),t._m(1)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:"https://bulma.io/images/bulma-logo-white.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Bulma")]),t._v(" by "),a("a",{attrs:{href:"http://jgthms.com"}},[t._v("Jeremy Thomas")]),t._v(". The source code is licensed\n          "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n          is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n        ")])])])])}],i={render:e,staticRenderFns:n};s.a=i},function(t,s,a){"use strict";var e=a(3),n=a(22),i=a(23),c=a(26);e.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/blog",name:"Blog",component:c.a}]})},,function(t,s,a){"use strict";function e(t){a(24)}var n=a(7),i=a(25),c=a(1),r=e,o=c(n.a,i.a,!1,r,"data-v-373e7608",null);s.a=o.exports},function(t,s){},function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-light is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("\n          Medium title\n        ")]),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("\n          Medium subtitle\n        ")])])])]),t._v(" "),a("div",{attrs:{id:"blog"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"subtitle is-size-4"},[t._v("\n              “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\n            ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n              Jeff Atwood\n            ")])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"subtitle is-size-4"},[t._v("\n              “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\n            ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n              Jeff Atwood\n            ")])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"subtitle is-size-4"},[t._v("\n              “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\n            ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n              Jeff Atwood\n            ")])])])])])])])])}],i={render:e,staticRenderFns:n};s.a=i},function(t,s,a){"use strict";function e(t){a(27)}var n=a(8),i=a(47),c=a(1),r=e,o=c(n.a,i.a,!1,r,"data-v-1d4c4d8f",null);s.a=o.exports},function(t,s){},,,,,,,,,,,,,,,,,,,,function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"blog"},[a("h1",{staticClass:"title has-text-centered"},[t._v("Blog")]),t._v(" "),a("div",{staticClass:"container"},t._l(t.faqs,function(s){return a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"subtitle is-size-4"},[t._v("\n              "+t._s(s.body)+"\n            ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n              "+t._s(s.title)+"\n            ")])])])])])}))])},n=[],i={render:e,staticRenderFns:n};s.a=i}],[14]);
//# sourceMappingURL=app.8272fd5324b79a479249.js.map