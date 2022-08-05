import React from 'react'

import Header from 'components/Header/HeaderComponent'
import { Wrapper } from 'theme/global.styles'

const HomeScreen: React.FC = () => {
  return (
    <Wrapper>
      <Header title="components.header.title" />
      <h1>testeeee</h1>
    </Wrapper>
  )
}

export default HomeScreen
