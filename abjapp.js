var obj = {
    name: "Shilpa",
    Age: "26"
}
console.log(obj);

var obj = new Object();
obj.name = "Devendra";
obj.age = 18;
console.log(obj);

var person = {
    name: "Shilpa Datir",
    age : "26",
    post : "Frontend Developer",
    address: {
        city: "Nashik",
        state: "Maharashtra"
    },
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.post);
console.log(person.address.city);
console.log(person.address.state);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["post"]);
console.log(person["address"]["city"]);
console.log(person["address"]["state"]);

var {
    name,
    age,
    post,
    address:{city,state},
} = person
console.log(name);
console.log(age);
console.log(city);


var person = {
    name:"Shilpa Datir",
    age:"26",
    address: {
        city: "Nashik"
    },
};
console.log(person);

person.gender = "Female";
person.state = "Maharashtra"

person["post"] = "FE";
person["address"]["pincode"] = "422010";


var person = {
    name: "shilpa",
    Age : "26",
    education : "BE",
    address: {
        City: "Ambad",
    }
}
console.log(person);
delete person.education;
console.log(person);



var person = {
    name: "Devendra",
    post: "Software Developer",
    address: {
      city: "Pune",
      state: "Maharashtra",
    },
  };
  
var newPerson = person;
console.log("person", person);
console.log("newPerson", newPerson);

newPerson.post = "Fullstack Developer";
console.log("person", person);
console.log("newPerson", person);


var x = 10;
    y = x;

    console.log(y);
    x = 70;
    y = 10;
    console.log(x);
