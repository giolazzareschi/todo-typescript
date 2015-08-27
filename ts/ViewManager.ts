/// <reference path="vars.ts" />
/// <reference path="IEvents.ts" />

class ViewManager implements IEvents{
	protected renderSelector :string;
	private _dom: any;
	private Handlebars :Object;
	private TPLS :TPLS;

	constructor( config:any ){
		this.TPLS = window.TPLS;
		this.Handlebars = window.Handlebars;
		this.renderSelector = config.renderSelector
	}

	public dom() :HTMLElement {
		return this._dom;
	}

	public render( config :Object ){
		var html:string = this.template( config ), temp:any = document.createElement('div');

		temp.innerHTML = html;
		this._dom = temp.children[0];
		this.binds();		
		document.querySelector(this.renderSelector).appendChild( this._dom );
	}

	public template( params :Object ) :string {
		var name:string = this.constructor.name;
		return this.TPLS.templates[ name ]( params );
	}

	public binds(): void{

	}
}