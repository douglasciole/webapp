import React from 'react'
import '../css/components/BigDisplay.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) =>
    <div className={'bigDisplay ' + ((props.className == null)?"bg-green":props.className)}>
        <Container>
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={8} lg={8} sm={10} xs={10}>
                    <span className='bigDisplayTitle'>{props.title}</span>
                </Col>
                <Col md={2} lg={2} sm={1} xs={1}></Col>
            </Row>
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={8} lg={8} sm={10} xs={10}>
                    <span className='bigDisplayText' dangerouslySetInnerHTML={{__html: props.subTitle}}></span>
                </Col>
                <Col md={2} lg={2} sm={1} xs={1}></Col>
            </Row>
        </Container>
    </div>
