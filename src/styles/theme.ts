import { extendTheme } from 'native-base';

export const ThemeNative = extendTheme({
  colors: {
    green: {
      500: '#004852'
    },
    yellow: {
      500: '#E8F54A'
    },
    black: {
      500: '#111827'
    },
    gray: {
      500: '#F5F5F5',
      600: '#CBCBCB'
    }
  },
  fonts: {
    heading: 'Poppins_700Bold',
    body: 'Poppins_400Regular',
    medium: 'Poppins_600SemiBold'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87
  }
});
