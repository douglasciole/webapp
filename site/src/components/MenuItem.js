import React from 'react'
import '../css/components/MenuItem.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) => {

    return (
        <div className={"linkSection " + ((props.color == "")?"green":props.color)}>
            <Container>
                <Row>
                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                    <Col md={8} lg={8} sm={9} xs={9}>
                        <span className="label">{props.title}</span>
                    </Col>
                    <Col md={2} lg={2} sm={1} xs={1}>
                        <a href={"javascript: window.location = '"+props.href+"'"}>View</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
