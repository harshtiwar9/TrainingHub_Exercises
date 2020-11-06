import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { decrementPoint } from './store/actions/actions'
import './App.css';


function Graduation(props){
  const  { studentDetails } = useSelector( state => state );
  const dispatch = useDispatch();

  const decrement = (name) => {
      let data = {
        studentName : name, pointsToDecrement: 10
    }
    // dispatch(decrementPoint(data))
    dispatch({ type : 'subAttendance', data: data})
  }

  const renderGraduationList = () => {
      return studentDetails.filter( student => student.attendance >= 50)
                            .map( student => {
                              return (
                                              <div> 
                                                { student.studentName } 
                                                <button onClick={() => decrement(student.studentName)}>Reduce Points</button>
                                              </div>
                              )
                            })
          
  }

  return (
    <div className="App">
      <header className="App-header">
          <p>  This is Graduation </p>
          { renderGraduationList() }
      </header>
</div>
  )
}

// studentDetails: [
//   { "studentName": "Harsh", "attendance": 0 },
//   { "studentName": "Brijesh", "attendance": 0 },
//   { "studentName": "Akshay", "attendance": 0 },
//   { "studentName": "Mukesh", "attendance": 0 },
//   { "studentName": "Rahul", "attendance": 0 }
// ]

export default Graduation;


