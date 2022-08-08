import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import { API, graphqlOperation } from 'aws-amplify'
import ChooseFloorPlanner from 'components/ChooseFloorPlanner/ChooseFloorPlannerComponent'
import Header from 'components/Header/HeaderComponent'
import ListFloorPlanners from 'components/ListFloorPlanners/ListFloorPlannersComponent'
import TranslateComponent from 'components/Translate/TranslateComponent'
import { Wrapper } from 'theme/global.styles'

import { createFloorPlanner } from '../../graphql/mutations'
import { listFloorPlanners } from '../../graphql/queries'
import { ButtonWrapper } from './HomeScreen.styles'

export interface IFloorPlanner {
  id: string
  name: string
  photo: string
  description: string
  createdAt: string
  updatedAt: string
}

const HomeScreen: React.FC = () => {
  const [floorPlanners, setFloorPlanners] = useState<IFloorPlanner[]>([])

  const addFloorPlanner = async () => {
    try {
      const floorPlanner = {
        name: 'Floor Planner 11',
        photo: 'https://floor-planners.s3.amazonaws.com/floor10.jpeg',
        description: '4 bed, 2 bath • 2,300 sq. ft.',
      }
      await API.graphql(
        graphqlOperation(createFloorPlanner, { input: floorPlanner }),
      )
      console.log('done')
    } catch (err) {
      console.log('error creating floor planner:', err)
    }
  }

  const fetchFloorPlanner = async () => {
    try {
      const floorData: any = await API.graphql(
        graphqlOperation(listFloorPlanners),
      )

      if (floorData) {
        const sortFloorData = floorData?.data?.listFloorPlanners?.items.sort(
          (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date },
          ) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        setFloorPlanners(sortFloorData)
      }
    } catch (err) {
      console.log('error fetching floor planner')
    }
  }

  useEffect(() => {
    fetchFloorPlanner()
  }, [])

  return (
    <Wrapper>
      <Header title="components.header.title" />
      <ListFloorPlanners dataFloorPlanners={floorPlanners} />
      <ButtonWrapper>
        <Button onClick={() => addFloorPlanner()} variant="contained">
          <TranslateComponent translate="home.addItem" />
        </Button>
      </ButtonWrapper>
      <ChooseFloorPlanner dataFloorPlanners={floorPlanners} />
    </Wrapper>
  )
}

export default HomeScreen
