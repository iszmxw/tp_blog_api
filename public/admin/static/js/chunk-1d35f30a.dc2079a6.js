(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d35f30a"],{1554:function(t,e,n){},"26f8":function(t,e,n){"use strict";var i=n("f878"),a=n.n(i);a.a},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",function(){return function(t){return a(i(t))}})},"471d":function(t,e,n){"use strict";var i=n("1554"),a=n.n(i);a.a},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*r(function(){n(1)}),"Object",o)}},8256:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},a=[],r=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    上传图片\n  ")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:t.uploadUrl,"list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n        选择上传\n      ")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n      取消\n    ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      确定\n    ")])],1)],1)}),o=[],s=(n("456d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],base_url:"http://api.10wan.ren",uploadUrl:null}},created:function(){this.uploadUrl=this.base_url+"/admin/hifans/upload_images"},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图像成功上传。如果存在网络问题，请刷新页面并重新上传！")},handleSuccess:function(t,e){if(2e4===t.code){for(var n=e.uid,i=Object.keys(this.listObj),a=0,r=i.length;a<r;a++)if(this.listObj[i[a]].uid===n)return this.listObj[i[a]].url=t.complete_path,void(this.listObj[i[a]].hasSuccess=!0)}else this.$message(t.message)},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,a=n.length;i<a;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){if(-1===t.type.indexOf("image"))return this.$message("选择正确的图片格式"),!1;var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise(function(a,r){var o=new Image;o.src=n.createObjectURL(t),o.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)})}}}),c=s,l=(n("471d"),n("2877")),u=Object(l["a"])(c,r,o,!1,null,"2fca9940",null),d=u.exports,f=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],h=f,m=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],p=m,b=(n("ac4d"),n("8a81"),[]);function g(){return window.tinymce}var v=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var a=document.createElement("script");a.src=t,a.id=t,document.body.appendChild(a),b.push(i);var r="onload"in a?o:s;r(a)}function o(e){e.onload=function(){this.onerror=this.onload=null;for(var t=0,n=b;t<n.length;t++){var i=n[t];i(null,e)}b=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function s(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,n=!1,i=void 0;try{for(var a,r=b[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var o=a.value;o(null,t)}}catch(s){n=!0,i=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}b=null}}}n&&i&&(g()?i(null,n):b.push(i))},y=v,_="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",w={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{zh:"zh_CN"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;y(_,function(e){e?t.$message.error(e.message):t.initTinymce()})},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:p,menubar:this.menubar,plugins:h,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))})}}},k=w,S=(n("aa0d"),Object(l["a"])(k,i,a,!1,null,"1dc056ac",null));e["a"]=S.exports},8691:function(t,e,n){"use strict";n.d(e,"b",function(){return a});var i=n("b775");function a(t){return Object(i["a"])({url:"/article/article_list",method:"post",data:t})}},aa0d:function(t,e,n){"use strict";var i=n("bfcc"),a=n.n(i);a.a},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(t,e,n){var a={},s=r(function(){return!!o[t]()||c[t]()!=c}),l=a[t]=s?e(f):o[t];n&&(a[n]=l),i(i.P+i.F*s,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},bfcc:function(t,e,n){},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,h="Number",m=i[h],p=m,b=m.prototype,g=r(n("2aeb")(b))==h,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var n,i,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>a)return NaN;return parseInt(c,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(g?c(function(){b.valueOf.call(n)}):r(n)!=h)?o(new p(y(e)),n,m):y(e)};for(var _,w=n("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)a(p,_=w[k])&&!a(m,_)&&d(m,_,u(p,_));m.prototype=b,b.constructor=m,n("2aba")(i,h,m)}},e8aa:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mixin-components-container"},[n("el-row",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{float:"left"}},[t._v("添加文档")]),t._v(" "),n("span",{staticStyle:{float:"right"}},[n("router-link",{attrs:{to:"/articles/list"}},[n("el-button",{attrs:{type:"primary"}},[t._v("返回列表")])],1)],1)]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"50px"}},[n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[n("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}})],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[n("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.handlecreate(0)}}},[t._v("保存草稿")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handlecreate(1)}}},[t._v("立即发布")])],1)],1)],1)])])],1)],1)},a=[],r=(n("96cf"),n("3b8d")),o=n("8256"),s=n("8691"),c={components:{Tinymce:o["a"]},data:function(){return{postForm:{title:"",content:"",status:""}}},methods:{handlecreate:function(t){var e,n=this;this.postForm.status=t,e=1===t?"确定要发布该文档吗?":"确定保存为草稿吗?",this.$confirm(e,"温馨提示",{confirmButtonText:"OK",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["addData"])(n.postForm);case 2:e=t.sent,2e4===e.code&&(n.$message({type:"success",message:e.message}),n.$router.push("/hifans/help/help_list"));case 4:case"end":return t.stop()}},t)}))).catch(function(t){console.error(t)})}}},l=c,u=(n("26f8"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"4f5eca24",null);e["default"]=d.exports},f878:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);