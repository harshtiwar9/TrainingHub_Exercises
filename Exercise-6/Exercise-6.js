//const axios = require('axios');

const dbUrl = "https://studentteacherexercise-6.firebaseio.com/studentteacherexercise-6.json";
const studentDbUrl = "https://studentteacherexercise-6.firebaseio.com/studentDetails.json?print=pretty";
const teacherDbUrl = "https://studentteacherexercise-6.firebaseio.com/teacherDetails.json";
const classDbUrl = "https://studentteacherexercise-6.firebaseio.com/classDetails.json?print=pretty";

let printDiv = "";

function addStudent() {
    //firebase.database.ref()

    let stuId = $("#studentId").val();
    let stuName = $("#studentName").val();
    let stuClass = $("#studentClass").val();
    let stuAvgMarks = $("#studentAvgMarks").val();
    let stuSubject = $("#studentSubject").val();
    let stuTeacherName = $("#studentTeacherName").val();

    axios.post(studentDbUrl, {
            studentId: parseInt(stuId),
            studentName: stuName,
            studentClass: parseInt(stuClass),
            studentAvgMarks: parseInt(stuAvgMarks)
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
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });
}

function addTeacher() {
    //firebase.database.ref()

    let teachClass = $("#teacherClass").val();
    let teachSubject = $("#teacherSubject").val();
    let teachName = $("#teacherName").val();

    axios.post(classDbUrl, {
            teacherClass: parseInt(teachClass),
            teacherSubject: teachSubject,
            teacherName: teachName
        })
        .then(function(response) {
            //console.log(response.data);
            if (response.status === 200) {
                M.toast({ html: 'Teacher ' + teachName + ' added successfully!' })
                $("#teacherForm")[0].reset();
                showTeachers();
            } else {
                M.toast({ html: 'Error while adding ' + teachName + ' teacher!' })
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
            M.toast({ html: 'Error while adding ' + teachName + ' teacher!' })
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });
}

function showStudentAsPerCondition() {

    let studClass = $('#studentClass').val();
    let classCount = [];

    studClass.length === 0 ? M.toast({ html: 'Please enter student class to filter data!' }) : "";
    axios.get(studentDbUrl)
        .then(function(response) {
            printDiv = "";
            $("#viewStudentInformation").empty();
            printDiv += "<table class='centered'><thead><tr><th>Student Id</th><th>Student Name</th><th>Student Class</th><th>Average Marks</th></tr></thead><tbody>";
            if (Object.keys(response.data).length > 0) {
                let i = 0;
                for (const key of Object.keys(response.data)) {
                    if (studClass.length > 0) {
                        if (parseInt(response.data[key].studentClass) === parseInt(studClass)) {
                            // console.log(response.data[key].studentId);
                            printDiv += "<tr><td>" + response.data[key].studentId + "</td><td>" + response.data[key].studentName + "</td><td>" + response.data[key].studentClass + "</td><td>" + response.data[key].studentAvgMarks + "</td></tr>";
                            classCount.push(i++);
                        }
                    }
                }

                if (classCount.length === 0) {
                    printDiv += "<tr><td colspan='4'> No student found in Class " + studClass + "!</td></tr>";
                    $("#studentForm")[0].reset();
                }

            }
            printDiv += "</tbody></table>";
            $('.viewStudentInformation').html(printDiv);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });
}

function showTeacherAsPerCondition() {

    let formTeacherName = ($('#teacherName').val()).toUpperCase();
    let countTeacherClass = [];

    formTeacherName.length === 0 ? M.toast({ html: 'Please enter Teacher Name to filter data!' }) : "";
    axios.get(classDbUrl)
        .then(function(response) {
            printDiv = "";
            $("#viewTeacherInformation").empty();
            printDiv += "<table class='centered'><thead><tr><th>Student Id</th><th>Student Name</th><th>Student Class</th><th>Average Marks</th></tr></thead><tbody>";
            //console.log("Response Length:" + Object.keys(response.data).length)
            if (Object.keys(response.data).length > 0) {
                for (const key of Object.keys(response.data)) {

                    if ((response.data[key].teacherName).toUpperCase() === formTeacherName) {
                        countTeacherClass.push(parseInt(response.data[key].teacherClass));
                        //console.log(countTeacherClass);
                    }
                }

                if (countTeacherClass.length > 0) {

                    axios.get(studentDbUrl)
                        .then(function(response2) {
                            for (var i = 0; i < countTeacherClass.length; i++) {
                                for (const key2 of Object.keys(response2.data)) {
                                    //console.log(parseInt(response2.data[key2].studentClass) + "===" + countTeacherClass[i] + " : " + console.log(parseInt(response2.data[key2].studentClass) === countTeacherClass[i]))
                                    if (parseInt(response2.data[key2].studentClass) === countTeacherClass[i]) {
                                        //console.log(response2.data[key2].studentId);
                                        printDiv += "<tr><td>" + response2.data[key2].studentId + "</td><td>" + response2.data[key2].studentName + "</td><td>" + response2.data[key2].studentClass + "</td><td>" + response2.data[key2].studentAvgMarks + "</td></tr>";
                                    }
                                }
                            }
                            printDiv += "</tbody></table>";
                            $('.viewTeacherInformation').html(printDiv);
                        })
                        .catch(function(error) {
                            if (error.response) {
                                console.log(error.response.data);
                            } else if (error.request) {
                                console.log(error.request);
                            } else {
                                console.log('Error', error.message);
                            }
                            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
                        })

                } else {
                    printDiv += "<tr><td colspan='3'> No one taught by " + formTeacherName + "!</td></tr>";
                    printDiv += "</tbody></table>";
                    $('.viewTeacherInformation').html(printDiv);
                }

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
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });

}

function showStudents() {
    axios.get(studentDbUrl)
        .then(function(response) {
            printDiv = "";
            $("#viewStudentInformation").empty();
            $("#studentForm")[0].reset();
            printDiv += "<table class='centered'><thead><tr><th>Student Id</th><th>Student Name</th><th>Student Class</th><th>Average Marks</th></tr></thead><tbody>";
            for (const key of Object.keys(response.data)) {
                //console.log(response.data[key].studentName);
                //console.log(response.data[key]);
                printDiv += "<tr><td>" + response.data[key].studentId + "</td><td>" + response.data[key].studentName + "</td><td>" + response.data[key].studentClass + "</td><td>" + response.data[key].studentAvgMarks + "</td></tr>";
            }
            printDiv += "</tbody></table>";
            $('.viewStudentInformation').html(printDiv);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });
}

function showTeachers() {
    axios.get(classDbUrl)
        .then(function(response) {
            printDiv = "";
            $("#viewTeacherInformation").empty();
            $("#teacherForm")[0].reset();
            printDiv += "<table class='centered'><thead><tr><th>Class</th><th>Subject</th><th>Teacher</th></tr></thead><tbody>";
            for (const key of Object.keys(response.data)) {
                //console.log(response.data[key].studentName);
                //console.log(response.data[key]);
                printDiv += "<tr><td>" + response.data[key].teacherClass + "</td><td>" + response.data[key].teacherSubject + "</td><td>" + response.data[key].teacherName + "</td></tr>";
            }
            printDiv += "</tbody></table>";
            $('.viewTeacherInformation').html(printDiv);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            M.toast({ html: 'Hold on some error occured, we are fixing it!' })
        })
        .finally(function() { M.toast({ html: 'Request Executed!' }) });
}

// $(document).ready(function() {
//     $('input.autocomplete').autocomplete({
//         axios.get(studentDbUrl)
//         .then(function(response) {

//         })
//         data: {

//         },
//     });
// });

//addStudent(1, "Harsh", 10, 95);
//addStudent(2, "Akshay", 11, 95);
//addStudent(3, "Brijesh", 12, 94);
//showData();
showStudents();
showTeachers();