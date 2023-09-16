//Immediately Invoked Function Expression (IIFE)

(function coffee(){
    // named iife 
    console.log(`DB CONNECTED`);
}) ();
// coffee()

( (name) => {
    console.log(`DB CONNECTED SECOND ${name}`);
} ) ("Aasif khan")
