import React from 'react';
import {NavLink} from 'react-router-dom';

const SiginLinks = () =>{
    return(

        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/CreateProject">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink z-depth-5 ">islam</NavLink></li>
        </ul>
         
       
    )
};
export default SiginLinks ;