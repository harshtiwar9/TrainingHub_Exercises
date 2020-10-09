
// ========================= map, filter, reduce =======================

// map

// const arr = [1, 2, 3, 4, 5, 6];
// const mapped = arr.map(
//                       function(el) {
//                          return el + 20
//                         }
//                       );
// console.log(mapped);


// filter

// const arr = [1, 2, 3, 4, 5, 6];
// const filtered = arr.filter(
//                       function(el) 
//                           { 
//                             return el === 2 || el === 4 
//                           } 
//                       );
// console.log(filtered);

// // reduce

// const arr = [1, 2, 3, 4, 5, 6];
// const reduced = arr.reduce(
//                           function(total, current) {
//                                 return total + current
//                         }, 0
//    );
// console.log(reduced);

// // Note: It is always advised to specify an initialValue or you could receive an error. For example:

// const arr = [];
// const reduced = arr.reduce((total, current) => total + current);
// console.log(reduced);
// // Uncaught TypeError: Reduce of empty array with no initial value

// Higher order function
// ======= They can also be returned from other functions, just like variables: ==========

// const createScream = function (logger) {
//   return function (message) {
//     logger(message.toUpperCase() + "!!!");
//   };
// };

// const scream = createScream(message => console.log(message));

// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");


