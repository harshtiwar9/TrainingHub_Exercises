import React from 'react';
import './App.css';
import StudentAttendanceSheet from './StudentAttendanceSheet';
import Graduation from './Graduation';

function App(props){
  return (
    <span>
      <StudentAttendanceSheet/>
      <Graduation/>
    </span>
  )
}

export default App;