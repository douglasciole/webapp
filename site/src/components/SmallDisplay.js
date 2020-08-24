import React from 'react'
import '../css/components/SmallDisplay.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) =>
    <div className={'smallDisplay ' + ((props.className == null)?"bg-green":props.className)}>
        <Container>
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={8} lg={8} sm={10} xs={10}>
                    <span className='smallDisplayText'>{props.text}</span>
                </Col>
                <Col md={2} lg={2} sm={1} xs={1}></Col>
            </Row>
        </Container>
    </div>
