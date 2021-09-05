import React from 'react';
import Navigation from './navigation';
import LogButten from './logButton';

const Logo = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light px-3">
                <ul className="nav">
                    <li className="navbar-brand">
                        <h3 className="navLink align-middle" aria-current="page" to="/j">Remember Language</h3>
                    </li>
                    <Navigation></Navigation>
                </ul>
                <form className="d-flex">
                    <LogButten></LogButten>
                </form>
            </nav>
            <br />
        </React.Fragment>
    )
}

export default Logo;