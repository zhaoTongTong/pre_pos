function count_same_elements(collection) {

  var newArray = [];

  for(var i = 0; i < collection.length; i += count) {
    var count = 0;
    var outFlag = 0;
    for(var j = i; j < collection.length; j++) {
      var flag = 0;
      
      if(collection[i].replace(/[^a-z]/ig, "") === collection[j].replace(/[^a-z]/ig, "") && !collection[j].replace(/[^0-9]/ig, "")) {
        count += 1;
      }else if(collection[i].replace(/[^a-z]/ig, "") === collection[j].replace(/[^a-z]/ig, "") && collection[j].replace(/[^0-9]/ig, "")) {
        flag = parseInt(collection[j].replace(/[^0-9]/ig,""));
        collection[j] = collection[j].replace(/[^a-z]/ig,"");
        outFlag += (flag-1);
        count += flag;
      }else if(collection[i].replace(/[^0-9]/ig, "")) {
        flag = parseInt(collection[i].replace(/[^0-9]/ig,""));
        collection[i] = collection[i].replace(/[^a-z]/ig,"");
        count = flag;
        outFlag += (flag-1);
      }
    }
    newArray.push({name:collection[i], summary:count});
    count = count-outFlag;
  }

return newArray;
}
