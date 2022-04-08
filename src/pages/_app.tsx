import { ChakraProvider } from '@chakra-ui/react'
import i18next from 'i18next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { SidebarDrawerProvider } from '../hooks/SidebarDrawerContext'
import theme from '../styles/theme'
import en from '../translations/en/global.json'
import es from '../translations/es/global.json'
import pt from '../translations/pt/global.json'

function selectLangFromLocalStorage() {
  if (typeof window !== 'undefined') {
    const lang = localStorage.getItem('USER_LANG')

    return lang
  }

  return null
}

function getLanguageFromBrowser() {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language
    const browserLanguage = browserLang.split('-')

    return browserLanguage[0]
  }

  return undefined
}

i18next.init({
  interpolation: { escapeValue: false },
  // lng: selectLangFromLocalStorage(),
  fallbackLng:
    selectLangFromLocalStorage() !== 'es'
      && selectLangFromLocalStorage() !== 'pt'
      && selectLangFromLocalStorage() !== 'en'
      && getLanguageFromBrowser() !== 'es'
      && getLanguageFromBrowser() !== 'pt'
      && getLanguageFromBrowser() !== 'en'
      ? 'pt'
      : getLanguageFromBrowser(),
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    },
    pt: {
      global: pt
    }
  }
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <I18nextProvider i18n={i18next}>
            {router.pathname === '/' ? null : <Header />}
            {router.pathname === '/' ? null : <Sidebar />}
            <Component {...pageProps} />
          </I18nextProvider>
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
