var globalThis=this,self=this;module.exports=require("../_commons/0.js")([{ids:[20],modules:{145:function(t,a){Component({options:{multipleSlots:!0,virtualHost:!0},properties:{extClass:{type:String,value:""},buttons:{type:Array,value:[],observer:function(){this.addClassNameForButton()}},disable:{type:Boolean,value:!1},icon:{type:Boolean,value:!1},show:{type:Boolean,value:!1,observer:function(){this.st&&(this.data.show?this.showButtons():this.hideButtons())}},duration:{type:Number,value:350},throttle:{type:Number,value:40},rebounce:{type:Number,value:0}},lifetimes:{ready:function(){this.addClassNameForButton(),this.st={movex:wx.worklet.shared(0),max:wx.worklet.shared(0),startX:wx.worklet.shared(0),startY:wx.worklet.shared(0),out:wx.worklet.shared(this.data.show),isMoving:wx.worklet.shared(!1),firstAngle:wx.worklet.shared(0),buttons:wx.worklet.shared([])},this.initAnimate()}},methods:{addClassNameForButton:function(){var t=this.data,a=t.buttons,e=t.icon;a.forEach((function(t){e?t.className="":"warn"===t.type?t.className="weui-slideview__btn-group_warn":t.className="weui-slideview__btn-group_default"})),this.setData({buttons:a})},buttonTap:function(t){this.hideButtons();var a=t.currentTarget.dataset.index;this.triggerEvent("buttontap",{index:a,data:this.data.buttons[a].data},{})},transitionEnd:function(){},showButtons:function(){if(!this.data.disable){var t=this.st,a=t.movex,e=t.max,s=t.out;s.value||(s.value=!0,a.value=this.data.duration?wx.worklet.timing(e.value,{duration:this.data.duration},(function(){})):e.value,this.triggerEvent("show",{},{}))}},hideButtons:function(){if(!this.data.disable){var t=this.st,a=t.movex,e=t.out;e.value&&(e.value=!1,a.value=this.data.duration?wx.worklet.timing(0,{duration:this.data.duration},(function(){})):0,this.triggerEvent("hide",{},{}))}},initAnimate:function(){var t=this;this.applyAnimatedStyle(".weui-slideview__left",(function(){"worklet";var a=t.st.movex;return{transform:"translateX(".concat(-a.value,"px)")}})),this.createSelectorQuery().selectAll(".btn").boundingClientRect((function(a){for(var e=0,s=[],i=a.length-1;i>=0;i--)e+=a[i].width,s[i]=e;t.st.buttons.value=s,t.st.max.value=e,t.data.show&&(t.st.movex.value=e);for(var o=function(a){t.applyAnimatedStyle(".btn-".concat(a),(function(){"worklet";var e=t.st,s=e.movex,i=e.max,o=e.buttons.value[a],n=s.value*o/i.value;return{transform:"translateX(".concat(-n,"px)")}}))},n=a.length-1;n>=0;n--)o(n)})).exec()},touchstart:function(t){"worklet";if(!this.data.disable){var a=this.st,e=a.startX,s=a.startY,i=a.firstAngle;e.value=t.touches[0].pageX,s.value=t.touches[0].pageY,i.value=0}},touchmove:function(t){"worklet";if(!this.data.disable){var a=this.st,e=a.startX,s=a.startY,i=a.firstAngle,o=a.isMoving,n=a.movex,u=a.max,r=a.out,l=t.touches[0].pageX-e.value,h=t.touches[0].pageY-s.value;if(0===i.value&&(i.value=Math.abs(l)-Math.abs(h)),!(i.value<0))return o.value=!0,r.value?n.value=Math.max(0,Math.min(u.value-l,u.value)):n.value=Math.max(0,Math.min(-l,u.value)),!1}},touchend:function(t){"worklet";if(!this.data.disable){var a=this.data.throttle,e=this.st,s=e.startX,i=e.isMoving;if(i.value){var o=t.changedTouches[0].pageX-s.value;i.value=!1,Math.abs(o)<a||o>0?this.hideButtons():this.showButtons()}}}}})},15:function(t,a,e){t.exports=e(145)}},entries:[[15,0]]}]);