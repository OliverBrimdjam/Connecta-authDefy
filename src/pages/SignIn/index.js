import React, { useContext } from 'react';
import { FormContainer, MainLogoContainer, SignInRoot } from './styles';
import { Form } from '@unform/web';

import InputBlock from '../../components/InputBlock';
import Button from '../../components/Button';

import AuthContext from '../../context/AuthContext';
import MainLogo from '../../assets/Logo-4.png';
import SecondaryLogo from '../../assets/logo-connecta-vermelha.png';
import PageRoot from '../../components/PageRoot';
import GlobalContainer from '../../components/GlobalContainer';

const SignIn = () => {
    const auth = useContext(AuthContext);
    console.log(auth);

    return (
        <PageRoot>
            <GlobalContainer>
                <FormContainer>
                    <MainLogoContainer>
                        <img src={MainLogo} alt="Logo Principal" />
                    </MainLogoContainer>

                    <Form>
                        <InputBlock type="email" name="EMAIL:" placeholder="digite seu email" />
                        <InputBlock type="password" name="SENHA:" placeholder="digite sua senha" />

                        <Button>ENTRA</Button>
                    </Form>

                    <img src={SecondaryLogo} alt="Logo Secundária" />
                    <p>Esqueceu a sua senha, <a href="">Clique Aqui</a>.</p>
                </FormContainer>
            </GlobalContainer>
        </PageRoot>
    );
}

export default SignIn;