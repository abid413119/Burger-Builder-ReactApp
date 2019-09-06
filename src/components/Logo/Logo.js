import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';


const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height, background:props.background}}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}
export default Logo;