import React, { useEffect, useState } from 'react';
import { StyledSearchResults } from "./StyledSearchResults.style";
import { Wrapper } from "../Style/Wrapper.style";

import '../Style/global-style.css';


function SearchResults({filteredCards}) {

    const [numberOfResults, setNumberOfResults] = useState(0);

    useEffect( () => {
        getNumber(filteredCards);
    }, [filteredCards]);

    function getNumber(resultsList) {
        setNumberOfResults(resultsList.length);
    }

    return(
            <StyledSearchResults>
                <Wrapper>
                    <div className='text'>
                        {numberOfResults} {numberOfResults === 1 ? "alloggio trovato" : "alloggi trovati"}
                    </div>
                </Wrapper>
            </StyledSearchResults>
            );
        }
        
export default SearchResults;