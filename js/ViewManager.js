/// <reference path="vars.ts" />
var ViewManager = (function () {
    function ViewManager() {
        this.TPLS = window.TPLS;
        this.Handlebars = window.Handlebars;
    }
    ViewManager.prototype.dom = function () {
        return document.querySelector(this.renderSelector);
    };
    ViewManager.prototype.render = function (config) {
        var html = this.template(config);
        if (typeof (html) === "object")
            this.dom().appendChild(html);
        else
            this.dom().innerHTML = html;
    };
    ViewManager.prototype.template = function (params) {
        var name = this.constructor.name;
        return this.TPLS.templates[name](params);
    };
    return ViewManager;
})();

//# sourceMappingURL=ViewManager.js.map