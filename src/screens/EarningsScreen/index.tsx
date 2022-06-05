import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import BalancesList from '@components/BalancesList';

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

export default function EarningsScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Ganhos"
        subtitle="Organize aqui tudo que você recebeu"
        footer="Total"
      />
      <BalancesList data={fakeBalances} />
    </Container>
  );
}
