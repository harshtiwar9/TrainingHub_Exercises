import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';

function StudentList() {
    const [students, setStudents] = useState([]);


    const something = () => {
        axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
            .then((response) => {
                let responseData = Object.entries(response.data);
                setStudents(responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 })))
            })
            .catch((error) => {
                console.log(error)
            })
            console.log("---value from counter-----", counter)
    }

    useEffect(something, []);

    const increment = (name) => {
        dispatch({ type: '' })
        let currentState = [...students];
        currentState.forEach(element => {
            if(element.studentName === name) element.attendance ++;
        })
        setStudents(currentState);
    }

    const renderAllStudent = () => {
        
        return students.map(student => {
                return (
                    <span>
                        <br/>
                            <StudentLearnList studentName={student.studentName} increment={increment} currentAttendance={student.attendance} />
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
