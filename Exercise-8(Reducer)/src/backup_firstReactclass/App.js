import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
// import StudentLearnList from './StudentLearnList';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { studentName: 'Harsh' }
//   }

//   updateStudentName = (e) => {
//     this.setState({ studentName: e.target.value })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           Enter Student Name :<input onBlur={this.updateStudentName}></input>
//           <p>
//             Welcome {this.state.studentName} to the react class
//           </p>
//           <StudentLearnList studentName={this.state.studentName} />
//         </header>
//       </div>)
//   }
// }


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     state = { counter : 0}
//   }

//   increment =  () => {
//     var currentCount =  this.state.counter + 1;
//     this.setState({ counter : currentCount})
//   }
// // Button - counter , everytime i click i should counter value
//   render() {
//     return (
//       <div> 
//         <button onClick = {this.increment}>Click Me</button>
//         <span>{this.state.counter}</span>
//       </div>
//     )

//   }
// }


function App() {
  const [student, setStudent] = useState("");
  const [counter, setCounter] = useState(0);

  const something = () => {
    console.log("In Use effect")
    axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
      .then((response) => {
        setStudent(response.data["-MJdJiy-W5vrVLqQJv8B"]["studentName"])
      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(something, [counter]);

  const increment = () => {
    var currentCount = counter + 1;
    setCounter(currentCount)
  }



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome {student} to the react class
        </p>
        <StudentLearnList studentName={1} />
        <button onClick={increment}>Click Me</button>
      </header>
    </div>
  );
}





function StudentLearnList(props){
  return (
    <div>
      <div>{props.studentName || "AKShay"}</div>
      <span>Javascript</span>
      <span>Git</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>
  )
}

export default App;