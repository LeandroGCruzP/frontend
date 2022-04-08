import {
  Box,
  Button as ChakraButton,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'No mínimo 8 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const [t] = useTranslation('global')
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })
  const handleCreateUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    router.push('/users')
  }
  const { errors } = formState

  /** Colors */
  const bgContainer = useColorModeValue('gray.50', 'gray.800')
  const bgBox = useColorModeValue('white', 'gray.900')
  /** Translations */
  const tCreateUser = t('users.create.create-user')
  const tName = t('users.create.name')
  const tEmail = t('users.create.email')
  const tPassword = t('users.create.password')
  const tRepeatPassword = t('users.create.repeat-password')
  const tCancel = t('users.create.cancel')
  const tSave = t('users.create.save')

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
        <Box as='form' onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size='lg' fontWeight='normal'>
            {tCreateUser}
          </Heading>

          <Divider my={[2, 4, 6]} />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth='240px' spacing={[4, 6, 8]} w='100%'>
              <Input
                idName='name'
                label={tName}
                autoComplete='off'
                error={errors.name}
                {...register('name')}
              />
              <Input
                idName='email'
                label={tEmail}
                type='email'
                autoComplete='off'
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={[4, 6, 8]} w='100%'>
              <Input
                idName='password'
                label={tPassword}
                type='password'
                error={errors.password}
                {...register('password')}
              />
              <Input
                idName='password_confirmation'
                label={tRepeatPassword}
                type='password'
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify='flex-end'>
            <HStack spacing='16px'>
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
