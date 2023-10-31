const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);

// console.log(desc);


// const newObject = Object.create(null)

const chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false // if if change the enumerable as true so that my object will be iterable in name also otherwise it is not iterable
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}