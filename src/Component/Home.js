import React, {Component} from 'react';
import { Switch, Route } from 'react-router';
import Header from './Header';
import User from './User';
import NewAcc from './NewAcc';
import Employment from './Employment';
import Account from './Account';
import End from './End';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            ssn: {}
        }
    }

    changeState = (theSSN) => {
        this.setState({
            ssn: theSSN
        })     
        console.log(this.state.ssn);  
    }

    render(){
        return (
            <div>
            <Header />
            <Switch>
                <Route exact path="/" component={NewAcc}/>
                <Route exact path="/user" render={props => <User propsHandler={this.changeState} {...props}/>} /> 
                <Route exact path="/employment" render={props => <Employment ssnSend={this.state.ssn} {...props}/>} />
                <Route exact path="/account" render={props => <Account ssnSend={this.state.ssn} {...props} />} />
                <Route exact path="/thankyou" component={End} />
            </Switch>
          </div>
        )
    }
 
}

export default Home;