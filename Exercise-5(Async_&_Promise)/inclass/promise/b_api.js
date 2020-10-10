const axios = require('axios');
// axios.default.headers.common["Cache-Control"] = "no-cache";



const cbForCar = function( response){
    axios('http://localhost:9000/users')
        .then(cbForUsers)
        .catch(cbForError)
    console.log("car details", response.data)
}


const cbForError = function(err){
    console.log( "Error occured")
}
const cbForUsers = function(response){
    console.log("user details", response.data)
}

const carUrl = 'http://localhost:wetretrt/cars';
const userUrl = 'http://localhost:9000/users'


function getAllCars(){
    axios.get(carUrl)
        .then( function (response){
            axios.get(userUrl)
                    .then(cbForUsers)
                    .catch(cbForError)
        })
        .then(function (response){
            axios.get(userUrl)
                    .then(cbForUsers)
                    .catch(cbForError)
        })
        .catch(cbForError)

}

getAllCars();

