import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { something } from './store/actions/action'
import axios from "axios"
import './App.css';

function StudentList() {
    const [students, setStudents] = useState([]);

    // attedance
    const attendance = useSelector( state => state.attendance);
    const dispatch = useDispatch();

    // const something = () => {
    //     axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
    //         .then((response) => {
    //             let responseData = Object.entries(response.data);
    //             setStudents(responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 })))
    //             dispatch({type : 'addAttendance', data : 10})
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    //     console.log(" See Attendance", attendance);
    // }


    const triggerAPI = () => {
         dispatch(something())
    }
    useEffect(triggerAPI, []);

    const increment = (name) => {
        //         0: {studentName: "Harsh", attendance: 0}
        // 1: {studentName: "Brijesh", attendance: 0}
        // 2: {studentName: "Akshay", attendance: 0}
        // 3: {studentName: "Mukesh", attendance: 0}
        // 4: {studentName: "Rahul", attendance: 0}
        // dispatch({type : 'addAttendance'})
        let currentState = [...students];
        currentState.forEach(element => {
            if(element.studentName === name) element.attendance ++;
        })
        setStudents(currentState);
    }

    const renderAllStudent = () => {
        console.log(students)
        return students.map(student => {
                return (
                    <span>
                        <br/>
                            <StudentLearnList studentName={student.studentName} increment={increment} currentAttendance={attendance} />
                        <br/>
                    </span>
                )
            })
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>  MERN class student attendance List </p>
                {renderAllStudent()}
                
            </header>
        </div>
    );
}





function StudentLearnList({ studentName, currentAttendance = 0 , increment}) {
    return (
        <table>

            <thead>
                <tr>
                    <th>{studentName}</th><th>Total Attendance is {currentAttendance}</th> 
                </tr>
            </thead>
            <tbody>
                <tr><td>Javascript</td><td><button onClick={() => increment(studentName)}>Add Attd</button></td></tr>
                <tr><td>Git</td><td><button onClick={() => increment(studentName)}>Add Attd</button></td></tr>
                <tr><td>HTML</td><td><button onClick={() => increment(studentName)}>Add Attd</button></td></tr>
                <tr><td>CSS</td><td><button onClick={() => increment(studentName)}>Add Attd</button></td></tr>
            </tbody>

        </table>
    )
}

export default StudentList;
