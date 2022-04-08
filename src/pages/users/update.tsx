import {
  Box,
  Button as ChakraButton,
  Divider,
  Flex,
  Heading,
  HStack, Icon, SimpleGrid, Text, useBreakpointValue,
  useColorModeValue, VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  RiCalendar2Line,
  RiMailLine,
  RiPulseLine,
  RiUser3Line
} from 'react-icons/ri'
import * as yup from 'yup'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ModalDeleteUser } from '../../components/Modal/ModalDeleteUser'

const UpdateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  status: yup.string().required('Status obrigatório'),
  role: yup.string().required('Cargo obrigatório')
})

export default function UpdateUser() {
  const [t] = useTranslation('global')
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(UpdateUserFormSchema)
  })
  const handleUpdateUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    router.push('/users')
  }
  const { errors } = formState

  const isWebVersion = useBreakpointValue({
    base: false,
    md: true
  })

  /** Colors */
  const bgContainer = useColorModeValue('gray.50', 'gray.800')
  const bgBox = useColorModeValue('white', 'gray.900')
  /** Translations */
  const tUpdateUser = t('users.update.update-user')
  const tPersonalInformation = t('users.update.personal-information')
  const tProfessionalInformation = t('users.update.professional-information')
  const tName = t('users.update.name')
  const tEmail = t('users.update.email')
  const tRole = t('users.update.role')
  const tStatus = t('users.update.status')
  const tCancel = t('users.update.cancel')
  const tSave = t('users.update.save')

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
        <Box as='form' onSubmit={handleSubmit(handleUpdateUser)}>
          <Heading size='lg' fontWeight='normal'>
            {tUpdateUser}
          </Heading>

          <Divider my={[2, 4, 6]} />

          {/* Container */}
          <Flex
            justify='space-between'
            flexDir={isWebVersion ? 'row' : 'column'}
            gap={[4, 6, 12]}
          >
            {/* Information */}
            <VStack align='left' width={isWebVersion ? '35%' : '100%'}>
              <Text fontSize='sm' fontWeight='bold'>
                {tPersonalInformation}
              </Text>
              <Flex alignItems='center' gap={2}>
                <Icon as={RiUser3Line} />
                <Text>Leandro Cruz</Text>
              </Flex>
              <Flex alignItems='center' gap={2}>
                <Icon as={RiMailLine} />
                <Text>leandro.programmer@hotmail.com</Text>
              </Flex>

              <Text fontSize='sm' fontWeight='bold'>
                {tProfessionalInformation}
              </Text>
              <Flex alignItems='center' gap={2}>
                <Icon as={RiCalendar2Line} />
                <Text>Encarregado de maquinaria pesada</Text>
              </Flex>
              <Flex alignItems='center' gap={2}>
                <Icon as={RiPulseLine} />
                <Text>Active</Text>
              </Flex>
            </VStack>

            {/* Form */}
            <VStack spacing={[2, 4, 6]} w={isWebVersion ? '65%' : '100%'}>
              <SimpleGrid minChildWidth='280px' spacing={[2, 4, 6]} w='100%'>
                <Input
                  idName='name'
                  label={tName}
                  autoComplete='off'
                  error={errors.name}
                  {...register('name')}
                  defaultValue='Leandro Cruz'
                />
                <Input
                  idName='email'
                  label={tEmail}
                  type='email'
                  autoComplete='off'
                  error={errors.email}
                  {...register('email')}
                  defaultValue='leandro.programmer@hotmail.com'
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth='280px' spacing={[2, 4, 6]} w='100%'>
                <Input
                  idName='status'
                  label={tStatus}
                  autoComplete='off'
                  error={errors.status}
                  {...register('status')}
                  defaultValue='Active'
                />
                <Input
                  idName='role'
                  label={tRole}
                  autoComplete='off'
                  error={errors.role}
                  {...register('role')}
                  defaultValue='Administrator'
                />
              </SimpleGrid>
            </VStack>
          </Flex>

          <Flex mt={8} align='center' justify='space-between'>
            <ModalDeleteUser />

            <HStack spacing={4}>
              <Link href='/users' passHref>
                <ChakraButton>{tCancel}</ChakraButton>
              </Link>
              <Button
                name={tSave}
                type='submit'
                size='md'
                isLoading={formState.isSubmitting}
              />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
