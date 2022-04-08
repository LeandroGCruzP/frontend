import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'
import { NavSection } from './NavSection'

export function Sidebar() {
  const [t] = useTranslation('global')
  const { isOpen, onClose } = useSidebarDrawer()

  /** Colors */
  const bgDrawerContent = useColorModeValue('red.700', 'gray.900')
  /** Translations */
  const tNavigation = t('sidebar.navigation')

  return (
    /** Esta função devolve a ação do sanduiche ao lado no Logo no Header.
     * O Icon em si se encontra no componente Header/index.tsx
     */
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg={bgDrawerContent} p={4}>
          <DrawerCloseButton mt={6} color='white' />
          <DrawerHeader color='white'>{tNavigation}</DrawerHeader>

          <DrawerBody>
            <NavSection />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
