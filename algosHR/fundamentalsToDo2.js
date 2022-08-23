// Countdown: Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    var arr = [];
    var temp = num;

    for(var x=0;x<=num;x++) {
        arr[x] = temp;
        temp--
    }

    return arr;
}

console.log(countdown(9))

// First plus length: Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    if(typeof arr[0]  === "number") {
        return arr[0]+arr.length;
    }
    else {
        return "First value of the array is not a number";
    }
}

a=[true,1,2,3,4]

console.log(firstPlusLength(a))

// Values Greater than Second: For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valuesGreaterThanSecond(arr) {
    var counter = 0;
    for(var x=0;x<arr.length;x++) {
        if(arr[x]>arr[1]) {
            console.log(arr[x]);
            counter++;
        }
    }
    console.log("the total number of values greater than the second is: " + counter);
}

valuesGreaterThanSecond([1,3,5,6,9,13])