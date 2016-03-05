var BinarySearchTree = function(value) {
  var node = Object.create(biTreeMethods);
  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};

var biTreeMethods = {};

biTreeMethods.insert = function(value) {
  // create a instance node with the value
  var currentNode = BinarySearchTree(value);
  //Compare the root node value and the current value
  if (this.value > currentNode.value ) {
    if (this.left === null) {
      this.left = currentNode;
    } else {
      this.left.insert(value); 
    }
  } else if (this.value < currentNode.value) {
    if (this.right === null) {
      this.right = currentNode;
    } else {
      this.right.insert(value); 
    }
  }

};

biTreeMethods.contains = function(value) {
  var nodevalue = this.value;
  var result = false;
  //base case check value with nodevalue
  if (nodevalue === value) {
    result = true;
  } else if ( this.left && nodevalue > value) {
    result = this.left.contains(value);
  } else if ( this.right && nodevalue < value) {
    result = this.right.contains(value);
  } 
  return result;

};

biTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left = this.left.depthFirstLog(cb);
  } else if (this.right) {
    this.right = this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
