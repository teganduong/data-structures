var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  } else {
    return _.reduce(this.children, function(result, element) {
      return element.contains(target) || result; 
    }, false);  
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
