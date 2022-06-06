import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

export function useAppTheme() {
  const context = useContext(ThemeContext);
  return context;
}
