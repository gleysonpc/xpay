import styled from 'styled-components/native';

export const InputContainer = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TEXT_LIGHT,
}))`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  height: ${({theme}) => theme.SIZES.BUTTON_HEIGHT}px;
  justify-content: center;
  border-radius: ${({theme}) => theme.SIZES.RADIUS}px;
  padding: ${({theme}) => theme.SIZES.INPUT_PADDING}px;
`;
