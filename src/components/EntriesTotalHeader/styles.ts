import {scale} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const TotalEntriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${scale(5)}px;
`;
export const TotalEntriesText = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
`;
export const TotalEntriesValue = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
`;
