// Diagonal difference

function diagonalDifference(arr) {
    // Write your code here
    var n = arr[0].length;
    var leftSum = 0;
    var rightSum = 0;
    
    for(var i = 0, j = n-1;i<n;i++,j--) {
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    var difference = leftSum-rightSum;
    return Math.abs(difference);
}

console.log(diagonalDifference([5,2,3,],[1,2,3],[2,2,2]))