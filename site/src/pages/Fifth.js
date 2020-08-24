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
    Date.prototype.isValid = function () {
        // An invalid date object returns NaN for getTime() and NaN is the only
        // object not strictly equal to itself.
        return this.getTime() === this.getTime();
    };  

    const validation = (form) => {
        if (form.First_Name != "" && form.Last_Name != "" && form.Date_Birth &&
            form.Residential_Address != "" && form.Manager_Postal_Code != "" && form.Manager_City && 
            form.Manager_Country != "") {

            const formDate = form.Date_Birth.split("/");

            if (formDate.length > 2) {
                let dateObj = new Date(formDate[2]+"/"+formDate[1]+"/"+formDate[0]);
                if (dateObj.isValid()) {
                    return {success: true};
                }
            }

            return {success: false, message: "Sorry. Please enter a valid date 'dd/mm/yyyy'.", page: "FIFTH"};
        }
        return {success: false, message: "Sorry. Please enter all fields before proceeding.", page: "FIFTH"};

        
    }

    return (
    <>
        <BigDisplay
            title="Who mananges your company?"
            subTitle="Please provide the details below either on the individual that is the majority owner of the company or a high-level management official whose main responsibility is the effective operation of the company."
        />
        <Error page="fifthPage" />
        <Content>
            <TextField maxLength={20} linked="First_Name" label="First Name" />
            <TextField maxLength={20} linked="Last_Name" label="Last Name" />
            <TextField maxLength={10} type="date" linked="Date_Birth" label="Date of Birth" />
            <TextField maxLength={130} linked="Residential_Address" label="Residential Address" />
            <TextField maxLength={8} linked="Manager_Postal_Code" label="Postal Code" />
            <TextField maxLength={45} linked="Manager_City" label="City" />
            <TextField maxLength={45} linked="Manager_Country" label="Country" />

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