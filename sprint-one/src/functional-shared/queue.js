var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.items = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

queueMethods.dequeue = function() {
  this.items--;
  var result = this.storage[0];
  delete this.storage[0];

  for (var i = 0; i < this.items; i++) {
    this.storage[i] = this.storage[i+1];
  }
  return result;
};

queueMethods.size = function() {
  return Math.max(0, this.items);
};
