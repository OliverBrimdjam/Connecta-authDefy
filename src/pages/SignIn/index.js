import React, { useContext } from 'react';
import { FormContainer, GlobalContainer, MainLogoContainer, SignInRoot } from './styles';

import InputBlock from '../../components/InputBlock';
import Button from '../../components/Button';

import AuthContext from '../../context/AuthContext';
import MainLogo from '../../assets/Logo-4.png';
import SecondaryLogo from '../../assets/logo-connecta-vermelha.png';



const SignIn = () => {

    const auth = useContext(AuthContext);
    console.log(auth);

    return (
        <SignInRoot>
            <GlobalContainer>
                <FormContainer>
                    <MainLogoContainer>
                        <img src={MainLogo} alt="Logo Principal" />
                    </MainLogoContainer>

                    <form>
                        <InputBlock type="email" name="EMAIL:" placeholder="digite seu email" />
                        <InputBlock type="password" name="SENHA:" placeholder="digite sua senha" />

                        <Button>ENTRA</Button>
                    </form>

                    <img src={SecondaryLogo} alt="Logo Secundária" />
                    <p>Esqueceu a sua senha, <a href="">Clique Aqui</a>.</p>
                </FormContainer>
            </GlobalContainer>
        </SignInRoot>
    );
}

export default SignIn;