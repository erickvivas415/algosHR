// Reverse

function reverse(arr){
    var temp=0;
    for(var i=0;i<arr.length/2;i++){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr
}
console.log(reverse([1,2,3,4,5]))

// Rotate

function rotateArr(arr,shiftBy){
    if(shiftBy > 0){
        for(var i = 0; i<shiftBy; i++){
            var temp=arr[arr.length-1];
            for(var j=arr.length-1;j>=1;j--){
                arr[j]=arr[j-1];
            }
            arr[0]=temp;
        }
    }
    
    else{
        for(var z=0;z<(-shiftBy);z++){
            var temp=arr[0];
            for(var x=1;x<arr.length;x++){
                arr[x-1]=arr[x];
            }
            arr[arr.length-1]=temp;
        }
    }
    return arr
}

console.log(rotateArr([1,2,3,4,5,6],-4))

//Filter Range

function filterRange(arr,min,max){
    var length1 = arr.length
    var z = 0
    for(var i = 0;i<=length1-z;i++){
        if(arr[i]<=min || arr[i]>max){
            z++;
            console.log("value of i " + i);
            console.log("value of " + arr[i]);
            console.log("value of z " + z);
            console.log(arr[i]<=min || arr[i]>max);
            var temp = arr[i];
            for(var j=z;j<arr.length;j++){
                arr[j-1]=arr[j];
            }
            arr[arr.length-1]=temp;
            console.log(arr);
            arr.pop();
            i--;
            
        }
        else{
            console.log("value of i " + i);
            console.log("value of " + arr[i]);
        }
        console.log(arr);
        console.log(i);
    }
    return arr
}

console.log(filterRange([1,2,3,4,5,6],2,4))

// Concat

function concatArrays(arr1, arr2){
    return arr1 +","+ arr2;
}

console.log(concatArrays(["a",2],[3,4]))

function toRoman(num){
    if(num<4000 && num>=1000){
        num/1000
    }
}