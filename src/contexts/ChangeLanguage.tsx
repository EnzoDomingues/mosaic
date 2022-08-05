import React from 'react'

const ChangeLanguageContext = React.createContext({
  selectedLanguage: 'en-US' as string,
  setSelectedLanguage: (() => {}) as (language: string) => void,
})

export const ChangeLanguageProvider = ({ children }: { children: any }) => {
  const [language, setLanguage] = React.useState<string>('en-US')

  return (
    <ChangeLanguageContext.Provider
      value={{
        selectedLanguage: language,
        setSelectedLanguage: setLanguage,
      }}>
      {children}
    </ChangeLanguageContext.Provider>
  )
}

export function useChangeLanguage() {
  return React.useContext(ChangeLanguageContext)
}
