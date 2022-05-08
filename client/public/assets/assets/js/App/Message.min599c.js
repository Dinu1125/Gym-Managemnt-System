/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/App/Message",["exports","Site"],factory);else if("undefined"!=typeof exports)factory(exports,require("Site"));else{var mod={exports:{}};factory(mod.exports,global.Site),global.AppMessage=mod.exports}}(this,function(exports,_Site2){"use strict";function getInstance(){return instance||(instance=new AppMessage),instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getInstance=exports.run=exports.AppMessage=void 0;var _Site3=babelHelpers.interopRequireDefault(_Site2),ChatsWrap=function(){function ChatsWrap($el){var _this=this;babelHelpers.classCallCheck(this,ChatsWrap),this.$el=$el,this.$historyBtn=$("#historyBtn"),this.scrollChatsToBottom(),$(window).on("resize",function(){_this.scrollChatsToBottom()})}return babelHelpers.createClass(ChatsWrap,[{key:"scrollChatsToBottom",value:function(){var $el=this.$el,chatsWrapH=$el.height(),chatsH=$(".chats",$el).outerHeight(),historyBtnH=this.$historyBtn.outerHeight();$el.scrollTop(chatsH+historyBtnH-chatsWrapH)}}]),ChatsWrap}(),AppMessage=function(_Site){function AppMessage(){return babelHelpers.classCallCheck(this,AppMessage),babelHelpers.possibleConstructorReturn(this,(AppMessage.__proto__||Object.getPrototypeOf(AppMessage)).apply(this,arguments))}return babelHelpers.inherits(AppMessage,_Site),babelHelpers.createClass(AppMessage,[{key:"initialize",value:function(){babelHelpers.get(AppMessage.prototype.__proto__||Object.getPrototypeOf(AppMessage.prototype),"initialize",this).call(this),this.newChatLists=[],this.$chatsWrap=$(".app-message-chats"),this.chatApi=new ChatsWrap(this.$chatsWrap),this.$textArea=$(".message-input textarea"),this.$textareaWrap=$(".app-message-input"),this.$msgEdit=$(".message-input>.form-control"),this.$sendBtn=$(".message-input-btn"),this.states={chatListsLength:0}}},{key:"process",value:function(){babelHelpers.get(AppMessage.prototype.__proto__||Object.getPrototypeOf(AppMessage.prototype),"process",this).call(this),this.steupMessage(),this.setupTextarea()}},{key:"chatListsLength",value:function(length){if(this.newChatLists[length-1]){var $newMsg=$("<div class='chat-content'><p>"+this.newChatLists[length-1]+"</p></div>");$(".chat").last().find(".chat-body").append($newMsg),this.$msgEdit.attr("placeholder",""),this.$msgEdit.val("")}else this.$msgEdit.attr("placeholder","type text here...");this.chatApi.scrollChatsToBottom(),this.states.chatListsLength=length}},{key:"setupTextarea",value:function(){var _this3=this;autosize($(".message-input textarea")),this.$textArea.on("autosize:resized",function(){_this3.$chatsWrap.css("height","calc(100% - "+_this3.$textareaWrap.outerHeight()+"px)"),_this3.triggerResize()})}},{key:"steupMessage",value:function(){var _this4=this;this.$sendBtn.on("click",function(){var num=_this4.states.chatListsLength;_this4.newChatLists.push(_this4.getMsg()),_this4.chatListsLength(++num)})}},{key:"getMsg",value:function(){return this.$msgEdit.val()}}]),AppMessage}(_Site3.default),instance=null;exports.default=AppMessage,exports.AppMessage=AppMessage,exports.run=function(){getInstance().run()},exports.getInstance=getInstance});