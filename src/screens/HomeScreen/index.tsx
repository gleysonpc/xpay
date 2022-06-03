import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';

export default function HomeScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Olá, Gleyson!"
        subtitle="Confira seu balanço mensal ativo."
      />
    </Container>
  );
}
