var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;
  //var index=0;
  var result;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.dequeue = function() {
    items--;
    result = storage[0];
    delete storage[0];
    for (var i = 0 ; i < items ; i++) {
      storage[i] = storage[i+1];
    }
    return result;
  };

    //if(someInstance.dequeue()){
      //delete storage[0];
    //}

  someInstance.size = function() {
    return Math.max(0, items);
  };

  return someInstance;
};
