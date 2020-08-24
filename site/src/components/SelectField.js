import React from 'react'
import '../css/components/SelectField.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useSelector, useDispatch } from 'react-redux';
import { update_form_field } from '../actions/signup';

export default (props) => {
    const signupForm = useSelector(state => state.form);
    const dispatch = useDispatch();

    return (
    <Row className="menuRow">
        <Col md={2} lg={2} sm={1} xs={1}></Col>
        <Col className="padding-l3" md={6} lg={6} sm={10} xs={10}>
            <label className="textDIsplay">
                {props.label}
                <select value={signupForm.Federal_Tax_Classification} onChange={(event) => { dispatch(update_form_field("Federal_Tax_Classification", event.target.value)) }}>
                    <option value="">SELECT ONE</option>
                    <option value="Sole Proprietorships">Sole Proprietorships</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Corporations">Corporations</option>
                    <option value="S Corporations">S Corporations</option>
                    <option value="Limited Liability Company (LLC)">Limited Liability Company (LLC)</option>
                </select>
            </label>
        </Col>
        <Col md={4} lg={4} sm={1} xs={1}></Col>
    </Row>
    );
}