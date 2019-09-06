import React from 'react';
import './Buttons.css';

const Classes = {
    Success: 'Success',
    Danger: 'Danger'
}

const button = (props) =>( 
    <button
        onClick={props.clicked}
        className={['Button', Classes[props.btnType]].join(" ")}
    >
        {props.children}
    </button>
)
export default button;