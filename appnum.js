console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.E);

var x = 3.32;
var y = 4.54;
console.log(Math.round(y));
console.log(Math.floor(x));
console.log(Math.ceil(y));

console.log(Math.pow(2,3)); //2^3=8
console.log(Math.sqrt(81));

console.log(Math.min(0,1,2,3,4,5));
console.log(Math.max(14,15,16,17,18));

console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));  //0 to 9
console.log(Math.ceil(Math.random() * 10));  // 1 to 10

function createRandomNumber(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1))  + min
    console.log("RANDOM",x);
  }
  createRandomNumber(1,6)
  
  
  console.log(Math.floor(Math.random() * 6)) + 1; 

// Generate a random number between 1 to 6
var randomNumber = Math.floor(Math.random()* 6) + 1;
console.log(randomNumber);