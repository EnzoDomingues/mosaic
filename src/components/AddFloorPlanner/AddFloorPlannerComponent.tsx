import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import TranslateComponent from 'components/Translate/TranslateComponent'

import { AddFloorPlannerWrapper } from './AddFloorPlanner.styles'

export interface IAddNewItem {
  name: string
  photo: string
  description: string
}

interface IAddFloorPlannerProps {
  addNewItem: ({ name, photo, description }: IAddNewItem) => void
}

const AddFloorPlanner: React.FC<IAddFloorPlannerProps> = ({ addNewItem }) => {
  const [valueName, setValueName] = useState('')
  const [valuePhoto, setValuePhoto] = useState('')
  const [valueDescription, setValueDescription] = useState('')

  const handleChangeOtherInfo = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValueDescription(event.target.value)
  }
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueName(event.target.value)
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePhoto(event.target.value)
  }

  return (
    <AddFloorPlannerWrapper>
      <div>
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
            value={valueName}
            onChange={handleChangeName}
          />
          <TextField
            required
            id="outlined-required"
            label="Photo Link"
            value={valuePhoto}
            onChange={handleChangeEmail}
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
            label="Description"
            multiline
            rows={4}
            value={valueDescription}
            onChange={handleChangeOtherInfo}
          />
        </Box>
        <div className="chooseFloorPlanner__wrapper--btn">
          <Button
            variant="contained"
            onClick={() =>
              addNewItem({
                name: valueName,
                photo: valuePhoto,
                description: valueDescription,
              })
            }>
            <TranslateComponent translate="components.chooseFloorPlanner.button" />
          </Button>
        </div>
      </div>
    </AddFloorPlannerWrapper>
  )
}
export default AddFloorPlanner
