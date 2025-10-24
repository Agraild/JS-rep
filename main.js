


function get_freq(n){
    const f = 440* Math.pow(2,n/12);
    return f;
}



console.log("A4", get_freq(-9));
