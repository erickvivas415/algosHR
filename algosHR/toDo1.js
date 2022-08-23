function rSigma(num){
    num = Math.floor(num)
    if(num == 1){
        return 1;
    }
    else if(num > 1) {
        return num + rSigma(num-1);
    }
    else{
        return num + rSigma(num+1);
    }
}

console.log(rSigma(2.5))

function rFact(num){
    num = Math.floor(num)
    if(num <= 0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }
    else if(num>1){
        return num*rFact(num-1);
    }
}

console.log(rFact(-6))