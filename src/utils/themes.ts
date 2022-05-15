import { orage, neutral } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: orage[300],
  primaryHoverColor: orage[200],
  primaryActiveColor: orage[300],
  primaryBackground: neutral[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  gridBackground: neutral[100]
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  primaryBackground: neutral[300],
  formElementBackground: orage[100],
  textOnFormElementBackground: neutral[100],
  textColorOnPrimary: orage[300],
  textColor: orage[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[100],
  gridBackground: neutral[100]
}