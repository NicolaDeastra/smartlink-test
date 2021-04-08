import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '@src/store/store'
import theme from '@src/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
