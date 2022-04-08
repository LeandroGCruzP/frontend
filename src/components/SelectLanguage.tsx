import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RiGlobalLine } from 'react-icons/ri'

interface SelectLanguageProps {
  color?: string
}

export function SelectLanguage({ color }: SelectLanguageProps) {
  const [t, i18n] = useTranslation('global')
  const [selectEsLanguage, setSelectEsLanguage] = useState('')
  const [selectPtLanguage, setSelectPtLanguage] = useState('')
  const [selectEnLanguage, setSelectEnLanguage] = useState('')
  const [language, setLanguage] = useState('')

  useEffect(() => {
    if (selectEsLanguage === 'es') {
      // console.log(selectEsLanguage)
      i18n.changeLanguage(selectEsLanguage)
      setLanguage(selectEsLanguage)

      setSelectEsLanguage('')
    } else if (selectEnLanguage === 'en') {
      // console.log(selectEnLanguage)
      i18n.changeLanguage(selectEnLanguage)
      setLanguage(selectEnLanguage)

      setSelectEnLanguage('')
    } else if (selectPtLanguage === 'pt') {
      // console.log(selectPtLanguage)
      i18n.changeLanguage(selectPtLanguage)
      setLanguage(selectPtLanguage)

      setSelectPtLanguage('')
    }
  }, [selectEsLanguage, selectPtLanguage, selectEnLanguage])

  useEffect(() => {
    /** Funcionalidade:
     * pegar valor do Local Storage
     */
    const lang = localStorage.getItem('USER_LANG')

    if (lang === null || lang === '' || lang === undefined) {
      /** Funcionalidade:
       * busca o fallBack do i18next em /_app.tsx
       */
      const langFallBack = i18next.resolvedLanguage
      setLanguage(langFallBack)
    } else {
      /** Funcionalidade:
       * pega o valor do Local Storage
       */
      setLanguage(lang)
    }
  }, [language])

  if (language !== null && language !== '' && language !== undefined) {
    localStorage.setItem('USER_LANG', language)
  }

  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            fontSize='xl'
            fontWeight='normal'
            bg='transparent'
            _hover={{
              bg: 'transparent'
            }}
            color={color}
            rightIcon={<RiGlobalLine />}
          >
            {language.toLowerCase()}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setSelectPtLanguage('pt')}>
              {t('selectLanguage.pt')}
            </MenuItem>
            <MenuItem onClick={() => setSelectEsLanguage('es')}>
              {t('selectLanguage.es')}
            </MenuItem>
            <MenuItem onClick={() => setSelectEnLanguage('en')}>
              {t('selectLanguage.en')}
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
