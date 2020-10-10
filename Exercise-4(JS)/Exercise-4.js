// 1) Find out what is a BigInt and a symbol datatype

console.log("\nAnswer-1: In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991),\n or less than -(253-1) for negatives.");
console.log("The 'n' at the end means it's a BigInt");
//console.log("typeof 10n: " + typeof 10n);
console.log("typeof 10n: " + typeof BigInt(10));

// Use the inbuilt js array functions to perform the below tasks
// 2)write the implementations function of the filter function just like the map one we did in the class

console.log("\nAnswer-2:");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((elm) => elm % 2 == 0).map(function(elm) { return elm; })); //return only if element is Even.
console.log(arr.map((elm) => elm % 2 == 0 ? "Even" : "odd")); //return if no is odd or even from array.

// 3) 
console.log("\nAnswer-3:");
const pets = ['cat', 'dog', 'bat'];

function checkIfFound(pet) {
    //... implement your code
    console.log(pets.map((elm) => elm === pet ? "Found!" : "Not Found!"));
    // console.log(pets.filter((elm) => elm === pet).map(function(elm) { if (elm.length > 0) { return "Found!" } else { return "Not Found!"; } }));
    console.log(pets.filter((elm) => elm === pet).map(function(elm) { return elm }));
}
checkIfFound("cat")
    //expected output: display "found"

checkIfFound("elephant")
    //expected output: display "Not found"

//4) 
console.log("\nAnswer-4:");

const elements = ['Fire', 'Air', 'Water'];

function concateWithComma() {
    console.log(elements.join(","));
}

concateWithComma();

// expected output: "Fire,Air,Water"
// i.e. the array element must be concatenated with ,



// 5) Guess the output
console.log("\nAnswer-5:");

function print(input) {
    if (input) {
        console.log("true");
    } else {
        console.log("false");
    }
}
print(true);
print();
print(1 == '1');
print("false");
print({});
print("");


// 6) Using js inbuilt string function, perform the below actions
console.log("\nAnswer-6:");
var input = 'hello, world'
console.log("String : " + input);

// Print the length of the string
console.log("Length of String : " + input.length);

// Print the first char i.e. 'h'
console.log("Print the first char i.e. 'h' : " + input.substr(0, 1));
// replace the word world with mars
console.log("Replace the word world with mars : " + input.replace("world", "mars"));
// Print the upper case 'HELLO, WORLD'
console.log("Print the upper case 'HELLO, WORLD' : " + input.toUpperCase());


// 7) Explain what is happening
console.log("\nAnswer-7:");
// (function (){
//   console.log(" Hello World !");
// })()


// ====== Helps us to include private
// var counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }

//     return {
//       increment: function() {
//         changeBy(1);
//       },

//       decrement: function() {
//         changeBy(-1);
//       },

//       value: function() {
//         return privateCounter;
//       }
//     };
//   })();