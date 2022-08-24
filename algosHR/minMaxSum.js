function minMaxSum(arr) {
    var min = arr[0];
    var max = arr[0];
    var total = 0;

    for(var i=0; i<arr.length; i++) {
        total += arr[i];

        if(arr[i]>max) {
            max = arr[i];
        }

        if(arr[i]<min) {
            min = arr[i];
        }
    }

    console.log((total - max) + "  " + (total - min));


}

minMaxSum([1,3,5,7,9]);