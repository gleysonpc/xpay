import React from 'react';
import {
  CardContainer,
  CardIconContainer,
  CardBodyLarge,
  CardBodySmall,
  CardArrowContainer,
  CartTitle,
  CartSubtitle,
  CartPrice,
  CardLeft,
  CardRight,
  dropShadowStyles,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import DropShadow from 'react-native-drop-shadow';
import {Text} from 'react-native';

interface Props {
  cardImage?: JSX.Element;
  cardTitle: string;
  cardSubtitle: string;
  cardType: 'SUCCESS' | 'INFO' | 'WARNING';
  cardPrice: number;
  cardSize?: 'large' | 'small';
  cardActive?: boolean;
}

export default function CardBalance({
  cardImage,
  cardTitle = '',
  cardSubtitle = '',
  cardPrice = 0,
  cardType,
  cardSize = 'small',
  cardActive = false,
}: Props) {
  return (
    <DropShadow style={dropShadowStyles}>
      <CardContainer size={cardSize}>
        <CardIconContainer>{cardImage}</CardIconContainer>
        {cardSize === 'large' ? (
          <CardBodyLarge>
            <CartTitle>{cardTitle}</CartTitle>
            <CartSubtitle>{cardSubtitle}</CartSubtitle>
            <CartPrice>{cardPrice}</CartPrice>
          </CardBodyLarge>
        ) : (
          <>
            <CardBodySmall>
              <CardLeft>
                <CartTitle>{cardTitle}</CartTitle>
                <CartSubtitle>{cardSubtitle}</CartSubtitle>
              </CardLeft>
              <CardRight>
                {cardActive ? <CartSubtitle>Ativa</CartSubtitle> : <Text />}
                <CartPrice>{cardPrice}</CartPrice>
              </CardRight>
            </CardBodySmall>
          </>
        )}
        <CardArrowContainer type={cardType}>
          <Icon name="chevron-right" size={30} color="#fff" />
        </CardArrowContainer>
      </CardContainer>
    </DropShadow>
  );
}
