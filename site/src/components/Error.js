import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useSelector } from 'react-redux';

import '../css/components/Error.css';

export default (props) => {
    const errorInfo = useSelector(state => state.error);
    
    return (
        <div className={"affitto-error-container " + ((errorInfo[props.page + "_show"] == true)?"":"hide")}>
            <Container>
            <Row className="menuRow">
                <Col md={2} lg={2} sm={1} xs={1}></Col>
                <Col md={8} lg={8} sm={10} xs={10}>
                    <span>{errorInfo[props.page + "_title"]}</span>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
