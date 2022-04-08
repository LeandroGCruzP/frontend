import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from '../../assets/Logo'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'
import { ActionNav } from './ActionNav'
import { Profile } from './Profile'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWebVersion = useBreakpointValue({
    base: false,
    md: true
  })

  /** Colors */
  const bgHeader = useColorModeValue('red.700', 'gray.900')

  return (
    <Flex as='header' w='100vw' h='10vh' bg={bgHeader} px={[2, 4, 6]}>
      <Flex
        w='100%'
        h='100%'
        maxWidth='1480px'
        mx='auto'
        justify='space-between'
      >
        <Flex align='center'>
          <IconButton
            icon={<Icon as={RiMenuLine} />}
            display='flex'
            alignItems='center'
            mr={4}
            fontSize='24px'
            variant='unstyled'
            aria-label='Open sidebar'
            color='white'
            onClick={onOpen}
          />

          <Logo color='white' />
        </Flex>

        <Flex align='center'>
          <ActionNav showProfileData={isWebVersion} />
          <Profile showProfileData={isWebVersion} />
        </Flex>
      </Flex>
    </Flex>
  )
}
