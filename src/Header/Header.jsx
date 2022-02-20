import React from 'react';
import Logo from '../Logo/Logo';
import FiltersBar from '../FiltersBar/FiltersBar';
import { Wrapper } from "../Style/Wrapper.style";

import './Header.css';
import '../index.css';

function Header({filterType,setFilterType}) {
    return(
        <header className='header'>
            <Wrapper>
                <Logo/>
                <FiltersBar filterType={filterType} setFilterType={setFilterType}/>
            </Wrapper>
        </header>
    );
}

export default Header;