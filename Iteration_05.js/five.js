const coding = ["Js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

function print(item){
    console.log(item);
}

// coding.forEach(print)


// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);// item for values, index for array index and arr for return whole array

// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})

