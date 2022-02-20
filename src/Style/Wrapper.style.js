import styled from 'styled-components';


export const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1480px) {
        max-width: 1024px;
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        max-width: 414px;
    }
`;