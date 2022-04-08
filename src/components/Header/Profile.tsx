import { Box, Flex, Text } from '@chakra-ui/react'
import { MenuUser } from './MenuUser'

interface ProfileProps {
  showProfileData: boolean | undefined
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr={4} textAlign='right'>
          <Text color='white'>Leandro Cruz</Text>

          <Text fontSize='sm' color='gray.100'>
            leandro.programmer@hotmail.com
          </Text>
        </Box>
      )}

      <MenuUser />
    </Flex>
  )
}
