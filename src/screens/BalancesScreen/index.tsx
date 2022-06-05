import React from 'react';
import {Container, CardsContainer} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import CardBalance from '@components/BalanceCard';
import {ScrollView} from 'react-native';

const fakeBalances = [
  {title: 'Março de 2022', active: true, total: 7000},
  {title: 'Fevereiro de 2022', active: false, total: 5000},
  {title: 'Janeiro de 2022', active: false, total: 7000},
  {title: 'Dezembro de 2021', active: false, total: 8000},
  {title: 'Novembro de 2021', active: false, total: 9000},
  {title: 'Outubro de 2021', active: false, total: 10000},
  {title: 'Setembro de 2021', active: false, total: 3000},
  {title: 'Agosto de 2021', active: false, total: 2000},
];

export default function BalancesScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Balanços"
        subtitle="Organize aqui seus balanços financeiros."
        footer="Histórico de balanços"
      />
      <CardsContainer>
        <ScrollView>
          {fakeBalances.map(balance => (
            <CardBalance
              key={balance.title}
              cardTitle={balance.title}
              cardSubtitle="Em caixa:"
              cardPrice={balance.total}
              cardActive={balance.active}
              cardType={balance.active ? 'SUCCESS' : 'INFO'}
            />
          ))}
        </ScrollView>
      </CardsContainer>
    </Container>
  );
}