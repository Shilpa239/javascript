var mid = document.querySelector(".mid");
console.log(mid);
//parent Element
var parentEl = mid.parentElement;
console.log(parentEl);
parentEl.style.border = "1px solid red";
//parent Node
var parentNode = mid.parentNode;
console.log(parentNode);
parentEl.style.border = "4px solid yellow";
//children
var cars = document.getElementById("cars")
console.log(cars);

var childrenE1 = cars.children;
console.log(childrenE1);

var childrenArr = Array.from(childrenE1);
console.log(childrenArr);

childrenArr.forEach((e)=> e.style.backgroundColor = "lightgreen");
//first Child
var firstChild = cars.firstElementChild;
console.log(firstChild);
firstChild.style.backgroundColor="violet";
//last child
var lastChild = cars.lastElementChild;
console.log(lastChild);
lastChild.style.backgroundColor = "pink";
//siblings
var presibling = mid.previousElementSibling;
console.log(presibling);
presibling.style.backgroundColor = "purple";
//nextsibling
var nextsibling1 = mid.nextElementSibling;
console.log(nextsibling1);
nextsibling1.style.backgroundColor = "blueviolet";

//create
var buttonElement = document.getElementById("btnElement");
console.log(buttonElement);

var anchor = document.createElement("a");
anchor.innerHTML = "Google";
anchor.classList.add("text-white");
anchor.style.textDecoration = "none";

anchor.setAttribute("href", "https:www.google.com");
anchor.setAttribute("target", "_blank");
buttonElement.append(anchor);

// part 3
var divElement = document.getElementById("divElement");
// ul
var ul = document.createElement("ul");
ul.className = "list-group";
console.log(ul);
// li
var li1 = document.createElement("li");
li1.className = "list-group-item";
// li1.innerHTML = "Honda Hornet";
// console.log(li1);

// var li2 = document.createElement("li")
// li2.className = "list-group-item"
// li2.innerHTML = "Royal Enfield classic 350"
// console.log(li2);

// var li3 = document.createElement("li")
// li3.className = "list-group-item"
// li3.innerHTML = "Tvs Apache RTR"
// console.log(li3);

// var li4 = document.createElement("li")
// li4.className = "list-group-item"
// li4.innerHTML = "Honda Shine"
// console.log(li4);

// var li5 = document.createElement("li")
// li5.className = "list-group-item"
// li5.innerHTML = "KTM Duke"
// console.log(li5);

// var li6 = document.createElement("li")
// li6.className = "list-group-item"
// li6.innerHTML = "Harley Davidson"
// console.log(li6);

//appendChild
divElement.appendChild(ul)
ul.appendChild(li1)

//append
// divElement.append(ul)
// ul.append(li1)
// ul.append(li2)
// ul.append(li3)
// ul.append(li4)
// ul.append(li5)
// ul.append(li6)

//prepend
//ul.prepend(li2)

//siblings relation
//before
//li5.before(li3)

//after
//li2.after(li4)

//insertBefore
//ul.insertBefore(li6,li2)

var inp = document.getElementById("fName");
var btn = document.getElementById("btn-id");
var head = document.getElementById("head");

var onKeydown = (e) => {
    console.log("onKeydown ", e.key);
}
var onKeyup = (e) => {
    console.log("onKeyup", e.key);
}
var onKeyPress = (e) => {
    console.log("onKeypress", e.key);
}

var onClick = (e)=>{
    alert(inp.value);
    head.innerHTML = inp.value;
}
var onSubmit = (e) => {
    e.preventDefault()
    console.log("submit");
}
var onFocus = () => console.log("focus");
var onChange =() => console.log("change");
var onBlur =() => console.log("onBlur");
var onInput =()=> console.log("oninput");

inp.addEventListener("keydown",onKeydown);
inp.addEventListener("keyup",onKeyup);
inp.addEventListener("keypress",onKeyPress)

btn.addEventListener("click", onClick);
btn.addEventListener("submit", onSubmit);

inp.addEventListener("focus", onFocus);
inp.addEventListener("change", onChange);
inp.addEventListener("blur", onBlur);
inp.addEventListener("input", onInput);