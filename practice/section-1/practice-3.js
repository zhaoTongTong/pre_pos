function collect_same_elements(collection_a, object_b) {
  
  var newArray = [];
  
  collection_a.forEach(function(element) {
    if(isExit(element, object_b.value))
      newArray.push(element);
  })
  
  return newArray;
}

function isExit(element, object) {
  for(var a = 0; a < object.length; a++) {
   
    if(element === object[a])
      return true;
  }
  return false;
}
