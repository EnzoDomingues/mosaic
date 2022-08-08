import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as BRIcon } from 'assets/img/icon-br.svg'
import { ReactComponent as USAIcon } from 'assets/img/icon-usa.svg'
import { ReactComponent as MosaicIcon } from 'assets/img/logo.svg'
import TranslateComponent from 'components/Translate/TranslateComponent'
import { useChangeLanguage } from 'contexts/ChangeLanguage'

import { HeaderBG, HeaderWrapper } from './HeaderComponent.styles'

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const { setSelectedLanguage } = useChangeLanguage()

  return (
    <HeaderBG>
      <HeaderWrapper>
        <div className="header-row">
          <div className="header-row__logo">
            <MosaicIcon />
          </div>
          <div className="header-row__infos">
            <h1>
              <TranslateComponent translate={title} />
            </h1>
          </div>
        </div>
        <div className="header-buttons">
          <Link to={'add-item'}>Add item </Link>
          <button onClick={() => setSelectedLanguage('en-US')}>
            <USAIcon width={50} height={50} />
          </button>
          <button onClick={() => setSelectedLanguage('pt-BR')}>
            <BRIcon width={65} height={65} />
          </button>
        </div>
      </HeaderWrapper>
    </HeaderBG>
  )
}
export default Header
