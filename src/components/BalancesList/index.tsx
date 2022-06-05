import CardBalance from '@components/BalanceCard';
import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface Balance {
  title: string;
  active: boolean;
  total: number;
}

interface BalancesListProps {
  data: Balance[];
}

const Item = ({...balance}: Balance) => (
  <CardBalance
    key={balance.title}
    cardTitle={balance.title}
    cardSubtitle="Em caixa:"
    cardPrice={balance.total}
    cardActive={balance.active}
    cardType={balance.active ? 'SUCCESS' : 'INFO'}
  />
);
const renderItem: ListRenderItem<Balance> = ({item}) => (
  <Item active={item.active} title={item.title} total={item.total} />
);

export default function BalancesList({data}: BalancesListProps) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: Balance) => item.title}
    />
  );
}
