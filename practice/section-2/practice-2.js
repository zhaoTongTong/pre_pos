function count_same_elements(collection) {
 var newArray = [];
  
  for(var a = 0; a < collection.length; a += count) {
    var count = theEqualCount(a, collection);
    if(collection[a].replace(/[^0-9]/ig, "")) {
      collection[a] = collection[a].replace(/[^a-z]/ig,"");
    }
    newArray.push({key: collection[a], count:count});
  }
  
  return newArray;
}

function theEqualCount(flag, collection) {
  
   var count = 0;
   
    for(var b = flag; b <= collection.length; b++) {
      if(collection[flag] === collection[b]) {
        count += 1;
      }else if(collection[flag].replace(/[^0-9]/ig, "")) {
        count = parseInt(collection[flag].replace(/[^0-9]/ig, ""));
      }
      
    }
    
    return count;
}
