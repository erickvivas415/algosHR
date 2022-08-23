
// Shuffle

function shuffle(arr){
    for(var i=0;i<arr.length-1;i++){
        var temp = arr[i];
        var random = Math.floor(Math.random()*(arr.length - i) + i);
        console.log(random);
        arr[i]=arr[random];
        arr[random]=temp;
    }
    return arr
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))

// Skyline Heights

function skyline(arr){
    var arr2=[];
    for(var i=0;i<arr.length;i++){
        if(i==0 && arr[i]>0){
            arr2.push(arr[i]);
        }
        else if(i!=0 && arr[i]>arr[i-1]){
            arr2.push(arr[i]);
        }
    }
    return arr2
}

console.log(skyline([0,4]))

// Zip It

function zipIt(arr1,arr2){
    var finalArray = [];
    var temp = 0;
    for(var i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    for(var j=0;j<arr1.length;j++){
        for(var z=j+1;z<arr1.length;z++){
            if(arr1[j]>arr1[z]){
                temp = arr1[j];
                arr1[j] = arr1[z];
                arr1[z] = temp;
            }
        }
    }
    return arr1
}

console.log(zipIt([4,150,100],[10,50,30,40]))

// Credit Card Validation (Bonus)

function isCreditCardValid(digitArr){
    var lastDigit = digitArr[digitArr.length-1];
    var counter = 0;
    for(var i=digitArr.length-2;i>0;i--){
        if(i%2 == 1){
            digitArr[i]*=2;
            if(digitArr[i]>9){
                digitArr[i]-=9;
            }
        }
    }
    for(var j=0;j<digitArr.length-1;j++){
        counter += digitArr[j];
    }
    counter+=lastDigit;
    if(counter%10 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(isCreditCardValid([5,2,2,8,2]))