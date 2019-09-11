// import React from 'react';
import './Modal.css';
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../Backdrop/Backdrop';

// const modal = (props) => (
//     <Wrapper>
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//         <div
//             className="Modal"
//             style={{
//                 display: props.show ? "block" : "none"
//             }}
//         >
//             {props.children}
//         </div>
//     </Wrapper>
// );

// export default modal;

import React, { Component } from 'react'

export default class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.show !== nextProps.show || this.props.children !== nextProps.children
    }

    render() {
        return (
            <Wrapper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        display: this.props.show ? "block" : "none"
                    }}
                >
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}
