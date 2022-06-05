import styled from 'styled-components/native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled.View`
  margin-top: ${Math.floor(moderateScale(10))}px;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: ${({theme}) => theme.SIZES.HEADING}px;
  font-weight: bold;
  margin-bottom: ${Math.floor(moderateScale(7))}px;
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  margin-bottom: ${Math.floor(moderateScale(7))}px;
  font-weight: bold;
`;

export const Footer = styled.Text`
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  font-weight: bold;
  margin-bottom: ${Math.floor(moderateScale(7))}px;
`;
