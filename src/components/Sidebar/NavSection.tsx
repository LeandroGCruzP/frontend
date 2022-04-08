import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavLink } from './NavLink'

export function NavSection() {
  const [t] = useTranslation('global')

  /** Translations */
  const tGeneral = t('sidebar.nav-section.general')
  const tDashboard = t('sidebar.nav-section.dashboard')
  const tTasks = t('sidebar.nav-section.tasks')
  const tAutomation = t('sidebar.nav-section.automation')
  const tUsers = t('sidebar.nav-section.users')
  const tQueues = t('sidebar.nav-section.queues')

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
        <AccordionButton justifyContent='space-between'>
          <Text fontWeight='medium' fontSize='sm' color='white'>
            {tGeneral}
          </Text>
          <AccordionIcon color='white' />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <NavLink href='/dashboard' icon={RiDashboardLine}>
            {tDashboard}
          </NavLink>
          <NavLink href='#' icon={RiInputMethodLine}>
            {tTasks}
          </NavLink>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton justifyContent='space-between'>
          <Text fontWeight='medium' fontSize='sm' color='white'>
            {tAutomation}
          </Text>
          <AccordionIcon color='white' />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <NavLink href='/users' icon={RiContactsLine}>
            {tUsers}
          </NavLink>
          <NavLink href='#' icon={RiGitMergeLine}>
            {tQueues}
          </NavLink>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
