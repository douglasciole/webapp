import React from 'react'
import '../css/components/Button.css'

import { useSelector, useDispatch } from 'react-redux';
import { errorMessageShow, errorMessageHide } from '../actions/error';

export default (props) => {
    const signupForm = useSelector(state => state.form);
    const dispatch = useDispatch();

    let inputProperties = {}

    if (props.validate) {
        inputProperties.onClick = () => {
           const res = props.validate(signupForm);
           if (res.success == true) {
                props.onClick();
           }else {
                window.scrollTo(0, 0);
                dispatch(errorMessageShow(res.message, res.page));
               setTimeout(() => {
                    dispatch(errorMessageHide(res.page));    
               }, 8000);
           }
        }
    }else {
        inputProperties.onClick = props.onClick;
    }

    return (
        <button {...inputProperties} className={"affittoButton " + props.className} >
            {props.children}
        </button>
    )
}