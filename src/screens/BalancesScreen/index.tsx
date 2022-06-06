import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import BalancesList from '@components/BalancesList';
import {fakeBalances} from '../../data';

export default function BalancesScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Balanços"
        subtitle="Organize aqui seus balanços financeiros."
        footer="Histórico de balanços"
      />
      <BalancesList data={fakeBalances} />
    </Container>
  );
}
