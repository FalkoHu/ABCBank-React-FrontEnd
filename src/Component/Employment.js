import React, {Component} from 'react';
import axios from'axios';
import {Link} from 'react-router-dom';

class Employment extends Component{
    constructor(props){
        super(props);
        this.state = {
            ssn: {}
        };
    }

    addEmployer(emp){
        axios.request({
            method:'POST',
            url:`http://localhost:8181/user/${this.props.ssnSend}/employment`,
            data:emp
        }).catch(err=>console.log(err));
    }

    onAddSubmit(e){
        e.preventDefault();
        alert("Submitted");
        const emp = {
            name : this.refs.name.value,
            address : this.refs.address.value
        }
        this.addEmployer(emp);
    }

    render(){
        return(
            <div><br></br>
             <div className="col-lg-4 col-lg-offset-4">
             <h2>Enter Employer Details</h2> <br/>
                <form onSubmit={this.onAddSubmit.bind(this)}>
                <div className="form-group row">
                   
                   <label className="col-sm-2 col-form-label">Employer Name</label>
                   <div className="col-sm-10">
                       <input type="text" className="form-control" name="name" placeholder="Employer Name" ref="name"/>
                   </div>
               </div>
                    <div className="form-group row">
                   
                        <label className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="address" placeholder="Employer Address" ref="address"/>
                        </div>
                    </div>
                        <input type="submit" className="btn btn-primary" value="Save"/>   {'  '}
                        <Link to="/account" className="btn btn-success">Next</Link>
                </form>
                </div>
            </div>
        )
    }

}

export default Employment;