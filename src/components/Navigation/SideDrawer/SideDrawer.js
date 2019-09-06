import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import './SideDrawer.css';
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%" background="none"/>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Wrapper>
    )
}
export default sideDrawer;