(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/corona-statistic/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0401":function(e,t,n){},"281a":function(e,t,n){"use strict";var a=n("2fd5"),r=n.n(a);r.a},"2fd5":function(e,t,n){},"46e2":function(e,t,n){},"54bb":function(e,t,n){"use strict";var a=n("f3a5"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("27fd"),c=n("dfae"),o=n("9a63"),i=n("e32c"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{generalInfo:e.generalInfo}}),n("Alphabet",{attrs:{selectedChar:e.selectedChar},on:{handleSelectedCharChange:function(t){return e.handleSelectedCharChange(t)}}}),n("Country",{attrs:{isLoading:e.isLoading,currentCountryList:e.currentCountryList,countryData:e.countryData},on:{handleCountryChange:function(t){return e.handleCountryChange(t)}}})],1)},u=[],l=(n("4de4"),n("b64b"),n("2ca0"),n("96cf"),n("1da1")),d=n("bc3a"),f=n.n(d),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("h2",[e._v(e._s(new Date(e.generalInfo.lastUpdate)))]),n("Statistic",{attrs:{countryData:e.generalInfo}})],1)},h=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("a-col",{attrs:{span:8,type:"flex",justify:"center",align:"middle"}},[n("h4",[e._v("CONFIRMED")]),n("span",{staticClass:"confirmed"},[e._v(e._s(e.countryData&&e.countryData.confirmed))])]),n("a-col",{attrs:{span:8,type:"flex",justify:"center",align:"middle"}},[n("h4",[e._v("DEATHS")]),n("span",{staticClass:"deaths"},[e._v(e._s(e.countryData&&e.countryData.deaths))])]),n("a-col",{attrs:{span:8,type:"flex",justify:"center",align:"middle"}},[n("h4",[e._v("RECOVERED")]),n("span",{staticClass:"recovered"},[e._v(e._s(e.countryData&&e.countryData.recovered))])])],1)},y=[],g={name:"Statistic",props:{countryData:Object}},m=g,C=(n("281a"),n("2877")),b=Object(C["a"])(m,v,y,!1,null,"49803758",null),_=b.exports,j={name:"Header",props:{generalInfo:Object},components:{Statistic:_}},w=j,O=(n("f724"),Object(C["a"])(w,p,h,!1,null,"7f87876b",null)),x=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alphabet-container"},[n("div",e._l(e.list,(function(t){return n("a-avatar",{key:t.key,staticClass:"alphabet-avatar",style:t.selected?"color: #f56a00; backgroundColor: #fde3cf":"",attrs:{shape:"square"},on:{click:function(n){return e.handleAvatarClick(t.key)}}},[e._v(e._s(t.key))])})),1)])},D=[],L=(n("d81d"),n("ac1f"),n("1276"),{name:"Alphabet",props:{selectedChar:String},data:function(){return{list:[]}},methods:{handleAvatarClick:function(e){this.$emit("handleSelectedCharChange",e)},createListAndUpdateSelectedChar:function(){var e=this,t="abcdefghijklmnopqrstuvwxyz".toUpperCase();this.list=t.split("").map((function(t){return t===e.selectedChar?{key:t,selected:!0}:{key:t,selected:!1}}))}},created:function(){this.createListAndUpdateSelectedChar()},watch:{selectedChar:function(){this.createListAndUpdateSelectedChar()}}}),S=L,A=(n("8eab"),Object(C["a"])(S,k,D,!1,null,"556256dd",null)),E=A.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"country-container"},[e._v(" "+e._s(e.activeKey)+" "),e._l(e.currentCountryList,(function(t){return n("a-collapse",{key:t,staticClass:"country-collapse-container",attrs:{accordion:""},on:{change:function(n){return e.handleCountryClick(t)}},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[n("a-collapse-panel",{key:t,attrs:{header:t}},[e.isLoading?n("Loading"):n("Statistic",{attrs:{countryData:e.countryData}})],1)],1)}))],2)},R=[],$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading-container"},[n("div",{staticClass:"loading"})])}],K={name:"Loading"},P=K,M=(n("54bb"),Object(C["a"])(P,$,U,!1,null,"d06d1dba",null)),H=M.exports,T={name:"Country",props:{currentCountryList:Array,countryData:Object,isLoading:Boolean},data:function(){return{activeKey:null}},methods:{handleCountryClick:function(e){e===this.activeKey&&this.$emit("handleCountryChange",e)}},watch:{activeKey:function(e){console.log(e)}},components:{Statistic:_,Loading:H}},q=T,J=(n("e56d"),Object(C["a"])(q,I,R,!1,null,"2b2aa754",null)),z=J.exports,B=n("f64c"),F="https://covid19.mathdro.id/api/",N={name:"App",data:function(){return{generalInfo:{confirmed:null,recovered:null,deaths:null,lastUpdate:null},countries:{},countryData:null,selectedChar:"A",isLoading:!1}},methods:{handleSelectedCharChange:function(e){this.selectedChar=e},handleCountryChange:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o,i,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.countries[e],n.prev=1,t.isLoading=!0,n.next=5,f.a.get("".concat(F,"countries/").concat(a));case 5:r=n.sent,c=r.data,o=c.confirmed,i=c.recovered,s=c.deaths,u={confirmed:o.value,recovered:i.value,deaths:s.value},t.countryData=u,t.isLoading=!1,n.next=18;break;case 13:n.prev=13,n.t0=n["catch"](1),t.isLoading=!1,B["a"].error("Country data not found!"),t.countryData=null;case 18:case"end":return n.stop()}}),n,null,[[1,13]])})))()}},computed:{currentCountryList:function(){var e=this,t=Object.keys(this.countries),n=t.filter((function(t){return t.startsWith(e.selectedChar)}));return n}},components:{Header:x,Alphabet:E,Country:z},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(F);case 2:n=t.sent,a=n.data,r=a.confirmed,c=a.recovered,o=a.deaths,i=a.lastUpdate,e.generalInfo.confirmed=r.value,e.generalInfo.recovered=c.value,e.generalInfo.deaths=o.value,e.generalInfo.lastUpdate=i;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(F,"countries"));case 2:n=t.sent,a=n.data.countries,e.countries=a;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n(),a();case 4:case"end":return t.stop()}}),t)})))()}},V=N,W=Object(C["a"])(V,s,u,!1,null,null,null),G=W.exports;n("202f");a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(c["a"]),a["a"].use(o["a"]),a["a"].use(i["a"]),new a["a"]({render:function(e){return e(G)}}).$mount("#app")},"8eab":function(e,t,n){"use strict";var a=n("0401"),r=n.n(a);r.a},"9aca":function(e,t,n){},e56d:function(e,t,n){"use strict";var a=n("9aca"),r=n.n(a);r.a},f3a5:function(e,t,n){},f724:function(e,t,n){"use strict";var a=n("46e2"),r=n.n(a);r.a}});
//# sourceMappingURL=app.65105c0d.js.map