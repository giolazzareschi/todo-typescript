/// <reference path="TodoItem.ts" />
/// <reference path="ViewManager.ts" />

class Todo extends ViewManager {
	private _items :TodoItem[] = [];
	private hash: string = "";

	constructor( config :any ){
		super( config );
		this.renderSelector = config.renderSelector
	}

	get items() :TodoItem[]{
		return this._items;
	}

	set items( newitems :TodoItem[] ){
		this._items = newitems;
	}

	add( item :TodoItem ){
		this.hash += "|" + item.id;
		this._items.push(item);
	}

	itemExists( id: string ) :boolean{
		return this.hash.match(id) === null ? false : true;
	}

	public binds(): void{
		var dom = this.dom();
		dom.querySelector('.btn-add-item').addEventListener('click', this.addItem.bind(this), false);
	}

	private addItem() {
		var item: TodoItem = new TodoItem({
			name: "Validar coisas",
			renderSelector: ".todo-list ul"
		});
		if( !this.itemExists( item.id.toString() ) ){
			this.add(item);
			item.render({
				'id'   : item.id,
				'label' : item.name
			});
		}		
	}
}