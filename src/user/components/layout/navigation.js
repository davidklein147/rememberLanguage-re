import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HttpRequests from '../../HttpRequests/httpRequests';
import "./navigation.css";
import LogButten from './logButton';


const Navigation = () => {


    const actions = [
        {name: "notification", id: 1, lintTo: "#" },
        {name: "translate",    id: 1, lintTo: "/input" },
        {name: "input word",   id: 1, lintTo: "#" },
        {name: "repetition",   id: 1, lintTo: "#" }
    ]

    return (
        <ul className="k">
            {actions.map(action => {
                return (
                    <li className="navbar-brand ">
                        <NavLink className={` navLink align-middle`} activeClassName="active"
                            to={action.lintTo} key={action.id}>{action.name}</NavLink>
                    </li>)
            })}
        </ul>
    )
}

export default Navigation;