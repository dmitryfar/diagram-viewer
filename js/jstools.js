if (typeof(console) == "undefined") {
	var console = {
		info: function(){},
		warn: function(){},
		error: function(){},
		log: function(){},
		time: function(){},
		timeEnd: function(){}
	};
}

if(!Array.isArray) {
  Array.isArray = function (vArg) {
    return Object.prototype.toString.call(vArg) === "[object Array]";
  };
}

if (!Object.isSVGElement) {
  Object.isSVGElement = function(vArg) {
	if ($.browser.msie) {
		return (window.event.srcElement.tagName == "shape");
	} else {
		var str = Object.prototype.toString.call(vArg);
		return (str.indexOf("[object SVG") == 0);
	}
  };
}

/*
 * function Parent() {}
 * function Child(arg) {}
 * Child.extends(Parent);
 * Child.prototype.init = function(){};
 */
Function.prototype._extends = function(Parent){
	Child = this;
	var F = function () { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Parent;
	//Child.prototype.superclass = Parent.prototype;
	Child.prototype.className = Child.name;
	
	if (Child._name)
		Child.name = Child._name();
};

/**
 * Hack in support for Function.name for browsers that don't support it.
 * IE, I'm looking at you.
**/
if (Function.prototype.name === undefined) {
	if (Object.defineProperty !== undefined) {
		Object.defineProperty(Function.prototype, 'name', {
			get: function() {
				//var funcNameRegex = /function\s+([^(]{1,})\(/;
				var funcNameRegex = /function\s+([^\s\(]+)/;
				var results = (funcNameRegex).exec((this).toString());
				return (results && results.length > 1) ? results[1].trim() : "";
			},
			set: function(value) {}
		});
	} else {
		Function.prototype._name = function(){
				var funcNameRegex = /function\s([^(]{1,})\(/;
				var results = (funcNameRegex).exec((this).toString());
				
				return (results && results.length > 1) ? results[1] : "";
		}
	}
}