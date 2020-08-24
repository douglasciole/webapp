import React from 'react'
import '../css/components/RoundedBox.css'
import Button from '../components/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () =>
<>
    <Row className="menuRow">
        <Col md={2} lg={2} sm={1} xs={1}></Col>
        <Col md={4} lg={4} sm={4} xs={4}>
            <div className="roundedBox">
                <div className="title">STEP 1</div>
                <div className="firstLine">Download the plugin credentials.</div>

                <div className="title">STEP 2</div>
                <div className="firstLine">Upload the plugin credentials to your e-commerce platform.</div>

                <div className="title">STEP 3</div>
                <div className="firstLine">Wait for approval from our team.</div>

                <div className="title">STEP 4</div>
                <div className="firstLine">Once approved, log into the portal through the plugin.</div>

                <div className="title">STEP 5</div>
                <div className="firstLine">Add wp-plugin checkout tag to your e-commerce platform.<br /><strong>[wp-plugin-tag]</strong></div>


            </div>
        </Col>
        <Col className="italic" md={3} lg={3} sm={1} xs={1}>
            Visible placement of Webapp checkout button is important to allow customers to quickly and easily find the button. We recommend adding the button right below your existing checkout button.
        </Col>
    </Row>

    <Row className="menuRow">
        <Col md={2} lg={2} sm={1} xs={1}></Col>
        <Col md={6} lg={6} sm={10} xs={10}>
            <div className="downloadButton">
                <a href={process.env.PUBLIC_URL + "/static/media/wp_plugin_fake.zip"}>
                    <Button>Download</Button>
                </a>
            </div>
        </Col>
        <Col md={4} lg={4} sm={1} xs={1}></Col>
    </Row>
</>