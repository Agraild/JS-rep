


function get_freq(n){
    const f = 440* Math.pow(2,n/12);
    return f;
}

function print_oct(n){



console.log("C", n, get_freq(12*(n-4)-9));
console.log("D", n, get_freq(-7));
console.log("E", n, get_freq(-5));
console.log("F", n, get_freq(-4));

console.log("G", n, get_freq(-2));
console.log("A", n, get_freq(-0));
console.log("H", n, get_freq(2));


    
}


print_oct(0);

