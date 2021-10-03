import React from 'react';
import GlobalContainer from '../../components/GlobalContainer';
import PageRoot from '../../components/PageRoot';
import { SpamContainer } from './style';

const SignInSuccess = () => {
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