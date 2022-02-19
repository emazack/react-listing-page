import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListingCards from './ListingCards/ListingCards';
import Header from './Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <ListingCards />
  </React.StrictMode>,
  document.getElementById('main-page')
);
