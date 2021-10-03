import styled from 'styled-components';

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 3em;
    padding: 0;
    margin: 2em 0 0 0;

    background-color: #b01346;
    border-radius: 10px;
    border: 0;
    color: white;
    transition: background-color 0.2s;

    :hover {
        background-color: #98103C;
    }

    :active {
        box-shadow: 2px 2px 2px gray;
    }

`;