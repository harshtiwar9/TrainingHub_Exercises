// 1) Find out what is a BigInt and a symbol datatype

console.log("\nAnswer-1: In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991),\n or less than -(253-1) for negatives.");
console.log("The 'n' at the end means it's a BigInt");
console.log("typeof 10n: " + typeof 10n);

// Use the inbuilt js array functions to perform the below tasks
// 2)write the implementations function of the filter function just like the map one we did in the class

console.log("\nAnswer-2:")
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.map(elm => elm * elm));

// 3) const pets = ['cat', 'dog', 'bat'];
// function checkIfFound(){
//   ... implement your code
// }
// Input : checkIfFound("cat")
// expected output: display "found"

// Input : checkIfFound("elephant")
// expected output: display "Not found"

// 5) const elements = ['Fire', 'Air', 'Water'];
// function concateWithComma(){
//   ... implement your code
// }
// expected output: "Fire,Air,Water"
// i.e. the array element must be concatenated with ,



// 6) Guess the output
// function print(input){
//   if (input) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// print(true);
// print();
// print(1 == '1');
// print("false");
// print({});
// print("");


// 7) Using js inbuilt string function, perform the below actions
// var input = 'hello, world'

// Print the length of the string
// Print the first char i.e. 'h'
// replace the word world with mars
// Print the upper case 'HELLO, WORLD'


// 8) Explain what is happening
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
