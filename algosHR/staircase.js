
function staircase(n) {
    // Write your code here

    var counter = 1; 
    for(var i=0;i<n;i++) {
        var row = "";
        for(var j=0;j<n;j++) {
            if(j<n-i-1) {
                row += " ";
            }
            else {
                row += "#";
            }
        }
        console.log(row)
    }
    
}

staircase(5)