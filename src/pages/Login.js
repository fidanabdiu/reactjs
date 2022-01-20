import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ERROR, LOGGED_IN, USERNAME_CHANGED, PASSWORD_CHANGED } from "../redux/Store";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Login() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const loginHandler = function () {
        if (user.username.trim().length === 0) {
            dispatch({ type: ERROR, payload: "USERNAME IS REQUIRED." });
            return;
        }
        if (user.password.trim().length === 0) {
            dispatch({ type: ERROR, payload: "PASSWORD IS REQUIRED." });
            return;
        }
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAchUdIo0WO3Ufo7HAswZ8Z-MKEf6DYpzg", {
            method: "POST",
            body: JSON.stringify({ email: user.username, password: user.password, returnSecureToken: true }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then(function (data) {
                    dispatch({ type: LOGGED_IN, payload: { username: user.username, password: user.password } });
                });
            }
            else if (response.status === 400) {
                dispatch({ type: ERROR, payload: "INVALID CREDENTIALS." });
            }
            else {
                dispatch({ type: ERROR, payload: "ERROR WHILE COMMUNICATING WITH THE API." });
            }
        });
    };
    const usernameChangedHandler = function (event) {
        dispatch({ type: USERNAME_CHANGED, payload: event.target.value });
    };
    const passwordChangedHandler = function (event) {
        dispatch({ type: PASSWORD_CHANGED, payload: event.target.value });
    };
    return (
        <div>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Card style={{ margin: "10px" }}>
                        <Card.Header>LOGIN</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="ENTER USERNAME" value={user.username} onChange={usernameChangedHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="ENTER PASSWORD" value={user.password} onChange={passwordChangedHandler} />
                                </Form.Group>
                                <Button variant="light" type="button" onClick={loginHandler}>LOGIN</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </div>
    );
};