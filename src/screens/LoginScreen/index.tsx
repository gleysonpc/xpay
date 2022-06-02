import React from 'react';
import {
  Container,
  FormBody,
  FormHeader,
  FormSubTitle,
  FormTitle,
  LoginForm,
} from './styles';

import {useAuth} from '../../contexts/auth';
import AppButton from '@components/AppButton';
import AppInput from '@components/AppInput';

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <Container>
      <LoginForm>
        <FormHeader>
          <FormTitle>Faça seu login</FormTitle>
          <FormSubTitle>Por favor, informe seu E-MAIL e SENHA</FormSubTitle>
        </FormHeader>
        <FormBody>
          <AppInput label="E-MAIL" keyboardType="email-address" />
          <AppInput label="SENHA" secureTextEntry />
        </FormBody>
        <AppButton onPress={handleSignIn} title="Entrar" />
      </LoginForm>
    </Container>
  );
};

export default SignIn;
