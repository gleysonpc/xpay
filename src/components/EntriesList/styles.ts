import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

export const AccordionHeader = styled.View`
  height: ${({theme}) => theme.SIZES.BUTTON_HEIGHT}px;
  border-radius: 15px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const AccordionContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${scale(10)}px;
`;

export const AccordionContentCard = styled.View`
  height: ${({theme}) => theme.SIZES.BUTTON_HEIGHT}px;
  border-radius: 15px;
  width: ${width - scale(60)}px;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Circle = styled.View`
  border-radius: 50px;
  height: ${scale(10)}px;
  width: ${scale(10)}px;
  background-color: ${({theme}) => theme.COLORS.SUCCESS};
`;
