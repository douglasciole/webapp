import React from 'react'
import '../css/Login.css';
import '../css/components/Error.css';

import TextField from '../components/TextField';
import Button from '../components/Button';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import { loginAlert } from '../actions/login';
import { useSelector, useDispatch } from 'react-redux';


export default (props) => {
    const dispatch = useDispatch();
    const loginForm = useSelector(state => state.login);

    const loginAction = (server) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'email': loginForm.email, 'password': loginForm.password})
        };

        fetch(server+"/loginAdmin", requestOptions)
        .then(res => res.json())
        .then(res => {

            if (res.status == 1) {
                localStorage.setItem("userData", JSON.stringify(res));

                window.location = "/menu";
            }else {
                dispatch(loginAlert(true));
                setTimeout(() => {
                    dispatch(loginAlert(false));
                }, 3000);
            }

            // console.log(res);
            // this.setState({clientList: res});
        });

    }

    return (
        <>
            <div className="alert-message-container">
                <Alert show={loginForm.error} key='ewfwef'>
                    <div className="affitto-error-container">
                        <Container>
                            <Row className="menuRow">
                                <Col md={2} lg={2} sm={1} xs={1}></Col>
                                <Col md={8} lg={8} sm={10} xs={10}>
                                    <span>E-mail or Password is incorrect!</span>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Alert>
            </div>
            
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={6} lg={6} sm={10} xs={10}>
                    <div className="login-title">
                        Welcome to the Administrative Portal
                    </div>
                </Col>
                <Col md={4} lg={4} sm={1} xs={1}></Col>
            </Row>
            
            
            <TextField linked="EMAIL" label="E-Mail" />
            <TextField linked="PASSWORD" type="password" label="Password" />
            
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={6} lg={6} sm={10} xs={10}>
                    <div className="login-btn-container">
                        <Button onClick={() => { loginAction(props.authServer); }}>Login</Button>
                    </div>
                </Col>
                <Col md={4} lg={4} sm={1} xs={1}></Col>
            </Row>
            
            
        </>
    )
}
