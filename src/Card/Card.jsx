import React from 'react';
import { StyledCard } from "../Style/Card.style";
import { InternalWrapper } from "../Style/InternalWrapper.style";

function Card() {
    return(
        <StyledCard>
            <div className='top-card'>
                <div className='image-container'>
                    <img src="" alt="" />
                </div>
                <div className='tag'>
                    Disponibile da subito
                </div>
            </div>
            <div className='main-card'>
                <InternalWrapper>
                    <div className='rental-space'>
                        Private Room
                    </div>
                    <div className='title'>
                        Ampia singola
                    </div>
                    <div className='general-infos'>
                        <div className='info-box'>
                            <span className='number'>2</span>
                            <span className='label'>inquilini</span>
                        </div>
                        <div className='info-box'>
                            <span className='number'>2</span>
                            <span className='label'>inquilini</span>
                        </div>
                        <div className='info-box'>
                            <span className='number'>2</span>
                            <span className='label'>inquilini</span>
                        </div>
                    </div>
                    <div className='description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Iusto voluptatem sapiente quae veniam magnam aliquam facilis 
                        pariatur minus velit, cumque quisquam qui animi sed eos optio,
                        maiores dicta fugit iste.
                    </div>
                </InternalWrapper>
            </div>
            <div className='bottom-card'>
                <InternalWrapper>
                    <div className='price-container'>
                        <div className='label'>
                            Canone
                        </div>
                    </div>
                </InternalWrapper>
            </div>
        </StyledCard>
    );
}

export default Card;