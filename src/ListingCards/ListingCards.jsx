import React from 'react';

import { CardsContainer } from "../Style/CardsContainer.style";
import { Wrapper } from "../Style/Wrapper.style";
import Card from "../Card/Card";

function ListingCards() {
    return(
        <Wrapper>
            <CardsContainer>
                <Card/>
            </CardsContainer>
        </Wrapper>
    );
}

export default ListingCards;