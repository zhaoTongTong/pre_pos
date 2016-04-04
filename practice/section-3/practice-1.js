function create_updated_collection(collection_a, object_b) {
  
  collection_a.forEach(function(element) {
    if(isEqual(element.key, object_b.value)) {
      element.count -= 1;
    }  
  });
  
  return collection_a;
}

function isEqual(element, object) {
  for(var a = 0; a < object.length; a++) {
    if(element === object[a])
      return true;
  }
  return false;
}
