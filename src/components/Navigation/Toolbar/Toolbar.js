import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo />
            <DrawerToggle showSideDrawer={props.showSideDrawer} />
            <nav className="desktopOnly">
                <NavItems />
            </nav>
        </header>
    )
}
export default toolbar;