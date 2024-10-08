(window.webpackJsonp=window.webpackJsonp||[]).push([[20,27],{354:function(e,t,o){},366:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function c(e){const t=document.querySelector(":root"),o=r[e],c="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(c),t.classList.add(e)}function a(e){if("auto"!==e)return void c(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&c("dark"),o&&c("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();c(e<6||e>=18?"dark":"light")}}},373:function(e,t,o){"use strict";o(354)},374:function(e,t,o){},388:function(e,t,o){"use strict";o.r(t);var r=o(366),c={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)}),Object(r.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(r.a)(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},a=(o(373),o(2)),n=Object(a.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,r){return t("li",{key:r,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null);t.default=n.exports},392:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,c){if(!o(t))return;function a(t){if(c.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,r=t.length;o<r;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(c.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const n="ontouchstart"in document.documentElement?"touchstart":"click";!r(c)&&document.addEventListener(n,a)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const c="ontouchstart"in document.documentElement?"touchstart":"click";!r(o)&&e.__vueClickOutside__&&document.removeEventListener(c,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},393:function(e,t,o){"use strict";o(374)},417:function(e,t,o){"use strict";o.r(t);var r=o(63),c=o(392),a=o.n(c),n=o(388),i=o(366),s={name:"UserSettings",directives:{"click-outside":a.a},components:{ModePicker:n.default,RecoIcon:r.b,ModuleTransition:r.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(i.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(i.a)(e)})),Object(i.a)(e))},methods:{hideMenu(){this.showMenu=!1}}},u=(o(393),o(2)),l=Object(u.a)(s,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);