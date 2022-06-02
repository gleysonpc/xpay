import styled from 'styled-components/native';

interface PaddingVerticalProps {
  height: number;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const LoginForm = styled.View`
  background-color: ${({theme}) => theme.COLORS.FOREGROUND};
  width: 90%;
  height: 300px;
  border-radius: ${({theme}) => theme.SIZES.RADIUS}px;
  padding: 24px;
  justify-content: space-evenly;
`;

export const FormHeader = styled.View`
  align-items: center;
`;

export const FormBody = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const FormTitle = styled.Text`
  font-size: ${({theme}) => theme.SIZES.TITLES}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  margin-bottom: 20px;
`;

export const FormSubTitle = styled.Text`
  font-size: ${({theme}) => theme.SIZES.SUBTITLES}px;
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  margin-bottom: 20px;
`;

export const PaddingVertical = styled.View<PaddingVerticalProps>`
  height: ${({height}) => height}px;
`;
