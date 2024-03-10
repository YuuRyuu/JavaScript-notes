
// Object literal
let user = {
    name: "John",
    age: 30, 
    "likes birds": true  // multiword property name must be quoted
};

delete user["likes birds"]; // remove property
delete user.age; // remove property

user.age = 25; // add property

// This is how we would normally create an object 
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
} 

// Using property value shorthand, we can do this instead
function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
    };
}

// Prototype inheritance example
let animal = {
    eats : true,
    walk() {
        console.log("Animal is walking");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal // inherit from animal
};

rabbit.walk(); // "Animal is walking"

console.log(Object.keys(rabbit)); // jumps

for (let keys in rabbit) console.log(keys); // jumps, eats, walk

//How to separate own properties and inherited properties

for(let keys in rabbit){
    let isOwn = rabbit.hasOwnProperty(keys); //return true if the property is own

    if (isOwn){
        console.log(`Own: ${keys}`);
    } else{
        console.log(`Inherited: ${keys}`); 
    }
}