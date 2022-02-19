import React from 'react';
import Logo from '../Logo/Logo';
import FiltersBar from '../FiltersBar/FiltersBar';
import { Wrapper } from "../Style/Wrapper.style";

import './Header.css';
import '../index.css';

function Header() {
    return(
        <Wrapper>
            <Logo/>
            <FiltersBar/>
        </Wrapper>
    );
}

export default Header;