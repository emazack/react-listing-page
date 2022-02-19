import React, { useEffect, useState } from 'react';

import { CardsContainer } from "../Style/CardsContainer.style";
import { Wrapper } from "../Style/Wrapper.style";
import Card from "../Card/Card";

function ListingCards() {

    const [cards, setCards] = useState(Array);

    useEffect( () => {
        getCards();
    }, []);

    const getCards = async () => {
        const response = await fetch('https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties');
        const data = await response.json();
        setCards(data);
        console.log(data);
    }

    return(
        <Wrapper>
            <CardsContainer>
                {cards.map( card => (
                    <Card
                        key={card.id}
                        images={card.images}
                        available={card.available}
                        type={card.type}
                        title={card.title}
                        tenants={card.tenants}
                        baths={card.baths}
                        beds={card.beds}
                        description={card.description}
                        currency={card.currency}
                        price={card.price}
                    />
                ))}
            </CardsContainer>
        </Wrapper>
    );
}

export default ListingCards;