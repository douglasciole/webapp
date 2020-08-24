import React from 'react'
import '../css/components/ConfirmationLabel.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) =>
    <Row className="menuRow">
        <Col className="confirmationLabel no-padding editButton d-block d-md-none" md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2, show: false }} sm={{ span: 8, offset: 1 }} xs={{ span: 8, offset: 1 }}>
            <a onClick={props.onClick} className="editButton" href="javascript: void();">Edit</a>
        </Col>
        <Col className="padding-l0" md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 1 }} xs={{ span: 8, offset: 1 }}>
            <div className="padding-l3 confirmationLabel">
                {props.label}
                <a onClick={props.onClick} className="editButton d-none d-md-block" href="javascript: void();">Edit</a>
            </div>
        </Col>
    </Row>