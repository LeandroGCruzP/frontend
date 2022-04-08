import {
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Logo } from '../assets/Logo'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { SelectLanguage } from '../components/SelectLanguage'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const [t] = useTranslation('global')
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })
  const handleSignIn = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    router.push('/dashboard')
  }
  const { errors } = formState

  const isWebVersion = useBreakpointValue({
    base: false,
    md: true
  })

  /** Colors */
  const bgContainerLeft = useColorModeValue('red.700', 'gray.900')
  const bgContainerRight = useColorModeValue('gray.50', 'gray.800')
  /** Translations */
  const tWelcome = t('sign-in.welcome')
  const tLogin = t('sign-in.login')
  const tEmail = t('sign-in.email')
  const tPassword = t('sign-in.password')
  const tSignIn = t('sign-in.sign-in')

  return (
    <Flex w='100vw' h='100vh'>
      {/* Container Left */}
      {isWebVersion && (
        <Flex w='40vw' flexDir='column' p={[2, 4, 6]} bg={bgContainerLeft}>
          <Logo color='white' />

          <Flex flex='1' flexDir='column' justify='center'>
            <Text
              align='center'
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight='bold'
              letterSpacing='wide'
              color='white'
            >
              {tWelcome}
            </Text>
            <Text align='center' fontSize={['sm', 'sm', 'md']} color='gray.100'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              exercitationem aliquid neque error aut sed numquam ipsum illum,
              quas saepe quisquam quasi, fugit veniam repudiandae doloremque,
              libero accusantium doloribus. Aut.
            </Text>
          </Flex>
        </Flex>
      )}

      {/* Container Direito */}
      <Flex
        flex='1'
        flexDir='column'
        align='center'
        p={[2, 4, 6]}
        bg={bgContainerRight}
      >
        <Flex w='100%' align='center' justify='space-between'>
          {isWebVersion ? <Flex /> : <Logo />}

          <Flex gap={2}>
            <ThemeSwitcher />
            <SelectLanguage />
          </Flex>
        </Flex>

        <Flex
          as='form'
          flex='1'
          w={['80%', '70%', '60%']}
          justify='center'
          flexDir='column'
          gap={4}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text
            align='center'
            fontSize={['2xl', '3xl', '4xl']}
            fontWeight='bold'
            letterSpacing='wide'
          >
            {tLogin}
          </Text>

          <Input
            idName='email'
            type='email'
            label={tEmail}
            error={errors.email}
            {...register('email')}
          />
          <Input
            idName='password'
            type='password'
            label={tPassword}
            error={errors.password}
            {...register('password')}
          />

          <Button
            type='submit'
            name={tSignIn}
            isLoading={formState.isSubmitting}
            mt={6}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
