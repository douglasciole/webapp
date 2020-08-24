import React from 'react'
import '../css/components/SearchTop.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default (props) => {

    return (
        <div className={"linkSection " + ((!props.color)?"green":props.color)}>
            <Container>
            <Row>
                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                    <Col md={7} lg={7} sm={8} xs={8}>
                        <span className="label">{props.title}</span>
                    </Col>
                    <Col md={2} lg={2} sm={1} xs={1}>
                        <a href={"javascript: window.location = '"+props.href+"'"}>Back</a>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                    <Col md={8} lg={8} sm={9} xs={9}>
                        <div className="underlined">
                            <input onkeyup="" type="text" /> <img src={process.env.PUBLIC_URL + '/images/lupa-'+((!props.color)?"verde":"branca")+'.png'} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
