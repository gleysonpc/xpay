import styled from 'styled-components/native';

interface cardArrowContainerProps {
  type: 'SUCCESS' | 'INFO' | 'WARNING';
}

export const DropShadow = styled.Text`
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.18;
  shadow-radius: 1px;
  elevation: 1;
  margin: 10px 0;
`;

export const CardContainer = styled.TouchableOpacity`
  border-radius: ${({theme}) => theme.SIZES.RADIUS}px;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  height: 130px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;

export const CardIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const CardBody = styled.View`
  flex: 1;
  padding: 10px 15px;
  justify-content: space-evenly;
`;

export const CardArrowContainer = styled.View<cardArrowContainerProps>`
  justify-content: center;
  background-color: ${({type, theme}) =>
    type ? theme.COLORS[type] : theme.COLORS.SUCCESS};
`;

export const CartTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-weight: bold;
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
`;

export const CartSubtitle = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  font-style: italic;
`;

export const CartPrice = styled.Text`
  align-self: flex-end;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-weight: bold;
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
`;
