import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';

import Logup from "./user/components/logup/logup";
// import Navigation from "./user/components/layout/navigation";
import { HttpRequestesComp } from "./user/HttpRequests/httpRequests"
import Layout from "./user/components/layout/layout";
import InputNewWord from "./user/components/inputWords/inputWord";
import LogRouter from "./user/pages/logRouter";

function App() {
  return (
    <HttpRequestesComp>
      <Layout>
        <Container>
          <Switch>
            <Route path="/" exact >
              <Redirect to="/login"></Redirect>
            </Route>
            <Route path="/login">
              <Logup></Logup>
            </Route>
            <Route path="/n" >
              {/* <LogRouter></LogRouter> */}
              {/* <InputNewWord></InputNewWord> */}
            </Route>
            <Route path="/input" >
              <InputNewWord></InputNewWord>
            </Route>
          </Switch>
        </Container>
      </Layout>
    </HttpRequestesComp>
  );
}

export default App;
