import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.MAIN};
  height: ${({theme}) => theme.SIZES.BUTTON_HEIGHT}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.SIZES.RADIUS}px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.FOREGROUND};
  font-size: ${({theme}) => theme.SIZES.BUTTON_FONT_SIZE}px;
  text-transform: uppercase;
  font-weight: bold;
`;
