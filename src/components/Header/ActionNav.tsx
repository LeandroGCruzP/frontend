import { Flex, HStack, IconButton } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { SelectLanguage } from '../SelectLanguage'
import { ThemeSwitcher } from '../ThemeSwitcher'

interface ActionNavProps {
  showProfileData: boolean | undefined
}

export function ActionNav({ showProfileData = true }: ActionNavProps) {
  return (
    <Flex>
      {showProfileData ? (
        <>
          <SelectLanguage color='white' />

          <HStack gap={[3]} mr={6} ml={3}>
            <ThemeSwitcher color='white' />

            <IconButton
              icon={<RiNotificationLine fontSize='20px' />}
              variant='unstyled'
              aria-label='Notification'
              onClick={() => { }}
              display='flex'
              justifyContent='center'
              color='white'
              cursor='pointer'
            >
              Notification
            </IconButton>

            <IconButton
              icon={<RiUserAddLine fontSize='20px' />}
              variant='unstyled'
              aria-label='Add User'
              onClick={() => { }}
              display='flex'
              justifyContent='center'
              color='white'
              cursor='pointer'
            >
              Add User
            </IconButton>
          </HStack>
        </>
      ) : (
        <HStack mr={6}>
          <IconButton
            icon={<RiNotificationLine fontSize='20px' />}
            variant='unstyled'
            aria-label='Notification'
            onClick={() => { }}
            display='flex'
            justifyContent='center'
            color='white'
            cursor='pointer'
          >
            Notification
          </IconButton>
        </HStack>
      )}
    </Flex>
  )
}
