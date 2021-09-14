import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navigation.css";


const Navigation = () => {
    const actions = [
        {name: "notification", id: 1, lintTo: "#" },
        {name: "translate",    id: 2, lintTo: "#" },
        {name: "input word",   id: 3, lintTo: "/input" },
        {name: "repetition",   id: 4, lintTo: "#" }
    ]

    return (
        <ul className="navAside">
            {actions.map(action => {
                return (
                    <li className="navbar-brand">
                        <NavLink className={`navLink align-middle`} activeClassName="active"
                            to={action.lintTo} key={action.id}>{action.name}</NavLink>
                            {/* <a href = "/input">{action.name}</a> */}
                    </li>)
            })}
        </ul>
    )
}

export default Navigation;