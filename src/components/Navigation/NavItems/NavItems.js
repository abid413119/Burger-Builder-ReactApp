import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const naviItems = () => (
    <ul className="NavItems">
        <NavItem active>Burger Builder</NavItem>
        <NavItem>Checkout</NavItem>
    </ul>
);

export default naviItems;