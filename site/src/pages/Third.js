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
        if (form.Tax_Identification_Number != "") {
            return {success: true};
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "THIRD"};
    }

    return (
    <>
        <BigDisplay
            title="Can you please enter your business number?"
            subTitle="We need your company business number to verify your <br />business details."
        />
        <Error page="thirdPage" />
        <Content>
            <TextField maxLength={20} linked="Tax_Identification_Number" label="Business Number" />

            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col className="padding-l0" md={6} lg={6} sm={10} xs={10}>
                    <Button className="white" onClick={props.btnPrev}>Back</Button>
                    <Button validate={validation} onClick={props.btnNext}>Next</Button>
                </Col>
                <Col md={4} lg={4} sm={1} xs={1}></Col>
            </Row>
      </Content>
    </>)
}