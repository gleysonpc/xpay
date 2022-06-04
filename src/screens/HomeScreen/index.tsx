import React from 'react';
import {Container, CardsContainer} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import CardBalance from '@components/BalanceCard';
import {Image} from 'react-native';

import income from '@assets/income.png';
import outcome from '@assets/outcome.png';
import remaining from '@assets/remaining.png';

export default function HomeScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Olá, Gleyson!"
        subtitle="Confira seu balanço mensal ativo."
        footer="Março de 2022"
      />
      <CardsContainer>
        <CardBalance
          cardImage={<Image source={income} />}
          cardTitle="Entradas"
          cardSubtitle="Total de valores recebidos"
          cardPrice={7000}
          cardType="SUCCESS"
          cardSize="large"
        />
        <CardBalance
          cardImage={<Image source={outcome} />}
          cardTitle="Saídas"
          cardSubtitle="Total de valores gastos"
          cardPrice={3000}
          cardType="WARNING"
          cardSize="large"
        />
        <CardBalance
          cardImage={<Image source={remaining} />}
          cardTitle="Entradas"
          cardSubtitle="Total Restante"
          cardPrice={4000}
          cardType="INFO"
          cardSize="large"
        />
      </CardsContainer>
    </Container>
  );
}
