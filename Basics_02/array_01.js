const myArr = [0,3,4,5,56,6]

const myHeros = ["Thor" , "Ironman"]

const myArr2 = new Array(1,2,4,5,6,6)
console.log(myArr2);
console.log(myArr[0]);

myArr.push(8)
// myArr.unshift(9)    
// myArr.shift()    

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);


console.log("C ", myArr);
console.log(myn2);

