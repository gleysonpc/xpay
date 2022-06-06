import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import {EntriesList} from '@components/EntriesList';
import {fakeEarnings} from '../../data';
import EntriesTotalHeader from '@components/EntriesTotalHeader';

export default function ExpensesScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Gastos"
        subtitle="Organize aqui tudo que você gastou"
      />
      <EntriesTotalHeader total={1819} />
      <EntriesList data={fakeEarnings} type="expenses" />
    </Container>
  );
}
