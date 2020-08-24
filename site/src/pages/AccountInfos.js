import React from 'react'
import BigDisplay from '../components/BigDisplay'
import Content from '../components/Content'
import TextField from '../components/TextField'
import Button from '../components/Button'
import Error from '../components/Error'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) => {
    const validation = (form) => {
        if (form.Login_Email != "" && form.Login_Password != "" && form.Login_Password_Re) {
            if (form.Login_Password == form.Login_Password_Re) {
                return {success: true};
            }else {
                return {success: false, message: "Password and Re-enter Password have to be equal.", page: "ACCOUNT"};
            }
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "ACCOUNT"};
    }

    return (
    <>
        <BigDisplay
            title="For starters, let's create login credentials for the Merchant Portal."
            subTitle=""
        />
        <Error page="accountPage" />
        <Content>
            <TextField linked="Login_Email" label="Email" />
            <TextField type="password" linked="Login_Password" label="Password" />
            <TextField type="password" linked="Login_Password_Re" label="Re-enter password" />

            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col className="padding-l0" md={6} lg={6} sm={10} xs={10}>
                    <Button validate={validation} onClick={props.btnNext}>Next</Button>
                </Col>
                <Col md={4} lg={4} sm={1} xs={1}></Col>
            </Row>
      </Content>
    </>
    );
}