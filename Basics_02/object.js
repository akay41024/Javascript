const mySym = Symbol("key1")

const MyObj = {
    name: "Aasif",
    "full name": "Aasif khan",  //we cannot access the full name key with (.) notation that's why we use [] notaion to access the string key 
    age: 23,
    location: "Delhi",
    [mySym]: "New value", // they give us string rither than symbol that's why we use [] to not change the type of the key
    email: "abc@gmail.com",
    isLogginIn: false
}

// console.log(MyObj.name);
// console.log(MyObj["email"]);
// console.log(MyObj["full name"]);
// console.log(MyObj[mySym]);

MyObj.age = 24
// Object.freeze(MyObj)

MyObj.age = 30

// console.log(MyObj);

MyObj.greeting = function(){
    console.log("Hello greeting function");
}


MyObj.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(MyObj.greeting);  //they give us only function reference

console.log(MyObj.greeting());
console.log(MyObj.greetingTwo());

