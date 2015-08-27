/// <reference path="ViewManager.ts" />

class TodoItem extends ViewManager{	
	public id: number;
	public name: string;

	constructor( config: any ){
		super( config );
		this.name = config.name;
		this.id = Math.ceil(Math.abs(Math.random()*500) * Math.random());		
	}
}