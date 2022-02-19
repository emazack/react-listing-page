import React from 'react';
import './Logo.css';
import logo from '../zappyrent-logo.png'

function Logo() {
    return(
        <img className='logo-header' src={logo} alt="Zappyrent logo" />
    );
}

export default Logo;