(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_money/index"],{8788:function(t,n,e){"use strict";e.r(n);var o=e("b5f5"),i=e("ebfd");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("e7c4");var u,r=e("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"013b9cda",null,!1,o["a"],u);n["default"]=a.exports},b5f5:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},b651:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("f15c"),i=e("9ef3"),c=e("3474"),u=e("c6cd"),r=e("26cb"),a=s(e("c83f"));function s(t){return t&&t.__esModule?t:{default:t}}var f=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("22f5"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/Authorize").then(function(){return resolve(e("420f"))}.bind(null,e)).catch(e.oe)},h=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("f497"))}.bind(null,e)).catch(e.oe)},l={components:{recommend:f,authorize:d,home:h},mixins:[a.default],data:function(){return{userInfo:{},hostProduct:[],isClose:!1,recharge_switch:0,activity:{},isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.getUserInfo(),this.get_host_product(),this.get_activity())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.get_host_product(),this.get_activity()):(0,u.toLogin)()},methods:{onLoadFun:function(){this.getUserInfo(),this.get_host_product(),this.get_activity()},authColse:function(t){this.isShowAuth=t},openSubscribe:function(n){t.showLoading({title:"正在加载"}),(0,i.openRechargeSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:n})})).catch((function(){t.hideLoading()}))},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(n){t.$set(t,"userInfo",n.data),t.recharge_switch=n.data.recharge_switch}))},get_activity:function(){var t=this;(0,c.userActivity)().then((function(n){t.$set(t,"activity",n.data)}))},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(n){t.hotPage++,t.hotScroll=n.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(n.data)}))}},onReachBottom:function(){this.get_host_product()}};n.default=l}).call(this,e("543d")["default"])},cd47:function(t,n,e){"use strict";(function(t){e("6e38");o(e("66fd"));var n=o(e("8788"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ddc6:function(t,n,e){},e7c4:function(t,n,e){"use strict";var o=e("ddc6"),i=e.n(o);i.a},ebfd:function(t,n,e){"use strict";e.r(n);var o=e("b651"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a}},[["cd47","common/runtime","common/vendor"]]]);