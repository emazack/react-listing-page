import React from 'react';
import { StyledCard } from "./Card.style";
import { InternalWrapper } from "./InternalWrapper.style";

import '../Style/global-style.css';

function Card({images,available,type,title,tenants,baths,beds,description,currency,price}) {
    return(
        <StyledCard>
            <div className='top-card'>
                <div className='images-container'>
                    {images.map((image, index) => (
                        <img key={index} src={image.url} alt="apartment" />
                    ))}
                </div>
                {available ? (
                    <div className='tag'>
                        Disponibile da subito
                    </div>
                ) : null}
            </div>
            <div className='main-card'>
                <InternalWrapper>
                    <div className='rental-space'>
                         {type}
                    </div>
                    <h2 className='title'>
                        {title}
                    </h2>
                    <div className='general-infos'>
                        <div className='info-box'>
                            <span className='number'>{tenants}</span>
                            <span className='label'>
                                {tenants > 1 ? "inquilini" : "inquilino"}
                            </span>
                        </div>
                        <div className='info-box'>
                            <span className='number'>{baths}</span>
                            <span className='label'>
                                {baths > 1 ? "bagni" : "bagno"}
                            </span>
                        </div>
                        <div className='info-box'>
                            <span className='number'>{beds}</span>
                            <span className='label'>
                                {beds > 1 ? "letti" : "letto"}
                            </span>
                        </div>
                    </div>
                    <div className='description'>
                        {description}
                    </div>
                </InternalWrapper>
            </div>
            <div className='bottom-card'>
                <InternalWrapper>
                    <div className='price-container'>
                        <div className='label'>
                            Canone d'affitto
                        </div>
                        <div className='rent'>
                            <span className='currency'>
                                {currency === "EUR" ? "€" : "Cristalli Chirali" }
                            </span>
                            <span className='price'>{price}</span>
                            <span className='recurrence'>/mese</span>
                        </div>
                    </div>
                </InternalWrapper>
            </div>
        </StyledCard>
    );
}

export default Card;