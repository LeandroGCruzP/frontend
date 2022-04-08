import { Text, TextProps } from '@chakra-ui/react'

interface LogoProps extends TextProps { }

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={['xl', '2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      colorScheme='whiteAlpha'
      {...rest}
    >
      Aceno
      <Text as='span' ml='4px' color='red.500'>
        .
      </Text>
    </Text>
  )
}
