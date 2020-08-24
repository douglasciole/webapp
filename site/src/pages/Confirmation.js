import React, { Component } from 'react'
import BigDisplay from '../components/BigDisplay'
import Content from '../components/Content'
import TextField from '../components/TextField'
import Button from '../components/Button'
import ConfirmationLabel from '../components/ConfirmationLabel'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useSelector } from 'react-redux';

export default (props) => {
    const signupForm = useSelector(state => state.form);
    const submitForm = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupForm)
        };

        fetch(props.server+"/register", requestOptions)
        .then(res => res.json())
        .then(res => {
            if (res.status == 1) {
                window.location = '/done';
            }else {
                alert(res.message);
            }
        });
    }

    return (
        <>
            <BigDisplay className="bg-white"
                title="Summary"
                subTitle="Please check your details below before submitting."
            />
            
            <Content className="bg-pink">
                <ConfirmationLabel onClick={props.navPage.bind(this, 1)} label="Company Details" />
                <TextField linked="Brand_Name_DBA" readOnly={true} label="Brand Name/ DBA" />
                <TextField linked="Online_Store_Website" readOnly={true} label="Online Store Website" />
                <TextField linked="Business_Owner_Email" readOnly={true} label="Business Owner Email" />
                <TextField linked="Federal_Tax_Classification" readOnly={true} label="Federal Tax Classification" />
                <TextField linked="Tax_Identification_Number" readOnly={true} label="Tax Identification Number" />
            </Content>

            <Content className="bg-green">
                <ConfirmationLabel onClick={props.navPage.bind(this, 4)} label="Company Registration Address" />
                <TextField linked="Legal_Name_Company" readOnly={true} label="Legal Name of the Company" />
                <TextField linked="Street_Number_Steet_Name" readOnly={true} label="Street Number and Steet Name" />
                <TextField linked="Company_Postal_Code" readOnly={true} label="Postal Code" />
                <TextField linked="Company_City" readOnly={true} label="City" />
                <TextField linked="Company_Country" readOnly={true} label="Country" />
                <TextField linked="Province_Incorporation" readOnly={true} label="Province of Incorporation" />
            </Content>

            <Content>
                <ConfirmationLabel onClick={props.navPage.bind(this, 5)} label="Management Information" />
                <TextField linked="First_Name" readOnly={true} label="First Name" />
                <TextField linked="Last_Name" readOnly={true} label="Last Name" />
                <TextField linked="Date_Birth" readOnly={true} label="Date of Birth" />
                <TextField linked="Residential_Address" readOnly={true} label="Residential Address" />
                <TextField linked="Manager_Postal_Code" readOnly={true} label="Postal Code" />
                <TextField linked="Manager_City" readOnly={true} label="City" />
                <TextField linked="Manager_Country" readOnly={true} label="Country" />
            </Content>


            <Content className="bg-pink">
                <ConfirmationLabel onClick={props.navPage.bind(this, 6)} label="Bank Account Information" />
                <TextField linked="Currency" readOnly={true} label="Currency" />
                <TextField linked="Bank_Country" readOnly={true} label="Country" />
                <TextField linked="Account_Holder_Name" readOnly={true} label="Account Holder’s Name" />
                <TextField linked="Routing_Number" readOnly={true} label="Routing Number" />
                <TextField linked="Account_Number" readOnly={true} label="Account Number" />

                <Row className="menuRow">
                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                    <Col className="padding-l0" md={6} lg={6} sm={10} xs={10}>
                        <Button onClick={submitForm}>Submit</Button>
                    </Col>
                    <Col md={4} lg={4} sm={1} xs={1}></Col>
                </Row>
            </Content>

        </>
    )
}