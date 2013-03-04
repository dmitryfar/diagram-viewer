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