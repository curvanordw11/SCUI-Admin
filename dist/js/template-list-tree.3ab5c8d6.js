"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[1343],{46:function(e,l,a){a.r(l),a.d(l,{default:function(){return s}});var t=a(6252);const i={class:"left-panel"},r={class:"right-panel"},d={class:"right-panel-search"};function u(e,l,a,u,n,o){const p=(0,t.up)("el-input"),s=(0,t.up)("el-header"),c=(0,t.up)("el-tree"),m=(0,t.up)("el-main"),h=(0,t.up)("el-container"),b=(0,t.up)("el-aside"),f=(0,t.up)("el-button"),w=(0,t.up)("el-table-column"),g=(0,t.up)("el-button-group"),W=(0,t.up)("scTable");return(0,t.wg)(),(0,t.j4)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{width:"200px"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{placeholder:"输入关键字进行过滤",modelValue:n.groupFilterText,"onUpdate:modelValue":l[0]||(l[0]=e=>n.groupFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(m,{class:"nopadding"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{ref:"group",class:"menu","node-key":"id",data:n.groupData,"current-node-key":"","highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":o.groupFilterNode,onNodeClick:o.groupClick},null,8,["data","filter-node-method","onNodeClick"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(f,{type:"primary",icon:"el-icon-plus"}),(0,t.Wm)(f,{type:"danger",plain:"",icon:"el-icon-delete"})]),(0,t._)("div",r,[(0,t._)("div",d,[(0,t.Wm)(p,{modelValue:n.search.keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>n.search.keyword=e),placeholder:"关键词",clearable:""},null,8,["modelValue"]),(0,t.Wm)(f,{type:"primary",icon:"el-icon-search",onClick:o.upsearch},null,8,["onClick"])])])])),_:1}),(0,t.Wm)(m,{class:"nopadding"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{ref:"table",apiObj:n.list.apiObj,"row-key":"id",stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{type:"selection",width:"50"}),(0,t.Wm)(w,{label:"姓名",prop:"name",width:"150"}),(0,t.Wm)(w,{label:"性别",prop:"sex",width:"150"}),(0,t.Wm)(w,{label:"邮箱",prop:"email",width:"250"}),(0,t.Wm)(w,{label:"评分",prop:"num",width:"150"}),(0,t.Wm)(w,{label:"注册时间",prop:"datetime",width:"150",sortable:""}),(0,t.Wm)(w,{label:"操作",fixed:"right",align:"right",width:"160"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("查看")])),_:1}),(0,t.Wm)(f,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("编辑")])),_:1}),(0,t.Wm)(f,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:1})])),_:1})])),_:1})])),_:1},8,["apiObj"])])),_:1})])),_:1})])),_:1})}var n={name:"listTree",data(){return{groupFilterText:"",groupData:[{id:"",label:"所有"},{id:"1",label:"华东总部",children:[{id:"11",label:"售前客服部"},{id:"12",label:"技术研发部"},{id:"13",label:"行政人事部"}]},{id:"2",label:"华难总部",children:[{id:"21",label:"售前客服部"},{id:"22",label:"技术研发部"}]}],list:{apiObj:this.$API.demo.list},search:{keyword:""}}},watch:{groupFilterText(e){this.$refs.group.filter(e)}},methods:{groupFilterNode(e,l){return!e||-1!==l.label.indexOf(e)},groupClick(e){var l={groupId:e.id};this.$refs.table.reload(l)},upsearch(){this.$refs.table.upData(this.search)}}},o=a(3744);const p=(0,o.Z)(n,[["render",u]]);var s=p}}]);