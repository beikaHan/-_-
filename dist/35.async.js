(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"/AcZ":function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var o=n(a("bx4M"));a("qVdP");var l=n(a("jsC+"));a("lUTK");var s=n(a("BvKs"));a("jCWc");var d=n(a("kPKH"));a("+L6B");var r=n(a("2/Rp"));a("Pwec");var u=n(a("CtXQ")),c=n(a("J4zp")),f=n(a("MVZn")),p=n(a("lwsE")),m=n(a("W8MJ")),h=n(a("a1gu")),g=n(a("Nsbk")),v=n(a("7W2i")),y=n(a("PJYZ"));a("5NDa");var I=n(a("5rEg"));a("OaEy");var w=n(a("2fM7"));a("y8nQ");var E=n(a("Vl3Y"));a("7Kak");var b=n(a("9yH6"));a("2qtc");var k,C,Q,S=n(a("kLXV")),x=i(a("q1tI")),q=a("MuoO"),A=n(a("fTLR")),L=n(a("FnG8")),T=n(a("pjgK")),M=(n(a("UPwx")),n(a("XZXw"))),D=n(a("ZvwG")),N=(n(a("wd/R")),n(a("wJzL"))),V=S.default.confirm,R=(b.default.Group,E.default.Item,w.default.Option,I.default.TextArea,k=(0,q.connect)(function(e){return{questionnaireInvestigation:e.questionnaireInvestigation}}),C=E.default.create(),k(Q=C(Q=function(e){function t(){var e,a;(0,p.default)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=(0,h.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(i))),a.state={formValues:{},pagination:{rows:10,page:1},addModalTitle:"",addModalType:"",addModalItem:"",addVisible:!1,selectedRows:[],detailVisible:!1,detail:{},itemId:"",resourceData:[{items:[{schoolQuestionnaireItemAnswer:{content:""}}],schoolQuestionnaireItem:{content:""},resourceId:null}]},a.handleStandardTableChange=function(e){var t=a.props.dispatch,n=a.state.formValues,i=(0,f.default)({page:e.current,rows:e.pageSize},n);a.setState({pagination:{rows:e.pageSize,page:e.current}}),t({type:"questionnaireInvestigation/getSchoolQuestionnaireList",payload:i})},a.handleSearch=function(e){e.preventDefault();var t=a.props,n=t.dispatch,i=t.form,o=a.state.pagination;i.validateFields(["titleS"],function(e,t){var i=(0,f.default)({},t,o,{page:1});a.setState({formValues:i,pagination:(0,f.default)({},o,{page:1})}),n({type:"questionnaireInvestigation/getSchoolQuestionnaireList",payload:i})})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.addShow=function(e,t){var n="",i="",o=(0,y.default)((0,y.default)(a));"edit"===e?(n="\u7f16\u8f91",i=t.id,a.props.dispatch({type:"questionnaireInvestigation/getSchoolQuestionnaireItem",payload:{id:t.id},callback:function(e){e&&e.length>0&&o.setState({resourceData:e})}})):n="\u65b0\u589e",a.setState({addVisible:!0,addModalTitle:n,addModalType:e,addModalItem:t,itemId:i})},a.addHide=function(){a.setState({addVisible:!1,addModalTitle:"",addModalType:"",addModalItem:"",itemId:"",resourceData:[{items:[{schoolQuestionnaireItemAnswer:{content:""}}],schoolQuestionnaireItem:{content:""},resourceId:null}]})},a.decorateItems=function(){},a.add=function(){var e=a.state.resourceData,t=a.props,n=t.dispatch,i=t.form,o=a.state,l=o.addModalItem,s=o.addModalType,d=o.pagination,r=o.formValues,u=(0,y.default)((0,y.default)(a));i.validateFields(function(t,a){if(!t){e.forEach(function(e,t){e=Object.assign(e,e.schoolQuestionnaireItem),delete a["item-"+t+e.content],delete e.schoolQuestionnaireItem,e.items.forEach(function(e,n){e=Object.assign(e,e.schoolQuestionnaireItemAnswer),delete a["item-"+t+"-"+n+e.content],delete e.schoolQuestionnaireItemAnswer})});var i={};"edit"===s?(i=(0,f.default)({},a,{items:e,id:l.id}),console.log(JSON.stringify(i)),delete i.titleS,n({type:"questionnaireInvestigation/uptSchoolQuestionnaireData",payload:{values:(0,f.default)({},i),searchVal:(0,f.default)({},r,d)},callback:function(){u.addHide()}})):(i=(0,f.default)({},a,{items:e}),console.log(JSON.stringify(i)),delete i.titleS,n({type:"questionnaireInvestigation/addSchoolQuestionnaireData",payload:{values:(0,f.default)({},i),searchVal:(0,f.default)({},d,{page:1})},callback:function(){u.addHide()}}))}})},a.delInfo=function(e){(0,y.default)((0,y.default)(a));var t=a.props.dispatch,n=a.state,i=n.formValues,o=n.pagination;V({title:"",content:"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"questionnaireInvestigation/delSchoolQuestionnaireData",payload:{ids:[e.id],searchVal:(0,f.default)({},i,o)}})},onCancel:function(){}})},a.handleMenuClick=function(e){var t=a.props.dispatch,n=a.state,i=n.formValues,o=n.selectedRows,l=n.pagination,s=(0,y.default)((0,y.default)(a));if(o&&!(o.length<=0))switch(e.key){case"del":V({title:"",content:"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"questionnaireInvestigation/delSchoolQuestionnaireData",payload:{ids:o.map(function(e){return e.id}),searchVal:(0,f.default)({},i,l)},callback:function(){s.setState({selectedRows:[]})}})},onCancel:function(){this.setState({selectedRows:[]})}});break;default:break}},a.handleInfo=function(e){(0,y.default)((0,y.default)(a));var t=a.props.dispatch;t({type:"questionnaireInvestigation/pushWX",payload:{id:e.id}})},a.detailHide=function(e,t){var n=(0,y.default)((0,y.default)(a)),i=a.props.dispatch;e?i({type:"questionnaireInvestigation/resultData",payload:{id:t.id},callback:function(){n.setState({detailVisible:e})}}):a.setState({detailVisible:e})},a.changeQuesList=function(e,t,n){var i=a.state.resourceData&&a.state.resourceData.length>0?a.state.resourceData.slice(0):[];"plus"===e?i.push({items:[{schoolQuestionnaireItemAnswer:{content:""}}],schoolQuestionnaireItem:{content:""},resourceId:null}):i.splice(t,1),a.setState({resourceData:i})},a.changeAnsList=function(e,t,n,i){var o=a.state.resourceData&&a.state.resourceData.length>0?a.state.resourceData.slice(0):[];if("plus"===e)o[t].items.push({schoolQuestionnaireItemAnswer:{content:""}});else{var l=t.split("-"),s=(0,c.default)(l,2),d=s[0],r=s[1];o[d].items.splice(r,1)}a.setState({resourceData:o})},a.onChangeQues=function(e,t){var n=a.state.resourceData&&a.state.resourceData.length>0?a.state.resourceData.slice(0):[];n[t].schoolQuestionnaireItem||(n[t].schoolQuestionnaireItem={}),n[t].schoolQuestionnaireItem.content=e,a.setState({resourceData:n})},a.onChangeAns=function(e,t,n){var i=a.state.resourceData&&a.state.resourceData.length>0?a.state.resourceData.slice(0):[];i[t].items[n].schoolQuestionnaireItemAnswer||(i[t].items[n].schoolQuestionnaireItemAnswer={}),i[t].items[n].schoolQuestionnaireItemAnswer.content=e,a.setState({resourceData:i})},a}return(0,v.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.state,a=t.pagination,n=t.formValues;e({type:"questionnaireInvestigation/getSchoolQuestionnaireList",payload:(0,f.default)({},a,n)})}},{key:"renderForm",value:function(){var e=this;return x.default.createElement(E.default,{onSubmit:this.handleSearch,layout:"inline"},x.default.createElement(L.default,{dispatch:this.props,dataInx:"titleS",con:"\u6807\u9898",innerCon:"\u8bf7\u8f93\u5165\u6807\u9898",maxLength:"15",size:{lg:12,xl:8,xxl:6}}),x.default.createElement(T.default,{dispatch:this.props,con:"\u641c\u7d22",size:{lg:12,xl:8,xxl:1}}),x.default.createElement(d.default,{id:"mediaXl"},x.default.createElement(r.default,{type:"primary",style:{marginLeft:"10px"},onClick:function(){return e.addShow()}},x.default.createElement(u.default,{type:"plus-circle"}),"\u65b0\u589e")))}},{key:"render",value:function(){var e=this,t=this.props,a=t.questionnaireInvestigation,n=a.loading,i=a.schoolQuestionnaireData,c=a.joinUserCount,f=a.schoolQuestionnaireItem,p=(a.resultDataList,a.resultDataListItems),m=(t.form.getFieldDecorator,this.state),h=m.addVisible,g=m.addModalTitle,v=(m.addModalType,m.itemId),y=m.detailVisible,I=m.resourceData,w=x.default.createElement(s.default,{onClick:this.handleMenuClick,selectedKeys:[]},x.default.createElement(s.default.Item,{key:"del"},"\u6279\u91cf\u5220\u9664"));return x.default.createElement(M.default,{title:"\u95ee\u5377\u8c03\u67e5"},x.default.createElement(o.default,{bordered:!1},x.default.createElement("div",{className:D.default.classManageList},x.default.createElement("div",{className:D.default.classManageListForm},this.renderForm(),x.default.createElement(d.default,{lg:12,xl:8,xxl:6,className:D.default.pointerSpan},x.default.createElement("span",{className:D.default.tableListOperator},x.default.createElement("span",null,x.default.createElement(l.default,{overlay:w},x.default.createElement(r.default,{style:{width:"150px"}},"\u6279\u91cf\u64cd\u4f5c ",x.default.createElement(u.default,{type:"down"}))))))),x.default.createElement(A.default,{loading:n,data:i,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange,dispatch:this.props.dispatch,uptInfo:this.addShow,delInfo:this.delInfo,handleInfo:this.handleInfo,detailInfo:this.detailHide}))),x.default.createElement(S.default,{title:"\u8be6\u7ec6",visible:y,onOk:function(){return e.detailHide(!1,{})},onCancel:function(){return e.detailHide(!1,{})}},x.default.createElement("div",null,"\u53c2\u4e0e\u4eba\u6570\uff1a",c),p&&p.map(function(e){x.default.createElement("div",{key:e.schoolQuestionnaireItem.id},x.default.createElement("div",null,"\u9898\u76ee\uff1a",e.schoolQuestionnaireItem.content),e.items&&e.items.map(function(e){x.default.createElement("div",null,"\u7ed3\u679c\uff1a",e.schoolQuestionnaireItemAnswer.content," ",e.schoolQuestionnaireItemAnswer.choiceCount)}))})),h?x.default.createElement(N.default,{dispatch:this.props,addVisible:h,addShow:this.addShow,addHide:this.addHide,addModalTitle:g,add:this.add,itemId:v,itemDetails:f,items:I,changeQuesList:this.changeQuesList,changeAnsList:this.changeAnsList,onChangeQues:this.onChangeQues,onChangeAns:this.onChangeAns}):"")}}]),t}(x.Component))||Q)||Q);t.default=R},Pnr0:function(e,t,a){e.exports={manageTable:"antd-pro\\components\\-questionnaire-investigation\\index-manageTable",classManageTable:"antd-pro\\components\\-questionnaire-investigation\\index-classManageTable",allWidth:"antd-pro\\components\\-questionnaire-investigation\\index-allWidth",recordWidth:"antd-pro\\components\\-questionnaire-investigation\\index-recordWidth",brtWidth:"antd-pro\\components\\-questionnaire-investigation\\index-brtWidth",handle:"antd-pro\\components\\-questionnaire-investigation\\index-handle",showAdd:"antd-pro\\components\\-questionnaire-investigation\\index-showAdd",add:"antd-pro\\components\\-questionnaire-investigation\\index-add",nav:"antd-pro\\components\\-questionnaire-investigation\\index-nav",icon:"antd-pro\\components\\-questionnaire-investigation\\index-icon",content:"antd-pro\\components\\-questionnaire-investigation\\index-content",upload:"antd-pro\\components\\-questionnaire-investigation\\index-upload",uploadAns:"antd-pro\\components\\-questionnaire-investigation\\index-uploadAns",hideAdd:"antd-pro\\components\\-questionnaire-investigation\\index-hideAdd",mediaBtn:"antd-pro\\components\\-questionnaire-investigation\\index-mediaBtn"}},ZvwG:function(e,t,a){e.exports={classManageList:"antd-pro\\pages\\-questionnaire-investigation\\-manage-classManageList",tableListOperator:"antd-pro\\pages\\-questionnaire-investigation\\-manage-tableListOperator",mockBtn:"antd-pro\\pages\\-questionnaire-investigation\\-manage-mockBtn",classManageListForm:"antd-pro\\pages\\-questionnaire-investigation\\-manage-classManageListForm",submitButtons:"antd-pro\\pages\\-questionnaire-investigation\\-manage-submitButtons",tableListForm:"antd-pro\\pages\\-questionnaire-investigation\\-manage-tableListForm",classManageEdit:"antd-pro\\pages\\-questionnaire-investigation\\-manage-classManageEdit",pointerSpan:"antd-pro\\pages\\-questionnaire-investigation\\-manage-pointerSpan"}},fTLR:function(e,t,a){"use strict";var n=a("284h"),i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var o=i(a("wCAj")),l=i(a("MVZn"));a("/zsF");var s=i(a("PArb")),d=i(a("lwsE")),r=i(a("W8MJ")),u=i(a("a1gu")),c=i(a("Nsbk")),f=i(a("7W2i")),p=n(a("q1tI")),m=(i(a("wd/R")),i(a("Pnr0"))),h=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(i))),a.state={selectedRowKeys:[]},a.handleRowSelectChange=function(e,t){var n=t.reduce(function(e,t){return(e||0)+parseFloat(t.callNo||0,10)},0);a.props.onSelectRow&&a.props.onSelectRow(t),a.setState({selectedRowKeys:e,totalCallNo:n})},a.cleanSelectedKeys=function(){a.handleRowSelectChange([],[])},a.handleTableChange=function(e,t,n){a.props.onChange(e,t,n)},a.handleInfo=function(e){a.props.handleInfo(e)},a.delInfo=function(e){a.props.delInfo(e)},a.uptInfo=function(e,t){a.props.uptInfo(e,t)},a.detailInfo=function(e,t){a.props.detailInfo(e,t)},a}return(0,f.default)(t,e),(0,r.default)(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=a.list,i=a.pagination,d=t.loading,r=this.state.selectedRowKeys,u=[{title:"\u6807\u9898",dataIndex:"title",key:"title",className:m.default.allWidth},{title:"\u63a8\u9001\u65f6\u95f4",dataIndex:"pushTime",key:"pushTime",className:m.default.allWidth},{title:"\u63a8\u9001\u7ed9",dataIndex:"2",key:"2",className:m.default.allWidth},{title:"\u9884\u89c8",dataIndex:"content",key:"content",className:m.default.allWidth,render:function(t,a){return p.default.createElement("div",{className:m.default.handle},p.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.detailInfo(!0,a)}},"\u8c03\u67e5\u7ed3\u679c\u9884\u89c8"))}},{title:"\u64cd\u4f5c",key:"operate",className:m.default.brtWidth,align:"center",render:function(t,a){return p.default.createElement("div",{className:m.default.handle},p.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.delInfo(a)}},"\u5220\u9664"),p.default.createElement(s.default,{type:"vertical"}),p.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.uptInfo("edit",a)}},"\u4fee\u6539"),p.default.createElement(s.default,{type:"vertical"}),p.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.handleInfo(a)}},"\u63a8\u9001"))}}],c=(0,l.default)({showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["10","20","50","100"]},i),f={selectedRowKeys:r,onChange:this.handleRowSelectChange,getCheckboxProps:function(e){return{disabled:e.disabled}}};return p.default.createElement("div",{className:"".concat(m.default.classManageTable," ").concat(m.default.manageTable)},p.default.createElement(o.default,{loading:d,rowKey:function(e){return e.id},dataSource:n,columns:u,rowSelection:f,pagination:c,onChange:this.handleTableChange}))}}]),t}(p.Component),g=h;t.default=g},wJzL:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var o=n(a("2/Rp")),l=n(a("pVnL"));a("Pwec");var s=n(a("CtXQ")),d=n(a("lwsE")),r=n(a("W8MJ")),u=n(a("a1gu")),c=n(a("Nsbk")),f=n(a("7W2i"));a("5NDa");var p=n(a("5rEg"));a("OaEy");var m=n(a("2fM7"));a("7Kak");var h=n(a("9yH6"));a("y8nQ");var g,v,y=n(a("Vl3Y")),I=i(a("q1tI")),w=(n(a("wd/R")),a("MuoO"),n(a("Pnr0"))),E=(a("7Qib"),n(a("kruT")),y.default.Item),b=(h.default.Button,h.default.Group,m.default.Option,p.default.TextArea),k=(g=y.default.create(),g(v=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(i))),a.state={width:"100%"},a.resizeFooterToolbar=function(){var e=document.querySelectorAll(".ant-layout-sider")[0],t="calc(100% - ".concat(e.style.width,")");a.state.width!==t&&a.setState({width:t})},a.handleGoBack=function(){a.props.addHide()},a.handleChange=function(e){e.preventDefault(),a.props.add()},a.changeQuesList=function(e,t){a.props.changeQuesList(e,t)},a.changeAnsList=function(e,t,n){a.props.changeAnsList(e,t,n)},a.onChangeQues=function(e,t){a.props.onChangeQues(e.target.value,t)},a.onChangeAns=function(e,t,n){a.props.onChangeAns(e.target.value,t,n)},a}return(0,f.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"renderForm",value:function(){var e=this,t=this.props,a=t.itemId,n=t.addVisible,i=t.itemDetails,d=t.addModalTitle,r=t.items,u=this.props.dispatch.form,c=u.getFieldDecorator,f=(u.getFieldValue,{labelCol:{span:4},wrapperCol:{xs:{span:28,offset:0},sm:{span:10,offset:0}}});return I.default.createElement("div",{className:w.default.showAdd},I.default.createElement("div",{className:n?w.default.add:w.default.hideAdd},I.default.createElement("div",{className:w.default.nav},I.default.createElement(s.default,{type:"left",className:w.default.icon,onClick:this.handleGoBack})," ",d),I.default.createElement("div",{className:w.default.content},I.default.createElement(y.default,{onSubmit:this.handleChange,layout:"inline"},I.default.createElement("div",{className:w.default.upload},I.default.createElement(E,(0,l.default)({label:"\u6807\u9898"},f,{colon:!1}),c("title",{initialValue:""!=a&&i.title?i.title:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}]})(I.default.createElement(p.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",maxLength:"30",autoComplete:"off"})))),r&&r.map(function(t,a){return I.default.createElement("div",{key:a},I.default.createElement("div",{className:w.default.upload},I.default.createElement(E,(0,l.default)({label:"\u95ee\u9898"+(a+1)},f,{colon:!1,className:w.default.answer}),c("".concat("item-"+a).concat(t.schoolQuestionnaireItem?t.schoolQuestionnaireItem.content:""),{initialValue:t.schoolQuestionnaireItem&&void 0!=t.schoolQuestionnaireItem.content?t.schoolQuestionnaireItem.content:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u95ee\u9898"}]})(I.default.createElement(b,{className:w.default.description,onChange:function(t){return e.onChangeQues(t,a)},maxLength:200}))),I.default.createElement("div",{style:{marginTop:"9px",height:"57px"}},r.length>1?I.default.createElement(o.default,{type:"danger",ghost:!0,style:{float:"right"},onClick:function(){return e.changeQuesList("minus",a,t)}},"\u5220\u9664\u95ee\u9898"):"",I.default.createElement(o.default,{type:"dashed",style:{marginRight:"10px",float:"right"},onClick:function(){return e.changeAnsList("plus",a)}},"\u6dfb\u52a0\u7b54\u6848"))),t.items&&t.items.map(function(n,i){return I.default.createElement("div",{className:w.default.uploadAns,key:a+"-"+i},I.default.createElement(E,(0,l.default)({label:"\u7b54\u6848 "+(i+1)},f,{colon:!1,className:w.default.answer}),c("".concat("item-"+a+"-"+i).concat(n.schoolQuestionnaireItemAnswer?n.schoolQuestionnaireItemAnswer.content:""),{initialValue:n.schoolQuestionnaireItemAnswer&&void 0!=n.schoolQuestionnaireItemAnswer.content?n.schoolQuestionnaireItemAnswer.content:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7b54\u6848"}]})(I.default.createElement(b,{className:w.default.description,onChange:function(t){return e.onChangeAns(t,a,i)},maxLength:200}))),I.default.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItem:"center",marginBottom:"20px"}},t.items.length>1?I.default.createElement(o.default,{type:"danger",ghost:!0,onClick:function(){return e.changeAnsList("minus",a+"-"+i,n)}},"\u5220\u9664\u7b54\u6848"):""))}))}),I.default.createElement("div",{style:{width:"100%",marginLeft:"100px"}},I.default.createElement(o.default,{style:{width:"50%",marginTop:16,marginBottom:8},type:"dashed",onClick:function(){return e.changeQuesList("plus")},icon:"plus",id:"mediaBtn"},"\u6dfb\u52a0\u95ee\u9898")),I.default.createElement("span",{style:{width:"100%",display:"block",textAlign:"center",marginTop:100}},I.default.createElement(o.default,{type:"primary",htmlType:"submit",style:{marginRight:"20px",padding:"0 50px"}},"\u4fdd\u5b58"),I.default.createElement(o.default,{htmlType:"submit",onClick:this.handleGoBack,style:{padding:"0 50px"}},"\u53d6\u6d88"))))))}},{key:"render",value:function(){return I.default.createElement("div",null,this.renderForm())}}]),t}(I.Component))||v),C=k;t.default=C}}]);