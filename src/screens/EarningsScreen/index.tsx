import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import {fakeEarnings} from '../../data';
import {EntriesList} from '@components/EntriesList';

export default function EarningsScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Ganhos"
        subtitle="Organize aqui tudo que você recebeu"
      />
      <EntriesList data={fakeEarnings} />
    </Container>
  );
}
