/// <reference path="ViewManager.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(config) {
        _super.call(this, config);
        this.name = config.name;
        this.id = Math.ceil(Math.abs(Math.random() * 500) * Math.random());
    }
    return TodoItem;
})(ViewManager);

//# sourceMappingURL=TodoItem.js.map