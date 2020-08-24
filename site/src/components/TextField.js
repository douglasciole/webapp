import React from 'react'
import '../css/components/TextField.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useSelector, useDispatch } from 'react-redux';
import { update_form_field } from '../actions/signup';

export default (props) => {
    const signupForm = useSelector(state => state.form);
    const dispatch = useDispatch();

    const dateMask = (obj) => {
        var v = obj.value;
        if (v.match(/^\d{2}$/) !== null) {
            obj.value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            obj.value = v + '/';
        }
    }

    let inputProperties = {}

    if (props.linked) {
        inputProperties.value = signupForm[props.linked];
        inputProperties.onChange = (event) => {dispatch(update_form_field(props.linked, event.target.value))};
    }

    if (props.type == "date") {
        inputProperties.placeholder="dd/mm/yyyy";
        inputProperties.onKeyUp=(event) => {dateMask(event.target)};
    }

    return (
    <Row className="menuRow">
        <Col md={2} lg={2} sm={1} xs={1}></Col>
        <Col className="padding-l3" md={6} lg={6} sm={10} xs={10}>
            <label className="textDIsplay">
                {props.label}
                <input {...inputProperties} type={(props.type == "password")?"password":"input"} maxLength={props.maxLength} readOnly={props.readOnly}/>
            </label>
        </Col>
        <Col md={4} lg={4} sm={1} xs={1}></Col>
    </Row>
    );
}