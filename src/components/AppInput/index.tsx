import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {InputContainer} from './styles';

interface Props {
  label: string;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
}

const AppInput: React.FC<Props> = ({
  onChange,
  label,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <InputContainer
      placeholder={label}
      onChange={onChange}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default AppInput;
