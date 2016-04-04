function create_updated_collection(collection_a, object_b) {

var newArray = [];
  
  for(var a = 0; a < collection_a.length; a += count) {
    var count = theEqualCount(a, collection_a);
    
    newArray.push({key: collection_a[a], count:count});
  }
  
  newArray.forEach(function(element) {
    if(isEqual(element.key, object_b.value)) {
      var decrease = parseInt(element.count/3);
      element.count -= decrease;
    }  
  });
  
  return newArray;
}

function theEqualCount(flag, collection) {
  
   var count = 1;
   
    for(var b = flag + 1; b < collection.length; b++) {
      if(collection[flag] === collection[b])
        count += 1;
    }
    
    return count;
}

function isEqual(element, object) {
  for(var a = 0; a < object.length; a++) {
    if(element === object[a])
      return true;
  }
  return false;
}
