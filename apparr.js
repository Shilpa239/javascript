var arr = ["Idali", "Sambar", "Dosa","utappa", "Masala Dosa"];
console.log(arr);

//constructor

var arr = new Array("Idali", "Sambar", "Dosa","utappa", "Masala Dosa");
console.log(arr);
//Get
console.log(arr[arr.length-1]);
console.log(arr[0]);
console.log(arr[3]);
//Set
arr[0] = "Puran Poli";
console.log(arr);
arr[arr.length] = "Masala Rice"
console.log(arr);
//delete
delete arr[0];
console.log(arr);
//concat
var batsman = ["MS DHONI", "S.TENDULKAR", "V.KOHLI"];
var allRounders = ["R.JADEJA", "H.PANDYA"];
var bowlers = ["J.BUMRAH", "B.KUMAR", "D.CHAHAR"];
var result = batsman.concat(allRounders,bowlers);
console.log(result);
//includes
var batsman = ["MS DHONI", "S.TENDULKAR", "V.KOHLI"];
console.log(batsman.includes("MS DHONI"));
//index Of
var alphabets = ["s", "h", "i", "l","i","a","a"];
console.log(alphabets.indexOf("i",alphabets.indexOf("i")+1));
//last index of
console.log(alphabets.lastIndexOf("a"));
//Shift
var dog = ["PUG","LAB","GERMAN","RETRIEVER","HUSKY"];
dog.shift();
console.log(dog);
//unshift
var dog = ["PUG","LAB","GERMAN","RETRIEVER","HUSKY"];
dog.unshift("GOLDEN");
console.log(dog);
//pop
var dog = ["PUG","LAB","GERMAN","RETRIEVER","HUSKY"];
dog.pop()
console.log(dog);
//push
var dog = ["PUG","LAB","GERMAN","RETRIEVER","HUSKY"];
dog.push("DOBERMAN");
console.log(dog);
//splice
var arr = ["MERCEDES", "AUDI", "PORSCHE", "BMW"];
console.log(arr.splice(1,3));
arr.splice(1,0,"TOYOTA","HONDA");
console.log(arr);
//remove & Add
var skills = ["HTML","CSS","JAVASCRIPT","NODE JS","EXPRESS JS","MONGO DB"];
skills.splice(3,3,"BACKEND")
console.log(skills);
skills.splice(0,3,"FRONTEND")
console.log(skills);

//slice
var skills = ["HTML","CSS","JAVASCRIPT","NODE JS","EXPRESS JS","MONGO DB"];
console.log(skills.slice(2,3));
console.log(skills.slice(2));
console.log(skills.slice(-4,-2));

//convert to string
var skills = ["HTML","CSS","JAVASCRIPT","NODE JS","EXPRESS JS","MONGO DB"];
var result = skills.toString();
//console.log(skills, typeof result);
//join
console.log(skills.join(" "));
//reverse
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(arr.reverse());
var arr = ["d", "e", "v", "e", "n", "d", "r", "a"];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);
//desceding
var result = arr.sort(function (a,b){
  return b.localeCompare(a)
});
console.log(result);
//array of Numbers
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var result = num.sort(function(a,b){
  return a-b;
});
console.log(result);
//descend
var reduce = num.sort(function(a,b){
  return b-a;
});
console.log(reduce);
//map double
var op = num.map(function(num){
  return num * 2;
});
console.log(op);
//filter
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var result = num.filter(function(number){
  return number > 5 ;
});
console.log(result);
//even
var output = num.filter(function(num){
  return num % 2 === 0;
});
console.log(output);

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var result = num.findIndex(function(number){
  return number > 5 ;
});
console.log(num);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = arr.some(function (num) {
  return num % 2 === 0;
});
console.log(result);
//reduce
var arr = ["d", "e", "v", "e", "n", "d", "r", "a"];
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = arr.reduceRight(function(total, current){
  return total + current;
})
console.log(result);
//diff
var arr = [111,222,333,444,555];
var result = arr.reduce(function(total,current){
  return total - current;
},5000)
console.log(result);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//use
arr.forEach(function (num) {
  console.log(num);
});

//fill
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//arr.fill("Devendra");
arr.fill("#", 0, 5);
console.log(arr);

var arr = [1, 2, 3, [4, 5, [6, 7, 8, 9, [10]]]];

//var result = arr.flat();
//var result = arr.flat(1);
var result = arr.flat(2);
//var result = arr.flat(Infinity);
console.log(result);