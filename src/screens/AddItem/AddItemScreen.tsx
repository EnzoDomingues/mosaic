import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API, graphqlOperation } from 'aws-amplify'
import AddFloorPlanner, {
  IAddNewItem,
} from 'components/AddFloorPlanner/AddFloorPlannerComponent'
import Header from 'components/Header/HeaderComponent'
import { Wrapper } from 'theme/global.styles'

import { createFloorPlanner } from '../../graphql/mutations'

export interface IFloorPlanner {
  id: string
  name: string
  photo: string
  description: string
  createdAt: string
  updatedAt: string
}

const AddItemScreen: React.FC = () => {
  const navigate = useNavigate()
  const [floorPlanners, setFloorPlanners] = useState<IFloorPlanner[]>([])

  const addFloorPlanner = useCallback(
    async ({ name, photo, description }: IAddNewItem) => {
      try {
        const floorPlanner = {
          name,
          photo,
          description,
        }
        console.log('floorPlanner', floorPlanner)

        const res: any = await API.graphql(
          graphqlOperation(createFloorPlanner, { input: floorPlanner }),
        )

        setFloorPlanners([...floorPlanners, res?.data?.createFloorPlanner])
        navigate('/', { replace: true })
        console.log('done')
      } catch (err) {
        console.log('error creating floor planner:', err)
      }
    },
    [floorPlanners],
  )

  return (
    <Wrapper>
      <Header title="components.header.title" />
      <AddFloorPlanner
        addNewItem={({ name, photo, description }) =>
          addFloorPlanner({ name, photo, description })
        }
      />
    </Wrapper>
  )
}

export default AddItemScreen
