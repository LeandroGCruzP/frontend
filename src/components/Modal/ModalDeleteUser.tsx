import {
  Checkbox,
  HStack,
  Link as LinkChakra,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Input } from '../Input'

export function ModalDeleteUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  /** Colors */
  const bgModalContent = useColorModeValue('white', 'gray.900')
  const borderButtonSave = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')

  /** Translations */
  const [t] = useTranslation('global')
  const tDeleteUser = t('users.update.modal-delete-user.delete-user')
  const tHeader = t('users.update.modal-delete-user.header')
  const tExplication1 = t('users.update.modal-delete-user.explication-first-part')
  const tExplication2 = t('users.update.modal-delete-user.explication-second-part')
  const tConfirmation1 = t('users.update.modal-delete-user.confirmation-first-part')
  const tConfirmation2 = t('users.update.modal-delete-user.confirmation-second-part')
  const tBeforeTerms = t('users.update.modal-delete-user.before-terms')
  const tTerms = t('users.update.modal-delete-user.terms')
  const tDeleteButton = t('users.update.modal-delete-user.delete-user-button')

  return (
    <>
      <LinkChakra
        onClick={onOpen}
        _hover={{ color: 'red.700' }}
        fontWeight='semibold'
      >
        {tDeleteUser}
      </LinkChakra>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={bgModalContent} boxShadow='xl'>
          <ModalHeader>{tHeader}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4}>
              <Text>
                {tExplication1}
                {' '}
                <strong> Leandro Cruz</strong>
                {' '}
                {tExplication2}
              </Text>
              <Text>
                {tConfirmation1}
                {' '}
                <strong> LucasLone</strong>
                {' '}
                {tConfirmation2}
              </Text>

              <Input idName='name' autoFocus />

              <HStack spacing={4}>
                <Checkbox colorScheme='yellow' />
                <Text>
                  {tBeforeTerms}
                  {' '}
                  <LinkChakra
                    onClick={() => { }}
                    fontWeight='bold'
                    style={{ textDecoration: 'none' }}
                  >
                    {tTerms}
                  </LinkChakra>
                </Text>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent='center'>
            <Button
              type='submit'
              name={tDeleteButton}
              flex='1'
              colorScheme='whiteAlpha'
              border='2px solid'
              borderColor={borderButtonSave}
              color={borderButtonSave}
              disabled
              bg='transparent'
              _hover={{ bg: 'red.700', color: 'white' }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
