import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import {
  RiAddLine, RiPencilFill, RiRefreshLine
} from 'react-icons/ri'
import { Button } from '../../components/Button'
import { Pagination } from '../../components/Pagination'
import { useUsers } from '../../hooks/useUsers'

export default function Users() {
  const {
    data, isLoading, error, isFetching, refetch
  } = useUsers()
  /** Responsive */
  const noIsWebLargeVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  const noIsWebVersion = useBreakpointValue({
    base: false,
    md: true
  })
  const noIsMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })
  /** Colors */
  const bgContainer = useColorModeValue('gray.50', 'gray.800')
  const bgBox = useColorModeValue('white', 'gray.900')
  /** Translations */
  const [t] = useTranslation('global')
  const tUsers = t('users.users')
  const tCreateUser = t('users.create-user')
  const tRefresh = t('users.refresh')
  const tError = t('users.error')
  const tUser = t('users.user')
  const tRole = t('users.role')
  const tStatus = t('users.status')
  const tRegistrationDate = t('users.registration-date')
  const tEdit = t('users.edit')

  return (
    <Flex w='100vw' h='90vh' bg={bgContainer} px={[2, 4, 6]}>
      <Box
        w='100%'
        h='min'
        maxW='1480px'
        my={[2, 4, 6]}
        mx='auto'
        p={[2, 4, 6]}
        borderRadius='12px'
        bg={bgBox}
        boxShadow='xl'
      >
        {/* Header */}
        <Flex mb={8} justify='space-between' align='center'>
          <Heading size='lg' fontWeight='normal' display='flex' alignItems='center'>
            {tUsers}
            {!isLoading && isFetching && (<Spinner size='xs' ml={3} />)}
          </Heading>

          {/* Header - Actions */}
          <Flex gap={4}>
            {noIsMobileVersion ? (
              <>
                <Button
                  name={tRefresh}
                  type='button'
                  size='md'
                  leftIcon={<Icon as={RiRefreshLine} fontSize='20px' />}
                  onClick={() => refetch()}
                />

                <Link href='/users/create' passHref>
                  <Button
                    name={tCreateUser}
                    type='button'
                    size='md'
                    leftIcon={<Icon as={RiAddLine} fontSize='20px' />}
                  />
                </Link>
              </>
            ) : (
              <>
                <Circle
                  bg='red.700'
                  color='white'
                  size='40px'
                >
                  <Icon as={RiRefreshLine} h={5} w={5} />
                </Circle>
                <Circle
                  bg='red.700'
                  color='white'
                  size='40px'
                >
                  <Icon as={RiAddLine} h={7} w={7} />
                </Circle>
              </>
            )}
          </Flex>

        </Flex>

        {/* Table */}
        {isLoading ? (
          <Flex justify='center'>
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify='center'>
            <Text>{tError}</Text>
          </Flex>
        ) : (
          <Table>
            {/* Table - Header */}
            <Thead>
              <Tr>
                <Th>{tUser}</Th>
                {noIsWebVersion && <Th>{tRole}</Th>}
                <Th>{tStatus}</Th>
                {noIsWebLargeVersion && <Th>{tRegistrationDate}</Th>}
                <Th />
              </Tr>
            </Thead>

            {/* Table - Body */}
            <Tbody>
              {data?.map((user) => (
                <Tr>
                  {/* Table-Body - name & email (USER) */}
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>{user.name}</Text>
                      {noIsWebVersion && (
                        <Text fontSize='sm'>{user.email}</Text>
                      )}
                    </Box>
                  </Td>
                  {/* Table-Body - is_admin (ROLE) */}
                  {noIsWebVersion
                    ? user.is_admin === true
                      ? (<Td>Administrador</Td>)
                      : (<Td>Colaborador</Td>)
                    : null}
                  {/* Table-Body - state (STATUS) */}
                  <Td>
                    <HStack spacing={2}>
                      {user.state === 'active' ? (
                        <>
                          {noIsMobileVersion ? <Circle size='12px' bg='green.400' /> : <Circle size='12px' bg='green.400' ml={4} />}
                          {noIsMobileVersion && <Text>Ativo</Text>}
                        </>

                      ) : user.state === 'inactive' ? (
                        <>
                          {noIsMobileVersion ? <Circle size='12px' bg='yellow.400' /> : <Circle size='12px' bg='yellow.400' ml={4} />}
                          {noIsMobileVersion && <Text>Inativo</Text>}
                        </>
                      ) : user.state === 'disconnect' && (
                        <>
                          {noIsMobileVersion ? <Circle size='12px' bg='red.400' /> : <Circle size='12px' bg='red.400' ml={4} />}
                          {noIsMobileVersion && <Text>Desconectado</Text>}
                        </>
                      )}
                    </HStack>
                  </Td>
                  {/* Table-Body - created_at (REGISTRATION DATE) */}
                  {noIsWebLargeVersion && <Td>{user.created_at}</Td>}
                  {/* Table-Body - Edit (Button) */}
                  <Td>
                    <Link href='/users/update' passHref>
                      {noIsMobileVersion ? (
                        <Button
                          name={tEdit}
                          type='button'
                          size='md'
                          bg='yellow.400'
                          leftIcon={<Icon as={RiPencilFill} fontSize='16px' />}
                        />
                      ) : (
                        <Circle bg='yellow.400' size='40px'>
                          <Icon as={RiPencilFill} color='white' h={5} w={5} />
                        </Circle>
                      )}
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}

        {/* Footer */}
        <Pagination />
      </Box>
    </Flex>
  )
}
