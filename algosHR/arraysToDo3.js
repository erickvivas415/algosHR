
function removeNegatives(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i]<0) {
            for(var j=i;j<arr.length;j++) {
                arr[j]=arr[j+1];
            }
            //console.log(arr);
            arr.pop();
            i--;
        }
        //console.log(arr);
    }
    return arr;
}

var arr = [0,2,-4,-6,8,-5];
console.log(removeNegatives(arr))

function secondToLast(arr,Nth) {
    if(Nth>arr.length || Nth<=0){
        return null;
    }
    else{
        var nthToLast = arr.length-Nth;
        for(var i = arr.length-1; i>=0;i--) { //6
            if(i=nthToLast) {
                return arr[i];
            }
        }
    }
}

console.log(secondToLast([5,2,3,6,4,9,7],2))
