import React from 'react';
import {ButtonContainer, ButtonText} from './styles';

interface Props {
  title: string;
  onPress?(): void;
}

const AppButton: React.FC<Props> = ({onPress, title}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText> {title} </ButtonText>
    </ButtonContainer>
  );
};

export default AppButton;
