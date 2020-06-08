import React, {Component} from 'react';
import axios from'axios';
import {Link} from 'react-router-dom';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class Account extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: 50
        };
    }

    addAccount(acc){
        axios.request({
            method:'POST',
            url:`http://localhost:8181/user/${this.props.ssnSend}/account`,
            data:acc
        }).catch(err=>console.log(err));
    }

    onAddSubmit(){
        const acc = {
            type : this.refs.type.value,
            fundigAmount : this.refs.fundigAmount.value
        }
        this.addAccount(acc);
    }

    filterProducts = (e) => {
        if(e.target.value === 'saving'){
            this.setState({
                val:50
            })
        } 
        if(e.target.value === 'checking'){
            this.setState({
                val:100
            })
        } 
        if(e.target.value === 'MoneyMarket'){
            this.setState({
                val:300
            })
        } 
        if(e.target.value === 'CD'){
            this.setState({
                val:400
            })
        } 
        if(e.target.value === 'IRACD'){
            this.setState({
                val:500
            })
        } 
  }

    render(){
        return(
            <div><br></br>
             <div className="col-lg-4 col-lg-offset-4">
             <h2>Choose Account Type</h2> <br />
                <form onSubmit={this.onAddSubmit.bind(this)}>
                <div className="form-group row">
                   
                   <label className="col-sm-2 col-form-label">Account Type</label>
                   <div className="col-sm-10">
                       <select className="selectpicker" name="type" ref="type" onChange={this.filterProducts.bind(this)}>
                            <option value="saving">Saving</option>
                            <option value="checking">Checking</option>
                            <option value="MoneyMarket">Money Market</option>
                            <option value="CD">CD</option>
                            <option value="IRACD">IRA CD</option>
                       </select>
                   </div>
               </div>
                    <div className="form-group row">
                   
                        <label className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10">
                            <p>Minimum deposite amount is ${this.state.val}</p>
                            <input type="number" className="form-control" name="fundigAmount" ref="fundigAmount" min={this.state.val}/>
                        </div>
                    </div>
                        <input type="submit" className="btn btn-primary" value="Save"/>   {'  '}
                        <Link to="/thankyou" className="btn btn-success">Next</Link>
                </form><br/><br/>
                <h4>Attach any additional documents</h4><br/>
                <FilePond />
                </div>
            </div>
        )
    }

}

export default Account;