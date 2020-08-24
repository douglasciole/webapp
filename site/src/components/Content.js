import React from 'react'
import '../css/components/Content.css'

export default (props) =>
    <div className={"contentDisplay " + props.className} >
        {props.children}
    </div>
