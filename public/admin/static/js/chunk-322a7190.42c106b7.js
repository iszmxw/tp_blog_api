(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-322a7190"],{4322:function(t,e,a){"use strict";var o=a("7b20"),n=a.n(o);n.a},"6fa7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("导航栏列表")]),t._v(" "),a("span",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addFormDialogVisible=!0}}},[t._v("添加导航")])],1)]),t._v(" "),a("el-table",{ref:"dragTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"排序"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"排序"},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-sort"},slot:"append"})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{label:"导航栏名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v("\n            "+t._s(e.row.navbar_name)+"\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"导航栏icon图标"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.navbar_icon?a("el-tag",[t._v("\n            "+t._s(e.row.navbar_icon)+"\n          ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否显示"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.show?a("el-tag",{attrs:{type:"info"}},[t._v("\n            隐藏\n          ")]):t._e(),t._v(" "),1===e.row.show?a("el-tag",{attrs:{type:"success"}},[t._v("\n            显示\n          ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否新窗口打开"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.new_tab?a("el-tag",{attrs:{type:"info"}},[t._v("\n            否\n          ")]):t._e(),t._v(" "),1===e.row.new_tab?a("el-tag",{attrs:{type:"success"}},[t._v("\n            是\n          ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否栏目"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?a("el-tag",{attrs:{type:"success"}},[t._v("\n            系统栏目\n          ")]):t._e(),t._v(" "),2===e.row.type?a("el-tag",{attrs:{type:"danger"}},[t._v("\n            网址链接\n          ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"查看地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.url,target:"_blank"}},[a("el-tag",[t._v("\n              新窗口打开\n            ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.getEditModal(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteData(e.row.id)}}},[t._v("删除")])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"拖拽",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("svg-icon",{staticClass:"drag-handler",attrs:{"icon-class":"drag"}})]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加导航",visible:t.addFormDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.addFormDialogVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.addform,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"上级"}},[a("el-select",{attrs:{placeholder:"请选择上级"},model:{value:t.addform.pid,callback:function(e){t.$set(t.addform,"pid",e)},expression:"addform.pid"}},[a("el-option",{attrs:{label:"设置为顶级",value:"0"}}),t._v(" "),t._l(t.list,function(t){return a("el-option",{key:t.id,attrs:{label:t.navbar_name,value:t.id}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"是否显示"}},[a("el-select",{attrs:{placeholder:"是否显示"},model:{value:t.addform.show,callback:function(e){t.$set(t.addform,"show",e)},expression:"addform.show"}},[a("el-option",{attrs:{label:"显示",value:1}}),t._v(" "),a("el-option",{attrs:{label:"隐藏",value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"是否新窗口打开"}},[a("el-select",{model:{value:t.addform.new_tab,callback:function(e){t.$set(t.addform,"new_tab",e)},expression:"addform.new_tab"}},[a("el-option",{attrs:{label:"新窗口打开",value:1}}),t._v(" "),a("el-option",{attrs:{label:"本页面打开",value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"栏目类型"}},[a("el-select",{model:{value:t.addform.type,callback:function(e){t.$set(t.addform,"type",e)},expression:"addform.type"}},[a("el-option",{attrs:{label:"系统栏目",value:1}}),t._v(" "),a("el-option",{attrs:{label:"网址链接",value:2}})],1)],1),t._v(" "),1===t.addform.type?a("el-form-item",{attrs:{label:"栏目地址"}},[a("el-select",{attrs:{placeholder:"请选择栏目地址"},model:{value:t.addform.type_id,callback:function(e){t.$set(t.addform,"type_id",e)},expression:"addform.type_id"}},t._l(t.category_list,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1):t._e(),t._v(" "),2===t.addform.type?a("el-form-item",{attrs:{label:"栏目地址"}},[a("el-input",{model:{value:t.addform.url,callback:function(e){t.$set(t.addform,"url",e)},expression:"addform.url"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"导航栏名称"}},[a("el-input",{model:{value:t.addform.navbar_name,callback:function(e){t.$set(t.addform,"navbar_name",e)},expression:"addform.navbar_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"导航栏图标"}},[a("el-input",{model:{value:t.addform.navbar_icon,callback:function(e){t.$set(t.addform,"navbar_icon",e)},expression:"addform.navbar_icon"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addFormDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addData}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑导航",visible:t.editFormDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.editFormDialogVisible=e}}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editFormDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editData}},[t._v("确 定")])],1)])],1)},n=[],r=(a("7f7f"),a("96cf"),a("3b8d")),l=a("53fe"),s=a.n(l),i=a("c405"),d=a("b775");function c(t){return Object(d["a"])({url:"/navbar/navbar_list",method:"post",params:t})}function u(t){return Object(d["a"])({url:"/navbar/navbar_sort",method:"post",data:t})}function f(t){return Object(d["a"])({url:"/navbar/navbar_add",method:"post",data:t})}function m(t){return Object(d["a"])({url:"/navbar/navbar_delete",method:"post",data:t})}function b(t){return Object(d["a"])({url:"/navbar/navbar_edit",method:"post",data:t})}var p={data:function(){return{addFormDialogVisible:!1,editFormDialogVisible:!1,category_list:[],addform:{pid:void 0,show:1,new_tab:1,type:void 0,type_id:void 0,url:void 0,navbar_name:void 0,navbar_icon:void 0},editForm:{id:void 0,name:void 0,pid:void 0,description:void 0,alias:void 0},sortable:null,list:[],oldList:[],newList:[]}},created:function(){this.getData()},methods:{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c().then(function(t){200===t.code&&(e.list=t.data,e.oldList=e.list.map(function(t){return t.id}),e.newList=e.oldList.slice())}),Object(i["d"])().then(function(t){200===t.code&&(e.category_list=t.data,e.tableData=t.data)}),this.$nextTick(function(){e.setSort()});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setSort:function(){var t=this,e=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];this.sortable=s.a.create(e,{ghostClass:"sortable-ghost",setData:function(t){t.setData("Text","")},onEnd:function(e){var a=t.list.splice(e.oldIndex,1)[0];t.list.splice(e.newIndex,0,a);var o=t.newList.splice(e.oldIndex,1)[0];t.newList.splice(e.newIndex,0,o),u(t.newList).then(function(e){200===e.code?t.$message.success(e.message):t.$message.error(e.message)})}})},addData:function(){var t=this;f(this.addform).then(function(e){200===e.code?(t.$message.success(e.message),t.addFormDialogVisible=!1,t.getData()):t.$message.error(e.message)})},deleteData:function(t){var e=this;this.$confirm("确定要删除了吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){m({id:t}).then(function(t){200===t.code?(e.$message({type:"success",message:t.message}),e.getData()):e.$message({type:"error",message:t.message})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},getEditModal:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.pid=t.pid,this.editForm.description=t.description,this.editForm.alias=t.alias,this.editFormDialogVisible=!0},editData:function(){var t=this;b(this.editForm).then(function(e){200===e.code?(t.$message.success(e.message),t.editFormDialogVisible=!1,t.getData()):t.$message.error(e.message)})}}},v=p,_=(a("4322"),a("2877")),g=Object(_["a"])(v,o,n,!1,null,"256e8c2e",null);e["default"]=g.exports},"7b20":function(t,e,a){},c405:function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return s});var o=a("b775");function n(t){return Object(o["a"])({url:"/category/category_list",method:"post",params:t})}function r(t){return Object(o["a"])({url:"/category/category_add",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/category/category_delete",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/category/category_edit",method:"post",data:t})}}}]);