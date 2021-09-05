import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import HttpRequests from "../../HttpRequests/httpRequests"

const LogButten = () => {
    const history = useHistory()
    const loggedUp = useContext(HttpRequests)
    const isLoggedIn_linkHandler = () => {
        if (loggedUp.isLoggedIn) {
            return "log out"
        }
        if (loggedUp.alreatyLoggedup) {
            return "log up"
        }
        return "log in";
    }
    const logHandler = () => {
        if(loggedUp.isLoggedIn){
            loggedUp.logOutHander()
            
        } else{
            loggedUp.alreadyLoggedUpHandler();
        }
        setIsloggedIn_link(isLoggedIn_linkHandler())
      
    }
    const [lsLoggedIn_link, setIsloggedIn_link] = useState(isLoggedIn_linkHandler())
    useEffect(()=>{
        setIsloggedIn_link(isLoggedIn_linkHandler())
    }, [loggedUp.alreatyLoggedup, loggedUp.isLoggedIn])


    return (
        <React.Fragment>
            <a className=" px-3 border border-primary border-2 rounded-pill" onClick={() => { logHandler() }}>
                {lsLoggedIn_link}
            </a>
        </React.Fragment>
    )
}
export default LogButten;