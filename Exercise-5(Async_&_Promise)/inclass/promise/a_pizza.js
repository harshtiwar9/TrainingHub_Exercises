// let whatisState;
// var orderPizza = new Promise(   function(resolve, reject) {
//     console.log("Pending state- We promise your pizza will be ready in 10 mins")
//     setTimeout( () => {
//         console.log(" Promises 10 mins is up");
//         if(whatisState === 'Fulfilled')    {
//             resolve("Mozzarella")
      
//         } else {
//             reject (Error (" Oven Broke"));
//         }
//     },10000)
// })


var orderPizza = new Promise( function(resolve, reject) {
    try {
        let something = 1 * 'brijesh';
        resolve(something)
    } catch (err){
        reject(err)
    }

    
})











// whatisState = 'Fulfilled';
whatisState = 'rejected';

harshFulfilled_stateReaction = function (pizza) {
    console.log("Thanks for the serving me the " + pizza + "Pizza")
}

harshRejected_stateReaction = function (err) {
    console.log(" my pizza was not deleivered becasue of " + err + "? no problem could you refund me");
}

orderPizza
    .then(harshFulfilled_stateReaction)
    .catch(harshRejected_stateReaction)





AkshayFulfilled_stateReaction = function (pizza) {
    console.log("bye")
}

AkshayRejected_stateReaction = function (err) {
    console.log("What !!! I will sue you");
}

orderPizza
    .then(AkshayFulfilled_stateReaction)
    .catch(AkshayRejected_stateReaction)