import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HttpRequests from '../../HttpRequests/httpRequests';
import "./navigation.css";
import LogButten from './logButton';


const Navigation = () => {
    const loggedUp = useContext(HttpRequests)

    const actions = ["notification", "translate", "input word", "repetition"]

    return (
        <React.Fragment>
            {loggedUp.isLoggedIn && actions.map(action => {
                return (
                    <li className="navbar-brand ">
                        <NavLink className={` navLink align-middle`} activeClassName="active"
                            to="#" key={action}>{action}</NavLink>
                    </li>)
            })}
        </React.Fragment>
    )
}

export default Navigation;