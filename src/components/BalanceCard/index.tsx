import React from 'react';
import {
  CardContainer,
  CardIconContainer,
  CardBody,
  CardArrowContainer,
  CartTitle,
  CartSubtitle,
  CartPrice,
  DropShadow,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  cardImage?: JSX.Element;
  cardTitle: string;
  cardSubtitle: string;
  cardType: 'SUCCESS' | 'INFO' | 'WARNING';
  cardPrice: number;
}

export default function CardBalance({
  cardImage,
  cardTitle = '',
  cardSubtitle = '',
  cardPrice = 0,
  cardType,
}: Props) {
  return (
    <DropShadow>
      <CardContainer>
        <CardIconContainer>{cardImage}</CardIconContainer>

        <CardBody>
          <CartTitle>{cardTitle}</CartTitle>
          <CartSubtitle>{cardSubtitle}</CartSubtitle>
          <CartPrice>{cardPrice}</CartPrice>
        </CardBody>

        <CardArrowContainer type={cardType}>
          <Icon name="chevron-right" size={30} color="#fff" />
        </CardArrowContainer>
      </CardContainer>
    </DropShadow>
  );
}
