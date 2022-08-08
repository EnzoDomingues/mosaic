/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components'

export const ChooseFloorPlannerWrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 1400px;
  padding-bottom: 100px;

  h2 {
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .chooseFloorPlanner__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 50%;
      margin-bottom: 30px;
    }

    &--form {
      width: 50%;
    }

    &--btn {
      width: 40%;
      display: flex;
      justify-content: flex-end;
    }
  }
`
