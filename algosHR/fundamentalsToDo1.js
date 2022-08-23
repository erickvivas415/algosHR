// 1. Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(var i=-300;i<-6;i++){
    if(i%3==0){
        console.log(i);
    }
}

// 2. Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var i=2000;
while(i <= 5280){
        console.log(i);
        i++;
}

// 3. Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

var i = 1;
while(i <= 100){
    if(i%5 == 0 && i%10 == 0){
        console.log("Coding Dojo");
    }
    else if(i%5 == 0){
        console.log("Coding");
    }
    else{
        console.log(i);
    }
    i++;
}

// 4. Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function countDownFunc(lowNum,highNum,mult){
    for(var i=highNum;i>lowNum;i--){
        if(i%mult == 0){
            console.log(i);
        }
    }
}

countDownFunc(2,9,3);