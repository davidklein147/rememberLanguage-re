import React, { useContext } from "react";
import Navigation from "./navigation";
import Logo from "./logo";
import { Prompt } from "react-router-dom";
import HttpRequests from "../../HttpRequests/httpRequests";

const Layout = (props)=>{
    const loggedUp =  useContext(HttpRequests)
    return(
        <React.Fragment>
            {/* <Prompt when={loggedUp.isLoggedIn} message = {"sljflk"}/> */}
            <header><Logo></Logo></header>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout;