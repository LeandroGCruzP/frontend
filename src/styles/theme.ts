import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

const colors = {
  red: {
    50: '#FCE9E9',
    100: '#F9D2D2',
    200: '#F3A5A5',
    300: '#ED7878',
    400: '#E74B4B',
    500: '#E01F1F',
    600: '#B41818',
    700: '#871212',
    800: '#5A0C0C',
    900: '#2D0606'
  },
  gray: {
    50: '#EEEEF2',
    100: '#D1D2DC',
    200: '#B3B5C6',
    300: '#9699B0',
    400: '#797D9A',
    500: '#616480',
    600: '#4B4D63',
    700: '#353646',
    800: '#1F2029',
    900: '#181B23'
  },
  yellow: {
    50: '#FCF5E8',
    100: '#F9EAD2',
    200: '#F3D5A5',
    300: '#EDC078',
    400: '#E8AB4A',
    500: '#E2961D',
    600: '#B57817',
    700: '#875A12',
    800: '#5A3C0C',
    900: '#2D1E06'
  }

}

const fonts = {
  heading: 'Roboto',
  body: 'Roboto'
}

const theme = extendTheme({ config, colors, fonts })

export default theme
