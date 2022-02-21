import React, { useEffect, useState } from 'react';
import { CardsContainer } from "./CardsContainer.style";
import { Wrapper } from "../Style/Wrapper.style";
import Card from "../Card/Card";

import '../Style/global-style.css';

function ListingCards({filterType,filteredCards,setFilteredCards}) {
    
    const [cards, setCards] = useState([]);
    
    useEffect( () => {
        getCards();
    }, []);
    
    useEffect( () => {
        filterHandler();
    }, [filterType]);
    
    async function getCards() {
        const response = await fetch('https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties');
        const data = await response.json();
        setCards(await data);
        setFilteredCards(await data);
    }
    
    function filterHandler() {
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