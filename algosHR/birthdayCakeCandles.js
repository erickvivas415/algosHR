function birthdayCakeCandles(candles) {
    var max = candles[0];
    var total = 0;

    for(var i=0; i<candles.length; i++) {
        if(candles[i]>max) {
            max = candles[i];
        }
    }

    for(var j=0; j<candles.length;j++) {
        if(candles[j]==max) {
            total++;
        }
    }

    console.log(total);
}

birthdayCakeCandles([4,4,1,3]);