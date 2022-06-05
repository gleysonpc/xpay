import {scale} from 'react-native-size-matters';

export default {
  COLORS: {
    BACKGROUND: '#EEEEEE',
    MAIN: '#D03530',
    TEXT_DARK: '#000',
    TEXT_LIGHT: '#828282',
    FOREGROUND: '#FFF',

    SUCCESS: '#4DA706',
    WARNING: '#E79902',
    INFO: '#02BDE7',
  },

  SIZES: {
    HEADING: Math.floor(scale(20)),
    TITLES: Math.floor(scale(15)),
    SUBTITLES: Math.floor(scale(12)),
    RADIUS: 30,
    BUTTON_HEIGHT: Math.floor(scale(45)),
    BUTTON_FONT_SIZE: Math.floor(scale(14)),
    INPUT_PADDING: 10,
    SCREEN_PADDING: `0 ${Math.floor(scale(10))}px`,
  },
};
