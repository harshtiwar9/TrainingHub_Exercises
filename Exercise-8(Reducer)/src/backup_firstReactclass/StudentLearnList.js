import React from 'react';
import './App.css';

class StudentLearnList extends React.Component {

   mapToUpperCase(){
    return this.props.studentName.toUpperCase();
  }

  sum(){
    if(this.props.studentName === 'Brijesh'){
      return( 
          <div>
            <span>Javascript</span>
            <span>Git</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
      )
    } else{
          return (
            <div>
              <span>Mongo</span>
              <span>Python</span>
            </div>
          )
    }
  }

  render() {
    return (
      <div>
        <div>{this.mapToUpperCase()|| "AKShay"}</div>
        {this.sum()}
      </div>)
  }
}

export default StudentLearnList;