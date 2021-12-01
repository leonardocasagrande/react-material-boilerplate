import 'typeface-open-sans';
import 'typeface-montserrat';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  h1: {
    fontSize: '6rem',
    letterSpacing: '-1.5px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '7rem',
  },
  h2: {
    fontSize: '3.75rem',
    letterSpacing: '-0.5px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '4.5rem',
  },
  h3: {
    fontSize: '3rem',
    letterSpacing: '0px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '3.5rem',
  },
  h4: {
    fontSize: '1.813rem',
    letterSpacing: '0.25px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '2.25rem',
  },
  h5: {
    fontSize: '1.5rem',
    letterSpacing: '0px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: 1,
  },
  h6: {
    fontSize: '1.25rem',
    letterSpacing: '0px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '1.5rem',
  },
  button: {
    fontSize: '1rem',
    letterSpacing: '0px',
    fontWeight: 700,
    fontFamily: '"Open Sans", "Trebuchet MS", Helvetica, sans-serif',
    textTransform: 'none',
    lineHeight: '1.188rem',
  },
  subtitle1: {
    fontSize: '1rem',
    letterSpacing: '0px',
    fontWeight: 600,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '1.5rem',
  },
  subtitle2: {
    fontSize: '0.875rem',
    letterSpacing: '0px',
    fontWeight: 500,
    fontFamily: '"Montserrat", "Trebuchet MS", Helvetica, sans-serif',
    lineHeight: '1.5rem',
  },
  body1: {
    fontSize: '1rem',
    letterSpacing: '0px',
    fontWeight: 400,
    fontFamily: '"Open Sans", Geneva, Tahoma, sans-serif',
    lineHeight: '1.375rem',
  },
  body2: {
    fontSize: '0.875rem',
    letterSpacing: '0px',
    fontWeight: 400,
    fontFamily: '"Open Sans", Geneva, Tahoma, sans-serif',
    lineHeight: '1.25rem',
  },
  caption: {
    fontSize: '0.75rem',
    letterSpacing: '0.6px',
    fontWeight: 400,
    fontFamily: '"Open Sans", Geneva, Tahoma, sans-serif',
    lineHeight: '1.25rem',
  },
  overline: {
    fontSize: '0.625rem',
    letterSpacing: '1.5px',
    fontWeight: 400,
    fontFamily: '"Open Sans", Geneva, Tahoma, sans-serif',
    lineHeight: '1rem',
    textTransform: 'uppercase',
  },
};

export default typography;
