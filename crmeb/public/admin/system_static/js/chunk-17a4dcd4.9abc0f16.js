(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17a4dcd4"],{"35f1c":function(t,i,s){},9472:function(t,i,s){"use strict";var e=s("35f1c");s.n(e).a},d7d0:function(t,i,s){"use strict";s.r(i);var e=s("f3f3"),o=(s("d81d"),s("a434"),s("c740"),s("2f62")),a=s("c4ad"),n=s("47c5");a={name:"add_goods",components:{goodsList:a.default},computed:Object(e.a)(Object(e.a)({},Object(o.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{isShowBox:!1,loading:!1,modals:!1,goodsList:[],tempGoods:{},formValidate:{},columns1:[{key:"id",title:"商品ID"},{slot:"img",title:"商品信息"},{key:"price",title:"直播售价"},{key:"stock",title:"库存"},{slot:"action",fixed:"right",title:"操作"}],tabList:[],disabled:!1,loadings:!1}},methods:{selectGoods:function(){this.modals=!0,this.selectIds=this.goodsList.map((function(t){return t.product_id}))},liveGoods:function(){var t=this,i=[];this.goodsList.map((function(t){i.push(t.product_id)})),Object(n.g)({product_id:i}).then((function(i){t.tabList=i.data,t.isShowBox=!0})).catch((function(i){t.$Message.error(i.msg)}))},getProductId:function(t){var i=this;this.goodsList=t,this.$nextTick((function(t){setTimeout((function(){i.modals=!1}),300)}))},bindDelete:function(t,i){this.goodsList.splice(t,1),t=this.tabList.findIndex((function(t){return t.id==i.product_id})),this.tabList.splice(t,1),this.goodsList.length||(this.isShowBox=!1)},del:function(t,i){this.tabList.splice(i,1),i=this.goodsList.findIndex((function(i){return i.product_id==t.id})),this.goodsList.splice(i,1),this.tabList.length||(this.isShowBox=!1)},bindSub:function(){var t=this;this.disabled=!0,this.loadings=!0,Object(n.f)({goods_info:this.tabList}).then((function(i){t.$Message.success("添加成功"),t.disabled=!1,setTimeout((function(){t.$router.push({path:t.$routeProStr+"/marketing/live/live_goods"})}),500)})).catch((function(i){t.disabled=!1,t.$Message.error(i.msg)}))}}},s("9472"),e=s("2877"),o=Object(e.a)(a,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"i-layout-page-header header-title"},[s("div",{staticClass:"fl_header"},[s("span",[s("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"},on:{click:function(i){return t.$router.go(-1)}}},[t._v("返回")])],1),s("Divider",{attrs:{type:"vertical"}}),s("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])],1)]),s("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[s("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[s("Row",{attrs:{gutter:24,type:"flex"}},[s("Col",{attrs:{span:"24"}},[s("FormItem",{attrs:{label:"选择商品："}},[s("div",{staticClass:"box"},[t._l(t.goodsList,(function(i,e){return s("div",{key:e,staticClass:"box-item"},[s("img",{attrs:{src:i.image,alt:""}}),s("Icon",{attrs:{type:"ios-close-circle",size:"20"},on:{click:function(s){return t.bindDelete(e,i)}}})],1)})),s("div",{staticClass:"upload-box",on:{click:t.selectGoods}},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)],2)])],1)],1)],1),0<t.goodsList.length?s("div",{staticClass:"active-btn"},[s("Button",{attrs:{type:"success"},on:{click:t.liveGoods}},[t._v("生成直播商品")])],1):t._e(),t.isShowBox?s("div",{staticClass:"table-box"},[s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"img",fn:function(i){var e=i.row;return i.index,[s("div",{staticClass:"product_box"},[s("img",{attrs:{src:e.image,alt:""}}),s("span",[t._v(t._s(e.store_name))])])]}},{key:"action",fn:function(i){var e=i.row,o=i.index;return[s("a",{on:{click:function(i){return t.del(e,o)}}},[t._v("删除")])]}}],null,!1,2399900888)}),s("div",{staticClass:"sub_btn"},[s("Button",{staticStyle:{width:"8%"},attrs:{type:"primary",disabled:t.disabled,loading:t.loadings},on:{click:t.bindSub}},[t._v("提交")])],1)],1):t._e()],1),s("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",scrollable:"",width:"900","footer-hide":!0},model:{value:t.modals,callback:function(i){t.modals=i},expression:"modals"}},[t.modals?s("goods-list",{ref:"goodslist",attrs:{selectIds:t.selectIds,ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)}),[],!1,null,"6253a08c",null);i.default=o.exports}}]);