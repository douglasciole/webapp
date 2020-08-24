import React from 'react'
import BigDisplay from '../components/BigDisplay'
import Content from '../components/Content'
import TextField from '../components/TextField'
import Button from '../components/Button'
import Error from '../components/Error'
import SelectField from '../components/SelectField'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) => {
    
    const validation = (form) => {
        if (form.Federal_Tax_Classification != "") {
            return {success: true};
        }
        return {success: false, message: "Please select Federal Tax Classification.", page: "SECOND"};
    }


    return (
    <>
        <BigDisplay
            title="What type of business do you have?"
            subTitle="We are required to ask some specific questions based on your bsuiness type."
        />
        <Error page="secondPage" />
        <Content>
            <SelectField label="Federal Tax Classification" />

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