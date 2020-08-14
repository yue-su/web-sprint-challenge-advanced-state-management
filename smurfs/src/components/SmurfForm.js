  
import React, { useState } from "react"
import { Box, TextField, Button } from '@material-ui/core'
import { v4 as uuidv4 } from "uuid"
import { useDispatch } from 'react-redux'
import { postList } from '../actions'

const initialValue = {
    name: '',
    age: '',
    height: '',
    id:''
}

const SmurfForm = () => {

    const [smurf, setSmurf] = useState(initialValue)

    const dispatch = useDispatch()

    const updateHandler = event => {
        const { name, value } = event.target
        setSmurf({
            ...smurf,
            [name]:value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        dispatch(postList({
            ...smurf,
            id:uuidv4()
        }))
        setSmurf(initialValue)
    }

    return (
      <form onSubmit={submitHandler}>
            <Box
                mx={3}
          display="flex"
          flexDirection="column"
          width="100%"
          height="300px"
          justifyContent="space-around"
        >
          <TextField
            name="name"
            value={smurf.name}
            onChange={updateHandler}
            label="Name"
            variant="outlined"
          ></TextField>
          <TextField
            name="age"
            value={smurf.age}
            onChange={updateHandler}
            label="Age"
            variant="outlined"
          ></TextField>
          <TextField
            name="height"
            value={smurf.height}
            onChange={updateHandler}
            label="Height"
            variant="outlined"
          ></TextField>
          <Button onClick={submitHandler} variant="contained" color="primary">
            Add
          </Button>
        </Box>
      </form>
    )
}

export default SmurfForm
