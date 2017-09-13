var merge = function(array, p, q, r) {

    var lowHalf = [];
    var highHalf = [];

    var i;  // increment lowHalf.
    var j;  // increment highHalf.
    var k = p;  // index position of next element to copy array.

    for(i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }

    lowHalf.push(Number.MAX_SAFE_INTEGER);

    for(j = 0; k <= r; j++, k++) { 
        highHalf[j] = array[k];
    }

    highHalf.push(Number.MAX_SAFE_INTEGER);

    k = p; 

    for (i = j = 0; i < lowHalf.length && j < highHalf.length;){

        if(lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i]; 
            i++;  // move to next element in lowHalf.
        } else {
            array[k] = highHalf[j];
            j++;  // move to next element in highHalf.
        }
        k++;  // increment array postion.
 
    }
    
   /* // copy remaining items from lowHalf & highHalf.
    for(;i < lowHalf.length;) {
        array[k] = lowHalf[i];
        i++; // increment lowHalf position;
        k++; // increment array position;
    }

    for(;j< highHalf.length;) {
        array[k] = highHalf[j];
        j++;  // increment highHalf position;
        k++; // increment array position;
    }
    */

};

var mergeSort = function(array, p, r) {
    if(p < r) { 
       // debugger;
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }

    return array;

};

mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9);