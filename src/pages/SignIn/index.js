import React, { useCallback, useContext, useEffect } from 'react';
import { FormContainer, MainLogoContainer, SignInRoot } from './styles';
import { Form } from '@unform/web';

import InputBlock from '../../components/InputBlock';
import Button from '../../components/Button';

import { AuthContext } from '../../context/AuthContext';
import MainLogo from '../../assets/Logo-4.png';
import SecondaryLogo from '../../assets/logo-connecta-vermelha.png';
import PageRoot from '../../components/PageRoot';
import GlobalContainer from '../../components/GlobalContainer';
import * as Yup from 'yup';
import apiAbstraction from '../../services/apiAbstraction';

const SignIn = () => {
    const { signIn } = useContext(AuthContext);

    //starting backend values into localStorage;
    useEffect(() => {
        apiAbstraction.lsStartConfig();
    }, []);


    const handleSubmit = useCallback(async (data) => {
        console.log(data);
        try {
            const validationConfig = Yup.object().shape({
                email: Yup.string().required('E-mail é campo obrigatório.').email('Digite e-mail válido.'),
                password: Yup.string().required('Senha é campo obrigatório.'),
            });

            await validationConfig.validate(data, {
                abortEarly: false,
            });

            signIn({
                email: data.email,
                password: data.password,
            });
            apiAbstraction.lsGet();
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }, [signIn]);

    return (
        <PageRoot>
            <GlobalContainer>
                <FormContainer>
                    <MainLogoContainer>
                        <img src={MainLogo} alt="Logo Principal" />
                    </MainLogoContainer>

                    <Form onSubmit={handleSubmit}>
                        <InputBlock type="email" name="email" labelContent="EMAIL:" placeholder="digite seu email" />
                        <InputBlock type="password" name="password" labelContent="SENHA:" placeholder="digite sua senha" />

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