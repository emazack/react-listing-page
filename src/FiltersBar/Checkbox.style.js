import styled from 'styled-components';


export const Checkbox = styled.label`

display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;

    .label{
        width: max-content;
    }

    & #availability{
        order: 2;
        margin-right: unset;
        margin-left: 10px;

    }

    & input[type="checkbox"]{
        height: 20px;
        width: 20px;
        margin-right: 10px;
        cursor: pointer;
    }

`;