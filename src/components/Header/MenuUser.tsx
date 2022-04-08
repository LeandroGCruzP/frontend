import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export function MenuUser() {
  const [t] = useTranslation('global')

  /** Colors */
  const bgHeader = useColorModeValue('red.700', 'gray.900')
  const bgHeaderHover = useColorModeValue('red.600', 'gray.700')
  /** Translations */
  const tProfile = t('header.menu.your-profile')
  const tTasks = t('header.menu.your-tasks')
  const tConfig = t('header.menu.configurations')
  const tTerms = t('header.menu.terms')
  const tSignOut = t('header.menu.sign-out')

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Avatar}
        src='https://avatars.githubusercontent.com/u/59587859?v=4'
        variant='outline'
        aria-label='Options'
        cursor='pointer'
      />
      <MenuList bg={bgHeader} color='white'>
        <MenuItem _hover={{ bg: bgHeaderHover }}>{tProfile}</MenuItem>
        <MenuItem _hover={{ bg: bgHeaderHover }}>{tTasks}</MenuItem>
        <MenuItem _hover={{ bg: bgHeaderHover }}>{tConfig}</MenuItem>

        <MenuDivider />

        <MenuItem _hover={{ bg: bgHeaderHover }}>{tTerms}</MenuItem>

        <MenuDivider />

        <MenuItem _hover={{ bg: bgHeaderHover }}>
          <Link href='/' passHref>
            {tSignOut}
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
