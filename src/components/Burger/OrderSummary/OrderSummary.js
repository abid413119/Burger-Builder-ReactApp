import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import Button from '../../UI/Buttons/Buttons';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    })
    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: ${props.totalPrice}</strong></p>
            <Button clicked={props.purchaseCancelHandle} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinueHandle} btnType="Success">Continue</Button>
        </Wrapper>
    )
}
export default orderSummary;

// import React, { Component } from 'react'

// export default class OrderSummary extends Component {
//     render() {
//         const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
//             return (
//                 <li key={igKey}>
//                     <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
//                 </li>
//             )
//         })
//         return (
//             <Wrapper>
//                 <h3>Your Order</h3>
//                 <p>A delicious burger with following ingredients:</p>
//                 <ul>{ingredientSummary}</ul>
//                 <p><strong>Total Price: ${this.props.totalPrice}</strong></p>
//                 <Button clicked={this.props.purchaseCancelHandle} btnType="Danger">Cancel</Button>
//                 <Button clicked={this.props.purchaseContinueHandle} btnType="Success">Continue</Button>
//             </Wrapper>
//         )
//     }
// }
