import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../logup/logup.css"
import HttpRequests from "../../HttpRequests/httpRequests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const passwordReducer = (state, action) => {
  console.log(state);
  if (action.type === "alreadyLoggetUp") {
    return { ...state, password: action.value, verifyPassword: action.value };
  }
  if (action.type === "onChange")
    return {
      ...state,
      password: action.value,
      isValid: action.value.length > 1,
      isThePasswordsMatch:
        state.verifyPassword && state.verifyPassword === action.value,
    };
  if (action.type === "onChangeVerify")
    return {
      ...state,
      verifyPassword: action.value,
      isThePasswordsMatch: state.password === action.value,
    };
  return state;
};

const Logup = () => {

  const httpRequests = useContext(HttpRequests);
  const emailInserted = useRef();
  const nameInserted = useRef();
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordState, despatchPassword] = useReducer(passwordReducer, {
    password: "",
    verifyPassword: "",
    isValid: undefined,
    isThePasswordsMatch: undefined,
  });
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandlar = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  }

  let isLoggedUp = httpRequests.alreatyLoggedup
    ? "don't have an account yet "
    : "already heve an account ";
  let isLoggedUp_link = httpRequests.alreatyLoggedup ? "log up" : "log in";




  useEffect(() => {
    if (!httpRequests.alreatyLoggedup) {
      emailInserted.current.value = "";
      despatchPassword({ type: "alreadyLoggetUp", value: "" });
    }
  }, [httpRequests.alreatyLoggedup])



  const emailIsValidHander = () => {
    const validEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    setEmailIsValid(validEmail.test(emailInserted.current.value));
  };

  const onSubmitInfo = (event) => {
    event.preventDefault();
    if (emailIsValid && passwordState.isValid) {
      if (!httpRequests.alreatyLoggedup) {
        httpRequests.logupPostMethod("/auth/logup", {
          name: nameInserted.current.value,
          email: emailInserted.current.value,
          password: passwordState.password,
        });
      } else {
        httpRequests.loginPostMethod("/auth/login", {
          email: emailInserted.current.value,
          password: passwordState.password,
        })
      }
    }
  };



  return (
    <React.Fragment>
      <Row className="justify-content-center my-2">
        <Col xs="auto" sm={8} md={6} xl={4}/*className="col-6"*/>
          <Form>
            {!httpRequests.alreatyLoggedup && (
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter full name"
                  ref={nameInserted}
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter a email"
                ref={emailInserted}
                onChange={emailIsValidHander}
              />
              <Form.Text className="text-muted">
                {emailIsValid === false && "e-mail is'nt valid"}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="enter a password"
                value={passwordState.password}
                onChange={(event) => {
                  despatchPassword({
                    type: "onChange",
                    value: event.target.value,
                  });
                }}
              />
              {passwordState.password &&
                <div className="showPassword">
                  {!showPassword && <FontAwesomeIcon icon={faEye} onClick={() => { showPasswordHandlar() }} />}
                  {showPassword && <FontAwesomeIcon icon={faEyeSlash} onClick={() => { showPasswordHandlar() }} />}
                </div>}
              <Form.Text className="text-muted">
                {passwordState.isValid === false &&
                  "more characters need to be entered"}
              </Form.Text>
            </Form.Group>

            {!httpRequests.alreatyLoggedup && (
              <Form.Group className="mb-3" controlId="verifyPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="verify the password"
                  value={passwordState.verifyPassword}
                  onChange={(event) => {
                    despatchPassword({
                      type: "onChangeVerify",
                      value: event.target.value,
                    });
                  }}
                />
                <Form.Text className="text-muted">
                  {passwordState.isThePasswordsMatch === false &&
                    "the password is'nt match"}
                </Form.Text>
              </Form.Group>
            )}
            <br />
            <Button variant="primary" type="submit" onClick={onSubmitInfo}>
              Submit
            </Button>
          </Form>
          <br />
          <div className="text-center">
            {isLoggedUp}
            <a className="rounded-pill" onClick={() => { httpRequests.alreadyLoggedUpHandler() }}> {isLoggedUp_link} </a>
            {/* <LogButten></LogButten> */}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Logup;
