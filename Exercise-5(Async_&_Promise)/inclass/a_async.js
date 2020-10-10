// const second = () => {
//     console.log("Hello there");
// }

// const first = () => {
//     console.log('Hi there');
//     console.log('Hi there');
//     setTimeout(second, 1000);
//     console.log('the end')
// }

// first();




// const second = () => {
//     console.log("Hello there");
// }

// const first = () => {
//     console.log('Hi there');
//     console.log('Hi there');
//     second()
//     console.log('the end')
// }

// first();


// // ==============================
// function callback_2Sec () {
//     console.log("Completed 2 sec");
// }

// function callback_10Sec () {
//     console.log("Completed 10 sec");
// }

// function first() {
//     console.log('first log');
//     setTimeout(callback_10Sec, 10000);
//     setTimeout(callback_2Sec, 2000);
//     console.log('the end')
// }

// first();

// first log
// the end
// Completed 2 Sec
// Completed 10 Sec 



// // =============Guess the output =================
function callback_0Sec () {
    console.log("Completed 0 sec");
}



function first() {
    console.log('first log');
    setTimeout(callback_0Sec, 0);
    console.log('blah ...')
    console.log('blah ...')
    console.log('blah ...')
    console.log('blah ...')
    console.log('blah ...')
    console.log('blah ...')

}

first();

// console.log('first log');
// console.log("Completed 0 sec");
// console.log('blah ...')
// console.log('blah ...')
// console.log('blah ...')
// console.log('blah ...')
// console.log('blah ...')
// console.log('blah ...')




