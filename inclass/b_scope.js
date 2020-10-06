

// {
//     //scope 1
//     {
//       // scope 1.1
//       {
//         // scope 1.1.1
//       }
//     }
//     {
//       // scope 1.2
//     }
//   }
  
  
//   {
//     //scope 1
//     var a =10;
//     {
//       // scope 1.1
//       {
//         // scope 1.1.1
//         var b =20;
//       }
//     }
//     {
//       // scope 1.2
//       console.log(a)
//     }
//   }
  







  function adult6(age) {
    if (age > 18) {
      var status = 'adult';
    }
    console.log(status); //ReferenceError: status is not defined
  }
  adult6(20);














// // myLetVariable is *not* visible out here

// for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
//   console.log("myLetVariable...", myLetVariable);
//   // myLetVariable is only visible in here
// }

// console.log("myLetVariable out side for loop...", myLetVariable);









// let versus var

// let points = 50;
// var winner = false;
// if(points > 40) {
//   var winner = true;
//   console.log('====winner inside the block=====',winner);
// }

// console.log('====winner outside the block=====',myNumbers);



// // ===== const
{
  const name = 'grub'

}
