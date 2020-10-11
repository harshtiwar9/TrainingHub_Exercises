//const axios = require('axios');
const dbUrl = "https://managingconference.firebaseio.com/managingconference.json";

let name, email, passes, comments;

function displayData() {
    name = $("#name").val();
    email = $("#email").val();
    passes = $("#selectedPasses").val();
    comments = $("#comments").val();
    //alert("Name : " + name + "\nEmail : " + email + "\nPasses : " + passes + "\nComments : " + comments);
    addData();
}

function getData() {
    axios.get(dbUrl)
        .then(function(response) {
            console.log(response.data);
        })
        .then(function() {
            window.location.href = "../Exercise-1/Exercise-1.html";
        })
}

// function addData() {
//     axios.post(dbUrl, { firstName: "Harsh", lastName: "Tiwar" })
//         .then(function(response) {
//             console.log(response.data);
//         })
//         .then(function(response) {
//             getData();
//         });
// }

function addData() {
    axios.post(dbUrl, { userName: name, userEmail: email, userPasses: passes, userComments: comments })
        .then(function(response) {
            console.log(response.data);
        })
        .then(function(response) {
            getData();
        });
}

//addData();
//getData();