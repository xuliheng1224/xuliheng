webpackJsonp([2],{"3O6J":function(e,t){},AzT2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("vQ9I"),i={data:function(){return{name:"",radio:"ANTENATAL",labelPosition:"right",intro:"",examList:[],wareList:[],que:"",wareName:"",wareId:"",queId:"",starttime:"",endtime:"",options:[],option:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"},{value:"32",label:"32"},{value:"33",label:"33"},{value:"34",label:"34"},{value:"35",label:"35"},{value:"36",label:"36"},{value:"37",label:"37"},{value:"38",label:"38"},{value:"39",label:"39"},{value:"40",label:"40"}],upimg:"",options2:[],index1:0,index2:0}},methods:{changeradio:function(e){this.options2=[],"POSTPARTUM"===e?(this.starttime="",this.endtime="",this.options=[{label:"产后0天",value:"0"},{label:"产后42天",value:"42"},{label:"产后6个月",value:"180"},{label:"产后1年",value:"365"},{label:"产后2年",value:"720"},{label:"产后3年",value:"1095"}]):(this.starttime="",this.endtime="",this.options=this.option)},beforeAvatarUpload:function(e){return e.type.indexOf("image/jpeg")>-1||e.type.indexOf("image/png")>-1?e.size/1024/1024<2?void 0:(this.$message.error("上传头像图片大小不能超过 2MB!"),!1):(this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!"),!1)},changeClick:function(e){var t=this;this.options.forEach(function(a,l){a.value===e&&(t.options2=t.options.slice(l))})},changeke:function(e){this.index1=1},changece:function(){this.index2=1},handleSuccess:function(e,t){this.upimg=e.imagePath},isChinese:function(e){return!!new RegExp("[\\u4E00-\\u9FFF]+","g").test(e)},startss:function(){return"POSTPARTUM"===this.radio?"6"===this.starttime.replace(/[^0-9]/gi,"")?"180":"1"===this.starttime.replace(/[^0-9]/gi,"")?"365":"2"===this.starttime.replace(/[^0-9]/gi,"")?"720":"3"===this.starttime.replace(/[^0-9]/gi,"")?"1095":this.starttime.replace(/[^0-9]/gi,""):this.starttime},endss:function(){return"POSTPARTUM"===this.radio?"6"===this.endtime.replace(/[^0-9]/gi,"")?"180":"1"===this.endtime.replace(/[^0-9]/gi,"")?"365":"2"===this.endtime.replace(/[^0-9]/gi,"")?"720":"3"===this.endtime.replace(/[^0-9]/gi,"")?"1095":this.endtime.replace(/[^0-9]/gi,""):this.endtime},onSubmit:function(){var e=this,t={courseName:this.name,gestationalType:this.radio,weekMin:this.isChinese(this.starttime)?this.startss():this.starttime,weekMax:this.isChinese(this.endtime)?this.endss():this.endtime,wareId:0===this.index1?this.wareId:this.wareName,queId:0===this.index2?this.queId:this.que,courseIntro:this.intro,photo:this.upimg,courseId:this.$route.query.courseId},a=!1;t.courseName?t.gestationalType?t.weekMin?t.weekMax?t.courseIntro?a=!0:this.$message.error("请填写课文简介"):this.$message.error("请选择结束时间"):this.$message.error("请选择开始时间"):this.$message.error("请选择使用阶段"):this.$message.error("请填写课程名称"),!0===a&&Object(l.a)({url:"/crm/course/courseSave",method:"post",data:t,success:function(t){"0000"===t.data.code?(e.$notify({title:"保存成功",type:"success"}),setTimeout(function(){e.$router.push("/schoolInfo/textLibrary")},500)):e.$message.error(t.data.msg)},fail:function(e){console.log(e)}})},cancel:function(){this.$router.push("/schoolInfo/textLibrary")}},mounted:function(){var e=this;this.options=this.option,Object(l.a)({url:"/crm/course/courseDetail",method:"get",params:{courseId:this.$route.query.courseId},success:function(t){if("0000"===t.data.code){var a=t.data.data.course;e.examList=t.data.data.examList,e.wareList=t.data.data.wareList;var l=t.data.data.examList,i=t.data.data.wareList;e.name=a.courseName,e.courseIntro=a.courseExt.courseIntro,e.upimg=a.courseExt.photo,e.intro=a.courseExt.courseIntro,e.radio=a.courseExt.gestationalType,"POSTPARTUM"===a.courseExt.gestationalType?(e.starttime=a.courseExt.weekMinStr,e.endtime=a.courseExt.weekMaxStr,e.options=[{label:"产后0天",value:"0"},{label:"产后42天",value:"42"},{label:"产后6个月",value:"180"},{label:"产后1年",value:"365"},{label:"产后2年",value:"720"},{label:"产后3年",value:"1095"}]):(e.starttime=a.courseExt.weekMin,e.endtime=a.courseExt.weekMax,e.options=e.option),l.forEach(function(t,l){t.queId===a.queId&&(e.que=t.que,e.queId=t.queId)}),i.forEach(function(t,l){t.wareId===a.wareId&&(e.wareName=t.wareName,e.wareId=t.wareId)})}else e.$messge.error(t.data.msg)},fail:function(e){console.log(e)}})}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{background:"#fff",padding:"20px",overflow:"hidden"}},[a("h2",[e._v("课文编辑")]),e._v(" "),a("div",[a("el-form",{staticStyle:{width:"500px",float:"left"},attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"课文名称"}},[a("el-input",{model:{value:e.name,callback:function(t){e.name="string"==typeof t?t.trim():t},expression:"name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"适用阶段"}},[a("el-radio",{attrs:{label:"ANTENATAL"},on:{change:e.changeradio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("孕期")]),e._v(" "),a("el-radio",{attrs:{label:"POSTPARTUM"},on:{change:e.changeradio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("产后")])],1),e._v(" "),a("el-form-item",{attrs:{label:"孕周"}},[a("el-select",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请选择"},on:{change:e.changeClick},model:{value:e.starttime,callback:function(t){e.starttime=t},expression:"starttime"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v("\n        -\n        "),a("el-select",{staticStyle:{float:"right",width:"49%"},attrs:{placeholder:"请选择"},model:{value:e.endtime,callback:function(t){e.endtime=t},expression:"endtime"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"选择课件"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},on:{change:e.changeke},model:{value:e.wareName,callback:function(t){e.wareName=t},expression:"wareName"}},e._l(e.wareList,function(e){return a("el-option",{key:e.wareId,attrs:{label:e.wareName,value:e.wareId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"随堂测试"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},on:{change:e.changece},model:{value:e.que,callback:function(t){e.que=t},expression:"que"}},e._l(e.examList,function(e){return a("el-option",{key:e.queId,attrs:{label:e.que,value:e.queId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"课文简介"}},[a("el-input",{attrs:{type:"textarea",rows:8},model:{value:e.intro,callback:function(t){e.intro=t},expression:"intro"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1),e._v(" "),a("el-form",{staticStyle:{width:"500px",float:"left","margin-left":"50px"},attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"课文封面:"}},[a("div",{staticClass:"divimg"},[a("img",{attrs:{src:e.upimg,alt:""}})]),e._v(" "),a("div",[a("el-upload",{attrs:{action:"/msg/upload","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleSuccess,name:"img"}},[a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"}},[e._v("上传文件")])],1),e._v(" "),a("div",[a("p",[e._v("上传的封面将显示为课程课件")]),e._v(" "),a("p",[e._v("建议尺寸60*60")]),e._v(" "),a("p",[e._v("支持扩展名：jpg，png")])])],1)])],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(e){a("p7AK")},"data-v-6c7a2a1e",null);t.default=o.exports},Lc9Z:function(e,t){},U1Ag:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("vQ9I"),i={data:function(){return{name:"",radio:"ANTENATAL",labelPosition:"right",intro:"",examList:[],wareList:[],que:"",wareName:"",starttime:"",endtime:"",options:[],option:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"},{value:"32",label:"32"},{value:"33",label:"33"},{value:"34",label:"34"},{value:"35",label:"35"},{value:"36",label:"36"},{value:"37",label:"37"},{value:"38",label:"38"},{value:"39",label:"39"},{value:"40",label:"40"}],upimg:"",options2:[]}},methods:{changeradio:function(e){this.options2=[],"POSTPARTUM"===e?(this.starttime="",this.endtime="",this.options=[{label:"产后0天",value:"0"},{label:"产后42天",value:"42"},{label:"产后6个月",value:"180"},{label:"产后1年",value:"365"},{label:"产后2年",value:"720"},{label:"产后3年",value:"1095"}]):(this.starttime="",this.endtime="",this.options=this.option)},changeClick:function(e){var t=this;this.options.forEach(function(a,l){a.value===e&&(t.options2=t.options.slice(l))})},beforeAvatarUpload:function(e){return e.type.indexOf("image/jpeg")>-1||e.type.indexOf("image/png")>-1?e.size/1024/1024<2?void 0:(this.$message.error("上传头像图片大小不能超过 2MB!"),!1):(this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!"),!1)},handleSuccess:function(e,t){this.upimg=e.imagePath},onSubmit:function(){var e=this,t={courseName:this.name,gestationalType:this.radio,weekMin:this.starttime,weekMax:this.endtime,wareId:this.wareName,queId:this.que,courseIntro:this.intro,photo:this.upimg},a=!1;t.courseName?t.gestationalType?t.weekMin?t.weekMax?t.courseIntro?a=!0:this.$message.error("请填写课文简介"):this.$message.error("请选择结束时间"):this.$message.error("请选择开始时间"):this.$message.error("请选择使用阶段"):this.$message.error("请填写课程名称"),!0===a&&Object(l.a)({url:"/crm/course/courseSave",method:"post",data:t,success:function(t){"0000"===t.data.code?(e.$notify({title:"保存成功",type:"success"}),setTimeout(function(){e.$router.push("/schoolInfo/textLibrary")},500)):e.$message.error(t.data.msg)},fail:function(e){console.log(e)}})},cancel:function(){this.$router.push("/schoolInfo/textLibrary")}},mounted:function(){var e=this;this.options=this.option,Object(l.a)({url:"/crm/course/courseEdit",method:"get",success:function(t){"0000"===t.data.code?(e.examList=t.data.data.examList,e.wareList=t.data.data.wareList):e.$message.error(t.data.msg)},fail:function(e){console.log(e)}})}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{background:"#fff",padding:"20px",overflow:"hidden"}},[a("h2",[e._v("新增课文")]),e._v(" "),a("div",[a("el-form",{staticStyle:{width:"500px",float:"left"},attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"课文名称"}},[a("el-input",{model:{value:e.name,callback:function(t){e.name="string"==typeof t?t.trim():t},expression:"name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"适用阶段"}},[a("el-radio",{attrs:{label:"ANTENATAL"},on:{change:e.changeradio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("孕期")]),e._v(" "),a("el-radio",{attrs:{label:"POSTPARTUM"},on:{change:e.changeradio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("产后")])],1),e._v(" "),a("el-form-item",{attrs:{label:"孕周"}},[a("el-select",{staticStyle:{float:"left",width:"48%"},attrs:{placeholder:"请选择"},on:{change:e.changeClick},model:{value:e.starttime,callback:function(t){e.starttime=t},expression:"starttime"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v("\n        -\n        "),a("el-select",{staticStyle:{float:"right",width:"49%"},attrs:{placeholder:"请选择"},model:{value:e.endtime,callback:function(t){e.endtime=t},expression:"endtime"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"选择课件"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.wareName,callback:function(t){e.wareName=t},expression:"wareName"}},e._l(e.wareList,function(e){return a("el-option",{key:e.wareId,attrs:{label:e.wareName,value:e.wareId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"随堂测试"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.que,callback:function(t){e.que=t},expression:"que"}},e._l(e.examList,function(e){return a("el-option",{key:e.queId,attrs:{label:e.que,value:e.queId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"课文简介"}},[a("el-input",{attrs:{type:"textarea",rows:8},model:{value:e.intro,callback:function(t){e.intro=t},expression:"intro"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1),e._v(" "),a("el-form",{staticStyle:{width:"500px",float:"left","margin-left":"50px"},attrs:{"label-position":e.labelPosition,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"课文封面:"}},[a("div",{staticClass:"divimg"},[a("img",{attrs:{src:e.upimg,alt:""}})]),e._v(" "),a("div",[a("el-upload",{attrs:{action:"/msg/upload","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleSuccess,name:"img"}},[a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"}},[e._v("上传文件")])],1),e._v(" "),a("div",[a("p",[e._v("上传的封面将显示为课程课件")]),e._v(" "),a("p",[e._v("建议尺寸60*60")]),e._v(" "),a("p",[e._v("支持扩展名：jpg，png")])])],1)])],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(e){a("Lc9Z")},"data-v-329f74b0",null);t.default=o.exports},ouNV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("vQ9I"),i={data:function(){return{courseName:"",gestational:"",wareName:"",que:"",courseIntro:"",photo:""}},methods:{back:function(){history.back(-1)},editClick:function(){this.$router.push({path:"/textedit",query:{courseId:this.$route.query.courseId}})}},mounted:function(){var e=this;Object(l.a)({url:"/crm/course/courseDetail",method:"get",params:{courseId:this.$route.query.courseId},success:function(t){if("0000"===t.data.code){var a=t.data.data.course,l=t.data.data.examList,i=t.data.data.wareList;e.courseName=a.courseName,e.courseIntro=a.courseExt.courseIntro,e.photo=a.courseExt.photo,"ANTENATAL"===a.courseExt.gestationalType?e.gestational="孕期"+a.courseExt.weekMin+"~"+a.courseExt.weekMax+"周":e.gestational=a.courseExt.weekMinStr+"~"+a.courseExt.weekMaxStr,l.forEach(function(t,l){t.queId===a.queId&&(e.que=t.que)}),i.forEach(function(t,l){t.wareId===a.wareId&&(e.wareName=t.wareName)})}else e.$messge.error(t.data.msg)},fail:function(e){console.log(e)}})}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{background:"#fff",padding:"20px"}},[a("h2",[e._v("课文详情")]),e._v(" "),a("div",{staticClass:"itme"},[a("span",[e._v("课文名称")]),e._v(" "),a("time",[e._v(e._s(e.courseName))])]),e._v(" "),a("div",{staticClass:"itme"},[a("span",[e._v("试用阶段")]),e._v(" "),a("time",[e._v(e._s(e.gestational))])]),e._v(" "),a("div",{staticClass:"itme"},[a("span",[e._v("选择课件")]),e._v(" "),a("time",[e._v(e._s(e.wareName))])]),e._v(" "),a("div",{staticClass:"itme"},[a("span",[e._v("随堂测试")]),e._v(" "),a("time",[e._v(e._s(e.que))])]),e._v(" "),a("div",{staticClass:"itme"},[a("span",[e._v("课文简介")]),e._v(" "),a("time",[e._v(e._s(e.courseIntro))])]),e._v(" "),a("div",{staticClass:"lastitem"},[a("span",[e._v("课文封面")]),e._v(" "),a("img",{staticStyle:{height:"100%"},attrs:{src:e.photo,alt:""}})]),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:e.editClick}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.back}},[e._v("返回")])],1)])},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(e){a("3O6J")},"data-v-792856da",null);t.default=o.exports},p7AK:function(e,t){}});