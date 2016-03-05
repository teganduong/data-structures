

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.array = [];
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index) || [];

    
  array.push([k, v]);
  this._storage.set(index, array);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  var value;
  _.each(array, function(element) {
    if (element[0] === k ) {
      value = element[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  
  _.each(array, function(element) {
    if (element[0] === k ) {
      array = _.without(array,element);
    }
  });
  this._storage.set(index, array);
      
   
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


