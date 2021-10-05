import React from 'react';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import GlobalContainer from '../../components/GlobalContainer';
import PageRoot from '../../components/PageRoot';
import { AuthContext } from '../../context/AuthContext';
import localStorageService from '../../services/localStorageService';
import { SpamContainer } from './style';

const SignInSuccess = () => {
    const { token } = useContext(AuthContext);

    if (token === '') { return <Redirect to='/' /> }
    else if (token !== localStorageService.get('lsToken')) { return <Redirect to='/' />; }
    return (
        <PageRoot>
            <GlobalContainer>
                <SpamContainer>
                    <h1>Success SignIn</h1>
                </SpamContainer>
            </GlobalContainer>
        </PageRoot>
    );
}

export default SignInSuccess;