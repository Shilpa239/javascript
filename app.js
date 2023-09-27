var str = "This is a story of a boy named Devendra. Devendra and Aadesh are good friends.Devendra is very kind"
console.log(str.slice(31,49));

console.log(str.indexOf("Aadesh"));
console.log(str.slice(53,59));

console.log(str.split(".")[0]);
console.log(str.split(".")[2].length)

console.log(str.indexOf("Devendra",str.indexOf("Devendra")+ 1));
console.log(str.slice(10));
console.log(str.slice(-21));

console.log(str.substr(31,41));
console.log(str.charAt(-31));

console.log(str.includes("kind"));

console.log(str.slice(31,38));
console.log(str.substring(31,38));

if(str.includes("kinds")){
    console.log("success");
}else{
    console.log("fail");
}

console.log(str.match(/Devendra/gi));

var result = str.matchAll("Devendra")
console.log(result);
console.log(Array.from(result));

console.log(str.endsWith("kind"));

console.log(str.repeat(7));
console.log(str.valueOf());

var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
//var result = str1 + " " + str2.trim() + str3;
var result = `${str1} ${str2.trim()} ${str3.trimEnd()}`
console.log(result);


var result = Number("100");
console.log(result, typeof result);

var result = parseFloat("20.5");
console.log(result);

var result = +"100";
console.log(result, typeof result);

var x = 2.85;
//var result = x.toExponential(2);
//var result = x.toExponential(1);
var result = x.toExponential(3);
console.log(result);

var x = 9.5722;                      //50(floor) -> x -> 60(ceiling) {ceil}
//var x = 10.33;                     //30 -> x -> 40
//var x = 10.75;
var result = x.toFixed(3);
//console.log(result);


var x = 10.75;
var result = x.toPrecision(1);
console.log(result);

var str = "have a nice day";
var output = str.split(" ");
console.log(output);
var str1 = output[0].charAt(0).toUpperCase() + output[0].slice(1);
var str2 = output[1].charAt(0).toUpperCase();
var str3 = output[2].charAt(0).toUpperCase() + output[2].slice(1);
var str4 = output[3].charAt(0).toUpperCase() + output[3].slice(1)
console.log(`${str1} ${str2} ${str3} ${str4}`);

var text = '    Hello, world!'
var output = text.trimStart();
console.log(output);

var text = 'Hello, old world! old old'
console.log(text.replace(/old/g,"new"));