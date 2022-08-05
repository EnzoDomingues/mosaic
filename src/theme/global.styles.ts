/* eslint-disable @typescript-eslint/indent */
import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Zilla Slab', sans-serif;
    font-weight: normal;
  }

  body {
    background: #fff;
  }

  body, input, button {
    font-size: 16px;
    font-weight: 300;
  }

  button, input {
    border: none;
  } 

  .no-overflow {
    overflow: hidden;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.n003};
  h1 {
    ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.color.neutral.n100};
  }
  h2 {
    ${({ theme }) => theme.typography.h2};
  }
  h3 {
    ${({ theme }) => theme.typography.h3};
  }
  .body {
    ${({ theme }) => theme.typography.body};
  }
`
