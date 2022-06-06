import React from 'react';
import {
  TotalEntriesContainer,
  TotalEntriesText,
  TotalEntriesValue,
} from './styles';

interface EntriesTotalHeaderProps {
  total: number;
}

export default function EntriesTotalHeader({total}: EntriesTotalHeaderProps) {
  return (
    <TotalEntriesContainer>
      <TotalEntriesText>Total</TotalEntriesText>
      <TotalEntriesValue>{total}</TotalEntriesValue>
    </TotalEntriesContainer>
  );
}
