// Stack memory

let mydatatype = "HelloAasifkhan"
let anothername = mydatatype

anothername = "javascript"
console.log(mydatatype);
console.log(anothername);



// Heap memory


let user = {
    name: "Aasif",
    upi: "kotak@123",
    email: "akay@gmail.com"
}

let userTwo = user;
userTwo.email = "abc@gmail.com"

console.log(userTwo);
console.log(user);