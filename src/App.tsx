import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ChangeLanguageProvider } from 'contexts/ChangeLanguage'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/global.styles'
import { lightTheme } from 'theme/variables'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChangeLanguageProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </ChangeLanguageProvider>
    </ThemeProvider>
  )
}

export default App
