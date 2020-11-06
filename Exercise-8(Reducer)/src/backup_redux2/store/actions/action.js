import axios from "axios"

export function something ( )  {

    return function(dispatch){

        axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
        .then((response) => {
            // let responseData = Object.entries(response.data);
            // setStudents(responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 })))
            console.log(" in reux thunk")
            dispatch({type : 'addAttendance', data : 10})
        })
        .catch((error) => {
            console.log(error)
        })

    }
    
}