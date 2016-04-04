function count_same_elements(collection) {
  
  var newArray = [];
  
  for(var a = 0; a < collection.length; a += count) {
    var count = theEqualCount(a, collection);
    
    newArray.push({key: collection[a], count:count});
  }
  
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


