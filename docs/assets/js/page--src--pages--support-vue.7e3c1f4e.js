(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Cj68:function(t,e,s){"use strict";var a=s("bqLV");s.n(a).a},LNMp:function(t,e,s){"use strict";var a=s("fGSy");s.n(a).a},Qv6u:function(t,e,s){"use strict";s.r(e);s("ToJy"),s("07d7");var a={name:"Supporter",props:["supporter","prefix"]},i=s("KHd+"),r={name:"SupportersList",props:["title","supporters","prefix"],components:{Supporter:Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"supporter-block px-4 py-1"},[s("div",{staticClass:"bg-grey"},[s("p",{staticClass:"py-4 px-5"},[t._v(t._s(t.prefix)+" "),s("span",{staticClass:"px-3"},[t._v(t._s(t.supporter.user)+" ")]),s("span",{staticClass:"font-bold"},[t._v(t._s("$"+t.supporter.amount.toFixed(2))+" ")])])])])}),[],!1,null,null,null).exports}},l=(s("LNMp"),Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"supporters-list p-4"},[s("h1",{staticClass:"pb-8 font-thin underline"},[t._v(t._s(t.title))]),s("section",t._l(t.supporters,(function(e){return s("Supporter",{key:e.user,attrs:{supporter:e,prefix:t.prefix}})})),1)])}),[],!1,null,null,null).exports),n=[{user:"Daffit",amount:100,early:!0},{user:"inoshi.net",amount:65.2,early:!0},{user:"bstefanski.com",amount:58,early:!0},{user:"iloveani.me",amount:54.5,early:!0},{user:"Slupik",amount:40,early:!0},{user:"MrGregorix",amount:30,early:!0},{user:"rehost.pl",amount:18.5,early:!0},{user:"guardspigot",amount:16,early:!0},{user:"jaredmeister",amount:15,early:!0},{user:"Macieg",amount:10,early:!0},{user:"wvffle",amount:8,early:!0},{user:"Kamilkime",amount:7.5,early:!0},{user:"Paradise-RPG.PL",amount:5,early:!0},{user:"szymex73",amount:3,early:!0},{user:"ProgrammingWizzard",amount:2,early:!0},{user:"Cytrus",amount:1,early:!0},{user:"julka",amount:.13,early:!0}],o={metaInfo:function(){return{title:"Support - Pandasite",meta:[this.social("descrition","How to help? There are 4 main ways to contribute to the organization.")]}},data:function(){return{value:5,min:1,max:100,formatter:"${value}",supporters:n.sort((function(t,e){return e.amount-t.amount}))}},components:{VueSlider:function(){return s.e(12).then(s.t.bind(null,"MSxQ",7))},SupportersList:l},methods:{paypal:function(){window.location.href="https://www.paypal.me/pandalang/"+this.value+"USD"}}},u=(s("Cj68"),Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"support"},[t._m(0),s("div",{staticClass:"container mx-auto relative mb-20"},[s("div",{staticClass:"mx-6 flex flex-col md_flex-row"},[t._m(1),s("div",{staticClass:"support-navbar w-1-1 md_w-1-2 border border-grey bg-grey rounded text-center p-8 flex flex-col justify-center"},[s("h1",{staticClass:"flex-initial font thin p-4 pb-2"},[t._v("Your donation will fund Panda development")]),s("div",{staticClass:"flex-1 p-2 heart p-5"},[s("div",{staticClass:"heart-icon inline-block",on:{click:function(e){return t.paypal()}}},[s("div",{staticClass:"absolute mt-1 heart-text pt-14 text-white pl-11"},[t._v("Donate "),s("span",{staticClass:"font-bold text-white"},[t._v("$"),s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.value)}})])]),s("i",{staticClass:"fa fa-heart fa-10x"})])]),s("div",{staticClass:"flex-initial"},[s("VueSlider",{attrs:{min:t.min,max:t.max,"tooltip-placement":["bottom"],"tooltip-formatter":t.formatter},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._m(2)],1)])]),s("div",{staticClass:"mt-20 text-center flex"},[s("div",{staticClass:"flex-1"},[s("hr",{staticClass:"z-4 absolute border-gray-400 mt-5 w-full left-0"}),s("h1",{staticClass:"bg-white inline-block relative px-8 mb-10"},[t._v("Supporters")]),s("div",{staticClass:"flex flex-wrap justify-center"},[s("SupportersList",{staticClass:"w-1-1 md_w-1-2",attrs:{title:"Top of all the time",supporters:t.supporters.slice(0,3),prefix:"👑"}}),s("SupportersList",{staticClass:"w-1-1 md_w-1-2",attrs:{title:"Top Early",supporters:t.supporters.filter((function(t){return t.early})).slice(0,3),prefix:"❤️"}}),s("SupportersList",{staticClass:"w-full full-list",attrs:{title:"All supporters",supporters:t.supporters}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"support-hero h-136 md_h-96"},[e("div",{staticClass:"container mx-auto relative z-5 mx-6 pt-8 justify-center flex"},[e("div",{staticClass:"flex flex-col mx-4"},[e("div",{staticClass:"flex-initial"},[e("h1",{staticClass:"inline-block my-4 py-4 px-6 text-black bg-white"},[this._v("How to help? 💕 ")])]),e("div",{staticClass:"flex-initial"},[e("p",{staticClass:"inline-block py-4 px-6 text-xbase bg-white text-black text-2xl font-thin"},[this._v("The "),e("span",{staticClass:"underline"},[this._v("panda-lang")]),this._v(" organization is an open source initiative."),e("br"),this._v("There are "),e("span",{staticClass:"font-normal"},[this._v("4 ")]),this._v("main ways to support this project.")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"support-content w-1-1 md_w-1-2 pr-6 mb-24 md_mb-0"},[s("article",{staticClass:"relative"},[s("hr",{staticClass:"z-4 absolute border-gray-300 w-full mt-9"}),s("h1",{staticClass:"bg-white pr-6 py-4 relative inline-block"},[t._v("For everyone")]),s("ul",{staticClass:"list-disc list-inside mx-4"},[s("li",[t._v("Star "),s("a",{staticClass:"text-blue-500",attrs:{href:""}},[t._v("Panda ")]),t._v("project on GitHub to reach a wider audience")]),s("li",[t._v("Create some projects on GitHub to increase the popularity and library database")])])]),s("article",{staticClass:"relative pt-12"},[s("hr",{staticClass:"z-4 absolute border-gray-300 w-full mt-9"}),s("h1",{staticClass:"bg-white pr-6 py-4 relative inline-block"},[t._v("For involved")]),s("ul",{staticClass:"list-disc list-inside mx-4"},[s("li",[t._v("Join the developers team and develop projects associated with Panda organization")]),s("li",[t._v("Consider a donation to help us in financial aspect of infrastucture")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-xxs italic mt-8"},[e("span",{staticClass:"font-bold"},[this._v("Note: ")]),this._v("Donations are validated manually, so it'll take some time before it appears below.\nFor other methods of payment, contact with us via payments@panda-lang.org")])}],!1,null,null,null));e.default=u.exports},ToJy:function(t,e,s){"use strict";var a=s("I+eb"),i=s("HAuM"),r=s("ewvW"),l=s("0Dky"),n=s("pkCn"),o=[],u=o.sort,p=l((function(){o.sort(void 0)})),c=l((function(){o.sort(null)})),m=n("sort");a({target:"Array",proto:!0,forced:p||!c||!m},{sort:function(t){return void 0===t?u.call(r(this)):u.call(r(this),i(t))}})},bqLV:function(t,e,s){},fGSy:function(t,e,s){}}]);