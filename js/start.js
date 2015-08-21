/// <reference path="ZTodo.ts" />
window.Handlebars = {};
window.document.onreadystatechange = function () {
    if (this.readyState == "complete" || this.readyState == 200) {
        window.onload = function () {
            document.body.innerHTML = '<div appstage />';
            var todo = new Todo({
                renderSelector: 'div[appstage]'
            });
            var el = document.createElement('div');
            todo.render({
                'customClass': "todo-list"
            });
        };
    }
};

//# sourceMappingURL=start.js.map