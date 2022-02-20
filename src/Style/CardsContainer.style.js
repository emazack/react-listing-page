import styled from 'styled-components';


export const CardsContainer = styled.div`
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin: 15px 0px;

    @media (max-width: 1480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;