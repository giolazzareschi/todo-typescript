class TodoItem{	
	constructor( private nm :string ){}

	get name() :string{
		return this.nm;
	}

	set name( nm :string ){
		this.nm = nm;
	}
}