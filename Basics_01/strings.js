const name = "Aasif-khan"
const repoCount = 70

console.log(name +" " + repoCount + " values");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("mustafa")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(name.length);
console.log(name.charAt(3));
console.log(name.indexOf("f"));


console.log(name.substring(0,4));

console.log(name.slice(-8,4));



const newStringOne = "   aasif  khan  ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://asifkhan.com/asif%40khan";
console.log(url.replace("%40", "-"));
console.log(url.includes("%40"));


console.log(name.split("-"));
