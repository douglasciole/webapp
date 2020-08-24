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
        if (form.Currency != "" && form.Bank_Country != "" && form.Account_Holder_Name && 
            form.Routing_Number && form.Account_Number) {
            return {success: true};
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "SIXTH"};
    }

    return (
    <>
        <BigDisplay
            title="What are your bank account details?"
            subTitle="We require these details to transfer the payments from your sales. The default bank acount must be with a bank in the country in which your company is registered. You also must have a bank account for each of the currencies you plan to accept. "
        />
        <Error page="sixthPage" />
        <Content>
            <TextField maxLength={45} linked="Currency" label="Currency" />
            <TextField maxLength={45} linked="Bank_Country" label="Country" />
            <TextField maxLength={45} linked="Account_Holder_Name" label="Account Holder’s Name" />
            <TextField maxLength={5} linked="Routing_Number" label="Transit Number" />
            <TextField maxLength={45} linked="Account_Number" label="Account Number" />

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