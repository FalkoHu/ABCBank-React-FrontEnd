import React, {Component} from 'react';
import axios from'axios';
import {Link} from 'react-router-dom';

class User extends Component{
  state = {
      ssn: {}
  };

  onChange = e => {
    this.setState({
        ssn: e.target.value
    });
    let val = e.target.value;
    this.props.propsHandler(val);
    console.log(this.state.ssn);
   }

    addUser(user){
        axios.request({
            method:'POST',
            url:'http://localhost:8181/user',
            data:user
        }).catch(err=>console.log(err));
    }

    onAddSubmit(e){
        e.preventDefault();
        alert("Submitted");
        console.log(this.state.ssn);
        this.props.propsHandler(this.state.ssn);
        const user = {
            ssn : this.refs.ssn.value,
            fName : this.refs.fName.value,
            lName : this.refs.lName.value,
            dob : this.refs.dob.value,
            phoneNumber : this.refs.phoneNumber.value,
            email : this.refs.email.value,
            beneficiaryName : this.refs.beneficiaryName.value,
            beneficiarySSN : this.refs.beneficiarySSN.value,
            beneficiaryDOB : this.refs.beneficiaryDOB.value
        }
        this.addUser(user);
    }

  
    render(){
        return(
            <div><br/>
             <div className="col-lg-4 col-lg-offset-4">
             <h2>Enter Personal Details</h2> 
                <form onSubmit={this.onAddSubmit.bind(this)}>
                <div className="form-group row">
                   
                   <label className="col-sm-2 col-form-label">SSN</label>
                   <div className="col-sm-10">
                       <input type="text" className="form-control" name="ssn" placeholder="Social Security Number" ref="ssn" 
                       onChange={this.onChange}/>
                   </div>
               </div>
                    <div className="form-group row">
                   
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="fName" placeholder="First Name" ref="fName"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="lName" placeholder="Last Name" ref="lName"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">DOB</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="dob" placeholder="Date of Birth" ref="dob"/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" ref="phoneNumber"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="email" placeholder="Email" ref="email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Beneficiary Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="beneficiaryName" placeholder="Beneficiary Name" ref="beneficiaryName"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Beneficiary SSN</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="beneficiarySSN" placeholder="Beneficiary SSN" ref="beneficiarySSN"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Beneficiary DOB</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="beneficiaryDOB" placeholder="Beneficiary DOB" ref="beneficiaryDOB"/>
                        </div>
                    </div>
                        <input type="submit" className="btn btn-primary" value="Save"/>   {'  '}
                        <Link to='/employment' className="btn btn-success">Next</Link>
                </form>
                <br/><br/>
                </div>
            </div>
        )
    }

}

export default User;