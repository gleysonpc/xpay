import React, {ReactNode} from 'react';
import RNDropShadow from 'react-native-drop-shadow';
import {moderateScale} from 'react-native-size-matters';

const dropShadowStyles = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1,
  marginVertical: Math.floor(moderateScale(7)),
};

interface Props {
  children: ReactNode;
}

export default function DropShadow({children}: Props) {
  return <RNDropShadow style={dropShadowStyles}>{children}</RNDropShadow>;
}
