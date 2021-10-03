import styled from 'styled-components';

export const MainLogoContainer = styled.div`
    display: flex;
    place-content: center;

    width: calc(100% - 2em);
    padding: 1em;
    margin: 3em 0 3em 0;

    background-color: #12767c;
    border-radius: 15px;
`;

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2em;
    height: fit-content;
    max-width: 400px;
    margin: 1em 0 1em 0;

    border-radius: 12px;
    background-image: linear-gradient(0deg,rgba(49,208,199,1.00) 0%,rgba(150,213,232,1.00) 100%);

    form {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
    }

    > img{
        width: 2em;
        margin: 2em auto 2em auto;
    }

    a {
        color: #b01346;
        font-weight: bold;
    }
`;