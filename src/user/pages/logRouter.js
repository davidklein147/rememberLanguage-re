import React from "react";
import { Switch, Route, Redirect , useRouteMatch } from "react-router-dom";
import InputNewWord from "./inputNewWord";
const LogRouter = ()=>{
    const match = useRouteMatch()
    
    return(
        <React.Fragment>
            <h1>hello</h1>
            <Route path ={`${match.path}`} exact>
                <Redirect to={`${match.path}/input`}/> 
            </Route> 
            <Route path = {`${match.path}/input`}>
                <InputNewWord></InputNewWord>
            </Route>
        </React.Fragment>
    )
}
export default LogRouter;