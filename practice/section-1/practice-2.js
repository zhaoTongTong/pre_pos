function collect_same_elements(collection_a, collection_b) {

var newArray = [];

collection_a.forEach(function(element) {
  if(isExist(element, collection_b[0]))
    newArray.push(element);
});

return newArray;
}

function isExist(element, collection) {
  for(var a = 0; a<collection.length; a++) {
    if(element === collection[a]) {
      return true;
    }
  }
  
  return false;
}
