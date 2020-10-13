const axios = require('axios');

const dbUrl = "https://studentteacherexercise-6.firebaseio.com/studentteacherexercise-6.json";
const studentDbUrl = "https://studentteacherexercise-6.firebaseio.com/studentDetails.json";
const teacherDbUrl = "https://studentteacherexercise-6.firebaseio.com/teacherDetails.json";

function addStudent(stuId, stuName, stuClass, stuAvgMarks) {
    //firebase.database.ref()
    axios.post(dbUrl, {
            studentId: stuId,
            studentName: stuName,
            studentClass: stuClass,
            studentAvgMarks: stuAvgMarks
        })
        .then(function(response) {
            console.log(response.data);
        })
}

function showData() {
    axios.get(studentDbUrl)
        .then(function(response) {
            //console.log(response.data);
            const result = JSON.parse(JSON.stringify(response.data));

            //console.log();
            //console.log(response.data.filter((elm) => elm.studentClass === 10).map(function(elm) { return elm }));
            //console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error);
        })
}

//addStudent(1, "Harsh", 10, 95);
//addStudent(2, "Akshay", 11, 95);
//addStudent(3, "Brijesh", 12, 94);
showData();