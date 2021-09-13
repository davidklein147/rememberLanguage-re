import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import InputNewWord from "../components/inputWords/inputWord";
const LogRouter = ()=>{
    return(
        <React.Fragment>
            <h1>hello</h1>
            <Route path ="/n" exact>
                <Redirect to="/n/input"/> 
            </Route> 
            <Route path = "/n/input">
                <InputNewWord></InputNewWord>
                <h3>have a good day</h3>
            </Route>
        </React.Fragment>
    )
}
export default LogRouter;