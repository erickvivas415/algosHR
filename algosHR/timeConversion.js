function timeConversion(s) {
    // Write your code here
    let amPM = s.charAt(8);
    let twenty4hours = "";

    if (amPM == "A") {
        if (s.substring(0,2) == 12) {
            twenty4hours = "00";
        }
        else {
            twenty4hours = s.substring(0,2);
        }
    }
    else {
        if (s.substring(0,2) == 12) {
            twenty4hours = s.substring(0,2);
        }
        else {
            twenty4hours = parseInt(s.substring(0,2), 10)+12;
        }
    }
    return twenty4hours + s.substring(2,8)
}