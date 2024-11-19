import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme.tsx'
import { CounterContextProvider } from './context/CounterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
