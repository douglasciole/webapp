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
        if (form.Brand_Name_DBA != "" && form.Online_Store_Website != "" && form.Business_Owner_Email) {
            return {success: true};
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "FIRST"};
    }

    return (
    <>
        <BigDisplay
            title="Next, tell us more about your store?"
            subTitle="We will use the details provided as your primary contact information and to verify your store."
        />
        <Error page="firstPage" />
        <Content>
            <TextField maxLength={45} linked="Brand_Name_DBA" label="Brand Name/ DBA" />
            <TextField maxLength={95} linked="Online_Store_Website" label="Online Store Website" />
            <TextField maxLength={45} linked="Business_Owner_Email" label="Business Owner Email" />

            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col className="padding-l0" md={6} lg={6} sm={10} xs={10}>
                    <Button className="white" onClick={props.btnPrev}>Back</Button>
                    <Button validate={validation} onClick={props.btnNext}>Next</Button>
                </Col>
                <Col md={4} lg={4} sm={1} xs={1}></Col>
            </Row>
      </Content>
    </>
    );
}