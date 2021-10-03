import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    
    width: 95%;
    height: 3em;
    margin: .5em 0 .5em 0;

    background-color: #0f6267;
    border-radius: 10px;
    color: white;
    opacity: .8;

    label {
        margin-left: 1em;
    }
    
    input {
        flex: 1;

        height: 1em;
        padding-left: 1em;

        background-color: transparent;
        color: white;
        outline: none;
        border: 0;

        ::placeholder {
            color: #ababab;
        }
    }
`;
