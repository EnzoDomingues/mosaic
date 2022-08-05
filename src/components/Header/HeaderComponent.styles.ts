/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components'

export const HeaderBG = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #979797;
`
export const HeaderWrapper = styled.div`
  position: relative;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1440px;

  .header-row {
    display: flex;
    align-items: center;
    &__infos {
      width: 80%;
      margin-left: 50px;
    }

    &__logo {
      width: 150px;
      padding-left: 10px;
      img {
        width: 130px;
      }
    }
  }

  .header-buttons {
    display: flex;
    align-items: center;
    button {
      display: block;
      width: 70px;
      background-color: transparent;
    }
  }
`
