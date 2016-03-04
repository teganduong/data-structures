

// ------------------------
// Instantiate a new graph
var Graph = function() {
	//this.array=[];
	this.graphnode={};
};





// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var obj ={};
	obj.value = node;
	obj.edge= [];
	this.graphnode[node] = obj;
	return this.graphnode[node];

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

	if(this.graphnode.hasOwnProperty(node)){
		return true;
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.graphnode[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if(this.graphnode.hasOwnProperty(fromNode) && this.graphnode[fromNode].edge.includes(toNode)){
		return true

	}
	return false;

	// return _.each(this.graphnode,function(value,key){
	// if((key === fromNode) && (value.edge.includes(toNode))){
	// 	return true;
	// }
	// });
};


// ------------------------
// Connects two nodes in a graph by a8dding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.graphnode[fromNode].edge.push(toNode);
	this.graphnode[toNode].edge.push(fromNode);

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

	_.without(this.graphnode[fromNode].edge, toNode);
	_.without(this.graphnode[toNode].edge, fromNode);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (nodes in this.graphnode){
		cb(nodes);
	}
};
//var graph = new Graph();







