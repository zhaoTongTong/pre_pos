function collect_same_elements(collection_a, collection_b) {
  
  var newArray = [];
  
  collection_a.forEach(function (element) {
      if(isExist(element, collection_b)) {
        newArray.push(element);
    }
  });
  return newArray;
}
function isExist(element, collection) {
  for(var b = 0; b < collection.length; b++) {
    if(collection[b] === element) {
      return true;
    }
  }
  return false;
}
