import React from 'react';
import './DrawerToggle.css';


export default function DrawerToggle(props) {
    return (
        <div className="mobileOnly DrawerToggle" onClick={props.showSideDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
