(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"7j1A":function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.getClassifyAll=u,e.getClassify=c,e.addClassifyData=d,e.getClassifyItem=f,e.uptClassifyItem=y,e.delClassify=v,e.getSchoolMaterial=b,e.addSchoolMaterialData=k,e.getSchoolMaterialItem=M,e.uptSchoolMaterialItem=S,e.delSchoolMaterial=I;var n=r(a("o0o1")),s=r(a("yXPU")),l=r(a("t3Un"));function u(t){return i.apply(this,arguments)}function i(){return i=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/all",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}function c(t){return o.apply(this,arguments)}function o(){return o=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/list",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function d(t){return p.apply(this,arguments)}function p(){return p=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/add",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/get",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return w=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/update",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),w.apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return x=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterialClassify/del",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),x.apply(this,arguments)}function b(t){return m.apply(this,arguments)}function m(){return m=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterial/list",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),m.apply(this,arguments)}function k(t){return g.apply(this,arguments)}function g(){return g=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterial/add",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),g.apply(this,arguments)}function M(t){return C.apply(this,arguments)}function C(){return C=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterial/get",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),C.apply(this,arguments)}function S(t){return D.apply(this,arguments)}function D(){return D=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterial/update",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),D.apply(this,arguments)}function I(t){return P.apply(this,arguments)}function P(){return P=(0,s.default)(n.default.mark(function t(e){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/schoolMaterial/del",{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),P.apply(this,arguments)}},B7cu:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("/xke");var n=r(a("TeRw")),s=r(a("MVZn")),l=r(a("o0o1")),u=(r(a("wd/R")),a("b/c7")),i=a("7j1A"),c={namespace:"teachingManage",state:{loading:!1,classifyItem:{},classifyData:{list:[],pagination:{}},videoItem:{},videoData:{list:[],pagination:{}},picItem:{},picData:{list:[],pagination:{}},audioItem:{},audioData:{list:[],pagination:{}},documentItem:{},documentData:{list:[],pagination:{}},classifyAllData:[]},subscriptions:{setup:function(t){t.dispatch,t.history}},effects:{getClassifyAll:l.default.mark(function t(e,a){var r,n,s,c;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,e.callback,r=a.call,a.select,n=a.put,s={},t.next=5,r(i.getClassifyAll,s);case 5:if(c=t.sent,(0,u.validResult)(c)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n({type:"saveCP",payload:{classifyAllData:c.data.list}});case 10:case"end":return t.stop()}},t,this)}),getClassifyList:l.default.mark(function t(e,a){var r,n,s,c,o,d,p;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,e.callback,n=a.call,a.select,s=a.put,c={rows:r&&r.rows?r.rows:10,page:r&&r.page?r.page:1,title:r&&r.titleS?r.titleS:""},t.next=5,n(i.getClassify,c);case 5:if(o=t.sent,(0,u.validResult)(o)){t.next=8;break}return t.abrupt("return");case 8:return d={},p={},p.current=o.data.current?parseInt(o.data.current):1,p.pageSize=o.data.size?parseInt(o.data.size):10,p.total=parseInt(o.data.total),d.pagination=p,d.list=o.data.list,t.next=17,s({type:"saveClassifyData",payload:d});case 17:case"end":return t.stop()}},t,this)}),addClassifyData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,p=(0,s.default)({},r.values),console.log(p),t.next=6,o(i.addClassifyData,p);case 6:if(f=t.sent,(0,u.validResult)(f)){t.next=9;break}return t.abrupt("return");case 9:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=12,d({type:"getClassifyList",payload:(0,s.default)({},r.searchVal)});case 12:c&&c();case 13:case"end":return t.stop()}},t,this)}),getClassifyItem:l.default.mark(function t(e,a){var r,n,s,c,o;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,e.callback,n=a.call,a.select,s=a.put,c={id:r.id},t.next=5,n(i.getClassifyItem,c);case 5:if(o=t.sent,(0,u.validResult)(o)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,s({type:"saveCP",payload:{classifyItem:o.data.schoolMaterialClassify}});case 10:case"end":return t.stop()}},t,this)}),uptClassifyData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,p=(0,s.default)({},r.values),t.next=5,o(i.uptClassifyItem,p);case 5:if(f=t.sent,(0,u.validResult)(f)){t.next=8;break}return t.abrupt("return");case 8:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=11,d({type:"getClassifyList",payload:(0,s.default)({},r.searchVal)});case 11:c&&c();case 12:case"end":return t.stop()}},t,this)}),delClassifyData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,console.log(r),p={ids:r&&r.ids?r.ids:[]},t.next=6,o(i.delClassify,p);case 6:if(f=t.sent,(0,u.validResult)(f)){t.next=9;break}return t.abrupt("return");case 9:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=12,d({type:"getClassifyList",payload:(0,s.default)({},r.searchVal)});case 12:c&&c();case 13:case"end":return t.stop()}},t,this)}),getSchoolMaterialList:l.default.mark(function t(e,a){var r,n,s,c,o,d,p;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,e.callback,n=a.call,a.select,s=a.put,c={rows:r&&r.rows?r.rows:10,page:r&&r.page?r.page:1,title:r&&r.titleS?r.titleS:"",classifyId:r&&r.classifyIdS?r.classifyIdS:"",type:r&&r.type?r.type:1},t.next=5,n(i.getSchoolMaterial,c);case 5:if(o=t.sent,(0,u.validResult)(o)){t.next=8;break}return t.abrupt("return");case 8:if(d={},p={},p.current=o.data.current?parseInt(o.data.current):1,p.pageSize=o.data.size?parseInt(o.data.size):10,p.total=parseInt(o.data.total),d.pagination=p,d.list=o.data.list,1!==c.type){t.next=18;break}return t.next=18,s({type:"saveVideoData",payload:d});case 18:if(2!==c.type){t.next=21;break}return t.next=21,s({type:"savePicData",payload:d});case 21:if(3!==c.type){t.next=24;break}return t.next=24,s({type:"saveAudioData",payload:d});case 24:if(4!==c.type){t.next=27;break}return t.next=27,s({type:"saveDocumentData",payload:d});case 27:case"end":return t.stop()}},t,this)}),addSchoolMaterialData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,p=(0,s.default)({},r.values),console.log(p),t.next=6,o(i.addSchoolMaterialData,p);case 6:if(f=t.sent,(0,u.validResult)(f)){t.next=9;break}return t.abrupt("return");case 9:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=12,d({type:"getSchoolMaterialList",payload:(0,s.default)({},r.searchVal)});case 12:c&&c();case 13:case"end":return t.stop()}},t,this)}),getSchoolMaterialItem:l.default.mark(function t(e,a){var r,n,s,c,o,d;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=e.callback,s=a.call,a.select,c=a.put,o={id:r.id,type:r.type},t.next=5,s(i.getSchoolMaterialItem,o);case 5:if(d=t.sent,(0,u.validResult)(d)){t.next=8;break}return t.abrupt("return");case 8:if(1!==o.type){t.next=11;break}return t.next=11,c({type:"saveCP",payload:{videoItem:d.data.schoolMaterial}});case 11:if(2!==o.type){t.next=14;break}return t.next=14,c({type:"saveCP",payload:{picItem:d.data.schoolMaterial}});case 14:if(3!==o.type){t.next=17;break}return t.next=17,c({type:"saveCP",payload:{audioItem:d.data.schoolMaterial}});case 17:if(4!==o.type){t.next=20;break}return t.next=20,c({type:"saveCP",payload:{documentItem:d.data.schoolMaterial}});case 20:n&&n(d.data.schoolMaterial);case 21:case"end":return t.stop()}},t,this)}),uptSchoolMaterialData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,p=(0,s.default)({},r.values),t.next=5,o(i.uptSchoolMaterialItem,p);case 5:if(f=t.sent,(0,u.validResult)(f)){t.next=8;break}return t.abrupt("return");case 8:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=11,d({type:"getSchoolMaterialList",payload:(0,s.default)({},r.searchVal)});case 11:c&&c();case 12:case"end":return t.stop()}},t,this)}),delSchoolMaterialData:l.default.mark(function t(e,a){var r,c,o,d,p,f;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=e.callback,o=a.call,a.select,d=a.put,console.log(r),p={ids:r&&r.ids?r.ids:[]},t.next=6,o(i.delSchoolMaterial,p);case 6:if(f=t.sent,(0,u.validResult)(f)){t.next=9;break}return t.abrupt("return");case 9:return n.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),t.next=12,d({type:"getSchoolMaterialList",payload:(0,s.default)({},r.searchVal)});case 12:c&&c();case 13:case"end":return t.stop()}},t,this)})},reducers:{changeLoading:function(t,e){return(0,s.default)({},t,{loading:e.payload})},saveCP:function(t,e){return(0,s.default)({},t,e.payload)},saveClassifyData:function(t,e){return(0,s.default)({},t,{classifyData:e.payload})},saveVideoData:function(t,e){return(0,s.default)({},t,{videoData:e.payload})},savePicData:function(t,e){return(0,s.default)({},t,{picData:e.payload})},saveAudioData:function(t,e){return(0,s.default)({},t,{audioData:e.payload})},saveDocumentData:function(t,e){return(0,s.default)({},t,{documentData:e.payload})}}};e.default=c}}]);