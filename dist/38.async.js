(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"/qk8":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var u=n(a("TeRw")),r=n(a("MVZn")),o=n(a("o0o1")),s=a("qWOT"),i=(n(a("wd/R")),a("b/c7")),l={namespace:"guideManage",state:{loading:!1,schoolGuideItem:{},schoolGuideData:{list:[],pagination:{}}},subscriptions:{setup:function(e){e.dispatch,e.history}},effects:{getSchoolGuideList:o.default.mark(function e(t,a){var n,u,r,l,c,d,p;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,t.callback,u=a.call,a.select,r=a.put,l={rows:n&&n.rows?n.rows:10,page:n&&n.page?n.page:1,title:n&&n.titleS?n.titleS:""},e.next=5,u(s.getSchoolGuide,l);case 5:if(c=e.sent,(0,i.validResult)(c)){e.next=8;break}return e.abrupt("return");case 8:return d={},p={},p.current=c.data.current?parseInt(c.data.current):1,p.pageSize=c.data.size?parseInt(c.data.size):10,p.total=parseInt(c.data.total),d.pagination=p,d.list=c.data.list,e.next=17,r({type:"saveSchoolGuideData",payload:d});case 17:case"end":return e.stop()}},e,this)}),addSchoolGuideData:o.default.mark(function e(t,a){var n,l,c,d,p,f;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,l=t.callback,c=a.call,a.select,d=a.put,p=(0,r.default)({},n.values),console.log(p),e.next=6,c(s.addSchoolGuideData,p);case 6:if(f=e.sent,(0,i.validResult)(f)){e.next=9;break}return e.abrupt("return");case 9:return u.default.success({message:"\u64cd\u4f5c\u6210\u529f"}),e.next=12,d({type:"getSchoolGuideList",payload:(0,r.default)({},n.searchVal)});case 12:l&&l();case 13:case"end":return e.stop()}},e,this)})},reducers:{changeLoading:function(e,t){return(0,r.default)({},e,{loading:t.payload})},saveCP:function(e,t){return(0,r.default)({},e,t.payload)},saveSchoolGuideData:function(e,t){return(0,r.default)({},e,{schoolGuideData:t.payload})}}};t.default=l},qWOT:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getSchoolGuide=s,t.addSchoolGuideData=l;var u=n(a("o0o1")),r=n(a("yXPU")),o=n(a("t3Un"));function s(e){return i.apply(this,arguments)}function i(){return i=(0,r.default)(u.default.mark(function e(t){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("/schoolGuide/list",{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),i.apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return c=(0,r.default)(u.default.mark(function e(t){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.default)("/schoolGuide/add",{method:"POST",body:t}));case 1:case"end":return e.stop()}},e,this)})),c.apply(this,arguments)}}}]);