import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function Dashboard() {
  const bgContainer = useColorModeValue('gray.50', 'gray.800')

  return (
    <Flex w='100vw' h='90vh' bg={bgContainer} justify='center'>
      <Flex flex='1' maxW='1480px' py={[2, 4, 6]}>
        <Text>Dashboard</Text>
      </Flex>
    </Flex>
  )
}
