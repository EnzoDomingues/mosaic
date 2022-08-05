import React, { memo } from 'react'

import { useChangeLanguage } from 'contexts/ChangeLanguage'
import { translate as translateLib } from 'lib/i18n/i18n'

interface ITranslateParam {
  [key: string]: string | number
}

interface ITranslateProps {
  translate: string
  param?: ITranslateParam
}

const TranslateComponent: React.FC<ITranslateProps> = ({
  translate,
  param,
}) => {
  const { selectedLanguage } = useChangeLanguage()

  return <>{translateLib(translate, { ...param, locale: selectedLanguage })}</>
}

export default memo(TranslateComponent)
