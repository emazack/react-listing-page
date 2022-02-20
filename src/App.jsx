import React, { useState } from 'react';
import './index.css';
import ListingCards from './ListingCards/ListingCards';
import Header from './Header/Header';

function App() {

    const[filterType, setFilterType] = useState([]);

    return(
        <div className='page-content'>
            <Header filterType={filterType} setFilterType={setFilterType}/>
            <ListingCards filterType={filterType}/>
        </div>
    );
}

export default App;

