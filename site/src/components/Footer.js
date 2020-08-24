import React from 'react'
import '../css/components/Footer.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () =>
    <footer className='footerStyle'>
        <Container>
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={10} lg={10} sm={10} xs={10}>
                    Copyright ⓒ 2020-2035 School Presentation. Headquarters: Vancouver, Britsh Columbia. All rights reserved. Busness number: xxxxxxxxxxxxxxx
                </Col>
            </Row>
        </Container>
    </footer>
