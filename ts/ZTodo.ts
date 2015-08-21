/// <reference path="TodoItem.ts" />
/// <reference path="ViewManager.ts" />

class Todo extends ViewManager {
	private _items :TodoItem[] = [];

	constructor( config :any ){
		super();
		this.renderSelector = config.renderSelector
	}

	get items() :TodoItem[]{
		return this._items;
	}

	set items( newitems :TodoItem[] ){
		this._items = newitems;
	}

	add( item :TodoItem ){
		this._items.push(item);
	}
}