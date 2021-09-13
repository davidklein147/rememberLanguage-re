import React, { useContext } from 'react';
import Navigation from './navigation';
import LogButten from './logButton';
import "./logo.css"
import HttpRequests from '../../HttpRequests/httpRequests';

const Logo = () => {
    const loggedUp = useContext(HttpRequests)
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light px-3">
                <ul className="nav">
                    <li className="navbar-brand">
                        <h3 className="navLink align-middle" aria-current="page" to="/j">Remember Language</h3>
                    </li>
                </ul>
                <form className="d-flex ">
                    <LogButten></LogButten>
                </form>
            </nav>
            {loggedUp.isLoggedIn &&
                <aside className="aside">
                    <Navigation className="flex-column"></Navigation>
                </aside>
            }
            <br />
        </React.Fragment>
    )
}

export default Logo;