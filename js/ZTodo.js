/// <reference path="TodoItem.ts" />
/// <reference path="ViewManager.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo(config) {
        _super.call(this);
        this._items = [];
        this.renderSelector = config.renderSelector;
    }
    Object.defineProperty(Todo.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (newitems) {
            this._items = newitems;
        },
        enumerable: true,
        configurable: true
    });
    Todo.prototype.add = function (item) {
        this._items.push(item);
    };
    return Todo;
})(ViewManager);

//# sourceMappingURL=ZTodo.js.map