import React from 'react';
import { StyledLogo } from './StyledLogo.style'

import logo from '../assets/zappyrent-logo.png'
import '../Style/global-style.css';


function Logo() {
    return(
        <StyledLogo>
            <img className='main-logo' src={logo} alt="Zappyrent logo" />
        </StyledLogo>
    );
}

export default Logo;