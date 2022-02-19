import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import '../index.css';

function Header() {
    return(
        <div className='logo-container'>
            <Logo/>
        </div>
    );
}

export default Header;