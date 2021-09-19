import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from 'react-router-dom';

import Logup from "./user/components/logup/logup";
import { HttpRequestesComp } from "./user/HttpRequests/httpRequests"
import Layout from "./user/components/layout/layout";
import LogRouter from "./user/pages/logRouter";
import { n } from "./user/pages/paths"

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
            <Route path={`/${n}`} >
              <LogRouter></LogRouter>
            </Route>
          </Switch>
        </Container>
      </Layout>
    </HttpRequestesComp>
  );
}

export default App;
