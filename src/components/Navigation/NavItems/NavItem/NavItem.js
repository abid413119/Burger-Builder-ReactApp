import React from 'react';
import './NavItem.css';

const NavItem = (props) => (
    <li className="NavItem">
        <a className={props.active?"active":null} href="/">{props.children}</a>
    </li>
)
export default NavItem;