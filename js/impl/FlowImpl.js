/**
 * 
 * @author (Javascript) Dmitry Farafonov
 */
 
var FlowImpl = function(flowJson){
	
	this.parse(flowJson);
	
	this.init();
};

FlowImpl.prototype = {
	/*
	isDefault: false,
	isConditional: false,
	*/
	isHighLighted: false,
	sourceActivityId: null,
	destinationActivityId: null,
	type: undefined,
	id: null,
	properties: {},
	
	// Graphical information
	waypoints: [],
	parse: function(flowJson){
		this.waypoints = [];
		//this.isDefault = false;
		//this.isConditional = false;
		this.isHighLighted = false;
		this.sourceActivityId = null;
		this.destinationActivityId = null;
		this.type = undefined;
		this.properties = {};
	
		if (flowJson != undefined) {
			this.setId(flowJson.id);
					
			for(var j in flowJson.xPointArray) {
				this.addWaypoint(flowJson.xPointArray[j], flowJson.yPointArray[j]);
			}
			//this.isDefault = (flowJson.isDefault == true);
			//this.isConditional = (flowJson.isConditional == true);
			this.isHighLighted = (flowJson.isHighLighted == true);
			
			// TODO: add source and destination for sequence flows in REST
			// parse for test
				var f = flowJson.flow;
				var matches = f.match(/\((.*)\)--.*-->\((.*)\)/);
				var sourceActivityId, destinationActivityId;
				if (matches != null) {
					sourceActivityId = matches[1];
					destinationActivityId = matches[2];
				}
				this.sourceActivityId = sourceActivityId;
				this.destinationActivityId = destinationActivityId;
			//
		}
		
		for (var propertyName in flowJson.properties) {
			this.setProperty(propertyName, flowJson.properties[propertyName]);
		}
	},
	init: function(){
		var instance = this;
		console.log("FlowImpl init(), instance: %o", instance);
	},
	
	setId: function(id){
		this.id = id;
	},
	
	getId: function(){
		return this.id;
	},
	
	setSourceActivityId: function(sourceActivityId){
		this.sourceActivityId = sourceActivityId;
	},
	
	getSourceActivityId: function(){
		return this.sourceActivityId;
	},
	
	setDestinationActivityId: function(destinationActivityId){
		this.destinationActivityId = destinationActivityId;
	},
	
	getDestinationActivityId: function(){
		return this.destinationActivityId;
	},
	
	addWaypoint: function(x, y, position){
		if (position !== undefined) {
			console.error("addWaypoint to position is not implemented yet");
		}
		var j = this.waypoints.length;
		this.waypoints[j] = {x: x, y: y};
	},
	
	getWaypoints: function(){
		return this.waypoints;
	},
	
	setType: function(type){
		this.type = type;
	},
	getType: function(){
		return this.type;
	},
	
	setProperty: function(name, value){
		this.properties[name] = value;
	},
	getProperty: function(name){
		return this.properties[name];
	},
	
	toString: function() {
		return "(" + this.sourceActivityId + ")--" + this.id + "-->(" + this.destinationActivityId + ")";
	},
	
	// restricted setters ///////////////////////////////////////////////////////
	
	vvoid: function(){}
};