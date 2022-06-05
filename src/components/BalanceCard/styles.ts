import styled from 'styled-components/native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

interface SubtitleProps {
  italic?: boolean;
}

export const dropShadowStyles = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1,
  marginVertical: Math.floor(moderateScale(7)),
};

const {width} = Dimensions.get('window');

interface cardArrowContainerProps {
  type: 'SUCCESS' | 'INFO' | 'WARNING';
}
interface CardContainerProps {
  size: 'large' | 'small';
}

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  border-radius: ${({theme}) => theme.SIZES.RADIUS}px;
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  height: ${({size}) =>
    size === 'large' ? verticalScale(100) : verticalScale(75)}px;
  width: ${Math.floor(width) - 20}px;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;

export const CardIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: ${Math.floor(moderateScale(15))}px;
`;

export const CardBodyLarge = styled.View`
  flex: 1;
  padding: ${Math.floor(moderateScale(10))}px;
  justify-content: space-between;
`;

export const CardBodySmall = styled.View`
  flex: 1;
  padding: ${Math.floor(moderateScale(10))}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardLeft = styled.View`
  justify-content: space-between;
`;

export const CardRight = styled.View`
  justify-content: space-between;
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

export const CartSubtitle = styled.Text<SubtitleProps>`
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  font-style: ${({italic}) => (italic ? 'italic' : 'normal')};
`;

export const CartPrice = styled.Text`
  align-self: flex-end;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-weight: bold;
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
`;
