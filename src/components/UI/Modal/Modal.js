import React from 'react';
import './Modal.css';
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className="Modal"
            style={{

                // top: '50%',
                // left: '50%',
                // transform: props.show ? 'translate(-50%, -50%)' : 'translateY(-100vh)',
                display: props.show ? "block" : "none"
            }}
        >
            {props.children}
        </div>
    </Wrapper>
);

export default modal;