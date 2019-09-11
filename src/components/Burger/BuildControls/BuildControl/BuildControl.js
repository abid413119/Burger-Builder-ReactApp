import React from 'react';
import './BuildControl.css';
import PropTypes from 'prop-types';

export default function BuildControl(props) {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button onClick={props.removed}  className="Less" disabled={props.disabled}>Less</button>
            <button onClick={props.added} className="More">More</button> 
        </div>
    )
}

BuildControl.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    removed: PropTypes.func.isRequired,
    added: PropTypes.func.isRequired
}