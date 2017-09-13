var testArray = [2, 4, 5, 6, 1, 3];

var insertionSort = function(list) {
    for(var i = 0; i < list.length; i++) {
      var temp = list[i];
      var j = i - 1;

      while (j >= 0 && list[j] > temp) {
        list[j + 1] = list[j];
        j = j -1;
      }
      list[j + 1] = temp;
    }
    return list;
  };
  

console.log(insertionSort(testArray));