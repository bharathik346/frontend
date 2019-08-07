/* eslint-disable */

import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { withRouter } from "react-router-dom";


const Header = (props)=>{
    
        return (
          <div className="Header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                       

                    </ul>
                    

                </div>
            </nav>
          </div>
        );

}

export default withRouter(Header);