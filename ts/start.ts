/// <reference path="ZTodo.ts" />

window.Handlebars = {};

window.document.onreadystatechange = function(){
	if( this.readyState == "complete" || this.readyState == 200 ){
		window.onload = () => {
			var start = window.TPLS.templates["start"]();
			document.body.innerHTML = start;

			var todo = new Todo({
				renderSelector : 'div[appstage] .main-container'
			});

			todo.render({
				'customClass' : "todo-list"
			});
		}
	}
}