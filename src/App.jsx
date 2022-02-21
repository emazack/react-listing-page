import React, { useState } from 'react';
import ListingCards from './ListingCards/ListingCards';
import Header from './Header/Header';
import SearchResults from './SearchResults/SearchResults';

import './Style/global-style.css';

function App() {

    const [filterType, setFilterType] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);


    return(
        <div className='page-content'>
            <Header filterType={filterType} setFilterType={setFilterType}/>
            <SearchResults filteredCards={filteredCards}/>
            <ListingCards filterType={filterType} filteredCards={filteredCards} setFilteredCards={setFilteredCards} />
        </div>
    );
}

export default App;

