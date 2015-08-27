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
        _super.call(this, config);
        this._items = [];
        this.hash = "";
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
        this.hash += "|" + item.id;
        this._items.push(item);
    };
    Todo.prototype.itemExists = function (id) {
        return this.hash.match(id) === null ? false : true;
    };
    Todo.prototype.binds = function () {
        var dom = this.dom();
        dom.querySelector('.btn-add-item').addEventListener('click', this.addItem.bind(this), false);
    };
    Todo.prototype.addItem = function () {
        var item = new TodoItem({
            name: "Validar coisas",
            renderSelector: ".todo-list ul"
        });
        if (!this.itemExists(item.id.toString())) {
            this.add(item);
            item.render({
                'id': item.id,
                'label': item.name
            });
        }
    };
    return Todo;
})(ViewManager);

//# sourceMappingURL=ZTodo.js.map