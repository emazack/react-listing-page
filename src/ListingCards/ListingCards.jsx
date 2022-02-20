import React, { useEffect, useState } from 'react';

import { CardsContainer } from "../Style/CardsContainer.style";
import { Wrapper } from "../Style/Wrapper.style";
import Card from "../Card/Card";

function ListingCards({filterType}) {
    
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    
    useEffect( () => {
        getCards();
    }, []);
    
    useEffect( () => {
        filterHandler();
    }, [filterType]);
    
    const getCards = async () => {
        const response = await fetch('https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties');
        const data = await response.json();
        setCards(data);
        setFilteredCards(data);
    }
    
    const filterHandler = () => {
        setFilteredCards(cards.filter(card => (filterType.indexOf(card.type) > -1) ));
    }
    
    return(
        <section className='listing-cards'>
            <Wrapper>
                <CardsContainer>
                    {filteredCards.map( card => (
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
            </section>
            );
        }
        
        export default ListingCards;