import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  padding: ${({theme}) => theme.SIZES.SCREEN_PADDING};
`;
