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
        if (form.Legal_Name_Company != "" && form.Street_Number_Steet_Name != "" && form.Company_Postal_Code && 
            form.Company_City != "" && form.Company_Country != "" && form.Province_Incorporation) {
            return {success: true};
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "FOURTH"};
    }

    return (
    <>
        <BigDisplay
            title="What is your registered business address?"
        />
        <Error page="fourthPage" />
        <Content>
            <TextField maxLength={45} linked="Legal_Name_Company" label="Registered Company Name" />
            <TextField maxLength={95} linked="Street_Number_Steet_Name" label="Street Number and Steet Name" />
            <TextField maxLength={8} linked="Company_Postal_Code" label="Postal Code" />
            <TextField maxLength={45} linked="Company_City" label="City" />
            <TextField maxLength={45} linked="Company_Country" label="Country" />
            <TextField maxLength={45} linked="Province_Incorporation" label="Province of Incorporation" />

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