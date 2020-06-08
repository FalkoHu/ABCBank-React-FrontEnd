import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NewAcc.css'

const NewAcc = () =>{
    return (
        <div>
            <button><Link to="/user">Create New Account</Link></button>
        </div>
    )
}

export default NewAcc;