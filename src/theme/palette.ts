import { PaletteOptions } from '@mui/material';
import { colors } from '../contents/colorDefinitions';

const palette: PaletteOptions = {
  primary: {
    main: colors.primaryMain,
    dark: colors.primaryDark,
    light: colors.primaryLight,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: colors.secondaryMain,
    dark: colors.secondaryDark,
    light: colors.secondaryLight,
  },
  error: {
    main: colors.errorMain,
    dark: colors.errorDark,
    light: colors.errorLight,
  },
  warning: {
    main: colors.warningMain,
    dark: colors.warningDark,
    light: colors.warningLight,
  },
  text: {
    primary: colors.textDark,
    secondary: colors.textMain,
    disabled: colors.disabled,
  },
  background: {
    default: colors.secondaryBg,
    paper: colors.primaryBg,
  },
};

export default palette;
