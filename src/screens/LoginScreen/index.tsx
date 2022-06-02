import React from 'react';
import {
  Container,
  FormBody,
  FormHeader,
  FormSubTitle,
  FormTitle,
  LoginForm,
  PaddingVertical,
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
    <Container behavior="height">
      <LoginForm>
        <FormHeader>
          <FormTitle>Faça seu login</FormTitle>
          <FormSubTitle>Por favor, informe seu E-MAIL e SENHA</FormSubTitle>
        </FormHeader>
        <FormBody>
          <AppInput label="E-MAIL" keyboardType="email-address" />
          <PaddingVertical height={14} />
          <AppInput label="SENHA" secureTextEntry />
        </FormBody>
        <PaddingVertical height={15} />
        <AppButton onPress={handleSignIn} title="Entrar" />
      </LoginForm>
    </Container>
  );
};

export default SignIn;
