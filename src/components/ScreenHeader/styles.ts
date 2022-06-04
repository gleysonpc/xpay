import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: ${({theme}) => theme.SIZES.HEADING}px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Footer = styled.Text`
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  font-weight: bold;
  margin-bottom: 7px;
`;
