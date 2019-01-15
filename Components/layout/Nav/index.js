import React from 'react';
import {Link} from 'react-router-dom';
import SiginLinks from '../SiginLinks'
import SignoutLinks from '../SignoutLinks'
const Nav = () =>{

    return(
       <nav>
            <div className="nav-wrapper  blue-grey darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    <SiginLinks />
                    <SignoutLinks />
                </div>
            </div>
        </nav>
     
    )
};

export default Nav ;