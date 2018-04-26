import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddressLineOne, updateAddressLineTwo, updateAddressLineThree } from '../../state/reducer';

class WizardNine extends Component {

    render(){
        const {
            updateAddressLineOne,
            updateAddressLineTwo,
            updateAddressLineThree
        } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">

                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => updateAddressLineOne(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => updateAddressLineTwo(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => updateAddressLineThree(e.target.value)}/>

                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        addressOne,
        addressTwo,
        addressThree
    } = state;

    return {
        addressOne,
        addressTwo,
        addressThree
    }
}

export default connect(mapStateToProps, { updateAddressLineOne, updateAddressLineTwo, updateAddressLineThree })(WizardNine);