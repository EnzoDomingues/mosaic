import React from 'react'

import TranslateComponent from 'components/Translate/TranslateComponent'
import { IFloorPlanner } from 'screens/Home/HomeScreen'

import { ListFloorPlannersWrapper } from './ListFloorPlannersComponent.styles'

interface IListFloorPlannersProps {
  dataFloorPlanners: IFloorPlanner[]
}

const ListFloorPlanners: React.FC<IListFloorPlannersProps> = ({
  dataFloorPlanners,
}) => {
  return (
    <ListFloorPlannersWrapper>
      <h2>
        <TranslateComponent translate="components.listFloorPlanner.title" />
      </h2>
      <div className="listfloorPlanners__items">
        {dataFloorPlanners.map(item => (
          <div className="listfloorPlanners__items-planner" key={item.id}>
            <img src={item.photo} />
            <h3>{item.name}</h3>
            <p className="body">{item.description}</p>
          </div>
        ))}
      </div>
    </ListFloorPlannersWrapper>
  )
}
export default ListFloorPlanners
