function greet(name){
    return `"Hello ${name}`
}
console.log("shilpa");

function printName1(){
    fName = "shilpa ";
    lName = "Datir";
    var fullName = fName + lName;
console.log(fullName);
}
printName1()

function printName2(){
    fName = "Shilpa ";
    lName = "Datir";
    var result = fName + lName;
    return result;
}
console.log(printName2());

function printName3(fName, lName){
    var fullName = fName + lName;
    return fullName;
}
console.log(printName3("Shilpa ", "Datir"));

function add1(a,b){
    console.log(a+b);
}
add1(12,45);

function add2(a,b) {
    return a+b;
}
var print = add2(45,89);
console.log(print);