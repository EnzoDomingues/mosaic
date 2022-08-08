export const lightTheme = {
  typography: {
    fontFamily: 'Zilla Slab',
    h1: {
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '61px',
    },
    h2: {
      fontSize: '28px',
      fontWeight: '500',
      lineHeight: '44px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '29px',
    },
    body: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '20px',
    },
  },
  color: {
    neutral: {
      n100: '#21343d',
      n080: '#0E1425',
      n060: '#414851',
      n030: '#979797',
      n020: '#868B90',
      n003: '#f7f6ee',
      n000: '#fff',
    },
    reserved: {
      warning: '#FFCF64',
      error: '#EE8194',
      success: '#66BF7D',
    },
  },
}

export const darkTheme = {
  ...lightTheme.typography,
  color: {
    neutral: {
      n100: '#000619',
      n080: '#020C26',
      n060: '#414851',
      n020: '#868B90',
      n003: '#f7f6ee',
      n000: '#fff',
    },
    reserved: {
      warning: '#FFCF64',
      error: '#EE8194',
    },
  },
}

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}
