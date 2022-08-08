import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import { API, graphqlOperation } from 'aws-amplify'
import TranslateComponent from 'components/Translate/TranslateComponent'
import { IFloorPlanner } from 'screens/Home/HomeScreen'
import { validateEmail, validateName } from 'utils/validateText'

import { createUserFloorPlanner } from '../../graphql/mutations'
import { ChooseFloorPlannerWrapper } from './ChooseFloorPlannerComponent.styles'

interface IChoosedFloorPlan {
  name: string
  email: string
  floorPlanner: string
  otherInfo: string
}

interface IChooseFloorPlannerProps {
  dataFloorPlanners: IFloorPlanner[]
}

const ChooseFloorPlanner: React.FC<IChooseFloorPlannerProps> = ({
  dataFloorPlanners,
}) => {
  const [valueOtherInfo, setValueOtherInfo] = useState('')
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [choosedPlanner, setChoosedPlanner] = useState('')

  const handleChangeOtherInfo = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValueOtherInfo(event.target.value)
  }
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueName(event.target.value)
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueEmail(event.target.value)
  }

  const handleChangeRadio = (planner: IFloorPlanner) => {
    setChoosedPlanner(planner.id)
  }

  const sendChoosedPlan = async () => {
    try {
      const choosedFloorPlanner: IChoosedFloorPlan = {
        name: valueName,
        email: valueEmail,
        floorPlanner: choosedPlanner,
        otherInfo: valueOtherInfo,
      }
      await API.graphql(
        graphqlOperation(createUserFloorPlanner, {
          input: choosedFloorPlanner,
        }),
      )
      setValueOtherInfo('')
      setValueName('')
      setValueEmail('')
      setChoosedPlanner('')
      console.log('delivered')
    } catch (err) {
      console.log('error sending floor planner:', err)
    }
  }

  return (
    <ChooseFloorPlannerWrapper>
      <div className="chooseFloorPlanner__wrapper">
        <h2>
          <TranslateComponent translate="components.chooseFloorPlanner.title" />
        </h2>
        <div className="chooseFloorPlanner__wrapper--items">
          {dataFloorPlanners.map(item => (
            <FormControlLabel
              key={item.id}
              onChange={() => handleChangeRadio(item)}
              value={item.id}
              control={<Radio />}
              label={item.name}
              checked={item.id === choosedPlanner}
            />
          ))}
        </div>
        <div className="chooseFloorPlanner__wrapper--form">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {
                width: '44%',
                marginBottom: '20px',
                marginRight: '15px',
              },
            }}
            autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Name"
              error={!validateName(valueName)}
              value={valueName}
              onChange={handleChangeName}
              helperText={
                !validateName(valueName)
                  ? 'Name must be at least 3 characters'
                  : ''
              }
            />
            <TextField
              required
              error={!validateEmail(valueEmail)}
              id="outlined-required"
              label="Email"
              value={valueEmail}
              onChange={handleChangeEmail}
              helperText={!validateEmail(valueEmail) ? 'Email invalid' : ''}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '90%', marginBottom: '20px' },
            }}
            noValidate
            autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              label="Other information"
              multiline
              rows={4}
              value={valueOtherInfo}
              onChange={handleChangeOtherInfo}
              defaultValue="Default Value"
            />
          </Box>
        </div>
        <div className="chooseFloorPlanner__wrapper--btn">
          <Button
            variant="contained"
            onClick={() => sendChoosedPlan()}
            disabled={!validateEmail(valueEmail) || !validateName(valueName)}>
            <TranslateComponent translate="components.chooseFloorPlanner.button" />
          </Button>
        </div>
      </div>
    </ChooseFloorPlannerWrapper>
  )
}
export default ChooseFloorPlanner
