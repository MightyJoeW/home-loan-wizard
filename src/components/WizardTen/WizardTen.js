import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEmail, updateFirstName, updateLastName } from '../../state/reducer';

class WizardTen extends Component {
    render(){
        const { updateEmail, updateFirstName, updateLastName } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">

                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => updateLastName(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => updateEmail(e.target.value)}/>

                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {email, firstName, lastName} = state;
    return {
        email,
        firstName,
        lastName
    }
}

export default connect(mapStateToProps, { updateEmail, updateFirstName, updateLastName })(WizardTen);