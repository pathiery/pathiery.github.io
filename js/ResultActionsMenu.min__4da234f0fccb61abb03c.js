webpackJsonpCoveo__temporary([64],{265:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),s=n(8),u=n(1),r=n(5),l=n(2),p=n(0),c=n(3);n(649);var a=function(t){function e(n,o,i,u){var r=t.call(this,n,e.ID,i)||this;return r.element=n,r.options=o,r.bindings=i,r.result=u,r.options=s.ComponentOptions.initComponentOptions(n,e,o),r.initializeParentResult(),r.bindEvents(),r.buildMenuItems(),r}return o(e,t),e.prototype.show=function(){u.$$(this.element).addClass(e.SHOW_CLASS)},e.prototype.hide=function(){u.$$(this.element).removeClass(e.SHOW_CLASS)},e.prototype.initializeParentResult=function(){this.parentResult=u.$$(this.element).closest("CoveoResult"),r.Assert.check(void 0!==this.parentResult,"ResultActionsMenu needs to be a child of a Result"),u.$$(this.parentResult).addClass("coveo-clickable")},e.prototype.bindEvents=function(){var t=this;u.$$(this.parentResult).on("click",function(){return t.show()}),u.$$(this.parentResult).on("mouseleave",function(){return t.hide()}),this.options.openOnMouseOver&&u.$$(this.parentResult).on("mouseenter",function(){return t.show()})},e.prototype.buildMenuItems=function(){var t=this;this.menuItems=[],p.forEach(u.$$(this.element).children(),function(e){t.menuItems.push(e),u.$$(e).addClass("coveo-result-actions-menu-menu-item")})},e.ID="ResultActionsMenu",e.doExport=function(){c.exportGlobally({ResultActionsMenu:e})},e.SHOW_CLASS="coveo-menu-opened",e.options={openOnMouseOver:s.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(i.Component);e.ResultActionsMenu=a,l.Initialization.registerAutoCreateComponent(a)},649:function(t,e){}});