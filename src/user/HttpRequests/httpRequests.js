import React, { useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import axios from "axios";

import { n } from "../pages/paths"


const HttpRequests = React.createContext({
  alreatyLoggedup: true,
  alreadyLoggedUpHandler: () => { },
  isLoggedIn: false,
  logOutHander: ()=>{},
  logupPostMethod: (path, body) => { },
  loginPostMethod: (path, body) => { },
});

export const HttpRequestesComp = (props) => {
  const [alreatyLoggedup, setAlreadyLoddedUp] = useState(true);
  const [isLoggedIn, setIsloggedIn] = useState(localStorage.getItem("userData"))

  const alreadyLoggedUpHandler = () => {
    alreatyLoggedup ? setAlreadyLoddedUp(false) : setAlreadyLoddedUp(true);
  };
  const logOutHander = () =>{
    if(isLoggedIn){
      setIsloggedIn(false);
      localStorage.removeItem("userData")
      localStorage.removeItem("token")
      history.push("/")
    }
  }
  
  const history = useHistory()
  
  const origin = "http://localhost:8090";
  
  const logupPostMethod = async (path, body) => {
    console.log(path, body);
    try {
      await axios.post(`${origin}${path}`, body).then((res) => {
        setAlreadyLoddedUp(true)
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  const loginPostMethod = async (path, body) => {
    console.log(path, body);
    try {
      const userData = await axios.post(`${origin}${path}`, body)
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(userData.data));
      localStorage.setItem("token", userData.data.token);
      history.push(`/${n}`)
      setIsloggedIn(true)
      
    } catch (error) {
      console.error(error);
    }
  };
 
  
  return (
    <HttpRequests.Provider value={{
      alreatyLoggedup,
      alreadyLoggedUpHandler,
      isLoggedIn,
      logOutHander,
      logupPostMethod,
      loginPostMethod
    }}>
      {props.children}
    </HttpRequests.Provider>
  );
};

export default HttpRequests;
