import React from 'react';
import {NavLink} from 'react-router-dom';

const SignoutLinks = () =>{
    return(

        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/SignUp">SiginUp</NavLink></li>
            <li><NavLink to="/Sigin">Login</NavLink></li>
        </ul>
         
       
    )
};

export default SignoutLinks ;