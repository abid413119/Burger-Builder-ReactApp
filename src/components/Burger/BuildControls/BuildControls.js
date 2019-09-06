import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

export default function BuildControls(props) {
    return (
        <div className="BuildControls">
            <p>Total Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {
                controls.map(item => (
                    <BuildControl
                        key={item.label} 
                        label={item.label} 
                        added={() => props.ingredientAdded(item.type)}
                        removed={() => props.ingredientRemoved(item.type)}
                        disabled={props.disabled[item.type]}
                        />
                ))
            }
            <button 
                className="OrderButton" 
                onClick={() => props.openModal()}
                disabled={!props.purchasable}>
                    Order Now
            </button>
        </div>
    )
}
