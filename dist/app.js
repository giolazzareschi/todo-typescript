!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):"object"==typeof exports?exports.Handlebars=factory():root.Handlebars=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function create(){var hb=new base.HandlebarsEnvironment;return Utils.extend(hb,base),hb.SafeString=_SafeString2["default"],hb.Exception=_Exception2["default"],hb.Utils=Utils,hb.escapeExpression=Utils.escapeExpression,hb.VM=runtime,hb.template=function(spec){return runtime.template(spec,hb)},hb}var _interopRequireWildcard=__webpack_require__(7)["default"];exports.__esModule=!0;var _import=__webpack_require__(1),base=_interopRequireWildcard(_import),_SafeString=__webpack_require__(2),_SafeString2=_interopRequireWildcard(_SafeString),_Exception=__webpack_require__(3),_Exception2=_interopRequireWildcard(_Exception),_import2=__webpack_require__(4),Utils=_interopRequireWildcard(_import2),_import3=__webpack_require__(5),runtime=_interopRequireWildcard(_import3),_noConflict=__webpack_require__(6),_noConflict2=_interopRequireWildcard(_noConflict),inst=create();inst.create=create,_noConflict2["default"](inst),inst["default"]=inst,exports["default"]=inst,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function HandlebarsEnvironment(helpers,partials){this.helpers=helpers||{},this.partials=partials||{},registerDefaultHelpers(this)}function registerDefaultHelpers(instance){instance.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new _Exception2["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),instance.registerHelper("blockHelperMissing",function(context,options){var inverse=options.inverse,fn=options.fn;if(context===!0)return fn(this);if(context===!1||null==context)return inverse(this);if(isArray(context))return context.length>0?(options.ids&&(options.ids=[options.name]),instance.helpers.each(context,options)):inverse(this);if(options.data&&options.ids){var data=createFrame(options.data);data.contextPath=Utils.appendContextPath(options.data.contextPath,options.name),options={data:data}}return fn(context,options)}),instance.registerHelper("each",function(context,options){function execIteration(field,index,last){data&&(data.key=field,data.index=index,data.first=0===index,data.last=!!last,contextPath&&(data.contextPath=contextPath+field)),ret+=fn(context[field],{data:data,blockParams:Utils.blockParams([context[field],field],[contextPath+field,null])})}if(!options)throw new _Exception2["default"]("Must pass iterator to #each");var fn=options.fn,inverse=options.inverse,i=0,ret="",data=void 0,contextPath=void 0;if(options.data&&options.ids&&(contextPath=Utils.appendContextPath(options.data.contextPath,options.ids[0])+"."),isFunction(context)&&(context=context.call(this)),options.data&&(data=createFrame(options.data)),context&&"object"==typeof context)if(isArray(context))for(var j=context.length;j>i;i++)execIteration(i,i,i===context.length-1);else{var priorKey=void 0;for(var key in context)context.hasOwnProperty(key)&&(priorKey&&execIteration(priorKey,i-1),priorKey=key,i++);priorKey&&execIteration(priorKey,i-1,!0)}return 0===i&&(ret=inverse(this)),ret}),instance.registerHelper("if",function(conditional,options){return isFunction(conditional)&&(conditional=conditional.call(this)),!options.hash.includeZero&&!conditional||Utils.isEmpty(conditional)?options.inverse(this):options.fn(this)}),instance.registerHelper("unless",function(conditional,options){return instance.helpers["if"].call(this,conditional,{fn:options.inverse,inverse:options.fn,hash:options.hash})}),instance.registerHelper("with",function(context,options){isFunction(context)&&(context=context.call(this));var fn=options.fn;if(Utils.isEmpty(context))return options.inverse(this);if(options.data&&options.ids){var data=createFrame(options.data);data.contextPath=Utils.appendContextPath(options.data.contextPath,options.ids[0]),options={data:data}}return fn(context,options)}),instance.registerHelper("log",function(message,options){var level=options.data&&null!=options.data.level?parseInt(options.data.level,10):1;instance.log(level,message)}),instance.registerHelper("lookup",function(obj,field){return obj&&obj[field]})}function createFrame(object){var frame=Utils.extend({},object);return frame._parent=object,frame}var _interopRequireWildcard=__webpack_require__(7)["default"];exports.__esModule=!0,exports.HandlebarsEnvironment=HandlebarsEnvironment,exports.createFrame=createFrame;var _import=__webpack_require__(4),Utils=_interopRequireWildcard(_import),_Exception=__webpack_require__(3),_Exception2=_interopRequireWildcard(_Exception),VERSION="3.0.1";exports.VERSION=VERSION;var COMPILER_REVISION=6;exports.COMPILER_REVISION=COMPILER_REVISION;var REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};exports.REVISION_CHANGES=REVISION_CHANGES;var isArray=Utils.isArray,isFunction=Utils.isFunction,toString=Utils.toString,objectType="[object Object]";HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:logger,log:log,registerHelper:function(name,fn){if(toString.call(name)===objectType){if(fn)throw new _Exception2["default"]("Arg not supported with multiple helpers");Utils.extend(this.helpers,name)}else this.helpers[name]=fn},unregisterHelper:function(name){delete this.helpers[name]},registerPartial:function(name,partial){if(toString.call(name)===objectType)Utils.extend(this.partials,name);else{if("undefined"==typeof partial)throw new _Exception2["default"]("Attempting to register a partial as undefined");this.partials[name]=partial}},unregisterPartial:function(name){delete this.partials[name]}};var logger={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(level,message){if("undefined"!=typeof console&&logger.level<=level){var method=logger.methodMap[level];(console[method]||console.log).call(console,message)}}};exports.logger=logger;var log=logger.log;exports.log=log},function(module,exports,__webpack_require__){"use strict";function SafeString(string){this.string=string}exports.__esModule=!0,SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return""+this.string},exports["default"]=SafeString,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function Exception(message,node){var loc=node&&node.loc,line=void 0,column=void 0;loc&&(line=loc.start.line,column=loc.start.column,message+=" - "+line+":"+column);for(var tmp=Error.prototype.constructor.call(this,message),idx=0;idx<errorProps.length;idx++)this[errorProps[idx]]=tmp[errorProps[idx]];Error.captureStackTrace&&Error.captureStackTrace(this,Exception),loc&&(this.lineNumber=line,this.column=column)}exports.__esModule=!0;var errorProps=["description","fileName","lineNumber","message","name","number","stack"];Exception.prototype=new Error,exports["default"]=Exception,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function escapeChar(chr){return escape[chr]}function extend(obj){for(var i=1;i<arguments.length;i++)for(var key in arguments[i])Object.prototype.hasOwnProperty.call(arguments[i],key)&&(obj[key]=arguments[i][key]);return obj}function indexOf(array,value){for(var i=0,len=array.length;len>i;i++)if(array[i]===value)return i;return-1}function escapeExpression(string){if("string"!=typeof string){if(string&&string.toHTML)return string.toHTML();if(null==string)return"";if(!string)return string+"";string=""+string}return possible.test(string)?string.replace(badChars,escapeChar):string}function isEmpty(value){return value||0===value?isArray(value)&&0===value.length?!0:!1:!0}function blockParams(params,ids){return params.path=ids,params}function appendContextPath(contextPath,id){return(contextPath?contextPath+".":"")+id}exports.__esModule=!0,exports.extend=extend,exports.indexOf=indexOf,exports.escapeExpression=escapeExpression,exports.isEmpty=isEmpty,exports.blockParams=blockParams,exports.appendContextPath=appendContextPath;var escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},badChars=/[&<>"'`]/g,possible=/[&<>"'`]/,toString=Object.prototype.toString;exports.toString=toString;var isFunction=function(value){return"function"==typeof value};isFunction(/x/)&&(exports.isFunction=isFunction=function(value){return"function"==typeof value&&"[object Function]"===toString.call(value)});var isFunction;exports.isFunction=isFunction;var isArray=Array.isArray||function(value){return value&&"object"==typeof value?"[object Array]"===toString.call(value):!1};exports.isArray=isArray},function(module,exports,__webpack_require__){"use strict";function checkRevision(compilerInfo){var compilerRevision=compilerInfo&&compilerInfo[0]||1,currentRevision=_COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;if(compilerRevision!==currentRevision){if(currentRevision>compilerRevision){var runtimeVersions=_COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],compilerVersions=_COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];throw new _Exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").")}throw new _Exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+compilerInfo[1]+").")}}function template(templateSpec,env){function invokePartialWrapper(partial,context,options){options.hash&&(context=Utils.extend({},context,options.hash)),partial=env.VM.resolvePartial.call(this,partial,context,options);var result=env.VM.invokePartial.call(this,partial,context,options);if(null==result&&env.compile&&(options.partials[options.name]=env.compile(partial,templateSpec.compilerOptions,env),result=options.partials[options.name](context,options)),null!=result){if(options.indent){for(var lines=result.split("\n"),i=0,l=lines.length;l>i&&(lines[i]||i+1!==l);i++)lines[i]=options.indent+lines[i];result=lines.join("\n")}return result}throw new _Exception2["default"]("The partial "+options.name+" could not be compiled when running in runtime-only mode")}function ret(context){var options=void 0===arguments[1]?{}:arguments[1],data=options.data;ret._setup(options),!options.partial&&templateSpec.useData&&(data=initData(context,data));var depths=void 0,blockParams=templateSpec.useBlockParams?[]:void 0;return templateSpec.useDepths&&(depths=options.depths?[context].concat(options.depths):[context]),templateSpec.main.call(container,context,container.helpers,container.partials,data,blockParams,depths)}if(!env)throw new _Exception2["default"]("No environment passed to template");if(!templateSpec||!templateSpec.main)throw new _Exception2["default"]("Unknown template object: "+typeof templateSpec);env.VM.checkRevision(templateSpec.compiler);var container={strict:function(obj,name){if(!(name in obj))throw new _Exception2["default"]('"'+name+'" not defined in '+obj);return obj[name]},lookup:function(depths,name){for(var len=depths.length,i=0;len>i;i++)if(depths[i]&&null!=depths[i][name])return depths[i][name]},lambda:function(current,context){return"function"==typeof current?current.call(context):current},escapeExpression:Utils.escapeExpression,invokePartial:invokePartialWrapper,fn:function(i){return templateSpec[i]},programs:[],program:function(i,data,declaredBlockParams,blockParams,depths){var programWrapper=this.programs[i],fn=this.fn(i);return data||depths||blockParams||declaredBlockParams?programWrapper=wrapProgram(this,i,fn,data,declaredBlockParams,blockParams,depths):programWrapper||(programWrapper=this.programs[i]=wrapProgram(this,i,fn)),programWrapper},data:function(value,depth){for(;value&&depth--;)value=value._parent;return value},merge:function(param,common){var obj=param||common;return param&&common&&param!==common&&(obj=Utils.extend({},common,param)),obj},noop:env.VM.noop,compilerInfo:templateSpec.compiler};return ret.isTop=!0,ret._setup=function(options){options.partial?(container.helpers=options.helpers,container.partials=options.partials):(container.helpers=container.merge(options.helpers,env.helpers),templateSpec.usePartial&&(container.partials=container.merge(options.partials,env.partials)))},ret._child=function(i,data,blockParams,depths){if(templateSpec.useBlockParams&&!blockParams)throw new _Exception2["default"]("must pass block params");if(templateSpec.useDepths&&!depths)throw new _Exception2["default"]("must pass parent depths");return wrapProgram(container,i,templateSpec[i],data,0,blockParams,depths)},ret}function wrapProgram(container,i,fn,data,declaredBlockParams,blockParams,depths){function prog(context){var options=void 0===arguments[1]?{}:arguments[1];return fn.call(container,context,container.helpers,container.partials,options.data||data,blockParams&&[options.blockParams].concat(blockParams),depths&&[context].concat(depths))}return prog.program=i,prog.depth=depths?depths.length:0,prog.blockParams=declaredBlockParams||0,prog}function resolvePartial(partial,context,options){return partial?partial.call||options.name||(options.name=partial,partial=options.partials[partial]):partial=options.partials[options.name],partial}function invokePartial(partial,context,options){if(options.partial=!0,void 0===partial)throw new _Exception2["default"]("The partial "+options.name+" could not be found");return partial instanceof Function?partial(context,options):void 0}function noop(){return""}function initData(context,data){return data&&"root"in data||(data=data?_COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data):{},data.root=context),data}var _interopRequireWildcard=__webpack_require__(7)["default"];exports.__esModule=!0,exports.checkRevision=checkRevision,exports.template=template,exports.wrapProgram=wrapProgram,exports.resolvePartial=resolvePartial,exports.invokePartial=invokePartial,exports.noop=noop;var _import=__webpack_require__(4),Utils=_interopRequireWildcard(_import),_Exception=__webpack_require__(3),_Exception2=_interopRequireWildcard(_Exception),_COMPILER_REVISION$REVISION_CHANGES$createFrame=__webpack_require__(1)},function(module,exports,__webpack_require__){(function(global){"use strict";exports.__esModule=!0,exports["default"]=function(Handlebars){var root="undefined"!=typeof global?global:window,$Handlebars=root.Handlebars;Handlebars.noConflict=function(){root.Handlebars===Handlebars&&(root.Handlebars=$Handlebars)}},module.exports=exports["default"]}).call(exports,function(){return this}())},function(module,exports,__webpack_require__){"use strict";exports["default"]=function(obj){return obj&&obj.__esModule?obj:{"default":obj}},exports.__esModule=!0}])});

window.Handlebars={},window.document.onreadystatechange=function(){("complete"==this.readyState||200==this.readyState)&&(window.onload=function(){var start=window.TPLS.templates.start();document.body.innerHTML=start;var todo=new Todo({renderSelector:"div[appstage] .main-container"});todo.render({customClass:"todo-list"})})};
var __extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);__.prototype=b.prototype,d.prototype=new __},TodoItem=function(_super){function TodoItem(config){_super.call(this,config),this.name=config.name,this.id=Math.ceil(Math.abs(500*Math.random())*Math.random())}return __extends(TodoItem,_super),TodoItem}(ViewManager);

!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new g.HandlebarsEnvironment;return m.extend(a,g),a.SafeString=i["default"],a.Exception=k["default"],a.Utils=m,a.escapeExpression=m.escapeExpression,a.VM=o,a.template=function(b){return o.template(b,a)},a}var e=c(7)["default"];b.__esModule=!0;var f=c(1),g=e(f),h=c(2),i=e(h),j=c(3),k=e(j),l=c(4),m=e(l),n=c(5),o=e(n),p=c(6),q=e(p),r=d();r.create=d,q["default"](r),r["default"]=r,b["default"]=r,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new k["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(o(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=f(c.data);g.contextPath=i.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){function c(b,c,e){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!e,l&&(j.contextPath=l+b)),h+=d(a[b],{data:j,blockParams:i.blockParams([a[b],b],[l+b,null])})}if(!b)throw new k["default"]("Must pass iterator to #each");var d=b.fn,e=b.inverse,g=0,h="",j=void 0,l=void 0;if(b.data&&b.ids&&(l=i.appendContextPath(b.data.contextPath,b.ids[0])+"."),p(a)&&(a=a.call(this)),b.data&&(j=f(b.data)),a&&"object"==typeof a)if(o(a))for(var m=a.length;m>g;g++)c(g,g,g===a.length-1);else{var n=void 0;for(var q in a)a.hasOwnProperty(q)&&(n&&c(n,g-1),n=q,g++);n&&c(n,g-1,!0)}return 0===g&&(h=e(this)),h}),a.registerHelper("if",function(a,b){return p(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||i.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){p(a)&&(a=a.call(this));var c=b.fn;if(i.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=f(b.data);d.contextPath=i.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}function f(a){var b=i.extend({},a);return b._parent=a,b}var g=c(7)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d,b.createFrame=f;var h=c(4),i=g(h),j=c(3),k=g(j),l="3.0.1";b.VERSION=l;var m=6;b.COMPILER_REVISION=m;var n={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=n;var o=i.isArray,p=i.isFunction,q=i.toString,r="[object Object]";d.prototype={constructor:d,logger:s,log:t,registerHelper:function(a,b){if(q.call(a)===r){if(b)throw new k["default"]("Arg not supported with multiple helpers");i.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(q.call(a)===r)i.extend(this.partials,a);else{if("undefined"==typeof b)throw new k["default"]("Attempting to register a partial as undefined");this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]}};var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(a,b){if("undefined"!=typeof console&&s.level<=a){var c=s.methodMap[a];(console[c]||console.log).call(console,b)}}};b.logger=s;var t=s.log;b.log=t},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a){return j[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return l.test(a)?a.replace(k,c):a}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return a.path=b,a}function i(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.blockParams=h,b.appendContextPath=i;var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/,m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(b.isFunction=n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=p.COMPILER_REVISION;if(b!==c){if(c>b){var d=p.REVISION_CHANGES[c],e=p.REVISION_CHANGES[b];throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=m.extend({},d,e.hash)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new o["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){var c=void 0===arguments[1]?{}:arguments[1],f=c.data;d._setup(c),!c.partial&&a.useData&&(f=j(b,f));var g=void 0,h=a.useBlockParams?[]:void 0;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(e,b,e.helpers,e.partials,f,h,g)}if(!b)throw new o["default"]("No environment passed to template");if(!a||!a.main)throw new o["default"]("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new o["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:m.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=m.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new o["default"]("must pass block params");if(a.useDepths&&!g)throw new o["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=void 0===arguments[1]?{}:arguments[1];return c.call(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),g&&[b].concat(g))}return h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a=c.partials[c.name],a}function h(a,b,c){if(c.partial=!0,void 0===a)throw new o["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?p.createFrame(b):{},b.root=a),b}var k=c(7)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var l=c(4),m=k(l),n=c(3),o=k(n),p=c(1)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){b.Handlebars===a&&(b.Handlebars=d)}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0}])});
var ViewManager=function(){function ViewManager(config){this.TPLS=window.TPLS,this.Handlebars=window.Handlebars,this.renderSelector=config.renderSelector}return ViewManager.prototype.dom=function(){return this._dom},ViewManager.prototype.render=function(config){var html=this.template(config),temp=document.createElement("div");temp.innerHTML=html,this._dom=temp.children[0],this.binds(),document.querySelector(this.renderSelector).appendChild(this._dom)},ViewManager.prototype.template=function(params){var name=this.constructor.name;return this.TPLS.templates[name](params)},ViewManager.prototype.binds=function(){},ViewManager}();
this.TPLS=this.TPLS||{},this.TPLS.templates=this.TPLS.templates||{},this.TPLS.templates.start=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(depth0,helpers,partials,data){return'<div appstage class="entry-point-app">\r\n	<div class="center">\r\n		<h1>Todo list</h1>\r\n		<div class="main-container"></div>\r\n	</div>\r\n</div>'},useData:!0}),this.TPLS.templates.Todo=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(depth0,helpers,partials,data){var helper;return'<div class="hbs-todo '+this.escapeExpression((helper=null!=(helper=helpers.customClass||(null!=depth0?depth0.customClass:depth0))?helper:helpers.helperMissing,"function"==typeof helper?helper.call(depth0,{name:"customClass",hash:{},data:data}):helper))+'">\r\n	<ul></ul>\r\n	<button class="btn btn-sm btn-default btn-add-item">Add item</button>\r\n</div>'},useData:!0}),this.TPLS.templates.TodoItem=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(depth0,helpers,partials,data){var helper,alias1=helpers.helperMissing,alias2="function",alias3=this.escapeExpression;return'<li id="'+alias3((helper=null!=(helper=helpers.id||(null!=depth0?depth0.id:depth0))?helper:alias1,typeof helper===alias2?helper.call(depth0,{name:"id",hash:{},data:data}):helper))+'" class="todo-item">\r\n	<label class="fa fa-times"></label>\r\n	<label class="fa fa-check"></label>\r\n	<label>'+alias3((helper=null!=(helper=helpers.label||(null!=depth0?depth0.label:depth0))?helper:alias1,typeof helper===alias2?helper.call(depth0,{name:"label",hash:{},data:data}):helper))+"</label>\r\n</li>"},useData:!0});
var __extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);__.prototype=b.prototype,d.prototype=new __},Todo=function(_super){function Todo(config){_super.call(this,config),this._items=[],this.hash="",this.renderSelector=config.renderSelector}return __extends(Todo,_super),Object.defineProperty(Todo.prototype,"items",{get:function(){return this._items},set:function(newitems){this._items=newitems},enumerable:!0,configurable:!0}),Todo.prototype.add=function(item){this.hash+="|"+item.id,this._items.push(item)},Todo.prototype.itemExists=function(id){return null===this.hash.match(id)?!1:!0},Todo.prototype.binds=function(){var dom=this.dom();dom.querySelector(".btn-add-item").addEventListener("click",this.addItem.bind(this),!1)},Todo.prototype.addItem=function(){var item=new TodoItem({name:"Validar coisas",renderSelector:".todo-list ul"});this.itemExists(item.id.toString())||(this.add(item),item.render({id:item.id,label:item.name}))},Todo}(ViewManager);
//# sourceMappingURL=app.js.map