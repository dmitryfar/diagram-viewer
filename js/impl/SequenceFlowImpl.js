/**
 * 
 * @author (Javascript) Dmitry Farafonov
 */
function SequenceFlowImpl(flowJson) {
	if (!flowJson) return null;
	this.constructor(flowJson);
	//this.setType(this.className.replace("Impl", "")); // incompatible in IE
	this.setType("SequenceFlow");
	
	// TODO: get this values from properties, have to store it in the properties
	this.isDefault = (flowJson.isDefault == true);
	this.isConditional = (flowJson.isConditional == true);
	
}

SequenceFlowImpl._extends(FlowImpl);
 
SequenceFlowImpl.prototype.init = function(){};