var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check if node exists
    var newNode = Node(value);

    if (list.tail !== null) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var temp = list.head;
    }
    list.head = list.head.next; 
    return temp.value;
  };

  list.contains = function(target) {
    var containhead = list.head;
    var result = false;
    while (containhead !== null) {
      if (containhead.value === target) {
        result = true;
      }
      containhead = containhead.next;
    }
    return result;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
