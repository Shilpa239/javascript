var heading = document.getElementById("heading");
//heading.textContent = "<span>innerHTML</span>";
//heading.innerText = "<span>innerHTML</span>";
//.innerHTML = "<span>innerHTML</span>"

//HTML Collection
var header = document.getElementsByClassName("header")
//console.log(header);
//console.log(header[0]);

// header[0].textContent = "textContent"
// header[0].innerText = "innerText"
header[0].innerHTML = "innerHTML"

//HTML collection
var h3tag = document.getElementsByTagName("h3");
h3tag[0].textContent = "<span>byuh</span>"
//multiple line
var cars = document.getElementById("cars");
//console.log(cars);
cars.style.color = "white";
//cars.style.backgroundColor = "blueviolet";
//cars.style.listStyle = "none";

//multiple elements
var car = document.getElementsByClassName("car");
console.log(car);
car[0].style.color = "black";
car[0].style.backgroundColor = "orange";
// car[1].style.color = "black";
// car[1].style.backgroundColor = "orange";

//for each loop
var carArray = Array.from(car);
console.log(carArray);

// carArray.forEach((Element)=>{
//     Element.style.color = "green",
//     Element.style.backgroundColor = "yellow"
// });
//tagname for multiple
var liTag = document.getElementsByTagName("li");
 liTag[0].style.color ="blue"
 // for each

var liTagArray = Array.from(liTag);
// console.log(liTagArray);

// liTagArray.forEach((e)=>{
//     e.style.color ="green";
//     e.style.background = "red";
//     e.style.listStyle = "none"
// })
// query selector id---single element---
var querySelector = document.querySelector("#heading");
querySelector.textContent = "Innertext<>";
querySelector.innerHTML = "<span>Innertext</span>";
//query selector--- class----
var queryClass = document.querySelector(".header");
queryClass.textContent = "hbjgyhb"
//query sel single line ---tag--
var queryTag = document.querySelector("h3");
queryTag.textContent = "<>gvg";
// query --multi element 
var multiClass = document.querySelector(".car");
multiClass.style.color = "red";
multiClass.style.backgroundColor = "yellowgreen";
multiClass.style.listStyle = "none"
// query -- multi element (tag)
var multiTag = document.querySelector("li");
multiTag.style.fontSize = "25px";
// queryselall --single line (Nodelist)
var header = document.querySelectorAll(".header");
header[0].textContent = "<>innertext</>";
header[0].innerHTML = "<span>Innerparthtml</span>"
//querysel all --multiline (Nodelist)
var multiLi = document.querySelectorAll("li");
multiLi.forEach((e)=>{
    e.style.fontStyle="italic";
    e.style.backgroundColor = "purple";
    e.style.color = "blue";
    e.style.listStyle = "none"
});
