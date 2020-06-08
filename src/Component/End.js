import React from 'react';
import {Link} from 'react-router-dom';

const End = () =>{
    return (
        <div className="col-lg-4 col-lg-offset-4"><br/> <br/>
            <h1>Thank you for your submission!</h1>
            <h3>We will email you with further banking details within 10min</h3><br /><br/>
            <Link to='/' className="btn btn-success">Dashboard</Link>
        </div>
    )
}

export default End;