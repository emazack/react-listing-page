import React from 'react';
import './Logo.css';
import logo from '../zappyrent-logo.png'

function Logo() {
    return(
        <div className='logo-container'>
            <img className='main-logo' src={logo} alt="Zappyrent logo" />
        </div>
    );
}

export default Logo;