this["TPLS"] = this["TPLS"] || {};
this["TPLS"]["templates"] = this["TPLS"]["templates"] || {};
this["TPLS"]["templates"]["Todo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"hbs-todo "
    + this.escapeExpression(((helper = (helper = helpers.customClass || (depth0 != null ? depth0.customClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customClass","hash":{},"data":data}) : helper)))
    + "\">\r\n<button class=\"btn btn-sm btn-default\">Add item</button>\r\n</div>";
},"useData":true});