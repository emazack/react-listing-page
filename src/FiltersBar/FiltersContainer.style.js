import styled from 'styled-components';


export const FiltersContainer = styled.div`
    display: flex;
    padding: 0px 20px;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;    
        padding: 0;
    }


    & .select {
        border: 1px solid #C8C8C8;
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 15px;
        border-radius: 30px;
        cursor: pointer;

        .arrow{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & .dropdown.visible {
        display: grid;
        border: 1px solid #C8C8C8;
        width: 190px;
        row-gap: 15px;
        padding: 10px;
        border-radius: 10px;
        position: absolute;
        top: 50px;
        left: 0;
        background-color: #FFFFFF;
        z-index: 2;
    }

    & .dropdown.hidden{
        display: none;
    }
`;