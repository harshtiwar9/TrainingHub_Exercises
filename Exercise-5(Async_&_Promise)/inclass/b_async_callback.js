var request = require('xhr-request');




const cbForCar = function( response){
    request('http://localhost:9000/users')
        .then(cbForUsers)
        .catch(cbForError)
    console.log("car details", response)
}


const cbForError = function(err){
    console.log( err)
}
const cbForUsers = function(response){
    console.log("user details", response)
}



function getAllCars(){
    console.log("Before invoking")
    request('http://localhost:9000/cars')
        .then(cbForCar)
        .catch(cbForError)
    console.log("after invoking")

}


function getAllCars(){
    console.log("Before invoking")
    request('http://dfgdfgfg/cars', function(err, response){
        if(err){
            console.log(" Errro occured" + err)
            return 0;
        }
        request('http://localhost:9000/users', function(err1, response1){
            if(err1){
                console.log(" Errro occured"+ err1)
                return 0;
            }
            console.log("user details", response1)
        })

//     })
//     console.log("after invoking")

// }



getAllCars();









// we didnt see the code request
// Assuming
// request will execute our call back only 1 
// request excute our at end function

// difficuly to readbility






