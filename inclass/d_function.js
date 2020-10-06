//========different ways to access a function ========
// function concateNames(a,b,c){
//     return a + b + c;
// }

// console.log(concateNames("brijesh", "Akshay", "Harsh"));

// console.log(concateNames("brijesh", "Akshay"));

// console.log(concateNames("brijesh", "Akshay", "Harsh", "Mukesh"));




// // ===========Function within function  ==========

// function init() {
//   var name = 'Mozilla'; 
//   function displayName(displayName) { 
//      console.log(displayName);
//   }
//   displayName(name);
// }
// init();


// // 1) What is the scopr of the function displayName







// // ============================ Rest ==================================

function concateNames(...args){
  let concatenatedNames = '';

  for (let arg of args) concatenatedNames += arg;

  return concatenatedNames;
}

console.log(concateNames("brijesh", "Akshay", "Harsh"));

console.log(concateNames("brijesh", "Akshay"));

console.log(concateNames("brijesh", "Akshay", "Harsh", "Mukesh"));