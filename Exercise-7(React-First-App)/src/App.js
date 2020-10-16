import React from 'react';
import './App.css';
// import Component1 from './component1';
// import Caddress from './Caddress';
// import Gaddress from './gaddress';

import Address from './address';

class App extends React.Component {
  constructor(props){
    super(props);
   this.state = { 
     name:"",
     age:""
   }
  }

  updateAddress = (event) =>{
    this.setState({name:event.target.value});
  }

  updateAge = (event) =>{
    this.setState({age:event.target.value});
  }

  validateAge = () =>{
      if( this.state.age && this.state.age<18){
        return <Address label={"Guardian Address"} />
      }
  }

  render() {
    return (
      <div>
      <label>Name of Student</label>
      <input onChange={this.updateAddress} />
      <br />
      <label>Age</label>
      <input onChange={this.updateAge} />
      <br />

      <Address label={"Correspondance Address"} name={this.state.name}/>
      <br />
      <br />
      {/* <Address label={"Guardian Address"} /> */}
      {this.validateAge()}
  </div>
      )

  }
}

export default App;
