import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { incrementPoint, setStudentData } from './store/actions/actions'
import axios from "axios"
import './App.css';

function StudentList() {

    const { studentDetails }  = useSelector( state => state);  // this was not working without object notation
    const dispatch = useDispatch();

  

    const getStudentDetials = () => {
              axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
                .then((response) => {
                    let responseData = Object.entries(response.data);
                    let data = responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 }));
                    dispatch(setStudentData(data))
                })
                .catch((error) => {
                    console.log(error)
                })

    }

    useEffect(getStudentDetials, [])


    const increment = (name) => {
        let data = {
            studentName : name, pointsToIncrement: 10
        }
        dispatch(incrementPoint(data))
    }

    const renderAllStudent = () => {
        return studentDetails.map(student => {
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
            <div class="loader"></div>
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
                    <th>{studentName}</th><th>Total Points is {currentAttendance}</th> 
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





// [{"studentName":"Harsh","attendance":0},{"studentName":"Brijesh","attendance":0},{"studentName":"Akshay","attendance":0},{"studentName":"Mukesh","attendance":0},{"studentName":"Rahul","attendance":0}]








    // useEffect(triggerAPI, []);