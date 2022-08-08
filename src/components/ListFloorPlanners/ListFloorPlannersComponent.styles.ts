/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components'

export const ListFloorPlannersWrapper = styled.div`
  position: relative;
  margin: auto;
  min-height: 100vh;
  max-width: 1440px;

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .listfloorPlanners__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-planner {
      width: 32%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 400px;
        border-radius: 10px;
      }
    }
  }
`
