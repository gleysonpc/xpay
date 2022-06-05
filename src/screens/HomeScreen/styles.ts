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

export const CardImage = styled.Image`
  height: 50px;
  width: 50px;
`;
