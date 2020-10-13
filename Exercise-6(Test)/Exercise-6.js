//const axios = require('axios');

const dbUrl = "https://studentteacherexercise-6.firebaseio.com/studentteacherexercise-6.json";
const studentDbUrl = "https://studentteacherexercise-6.firebaseio.com/studentDetails.json";
const teacherDbUrl = "https://studentteacherexercise-6.firebaseio.com/teacherDetails.json";
let printDiv = "";

function addStudent() {
    //firebase.database.ref()

    let stuId = $("#studentId").val();
    let stuName = $("#studentName").val();
    let stuClass = $("#studentClass").val();
    let stuAvgMarks = $("#studentAvgMarks").val();

    axios.post(studentDbUrl, {
            studentId: stuId,
            studentName: stuName,
            studentClass: stuClass,
            studentAvgMarks: stuAvgMarks
        })
        .then(function(response) {
            //console.log(response.data);
            if (response.status === 200) {
                M.toast({ html: 'Student ' + stuName + ' added successfully!' })
                $("#studentForm")[0].reset();
                showStudents();
            } else {
                M.toast({ html: 'Error while adding ' + stuName + ' student!' })
            }
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            M.toast({ html: 'Error while adding ' + stuName + ' student!' })
        })
}

function showStudentAsPerClass(studClass) {
    studClass.length === 0 ? M.toast({ html: 'Please enter student class to filter data!' }) : "";
    axios.get(studentDbUrl + "?orderBy=%22studentClass%22&equalTo=" + studClass)
        .then(function(response) {
            printDiv = "";
            $("#viewInformation").empty();
            printDiv += "<table class='centered'><thead><tr><th>Student Id</th><th>Student Name</th><th>Student Class</th><th>Average Marks</th></tr></thead><tbody>";
            //console.log("Response Length:" + Object.keys(response.data).length)
            if (Object.keys(response.data).length > 0) {
                for (const key of Object.keys(response.data)) {
                    //console.log(response.data[key]);
                    printDiv += "<tr><td>" + response.data[key].studentId + "</td><td>" + response.data[key].studentName + "</td><td>" + response.data[key].studentClass + "</td><td>" + response.data[key].studentAvgMarks + "</td></tr>";
                }
            } else {
                printDiv += "<tr><td> Not Found!</td></tr>";
                $("#studentForm")[0].reset();
            }
            printDiv += "</tbody></table>";
            $('.viewInformation').html(printDiv);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}

function showStudents() {
    axios.get(studentDbUrl)
        .then(function(response) {
            printDiv = "";
            $("#viewInformation").empty();
            $("#studentForm")[0].reset();
            printDiv += "<table class='centered'><thead><tr><th>Student Id</th><th>Student Name</th><th>Student Class</th><th>Average Marks</th></tr></thead><tbody>";
            for (const key of Object.keys(response.data)) {
                //console.log(response.data[key].studentName);
                //console.log(response.data[key]);
                printDiv += "<tr><td>" + response.data[key].studentId + "</td><td>" + response.data[key].studentName + "</td><td>" + response.data[key].studentClass + "</td><td>" + response.data[key].studentAvgMarks + "</td></tr>";
            }
            printDiv += "</tbody></table>";
            $('.viewInformation').html(printDiv);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}

//addStudent(1, "Harsh", 10, 95);
//addStudent(2, "Akshay", 11, 95);
//addStudent(3, "Brijesh", 12, 94);
//showData();