#!/usr/bin/env node

// Prime Numbers
// 
// Check if a number is divisible by another number
var isdivzby = function(p, r) {
    var q = p / r;
    if (q == Math.round(q)) {return 0;}
    else {return p;}
};

// Find first K prime numbers via basic for loop
var firstkprime = function(k) {
    var i = 0;
    var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    for(i = 2; arr.length < k; i++) {
	var x1 = isdivzby(i, 2);
        var x2 = isdivzby(i, 3);
        var x3 = isdivzby(i, 5);
	var x4 = isdivzby(i, 7);
	var x5 = isdivzby(i, 11);
	var x6 = isdivzby(i, 13);
	var x7 = isdivzby(i, 17);
	var x8 = isdivzby(i, 19);
	var x9 = isdivzby(i, 23);
	if (x1*x2*x3*x4*x5*x6*x7*x8*x9 > 0) {arr.push(x1);}
    }
    return arr;
};

// unpack the array 'arr' for printing
var fmt = function(arr) {
    return arr.join(",");
};

// execute the functions
// first set k to 100
var k = 100;
// then print a message to the console with what k is
//'console.log("first (" + k + ") prime numbers");
// then do main process
// now do prime numbers
var out =fmt(firstkprime(k));
// send results to the console
console.log(out);
var fs = require('fs');
var outfile = "prime.txt";
// the send results to the file defined above
fs.writeFileSync(outfile, out);
