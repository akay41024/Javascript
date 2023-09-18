const myObject = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    java: "Java"
}

for (const key in myObject) {
    // console.log(`${key} is the extension of ${myObject[key]} language`);
}


const programming = ["Js", "rb", "py","cpp"]

for (const key in programming) {
    // console.log(key); // return the key/index of the array 
    console.log(programming[key]);
    
}
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key); // map is not iteratible that's why we cannot acces the key with the help of for in loop
}