define(["underscore","marionette","../constants"],function(e,t,i){var n=t.ItemView.extend({className:"search",template:"search",options:{placeholder:"Search...",delay:i.INPUT_DELAY},ui:{input:"input"},events:{"input @ui.input":"_triggerSearch"},constructor:function(i){i=i||{};var n=i.delay||e.result(this,"options").delay;this._triggerSearch=e.debounce(this.triggerSearch,n),t.ItemView.prototype.constructor.call(this,i),this.on("search",this.renderInputValue),this.search&&this.on("search",this.search)},onRender:function(){this.ui.input.attr("placeholder",this.options.placeholder);var t=this;e.defer(function(){t._isRendered&&!t.isClosed&&t.ui.input.focus()})},renderInputValue:function(e){this._triggering||this.ui.input.val(e)},triggerSearch:function(){var e=this.ui.input.val();this._triggering=!0,this.trigger("search",e),this._triggering=!1}});return{Search:n}});
//@ sourceMappingURL=search.js.map