var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.items = 0;

  //someInstance.push = stackMethods.push;
  //someInstance.pop = stackMethods.pop;
  //someInstance.size = stackMethods.size;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

stackMethods.pop = function() {
  this.items--;
  return this.storage[this.items];
};

stackMethods.size = function() {
  return Math.max(0, this.items);
};
