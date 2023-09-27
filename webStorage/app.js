//Json Javascript object Notation

//set
//number
var num = 12345;
localStorage.setItem("number", num);
//string
var str = "shilpa";
localStorage.setItem("String",str);
//boolean
var bool = true;
localStorage.setItem("boolean", bool);
//object
var obj1 = {
    name: "shilpa",
    Age: 26,
};
localStorage.setItem("object1", obj1);

var modifyobj = JSON.stringify(obj1);
localStorage.setItem("object1",modifyobj);
//array
var arr1 = [1,2,3,4,5];
localStorage.setItem("array1",arr1);

var modifiedArray = JSON.stringify(arr1);
localStorage.setItem("Array1", modifiedArray);

// GET
//number
var getNum = localStorage.getItem("number");
console.log(getNum, typeof getNum);
document.write(getNum);

var modifiedNum1 = JSON.parse(getNum);
localStorage.getItem("number", modifiedNum1);
console.log(modifiedNum1, typeof modifiedNum1);
document.write(modifiedNum1);

//string
var getString = localStorage.getItem("String");
console.log(getString, typeof getString);
document.write(getString);

//boolean
var getBoolean = localStorage.getItem("boolean");
console.log(getBoolean, typeof getBoolean);
document.write(getBoolean);

var modifiedBoolean = JSON.parse(getBoolean);
console.log(modifiedBoolean, typeof modifiedBoolean);
document.write(modifiedBoolean);

//object
var object = localStorage.getItem("object1");
console.log(object, typeof object);
document.write(object);

var modifiedObj2 = JSON.parse(object);
console.log(modifiedObj2, typeof modifiedObj2);
document.write(modifiedObj2);

//task1
var btn = document.getElementById("clear");
console.log(btn);
btn.addEventListener("click", function(){
    localStorage.clear()
});