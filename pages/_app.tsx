import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import { AnimatePresence } from 'framer-motion'

import { configSEO } from 'next-seo.config'
import { global } from 'styles/global'
import theme from 'styles/theme'

function MyApp ({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...configSEO} />
      <Global styles={global} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}

export default MyApp
