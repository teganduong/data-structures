

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.arrayVals = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.array = [];
  this._storage.array[0] = k;
  this._storage.array[1] = v;
  this._storage.set(index, this._storage.array);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.arrayVals[index + 1] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


