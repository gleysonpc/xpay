import React from 'react';
import {Container, Title, Subtitle, Footer} from './styles';

interface Props {
  title: string;
  subtitle?: string;
  footer?: string;
}

export default function ScreenHeader({
  title = '',
  subtitle = '',
  footer = '',
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>{footer}</Footer>
    </Container>
  );
}
