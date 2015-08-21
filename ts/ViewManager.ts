/// <reference path="vars.ts" />

class ViewManager{
	protected renderSelector :string;
	private Handlebars :Object;
	private TPLS :TPLS;

	constructor(){
		this.TPLS = window.TPLS;
		this.Handlebars = window.Handlebars;
	}

	public dom() :any {
		return document.querySelector( this.renderSelector );
	}

	public render( config :Object ){

		var html = this.template( config );

		if( typeof(html) === "object" )
			this.dom().appendChild( html );
		else
			this.dom().innerHTML = html;
	}

	public template( params :Object ) :Object {
		var name:string = this.constructor.name;
		return this.TPLS.templates[ name ]( params );
	}
}