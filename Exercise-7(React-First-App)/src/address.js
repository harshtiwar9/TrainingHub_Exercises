import React from 'react';

class Address extends React.Component {
    constructor(props) {
        super(props);

    }

    // this.props.label = "Correspondance Address else return input tag only"

    getAddressName = () =>{
        if(this.props.label==="Correspondance Address"){
            return <input value={this.props.name}/> 
        }
        else{
            return    <input />
        }
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <br>
                </br>
                <label>Adressee</label>
                {this.getAddressName()}

                <br />
                <br />
                <label>1 st line</label>
                <input />
                <br />
                <br />
                <br />
                <label>2nd line</label>
                <input />
            </div>
        );

    }
}


export default Address;