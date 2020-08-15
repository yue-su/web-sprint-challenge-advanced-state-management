import React from 'react'
import {Box, Typography, Grid} from '@material-ui/core'
import CardList from './CardList'
import SmurfForm from './SmurfForm'

const App = () => {
  return (
    <Box>
      <Box my={5}>
        <Typography variant='h2' align='center'>Smurfs Village</Typography>
      </Box>
      <Box mx={8}>
        <Grid container>
          <Grid item xs={6}>
            <CardList />
          </Grid>
          <Grid item xs={6}>
            <SmurfForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
