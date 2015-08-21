var TodoItem = (function () {
    function TodoItem(nm) {
        this.nm = nm;
    }
    Object.defineProperty(TodoItem.prototype, "name", {
        get: function () {
            return this.nm;
        },
        set: function (nm) {
            this.nm = nm;
        },
        enumerable: true,
        configurable: true
    });
    return TodoItem;
})();

//# sourceMappingURL=TodoItem.js.map