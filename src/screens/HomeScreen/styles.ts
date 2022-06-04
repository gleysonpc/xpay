import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  padding: ${({theme}) => theme.SIZES.SCREEN_PADDING};
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ActiveBalanceText = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 20px;
`;
