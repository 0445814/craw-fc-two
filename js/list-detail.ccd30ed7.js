(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list-detail"],{"13b3":function(t,e,i){},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},3860:function(t,e,i){"use strict";var s=i("604c");e["a"]=s["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"615b":function(t,e,i){},"63b7":function(t,e,i){},"8adc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("b0af"),n=i("80d2"),a=Object(n["h"])("v-card__actions"),o=Object(n["h"])("v-card__subtitle"),r=Object(n["h"])("v-card__text"),l=Object(n["h"])("v-card__title");s["a"]},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var s=i("5530"),n=(i("615b"),i("10d2")),a=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(a["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b81c:function(t,e,i){"use strict";i("a9e3"),i("c7cd");var s=i("5530"),n=(i("dd43"),i("3a66")),a=i("3860"),o=i("a9ad"),r=i("24b2"),l=i("a452"),c=i("277e"),u=i("7560"),h=i("f2e7"),d=i("58df"),v=i("d9bd");e["a"]=Object(d["a"])(Object(n["a"])("bottom",["height","inputValue"]),o["a"],r["a"],Object(h["b"])("inputValue"),l["a"],c["a"],u["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return c["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(v["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(a["a"],this.setTextColor(this.color,e),this.$slots.default)}})},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var s=i("3835"),n=i("5530"),a=(i("8adc"),i("58df")),o=i("0789"),r=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),h=i("f2e7"),d=i("1c87"),v=i("af2b"),p=i("d9bd");e["a"]=Object(a["a"])(l["a"],v["a"],d["a"],u["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(p["a"])(n,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,a=i.data;a.attrs=Object(n["a"])(Object(n["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var o=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(o,a),e)}})},cfb9:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{attrs:{sm:9}},[i("v-card",{staticClass:"pa-5"},[i("div",{staticClass:"d-flex align-top mb-3"},[i("h2",{staticClass:"text-h6 text-no-wrap mr-3"},[t._v(" 標題: ")]),t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus eligendi quod accusamus facere modi maxime cum quis, eius rerum quibusdam quam illo iusto ad non pariatur mollitia neque ullam! ")]),i("div",{staticClass:"d-flex align-top mb-3"},[i("h2",{staticClass:"text-h6 text-no-wrap mr-3"},[t._v(" 賣家: ")]),t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus eligendi quod accusamus facere modi maxime cum quis, eius rerum quibusdam quam illo iusto ad non pariatur mollitia neque ullam! ")]),i("div",{staticClass:"d-flex align-top mb-3"},[i("h2",{staticClass:"text-h6 text-no-wrap mr-3"},[t._v(" 標籤: ")]),t._l(10,(function(e){return i("v-chip",{key:e,staticClass:"mr-3",attrs:{color:"white",small:"",link:"",pill:"",outlined:""}},[t._v(" 美食 ")])}))],2),i("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,s){return i("v-carousel-item",{key:s},[i("v-sheet",{attrs:{color:t.colors[s],height:"100%"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("div",{staticClass:"display-3"},[t._v(" "+t._s(e)+" Slide ")])])],1)],1)})),1),i("v-container",{attrs:{fluid:""}},[i("v-row",t._l(6,(function(t){return i("v-col",{key:t,attrs:{cols:2}},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image=1","lazy-src":"https://picsum.photos/10/6?image=1","aspect-ratio":"1"}})],1)})),1)],1)],1)],1),i("v-col",{attrs:{sm:3}},[i("v-card",{staticClass:"pa-5"},[i("h2",{staticClass:"text-h6 mb-3 "},[t._v(" 此賣家其他影片... ")]),i("div",{staticClass:"overflow-auto",staticStyle:{"max-height":"80vh"}},[i("v-card",t._l(10,(function(e){return i("v-card",{key:e,staticClass:"mb-3"},[i("v-img",{staticClass:"white--text align-end",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"165px"}},[i("router-link",{staticClass:"white--text text-decoration-none",attrs:{to:"/list/"+e}},[i("h2",{staticClass:"text-h5 text-truncate font-weight-bold pa-3"},[t._v(" Pre-fab homes11111111111111111111111111111111111111111111111 ")])])],1),i("v-card-actions",[i("router-link",{staticClass:"text--secondary text-truncate text-decoration-none mr-lg-16",attrs:{to:"/"}},[t._v(" Ke12312312312312312312123123123131231233n ")]),i("v-spacer"),i("v-icon",{staticClass:"d-none d-md-inline mr-1",attrs:{color:"grey darken-2",small:""}},[t._v(" mdi-clock-time-four-outline ")]),i("span",{staticClass:"d-none d-md-inline secondary--text text--lighten-2 text-no-wrap"},[t._v(" 2020-01-24 ")])],1),i("v-bottom-navigation",{attrs:{height:40}},[i("v-btn",{attrs:{value:"favorites"}},[i("v-icon",[t._v("mdi-heart")])],1),i("v-btn",{attrs:{value:"preview"}},[i("v-icon",[t._v("mdi-folder-image")])],1)],1)],1)})),1)],1)])],1)],1)],1)},n=[],a={name:"ListDetail",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},o=a,r=i("2877"),l=i("6544"),c=i.n(l),u=i("b81c"),h=i("8336"),d=i("b0af"),v=i("99d9"),p=(i("a9e3"),i("5530")),m=(i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),f=i("afdd"),g=i("9d26"),b=i("604c"),w=b["a"].extend({name:"v-window",directives:{Touch:m["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(p["a"])(Object(p["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var s,n=this,a={click:function(t){t.stopPropagation(),n.changedByDelimiters=!0,i()}},o={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},r=null!=(s=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:a,attrs:o}))?s:[this.$createElement(f["a"],{props:{icon:!0},attrs:o,on:a},[this.$createElement(g["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},r)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){var n=this.genIcon("next",s,this.next);n&&t.push(n)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var s=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:s})}return t("div",i,[this.genContainer()])}}),C=i("37c6"),y=i("3860"),x=i("80d2"),B=i("d9bd"),$=w.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},w.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(B["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:w.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],s=0;s<e;s++){var n=this.$createElement(f["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(g["a"],{props:{size:18}},this.delimiterIcon)]);i.push(n)}return this.$createElement(y["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(C["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=w.options.render.call(this,t);return e.data.style="height: ".concat(Object(x["g"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),_=i("9d65"),T=i("4e82"),O=i("58df"),k=Object(O["a"])(_["a"],Object(T["a"])("windowGroup","v-window-item","v-window")),j=k.extend().extend().extend({name:"v-window-item",directives:{Touch:m["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(x["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(x["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),I=i("adda"),S=i("1c87"),V=Object(O["a"])(j,S["a"]),A=V.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(I["a"],{staticClass:"v-carousel__item",props:Object(p["a"])(Object(p["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(x["r"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),D=i("cc20"),E=i("62ad"),G=i("a523"),P=i("132d"),H=i("0fd9"),q=i("8dd9"),L=i("2fa4"),R=Object(r["a"])(o,s,n,!1,null,null,null);e["default"]=R.exports;c()(R,{VBottomNavigation:u["a"],VBtn:h["a"],VCard:d["a"],VCardActions:v["a"],VCarousel:$,VCarouselItem:A,VChip:D["a"],VCol:E["a"],VContainer:G["a"],VIcon:P["a"],VImg:I["a"],VRow:H["a"],VSheet:q["a"],VSpacer:L["a"]})},dd43:function(t,e,i){}}]);
//# sourceMappingURL=list-detail.ccd30ed7.js.map