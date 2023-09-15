const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6,7],[8,9]]

console.log(another_array.flat(Infinity))


console.log(Array.isArray("Aasif"))

console.log(Array.from("Aasif"))

console.log(Array.from({
    name: "Aasif"
})) //we need to give the tell the javascript which will be converted key or values that's why the outpu is empty array

let arr1=100
let arr2=200
let arr3=300

console.log(Array.of(arr1,arr2,arr3))



