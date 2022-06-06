import React from 'react';
import {Container} from './styles';
import ScreenHeader from '@components/ScreenHeader';
import {EntriesList} from '@components/EntriesList';
import {fakeEarnings} from '../../data';
import EntriesTotalHeader from '@components/EntriesTotalHeader';

export default function EarningsScreen() {
  return (
    <Container>
      <ScreenHeader
        title="Seus Ganhos"
        subtitle="Organize aqui tudo que você recebeu"
      />
      <EntriesTotalHeader total={7000} />
      <EntriesList data={fakeEarnings} />
    </Container>
  );
}
