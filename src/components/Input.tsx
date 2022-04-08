import {
  FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  idName: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    idName, label, error = null, ...rest
  },
  ref
) => (
  /** Explicação
     * transforma a variável error em bool
     * caso exista ou não exista algo dentro da variável
     */
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor={idName}>{label}</FormLabel>}

    <ChakraInput
      id={idName}
      name={idName}
      variant='filled'
      colorScheme='whiteAlpha'
      // bg="white"
      size='lg'
      ref={ref}
      {...rest}
    />

    {!!error && (
      <FormErrorMessage color='red.400'>
        *
        {error.message}
      </FormErrorMessage>
    )}
  </FormControl>
)

export const Input = forwardRef(InputBase)
