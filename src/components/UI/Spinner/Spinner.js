import React from 'react';
import './Spinner.css';

export default function Spinner(props) {
    return (
        <div style={{color: props.color}} className="loader">Loading...</div>
    )
}
