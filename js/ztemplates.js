this["TPLS"] = this["TPLS"] || {};
this["TPLS"]["templates"] = this["TPLS"]["templates"] || {};
this["TPLS"]["templates"]["start"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div appstage class=\"entry-point-app\">\r\n	<div class=\"center\">\r\n		<h1>Todo list</h1>\r\n		<div class=\"main-container\"></div>\r\n	</div>\r\n</div>";
},"useData":true});
this["TPLS"]["templates"]["Todo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"hbs-todo "
    + this.escapeExpression(((helper = (helper = helpers.customClass || (depth0 != null ? depth0.customClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customClass","hash":{},"data":data}) : helper)))
    + "\">\r\n	<ul></ul>\r\n	<button class=\"btn btn-sm btn-default btn-add-item\">Add item</button>\r\n</div>";
},"useData":true});
this["TPLS"]["templates"]["TodoItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"todo-item\">\r\n	<label class=\"fa fa-times\"></label>\r\n	<label class=\"fa fa-check\"></label>\r\n	<label>"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\r\n</li>";
},"useData":true});