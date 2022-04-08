import { IconButton, useColorMode } from '@chakra-ui/react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

interface ThemeSwitcherProps {
  color?: string
}

export function ThemeSwitcher({ color = 'whiteAlpha' }: ThemeSwitcherProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <IconButton
        icon={
          colorMode === 'dark' ? (<RiSunLine size='22px' />) : (<RiMoonLine size='22px' />)
        }
        variant='switchTheme'
        aria-label='Color mode switcher'
        colorScheme='whiteAlpha'
        color={color}
        onClick={toggleColorMode}
      >
        Switch Mode
      </IconButton>
    </header>
  )
}
