/// <reference path="vars.ts" />
/// <reference path="IEvents.ts" />
var ViewManager = (function () {
    function ViewManager(config) {
        this.TPLS = window.TPLS;
        this.Handlebars = window.Handlebars;
        this.renderSelector = config.renderSelector;
    }
    ViewManager.prototype.dom = function () {
        return this._dom;
    };
    ViewManager.prototype.render = function (config) {
        var html = this.template(config), temp = document.createElement('div');
        temp.innerHTML = html;
        this._dom = temp.children[0];
        this.binds();
        document.querySelector(this.renderSelector).appendChild(this._dom);
    };
    ViewManager.prototype.template = function (params) {
        var name = this.constructor.name;
        return this.TPLS.templates[name](params);
    };
    ViewManager.prototype.binds = function () {
    };
    return ViewManager;
})();

//# sourceMappingURL=ViewManager.js.map