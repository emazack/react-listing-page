import React from 'react';
import Logo from '../Logo/Logo';
import FiltersBar from '../FiltersBar/FiltersBar';
import { Wrapper } from "../Style/Wrapper.style";
import { StyledHeader } from "./StyledHeader.style";

import '../Style/global-style.css';

function Header({filterType,setFilterType}) {
    return(
        <StyledHeader>
            <Wrapper>
                <Logo/>
                <FiltersBar filterType={filterType} setFilterType={setFilterType}/>
            </Wrapper>
        </StyledHeader>
    );
}

export default Header;